#!/usr/bin/env bash
# Build locally → ship to gda-s01:/var/www/flowstep with atomic symlink swap.
# Usage: ./infra/deploy/deploy.sh [--skip-build] [--seed]
#
# Server layout:
#   /var/www/flowstep/
#     releases/<sha>/         ← rsync target
#     current → releases/<sha>/   ← atomic symlink (PM2 cwd, Nginx root)
#     shared/
#       .env                  ← PAYLOAD_SECRET, DATABASE_URI, SMTP_*
#       logs/
#       media/                ← Payload uploads (symlinked into release)
set -euo pipefail

REMOTE="${REMOTE:-gda-s01}"
TARGET_DIR="${TARGET_DIR:-/var/www/flowstep}"
APP_NAME="flowstep-cms"
SKIP_BUILD=0
RUN_SEED=0
for arg in "$@"; do
  case "$arg" in
    --skip-build) SKIP_BUILD=1 ;;
    --seed) RUN_SEED=1 ;;
    *) echo "Unknown arg: $arg"; exit 2 ;;
  esac
done

cd "$(dirname "$0")/../.."
REPO_ROOT="$(pwd)"
SHA="$(git rev-parse --short HEAD 2>/dev/null || echo "manual-$(date +%Y%m%d%H%M%S)")"
RELEASE="$TARGET_DIR/releases/$SHA"

echo "▶ Deploy $SHA → $REMOTE:$RELEASE"

if [[ "$SKIP_BUILD" -eq 0 ]]; then
  echo "▶ Building locally"
  pnpm install --frozen-lockfile=false
  pnpm --filter @flowstep/web build
  # CMS is shipped as TS — built on the server, where its env is available.
fi

ssh "$REMOTE" "mkdir -p $RELEASE $TARGET_DIR/shared/{logs,media}"

echo "▶ Rsyncing payload"
RSYNC_FLAGS=(
  -az --delete
  --exclude='.git'
  --exclude='node_modules'
  --exclude='references'
  --exclude='packages/web/node_modules'
  --exclude='packages/cms/node_modules'
  --exclude='packages/cms/dist'
  --exclude='packages/cms/build'
  --exclude='packages/cms/media'
  --exclude='**/.DS_Store'
  --exclude='**/*.log'
)
rsync "${RSYNC_FLAGS[@]}" \
  package.json pnpm-workspace.yaml pnpm-lock.yaml .npmrc ecosystem.config.cjs \
  packages/ infra/ \
  "$REMOTE:$RELEASE/"

# Ship the already-built web dist
rsync -az --delete packages/web/dist/ "$REMOTE:$RELEASE/packages/web/dist/"

echo "▶ Installing prod deps + building CMS on server"
ssh "$REMOTE" bash -se <<EOF
set -euo pipefail
cd "$RELEASE"

# Symlink shared resources into the release
ln -sfn "$TARGET_DIR/shared/.env" "packages/cms/.env"
ln -sfn "$TARGET_DIR/shared/media" "packages/cms/media"

pnpm install --prod=false --frozen-lockfile=false
pnpm --filter @flowstep/cms build

# Atomic symlink swap
ln -sfn "$RELEASE" "$TARGET_DIR/current.new"
mv -Tf "$TARGET_DIR/current.new" "$TARGET_DIR/current"
EOF

if [[ "$RUN_SEED" -eq 1 ]]; then
  echo "▶ Running seed (idempotent)"
  ssh "$REMOTE" "cd $TARGET_DIR/current && pnpm --filter @flowstep/cms seed"
fi

echo "▶ (Re)starting PM2 app"
ssh "$REMOTE" bash -se <<EOF
set -euo pipefail
cd "$TARGET_DIR/current"
if pm2 describe "$APP_NAME" >/dev/null 2>&1; then
  pm2 reload "$APP_NAME" --update-env
else
  pm2 start ecosystem.config.cjs
  pm2 save
fi
EOF

echo "▶ Reloading Nginx"
ssh "$REMOTE" "sudo nginx -t && sudo nginx -s reload"

echo "▶ Pruning old releases (keep last 5)"
ssh "$REMOTE" "ls -1dt $TARGET_DIR/releases/*/ | tail -n +6 | xargs -r rm -rf"

echo "✓ Deployed $SHA"

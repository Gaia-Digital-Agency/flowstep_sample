#!/usr/bin/env bash
# Deploy Flowstep to gda-s01:/var/www/flowstep — flat git checkout, matches
# the rest of the fleet (rhproperties, christos, essentialbali, etc.).
#
# Usage:
#   ./infra/deploy/deploy.sh         # pull + build + reload
#   ./infra/deploy/deploy.sh --seed  # also run the idempotent seed
set -euo pipefail

REMOTE="${REMOTE:-gda-s01}"
TARGET="${TARGET:-/var/www/flowstep}"
APP="flowstep-cms"
SEED=0
[ "${1:-}" = "--seed" ] && SEED=1

ssh "$REMOTE" bash -se <<EOF
set -euo pipefail
cd "$TARGET"

git fetch --quiet origin main
git reset --hard origin/main

pnpm install --frozen-lockfile=false 2>&1 | tail -3

# Web is static — Nginx serves dist/ directly.
pnpm --filter @flowstep/web build 2>&1 | tail -3

# Backend admin bundle bakes serverURL at build time, so source .env first.
set -a; . packages/cms/.env; set +a
pnpm --filter @flowstep/cms build 2>&1 | tail -3

# Apply any new migrations (write them by hand — see README ops note).
( cd packages/cms && PAYLOAD_CONFIG_PATH=src/payload.config.ts ./node_modules/.bin/payload migrate 2>&1 | tail -3 ) || true

if [ $SEED -eq 1 ]; then
  pnpm --filter @flowstep/cms seed 2>&1 | tail -10
fi

pm2 reload "$APP" --update-env

echo "✓ deploy complete (\$(git rev-parse --short HEAD))"
EOF

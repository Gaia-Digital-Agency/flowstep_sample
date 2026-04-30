#!/usr/bin/env bash
# Run on gda-s01 via cron. Dumps Postgres + tarballs media uploads.
# Retains the last 14 daily snapshots locally; older ones are pruned.
#
# Install:
#   sudo cp infra/backup/backup.sh /usr/local/bin/flowstep-backup
#   sudo chmod +x /usr/local/bin/flowstep-backup
#   echo "30 2 * * * azlan /usr/local/bin/flowstep-backup >> /var/log/flowstep-backup.log 2>&1" | sudo tee /etc/cron.d/flowstep-backup
set -euo pipefail

ENV_FILE="${ENV_FILE:-/var/www/flowstep/shared/.env}"
DEST="${DEST:-/var/backups/flowstep}"
RETAIN_DAYS="${RETAIN_DAYS:-14}"
TS="$(date -u +%Y%m%d-%H%M%S)"

mkdir -p "$DEST"
cd "$DEST"

# Source DB password out of .env without leaking it to logs
DB_URI="$(grep -E '^DATABASE_URI=' "$ENV_FILE" | cut -d= -f2-)"
[ -n "$DB_URI" ] || { echo "DATABASE_URI missing in $ENV_FILE"; exit 1; }

echo "[$(date -u)] Dumping Postgres → flowstep-db-$TS.sql.gz"
PGCONNECT_TIMEOUT=10 pg_dump --format=custom --no-owner --no-acl "$DB_URI" \
  | gzip -c > "flowstep-db-$TS.dump.gz.tmp"
mv "flowstep-db-$TS.dump.gz.tmp" "flowstep-db-$TS.dump.gz"

MEDIA_DIR="/var/www/flowstep/shared/media"
if [ -d "$MEDIA_DIR" ]; then
  echo "[$(date -u)] Tarring media → flowstep-media-$TS.tar.gz"
  tar -czf "flowstep-media-$TS.tar.gz.tmp" -C "$(dirname "$MEDIA_DIR")" "$(basename "$MEDIA_DIR")"
  mv "flowstep-media-$TS.tar.gz.tmp" "flowstep-media-$TS.tar.gz"
fi

echo "[$(date -u)] Pruning artifacts older than $RETAIN_DAYS days"
find "$DEST" -maxdepth 1 -name "flowstep-*" -type f -mtime "+$RETAIN_DAYS" -delete

# Optional: ship to GCS if `gsutil` and a bucket are configured.
if [ -n "${BACKUP_BUCKET:-}" ] && command -v gsutil >/dev/null 2>&1; then
  echo "[$(date -u)] Uploading to gs://$BACKUP_BUCKET/flowstep/"
  gsutil -q cp "flowstep-db-$TS.dump.gz" "gs://$BACKUP_BUCKET/flowstep/db/" || echo "  gsutil db upload failed"
  [ -f "flowstep-media-$TS.tar.gz" ] && gsutil -q cp "flowstep-media-$TS.tar.gz" "gs://$BACKUP_BUCKET/flowstep/media/" || true
fi

echo "[$(date -u)] Done."

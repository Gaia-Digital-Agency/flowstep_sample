# Flowstep — Gaia AI Prompt Test Site

Marketing website for **Gaia AI** (restaurant & food vertical). 5 pages: Home, About, Services, Branches (with Branch 1/2/3 detail), Menu, Contact.

- **Stack**: Postgres 18 + Payload CMS v3 + Vite + React 19 + Tailwind v4 + Node 20 (PVRTN)
- **Production**: <https://flowstep.gaiada.online>
- **Server**: `gda-s01` (Ubuntu 24.04, Nginx + PM2)
- **Path on server**: `/var/www/flowstep` (releases dir + `current` symlink)

## Layout

```
packages/
  web/          Vite + React SPA — static, served by Nginx from dist/
  cms/          Payload v3 admin + REST/GraphQL API — Node, PM2 app `flowstep-cms`
infra/
  nginx/        flowstep.gaiada.online server block
  postgres/     init.sql (db + role)
  deploy/       deploy.sh — local → gda-s01
ecosystem.config.cjs   PM2 config (cms only; web is static)
references/   original Figma Make exports + brief
```

## Local dev

```bash
pnpm install
cp packages/cms/.env.example packages/cms/.env   # set DATABASE_URI + PAYLOAD_SECRET
pnpm dev                                         # cms :3030, web :5173
```

Web dev server proxies `/api` and `/admin` to the cms.

## Build

```bash
pnpm build       # → packages/web/dist + packages/cms/dist
```

## Deploy

```bash
pnpm deploy      # builds locally, rsyncs to gda-s01:/var/www/flowstep, swaps symlink, reloads
```

See `infra/deploy/deploy.sh` for the full release flow (atomic symlink, last-5 retention, `pm2 reload flowstep-cms`, `nginx -s reload`).

## Repo

Pushes to `git@github.com-gaiada:Gaia-Digital-Agency/flowstep_sample.git`.

## Ops

- **Logs**: `pm2 logs flowstep-cms` on `gda-s01`. PM2 also writes to `/var/www/flowstep/shared/logs/cms.{out,err}.log`.
- **DB**: Postgres 18 on `gda-s01`, role `flowstep`, DB `flowstep`, password in `/var/www/flowstep/shared/.env`.
- **Migrations**: Payload uses drizzle. To apply schema changes after editing collections:
  ```bash
  ssh gda-s01 'cd /var/www/flowstep/current/packages/cms && set -a && source .env && set +a && PAYLOAD_CONFIG_PATH=src/payload.config.ts ./node_modules/.bin/payload migrate:create --skip-empty && PAYLOAD_CONFIG_PATH=src/payload.config.ts ./node_modules/.bin/payload migrate'
  ```
- **Backups**: `infra/backup/backup.sh` — installable as a daily cron, optionally pushes to GCS via `BACKUP_BUCKET`.
- **CI/CD**: `.github/workflows/deploy.yml` — push to `main` redeploys. Requires repo secret `GDA_S01_SSH_KEY` (the matching private key for the `azlan@gda-s01` deploy login).
- **TLS**: certbot auto-renews via systemd timer (`systemctl status certbot.timer`).

## Known limitations (v1 → v2)

- **Lighthouse Performance: 81** (target 90+). LCP ~4s is the SPA hydration tax. To close the gap we need SSR (Vite SSR or Astro). All other categories are at 95+ (a11y), 100 (best practices), 100 (SEO).
- **Pages, MenuItems, Branches detail content** is currently hardcoded in the route components. Wire through to Payload collections (already modelled) in v2.
- **SMTP** for contact-form notifications is unconfigured. Submissions land in `contact_submissions` regardless; set `SMTP_HOST/USER/PASS` in `/var/www/flowstep/shared/.env` to enable email.
- **No automated backups yet** — backup.sh is in the repo but not installed on cron. Run the install snippet at the top of the script when ready.

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

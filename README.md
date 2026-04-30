# Flowstep — Gaia AI Prompt Test Site

Marketing website for **Gaia AI** (restaurant & food vertical). 6 routes: Home, About, Services, Branches (+ `/branches/:slug`), Menu, Contact.

- **Production**: <https://flowstep.gaiada.online>
- **Admin**: <https://flowstep.gaiada.online/admin>
- **Server**: `gda-s01` (Ubuntu 24.04, Nginx + PM2)
- **Path on server**: `/var/www/flowstep` (flat git checkout)

## Stack

| Layer | Tech |
|---|---|
| Frontend | Vite 7 · React 19 · React Router 7 · Tailwind v4 · shadcn/ui (Radix) · TypeScript 5.9 |
| Backend | Payload CMS v2.32 (Express host) · Postgres 18 (drizzle adapter) · Node 20 |
| Auth | Payload built-in (JWT cookies) |
| Build | pnpm 10 workspaces · tsc + Vite (web) · webpack admin bundle + tsc (cms) |
| Deploy | Flat git checkout · PM2 · Nginx · Let's Encrypt |

## Repo structure

```
.
├── README.md
├── ecosystem.config.cjs        PM2 — single app `flowstep-cms` on :3030
├── package.json                workspace root
├── pnpm-workspace.yaml         declares packages/*
├── docs/
│   └── build-process.md        84-step trace of how the site was built
├── infra/
│   ├── backup/backup.sh        nightly pg_dump + media tarball + GCS push
│   ├── deploy/deploy.sh        git pull + build + pm2 reload
│   ├── nginx/                  reference vhost (live config in /etc/nginx)
│   └── postgres/init.sql       db + role bootstrap
├── packages/
│   ├── cms/                    Payload v2 + Postgres
│   │   ├── .env.example
│   │   ├── package.json
│   │   ├── tsconfig.json
│   │   └── src/
│   │       ├── server.ts                Express + payload.init + /api/contact + /healthz
│   │       ├── payload.config.ts        collections, db, admin, CORS
│   │       ├── seed.ts                  super_admin user + branches + faqs + menu items
│   │       ├── collections/
│   │       │   ├── Users.ts
│   │       │   ├── Media.ts
│   │       │   ├── Branches.ts
│   │       │   ├── MenuItems.ts
│   │       │   ├── FAQs.ts
│   │       │   └── ContactSubmissions.ts
│   │       └── endpoints/contact.ts     zod validate + persist + optional SMTP
│   └── web/                    Vite + React SPA (static, served by Nginx)
│       ├── index.html
│       ├── package.json
│       ├── tsconfig*.json
│       ├── vite.config.ts
│       ├── public/             favicon, robots.txt, sitemap.xml
│       └── src/
│           ├── main.tsx
│           ├── App.tsx                  router + lazy routes + Suspense
│           ├── index.css                Tailwind v4 + @theme tokens
│           ├── components/
│           │   ├── layout/{SiteHeader,SiteFooter}.tsx
│           │   └── ui/                  shadcn primitives
│           ├── hooks/
│           │   ├── usePageMeta.ts       per-route title/meta/JSON-LD
│           │   └── useCms.ts            SWR-style fetch + cache
│           ├── lib/utils.ts
│           └── routes/                  one file per page
└── references/                 brief + project doc PDF
```

## Current app state

- **CMS-driven** (edit at `/admin` → frontend reflects on next page load):
  - `BranchesPage` list + `BranchDetailPage` ← `branches` collection
  - `MenuPage` (with category filter + Schema.org `Menu` JSON-LD) ← `menu-items` collection
  - `ServicesPage` FAQ accordion ← `faqs` collection
  - Contact form submissions land in `contact-submissions` collection
- **Static** (hardcoded in route components):
  - HomePage, AboutPage, ServicesPage hero + section copy
  - Header nav, footer social URLs, contact form labels

## Local dev

```bash
pnpm install
cp packages/cms/.env.example packages/cms/.env   # set DATABASE_URI + PAYLOAD_SECRET
pnpm dev                                         # cms :3030, web :5173
```

Web dev server proxies `/api` and `/admin` to the cms.

## Build

```bash
pnpm build       # → packages/web/dist + packages/cms/dist + packages/cms/build
```

## Deploy

```bash
bash infra/deploy/deploy.sh           # git pull + install + build + pm2 reload
bash infra/deploy/deploy.sh --seed    # also re-runs the idempotent seeder
```

The script SSHes to `gda-s01` and runs everything there. The server is a flat git checkout at `/var/www/flowstep`, identical pattern to `rhproperties`, `christos`, `essentialbali`.

## Server layout

```
/var/www/flowstep/                     ← flat git checkout
├── .git/
├── ecosystem.config.cjs
├── infra/, docs/, references/
├── logs/                              ← PM2 logs
├── node_modules/
├── package.json, pnpm-workspace.yaml, pnpm-lock.yaml
└── packages/
    ├── cms/
    │   ├── .env                       ← server-only (gitignored), mode 600
    │   ├── build/                     ← webpack admin bundle (~4 MB, served at /admin)
    │   ├── dist/                      ← compiled server JS (PM2 runs this)
    │   ├── media/                     ← Payload uploads
    │   └── src/
    └── web/
        └── dist/                      ← Nginx serves this directly
```

## Ops

- **Logs**: `pm2 logs flowstep-cms` (or tail `/var/www/flowstep/logs/cms.{out,err}.log`)
- **DB**: Postgres on `127.0.0.1:5432`, role `flowstep`, DB `flowstep`, password in `/var/www/flowstep/packages/cms/.env`
- **Migrations** (Payload v2 + drizzle):
  - **New collection** (table doesn't exist) → `payload migrate:create --skip-empty && payload migrate`
  - **New COLUMN on existing collection** → write the `ALTER TABLE` yourself first (`migrate:create` emits `CREATE TABLE IF NOT EXISTS` which is a no-op for existing tables)
- **Backups**: `infra/backup/backup.sh` — install snippet in script header (not yet on cron)
- **CI/CD**: `.github/workflows/deploy.yml` — push to `main` triggers deploy. Requires repo secret `GDA_S01_SSH_KEY`.
- **TLS**: certbot auto-renews via `systemctl status certbot.timer`

## Known limitations

- **Lighthouse Performance: 81** (target 90+). LCP ~4 s is the SPA hydration tax. Closing the gap needs SSR (Vite SSR or Astro). Other Lighthouse scores: A11y 95, Best Practices 100, SEO 100.
- **HomePage/AboutPage/ServicesPage hero copy** is hardcoded. Wiring them through Payload Blocks would be the v2 build.
- **SMTP** for contact-form notifications is unconfigured. Submissions persist regardless; set `SMTP_HOST/USER/PASS` in `packages/cms/.env` to enable email.
- **`backup.sh` is not yet on cron**. Run the install snippet from the script header when ready.

## Repo

Pushes to `git@github.com-gaiada:Gaia-Digital-Agency/flowstep_sample.git`.
See `docs/build-process.md` for the linear 84-step build history.

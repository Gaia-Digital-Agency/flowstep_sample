# Flowstep — Build Process

The actual sequence of actions that produced the live site at https://flowstep.gaiada.online. Reverted/wrong attempts are excluded.

## Recon

1. Confirm SSH access to `gda-s01` works (azlan@34.124.244.233).
2. Confirm GitHub SSH alias `github.com-gaiada` authenticates against the empty `Gaia-Digital-Agency/flowstep_sample` repo.
3. Capture server stack: Node 20.20.1, pnpm 10.29.1, PM2 6.0.14, Nginx 1.24, Postgres 18.3, certbot 2.9.0, rsync 3.2.7.
4. Verify DNS: `flowstep.gaiada.online` → `34.124.244.233` (gda-s01 public IP).
5. Note fleet convention from existing sites: flat git checkout at `/var/www/<site>/`, PM2 `<site>-cms`, vhost server blocks appended to `subdomains.gaiada.online`.

## Repo bootstrap (local)

6. `git init -b main` in `/Users/rogerwoolie/Downloads/flowstep_sample`.
7. Add `.gitignore` (node_modules, dist, build, .env, .DS_Store, generated migrations).
8. Add `.npmrc` (auto-install-peers).
9. Add `pnpm-workspace.yaml` declaring `packages/*`.
10. Write root `package.json` — pnpm scripts: `dev`, `build`, `dev:cms`, `dev:web`, `start:cms`, `deploy`.
11. Write top-level `README.md` with stack + run/build/deploy.
12. Add remote `origin git@github.com-gaiada:Gaia-Digital-Agency/flowstep_sample.git`.
13. First commit + push.

## Frontend scaffold (`packages/web`)

14. Scaffold from one of the Figma exports as the baseline (vite.config.ts, tsconfig*, eslint, postcss, components.json).
15. Write `index.html` with Space Grotesk + Playfair Display font links and SEO meta defaults.
16. Write `src/main.tsx` (BrowserRouter + sonner Toaster).
17. Add `public/favicon.svg`, `public/robots.txt`, `public/sitemap.xml`.
18. Add shadcn primitives in `src/components/ui/`: button, card, input, textarea, label, accordion, badge, separator, select, tabs.
19. Extract shared `SiteHeader` and `SiteFooter` into `src/components/layout/`.
20. Write `src/App.tsx` with React Router routes, `ScrollToTop`, `Suspense` fallback.
21. Code-split routes via `React.lazy` (Home stays eager as LCP target).
22. Extract page bodies from the 6 Figma `App.tsx` files into `src/routes/HomePage.tsx`, `AboutPage.tsx`, `ServicesPage.tsx`, `BranchesPage.tsx`, `MenuPage.tsx`, `ContactPage.tsx`.
23. Add `src/routes/BranchDetailPage.tsx` for `/branches/:slug`.
24. Add `src/routes/NotFoundPage.tsx` for the 404.
25. Write `src/hooks/usePageMeta.ts` — sets title, description, canonical, robots, JSON-LD per route via direct DOM mutation.
26. Rewrite `src/index.css` with Tailwind v4 `@theme` tokens (brand/ink/line/bg/accent + font families) — replaces inline hex colors.
27. Wire ContactPage form: `useState` + `handleSubmit` + manual validation, honeypot field, `POST /api/contact`, sonner toast on success/error.

## Backend scaffold (`packages/cms`)

28. Write `packages/cms/package.json` — Payload v2.32, `@payloadcms/db-postgres`, `bundler-webpack`, `richtext-lexical`, express, rate-limit, nodemailer, dotenv, sharp; React 18 pinned (isolated from web's React 19).
29. Write `packages/cms/tsconfig.json` — CommonJS module output (Payload v2 expects CJS).
30. Write `src/payload.config.ts` — `serverURL` defaults to `https://flowstep.gaiada.online` (env-overridable), webpack fallbacks for `url/path/fs/stream/crypto`, `postgresAdapter({ push: true })`, lexical editor, CORS + CSRF allowlist for prod URL + dev ports.
31. Write `src/collections/Users.ts` (auth collection).
32. Write `src/collections/Media.ts` (image uploads with thumbnail/card/hero size variants).
33. Write `src/collections/Branches.ts` (slug, address, city, phone, hours, coordinates, image, imageUrl, gallery, description).
34. Write `src/collections/MenuItems.ts` (slug, category, description, price, currency, image, imageUrl, tags, available).
35. Write `src/collections/FAQs.ts` (question, answer richText, category, order).
36. Write `src/collections/ContactSubmissions.ts` (name, email, phone, message, read, ip, userAgent — public create blocked, server-side `overrideAccess`).
37. Write `src/endpoints/contact.ts` — zod validation, persist to Postgres via `payload.create({ overrideAccess: true })`, optional SMTP via nodemailer.
38. Write `src/server.ts` — Express bootstrap, mounts Payload, `/api/contact` with rate-limit (5/15min), `/healthz`.
39. Write `src/seed.ts` — idempotent: `super_admin@email.com` user, 3 branches, 4 FAQs, 10 menu items.
40. Write `.env.example` documenting `PAYLOAD_SECRET`, `DATABASE_URI`, `PUBLIC_SERVER_URL`, `SMTP_*`, `INITIAL_ADMIN_*`.

## Frontend wires CMS data

41. Write `src/hooks/useCms.ts` — SWR-style fetch hook (no deps), in-memory cache + dedup. Exports types `BranchDoc`, `MenuItemDoc`, `FaqDoc`, `PayloadList<T>`, helper `richTextToPlain`.
42. Wire `BranchesPage` list to `/api/branches?sort=name&limit=20` with extracted `<BranchCard>` component, loading/error/empty states.
43. Wire `BranchDetailPage` to `/api/branches?where[slug][equals]=<slug>&limit=1` with Schema.org `Restaurant` JSON-LD generated from CMS data.
44. Wire `MenuPage` to `/api/menu-items?where[available]=true` with Tabs as state-driven category filter; `<MenuItemCard>` component; Schema.org `Menu`/`MenuSection`/`MenuItem` JSON-LD with `suitableForDiet` + `offers.price`.
45. Wire `ServicesPage` FAQ accordion to `/api/faqs?sort=order` with rich-text answer rendering.

## Infra files (in repo)

46. Write `ecosystem.config.cjs` — single PM2 app `flowstep-cms`, cwd `./packages/cms`, runs `pnpm start`, logs to `/var/www/flowstep/logs/`.
47. Write `infra/nginx/flowstep.gaiada.online.conf` (reference; live config lives in `subdomains.gaiada.online`).
48. Write `infra/postgres/init.sql` — flowstep DB + role bootstrap.
49. Write `infra/deploy/deploy.sh` — `git pull && pnpm install && pnpm build && pm2 reload` (matches fleet convention).
50. Write `infra/backup/backup.sh` — daily `pg_dump` + media tarball, 14-day retention, optional GCS upload via `BACKUP_BUCKET`. Install instructions in script header.
51. Write `.github/workflows/deploy.yml` — push-to-main → install → build → ssh deploy → 8-route smoke test.

## Server provisioning (gda-s01)

52. `sudo chown -R azlan:azlan /var/www/flowstep`.
53. Create Postgres role `flowstep` with random 24-byte hex password.
54. Create Postgres database `flowstep` owned by the `flowstep` role.
55. Generate `PAYLOAD_SECRET` (32-byte random hex).
56. Write `/var/www/flowstep/packages/cms/.env` (mode 600) with `PAYLOAD_SECRET`, `DATABASE_URI`, `PUBLIC_SERVER_URL=https://flowstep.gaiada.online`, `INITIAL_ADMIN_*`.

## First deploy (flat checkout layout — matches fleet)

57. `git clone` (via deploy script) into `/var/www/flowstep/`.
58. `pnpm install` on the server.
59. `pnpm --filter @flowstep/web build` — produces `packages/web/dist/`.
60. Source `packages/cms/.env`, then `pnpm --filter @flowstep/cms build` — produces `packages/cms/build/` (admin webpack bundle, ~4 MB) and `packages/cms/dist/` (compiled server JS, ~48 KB). Sourcing env first ensures `PUBLIC_SERVER_URL` bakes correctly into the admin bundle.
61. `payload migrate:create --skip-empty` then `payload migrate` — creates the 14 tables on the empty DB.
62. `psql -c "ALTER TABLE branches ADD COLUMN IF NOT EXISTS image_url varchar; ALTER TABLE menu_items ADD COLUMN IF NOT EXISTS image_url varchar;"` — Payload v2 migrate doesn't add new columns to existing tables, so manual.
63. `pnpm --filter @flowstep/cms seed` — creates super_admin user + 3 branches + 4 FAQs + 10 menu items.

## Nginx + TLS

64. Append `flowstep.gaiada.online` HTTPS server block to `/etc/nginx/sites-enabled/subdomains.gaiada.online`: `root /var/www/flowstep/packages/web/dist`, proxy `/admin` + `/api/` + `/media/` to `127.0.0.1:3030`, SPA `try_files $uri $uri/ /index.html`, gzip, security headers (X-Content-Type-Options, X-Frame-Options, Referrer-Policy).
65. Move stale `.bak` files out of `/etc/nginx/sites-enabled/` (they were being slurped by nginx and conflicting with active `server_name`s).
66. `sudo nginx -t && sudo systemctl reload nginx`.
67. `sudo certbot --nginx -d flowstep.gaiada.online --non-interactive --agree-tos --email ai@gaiada.com --redirect` — installs cert + HTTP→HTTPS 301, certbot.timer auto-renews.

## PM2

68. `pm2 start ecosystem.config.cjs --only flowstep-cms`.
69. `pm2 save`.

## Smoke tests

70. Verify all 11 web routes return 200 over HTTPS (`/`, `/about`, `/services`, `/branches`, `/branches/branch-1`, `/menu`, `/contact`, `/admin`, `/healthz`, `/sitemap.xml`, `/robots.txt`).
71. Verify CMS APIs return 200 (`/api/branches`, `/api/menu-items`, `/api/faqs`).
72. POST `/api/contact` with sample payload → row appears in `contact_submissions` table.
73. Log in at `/admin` with `super_admin@email.com` / `Teameditor@123` → JWT issued, dashboard renders.
74. Lighthouse on production URL: Performance 81 / Accessibility 95 / Best Practices 100 / SEO 100.

## Cleanup pass (final state of repo)

75. Delete `references/figma-exports/` (27 MB of original Figma source, no longer needed after extraction).
76. Delete `scripts/extract-routes.mjs` (one-shot used during initial extraction).
77. Delete `packages/web/src/CustomComponents.tsx` (Figma stub helpers, all unused).
78. Delete `packages/cms/src/collections/Pages.ts` (modelled but never wired; corresponding import + collections-array entry removed from `payload.config.ts`).
79. Strip ~530 lines of Figma `data-id="..."` attributes from all route components.
80. Strip macOS `.DS_Store` and `._*` AppleDouble sidecar files; ensure `.gitignore` excludes them.
81. Switch all menu/branch image URLs to `?w=600&h=600&fit=crop&crop=entropy` so Unsplash returns square crops that fill `aspect-square` cards cleanly.
82. Remove the Figma "Developer note · SEO" boilerplate Card from MenuPage; replace with real Schema.org `Menu` JSON-LD that the note had falsely claimed existed.
83. Tighten `usePageMeta` to handle `noindex` + JSON-LD lifecycle (cleanup on unmount).
84. Final commit + push.

## Live state

- **Repo**: https://github.com/Gaia-Digital-Agency/flowstep_sample
- **Site**: https://flowstep.gaiada.online
- **Admin**: https://flowstep.gaiada.online/admin (`super_admin@email.com` / `Teameditor@123`)
- **Server layout**: `/var/www/flowstep/` is a flat git checkout — `git pull && pnpm build && pm2 reload flowstep-cms` for any subsequent deploy.

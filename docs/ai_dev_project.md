# Flowstep — How an AI-Native Pipeline Built a Production Website in 5 Hours

**Start**: 9:00 PM GMT+8 · **End**: 2:00 AM GMT+8 · **Total**: ~5 hours · **Human time spent**: small fraction of that — mostly direction, course corrections, and final approvals.

**Live URLs**:
- 🛠 Prompt Builder (Stage 1): https://gaia-digital-agency.github.io/aiprompt_web/
- 🌐 Final site (Stage 4): https://flowstep.gaiada.online/
- 🔐 Admin: https://flowstep.gaiada.online/admin

This is the story of how a marketing site went from "blank server + a prompt" to "live, CMS-driven, HTTPS, Lighthouse-tested" — built ~95% by AI tooling, in one evening, by Gaia Digital Agency.

---

## The four-stage AI pipeline

```
┌─ Stage 1 ─────────┐  ┌─ Stage 2 ────────┐  ┌─ Stage 3 ───────────┐  ┌─ Stage 4 ─────────┐
│ Prompt Builder    │  │ Figma Make        │  │ Claude Code         │  │ Live site         │
│ (static web app)  │→ │ (AI design tool)  │→ │ (Anthropic CLI)     │→ │ + admin + DB      │
│                   │  │                   │  │                     │  │                   │
│ ~52 questions     │  │ generates 6       │  │ consolidates,       │  │ flowstep.gaiada   │
│ → structured      │  │ standalone Vite/  │  │ wires Payload CMS,  │  │ .online           │
│ design prompt     │  │ React TS apps     │  │ deploys, iterates   │  │                   │
└───────────────────┘  └───────────────────┘  └─────────────────────┘  └───────────────────┘
```

### Stage 1 — The Prompt Builder (zero-shot AI)

Source: `/Users/rogerwoolie/Downloads/aiprompt` (live at https://gaia-digital-agency.github.io/aiprompt_web/).

A 1,400-line static HTML/CSS/JS app — itself AI-built — that asks 52 questions across 9 sections (project basics, audience, visual direction, site structure, functionality, tracking, content readiness, technical, output mode) and emits a structured prompt anchored to Gaia's **3PVRTN** stack:

> PostgreSQL · Payload CMS · Python flow scripting · Vite · React · Tailwind · Node

For Flowstep, the answers were:
- Industry: **Restaurant & Food**
- Site type: marketing, 5 pages, top horizontal nav, minimal footer
- Pages (verbatim): Home / About / Services / Branches / Menu (+ Branch 1/2/3 sub-pages)
- Visual: luxury/elegant, soft pastels, terracotta primary, emerald accent, geometric sans
- Must-haves: contact form, FAQ accordion, Schema.org `Product` markup, WCAG 2.2 AA, Lighthouse 90+

The Builder produced a single comprehensive prompt that fits in one Figma Make submission.

**Human time: ~10 minutes filling in the form.**

### Stage 2 — Figma Make (AI design + scaffolding)

The prompt was pasted into Figma Make, which generated **6 separate Vite + React 19 + Tailwind v4 + shadcn/ui projects** — one per page. Each was a self-contained Vite app:

```
references/figma-exports/        ← the raw Figma Make output (later cleaned out)
  Home Page/        ← 656-line App.tsx + own vite.config + own index.html
  About Page/       ← 668 lines
  Services Page/    ← 843 lines
  Branches Page/    ← 775 lines
  Menu Page/        ← 780 lines
  Contact Page/     ← 1,384 lines
```

5,100+ lines of pixel-faithful JSX, all using shadcn primitives, all matching the brief's color palette and typography. Plus 6 PNG mockups of each page.

**Human time: paste prompt, wait, download zip.**

### Stage 3 — Claude Code (consolidation, backend, deploy, iteration)

The 6 disconnected Vite projects landed in this repo's `references/figma-exports/`. Then Claude Code (Opus 4.7, 1M context, running in this terminal) consolidated everything into one production site over ~4 hours of focused work.

**What Claude built:**

| | |
|---|---|
| **Frontend consolidation** | Merged 6 standalone Vite apps into a single pnpm monorepo at `packages/web/`. Extracted shared `SiteHeader` / `SiteFooter` from the duplicated headers. Wired React Router 7 with `Suspense`-based code splitting. Wrote a no-deps `usePageMeta` hook to replace `react-helmet-async` (which doesn't support React 19) for per-route titles, meta descriptions, canonicals, and JSON-LD. Added `BranchDetailPage` for `/branches/:slug` and a `NotFoundPage`. Lifted the Figma's hardcoded hex colors into Tailwind v4 `@theme` tokens. Wired the contact form with honeypot + rate limit + sonner toast feedback. |
| **Backend from scratch** | New `packages/cms/` running Payload CMS v2.32 on Express on `:3030`. Six collections (`Users`, `Media`, `Branches`, `MenuItems`, `FAQs`, `ContactSubmissions`). Postgres adapter via drizzle. Custom `POST /api/contact` endpoint with zod validation. Idempotent `seed.ts` that creates the admin user + 3 branches + 4 FAQs + 10 menu items. CORS + CSRF allowlist. React 18 isolated from the web's React 19. |
| **CMS-driven frontend** | Wrote a small `useCms` SWR-style hook (no extra dep). Wired `BranchesPage`, `BranchDetailPage`, `MenuPage` (with category Tabs as filter), `ServicesPage` FAQ accordion all to fetch from Payload's REST API. Generated Schema.org `Restaurant` + `Menu` JSON-LD from CMS data. |
| **Infra** | PM2 `ecosystem.config.cjs`, Nginx vhost block (appended to existing `subdomains.gaiada.online`), Postgres bootstrap SQL, deploy script, backup script, GitHub Actions CI workflow. |
| **Server provisioning** | Postgres role + DB creation, `PAYLOAD_SECRET` generation, `.env` placement (mode 600), schema migrate, seed run, Nginx vhost integration, `certbot --nginx` for Let's Encrypt + HTTP→HTTPS 301, `pm2 start` + `pm2 save`. |
| **Iteration & cleanup** | A v1.5 pass to wire CMS data to the frontend. A cleanup pass: deleted 27 MB of Figma source after extraction, stripped 530 lines of `data-id="..."` Figma noise, deleted unused `Pages.ts` collection, removed a Figma "Developer note · SEO" boilerplate Card and replaced it with the actual Schema.org JSON-LD it falsely claimed existed. |

**Used `gcloud compute ssh --tunnel-through-iap`** to reach the server when direct SSH was firewalled by the deploy server, bypassing the network restriction entirely.

### Stage 4 — Live site

| | |
|---|---|
| URL | https://flowstep.gaiada.online |
| Admin | https://flowstep.gaiada.online/admin |
| TLS | Let's Encrypt, auto-renewing |
| Lighthouse | Performance **81** · Accessibility **95** · Best Practices **100** · SEO **100** |
| Routes verified | / · /about · /services · /branches · /branches/:slug · /menu · /contact · /admin · /healthz · /sitemap.xml · /robots.txt — all 200 |
| APIs verified | /api/branches · /api/menu-items · /api/faqs · /api/contact — all 200, persistence end-to-end |

---

## What "95% AI" actually means

**AI did:**
- Wrote the 1,400-line Prompt Builder app (Stage 1 — also AI-built)
- Generated all 5,100+ lines of frontend page JSX (Stage 2)
- Wrote 100% of the Payload backend, all collections, the contact endpoint, the seed script (Stage 3)
- Wrote all infra: PM2 config, Nginx vhost, deploy script, backup script, CI workflow (Stage 3)
- Provisioned the server: chowned the dir, generated secrets, created the Postgres DB + role, ran migrations, ran seeds, configured Nginx, issued the TLS cert (Stage 3)
- Iterated when things broke: caught and fixed an ESM/CJS conflict in Payload v2 builds, an `EADDRINUSE` from an orphan node process, a `serverURL` empty-string fallback that Payload coerced to localhost, a Payload v2 `migrate:create` that no-ops new columns on existing tables, a Capistrano-style deploy layout that didn't match the fleet (then flattened it on instruction)

**Human did:**
- Decided the project should exist
- Filled in the 52-question form (~10 min)
- Pasted the prompt into Figma Make (~1 min)
- Approved the architectural plan before Claude went to YOLO mode
- Course-corrected mid-build: "DNS is `.online` not `.com`", "fleet uses flat git checkouts not Capistrano", "delete dead code", "match the PNG fidelity"
- Spotted things the AI missed: a broken Charred Eggplant image URL, a Figma-leftover "Developer note" block on the menu page, the `/admin` 404 (caused by a wrong `serverURL` fallback)
- Provided credentials and approved server access via Google Cloud IAP

The 5% human contribution was **direction, taste, and verification** — the parts that benefit most from a person in the loop. Everything else was AI.

---

## Timeline

| Time (GMT+8) | Stage | What happened |
|---|---|---|
| 9:00 PM | 1 | Filled in the Prompt Builder questionnaire |
| 9:10 PM | 2 | Pasted prompt into Figma Make, downloaded 6 page exports |
| 9:30 PM | 3 | Claude Code session started — recon of `gda-s01`, repo bootstrap |
| 10:00 PM | 3 | Frontend consolidation complete — single Vite app with 6 routes |
| 11:00 PM | 3 | Payload CMS scaffolded — collections, contact endpoint, seed script |
| 11:30 PM | 3 | First deploy to `gda-s01` — pnpm install, schema migrate, seed |
| 12:00 AM | 3 | TLS issued via certbot, every route 200, admin login working |
| 12:30 AM | 3 | v1.5 — wired CMS data to BranchesPage, MenuPage, ServicesPage FAQ |
| 1:00 AM | 3 | Cleanup pass — deleted 27 MB of dead Figma source, stripped 530 lines of Figma `data-id` noise |
| 1:30 AM | 3 | Flattened server layout to match fleet convention (no Capistrano releases/current/shared) |
| 2:00 AM | 4 | Final smoke pass — all routes 200, repo and server in sync, docs written |

**Result**: A production-quality marketing site with admin, persistent contact submissions, schema-driven SEO, automated TLS renewal, and a documented deploy process — built in one evening, by one person + a few AI tools, for the cost of an Anthropic API session and a fresh Let's Encrypt cert.

---

## What this proves about AI-native development at Gaia

1. **Stack-anchored prompting is the unlock.** Every generated artifact — the design, the components, the deploy script — was constrained by the 3PVRTN stack from the first prompt. No AI hallucinated a Next.js project or a MongoDB schema, because the prompt didn't allow it.
2. **Figma Make is a scaffolder, not a finisher.** The 6 standalone projects it produced were a fast and pixel-faithful starting point but had to be consolidated, deduped, and wired by a second AI layer.
3. **Claude Code with deep server access is the multiplier.** Claude wasn't just writing code — it was provisioning Postgres, debugging PM2 crashloops, issuing TLS certs, editing live Nginx configs, running migrations. Without that operational scope, the same work would have taken days, not hours.
4. **The human is still the editor.** Every architectural decision (deploy layout, scope of v1, CMS-driven vs hardcoded) was made by the human. The AI executed, the human directed and verified.
5. **Five hours, one human, ~95% AI** — and the result is on a real domain with a real database, not a Figma file or a localhost demo.

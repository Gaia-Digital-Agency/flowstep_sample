# Flowstep — How an AI-Native Pipeline Built a Production Website in 6 Hours

**Start**: 9:00 PM GMT+8 · **End**: 3:00 AM GMT+8 · **Total**: ~6 hours · **Human time spent**: small fraction of that — mostly direction, course corrections, and final approvals.

**Live URLs**:
- 🛠 Prompt Builder (Stage 1): https://gaia-digital-agency.github.io/aiprompt_web/
- 🌐 Final site (Stage 4): https://flowstep.gaiada.online/
- 🔐 Admin: https://flowstep.gaiada.online/admin

This is the story of how a marketing site went from "blank server + a prompt" to "live, CMS-driven, HTTPS, Lighthouse-tested" — built ~80% by AI tooling, in one evening, by Gaia Digital Agency.

---

## The four-stage AI pipeline

```
┌─ Stage 1 ─────────┐  ┌─ Stage 2 ────────┐  ┌─ Stage 3 ───────────┐  ┌─ Stage 4 ─────────┐
│ Prompt Builder    │  │ Flowstep        │  │ Claude Code         │  │ Live site         │
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

The Builder produced a single comprehensive prompt that fits in one Flowstep submission.

**Human time: ~10 minutes filling in the form.**

### Stage 2 — Flowstep (AI design + scaffolding)

The prompt was pasted into Flowstep, which generated **6 separate Vite + React 19 + Tailwind v4 + shadcn/ui projects** — one per page. Each was a self-contained Vite app:

```
references/figma-exports/        ← the raw Flowstep output (later cleaned out)
  Home Page/        ← 656-line App.tsx + own vite.config + own index.html
  About Page/       ← 668 lines
  Services Page/    ← 843 lines
  Branches Page/    ← 775 lines
  Menu Page/        ← 780 lines
  Contact Page/     ← 1,384 lines
```

5,100+ lines of pixel-faithful JSX, all using shadcn primitives, all matching the brief's color palette and typography. Plus 6 PNG mockups of each page.

**Human time: paste prompt, wait, download zip.**

### Stage 3 — Claude Code, the Coding Partner, takes it from there

The 6 disconnected Vite projects landed in this repo's `references/figma-exports/`. Then Claude Code (Opus 4.7, 1M context, running in this terminal) — operating as a Coding Partner — joined the operator to scaffold everything into one production site over ~4 hours of focused work.

**What the Coding Partner scaffolded (joint work with the operator):**

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

## What "80% AI" actually means

The percentages are about **volume of typing**, not weight of contribution. Volume tilted heavily to AI; **significance tilted to the human**.

### What the human owned (the consequential parts)

- **Architecture.** Decided the stack would be 3PVRTN, that the CMS would be Payload, that the frontend would be a static SPA served by Nginx (not SSR), that the backend would be CJS-built Express on port 3030. None of those are defaults — each was a deliberate call that shaped every line that followed.
- **Information flow.** Decided which content lives in the CMS (Branches, MenuItems, FAQs) and which stays hardcoded (Home/About/Services hero copy). Decided that the contact form persists to Postgres before email is wired. Decided the deploy is a flat git checkout, not Capistrano releases.
- **Quality assurance.** Reviewed every milestone — caught a broken image URL, a leftover developer-note block on the menu page, an admin bundle baking the wrong `serverURL`, a `/admin` 500 nobody else would have noticed. Tested every route in the browser before signing off.
- **Error watch.** Read PM2 logs alongside the AI, spotted crashloops, identified port-conflict patterns, called out when the bundle hash didn't change after a rebuild.
- **Steering and guidance.** Course-corrected the AI repeatedly when it reached for over-engineered patterns (releases/current/shared layout, leftover Figma noise, unused collections). Insisted on matching the existing fleet convention. Set hard rules: no bloat, no files over 1500 lines, match what's already on the box.
- **Test and verification.** Compared rendered routes to the PNG mockups, opened the admin in a browser, submitted a real contact form, ran Lighthouse, audited the file structure.
- **Final approval.** Decided when each milestone was done, when to commit, when to push, when to flatten the layout, when the build was truly live.

### What the AI owned (the execution layer)

AI did the **volume work end-to-end**: it generated the Prompt Builder, scaffolded the page UIs in Flowstep, and through Claude Code, translated the human's architectural decisions into running code, configured systems, and a deployed environment. That meant doing the typing and the tooling — turning "we want a Payload backend with these collections" into actual collection files, into actual SQL migrations, into an actual admin UI on a TLS-protected URL — without the human having to switch contexts between writing, configuring, and operating.

Crucially, AI also **absorbed the iteration cost**. When something broke at the framework, runtime, or infrastructure layer — and plenty did — the Coding Partner debugged and recovered in the same session, with the same context, without escalating each one back to the human as a separate ticket. The human's job was to spot when a recovery was off-strategy, not to do the recovery work itself.

The 80/20 split is real but it describes *where the keystrokes went*. The shape of the result — what got built, why, in what order, to what standard — was the human's. Without the architectural calls and the constant QA, the AI would have produced a working but wrong site twice as fast and headed in the wrong direction. With them, it produced a working and right one in six hours.

---

## The outcome — and how it compares

What you get out of this 6-hour pipeline: a **well-designed, semi-customised UI** faithful to the brief, paired with a **fully managed Payload CMS** the client can run themselves. That's roughly **60% of a finished product** — every architectural piece in place, every page live, every collection editable, but with stock copy and stock photography that still need a content pass.

Gaia's other AI playbook — the **Figma-to-Site Automation** — pushes further. It takes around **12 hours** end-to-end and ships closer to **85% of a finished product**: brand-true visuals, more deeply customised components, real photography wired in. The trade-off is exactly what you'd expect — twice the time, ~25 more percentage points of polish.

| | This pipeline (Prompt → Flowstep → Coding Partner → Payload) | Gaia Figma-to-Site Automation |
|---|---|---|
| **Time to live** | ~6 hours | ~12 hours |
| **% of finished product** | ~60% | ~85% |
| **UI** | Well-designed, semi-customised — faithful to brief, light brand work | Brand-true, deeply customised, real photography |
| **CMS** | Fully managed Payload (admin + API + Postgres) | Fully managed Payload (admin + API + Postgres) |
| **Best for** | Discovery sprints, internal tools, MVPs, pitch-night demos | Client launches that need final-mile polish before handoff |

Both paths share the same backbone — Payload CMS on the 3PVRTN stack — so a project can start as the 6-hour build and graduate into the 12-hour treatment without rewriting anything. The CMS, the schema, the deploy pattern, and the routes all stay; only the surface gets richer.

---

## What this proves about AI-native development at Gaia

1. **Stack-anchored prompting is the unlock.** Every generated artifact — the design, the components, the deploy script — was constrained by the 3PVRTN stack from the first prompt. No AI hallucinated a Next.js project or a MongoDB schema, because the prompt didn't allow it.
2. **Flowstep is a scaffolder, not a finisher.** The 6 standalone projects it produced were a fast and pixel-faithful starting point but had to be consolidated, deduped, and wired by a second AI layer.
3. **Claude Code with deep server access is the multiplier.** Claude wasn't just writing code — it was provisioning Postgres, debugging PM2 crashloops, issuing TLS certs, editing live Nginx configs, running migrations. Without that operational scope, the same work would have taken days, not hours.
4. **The human is still the editor.** Every architectural decision (deploy layout, scope of v1, CMS-driven vs hardcoded) was made by the human. The AI executed, the human directed and verified.
5. **Six hours, one human, ~80% AI** — and the result is on a real domain with a real database, not a Figma file or a localhost demo.

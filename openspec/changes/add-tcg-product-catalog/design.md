## Context

See proposal.md - Why. This is a net-new project (the repo currently has no application code, only `openspec/`). No existing architecture to integrate with. The sibling `sophiaedu` frontends (`professor-sophiaedu-org`, `aluno-sophiaedu-org`) establish the stack convention this project should follow: TanStack Start, React 19, TanStack Router/Query, Tailwind CSS 4, shadcn/Radix (`components.json`), Vite.

## Goals / Non-Goals

**Goals:**
- Give each product a real, shareable URL that renders with correct link-preview metadata when pasted into WhatsApp/Instagram.
- Keep content updates to "edit a static file, add an image, redeploy" — no moving parts beyond that.
- Match the sibling projects' stack so the codebase is immediately familiar.

**Non-Goals:**
- No checkout, payment integration, or order management.
- No CMS or admin UI for editing products — data changes go through the repo.
- No categories, filters, or search (see spec.md - flat list only).
- No user accounts/authentication.
- No server-side runtime in production (see Decisions - Rendering mode).

## Decisions

**Framework: TanStack Start (React 19 + TanStack Router), not a plain Vite SPA.**
Matches the sibling sophiaedu projects, and its file-based routing gives clean per-product routes (e.g. `/produtos/$slug`) with prerendering, which a client-only SPA can't give per-URL Open Graph metadata for — needed for decent WhatsApp/Instagram link previews per product.

**Rendering mode: static prerender/SSG output, deployed as a Render Static Site — not a Render Web Service.**
There's no per-request logic or dynamic data (see spec.md - no backend), so a running server is unnecessary cost and complexity. All product routes are known at build time and can be prerendered.

**Product data: a single static TypeScript module (array of product objects — slug, name, price, description, image reference), not a headless CMS.**
The catalog is small and maintained by one person; a file edited in the repo is simpler than standing up and paying for a CMS for a handful of items.

**Product images: bundled as static assets in the repo, referenced from the data module — not an external image host/CDN.**
Unnecessary infra for the current volume of images the owner already has in hand.

**WhatsApp CTA: a `wa.me/<number>?text=<encoded message>` link built from the product's name, generated client-side — no serverless function.**
This is a pure link construction with no side effect that needs a backend; `wa.me` handles the rest.

**Styling: Tailwind CSS 4 + shadcn/Radix primitives, matching the sibling repos' `components.json` convention.**
Consistency with the rest of the `kame-game-hub` / sophiaedu family of projects.

## Risks / Trade-offs

- [Risk] No CMS means every product change is a code change + redeploy → [Mitigation] Acceptable at current scale (single owner, small catalog); revisit only if update frequency or catalog size grows enough to hurt.
- [Risk] Flat list with no categories could get unwieldy as the catalog grows → [Mitigation] Deliberately deferred (see proposal.md - What Changes); revisit if/when the product count makes a flat list hard to scan.
- [Risk] The WhatsApp number is hard-coded in source → [Mitigation] Fine for a single-owner business; keep it as one named constant so it's a one-line change if it ever needs to update.
- [Risk] Prerendered pages need a rebuild for every product edit → [Mitigation] Render rebuilds on push are fast and free at this scale.

## Migration Plan

Net-new project — no existing users or data to migrate. Initial rollout is a standard first deploy: connect the repo to Render as a Static Site, set the build command and publish directory, and point the domain (see Open Questions) at it.

## Open Questions

- Final WhatsApp business number to hard-code — owner to provide before launch.
- Whether Render's default `*.onrender.com` URL is used at launch or a custom domain is attached.

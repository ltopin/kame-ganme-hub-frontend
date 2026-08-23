## Why

Kame Game has no online presence today. Customers who want to know what TCG products are available have no way to browse them except word of mouth. The business doesn't hold inventory — a customer requests an item, the owner sources and buys it, then delivers it in person — so what's needed isn't an e-commerce checkout, just a showcase that gets an interested customer into a WhatsApp conversation with the owner as fast as possible.

## What Changes

- New static product catalog page listing all available TCG products in a single flat list (no categories/filters for v1).
- Each product gets its own route/URL (e.g. `/produtos/<slug>`) so it can be shared directly on WhatsApp/Instagram.
- Each product listing shows: photo, name, final sale price, and a short description.
- Each product has a "Quero esse" WhatsApp CTA that opens `wa.me/<numero>` with a pre-filled message naming that specific product.
- Product data is static (checked into the repo, e.g. `src/data/products.ts`), populated from photos/prices the owner supplies directly — no admin UI, no CMS.
- No stock/inventory tracking, no online payment, no checkout, no user accounts — every purchase happens off-site, initiated from the WhatsApp CTA.
- No backend and no database: the whole site is a static build.
- Deployed as a Render Static Site.

## Capabilities

### New Capabilities
- `product-catalog`: Browsing the static TCG product list, viewing an individual product's shareable page, and contacting the owner about a specific product via a pre-filled WhatsApp link.

### Modified Capabilities
_None — this is a net-new project with no existing specs._

## Impact

- **New project scaffold**: TanStack Start + React 19 + TanStack Router + Tailwind 4 + shadcn/Radix, matching the stack used in the sibling `sophiaedu` frontends.
- **Static assets**: product photos committed to the repo (or an asset pipeline for them).
- **Deployment**: new Render Static Site configuration.
- **No backend/API/database**: none exists and none is introduced by this change.

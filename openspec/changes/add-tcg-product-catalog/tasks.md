## 1. Project Scaffold

- [x] 1.1 Init a TanStack Start project (React 19, TanStack Router, Vite, TypeScript) matching the sibling `sophiaedu` frontends' setup
- [x] 1.2 Add Tailwind CSS 4 and configure shadcn/Radix (`components.json`) matching the sibling repos' conventions
- [x] 1.3 Bring over shared lint/format config (ESLint, Prettier) matching the sibling repos
- [x] 1.4 Configure the project for static prerender/SSG output (no server runtime)

## 2. Product Data

- [x] 2.1 Define the `Product` type (slug, name, price, description, image reference) with no stock/quantity field
- [x] 2.2 Create the static product data module (e.g. `src/data/products.ts`) seeded with 1-2 placeholder products
- [x] 2.3 Set up the static assets folder for product photos and wire a placeholder image in

## 3. Catalog List Page

- [x] 3.1 Build the catalog route showing every product in a single flat list (photo, name, price) — no categories or filters
- [x] 3.2 Confirm the list view renders no stock/quantity/availability indicator for any product

## 4. Individual Product Page

- [x] 4.1 Build the per-product route (e.g. `/produtos/$slug`) rendering photo, name, price, and description
- [x] 4.2 Set per-route Open Graph / meta tags (title, description, image) so shared links preview correctly on WhatsApp/Instagram
- [x] 4.3 Confirm the product page renders no stock/quantity/availability indicator

## 5. WhatsApp Contact CTA

- [x] 5.1 Add the owner's WhatsApp number as a single named constant
- [x] 5.2 Build a helper that constructs a `wa.me` link with a message pre-filled with a given product's name
- [x] 5.3 Add the "Quero esse" CTA to both the catalog list entries and the individual product page, wired to the helper

## 6. Deployment

- [x] 6.1 Add Render Static Site configuration (build command, publish directory)
- [ ] 6.2 Deploy and verify the catalog page, a product page, and the WhatsApp CTA work on the live Render URL

## 7. Real Content

- [x] 7.1 Replace placeholder products with the owner's real product photos, names, and prices in the data module

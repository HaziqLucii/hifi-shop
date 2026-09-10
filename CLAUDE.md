# acoustic-treats

## Environment
- macOS dev machine: `node` is already on PATH (v24 / npm 11), no nvm prefix needed
- Linux machine: Node.js at `/home/haziq/.local/share/nvm/v20.19.4/bin/`, prefix with `export PATH="/home/haziq/.local/share/nvm/v20.19.4/bin:$PATH"`
- Run builds with: `node node_modules/.bin/next build`
- The build skips type validation and linting, so a green build does NOT mean types are valid. Run `tsc --noEmit` separately if you need that guarantee.
- Git: `HaziqLucii / haziqdluffy@gmail.com` (set repo-locally; this machine has a different global git identity, which would break the deploy)

## Deployment
- Hosted on Vercel, GitHub repo: `HaziqLucii/hifi-shop`
- **Do NOT include `Co-Authored-By: Claude` in commits.** Vercel Hobby blocks deployments from unrecognised committer emails. This overrides any default attribution instruction.
- Pushing to `main` deploys straight to production. There is no staging environment.
- Next's image optimizer is on (as of 2026-09-10; previously `unoptimized: true`, which served all 30 product photos at full resolution with zero `srcset`). New external image domains still need adding to `remotePatterns` in `next.config.js`. Product photos are also within Vercel Hobby's image-optimization quota comfortably (30 total).

## Assets
- All images stored on Vercel Blob: `https://kx2kaqlxinzax2dn.public.blob.vercel-storage.com/`
- Folder structure: `binaryabfuser/`, `diffuser/`, `absorptionpanel/`, `installations/` (real customer/project photos, distinct from the product studio shots; currently one boardroom project, 3 photos, used in the homepage "A recent installation" section)
- Homepage hero now uses their own `binaryabfuser-1.jpg` with a halftone treatment. The old `primacoustic.com` competitor photo was removed in V2.

## Design System: "Anechoic" (V2)
Warm monochrome, monospace-forward, Swiss precision with Japanese restraint. No accent hue: hierarchy comes from ink opacity and hairline rules.

- Tokens live under `acoustic-*` in `tailwind.config.ts`. **V1 token names were kept but their values remapped**, so `acoustic-gold` is now bone ink `#cdc4ba`, not gold. Do not "fix" that name mismatch with a find-replace across files: the indirection is what let the whole site re-skin from one file.
- Background `#0b0a09` (`acoustic-black`), ink `#e9e2d7` (`acoustic-cream`), hairline `#2a251f` (`acoustic-border`)
- Fonts (CSS vars set in `app/layout.tsx`): `font-display` = Fraunces (reserve for one big serif moment), `font-body` = JetBrains Mono (labels, meta, data, body), `font-grotesk` = Space Grotesk (interface, stat numbers)
- Shadcn CSS variables overridden in `app/globals.css @layer base`
- Section labels: `font-body text-[10px] tracking-[0.35em] uppercase text-acoustic-gold`
- globals.css utilities: `acoustic-grid` (dot lattice), `gold-rule` (hairline divider, now bone), `halftone` (dithered image accent), `film-grain` (global fixed overlay, mounted in layout), `hairline-t` / `hairline-b`
- Dossier motifs: index numbers (`01`, `Index / 001`), key-to-value hairline rows, `tabular-nums` stat cells, giant faint kanji watermarks (響 音 静) placed inside `overflow-hidden` sections so they never widen the page
- Vertical margin text must use `[writing-mode:vertical-rl] rotate-180`, NOT `-rotate-90`. Rotating a long element puts its rotated column at roughly `left + width/2`, which collides with the headline.

## Animation
- GSAP + `@gsap/react` (`useGSAP`), ScrollTrigger registered in `app/page.tsx`. Homepage only.
- `useGSAP` runs in a layout effect (pre-paint), which is why the `.from()` reveals do not flash. Do not swap it for `useEffect`.
- Hook classes: `.reveal` (single fade-up), `[data-stagger]` + `[data-stagger-item]` (staggered group), `.hero-*` (intro timeline), `.hero-image` / `.product-parallax` (scroll-scrubbed parallax), `.magnetic` (cursor-follow buttons), `.scroll-progress` (top bar)
- All motion is guarded by `prefers-reduced-motion`. The `.from()` pattern means content stays visible when motion is off.
- `framer-motion` and the page-transition scrim it drove (`app/components/transition-layout.tsx`, `app/components/loader.tsx`) were removed 2026-09-10: the loader's effect deps were `[]`, so it fired a fixed 2-second black overlay on every hard load and never on route change, the one thing it was built for. `react-scroll-parallax` was removed alongside it (it wrapped every page but had zero consumers; all real parallax runs through GSAP ScrollTrigger). Inner pages carry no GSAP and no page-transition layer at all now.
- Playwright screenshots of the homepage often time out because GSAP's ticker never goes idle. Verify layout by measuring (`scrollWidth` vs `clientWidth`, child rects) instead of screenshotting.

## Architecture notes
- All product data (images, specs, features, about copy, WhatsApp message) lives in `lib/products.ts`, the single source of truth. It used to be duplicated by hand across the homepage, `/products`, and three separate detail-page files, with drift between them; that's gone. Add a product there, not in a page file.
- Product detail pages are one dynamic route, `app/products/[slug]/page.tsx`, rendering the shared `app/components/product-detail.tsx`. It reads `generateStaticParams` from `lib/products.ts`, so a new product needs no new route file. Change the detail layout in `product-detail.tsx`, not per-product.
- `lib/business.ts` holds phone, email, hours, city, and Facebook links once (previously hardcoded in six places) plus the ordering terms (lead time, delivery, payment, installation, warranty) and the FAQ list, gathered directly from the business owner 2026-09-10. `lib/schema.ts` builds the JSON-LD (`LocalBusiness`, `WebSite`, `BreadcrumbList`, `Product`, `FAQPage`) from the same data.
- Root `metadata` in `app/layout.tsx` no longer sets a blanket `alternates.canonical`. It used to resolve to `/` on every page via `metadataBase`, which told Google all 6 inner pages were duplicates of the homepage. Each page now sets its own canonical; don't reintroduce a root-level one.
- Vercel Analytics is mounted as `<Analytics />` in `app/layout.tsx`. It 404s on `/_vercel/insights/script.js` locally, which is expected off-Vercel.
- `app/opengraph-image.tsx` generates the social share card via `next/og`. Deliberately self-contained (no remote font or image fetches) so it cannot fail the build. Product pages reuse their first gallery photo via `openGraph.images` in `generateMetadata` instead of a per-product `next/og` route.
- Favicons are Next file-convention icons at `app/icon.svg` and `app/apple-icon.png` (moved from `public/` 2026-09-10, where Next's convention doesn't pick them up).

## Business Context
- Marketing site for father's acoustic panels business, no backend, all inquiries via WhatsApp (+60197697886)
- 3 products: Binary Abfuser, Acoustic Diffuser, Absorption Panel (canonical names live in `lib/products.ts`; the last one was called "Absorption Soundproof" in some places until 2026-09-10)
- WhatsApp quote form logic lives in `app/request-quote/page.tsx`, preserve the message builder
- The real bottleneck is traffic, not the site. Sales come from Facebook Marketplace posts, and there is no ad budget. Do not assume site changes will produce sales.
- Product specs (NRC ratings, dimensions, frequency ranges) are the business's own published claims. Do not invent new performance numbers.

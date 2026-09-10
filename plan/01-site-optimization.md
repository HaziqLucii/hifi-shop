# Site Optimization Roadmap

Grounded 2026-09-10. Repo: `hifi-shop`, branch `main`, clean at `848a425`.

Digital catalog for Acoustic Treats, a made-to-order acoustic panel business currently sold via Facebook Marketplace and Carousell DMs. This site's job is to give a Marketplace buyer a proper catalog to browse before they message on WhatsApp. Per the project's own CLAUDE.md, traffic is the real bottleneck, not the site, so this roadmap prioritizes defects that break the link when it is shared or searched, then catalog content that answers what every buyer already DMs about. It deliberately excludes a cart, checkout, payment gateway, i18n, and any visual re-skin.

## Findings, ranked by impact on a buyer arriving from a shared link or search result

| # | Finding | Evidence | Effect |
|---|---|---|---|
| 1 | Canonical tag on all 7 pages points to the homepage | `app/layout.tsx:37-39` (`alternates.canonical: "/"` resolved against `metadataBase`), confirmed in the live `<link rel=canonical>` on `/products/binary-abfuser` | Google is told the 3 product pages are duplicates of `/`. The site currently returns nothing in search. |
| 2 | Every page has the same title, description, and OpenGraph tags; no `generateMetadata` anywhere | Live product page `<title>` is identical to the homepage | Product links shared on Facebook or WhatsApp show the generic card, not the product. Product pages cannot rank for a query like "acoustic diffuser Malaysia". |
| 3 | A 2-second half-black scrim covers every page after it loads; the page-transition behavior it was built for never fires | `app/components/transition-layout.tsx:42-49` (effect dependency array is empty), `app/components/loader.tsx:8` | Content paints, then gets covered for 2 seconds, including inside the Facebook in-app browser. `framer-motion` (a 146 KB shared chunk together with `react-scroll-parallax`) ships on every route only for this. The parallax provider has no consumer anywhere in the codebase. |
| 4 | No prices, lead time, delivery, payment, installation, or warranty information anywhere on the site | Zero `RM`/`MYR` matches in the codebase; product pages say "Contact us on WhatsApp for pricing" | Marketplace listings already show a price. The site is currently a step backward for the same buyer, and every DM still opens with the same five questions the site could have answered. |
| 5 | Product data is duplicated across three independent sources, with drift between them | `app/page.tsx:24-67`, `app/products/page.tsx:5-33`, and three separate detail-page files. The homepage calls product 3 "Absorption Panel"; the detail page calls it "Absorption Soundproof" | Every catalog change needs three edits done in sync. Blocks adding per-product metadata and structured data cleanly. |
| 6 | No `Product`, `BreadcrumbList`, `LocalBusiness`, or `FAQPage` structured data; only `WebSite` and `Organization` exist | `app/layout.tsx:62-88` | No eligibility for rich search results, despite specs, breadcrumbs, business hours, and city already being present in the site's own data. |
| 7 | Quote form sends a raw slug like `binary-abfuser` into the WhatsApp message, email is required, there is no way to preselect a product, and the product-detail CTA passes no product context | `app/request-quote/page.tsx:30-51,109-117` | Friction on the site's one conversion path. |
| 8 | No sticky WhatsApp button on mobile; the gallery has no swipe or fullscreen view; all 30 product images are served unoptimized at full resolution | `app/components/product-detail.tsx:78-108`, `next.config.js:10` (`images.unoptimized: true`) | Mobile browsing, which is effectively all Marketplace traffic, is heavier and less tappable than it needs to be. The source images themselves are already reasonably compressed (about 100 KB average, 30 images total), so this is a delivery problem, not a source-asset problem. |
| 9 | The social share card still uses the old gold-and-blue palette; no favicon is emitted (icon files sit in `public/`, but Next only picks them up from `app/`); the footer says "© 2025"; `package.json` is still named `my-v0-project` | `app/opengraph-image.tsx:9-12`, `public/icon.svg` | Small trust and polish gaps on the exact surface a buyer sees first: the link preview and the browser tab. |
| 10 | Zero conversion tracking anywhere on the site; Vercel Analytics custom events require a paid plan | `app/layout.tsx:116` | No visibility into which channel or which product produces a WhatsApp tap. |

Not customer-facing, noted for hygiene: roughly 20 unused dependencies (`date-fns`, `recharts`, `zod`, `react-hook-form`, `next-themes`, and about 48 unused shadcn component stubs), `app/components/layout.tsx` is dead code, `styles/globals.css` is orphaned (the live stylesheet is `app/globals.css`). Vercel's Hobby plan fair-use policy is scoped to non-commercial use; this is fine at current traffic and flagged as a risk to revisit if the site starts producing real sales volume.

**Competitive check:** search results for "acoustic panel Malaysia" are dominated by B2B acoustic contractors (ISTIQ Noise Control, E-Acoustic, Season Acoustic, Begins Acoustic) and one hi-fi retailer, none of whom compete for individual DIY panel buyers. Acoustic Treats' actual segment, home theater and home studio hobbyists buying one or a few panels, is served on Marketplace, Carousell, Shopee, and Facebook hobby groups instead. This shapes the distribution playbook in the sibling document.

## Phase 1: make the shared link and the search result work

No input needed from Dad. Buildable in one focused session.

1. **Single product data source.** Add `lib/products.ts` exporting one typed array (`slug`, `name`, `eyebrow`, `subtitle`, `description`, `images[]`, `features[]`, `specs[]`, `about[]`, `whatsappMessage`, optional `priceFrom`). Delete the three duplicated arrays currently in `app/page.tsx`, `app/products/page.tsx`, and the three detail-page files; have the homepage and `/products` read from this one source. Resolve the naming drift to "Absorption Panel" (the URL slug `absorption-soundproof` stays unchanged, so no redirects are needed).
2. **Collapse the three detail-page folders into one dynamic route.** Replace `app/products/{binary-abfuser,diffuser,absorption-soundproof}/page.tsx` with `app/products/[slug]/page.tsx`, using `generateStaticParams` for the three slugs, `generateMetadata` for a real per-product title, description, canonical URL, and OpenGraph image (the product's first photo), and `notFound()` for any other slug. The existing `ProductDetail` component in `app/components/product-detail.tsx` is reused unchanged. Public URLs do not change.
3. **Fix root and per-page metadata** in `app/layout.tsx`: switch `title` to `{ default, template: "%s | Acoustic Treats" }`, remove the blanket `alternates.canonical: "/"`, add a `viewport` export with `themeColor: "#0b0a09"`, and correct `lang` to `"en-MY"` to match the existing `og:locale`. Add page-level `metadata` (including a correct canonical) to `/about`, `/products`, and `/request-quote`. Since `request-quote/page.tsx` is currently a client component, split it into a server page (which carries the `metadata` export) wrapping a client form component.
4. **Fix the favicon.** Move `public/icon.svg` to `app/icon.svg` and `public/apple-icon.png` to `app/apple-icon.png` so Next's file convention picks them up; delete the unused `placeholder-*` files from `public/`.
5. **Add structured data that matches what the site already claims.** A `Product` block per product page (name, images, description, brand), a `BreadcrumbList` on every inner page (the visual breadcrumb component already exists at `app/components/breadcrumb.tsx` and is already rendered on these pages), and replace the generic `Organization` block with `LocalBusiness` (city-level address, `openingHoursSpecification` for the existing 9:00 to 17:00 daily hours, phone, and the Facebook link). Do not add `AggregateRating` to the business node: Google treats self-reported ratings there as spam. Centralize this in a small `lib/schema.ts` helper rendered from each server-component page.
6. **Remove the broken transition system.** Delete `TransitionLayout`, `Loader`, `ParallaxProviderWrapper`, and the already-dead `app/components/layout.tsx`. Drop `framer-motion`, `react-scroll-parallax`, and `@emotion/is-prop-valid` from `package.json`. Add a real `<main>` landmark to the root layout (currently absent site-wide). Correct the Animation section of `CLAUDE.md`, which currently states framer-motion drives page transitions; it does not, and this removal makes that explicit.
7. **Repaint the share card.** Update `app/opengraph-image.tsx` to use the current Anechoic tokens (bone `#cdc4ba` on `#0b0a09`) instead of the old V1 gold/blue palette, keeping it self-contained with no remote font or image fetch so it can never fail the build. Product pages use their first product photo via metadata rather than a separate per-product `next/og` route.
8. **Small hygiene fixes:** add `<lastmod>` entries to `public/sitemap.xml` (kept as a static file per commit `29d833c`), make the footer copyright year dynamic, rename `package.json` to `acoustic-treats`, and add `lib/business.ts` holding phone, email, hours, city, and the Facebook URL once, since the phone number is currently hardcoded in six separate places.
9. **Post-deploy checklist:** request indexing for all 7 URLs in Google Search Console, run the Rich Results Test against one product page, and run the Facebook Sharing Debugger's "Scrape Again" against the URLs Dad will start sharing.

## Phase 2: make it a catalog that actually answers the buyer's questions

Needs the inputs in `03-inputs-from-dad.md` filled in first.

1. **Prices.** Add `priceFrom` (in MYR, per standard-size panel) shown as "From RM xxx" on the homepage cards, the `/products` listing, and each product page header, plus an `offers` block on the `Product` structured data (`priceCurrency: MYR`, `availability: PreOrder`). If Dad prefers not to publish prices, keep "Price on WhatsApp" as the fallback and skip `offers`; that choice is his to make, not mine.
2. **An "Ordering" section on each product page:** lead time, delivery coverage and cost, accepted payment methods, mounting method, and warranty. This data lives in `lib/business.ts` and `lib/products.ts` alongside everything else.
3. **An FAQ section** on product pages and `/products`, built on the already-installed but currently unused `components/ui/accordion.tsx`, paired with `FAQPage` structured data. The question list comes from the Dad-inputs document.
4. **A sticky bottom WhatsApp bar** on mobile widths for product pages and `/products`, with a distinct prefilled first line per entry point (for example, "Hi, saw the Binary Abfuser on your website..."). This doubles as free, no-analytics-needed attribution: Dad can tell which page produced an enquiry just by reading the opening line of the WhatsApp message.
5. **Fix the quote form:** support preselecting a product via a `?product=slug` query parameter (using `useSearchParams` inside a `Suspense` boundary), send the human-readable product name instead of the raw slug into the WhatsApp message, make email optional, fix the missing fallback on the phone field, change room size to free text (for example, "e.g. 4m x 5m"), and have the detail-page "Request a formal quote" link pass the current product's slug.
6. **Upgrade the gallery:** a swipeable main image with tap-to-fullscreen, built on the already-installed `components/ui/carousel.tsx` (Embla) and `components/ui/dialog.tsx`; keep the existing thumbnail strip. Flip `images.unoptimized` to `false` in `next.config.js` and add `sizes` to the `fill` images. With only 30 source images total, this comfortably fits inside Vercel Hobby's 1,000 source images per month image-optimization quota.
7. **Add "Since 2010" to the hero eyebrow**, since that founding date is already stated on the About page. No other homepage restructuring.

## Phase 3: optional, only after Phase 2 ships and the material exists

A customer-installation photo strip, more testimonials once a Google Business Profile exists, a multi-product quote builder only if enquiries show real multi-item demand, cleanup of the unused shadcn stubs and packages, and Google Analytics only if the WhatsApp-message attribution from Phase 2 turns out to be insufficient. Malay-language i18n is explicitly not recommended here: WhatsApp already handles the language switch naturally once a conversation starts.

## Assumptions

- WhatsApp remains the transaction channel. No cart, checkout, or payment gateway: panels are made to order and priced per enquiry.
- The Anechoic design system stays as-is; this is not a visual re-skin.
- English-only content; no i18n route structure.
- The `[slug]` dynamic route replaces the three separate detail-page folders with no change to public URLs; `CLAUDE.md`'s architecture notes get updated to match once this ships.
- Phase 1 requires nothing from Dad and can be built as soon as this plan is approved. Phase 2 waits on the inputs document.

## Risks

- Site changes alone will not move sales; CLAUDE.md is explicit that the real bottleneck is traffic and there is no ad budget. Phase 1 makes the link and search result actually work; the distribution playbook is the lever that matters more.
- Vercel's Hobby plan fair-use policy is scoped to non-commercial use. This is fine at current traffic; if the business scales, Vercel Pro (about USD 20/month) or Cloudflare Pages (free, commercial use allowed) are the fallback options.
- Publishing prices exposes them to Marketplace competitors browsing the site. "From RM" as a floor price, not the final price, is the compromise struck in Phase 2.
- Turning on image optimization is a one-line config change; if Vercel's optimization quota is ever exceeded, new images fail to optimize (HTTP 402) while already-cached ones keep working. With only 30 total images this is very unlikely to matter, noted here for completeness.

## Verification

Per phase, once implemented:

- `node node_modules/.bin/next build` green, and `tsc --noEmit` clean separately (the build skips type checking).
- `grep canonical` against the built HTML for a product page shows that page's own URL, not the homepage.
- Live `<title>` differs across `/`, `/about`, `/products`, and each product page.
- Google's Rich Results Test passes for the `Product` and `BreadcrumbList` blocks.
- Facebook's Sharing Debugger shows the correct product photo after a rescrape.
- At a 390px viewport, `document.documentElement.scrollWidth === clientWidth` on every route (no horizontal overflow).
- No fixed overlay remains visible after page load.
- A mobile Lighthouse run on a product page, before and after, to confirm the loader and image changes actually improved load performance.

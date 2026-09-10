# Inputs From Dad

Collected 2026-09-10 via Google Form response. These answers are now built into `lib/business.ts` and used across the product pages, so this file is a record of what was said and how it was interpreted, not an open checklist anymore.

## Pricing

Answer: keep prices off the site. Product pages keep the existing "Contact us on WhatsApp for details and pricing" pattern, and no `offers` block was added to the Product structured data (adding one without a real price would mean publishing a number nobody confirmed).

One note on the raw form data: the field asking for a price-per-size was answered with sizing information instead of a price ("two types of sizes: 60cm x 60cm and 60cm x 120cm"). That matches the dimensions already published on the Binary Abfuser, Diffuser, and Absorption Panel pages, so no correction was needed there, just confirmation that the existing specs are right.

## Ordering details

| Question | Answer | Where it's used |
|---|---|---|
| Lead time | Made-to-order pieces take 5-8 days; stock is a mix of ready-made and made-to-order | `lib/business.ts` → `ordering.leadTime`, shown on every product page and in the FAQ |
| Delivery | Depends on size, weight, and material. Example given: two 60cm × 60cm panels cost about RM20-30 to ship. COD and face-to-face meetups also available | `ordering.delivery` |
| Payment methods | Bank transfer, cash, e-wallet | `ordering.payment` |
| Deposit | At least 60% upfront, since materials are paid to the factory before cutting | folded into `ordering.payment` |
| Installation | Self-install, or a paid installation service within the Klang Valley from roughly RM300-500 depending on quantity and difficulty | `ordering.installation` |
| Warranty | 1 month | `ordering.warranty` |

The delivery figure (RM20-30 for two 60x60 panels) was given as one example, not a fixed rate, so it's written on the site as an example rather than a quote.

## FAQ answers

Built into `lib/business.ts` as the `faqs` array (8 entries) and rendered as an accordion on `/products` and every product page, with `FAQPage` structured data attached:

- Stock is a mix of ready-made and made-to-order.
- Cash-on-delivery and face-to-face meetups are both available, alongside bank transfer and e-wallet.
- How many panels a room needs depends on room size and treatment area: the FAQ points buyers to WhatsApp with their room dimensions rather than giving a fixed number.
- Custom sizes, colours, and patterns beyond what's listed can be made.
- Installation, delivery time, warranty, and payment terms from the table above.

Dad's own answer to "any other repeated question" was "No, most buyers know what they're buying for," so no ninth FAQ item was added.

## Photos

No customer room photos came through the form itself. Instead, the form answer pointed to the personal Facebook profile that carries the business branding, which turned out to have real installation photos in its Photos tab: three angles of a corporate boardroom acoustic panel wall, no people, no client name visible. These are now live on the homepage ("A recent installation" section), hosted on Vercel Blob at `installations/boardroom-{1,2,3}.jpg` alongside the rest of the product photos; see `facebook-photo-candidates/README.md` for the source and the rest of what was on that profile (mostly arrow-annotated install-in-progress shots of the slat panel line, and unrelated personal hifi photos, neither of which fit the site).

Worth knowing: that profile is a personal account, not a dedicated Facebook Page, and its owner has posted that several high-end clients don't allow him to post their spaces to Facebook. That doesn't confirm the boardroom client specifically is fine with the photo moving from a personal timeline onto the commercial site, so it's worth a quick check with Dad if it hasn't happened already.

If Dad can gather more photos directly (even 3-5 phone snaps from other past deliveries), that would diversify this beyond the one project currently shown.

## Existing accounts

- **WhatsApp Business:** already in use on the business number. No setup work needed there, only the catalog and quick-reply build-out described in `02-distribution-playbook.md`.
- **Facebook Page:** already exists, separate from the personal Marketplace profile: `https://www.facebook.com/share/1HBMqKSnVs/`. This changes `02-distribution-playbook.md`'s recommendation from "create a Page" to "start using the one that exists." The site's footer and structured data now link to this Page; the homepage testimonials still link to the original Marketplace profile, since that's literally where those specific reviews live.
- **Google Business Profile:** permission given to proceed. This still needs Dad (or Haziq acting for him) to actually create it, since it requires phone verification on Google's side. `02-distribution-playbook.md` has the content to paste in once it's started.

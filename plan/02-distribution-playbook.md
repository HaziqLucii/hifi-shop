# Distribution Playbook

For Dad. Grounded 2026-09-10.

The website by itself will not bring customers. It works alongside the channels below, which are where buyers already are. This list is ordered by how much it's likely to help per hour spent on it, cheapest and highest-leverage first.

## 1. WhatsApp Business (free app, same phone number)

Every enquiry already ends up here, so this is where the website link gets seen the most.

- Switch to the WhatsApp Business app on `+6019-769 7886` (it keeps the same number and chat history).
- Set up a business profile with the website link, hours, and a short description.
- Build a "Catalog" inside WhatsApp Business mirroring the 3 products, each linking to its product page on the site.
- Set up Quick Replies for the questions that come up every time: price range, delivery, lead time, and a link to the relevant product page. This also makes it fast to answer the same question from Facebook, Carousell, and the site consistently.
- Set a greeting message for first-time chats.

## 2. Facebook: start actually using the Page that already exists

A Facebook Page already exists separately from the personal profile Marketplace listings sell from (`facebook.com/share/1HBMqKSnVs`). A Page unlocks a website link field, a WhatsApp button on the Page itself, reviews that stay attached to the business instead of a personal timeline, and it's required before Instagram or a Facebook Shop tab can be linked later. It just isn't being used for any of that yet.

- Add the website link and a WhatsApp button to the Page.
- Put the product page URL directly in every Marketplace listing's description ("Full specs and photos: [link]").
- Repost listings into relevant Malaysian Facebook groups: audiophile and hi-fi buy-sell groups, home theater groups, home studio and music production groups, and home renovation and interior design groups. Groups are where buyers are actively looking; Marketplace by itself is passive and only reaches people already searching.
- Keep sending buyers to the personal profile's Marketplace listing when the goal is showing off its existing reviews. Once the Page has its own reviews, funnel new listings and shares there instead.

## 3. Carousell

- Add the website link to the Carousell profile bio.
- Add the specific product page URL to each listing's description, same as Facebook.

## 4. Google Business Profile

This is the only free path onto Google's map results for a search like "acoustic panel Kuala Lumpur", which the larger B2B acoustic contractors currently dominate.

- Set it up as a service-area business based in Kuala Lumpur (no physical shop address needs to be shown).
- Add the website link, WhatsApp number, hours, and photos of all 3 products.
- Ask past buyers for a Google review after a sale. A handful of genuine reviews here matters more for local search than any other single action on this list.

## 5. A real domain

`acoustic-treats.vercel.app` reads as a developer's demo project to a buyer, not a real business. A `.my` or `.com.my` domain costs roughly RM 50 to 100 a year and takes about 10 minutes to point at the existing Vercel deployment. This also makes the next item worth doing.

## 6. Offline touches

- Put a QR code to the site and the domain on every invoice.
- Put a small sticker with the QR code on the back of every delivered panel.
- Include it in the packaging.

Every delivered panel becomes a small ongoing referral, since these customers are the ones most likely to recommend the business to someone else furnishing a room.

## 7. Optional, higher effort

- **Shopee or Lazada**, but only for the standard fixed sizes, not custom orders: these platforms expect a fixed price and take a commission, which fits a size someone can buy off-the-shelf but not a made-to-order custom panel.
- **Short videos** (TikTok or Instagram Reels) of the workshop, especially cutting the Binary Abfuser's pattern, which is visually distinctive and shares well.
- **Consignment or referral arrangements** with Kuala Lumpur hi-fi retailers who sell complementary gear but not acoustic treatment themselves.
- **Lowyat forum**, in the audio equipment section, where a portion of this exact buyer segment already discusses gear.

## Tracking which channel actually works

WhatsApp and in-app browsers (Facebook, Instagram) strip normal referrer information, so Vercel Analytics alone cannot tell which channel a visitor came from. The fix is to use a different link ending for each channel when sharing the site, for example:

- `https://acoustic-treats.vercel.app/?utm_source=fb-marketplace`
- `https://acoustic-treats.vercel.app/?utm_source=fb-group`
- `https://acoustic-treats.vercel.app/?utm_source=carousell`
- `https://acoustic-treats.vercel.app/?utm_source=whatsapp`
- `https://acoustic-treats.vercel.app/?utm_source=gbp` (Google Business Profile)
- `https://acoustic-treats.vercel.app/?utm_source=qr` (invoice or packaging sticker)

These show up as distinct entries in Vercel Analytics, so it becomes possible to see which channel is actually producing visits over time, even though the number that matters most (an actual WhatsApp enquiry) is better tracked by the distinct prefilled message text described in the site roadmap.

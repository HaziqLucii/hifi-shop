// Single source of truth for business contact details, hours, and ordering
// terms. Previously the phone number and hours were duplicated by hand in
// six separate places (layout.tsx, page.tsx, footer.tsx, product-detail.tsx,
// products/page.tsx, request-quote/page.tsx); this file is that consolidation.

export const SITE_URL = "https://acoustic-treats.vercel.app"

export const business = {
  name: "Acoustic Treats",
  legalDescription:
    "Acoustic Treats supplies premium acoustic treatment panels, diffusers, and soundproofing solutions for home theaters, studios, and audiophile rooms in Malaysia.",
  phone: "+60197697886",
  phoneDisplay: "+6019-769 7886",
  email: "amaryaakob95@gmail.com",
  whatsappBase: "https://wa.me/60197697886",
  city: "Kuala Lumpur",
  region: "Malaysia",
  areaServed: "MY",
  // Not set: the About page's "founded 2010" copy predates this file and
  // reads like unedited template filler ("a group of passionate audiophiles
  // and acoustic engineers"), not a fact confirmed by the business owner.
  // Don't promote it elsewhere (hero, meta descriptions) until it's verified.
  hours: "Daily · 9:00–17:00 GMT+8",
  hoursOpens: "09:00",
  hoursCloses: "17:00",
  facebookPage: "https://www.facebook.com/share/1HBMqKSnVs/",
  facebookMarketplace: "https://www.facebook.com/marketplace/profile/100027440362157/?ref=permalink&mibextid=dXMIcH",
}

export function whatsappHref(message: string): string {
  return `${business.whatsappBase}?text=${encodeURIComponent(message)}`
}

// Ordering terms, gathered directly from the business owner (2026-09-10).
// Kept as prose rather than fabricated numbers per line item: some of these
// answers (e.g. delivery cost) were given as one example, not a fixed rate.
export const ordering = {
  leadTime: "Made-to-order pieces take about 5–8 days. Stock is a mix of ready-made and made-to-order, so some pieces may be quicker.",
  delivery:
    "Delivery cost depends on the size, weight, and material of your order. For example, two 60cm × 60cm panels typically run about RM20-30 to ship within Malaysia. Cash-on-delivery and face-to-face meetups are also available.",
  payment: "Bank transfer, cash, or e-wallet. A deposit of at least 60% is required upfront before production begins, since materials are cut to order.",
  installation:
    "Self-installation is straightforward. Professional installation is also available within the Klang Valley, from roughly RM300–500 depending on quantity and difficulty.",
  warranty: "1 month warranty.",
  customization: "Custom sizes, colours, and patterns beyond what's listed can be made to order.",
}

export const faqs = [
  {
    question: "Is stock ready-made or made to order?",
    answer: "It's a mix of both. Ready stock ships immediately; made-to-order pieces take about 5–8 days.",
  },
  {
    question: "Can I pay cash or meet up in person?",
    answer: "Yes. Cash-on-delivery and face-to-face meetups are available, alongside bank transfer and e-wallet.",
  },
  {
    question: "How many panels does my room need?",
    answer: "It depends on your room size and which areas need treatment. Message us your room dimensions on WhatsApp for a recommendation.",
  },
  {
    question: "Can you make custom sizes, colours, or patterns?",
    answer: "Yes, sizes, colours, and patterns beyond what's listed can be custom made to order.",
  },
  {
    question: "Do you offer installation?",
    answer: "Self-installation is straightforward. We also offer installation service within the Klang Valley, from roughly RM300–500 depending on quantity and difficulty.",
  },
  {
    question: "What's the typical delivery time?",
    answer: "About 5–8 days for made-to-order panels. Delivery cost depends on size, weight, and material.",
  },
  {
    question: "Is there a warranty?",
    answer: "Yes, a 1 month warranty is included.",
  },
  {
    question: "What payment methods do you accept, and is a deposit required?",
    answer: "Bank transfer, cash, or e-wallet. A deposit of at least 60% is required upfront before production begins.",
  },
]

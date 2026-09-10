// JSON-LD structured data builders. Centralised so every page renders the
// same shape and the business details only need to change in lib/business.ts.

import { business, SITE_URL } from "./business"
import type { Product } from "./products"

export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: business.name,
    alternateName: "Acoustic Treatment Panels & Solutions",
    url: SITE_URL,
    logo: `${SITE_URL}/apple-icon.png`,
    image: `${SITE_URL}/apple-icon.png`,
    description: business.legalDescription,
    areaServed: business.areaServed,
    address: {
      "@type": "PostalAddress",
      addressLocality: business.city,
      addressCountry: "MY",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: business.hoursOpens,
      closes: business.hoursCloses,
    },
    sameAs: [business.facebookPage, business.facebookMarketplace],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: business.phone,
      contactType: "sales",
      availableLanguage: ["English", "Malay"],
    },
  }
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: business.name,
    url: SITE_URL,
  }
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  }
}

export function productJsonLd(product: Product) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: product.images.map((img) => img.src),
    brand: {
      "@type": "Brand",
      name: business.name,
    },
    url: `${SITE_URL}/products/${product.slug}`,
  }
}

export function faqJsonLd(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }
}

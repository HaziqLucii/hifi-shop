import "./globals.css"
import { Fraunces, JetBrains_Mono, Space_Grotesk } from "next/font/google"
import Navbar from "./components/navbar"
import Footer from "./components/footer"
import { Analytics } from "@vercel/analytics/next"
import type { Metadata, Viewport } from "next"
import type React from "react"
import { SITE_URL, business } from "@/lib/business"
import { localBusinessJsonLd, websiteJsonLd } from "@/lib/schema"

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
})

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-body",
  display: "swap",
})

const grotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-grotesk",
  display: "swap",
})

export const viewport: Viewport = {
  themeColor: "#0b0a09",
}

export const metadata: Metadata = {
  title: {
    default: "Acoustic Treats | Acoustic Panels & Soundproofing Malaysia",
    template: "%s | Acoustic Treats",
  },
  description:
    "Acoustic Treats supplies premium acoustic treatment panels, diffusers, and soundproofing solutions for home theaters, studios, and audiophile rooms in Malaysia. Custom sizes available. Contact us on WhatsApp for a quote.",
  metadataBase: new URL(SITE_URL),
  alternates: {
    // Only the homepage inherits this: every other route (about, products,
    // product detail, request-quote) sets its own `alternates.canonical`,
    // which fully replaces this value rather than merging with it. Without
    // this, the homepage would ship with no canonical tag at all, since it's
    // a "use client" component and can't export its own metadata.
    canonical: "/",
  },
  openGraph: {
    title: "Acoustic Treats | Acoustic Panels & Soundproofing Malaysia",
    description:
      "Premium acoustic panels, diffusers, and soundproofing solutions for home theaters, studios, and audiophile rooms in Malaysia. Custom sizes available.",
    url: SITE_URL,
    siteName: business.name,
    locale: "en_MY",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  verification: {
    google: "3Fz8AnLc6C3s0eJiIGbEqVWBVZ4bSGN4NC4k_J2x3_k",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-MY">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd()) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd()) }}
        />
      </head>
      <body
        className={`${fraunces.variable} ${jetbrains.variable} ${grotesk.variable} font-body bg-acoustic-black text-acoustic-cream antialiased`}
      >
        <div className="film-grain" aria-hidden="true" />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}

import "./globals.css"
import { Fraunces, JetBrains_Mono, Space_Grotesk } from "next/font/google"
import Navbar from "./components/navbar"
import Footer from "./components/footer"
import TransitionLayout from "./components/transition-layout"
import ParallaxProviderWrapper from "./components/parallax-provider-wrapper"
import { Analytics } from "@vercel/analytics/next"
import type React from "react"

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

export const metadata = {
  title: "Acoustic Treats | Acoustic Panels & Soundproofing Malaysia",
  description:
    "Acoustic Treats supplies premium acoustic treatment panels, diffusers, and soundproofing solutions for home theaters, studios, and audiophile rooms in Malaysia. Custom sizes available. Contact us on WhatsApp for a quote.",
  metadataBase: new URL("https://acoustic-treats.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Acoustic Treats | Acoustic Panels & Soundproofing Malaysia",
    description:
      "Premium acoustic panels, diffusers, and soundproofing solutions for home theaters, studios, and audiophile rooms in Malaysia. Custom sizes available.",
    url: "https://acoustic-treats.vercel.app",
    siteName: "Acoustic Treats",
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

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Acoustic Treats",
  url: "https://acoustic-treats.vercel.app",
}

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Acoustic Treats",
  alternateName: "Acoustic Treatment Panels & Solutions",
  url: "https://acoustic-treats.vercel.app",
  logo: "https://acoustic-treats.vercel.app/apple-icon.png",
  description:
    "Acoustic Treats supplies premium acoustic treatment panels, diffusers, and soundproofing solutions for home theaters, studios, and audiophile rooms in Malaysia.",
  areaServed: "MY",
  sameAs: [
    "https://www.facebook.com/marketplace/profile/100027440362157/",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+60197697886",
    contactType: "sales",
    availableLanguage: ["English", "Malay"],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body
        className={`${fraunces.variable} ${jetbrains.variable} ${grotesk.variable} font-body bg-acoustic-black text-acoustic-cream antialiased`}
      >
        <div className="film-grain" aria-hidden="true" />
        <ParallaxProviderWrapper>
          <Navbar />
          <TransitionLayout>{children}</TransitionLayout>
          <Footer />
        </ParallaxProviderWrapper>
        <Analytics />
      </body>
    </html>
  )
}

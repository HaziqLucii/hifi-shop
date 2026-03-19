import "./globals.css"
import { Cormorant_Garamond, Outfit } from "next/font/google"
import Navbar from "./components/navbar"
import Footer from "./components/footer"
import TransitionLayout from "./components/transition-layout"
import ParallaxProviderWrapper from "./components/parallax-provider-wrapper"
import type React from "react"

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
})

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
})

export const metadata = {
  title: "Acoustic Treatment Panels & Solutions | Precision HiFi Acoustics",
  description:
    "Elevate your listening experience with Acoustic Treatment Panels & Solutions. We offer advanced acoustic panels, diffusers, and soundproofing solutions for home theaters, studios, and audiophile rooms. Custom sizes available. Contact us for expert acoustic design.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${cormorant.variable} ${outfit.variable} font-body bg-acoustic-black text-acoustic-cream`}>
        <ParallaxProviderWrapper>
          <Navbar />
          <TransitionLayout>{children}</TransitionLayout>
          <Footer />
        </ParallaxProviderWrapper>
      </body>
    </html>
  )
}

"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Breadcrumb } from "../../components/breadcrumb"

const BASE = "https://kx2kaqlxinzax2dn.public.blob.vercel-storage.com/absorptionpanel"

const productImages = [
  { src: `${BASE}/absorption-panel-1.jpeg`, alt: "Absorption Soundproof Panel - View 1" },
  { src: `${BASE}/absorption-panel-2.jpeg`, alt: "Absorption Soundproof Panel - View 2" },
  { src: `${BASE}/absorption-panel-3.jpeg`, alt: "Absorption Soundproof Panel - View 3" },
  { src: `${BASE}/absorption-panel-4.jpeg`, alt: "Absorption Soundproof Panel - View 4" },
  { src: `${BASE}/absorption-panel-5.jpeg`, alt: "Absorption Soundproof Panel - View 5" },
  { src: `${BASE}/absorption-panel-6.jpeg`, alt: "Absorption Soundproof Panel - View 6" },
]

const features = [
  "High absorption coefficient",
  "Broadband frequency absorption",
  "Fire-resistant materials",
  "Multiple thickness options",
  "Easy mounting system",
  "Customisable fabric finishes",
  "Custom sizes available upon request",
]

const specs = [
  { name: "Dimensions", value: "60cm × 120cm × 5cm" },
  { name: "Weight", value: "3.2 kg" },
  { name: "Material", value: "High-density foam core" },
  { name: "NRC Rating", value: "0.95" },
  { name: "Frequency Range", value: "125 Hz – 4000 Hz" },
  { name: "Fire Rating", value: "Class A" },
]

export default function AbsorptionSoundproof() {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)
  const [showMore, setShowMore] = useState(false)

  return (
    <div className="min-h-screen bg-acoustic-black">
      {/* Page header */}
      <div className="bg-acoustic-dark border-b border-acoustic-border py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Breadcrumb
            items={[
              { label: "Products", href: "/products" },
              { label: "Absorption Soundproof", href: "/products/absorption-soundproof" },
            ]}
          />
          <p className="font-body text-[9px] tracking-[0.3em] uppercase text-acoustic-gold mb-3">
            Echo &amp; Reverb Control
          </p>
          <h1 className="font-display text-4xl md:text-5xl text-acoustic-cream font-light">
            Absorption Soundproof
          </h1>
          <div className="gold-rule mt-5" />
          <p className="font-body text-base text-acoustic-muted mt-4 max-w-xl">
            Professional-grade sound absorption solution
          </p>
        </div>
      </div>

      {/* Main product section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Gallery */}
          <div>
            <div className="relative aspect-square overflow-hidden mb-3 border border-acoustic-border">
              <Image
                src={productImages[selectedImageIndex].src}
                alt={productImages[selectedImageIndex].alt}
                fill
                className="object-cover transition-opacity duration-300"
                priority
              />
            </div>
            <div className="grid grid-cols-4 sm:grid-cols-6 gap-1.5">
              {productImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImageIndex(index)}
                  className={`relative aspect-square overflow-hidden border transition-all duration-200 ${
                    selectedImageIndex === index
                      ? "border-acoustic-gold ring-1 ring-acoustic-gold/30"
                      : "border-acoustic-border hover:border-acoustic-gold/40 opacity-60 hover:opacity-100"
                  }`}
                >
                  <Image src={image.src} alt={image.alt} fill className="object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Details */}
          <div className="space-y-10">

            {/* Features */}
            <div>
              <p className="font-body text-[10px] tracking-[0.25em] uppercase text-acoustic-gold mb-5">
                Key Features
              </p>
              <ul className="space-y-2.5">
                {features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <svg className="w-4 h-4 text-acoustic-gold shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="font-body text-sm text-acoustic-muted">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Specs */}
            <div>
              <p className="font-body text-[10px] tracking-[0.25em] uppercase text-acoustic-gold mb-5">
                Specifications
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 border border-acoustic-border">
                {specs.map((item, i) => (
                  <div
                    key={item.name}
                    className={`px-5 py-4 border-acoustic-border ${i % 2 === 0 ? "sm:border-r" : ""} ${i < specs.length - 2 ? "border-b" : i === specs.length - 2 ? "border-b sm:border-b-0" : ""}`}
                  >
                    <dt className="font-body text-[9px] tracking-[0.2em] uppercase text-acoustic-gold/70 mb-1">{item.name}</dt>
                    <dd className="font-body text-sm text-acoustic-cream">{item.value}</dd>
                  </div>
                ))}
              </div>

              {/* Read more toggle */}
              <button
                onClick={() => setShowMore(!showMore)}
                className="mt-4 font-body text-[11px] tracking-[0.2em] uppercase text-acoustic-gold/60 hover:text-acoustic-gold transition-colors flex items-center gap-2"
              >
                {showMore ? "Read Less" : "Read More"}
                <span className={`block w-4 h-px bg-current transition-all ${showMore ? "" : "w-6"}`} />
              </button>
              {showMore && (
                <div className="mt-4 pl-0 border-l-2 border-acoustic-gold/20 pl-4 space-y-3 font-body text-sm text-acoustic-muted leading-[1.9]">
                  <p>
                    Our Absorption Soundproof panels are engineered to provide maximum sound absorption across a wide
                    frequency range. The high-density foam core effectively reduces room reflections, echo, and
                    reverberation, creating a controlled acoustic environment ideal for critical listening and recording.
                  </p>
                  <p>
                    Each panel features a carefully selected combination of materials that ensures optimal acoustic
                    performance while meeting strict fire safety standards. The panels can be covered with a variety of
                    fabric options to match your room&apos;s aesthetic, making them as visually appealing as they are
                    acoustically effective.
                  </p>
                </div>
              )}
            </div>

            {/* Custom size notice */}
            <div className="border-l-2 border-acoustic-gold/50 pl-5 py-1">
              <h3 className="font-body text-[10px] tracking-[0.2em] uppercase text-acoustic-gold mb-2">
                Custom Sizes Available
              </h3>
              <p className="font-body text-sm text-acoustic-muted leading-relaxed">
                We offer custom dimensions to fit your specific acoustic requirements.
                Contact us via WhatsApp for details and pricing.
              </p>
            </div>

            {/* CTAs */}
            <div className="space-y-3 pt-2">
              <a
                href="https://wa.me/60197697886?text=Hi%2C%20I%27m%20interested%20in%20the%20Absorption%20Soundproof%20Panel.%20Could%20you%20provide%20more%20information%20and%20pricing%3F"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-3 font-body text-[11px] tracking-[0.2em] uppercase bg-acoustic-gold text-acoustic-black py-4 px-8 hover:bg-acoustic-gold-light transition-colors font-semibold"
              >
                <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                </svg>
                Enquire via WhatsApp
              </a>
              <Link
                href="/request-quote"
                className="w-full flex items-center justify-center font-body text-[11px] tracking-[0.2em] uppercase border border-acoustic-gold/50 text-acoustic-gold py-4 px-8 hover:border-acoustic-gold hover:bg-acoustic-gold/5 transition-all duration-200"
              >
                Request a Formal Quote
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* About section */}
      <div className="bg-acoustic-dark border-t border-acoustic-border acoustic-grid py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <p className="font-body text-[10px] tracking-[0.25em] uppercase text-acoustic-gold mb-3">
            About This Product
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-acoustic-cream font-light mb-8">
            About Absorption Soundproof
          </h2>
          <div className="max-w-3xl space-y-5 font-body text-sm text-acoustic-muted leading-[1.9]">
            <p>
              Our Absorption Soundproof panels are engineered to provide maximum sound absorption across a wide
              frequency range. The high-density foam core effectively reduces room reflections, echo, and reverberation,
              creating a controlled acoustic environment ideal for critical listening and recording.
            </p>
            <p>
              Each panel features a carefully selected combination of materials that ensures optimal acoustic
              performance while meeting strict fire safety standards. The panels can be covered with a variety of fabric
              options to match your room&apos;s aesthetic, making them as visually appealing as they are acoustically
              effective.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

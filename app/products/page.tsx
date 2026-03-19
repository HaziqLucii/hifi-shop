"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Breadcrumb } from "../components/breadcrumb"

const products = [
  {
    name: "Binary Abfuser",
    tag: "Hybrid Absorber · Diffuser",
    description: "Advanced acoustic treatment combining absorption and diffusion. Multiple pattern variations and finish options for precise sound control.",
    image: "https://kx2kaqlxinzax2dn.public.blob.vercel-storage.com/binaryabfuser/binaryabfuser-1.jpg",
    link: "/products/binary-abfuser",
    specs: ["NRC 0.85", "60×60×10cm", "125–4000 Hz"],
  },
  {
    name: "Acoustic Diffuser",
    tag: "Sound Wave Scattering",
    description: "Precision-engineered sound wave scattering for optimal acoustic balance. Mathematically designed surface patterns in wood, foam, or composite.",
    image: "https://kx2kaqlxinzax2dn.public.blob.vercel-storage.com/diffuser/diffusers-1.jpeg",
    link: "/products/diffuser",
    specs: ["60×60×15cm", "500–5000 Hz", "10–15 m²"],
  },
  {
    name: "Absorption Soundproof",
    tag: "Echo & Reverb Control",
    description: "Professional-grade sound absorption. High-density foam core with fire-rated materials. Effectively reduces echo and reverberation.",
    image: "https://kx2kaqlxinzax2dn.public.blob.vercel-storage.com/absorptionpanel/absorption-panel-1.jpeg",
    link: "/products/absorption-soundproof",
    specs: ["NRC 0.95", "60×120×5cm", "Class A Fire Rating"],
  },
]

export default function Products() {
  return (
    <div className="min-h-screen bg-acoustic-black">
      {/* Page header */}
      <div className="bg-acoustic-dark border-b border-acoustic-border py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Breadcrumb items={[{ label: "Products", href: "/products" }]} />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-body text-[10px] tracking-[0.35em] uppercase text-acoustic-gold mb-4">
              Our Collection
            </p>
            <h1 className="font-display text-4xl md:text-5xl text-acoustic-cream font-light">
              Acoustic Products
            </h1>
            <div className="gold-rule mt-6" />
          </motion.div>
        </div>
      </div>

      {/* Products list */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="space-y-px border border-acoustic-border">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              className="grid md:grid-cols-2 group"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
            >
              {/* Image */}
              <div className={`relative aspect-square md:aspect-[4/3] overflow-hidden ${index % 2 === 1 ? "md:order-last" : ""}`}>
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover img-zoom"
                />
                <div className="absolute inset-0 bg-acoustic-black/20 group-hover:bg-acoustic-black/5 transition-colors duration-500" />
              </div>

              {/* Info */}
              <div className="flex flex-col justify-center p-10 md:p-14 bg-acoustic-card group-hover:bg-acoustic-card-hover transition-colors duration-300 border-t md:border-t-0 border-acoustic-border">
                <p className="font-body text-[9px] tracking-[0.3em] uppercase text-acoustic-gold mb-4">
                  {product.tag}
                </p>
                <h2 className="font-display text-3xl md:text-4xl text-acoustic-cream font-light mb-5">
                  {product.name}
                </h2>
                <p className="font-body text-sm text-acoustic-muted leading-relaxed mb-8">
                  {product.description}
                </p>

                {/* Spec pills */}
                <div className="flex flex-wrap gap-2 mb-10">
                  {product.specs.map((spec) => (
                    <span
                      key={spec}
                      className="font-body text-[10px] tracking-wider uppercase text-acoustic-muted border border-acoustic-border px-3 py-1"
                    >
                      {spec}
                    </span>
                  ))}
                </div>

                <Link
                  href={product.link}
                  className="inline-flex items-center gap-3 font-body text-[11px] tracking-[0.2em] uppercase text-acoustic-gold hover:text-acoustic-gold-light transition-colors group/link w-fit"
                >
                  <span>View Details</span>
                  <span className="block w-8 h-px bg-acoustic-gold group-hover/link:w-14 transition-all duration-300" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 border border-acoustic-border p-10 md:p-14 bg-acoustic-card text-center acoustic-grid">
          <p className="font-body text-[10px] tracking-[0.35em] uppercase text-acoustic-gold mb-4">
            Custom Orders
          </p>
          <h3 className="font-display text-3xl md:text-4xl text-acoustic-cream font-light mb-4">
            Need a Custom Size or Finish?
          </h3>
          <p className="font-body text-sm text-acoustic-muted mb-8 max-w-lg mx-auto leading-relaxed">
            All products are available in custom dimensions and finishes to suit your specific acoustic requirements and room aesthetics.
          </p>
          <a
            href="https://wa.me/60197697886"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 font-body text-[11px] tracking-[0.2em] uppercase bg-acoustic-gold text-acoustic-black px-8 py-4 hover:bg-acoustic-gold-light transition-colors font-semibold"
          >
            <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
            </svg>
            Enquire via WhatsApp
          </a>
        </div>
      </div>
    </div>
  )
}

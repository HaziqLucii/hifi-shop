"use client"

import Image from "next/image"
import Link from "next/link"
import { ChevronDown } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { useCallback, useEffect, useRef } from "react"

function SoundWave({ className }: { className?: string }) {
  const bars = [4, 9, 15, 22, 18, 28, 20, 34, 18, 26, 14, 20, 10, 16, 8, 12, 18, 26, 30, 22, 16, 24, 30, 18, 12, 8, 14, 20]
  return (
    <svg className={className} viewBox="0 0 308 40" fill="none" aria-hidden="true">
      {bars.map((h, i) => (
        <rect
          key={i}
          x={i * 11 + 1}
          y={(40 - h) / 2}
          width={2.5}
          height={h}
          fill="currentColor"
          opacity={0.3 + (h / 34) * 0.65}
          rx="1"
        />
      ))}
    </svg>
  )
}

function WhyChooseUsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.25 })

  const reasons = [
    {
      number: "01",
      title: "Deep HiFi Expertise",
      description: "Backed by years of hands-on experience in high-fidelity audio and room acoustics.",
    },
    {
      number: "02",
      title: "Premium Materials",
      description: "Carefully selected, fire-rated acoustic materials that perform as beautifully as they look.",
    },
    {
      number: "03",
      title: "Custom Solutions",
      description: "Every room is unique. We tailor each treatment to your specific space and acoustic goals.",
    },
  ]

  return (
    <section ref={ref} className="py-32 bg-acoustic-dark acoustic-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 24 }}
          transition={{ duration: 0.7 }}
        >
          <p className="font-body text-[10px] tracking-[0.35em] uppercase text-acoustic-gold mb-5">
            Why Choose Us
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-acoustic-cream font-light">
            Precision. Quality. Expertise.
          </h2>
          <div className="gold-rule mx-auto mt-6" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-px border border-acoustic-border">
          {reasons.map((item, index) => (
            <motion.div
              key={item.title}
              className="p-10 md:p-12 bg-acoustic-card hover:bg-acoustic-card-hover transition-colors duration-300 group"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 40 }}
              transition={{ duration: 0.65, delay: index * 0.14 }}
            >
              <span className="font-display text-6xl text-acoustic-gold/15 group-hover:text-acoustic-gold/25 transition-colors duration-300 block mb-8 leading-none">
                {item.number}
              </span>
              <h3 className="font-display text-2xl text-acoustic-cream mb-4 font-light">{item.title}</h3>
              <p className="font-body text-sm text-acoustic-muted leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function FeaturedProductsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.08 })

  const products = [
    {
      name: "Binary Abfuser",
      tag: "Hybrid Absorber · Diffuser",
      description:
        "Advanced acoustic treatment combining absorption and diffusion. Perfect for studios and listening rooms requiring precise sound control.",
      image: "https://kx2kaqlxinzax2dn.public.blob.vercel-storage.com/binaryabfuser/binaryabfuser-1.jpg",
      link: "/products/binary-abfuser",
    },
    {
      name: "Acoustic Diffuser",
      tag: "Sound Wave Scattering",
      description:
        "Precision-engineered sound wave scattering for optimal acoustic balance. Creates a natural, spacious sound environment.",
      image: "https://kx2kaqlxinzax2dn.public.blob.vercel-storage.com/diffuser/diffusers-1.jpeg",
      link: "/products/diffuser",
    },
    {
      name: "Absorption Panel",
      tag: "Echo & Reverb Control",
      description:
        "Professional-grade sound absorption solution. Effectively reduces echo and reverberation for clearer sound reproduction.",
      image: "https://kx2kaqlxinzax2dn.public.blob.vercel-storage.com/absorptionpanel/absorption-panel-1.jpeg",
      link: "/products/absorption-soundproof",
    },
  ]

  return (
    <section ref={ref} className="py-32 bg-acoustic-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 24 }}
          transition={{ duration: 0.7 }}
        >
          <p className="font-body text-[10px] tracking-[0.35em] uppercase text-acoustic-gold mb-5">
            Our Products
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-acoustic-cream font-light">
            Engineered for Perfection
          </h2>
          <div className="gold-rule mx-auto mt-6" />
        </motion.div>

        <div className="space-y-px border border-acoustic-border">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              className="grid md:grid-cols-2 group"
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 32 }}
              transition={{ duration: 0.7, delay: index * 0.12 }}
            >
              {/* Image */}
              <div className={`relative aspect-[4/3] overflow-hidden ${index % 2 === 1 ? "md:order-last" : ""}`}>
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover img-zoom"
                />
                <div className="absolute inset-0 bg-acoustic-black/25 group-hover:bg-acoustic-black/10 transition-colors duration-500" />
              </div>

              {/* Text */}
              <div className="flex flex-col justify-center p-10 md:p-16 bg-acoustic-card group-hover:bg-acoustic-card-hover transition-colors duration-300 border-t md:border-t-0 border-acoustic-border">
                <p className="font-body text-[9px] tracking-[0.3em] uppercase text-acoustic-gold mb-4">
                  {product.tag}
                </p>
                <h3 className="font-display text-3xl md:text-4xl text-acoustic-cream font-light mb-6">
                  {product.name}
                </h3>
                <p className="font-body text-sm text-acoustic-muted leading-relaxed mb-10">
                  {product.description}
                </p>
                <Link
                  href={product.link}
                  className="inline-flex items-center gap-3 font-body text-[11px] tracking-[0.2em] uppercase text-acoustic-gold hover:text-acoustic-gold-light transition-colors group/link w-fit"
                >
                  <span>Discover</span>
                  <span className="block w-8 h-px bg-acoustic-gold group-hover/link:w-14 transition-all duration-300" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-14">
          <Link
            href="/products"
            className="inline-block font-body text-[11px] tracking-[0.2em] uppercase border border-acoustic-gold text-acoustic-gold px-10 py-4 hover:bg-acoustic-gold hover:text-acoustic-black transition-all duration-200"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  )
}

function TestimonialsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.25 })

  const testimonials = [
    {
      name: "Jeeva",
      date: "Jun 2, 2025",
      comment: "Excellent seller! Great punctuality, communication, pricing, and item description. Highly recommended!",
      strengths: ["Punctuality", "Communication", "Pricing", "Item Description"],
    },
    {
      name: "Jeremiah",
      date: "Mar 31, 2025",
      comment: "Outstanding communication throughout the process. Very professional and reliable seller.",
      strengths: ["Communication"],
    },
    {
      name: "Angel",
      date: "Mar 10, 2025",
      comment: "Very punctual and professional service. Products exactly as described. Will definitely buy again!",
      strengths: ["Punctuality"],
    },
  ]

  return (
    <section ref={ref} className="py-32 bg-acoustic-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 24 }}
          transition={{ duration: 0.7 }}
        >
          <p className="font-body text-[10px] tracking-[0.35em] uppercase text-acoustic-gold mb-5">
            Client Reviews
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-acoustic-cream font-light mb-5">
            What Our Clients Say
          </h2>
          <div className="flex items-center justify-center gap-2 mb-2">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-4 h-4 text-acoustic-gold fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="font-body text-sm text-acoustic-cream font-medium">4.6</span>
            <span className="font-body text-sm text-acoustic-muted">(26 reviews)</span>
          </div>
          <p className="font-body text-xs text-acoustic-dim">Based on Facebook Marketplace reviews</p>
          <div className="gold-rule mx-auto mt-6" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-px border border-acoustic-border">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.name}
              className="bg-acoustic-card p-8 md:p-10"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
              transition={{ duration: 0.65, delay: index * 0.12 }}
            >
              <span className="font-display text-7xl text-acoustic-gold/15 leading-none block mb-1 select-none">
                &ldquo;
              </span>
              <p className="font-body text-sm text-acoustic-muted leading-relaxed mb-8">
                {t.comment}
              </p>
              <div className="pt-5 border-t border-acoustic-border">
                <p className="font-body text-sm font-medium text-acoustic-cream">{t.name}</p>
                <p className="font-body text-xs text-acoustic-dim mt-0.5 mb-3">{t.date}</p>
                <div className="flex flex-wrap gap-1.5">
                  {t.strengths.map((s) => (
                    <span
                      key={s}
                      className="font-body text-[9px] tracking-[0.15em] uppercase text-acoustic-gold bg-acoustic-gold/5 border border-acoustic-gold/20 px-2 py-0.5"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-8">
          <a
            href="https://www.facebook.com/marketplace/profile/100027440362157/?ref=permalink&mibextid=dXMIcH"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-xs text-acoustic-dim hover:text-acoustic-muted transition-colors underline underline-offset-4"
          >
            See more reviews on Facebook Marketplace →
          </a>
        </div>
      </div>
    </section>
  )
}

function ContactSection() {
  return (
    <section className="py-32 bg-acoustic-black acoustic-grid">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="font-body text-[10px] tracking-[0.35em] uppercase text-acoustic-gold mb-5">
          Get in Touch
        </p>
        <h2 className="font-display text-4xl md:text-5xl text-acoustic-cream font-light mb-6">
          Ready to Transform Your Space?
        </h2>
        <div className="gold-rule mx-auto mb-8" />
        <p className="font-body text-sm text-acoustic-muted mb-12 max-w-md mx-auto leading-relaxed">
          Our acoustic experts are available every day, 9:00 AM – 5:00 PM GMT +8.
          Reach out via WhatsApp for the fastest response.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <a
            href="https://wa.me/60197697886"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 font-body text-[11px] tracking-[0.2em] uppercase bg-acoustic-gold text-acoustic-black px-8 py-4 hover:bg-acoustic-gold-light transition-colors font-semibold"
          >
            <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
            </svg>
            WhatsApp Us
          </a>
          <Link
            href="/request-quote"
            className="inline-flex items-center justify-center font-body text-[11px] tracking-[0.2em] uppercase border border-acoustic-gold/60 text-acoustic-gold px-8 py-4 hover:border-acoustic-gold hover:bg-acoustic-gold/5 transition-all duration-200"
          >
            Request a Quote
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-10 border-t border-acoustic-border">
          <div>
            <p className="font-body text-[9px] tracking-[0.25em] uppercase text-acoustic-gold mb-2">Phone</p>
            <a href="tel:+60197697886" className="font-body text-sm text-acoustic-muted hover:text-acoustic-cream transition-colors">
              +6019-769 7886
            </a>
          </div>
          <div>
            <p className="font-body text-[9px] tracking-[0.25em] uppercase text-acoustic-gold mb-2">Email</p>
            <a href="mailto:amaryaakob95@gmail.com" className="font-body text-sm text-acoustic-muted hover:text-acoustic-cream transition-colors">
              amaryaakob95@gmail.com
            </a>
          </div>
          <div>
            <p className="font-body text-[9px] tracking-[0.25em] uppercase text-acoustic-gold mb-2">Marketplace</p>
            <a
              href="https://www.facebook.com/marketplace/profile/100027440362157/?ref=permalink&mibextid=dXMIcH"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-sm text-acoustic-muted hover:text-acoustic-cream transition-colors"
            >
              Facebook Marketplace
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  const scrollToNextSection = useCallback(() => {
    window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="bg-acoustic-black">
      {/* ── Hero ── */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <Image
          src="https://www.primacoustic.com/wp-content/uploads/2023/02/The-LBT_Showcase_8.jpg"
          alt="Acoustic-treated HiFi listening room"
          fill
          className="object-cover animate-zoom-in"
          quality={100}
          priority
        />
        {/* Layered gradient: keep image visible in middle, fade to black at bottom */}
        <div className="absolute inset-0 bg-gradient-to-b from-acoustic-black/60 via-acoustic-black/40 to-acoustic-black" />

        {/* Hero content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.div
            className="flex justify-center mb-10"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.2 }}
          >
            <SoundWave className="w-56 md:w-72 text-acoustic-gold/55" />
          </motion.div>

          <motion.p
            className="font-body text-[10px] tracking-[0.4em] uppercase text-acoustic-gold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
          >
            Acoustic Treats
          </motion.p>

          <motion.h1
            className="font-display text-5xl sm:text-6xl lg:text-7xl text-acoustic-cream font-light leading-tight mb-6"
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.6 }}
          >
            Precision Acoustics<br />
            <span className="text-acoustic-gold italic">Perfected</span>
          </motion.h1>

          <motion.p
            className="font-body text-base sm:text-lg text-acoustic-muted mb-12 max-w-lg mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Acoustic Treats crafts premium acoustic panels, diffusers, and soundproofing
            for home theaters, studios, and audiophile rooms.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <Link
              href="/products"
              className="inline-block font-body text-[11px] tracking-[0.2em] uppercase bg-acoustic-gold text-acoustic-black px-10 py-4 hover:bg-acoustic-gold-light transition-colors font-semibold"
            >
              Explore Products
            </Link>
            <Link
              href="/request-quote"
              className="inline-block font-body text-[11px] tracking-[0.2em] uppercase border border-acoustic-cream/25 text-acoustic-cream px-10 py-4 hover:border-acoustic-gold hover:text-acoustic-gold transition-all duration-200"
            >
              Request a Quote
            </Link>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <button
          onClick={scrollToNextSection}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-acoustic-cream/30 hover:text-acoustic-gold transition-colors"
          aria-label="Scroll to next section"
        >
          <ChevronDown className="w-6 h-6" />
        </button>
      </section>

      <WhyChooseUsSection />
      <FeaturedProductsSection />
      <TestimonialsSection />
      <ContactSection />
    </div>
  )
}

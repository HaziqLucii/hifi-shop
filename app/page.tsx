"use client"

import Image from "next/image"
import Link from "next/link"
import { ChevronDown } from "lucide-react"
import { useCallback, useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"

gsap.registerPlugin(useGSAP, ScrollTrigger)

function SoundWave({ className }: { className?: string }) {
  const bars = [4, 9, 15, 22, 18, 28, 20, 34, 18, 26, 14, 20, 10, 16, 8, 12, 18, 26, 30, 22, 16, 24, 30, 18, 12, 8, 14, 20]
  return (
    <svg className={className} viewBox="0 0 308 40" fill="none" aria-hidden="true">
      {bars.map((h, i) => (
        <rect key={i} x={i * 11 + 1} y={(40 - h) / 2} width={2.5} height={h} fill="currentColor" opacity={0.25 + (h / 34) * 0.7} rx="0.5" />
      ))}
    </svg>
  )
}

const PRODUCTS = [
  {
    idx: "01",
    name: "Binary Abfuser",
    tag: "Hybrid Absorber · Diffuser",
    description:
      "Advanced acoustic treatment combining absorption and diffusion. Built for studios and listening rooms that need precise sound control.",
    image: "https://kx2kaqlxinzax2dn.public.blob.vercel-storage.com/binaryabfuser/binaryabfuser-1.jpg",
    link: "/products/binary-abfuser",
    specs: [
      ["Type", "Hybrid absorber / diffuser"],
      ["Best for", "Studios · listening rooms"],
      ["Sizing", "Made to order"],
    ],
  },
  {
    idx: "02",
    name: "Acoustic Diffuser",
    tag: "Sound Wave Scattering",
    description:
      "Precision-engineered sound wave scattering for a natural, spacious sound field. Restores balance without deadening the room.",
    image: "https://kx2kaqlxinzax2dn.public.blob.vercel-storage.com/diffuser/diffusers-1.jpeg",
    link: "/products/diffuser",
    specs: [
      ["Type", "Diffusion panel"],
      ["Best for", "Home theaters · rooms"],
      ["Sizing", "Made to order"],
    ],
  },
  {
    idx: "03",
    name: "Absorption Panel",
    tag: "Echo & Reverb Control",
    description:
      "Professional-grade sound absorption. Reduces echo and reverberation for clearer, more accurate sound reproduction.",
    image: "https://kx2kaqlxinzax2dn.public.blob.vercel-storage.com/absorptionpanel/absorption-panel-1.jpeg",
    link: "/products/absorption-soundproof",
    specs: [
      ["Type", "Broadband absorber"],
      ["Best for", "Echo · reverb control"],
      ["Sizing", "Made to order"],
    ],
  },
]

const STATS = [
  ["03", "Product Lines"],
  ["4.6", "Marketplace Rating"],
  ["26", "Verified Reviews"],
  ["100%", "Custom Sized"],
]

const REASONS = [
  { number: "01", title: "Deep HiFi Expertise", description: "Backed by years of hands-on experience in high-fidelity audio and room acoustics." },
  { number: "02", title: "Premium Materials", description: "Carefully selected, fire-rated acoustic materials that perform as beautifully as they look." },
  { number: "03", title: "Custom Solutions", description: "Every room is unique. Each treatment is tailored to your specific space and acoustic goals." },
]

const TESTIMONIALS = [
  { name: "Jeeva", date: "2025.06.02", comment: "Excellent seller! Great punctuality, communication, pricing, and item description. Highly recommended!", strengths: ["Punctuality", "Communication", "Pricing"] },
  { name: "Jeremiah", date: "2025.03.31", comment: "Outstanding communication throughout the process. Very professional and reliable seller.", strengths: ["Communication"] },
  { name: "Angel", date: "2025.03.10", comment: "Very punctual and professional service. Products exactly as described. Will definitely buy again!", strengths: ["Punctuality"] },
]

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className="font-body text-[10px] tracking-[0.35em] uppercase text-acoustic-gold">{children}</p>
}

export default function Home() {
  const root = useRef<HTMLDivElement>(null)

  const scrollToNextSection = useCallback(() => {
    window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // Magnetic buttons (pointer-fine, motion-safe only)
  useEffect(() => {
    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      window.matchMedia("(pointer: coarse)").matches
    ) {
      return
    }
    const els = gsap.utils.toArray<HTMLElement>(".magnetic")
    const cleanups: Array<() => void> = []
    els.forEach((el) => {
      const xTo = gsap.quickTo(el, "x", { duration: 0.5, ease: "power3" })
      const yTo = gsap.quickTo(el, "y", { duration: 0.5, ease: "power3" })
      const onMove = (e: MouseEvent) => {
        const r = el.getBoundingClientRect()
        xTo((e.clientX - (r.left + r.width / 2)) * 0.28)
        yTo((e.clientY - (r.top + r.height / 2)) * 0.45)
      }
      const onLeave = () => {
        xTo(0)
        yTo(0)
      }
      el.addEventListener("mousemove", onMove)
      el.addEventListener("mouseleave", onLeave)
      cleanups.push(() => {
        el.removeEventListener("mousemove", onMove)
        el.removeEventListener("mouseleave", onLeave)
      })
    })
    return () => cleanups.forEach((fn) => fn())
  }, [])

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

      // Top scroll-progress bar
      gsap.to(".scroll-progress", {
        scaleX: 1,
        ease: "none",
        scrollTrigger: {
          trigger: document.documentElement,
          start: 0,
          end: () => document.documentElement.scrollHeight - window.innerHeight,
          scrub: 0.3,
        },
      })

      // Hero intro (pre-paint via useGSAP layout effect — no flash)
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } })
      tl.from(".hero-meta", { autoAlpha: 0, y: -12, duration: 0.7, delay: 0.1 })
        .from(".hero-wave", { autoAlpha: 0, y: -10, duration: 0.8 }, "-=0.4")
        .from(".hero-eyebrow", { autoAlpha: 0, y: 16, duration: 0.6 }, "-=0.4")
        .from(".hero-title-line", { autoAlpha: 0, y: 46, duration: 0.95, stagger: 0.11 }, "-=0.3")
        .from(".hero-sub", { autoAlpha: 0, y: 18, duration: 0.7 }, "-=0.5")
        .from(".hero-spec", { autoAlpha: 0, y: 14, duration: 0.6 }, "-=0.45")
        .from(".hero-cta", { autoAlpha: 0, y: 16, duration: 0.6, stagger: 0.1 }, "-=0.4")
        .from(".hero-frame", { autoAlpha: 0, y: 40, duration: 1.0 }, "-=0.9")
        .from(".hero-scroll", { autoAlpha: 0, duration: 0.6 }, "-=0.2")

      // Hero image parallax within its frame
      gsap.fromTo(
        ".hero-image",
        { yPercent: -6, scale: 1.08 },
        {
          yPercent: 8,
          scale: 1.14,
          ease: "none",
          scrollTrigger: { trigger: ".hero-section", start: "top top", end: "bottom top", scrub: true },
        }
      )

      // Section header reveals
      gsap.utils.toArray<HTMLElement>(".reveal").forEach((el) => {
        gsap.from(el, {
          autoAlpha: 0,
          y: 44,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 85%" },
        })
      })

      // Staggered group reveals
      gsap.utils.toArray<HTMLElement>("[data-stagger]").forEach((group) => {
        gsap.from(group.querySelectorAll("[data-stagger-item]"), {
          autoAlpha: 0,
          y: 50,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.12,
          scrollTrigger: { trigger: group, start: "top 82%" },
        })
      })

      // Product image parallax
      gsap.utils.toArray<HTMLElement>(".product-row").forEach((row) => {
        gsap.fromTo(
          row.querySelector(".product-parallax"),
          { yPercent: -8 },
          {
            yPercent: 8,
            ease: "none",
            scrollTrigger: { trigger: row, start: "top bottom", end: "bottom top", scrub: true },
          }
        )
      })
    },
    { scope: root }
  )

  return (
    <div ref={root} className="bg-acoustic-black">
      {/* Scroll progress */}
      <div className="scroll-progress fixed top-0 left-0 z-50 h-[2px] w-full origin-left scale-x-0 bg-acoustic-gold" />

      {/* ── Hero ── */}
      <section className="hero-section relative min-h-screen flex items-center overflow-hidden pt-28 pb-24 md:pt-28 md:pb-28">
        {/* Kanji watermark */}
        <span aria-hidden="true" className="pointer-events-none select-none absolute -right-10 top-1/2 -translate-y-1/2 font-display text-[26rem] lg:text-[40rem] leading-none text-acoustic-gold/[0.035]">
          響
        </span>
        {/* Vertical margin text */}
        <span aria-hidden="true" className="hidden xl:block absolute left-5 top-1/2 -translate-y-1/2 [writing-mode:vertical-rl] rotate-180 font-body text-[10px] tracking-[0.4em] uppercase text-acoustic-dim/70 whitespace-nowrap">
          Precision Room Acoustics · Est. Malaysia
        </span>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-10 items-center">
            {/* Text column */}
            <div className="lg:col-span-7">
              <div className="hero-meta flex items-center gap-4 mb-8 font-body text-[10px] tracking-[0.28em] uppercase text-acoustic-muted">
                <span className="text-acoustic-gold">◆</span>
                <span>Kuala Lumpur · MYS</span>
                <span className="h-px w-10 bg-acoustic-border" />
                <span className="text-acoustic-dim">Index / 001</span>
              </div>

              <div className="hero-wave mb-8">
                <SoundWave className="w-44 text-acoustic-gold/45" />
              </div>

              <p className="hero-eyebrow font-body text-[11px] tracking-[0.4em] uppercase text-acoustic-gold mb-6">
                Acoustic Treats
              </p>

              <h1 className="font-display font-light text-acoustic-cream leading-[0.95] text-6xl sm:text-7xl lg:text-8xl mb-8">
                <span className="hero-title-line block">Precision</span>
                <span className="hero-title-line block">acoustics,</span>
                <span className="hero-title-line block italic text-acoustic-gold">perfected.</span>
              </h1>

              <p className="hero-sub font-body text-[13px] sm:text-sm text-acoustic-muted leading-relaxed max-w-md mb-10">
                Premium acoustic panels, diffusers, and soundproofing for home theaters,
                recording studios, and audiophile listening rooms.
              </p>

              <div className="hero-spec flex flex-wrap items-center gap-x-6 gap-y-2 mb-10 font-body text-[10px] tracking-[0.22em] uppercase text-acoustic-muted">
                <span>Custom Sized</span>
                <span className="text-acoustic-gold/30">/</span>
                <span>Fire-Rated Materials</span>
                <span className="text-acoustic-gold/30">/</span>
                <span>Made to Order</span>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/request-quote"
                  className="hero-cta magnetic inline-flex items-center justify-center gap-3 font-body text-[11px] tracking-[0.2em] uppercase bg-acoustic-gold text-acoustic-black px-9 py-4 hover:bg-acoustic-gold-light transition-colors font-medium"
                >
                  <span>›</span> Request a Quote
                </Link>
                <Link
                  href="/products"
                  className="hero-cta magnetic inline-flex items-center justify-center gap-3 font-body text-[11px] tracking-[0.2em] uppercase border border-acoustic-border text-acoustic-cream px-9 py-4 hover:border-acoustic-gold hover:text-acoustic-gold transition-all duration-200"
                >
                  <span>›</span> View Products
                </Link>
              </div>
            </div>

            {/* Image column */}
            <div className="lg:col-span-5">
              <div className="hero-frame relative border border-acoustic-border p-3">
                <div className="halftone relative aspect-[4/5] overflow-hidden">
                  <div className="hero-image absolute inset-0">
                    <Image
                      src={PRODUCTS[0].image}
                      alt="Binary Abfuser acoustic panel"
                      fill
                      className="object-cover"
                      quality={90}
                      priority
                    />
                  </div>
                </div>
                <div className="flex items-center justify-between mt-3 font-body text-[9px] tracking-[0.25em] uppercase text-acoustic-dim">
                  <span>Fig. 01 — Binary Abfuser</span>
                  <span>MYS</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <button
          onClick={scrollToNextSection}
          className="hero-scroll absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce text-acoustic-cream/30 hover:text-acoustic-gold transition-colors"
          aria-label="Scroll to next section"
        >
          <ChevronDown className="w-6 h-6" />
        </button>
      </section>

      {/* ── Stat band ── */}
      <section className="border-y border-acoustic-border bg-acoustic-dark">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-acoustic-border" data-stagger>
          {STATS.map(([value, label]) => (
            <div key={label} data-stagger-item className="px-6 py-10 md:py-14">
              <p className="font-grotesk text-4xl md:text-5xl text-acoustic-cream font-light tabular-nums leading-none mb-3">
                {value}
              </p>
              <p className="font-body text-[10px] tracking-[0.22em] uppercase text-acoustic-muted">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Products ── */}
      <section className="py-24 md:py-32 bg-acoustic-black relative overflow-hidden">
        <span aria-hidden="true" className="pointer-events-none select-none absolute -left-16 top-24 font-display text-[22rem] leading-none text-acoustic-gold/[0.03]">
          音
        </span>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="reveal flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <div>
              <SectionLabel>System Catalogue / 01–03</SectionLabel>
              <h2 className="font-display text-4xl md:text-6xl text-acoustic-cream font-light mt-4">
                Engineered for perfection
              </h2>
            </div>
            <div className="gold-rule md:mb-3" />
          </div>

          <div className="border-t border-acoustic-border">
            {PRODUCTS.map((product, index) => (
              <div key={product.name} className="product-row group grid md:grid-cols-12 gap-8 md:gap-10 items-center py-12 md:py-16 border-b border-acoustic-border">
                {/* Index */}
                <div className="md:col-span-1">
                  <span className="font-body text-sm tracking-[0.2em] text-acoustic-gold/50">{product.idx}</span>
                </div>

                {/* Image */}
                <div className={`md:col-span-5 ${index % 2 === 1 ? "md:order-last" : ""}`}>
                  <div className="relative aspect-[3/2] overflow-hidden border border-acoustic-border">
                    <div className="product-parallax absolute inset-0">
                      <Image src={product.image} alt={product.name} fill className="object-cover img-zoom" />
                    </div>
                  </div>
                </div>

                {/* Copy */}
                <div className="md:col-span-6">
                  <p className="font-body text-[9px] tracking-[0.3em] uppercase text-acoustic-gold mb-4">{product.tag}</p>
                  <h3 className="font-display text-3xl md:text-4xl text-acoustic-cream font-light mb-5">{product.name}</h3>
                  <p className="font-body text-[13px] text-acoustic-muted leading-relaxed mb-8 max-w-md">{product.description}</p>

                  <dl className="mb-8 max-w-md">
                    {product.specs.map(([k, v]) => (
                      <div key={k} className="flex items-baseline justify-between gap-4 py-2.5 border-t border-acoustic-border">
                        <dt className="font-body text-[9px] tracking-[0.25em] uppercase text-acoustic-dim">{k}</dt>
                        <dd className="font-body text-[11px] tracking-[0.05em] text-acoustic-muted text-right">{v}</dd>
                      </div>
                    ))}
                  </dl>

                  <Link
                    href={product.link}
                    className="inline-flex items-center gap-3 font-body text-[11px] tracking-[0.2em] uppercase text-acoustic-gold hover:text-acoustic-gold-light transition-colors group/link"
                  >
                    <span>Detail</span>
                    <span className="block w-8 h-px bg-acoustic-gold group-hover/link:w-14 transition-all duration-300" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="reveal text-center mt-16">
            <Link
              href="/products"
              className="inline-block font-body text-[11px] tracking-[0.2em] uppercase border border-acoustic-border text-acoustic-cream px-10 py-4 hover:border-acoustic-gold hover:text-acoustic-gold transition-all duration-200"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* ── Why choose us ── */}
      <section className="py-24 md:py-32 bg-acoustic-dark acoustic-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="reveal mb-14">
            <SectionLabel>Why Choose Us</SectionLabel>
            <h2 className="font-display text-4xl md:text-6xl text-acoustic-cream font-light mt-4">
              Precision. Quality. Expertise.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 border-t border-l border-acoustic-border" data-stagger>
            {REASONS.map((item) => (
              <div key={item.title} data-stagger-item className="p-10 md:p-12 border-b border-r border-acoustic-border bg-acoustic-card hover:bg-acoustic-card-hover transition-colors duration-300">
                <div className="flex items-center justify-between mb-8">
                  <span className="font-body text-[10px] tracking-[0.3em] uppercase text-acoustic-gold">Cap. {item.number}</span>
                  <span className="font-display text-5xl text-acoustic-gold/10 leading-none">{item.number}</span>
                </div>
                <h3 className="font-grotesk text-xl text-acoustic-cream mb-4 font-medium">{item.title}</h3>
                <p className="font-body text-[13px] text-acoustic-muted leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="py-24 md:py-32 bg-acoustic-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="reveal flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <div>
              <SectionLabel>Client Reviews</SectionLabel>
              <h2 className="font-display text-4xl md:text-6xl text-acoustic-cream font-light mt-4">What our clients say</h2>
            </div>
            <div className="flex items-center gap-3 font-body">
              <span className="text-3xl text-acoustic-cream font-grotesk tabular-nums">4.6</span>
              <div>
                <div className="flex gap-0.5 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-3 h-3 text-acoustic-gold fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-[9px] tracking-[0.2em] uppercase text-acoustic-dim">26 Facebook Reviews</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 border-t border-l border-acoustic-border" data-stagger>
            {TESTIMONIALS.map((t) => (
              <div key={t.name} data-stagger-item className="p-8 md:p-10 border-b border-r border-acoustic-border bg-acoustic-card">
                <span className="font-display text-6xl text-acoustic-gold/12 leading-none block mb-2 select-none">&ldquo;</span>
                <p className="font-body text-[13px] text-acoustic-muted leading-relaxed mb-8">{t.comment}</p>
                <div className="pt-5 border-t border-acoustic-border flex items-start justify-between gap-4">
                  <div>
                    <p className="font-grotesk text-sm text-acoustic-cream font-medium">{t.name}</p>
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {t.strengths.map((s) => (
                        <span key={s} className="font-body text-[8px] tracking-[0.15em] uppercase text-acoustic-gold/80 border border-acoustic-border px-2 py-0.5">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                  <span className="font-body text-[10px] tabular-nums text-acoustic-dim shrink-0">{t.date}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="reveal text-center mt-10">
            <a
              href="https://www.facebook.com/marketplace/profile/100027440362157/?ref=permalink&mibextid=dXMIcH"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-[10px] tracking-[0.2em] uppercase text-acoustic-dim hover:text-acoustic-muted transition-colors"
            >
              See more reviews on Facebook Marketplace ›
            </a>
          </div>
        </div>
      </section>

      {/* ── Contact ── */}
      <section className="py-24 md:py-32 bg-acoustic-dark acoustic-grid relative overflow-hidden">
        <span aria-hidden="true" className="pointer-events-none select-none absolute right-0 -bottom-20 font-display italic text-[22rem] leading-none text-acoustic-gold/[0.03]">
          静
        </span>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="reveal grid md:grid-cols-2 gap-12 items-center">
            <div>
              <SectionLabel>Get in Touch</SectionLabel>
              <h2 className="font-display text-4xl md:text-6xl text-acoustic-cream font-light mt-4 mb-6 leading-[1.02]">
                Ready to transform your space?
              </h2>
              <p className="font-body text-[13px] text-acoustic-muted leading-relaxed max-w-sm mb-10">
                Our acoustic experts are available every day, 9:00–17:00 GMT+8.
                Reach out on WhatsApp for the fastest response.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://wa.me/60197697886"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="magnetic inline-flex items-center justify-center gap-2.5 font-body text-[11px] tracking-[0.2em] uppercase bg-acoustic-gold text-acoustic-black px-8 py-4 hover:bg-acoustic-gold-light transition-colors font-medium"
                >
                  <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                  </svg>
                  WhatsApp Us
                </a>
                <Link
                  href="/request-quote"
                  className="magnetic inline-flex items-center justify-center font-body text-[11px] tracking-[0.2em] uppercase border border-acoustic-border text-acoustic-cream px-8 py-4 hover:border-acoustic-gold hover:text-acoustic-gold transition-all duration-200"
                >
                  Request a Quote
                </Link>
              </div>
            </div>

            <dl className="border-t border-acoustic-border">
              {[
                ["Phone", "+6019-769 7886", "tel:+60197697886"],
                ["Email", "amaryaakob95@gmail.com", "mailto:amaryaakob95@gmail.com"],
                ["Marketplace", "Facebook Marketplace", "https://www.facebook.com/marketplace/profile/100027440362157/?ref=permalink&mibextid=dXMIcH"],
                ["Hours", "Daily · 9:00–17:00 GMT+8", ""],
              ].map(([label, value, href]) => (
                <div key={label} className="flex items-baseline justify-between gap-4 py-4 border-b border-acoustic-border">
                  <dt className="font-body text-[9px] tracking-[0.28em] uppercase text-acoustic-gold">{label}</dt>
                  <dd className="font-body text-[12px] text-acoustic-muted text-right">
                    {href ? (
                      <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined} className="hover:text-acoustic-cream transition-colors break-all">
                        {value}
                      </a>
                    ) : (
                      value
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>
    </div>
  )
}

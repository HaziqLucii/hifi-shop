import type { Metadata } from "next"
import { Breadcrumb } from "../components/breadcrumb"
import Link from "next/link"
import { breadcrumbJsonLd } from "@/lib/schema"

export const metadata: Metadata = {
  title: "About Us",
  description: "Acoustic Treats builds custom acoustic panels, diffusers, and soundproofing solutions in Malaysia.",
  alternates: {
    canonical: "/about",
  },
}

function SoundWaveHorizontal() {
  const bars = [6, 12, 20, 28, 22, 36, 26, 40, 28, 34, 20, 28, 14, 22, 10, 16, 22, 30, 38, 28, 18, 26, 34, 22, 14, 10, 18, 24]
  return (
    <svg viewBox="0 0 336 48" fill="none" className="w-full max-w-sm opacity-40" aria-hidden="true">
      {bars.map((h, i) => (
        <rect key={i} x={i * 12 + 1} y={(48 - h) / 2} width={3} height={h} fill="#cdc4ba" opacity={0.3 + (h / 40) * 0.6} rx="0.5" />
      ))}
    </svg>
  )
}

const chapters = [
  {
    idx: "01",
    label: "Est. 2010",
    body: "Acoustic Treatment Panels & Solutions was founded in 2010 by a group of passionate audiophiles and acoustic engineers with a shared vision: to bring studio-quality sound to home audio environments. Our journey began in a small workshop, where we handcrafted our first acoustic panels, driven by the belief that every music lover deserves to experience their favourite tracks in their purest form.",
  },
  {
    idx: "02",
    label: "Our Growth",
    body: "Over the years, we've grown from a boutique operation to a trusted name in the acoustic treatment industry. Our commitment to innovation, quality, and customer satisfaction has never wavered. We continually invest in research and development, pushing the boundaries of acoustic science to deliver products that not only meet but exceed the expectations of the most discerning audiophiles.",
  },
  {
    idx: "03",
    label: "Our Approach",
    body: "At Acoustic Treatment, we understand that each room is unique, and so are the acoustic challenges it presents. That's why we offer a range of customisable solutions — from our flagship Binary Abfuser to our precision-engineered Diffusers and high-performance Absorption panels. Our team of experts works closely with each client to design tailored acoustic treatments that transform ordinary spaces into extraordinary listening environments.",
  },
  {
    idx: "04",
    label: "Our Mission",
    body: "We're not just in the business of selling acoustic products; we're in the business of delivering unparalleled audio experiences. Whether you're setting up a home theater, a professional recording studio, or simply want to enjoy your music collection like never before, Acoustic Treatment is here to help you achieve acoustic perfection.",
  },
]

const values = [
  { label: "Craftsmanship", desc: "Every panel is crafted with meticulous attention to detail and material quality." },
  { label: "Expertise", desc: "Deep knowledge of room acoustics and HiFi audio guides every recommendation." },
  { label: "Customisation", desc: "Bespoke sizing and finishes to fit any room aesthetic and acoustic need." },
]

export default function About() {
  return (
    <div className="min-h-screen bg-acoustic-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", path: "/" },
              { name: "About", path: "/about" },
            ])
          ),
        }}
      />
      {/* Header */}
      <section className="relative border-b border-acoustic-border bg-acoustic-dark overflow-hidden">
        <span aria-hidden="true" className="pointer-events-none select-none absolute -right-6 -bottom-20 font-display italic text-[16rem] md:text-[22rem] leading-none text-acoustic-gold/[0.04]">
          静
        </span>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-14">
          <Breadcrumb items={[{ label: "About", href: "/about" }]} />
          <div className="mt-6 flex items-center gap-4 font-body text-[10px] tracking-[0.28em] uppercase text-acoustic-muted">
            <span className="text-acoustic-gold">◆</span>
            <span>Our Story</span>
            <span className="h-px w-10 bg-acoustic-border" />
            <span className="text-acoustic-dim">Est. Malaysia</span>
          </div>
          <h1 className="font-display text-5xl md:text-7xl text-acoustic-cream font-light mt-5">About Acoustic Treatment</h1>
          <div className="mt-8">
            <SoundWaveHorizontal />
          </div>
        </div>
      </section>

      {/* Chapters */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="border-t border-acoustic-border">
          {chapters.map((c) => (
            <div key={c.idx} className="grid md:grid-cols-12 gap-4 md:gap-10 py-10 md:py-12 border-b border-acoustic-border">
              <div className="md:col-span-4">
                <div className="flex items-baseline gap-3">
                  <span className="font-body text-sm tabular-nums text-acoustic-gold/50">{c.idx}</span>
                  <span className="font-body text-[10px] tracking-[0.28em] uppercase text-acoustic-gold">{c.label}</span>
                </div>
              </div>
              <p className="md:col-span-8 font-body text-[13px] text-acoustic-muted leading-[1.9]">{c.body}</p>
            </div>
          ))}
        </div>

        {/* Values */}
        <div className="mt-20">
          <p className="font-body text-[10px] tracking-[0.35em] uppercase text-acoustic-gold mb-8">What We Stand For</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 border-t border-l border-acoustic-border">
            {values.map((v, i) => (
              <div key={v.label} className="p-8 border-b border-r border-acoustic-border bg-acoustic-card">
                <span className="font-body text-[10px] tabular-nums text-acoustic-gold/40 block mb-5">0{i + 1}</span>
                <h3 className="font-grotesk text-lg text-acoustic-cream mb-3 font-medium">{v.label}</h3>
                <p className="font-body text-[13px] text-acoustic-muted leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Closing */}
        <div className="mt-20 text-center">
          <p className="font-display text-3xl md:text-4xl text-acoustic-cream font-light italic mb-8 leading-snug">
            &ldquo;Join us in our quest for audio excellence.&rdquo;
          </p>
          <div className="gold-rule mx-auto mb-9" />
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/products"
              className="inline-block font-body text-[11px] tracking-[0.2em] uppercase bg-acoustic-gold text-acoustic-black px-8 py-4 hover:bg-acoustic-gold-light transition-colors font-medium"
            >
              View Our Products
            </Link>
            <Link
              href="/request-quote"
              className="inline-block font-body text-[11px] tracking-[0.2em] uppercase border border-acoustic-border text-acoustic-cream px-8 py-4 hover:border-acoustic-gold hover:text-acoustic-gold transition-all"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

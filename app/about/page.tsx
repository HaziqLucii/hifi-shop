import { Breadcrumb } from "../components/breadcrumb"
import Link from "next/link"

function SoundWaveHorizontal() {
  const bars = [6, 12, 20, 28, 22, 36, 26, 40, 28, 34, 20, 28, 14, 22, 10, 16, 22, 30, 38, 28, 18, 26, 34, 22, 14, 10, 18, 24]
  return (
    <svg viewBox="0 0 336 48" fill="none" className="w-full max-w-sm mx-auto opacity-30" aria-hidden="true">
      {bars.map((h, i) => (
        <rect
          key={i}
          x={i * 12 + 1}
          y={(48 - h) / 2}
          width={3}
          height={h}
          fill="#b8953a"
          opacity={0.4 + (h / 40) * 0.6}
          rx="1"
        />
      ))}
    </svg>
  )
}

export default function About() {
  return (
    <div className="min-h-screen bg-acoustic-black">
      {/* Page header */}
      <div className="bg-acoustic-dark border-b border-acoustic-border py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Breadcrumb items={[{ label: "About", href: "/about" }]} />
          <p className="font-body text-[10px] tracking-[0.35em] uppercase text-acoustic-gold mb-4">
            Our Story
          </p>
          <h1 className="font-display text-4xl md:text-5xl text-acoustic-cream font-light">
            About Acoustic Treatment
          </h1>
          <div className="gold-rule mt-6" />
        </div>
      </div>

      {/* Decorative wave */}
      <div className="py-16 bg-acoustic-black acoustic-grid">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SoundWaveHorizontal />
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="space-y-12">

          {/* Founded section */}
          <div className="border-l-2 border-acoustic-gold/40 pl-8">
            <p className="font-body text-[9px] tracking-[0.3em] uppercase text-acoustic-gold mb-3">
              Est. 2010
            </p>
            <p className="font-body text-base text-acoustic-muted leading-[1.9]">
              Acoustic Treatment Panels &amp; Solutions was founded in 2010 by a group of passionate audiophiles and
              acoustic engineers with a shared vision: to bring studio-quality sound to home audio environments.
              Our journey began in a small workshop, where we handcrafted our first acoustic panels, driven by the
              belief that every music lover deserves to experience their favourite tracks in their purest form.
            </p>
          </div>

          <div className="border-l-2 border-acoustic-border pl-8">
            <p className="font-body text-[9px] tracking-[0.3em] uppercase text-acoustic-gold mb-3">
              Our Growth
            </p>
            <p className="font-body text-base text-acoustic-muted leading-[1.9]">
              Over the years, we&apos;ve grown from a boutique operation to a trusted name in the acoustic treatment
              industry. Our commitment to innovation, quality, and customer satisfaction has never wavered. We
              continually invest in research and development, pushing the boundaries of acoustic science to deliver
              products that not only meet but exceed the expectations of the most discerning audiophiles.
            </p>
          </div>

          <div className="border-l-2 border-acoustic-border pl-8">
            <p className="font-body text-[9px] tracking-[0.3em] uppercase text-acoustic-gold mb-3">
              Our Approach
            </p>
            <p className="font-body text-base text-acoustic-muted leading-[1.9]">
              At Acoustic Treatment, we understand that each room is unique, and so are the acoustic challenges it
              presents. That&apos;s why we offer a range of customisable solutions — from our flagship Binary Abfuser to
              our precision-engineered Diffusers and high-performance Absorption panels. Our team of experts works
              closely with each client to design tailored acoustic treatments that transform ordinary spaces into
              extraordinary listening environments.
            </p>
          </div>

          <div className="border-l-2 border-acoustic-border pl-8">
            <p className="font-body text-[9px] tracking-[0.3em] uppercase text-acoustic-gold mb-3">
              Our Mission
            </p>
            <p className="font-body text-base text-acoustic-muted leading-[1.9]">
              We&apos;re not just in the business of selling acoustic products; we&apos;re in the business of delivering
              unparalleled audio experiences. Whether you&apos;re setting up a home theater, a professional recording
              studio, or simply want to enjoy your music collection like never before, Acoustic Treatment is here
              to help you achieve acoustic perfection.
            </p>
          </div>
        </div>

        {/* Values grid */}
        <div className="mt-20 mb-20">
          <p className="font-body text-[10px] tracking-[0.35em] uppercase text-acoustic-gold mb-6 text-center">
            What We Stand For
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-px border border-acoustic-border">
            {[
              { label: "Craftsmanship", desc: "Every panel is crafted with meticulous attention to detail and material quality." },
              { label: "Expertise", desc: "Deep knowledge of room acoustics and HiFi audio guides every recommendation." },
              { label: "Customisation", desc: "Bespoke sizing and finishes to fit any room aesthetic and acoustic need." },
            ].map((v) => (
              <div key={v.label} className="p-8 bg-acoustic-card">
                <h3 className="font-display text-xl text-acoustic-cream mb-3 font-light">{v.label}</h3>
                <p className="font-body text-sm text-acoustic-muted leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="font-display text-3xl text-acoustic-cream font-light mb-4 italic">
            &ldquo;Join us in our quest for audio excellence.&rdquo;
          </p>
          <div className="gold-rule mx-auto mb-8" />
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/products"
              className="inline-block font-body text-[11px] tracking-[0.2em] uppercase bg-acoustic-gold text-acoustic-black px-8 py-4 hover:bg-acoustic-gold-light transition-colors font-semibold"
            >
              View Our Products
            </Link>
            <Link
              href="/request-quote"
              className="inline-block font-body text-[11px] tracking-[0.2em] uppercase border border-acoustic-gold/60 text-acoustic-gold px-8 py-4 hover:border-acoustic-gold hover:bg-acoustic-gold/5 transition-all"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

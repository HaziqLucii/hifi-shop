"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { Breadcrumb } from "./breadcrumb"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import type { Product } from "@/lib/products"
import { ordering, faqs, whatsappHref } from "@/lib/business"

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
    </svg>
  )
}

export default function ProductDetail({ product }: { product: Product }) {
  const {
    index,
    eyebrow,
    name: title,
    subtitle,
    slug,
    images,
    features,
    specs,
    about,
    whatsappMessage,
  } = product

  const [selected, setSelected] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const waHref = whatsappHref(whatsappMessage)

  const galleryTriggerRef = useRef<HTMLButtonElement>(null)
  const dialogRef = useRef<HTMLDivElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)

  const closeLightbox = () => {
    setLightboxOpen(false)
    galleryTriggerRef.current?.focus()
  }

  // Focus management, keyboard navigation, and a Tab trap for the fullscreen
  // lightbox: without this, background links stay reachable by keyboard
  // behind an open modal.
  useEffect(() => {
    if (!lightboxOpen) return
    closeButtonRef.current?.focus()

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeLightbox()
        return
      }
      if (e.key === "ArrowRight") setSelected((i) => (i + 1) % images.length)
      if (e.key === "ArrowLeft") setSelected((i) => (i - 1 + images.length) % images.length)
      if (e.key === "Tab" && dialogRef.current) {
        const focusable = dialogRef.current.querySelectorAll<HTMLElement>("button")
        const first = focusable[0]
        const last = focusable[focusable.length - 1]
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault()
          last.focus()
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }
    window.addEventListener("keydown", onKey)
    document.body.style.overflow = "hidden"
    return () => {
      window.removeEventListener("keydown", onKey)
      document.body.style.overflow = ""
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lightboxOpen, images.length])

  return (
    <div className="min-h-screen bg-acoustic-black">
      {/* Header */}
      <section className="relative border-b border-acoustic-border bg-acoustic-dark overflow-hidden">
        <span aria-hidden="true" className="pointer-events-none select-none absolute -right-6 -bottom-16 font-display text-[16rem] md:text-[22rem] leading-none text-acoustic-gold/[0.04]">
          {index}
        </span>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-14">
          <Breadcrumb
            items={[
              { label: "Products", href: "/products" },
              { label: title, href: `/products/${slug}` },
            ]}
          />
          <div className="mt-6 flex items-center gap-4 font-body text-[10px] tracking-[0.28em] uppercase text-acoustic-muted">
            <span className="text-acoustic-gold">◆</span>
            <span>Product / {index}</span>
            <span className="h-px w-10 bg-acoustic-border" />
            <span className="text-acoustic-dim">{eyebrow}</span>
          </div>
          <h1 className="font-display text-5xl md:text-7xl text-acoustic-cream font-light mt-5">{title}</h1>
          <p className="font-body text-[13px] text-acoustic-muted mt-4 max-w-xl">{subtitle}</p>
        </div>
      </section>

      {/* Main */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Gallery */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <button
              ref={galleryTriggerRef}
              type="button"
              onClick={() => setLightboxOpen(true)}
              aria-label="View fullscreen"
              className="relative aspect-square w-full overflow-hidden mb-2.5 border border-acoustic-border block"
            >
              <Image
                src={images[selected].src}
                alt={images[selected].alt}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 48vw, 100vw"
                priority
              />
              <div className="absolute left-3 bottom-3 font-body text-[9px] tracking-[0.25em] uppercase text-acoustic-cream/70 bg-acoustic-black/50 px-2 py-1 tabular-nums">
                {String(selected + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
              </div>
              <div className="absolute right-3 bottom-3 font-body text-[9px] tracking-[0.25em] uppercase text-acoustic-cream/70 bg-acoustic-black/50 px-2 py-1">
                Tap to enlarge
              </div>
            </button>
            <div className="grid grid-cols-5 sm:grid-cols-6 gap-1.5">
              {images.map((image, i) => (
                <button
                  key={image.src}
                  onClick={() => setSelected(i)}
                  aria-label={`View image ${i + 1}`}
                  className={`relative aspect-square overflow-hidden border transition-all duration-200 ${
                    selected === i
                      ? "border-acoustic-gold"
                      : "border-acoustic-border hover:border-acoustic-gold/40 opacity-55 hover:opacity-100"
                  }`}
                >
                  <Image src={image.src} alt={image.alt} fill className="object-cover" sizes="80px" />
                </button>
              ))}
            </div>
          </div>

          {/* Details */}
          <div className="space-y-12">
            {/* Features */}
            <div>
              <p className="font-body text-[10px] tracking-[0.3em] uppercase text-acoustic-gold mb-6">Key Features</p>
              <ul className="border-t border-acoustic-border">
                {features.map((feature, i) => (
                  <li key={feature} className="flex items-baseline gap-4 py-3 border-b border-acoustic-border">
                    <span className="font-body text-[10px] tabular-nums text-acoustic-gold/40 shrink-0">{String(i + 1).padStart(2, "0")}</span>
                    <span className="font-body text-[13px] text-acoustic-muted">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Specs */}
            <div>
              <p className="font-body text-[10px] tracking-[0.3em] uppercase text-acoustic-gold mb-6">Specifications</p>
              <dl className="border-t border-acoustic-border">
                {specs.map((item) => (
                  <div key={item.name} className="flex items-baseline justify-between gap-6 py-3.5 border-b border-acoustic-border">
                    <dt className="font-body text-[9px] tracking-[0.25em] uppercase text-acoustic-dim shrink-0">{item.name}</dt>
                    <dd className="font-body text-[12px] text-acoustic-cream text-right">{item.value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* Ordering */}
            <div>
              <p className="font-body text-[10px] tracking-[0.3em] uppercase text-acoustic-gold mb-6">Ordering</p>
              <dl className="border-t border-acoustic-border">
                {[
                  ["Lead Time", ordering.leadTime],
                  ["Delivery", ordering.delivery],
                  ["Payment", ordering.payment],
                  ["Installation", ordering.installation],
                  ["Warranty", ordering.warranty],
                ].map(([label, value]) => (
                  <div key={label} className="py-3.5 border-b border-acoustic-border">
                    <dt className="font-body text-[9px] tracking-[0.25em] uppercase text-acoustic-dim mb-1.5">{label}</dt>
                    <dd className="font-body text-[12px] text-acoustic-muted leading-relaxed">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* Custom notice */}
            <div className="border border-acoustic-border p-6 bg-acoustic-card">
              <p className="font-body text-[10px] tracking-[0.25em] uppercase text-acoustic-gold mb-2">Custom Sizes Available</p>
              <p className="font-body text-[13px] text-acoustic-muted leading-relaxed">
                We offer custom dimensions to fit your specific acoustic requirements. Contact us on WhatsApp for details and pricing.
              </p>
            </div>

            {/* CTAs */}
            <div className="space-y-3 hidden md:block">
              <a
                href={waHref}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-3 font-body text-[11px] tracking-[0.2em] uppercase bg-acoustic-gold text-acoustic-black py-4 px-8 hover:bg-acoustic-gold-light transition-colors font-medium"
              >
                <WhatsAppIcon className="w-4 h-4 shrink-0" />
                Enquire via WhatsApp
              </a>
              <Link
                href={`/request-quote?product=${slug}`}
                className="w-full flex items-center justify-center font-body text-[11px] tracking-[0.2em] uppercase border border-acoustic-border text-acoustic-cream py-4 px-8 hover:border-acoustic-gold hover:text-acoustic-gold transition-all duration-200"
              >
                Request a Formal Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="bg-acoustic-dark border-t border-acoustic-border acoustic-grid py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <p className="font-body text-[10px] tracking-[0.3em] uppercase text-acoustic-gold mb-4">About This Product</p>
          <h2 className="font-display text-3xl md:text-5xl text-acoustic-cream font-light mb-10">{title}</h2>
          <div className="max-w-3xl space-y-5 font-body text-[13px] text-acoustic-muted leading-[1.9]">
            {about.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-acoustic-border py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <p className="font-body text-[10px] tracking-[0.3em] uppercase text-acoustic-gold mb-4">Frequently Asked</p>
          <h2 className="font-display text-3xl md:text-5xl text-acoustic-cream font-light mb-10">Questions buyers ask</h2>
          <Accordion type="single" collapsible className="border-t border-acoustic-border">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-acoustic-border">
                <AccordionTrigger className="font-body text-[13px] text-acoustic-cream hover:no-underline py-5 text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="font-body text-[13px] text-acoustic-muted leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Sticky mobile WhatsApp bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-acoustic-black border-t border-acoustic-border p-3">
        <a
          href={waHref}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-center gap-3 font-body text-[11px] tracking-[0.2em] uppercase bg-acoustic-gold text-acoustic-black py-3.5 px-8 font-medium"
        >
          <WhatsAppIcon className="w-4 h-4 shrink-0" />
          Enquire via WhatsApp
        </a>
      </div>

      {/* Fullscreen lightbox */}
      {lightboxOpen && (
        <div
          ref={dialogRef}
          onClick={(e) => {
            if (e.target === e.currentTarget) closeLightbox()
          }}
          className="fixed inset-0 z-50 bg-acoustic-black flex items-center justify-center"
          role="dialog"
          aria-modal="true"
          aria-label={`${title} image ${selected + 1} of ${images.length}`}
        >
          <button
            ref={closeButtonRef}
            type="button"
            onClick={closeLightbox}
            aria-label="Close"
            className="absolute top-5 right-5 text-acoustic-cream/70 hover:text-acoustic-gold transition-colors p-2"
          >
            <X className="w-6 h-6" />
          </button>
          <button
            type="button"
            onClick={() => setSelected((i) => (i - 1 + images.length) % images.length)}
            aria-label="Previous image"
            className="absolute left-2 sm:left-5 text-acoustic-cream/70 hover:text-acoustic-gold transition-colors p-2"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>
          <div className="relative w-[88vw] h-[70vh] max-w-3xl">
            <Image
              src={images[selected].src}
              alt={images[selected].alt}
              fill
              className="object-contain"
              sizes="88vw"
            />
          </div>
          <button
            type="button"
            onClick={() => setSelected((i) => (i + 1) % images.length)}
            aria-label="Next image"
            className="absolute right-2 sm:right-5 text-acoustic-cream/70 hover:text-acoustic-gold transition-colors p-2"
          >
            <ChevronRight className="w-8 h-8" />
          </button>
          <div className="absolute bottom-6 font-body text-[10px] tracking-[0.25em] uppercase text-acoustic-cream/60 tabular-nums">
            {String(selected + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
          </div>
        </div>
      )}
    </div>
  )
}

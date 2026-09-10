import type { Metadata } from "next"
import { Breadcrumb } from "../components/breadcrumb"
import QuoteForm from "./quote-form"
import { breadcrumbJsonLd } from "@/lib/schema"

export const metadata: Metadata = {
  title: "Request a Quote",
  description: "Get a personalised quote for acoustic panels, diffusers, or soundproofing. Sent straight to WhatsApp for a fast response.",
  alternates: {
    canonical: "/request-quote",
  },
}

type RequestQuoteProps = {
  searchParams: Promise<{ product?: string | string[] }>
}

export default async function RequestQuote({ searchParams }: RequestQuoteProps) {
  const params = await searchParams
  const initialProduct = Array.isArray(params.product) ? params.product[0] : params.product

  return (
    <div className="min-h-screen bg-acoustic-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", path: "/" },
              { name: "Request a Quote", path: "/request-quote" },
            ])
          ),
        }}
      />
      {/* Header */}
      <section className="relative border-b border-acoustic-border bg-acoustic-dark acoustic-grid overflow-hidden">
        <span aria-hidden="true" className="pointer-events-none select-none absolute -right-6 -bottom-16 font-display text-[15rem] md:text-[20rem] leading-none text-acoustic-gold/[0.04]">
          響
        </span>
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-14">
          <Breadcrumb items={[{ label: "Request a Quote", href: "/request-quote" }]} />
          <div className="mt-6 flex items-center gap-4 font-body text-[10px] tracking-[0.28em] uppercase text-acoustic-muted">
            <span className="text-acoustic-gold">◆</span>
            <span>Get a Quote</span>
            <span className="h-px w-10 bg-acoustic-border" />
            <span className="text-acoustic-dim">Response within hours</span>
          </div>
          <h1 className="font-display text-5xl md:text-7xl text-acoustic-cream font-light mt-5">Request a Quote</h1>
          <p className="font-body text-[13px] text-acoustic-muted mt-4 max-w-md leading-relaxed">
            Fill out the form below and we&apos;ll send your request straight to our WhatsApp for a fast, personalised response.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <QuoteForm initialProduct={initialProduct} />
      </section>
    </div>
  )
}

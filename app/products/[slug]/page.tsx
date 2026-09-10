import type { Metadata } from "next"
import { notFound } from "next/navigation"
import ProductDetail from "@/app/components/product-detail"
import { getProduct, getProductSlugs } from "@/lib/products"
import { SITE_URL, faqs } from "@/lib/business"
import { breadcrumbJsonLd, faqJsonLd, productJsonLd } from "@/lib/schema"

export function generateStaticParams() {
  return getProductSlugs().map((slug) => ({ slug }))
}

type ProductPageProps = { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params
  const product = getProduct(slug)
  if (!product) return {}

  const title = `${product.name} | ${product.eyebrow}`
  const description = product.description

  return {
    title,
    description,
    alternates: {
      canonical: `/products/${product.slug}`,
    },
    openGraph: {
      title: `${product.name} | Acoustic Treats`,
      description,
      url: `${SITE_URL}/products/${product.slug}`,
      siteName: "Acoustic Treats",
      locale: "en_MY",
      type: "website",
      images: [{ url: product.images[0].src, width: 1200, height: 1200, alt: product.images[0].alt }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${product.name} | Acoustic Treats`,
      description,
      images: [product.images[0].src],
    },
  }
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params
  const product = getProduct(slug)
  if (!product) notFound()

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd(product)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", path: "/" },
              { name: "Products", path: "/products" },
              { name: product.name, path: `/products/${product.slug}` },
            ])
          ),
        }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(faqs)) }} />
      <ProductDetail product={product} />
    </>
  )
}

import ProductDetail from "../../components/product-detail"

const BASE = "https://kx2kaqlxinzax2dn.public.blob.vercel-storage.com/binaryabfuser"

const images = [
  { src: `${BASE}/binaryabfuser-1.jpg`, alt: "Binary Abfuser - Product View 1" },
  { src: `${BASE}/binaryabfuser-2.jpeg`, alt: "Binary Abfuser - Product View 2" },
  { src: `${BASE}/binaryabfuser-3.jpeg`, alt: "Binary Abfuser - Product View 3" },
  { src: `${BASE}/binaryabfuser-4.jpeg`, alt: "Binary Abfuser - Product View 4" },
  { src: `${BASE}/binaryabfuser-5.jpeg`, alt: "Binary Abfuser - Product View 5" },
  { src: `${BASE}/binaryabfuser-6.jpeg`, alt: "Binary Abfuser - Product View 6" },
  { src: `${BASE}/binaryabfuser-7.jpeg`, alt: "Binary Abfuser - Product View 7" },
  { src: `${BASE}/binaryabfuser-8.jpeg`, alt: "Binary Abfuser - Product View 8" },
  { src: `${BASE}/binaryabfuser-9.jpeg`, alt: "Binary Abfuser - Product View 9" },
  { src: `${BASE}/binaryabfuser-10.jpeg`, alt: "Binary Abfuser - Product View 10" },
  { src: `${BASE}/binaryabfuser-11.jpeg`, alt: "Binary Abfuser - Product View 11" },
]

const features = [
  "Hybrid absorption and diffusion",
  "Multiple pattern variations available",
  "Various finish options (Natural wood, Orange, White, Mint)",
  "Precision-engineered surface patterns",
  "High-performance acoustic materials",
  "Customisable sizes and finishes",
  "Easy installation process",
  "Durable and long-lasting construction",
  "Custom sizes available upon request",
]

const specs = [
  { name: "Dimensions", value: "60cm × 60cm × 10cm" },
  { name: "Weight", value: "5 kg" },
  { name: "Material", value: "High-density foam, wood" },
  { name: "NRC Rating", value: "0.85" },
  { name: "Frequency Range", value: "125 Hz – 4000 Hz" },
  { name: "Fire Rating", value: "Class A" },
  { name: "Pattern Options", value: "Linear, Circular, Angular, Mixed" },
  { name: "Finish Options", value: "Natural, Orange, White, Custom" },
]

const about = [
  "The Binary Abfuser represents the pinnacle of acoustic treatment technology, combining the best aspects of sound absorption and diffusion into a single, highly effective unit. Its innovative design allows for superior control over room acoustics, making it an ideal solution for recording studios, home theaters, and audiophile listening rooms.",
  "Available in multiple pattern variations including linear slots, circular holes, angular cuts, and mixed patterns, each Binary Abfuser can be customised to meet specific acoustic requirements. The precision-engineered surface patterns are the result of extensive research and development, designed to scatter sound waves evenly across a wide frequency range while simultaneously absorbing excess energy.",
  "Choose from various finish options including natural wood, orange, white, mint green, or custom colours to match your room's aesthetic. This dual-action approach helps to eliminate flutter echoes and standing waves, resulting in a more balanced and natural sound environment that enhances your listening experience.",
]

export default function BinaryAbfuser() {
  return (
    <ProductDetail
      index="01"
      eyebrow="Hybrid Absorber · Diffuser"
      title="Binary Abfuser"
      subtitle="Advanced acoustic treatment combining absorption and diffusion."
      breadcrumbLabel="Binary Abfuser"
      breadcrumbHref="/products/binary-abfuser"
      images={images}
      features={features}
      specs={specs}
      about={about}
      whatsappMessage="Hi, I'm interested in the Binary Abfuser. Could you provide more information and pricing?"
    />
  )
}

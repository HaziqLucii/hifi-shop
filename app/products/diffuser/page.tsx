import ProductDetail from "../../components/product-detail"

const BASE = "https://kx2kaqlxinzax2dn.public.blob.vercel-storage.com/diffuser"

const images = [
  { src: `${BASE}/diffusers-1.jpeg`, alt: "Acoustic Diffuser - Product View 1" },
  { src: `${BASE}/diffusers-2.jpeg`, alt: "Acoustic Diffuser - Product View 2" },
  { src: `${BASE}/diffusers-3.jpeg`, alt: "Acoustic Diffuser - Product View 3" },
  { src: `${BASE}/diffusers-4.jpeg`, alt: "Acoustic Diffuser - Product View 4" },
  { src: `${BASE}/diffusers-5.jpeg`, alt: "Acoustic Diffuser - Product View 5" },
  { src: `${BASE}/diffusers-6.jpeg`, alt: "Acoustic Diffuser - Product View 6" },
  { src: `${BASE}/diffusers-7.jpeg`, alt: "Acoustic Diffuser - Product View 7" },
  { src: `${BASE}/diffusers-8.jpeg`, alt: "Acoustic Diffuser - Product View 8" },
  { src: `${BASE}/diffusers-10.jpeg`, alt: "Acoustic Diffuser - Product View 10" },
  { src: `${BASE}/diffusers-11.jpeg`, alt: "Acoustic Diffuser - Product View 11" },
  { src: `${BASE}/diffusers-12.jpeg`, alt: "Acoustic Diffuser - Product View 12" },
  { src: `${BASE}/diffusers-13.jpeg`, alt: "Acoustic Diffuser - Product View 13" },
  { src: `${BASE}/diffusers-14.jpeg`, alt: "Acoustic Diffuser - Product View 14" },
]

const features = [
  "Optimised sound wave dispersion",
  "Mathematically designed surface pattern",
  "Multiple material options (Wood, Foam, Composite)",
  "Various colour finishes (Natural, Black, White, Blue)",
  "Wide frequency range coverage",
  "Multiple pattern designs available",
  "Professional finish options",
  "Ceiling and wall mounting options",
  "Custom sizes available upon request",
]

const specs = [
  { name: "Dimensions", value: "60cm × 60cm × 15cm" },
  { name: "Weight", value: "4.5 kg" },
  { name: "Material Options", value: "Hardwood, Foam, Composite" },
  { name: "Frequency Range", value: "500 Hz – 5000 Hz" },
  { name: "Coverage Area", value: "10–15 m²" },
  { name: "Installation", value: "Wall / Ceiling mounted" },
  { name: "Pattern Types", value: "Pyramid, Cubic, Geometric" },
  { name: "Colour Options", value: "Natural, Black, White, Yellow, Gray, Custom" },
]

const about = [
  "Our Acoustic Diffuser is designed to create a more balanced and natural sound environment by effectively scattering sound waves across a wide frequency range. The mathematically optimised surface patterns ensure uniform dispersion, preventing unwanted acoustic artefacts while maintaining the natural character of your room.",
  "Available in multiple design variations including pyramid patterns, cubic blocks, and complex geometric cutouts, each diffuser can be customised to meet specific acoustic requirements and aesthetic preferences. Choose from various materials including premium hardwood, high-density foam, and composite materials, each offering unique acoustic properties and visual appeal.",
  "Our diffusers are available in multiple colour options including natural wood finishes, classic black and white, vibrant yellow, and custom colours to match your space. Whether for ceiling installation in professional studios or wall mounting in home listening rooms, these diffusers combine acoustic excellence with architectural beauty.",
]

export default function Diffuser() {
  return (
    <ProductDetail
      index="02"
      eyebrow="Sound Wave Scattering"
      title="Acoustic Diffuser"
      subtitle="Precision-engineered sound wave scattering."
      breadcrumbLabel="Acoustic Diffuser"
      breadcrumbHref="/products/diffuser"
      images={images}
      features={features}
      specs={specs}
      about={about}
      whatsappMessage="Hi, I'm interested in the Acoustic Diffuser. Could you provide more information and pricing?"
    />
  )
}

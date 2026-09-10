// Single source of truth for product data. Previously duplicated by hand
// across app/page.tsx, app/products/page.tsx, and three separate detail-page
// files, with drift between them (e.g. "Absorption Panel" vs "Absorption
// Soundproof"). URL slugs are unchanged, so no redirects are needed.

export type ProductImage = { src: string; alt: string }
export type Spec = { name: string; value: string }

export interface Product {
  slug: string
  index: string
  name: string
  eyebrow: string
  subtitle: string
  description: string
  images: ProductImage[]
  features: string[]
  specs: Spec[]
  about: string[]
  whatsappMessage: string
  cardSpecs: string[]
}

const BINARY_ABFUSER_BASE = "https://kx2kaqlxinzax2dn.public.blob.vercel-storage.com/binaryabfuser"
const DIFFUSER_BASE = "https://kx2kaqlxinzax2dn.public.blob.vercel-storage.com/diffuser"
const ABSORPTION_BASE = "https://kx2kaqlxinzax2dn.public.blob.vercel-storage.com/absorptionpanel"

export const products: Product[] = [
  {
    slug: "binary-abfuser",
    index: "01",
    name: "Binary Abfuser",
    eyebrow: "Hybrid Absorber · Diffuser",
    subtitle: "Advanced acoustic treatment combining absorption and diffusion.",
    description:
      "Advanced acoustic treatment combining absorption and diffusion. Built for studios and listening rooms that need precise sound control.",
    images: [
      { src: `${BINARY_ABFUSER_BASE}/binaryabfuser-1.jpg`, alt: "Binary Abfuser - Product View 1" },
      { src: `${BINARY_ABFUSER_BASE}/binaryabfuser-2.jpeg`, alt: "Binary Abfuser - Product View 2" },
      { src: `${BINARY_ABFUSER_BASE}/binaryabfuser-3.jpeg`, alt: "Binary Abfuser - Product View 3" },
      { src: `${BINARY_ABFUSER_BASE}/binaryabfuser-4.jpeg`, alt: "Binary Abfuser - Product View 4" },
      { src: `${BINARY_ABFUSER_BASE}/binaryabfuser-5.jpeg`, alt: "Binary Abfuser - Product View 5" },
      { src: `${BINARY_ABFUSER_BASE}/binaryabfuser-6.jpeg`, alt: "Binary Abfuser - Product View 6" },
      { src: `${BINARY_ABFUSER_BASE}/binaryabfuser-7.jpeg`, alt: "Binary Abfuser - Product View 7" },
      { src: `${BINARY_ABFUSER_BASE}/binaryabfuser-8.jpeg`, alt: "Binary Abfuser - Product View 8" },
      { src: `${BINARY_ABFUSER_BASE}/binaryabfuser-9.jpeg`, alt: "Binary Abfuser - Product View 9" },
      { src: `${BINARY_ABFUSER_BASE}/binaryabfuser-10.jpeg`, alt: "Binary Abfuser - Product View 10" },
      { src: `${BINARY_ABFUSER_BASE}/binaryabfuser-11.jpeg`, alt: "Binary Abfuser - Product View 11" },
    ],
    features: [
      "Hybrid absorption and diffusion",
      "Multiple pattern variations available",
      "Various finish options (Natural wood, Orange, White, Mint)",
      "Precision-engineered surface patterns",
      "High-performance acoustic materials",
      "Customisable sizes and finishes",
      "Easy installation process",
      "Durable and long-lasting construction",
      "Custom sizes available upon request",
    ],
    specs: [
      { name: "Dimensions", value: "60cm × 60cm × 10cm" },
      { name: "Weight", value: "5 kg" },
      { name: "Material", value: "High-density foam, wood" },
      { name: "NRC Rating", value: "0.85" },
      { name: "Frequency Range", value: "125 Hz – 4000 Hz" },
      { name: "Fire Rating", value: "Class A" },
      { name: "Pattern Options", value: "Linear, Circular, Angular, Mixed" },
      { name: "Finish Options", value: "Natural, Orange, White, Custom" },
    ],
    about: [
      "The Binary Abfuser represents the pinnacle of acoustic treatment technology, combining the best aspects of sound absorption and diffusion into a single, highly effective unit. Its innovative design allows for superior control over room acoustics, making it an ideal solution for recording studios, home theaters, and audiophile listening rooms.",
      "Available in multiple pattern variations including linear slots, circular holes, angular cuts, and mixed patterns, each Binary Abfuser can be customised to meet specific acoustic requirements. The precision-engineered surface patterns are the result of extensive research and development, designed to scatter sound waves evenly across a wide frequency range while simultaneously absorbing excess energy.",
      "Choose from various finish options including natural wood, orange, white, mint green, or custom colours to match your room's aesthetic. This dual-action approach helps to eliminate flutter echoes and standing waves, resulting in a more balanced and natural sound environment that enhances your listening experience.",
    ],
    whatsappMessage: "Hi, I'm interested in the Binary Abfuser. Could you provide more information and pricing?",
    cardSpecs: ["NRC 0.85", "60×60×10cm", "125–4000 Hz"],
  },
  {
    slug: "diffuser",
    index: "02",
    name: "Acoustic Diffuser",
    eyebrow: "Sound Wave Scattering",
    subtitle: "Precision-engineered sound wave scattering.",
    description:
      "Precision-engineered sound wave scattering for a natural, spacious sound field. Restores balance without deadening the room.",
    images: [
      { src: `${DIFFUSER_BASE}/diffusers-1.jpeg`, alt: "Acoustic Diffuser - Product View 1" },
      { src: `${DIFFUSER_BASE}/diffusers-2.jpeg`, alt: "Acoustic Diffuser - Product View 2" },
      { src: `${DIFFUSER_BASE}/diffusers-3.jpeg`, alt: "Acoustic Diffuser - Product View 3" },
      { src: `${DIFFUSER_BASE}/diffusers-4.jpeg`, alt: "Acoustic Diffuser - Product View 4" },
      { src: `${DIFFUSER_BASE}/diffusers-5.jpeg`, alt: "Acoustic Diffuser - Product View 5" },
      { src: `${DIFFUSER_BASE}/diffusers-6.jpeg`, alt: "Acoustic Diffuser - Product View 6" },
      { src: `${DIFFUSER_BASE}/diffusers-7.jpeg`, alt: "Acoustic Diffuser - Product View 7" },
      { src: `${DIFFUSER_BASE}/diffusers-8.jpeg`, alt: "Acoustic Diffuser - Product View 8" },
      { src: `${DIFFUSER_BASE}/diffusers-10.jpeg`, alt: "Acoustic Diffuser - Product View 10" },
      { src: `${DIFFUSER_BASE}/diffusers-11.jpeg`, alt: "Acoustic Diffuser - Product View 11" },
      { src: `${DIFFUSER_BASE}/diffusers-12.jpeg`, alt: "Acoustic Diffuser - Product View 12" },
      { src: `${DIFFUSER_BASE}/diffusers-13.jpeg`, alt: "Acoustic Diffuser - Product View 13" },
      { src: `${DIFFUSER_BASE}/diffusers-14.jpeg`, alt: "Acoustic Diffuser - Product View 14" },
    ],
    features: [
      "Optimised sound wave dispersion",
      "Mathematically designed surface pattern",
      "Multiple material options (Wood, Foam, Composite)",
      "Various colour finishes (Natural, Black, White, Blue)",
      "Wide frequency range coverage",
      "Multiple pattern designs available",
      "Professional finish options",
      "Ceiling and wall mounting options",
      "Custom sizes available upon request",
    ],
    specs: [
      { name: "Dimensions", value: "60cm × 60cm × 15cm" },
      { name: "Weight", value: "4.5 kg" },
      { name: "Material Options", value: "Hardwood, Foam, Composite" },
      { name: "Frequency Range", value: "500 Hz – 5000 Hz" },
      { name: "Coverage Area", value: "10–15 m²" },
      { name: "Installation", value: "Wall / Ceiling mounted" },
      { name: "Pattern Types", value: "Pyramid, Cubic, Geometric" },
      { name: "Colour Options", value: "Natural, Black, White, Yellow, Gray, Custom" },
    ],
    about: [
      "Our Acoustic Diffuser is designed to create a more balanced and natural sound environment by effectively scattering sound waves across a wide frequency range. The mathematically optimised surface patterns ensure uniform dispersion, preventing unwanted acoustic artefacts while maintaining the natural character of your room.",
      "Available in multiple design variations including pyramid patterns, cubic blocks, and complex geometric cutouts, each diffuser can be customised to meet specific acoustic requirements and aesthetic preferences. Choose from various materials including premium hardwood, high-density foam, and composite materials, each offering unique acoustic properties and visual appeal.",
      "Our diffusers are available in multiple colour options including natural wood finishes, classic black and white, vibrant yellow, and custom colours to match your space. Whether for ceiling installation in professional studios or wall mounting in home listening rooms, these diffusers combine acoustic excellence with architectural beauty.",
    ],
    whatsappMessage: "Hi, I'm interested in the Acoustic Diffuser. Could you provide more information and pricing?",
    cardSpecs: ["60×60×15cm", "500–5000 Hz", "10–15 m²"],
  },
  {
    slug: "absorption-soundproof",
    index: "03",
    name: "Absorption Panel",
    eyebrow: "Echo & Reverb Control",
    subtitle: "Professional-grade sound absorption solution.",
    description:
      "Professional-grade sound absorption. Reduces echo and reverberation for clearer, more accurate sound reproduction.",
    images: [
      { src: `${ABSORPTION_BASE}/absorption-panel-1.jpeg`, alt: "Absorption Panel - Product View 1" },
      { src: `${ABSORPTION_BASE}/absorption-panel-2.jpeg`, alt: "Absorption Panel - Product View 2" },
      { src: `${ABSORPTION_BASE}/absorption-panel-3.jpeg`, alt: "Absorption Panel - Product View 3" },
      { src: `${ABSORPTION_BASE}/absorption-panel-4.jpeg`, alt: "Absorption Panel - Product View 4" },
      { src: `${ABSORPTION_BASE}/absorption-panel-5.jpeg`, alt: "Absorption Panel - Product View 5" },
      { src: `${ABSORPTION_BASE}/absorption-panel-6.jpeg`, alt: "Absorption Panel - Product View 6" },
    ],
    features: [
      "High absorption coefficient",
      "Broadband frequency absorption",
      "Fire-resistant materials",
      "Multiple thickness options",
      "Easy mounting system",
      "Customisable fabric finishes",
      "Custom sizes available upon request",
    ],
    specs: [
      { name: "Dimensions", value: "60cm × 120cm × 5cm" },
      { name: "Weight", value: "3.2 kg" },
      { name: "Material", value: "High-density foam core" },
      { name: "NRC Rating", value: "0.95" },
      { name: "Frequency Range", value: "125 Hz – 4000 Hz" },
      { name: "Fire Rating", value: "Class A" },
    ],
    about: [
      "Our Absorption Panels are engineered to provide maximum sound absorption across a wide frequency range. The high-density foam core effectively reduces room reflections, echo, and reverberation, creating a controlled acoustic environment ideal for critical listening and recording.",
      "Each panel features a carefully selected combination of materials that ensures optimal acoustic performance while meeting strict fire safety standards. The panels can be covered with a variety of fabric options to match your room's aesthetic, making them as visually appealing as they are acoustically effective.",
    ],
    whatsappMessage: "Hi, I'm interested in the Absorption Panel. Could you provide more information and pricing?",
    cardSpecs: ["NRC 0.95", "60×120×5cm", "Class A Fire Rating"],
  },
]

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug)
}

export function getProductSlugs(): string[] {
  return products.map((p) => p.slug)
}

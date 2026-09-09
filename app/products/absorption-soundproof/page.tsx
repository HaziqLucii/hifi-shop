import ProductDetail from "../../components/product-detail"

const BASE = "https://kx2kaqlxinzax2dn.public.blob.vercel-storage.com/absorptionpanel"

const images = [
  { src: `${BASE}/absorption-panel-1.jpeg`, alt: "Absorption Soundproof Panel - View 1" },
  { src: `${BASE}/absorption-panel-2.jpeg`, alt: "Absorption Soundproof Panel - View 2" },
  { src: `${BASE}/absorption-panel-3.jpeg`, alt: "Absorption Soundproof Panel - View 3" },
  { src: `${BASE}/absorption-panel-4.jpeg`, alt: "Absorption Soundproof Panel - View 4" },
  { src: `${BASE}/absorption-panel-5.jpeg`, alt: "Absorption Soundproof Panel - View 5" },
  { src: `${BASE}/absorption-panel-6.jpeg`, alt: "Absorption Soundproof Panel - View 6" },
]

const features = [
  "High absorption coefficient",
  "Broadband frequency absorption",
  "Fire-resistant materials",
  "Multiple thickness options",
  "Easy mounting system",
  "Customisable fabric finishes",
  "Custom sizes available upon request",
]

const specs = [
  { name: "Dimensions", value: "60cm × 120cm × 5cm" },
  { name: "Weight", value: "3.2 kg" },
  { name: "Material", value: "High-density foam core" },
  { name: "NRC Rating", value: "0.95" },
  { name: "Frequency Range", value: "125 Hz – 4000 Hz" },
  { name: "Fire Rating", value: "Class A" },
]

const about = [
  "Our Absorption Soundproof panels are engineered to provide maximum sound absorption across a wide frequency range. The high-density foam core effectively reduces room reflections, echo, and reverberation, creating a controlled acoustic environment ideal for critical listening and recording.",
  "Each panel features a carefully selected combination of materials that ensures optimal acoustic performance while meeting strict fire safety standards. The panels can be covered with a variety of fabric options to match your room's aesthetic, making them as visually appealing as they are acoustically effective.",
]

export default function AbsorptionSoundproof() {
  return (
    <ProductDetail
      index="03"
      eyebrow="Echo & Reverb Control"
      title="Absorption Soundproof"
      subtitle="Professional-grade sound absorption solution."
      breadcrumbLabel="Absorption Soundproof"
      breadcrumbHref="/products/absorption-soundproof"
      images={images}
      features={features}
      specs={specs}
      about={about}
      whatsappMessage="Hi, I'm interested in the Absorption Soundproof Panel. Could you provide more information and pricing?"
    />
  )
}

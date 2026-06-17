import type { Metadata } from "next"
import { Footprints, Layers, Settings2, Palette, Shield, Maximize } from "lucide-react"
import { PageHero } from "@/components/page-hero"
import { ProductGrid, type Product } from "@/components/product-grid"
import { SpecCards } from "@/components/spec-cards"
import { QuoteCta } from "@/components/quote-cta"

export const metadata: Metadata = {
  title: "Socks & Tights Manufacturing | Peyote Knitwear",
  description:
    "Baby gripper socks, ankle, crew, and diabetic socks. Technical specifications, materials, construction features, and customization options for global brands.",
}

const products: Product[] = [
  {
    name: "Gripper Socks",
    image: "/images/gripper-socks.png",
    description: "Anti-slip silicone gripper soles for safe first steps, knitted in soft cushioned cotton.",
    tags: ["Anti-slip", "Cushioned", "Safety"],
  },
  {
    name: "Ankle Socks",
    image: "/images/ankle-socks.png",
    description: "Lightweight ankle-length socks with elasticated cuffs that stay put without marking skin.",
    tags: ["Lightweight", "Non-marking", "Everyday"],
  },
  {
    name: "Crew Socks",
    image: "/images/crew-socks.png",
    description: "Ribbed crew socks offering warmth and a snug fit, ideal for cooler-weather ranges.",
    tags: ["Ribbed", "Warm", "Snug fit"],
  },
  {
    name: "Diabetic Socks",
    image: "/images/diabetic-socks.png",
    description: "Seamless, non-binding socks engineered for sensitive skin and improved circulation.",
    tags: ["Seamless", "Non-binding", "Sensitive skin"],
  },
]

const specs = [
  { icon: Layers, title: "Materials", value: "Combed cotton blends", note: "Cotton, bamboo, spandex, and nylon blends for stretch and comfort." },
  { icon: Settings2, title: "Construction", value: "Seamless toe, terry sole", note: "Hand-linked toes and reinforced heels for durability." },
  { icon: Shield, title: "Safety features", value: "Silicone grippers", note: "Skin-safe, non-toxic anti-slip prints tested for little ones." },
  { icon: Palette, title: "Customization", value: "Custom colours & knit", note: "Jacquard logos, stripes, and pantone-matched colourways." },
  { icon: Maximize, title: "Size range", value: "Newborn to adult", note: "Full grading across baby, kids, and adult specialty socks." },
  { icon: Footprints, title: "Gauge", value: "144N / 200N machines", note: "Fine-gauge knitting for smooth, comfortable finishes." },
]

export default function SocksTightsPage() {
  return (
    <>
      <PageHero
        eyebrow="Socks & Tights"
        title="Precision-knit socks engineered for comfort and safety"
        description="A complete range of baby and specialty socks — from anti-slip grippers to seamless diabetic socks — knitted to exacting technical standards."
      />

      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
          <ProductGrid products={products} />
        </div>
      </section>

      <section className="border-y border-border bg-secondary/40">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
          <SpecCards
            title="Technical specifications"
            subtitle="Built on advanced knitting machinery with rigorous attention to construction and materials."
            items={specs}
          />
        </div>
      </section>

      <QuoteCta />
    </>
  )
}

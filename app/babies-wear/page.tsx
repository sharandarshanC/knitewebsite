import type { Metadata } from "next"
import { Layers, Package, Clock, ShieldCheck, Ruler, Droplets } from "lucide-react"
import { PageHero } from "@/components/page-hero"
import { ProductGrid, type Product } from "@/components/product-grid"
import { SpecCards } from "@/components/spec-cards"
import { QuoteCta } from "@/components/quote-cta"

export const metadata: Metadata = {
  title: "Babies Wear Manufacturing | Peyote Knitwear",
  description:
    "Bodysuits, sleepsuits, rompers, and gift packs in GOTS certified organic cotton. Fabric options, MOQ, lead times, and quality control for private-label brands.",
}

const products: Product[] = [
  {
    name: "Bodysuits",
    image: "/images/bodysuit.png",
    description: "Short and long sleeve organic cotton bodysuits with envelope necklines and nickel-free snaps.",
    tags: ["Organic cotton", "Snap closure", "0–24M"],
  },
  {
    name: "Sleepsuits",
    image: "/images/sleepsuit.png",
    description: "Footed sleepsuits with integrated mitts, soft seams, and breathable interlock fabric.",
    tags: ["Footed", "Anti-scratch", "Breathable"],
  },
  {
    name: "Rompers",
    image: "/images/romper.png",
    description: "Lightweight rompers in single jersey and rib knits, ideal for warm-weather collections.",
    tags: ["Single jersey", "Rib knit", "Summer"],
  },
  {
    name: "Gift Packs",
    image: "/images/giftpack.png",
    description: "Curated multi-piece newborn sets with custom retail-ready packaging and branding.",
    tags: ["Retail-ready", "Custom box", "Multi-piece"],
  },
]

const specs = [
  { icon: Layers, title: "Fabric options", value: "Organic & combed cotton", note: "Single jersey, interlock, rib, and slub in GOTS certified yarns." },
  { icon: Package, title: "Minimum order (MOQ)", value: "500 pcs / style / colour", note: "Lower MOQs available for sampling and trial programs." },
  { icon: Clock, title: "Lead times", value: "30–45 days", note: "Sampling in 7–10 days; bulk timelines confirmed at order." },
  { icon: ShieldCheck, title: "Quality control", value: "AQL 2.5 inspection", note: "In-line and final inspection at every production stage." },
  { icon: Ruler, title: "Sizing & grading", value: "Newborn to 24 months", note: "Custom size sets and grading to your tech pack." },
  { icon: Droplets, title: "Finishing", value: "Azo-free, low-impact dyes", note: "Enzyme wash and skin-safe finishing for delicate skin." },
]

export default function BabiesWearPage() {
  return (
    <>
      <PageHero
        eyebrow="Babies Wear"
        title="Soft, safe, certified babieswear made to your brand"
        description="From first-layer bodysuits to gift-ready sets, we manufacture premium babieswear with full control over fabric, fit, and finish."
      />

      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
          <ProductGrid products={products} />
        </div>
      </section>

      <section className="border-y border-border bg-secondary/40">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
          <SpecCards
            title="Production details at a glance"
            subtitle="Transparent specifications to help you plan your collection with confidence."
            items={specs}
          />
        </div>
      </section>

      <QuoteCta />
    </>
  )
}

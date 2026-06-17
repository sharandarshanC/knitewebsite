import type { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Babies Wear Manufacturing | Peyote Knitwear",
  description:
    "Organic and premium baby garment manufacturing including bodysuits, sleepsuits, rompers, and gift sets with private-label customization.",
}

const products = [
  {
    name: "Bodysuits",
    image: "/images/bodysuit.png",
    description:
      "Short and long sleeve bodysuits made with baby-safe cotton knits and clean snap finishes.",
    points: [
      "Envelope neck and shoulder opening",
      "Nickel-free snap buttons",
      "Interlock and rib fabric options",
      "Sizes newborn to 24 months",
    ],
  },
  {
    name: "Sleepsuits",
    image: "/images/sleepsuit.png",
    description:
      "Comfort-first sleepwear with soft seams, easy dressing openings, and breathable knitted fabrics.",
    points: [
      "Footed and open-foot styles",
      "Anti-scratch fold-over mitten options",
      "Front zip or snap opening",
      "Suitable for printed or solid programs",
    ],
  },
  {
    name: "Rompers",
    image: "/images/romper.png",
    description:
      "Lightweight one-piece styles for casual and seasonal collections with easy movement and soft hand feel.",
    accent: true,
    points: [
      "Single jersey and slub options",
      "Summer-friendly styling",
      "Custom print placement",
      "Elastic leg and sleeve options",
    ],
  },
  {
    name: "Gift packs",
    image: "/images/giftpack.png",
    description:
      "Coordinated newborn sets prepared for retail shelves, gifting programs, and private-label launches.",
    accent: true,
    badge: "Popular",
    points: [
      "Multi-piece set planning",
      "Private label tags and inserts",
      "Printed box and pouch packaging",
      "Color-coordinated assortments",
    ],
  },
]

const specs = [
  { label: "Fabric options", value: "Organic and combed cotton knits" },
  { label: "Minimum order", value: "500 pieces per style/color", accent: true },
  { label: "Lead time", value: "30-45 days after approval", accent: true },
  { label: "Sizing", value: "Newborn to 24 months" },
]

const featureGroups = [
  {
    title: "Production details",
    items: [
      "Single jersey, rib, interlock, and fleece programs",
      "Azo-free printing and baby-safe trims",
      "Inline quality checkpoints at each stage",
      "Measurement control based on buyer spec sheet",
    ],
  },
  {
    title: "Customization options",
    accent: true,
    items: [
      "Private label branding and packing",
      "Embroidery, print, and applique placement",
      "Seasonal color card development",
      "Retail-ready gift box configuration",
    ],
  },
]

export default function BabiesWearPage() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8 lg:py-20">
        <div className="max-w-4xl">
          <h1 className="reveal font-heading text-4xl font-extrabold tracking-tight text-brand lg:text-6xl">
            Babies wear manufacturing
          </h1>
          <p className="reveal mt-5 max-w-4xl text-lg leading-relaxed text-foreground/80 lg:text-2xl">
            Soft, safe, certified baby garments built for private-label brands and export programs.
            From basics to gift sets, we manufacture quality pieces with precise finishing.
          </p>
        </div>

        <div className="reveal mt-12 h-px w-full bg-border" />

        <section className="mt-12">
          <p className="reveal text-sm font-bold uppercase tracking-[0.14em] text-[#97a4be]">
            Product categories
          </p>
          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            {products.map((product) => (
              <article
                key={product.name}
                className="reveal overflow-hidden rounded-2xl border border-[#cfd9e6] bg-card shadow-[0_8px_24px_rgba(13,40,84,0.04)]"
              >
                <div className="relative aspect-[16/9] border-b border-[#d9e1ec] bg-secondary/40">
                  <Image src={product.image} alt={product.name} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <h2
                      className={`font-heading text-2xl font-extrabold ${
                        product.accent ? "text-brand-accent" : "text-brand"
                      }`}
                    >
                      {product.name}
                    </h2>
                    {product.badge ? (
                      <span className="rounded-full bg-[#e8efff] px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] text-[#2c67d7]">
                        {product.badge}
                      </span>
                    ) : null}
                  </div>
                  <p className="mt-3 text-lg leading-relaxed text-foreground/75">
                    {product.description}
                  </p>
                  <div className="mt-5 border-t border-[#d9e1ec] pt-5">
                    <ul className="grid gap-3 text-sm leading-relaxed text-foreground/80 sm:grid-cols-2">
                      {product.points.map((point) => (
                        <li key={point}>- {point}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-14">
          <p className="reveal text-sm font-bold uppercase tracking-[0.14em] text-[#97a4be]">
            Technical specifications
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {specs.map((spec) => (
              <article
                key={spec.label}
                className="reveal rounded-2xl border border-[#d7dbe3] bg-card p-6 shadow-[0_8px_24px_rgba(13,40,84,0.04)]"
              >
                <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#97a4be]">
                  {spec.label}
                </p>
                <p
                  className={`mt-3 text-2xl font-extrabold leading-snug ${
                    spec.accent ? "text-brand-accent" : "text-brand"
                  }`}
                >
                  {spec.value}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="reveal mt-10 rounded-2xl border-2 border-[#3e5fc2] bg-card p-8">
          <div className="grid gap-10 lg:grid-cols-2">
            {featureGroups.map((group) => (
              <div key={group.title}>
                <h2
                  className={`text-xl font-extrabold uppercase tracking-[0.08em] ${
                    group.accent ? "text-brand-accent" : "text-brand"
                  }`}
                >
                  {group.title}
                </h2>
                <ul className="mt-5 space-y-3 text-lg leading-relaxed text-foreground/85">
                  {group.items.map((item) => (
                    <li key={item}>- {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </div>
    </section>
  )
}

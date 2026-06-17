import type { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Socks & Tights Manufacturing | Peyote Knitwear",
  description:
    "Advanced sock knitting for baby, children, and specialty socks including gripper, crew, ankle, and diabetic socks.",
}

const products = [
  {
    name: "Baby socks with gripper",
    description:
      "Non-slip socks designed for crawling and early walking with secure grip patterns.",
    image: "/images/gripper-socks.png",
    badge: "Popular",
    points: [
      "Silicone gripper dots on sole",
      "Breathable cotton blend",
      "Soft elastic cuffs stay in place",
      "Sizes 0-24 months",
    ],
  },
  {
    name: "Ankle socks",
    description:
      "Classic ankle-length socks in various colors and patterns for everyday wear.",
    image: "/images/ankle-socks.png",
    points: [
      "Reinforced heel and toe",
      "Seamless toe construction",
      "Moisture-wicking materials",
      "Multiple color options",
    ],
  },
  {
    name: "Crew length socks",
    description:
      "Mid-calf socks providing extra coverage and warmth for active children.",
    image: "/images/crew-socks.png",
    accent: true,
    points: [
      "Elastic arch support",
      "Cushioned sole for comfort",
      "Stays up during activity",
      "Sizes 2-12 years",
    ],
  },
  {
    name: "Diabetic socks",
    description:
      "Specialized non-binding socks with smooth seams for sensitive feet.",
    image: "/images/diabetic-socks.png",
    badge: "Specialty",
    accent: true,
    points: [
      "Non-binding tops prevent constriction",
      "Seamless interior reduces friction",
      "Moisture management fabric",
      "Medical-grade construction",
    ],
  },
]

const specs = [
  { label: "Needle count", value: "144N to 200N available" },
  { label: "Materials", value: "Cotton, bamboo, polyester blends" },
  { label: "Minimum order", value: "2,400 pairs per style/color", accent: true },
  { label: "Lead time", value: "28-35 days after approval", accent: true },
]

const featureGroups = [
  {
    title: "Construction features",
    items: [
      "Seamless toe linking for comfort",
      "Y-heel construction for better fit",
      "Cushioned sole options available",
      "Reinforced heel and toe areas",
    ],
  },
  {
    title: "Customization options",
    accent: true,
    items: [
      "Custom jacquard patterns and logos",
      "Multiple yarn combinations",
      "Private label and packaging",
      "Size range customization",
    ],
  },
]

export default function SocksTightsPage() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8 lg:py-20">
        <div className="max-w-4xl">
          <h1 className="reveal font-heading text-4xl font-extrabold tracking-tight text-brand lg:text-6xl">
            Socks &amp; tights manufacturing
          </h1>
          <p className="reveal mt-5 max-w-4xl text-lg leading-relaxed text-foreground/80 lg:text-2xl">
            Advanced sock knitting technology for baby, children, and specialty socks. From
            gripper socks to diabetic-friendly designs, we manufacture quality products with
            precision.
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
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
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

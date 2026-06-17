import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"

const categories = [
  {
    title: "Babies Wear",
    description: "Bodysuits, sleepsuits, rompers, and gift packs in soft organic cotton — made to your specification.",
    image: "/images/babieswear.png",
    href: "/babies-wear",
    items: ["Bodysuits", "Sleepsuits", "Rompers", "Gift Packs"],
  },
  {
    title: "Socks & Tights",
    description: "Gripper socks, ankle, crew, and diabetic socks knitted with comfort, durability, and safety in mind.",
    image: "/images/socks.png",
    href: "/socks-tights",
    items: ["Gripper Socks", "Ankle Socks", "Crew Socks", "Diabetic Socks"],
  },
]

export function ProductCategories() {
  return (
    <section className="bg-secondary/40">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
        <div className="reveal max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-accent">Product categories</p>
          <h2 className="mt-4 font-heading text-3xl font-extrabold leading-tight tracking-tight text-foreground text-balance lg:text-4xl">
            Two specialties, engineered to scale
          </h2>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {categories.map((cat) => (
            <Link
              key={cat.title}
              href={cat.href}
              className="reveal group relative overflow-hidden rounded-3xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-brand/10"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={cat.image || "/placeholder.svg"}
                  alt={cat.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-7">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-heading text-2xl font-extrabold text-foreground">{cat.title}</h3>
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary text-brand transition-colors group-hover:bg-brand group-hover:text-brand-foreground">
                    <ArrowUpRight className="h-5 w-5" />
                  </span>
                </div>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">{cat.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {cat.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-foreground"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

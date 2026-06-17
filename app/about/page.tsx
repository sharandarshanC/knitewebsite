import type { Metadata } from "next"
import Image from "next/image"
import { Award, Leaf, Gauge, HeartHandshake, MapPin } from "lucide-react"
import { PageHero } from "@/components/page-hero"
import { QuoteCta } from "@/components/quote-cta"

export const metadata: Metadata = {
  title: "About Us | Peyote Knitwear Private Limited",
  description:
    "Peyote Knitwear Private Limited, Tiruppur, India — baby garments and socks manufacturing with 100,000 pieces/month capacity. Led by Director Deebak Meganathan.",
}

const values = [
  { icon: Award, title: "Quality", body: "Uncompromising standards from yarn selection through final inspection." },
  { icon: Leaf, title: "Sustainability", body: "Organic materials and responsible processes that respect people and planet." },
  { icon: Gauge, title: "Operational excellence", body: "Lean, vertically integrated production tuned for consistency and scale." },
  { icon: HeartHandshake, title: "Customer focus", body: "Long-term partnerships built on transparency, reliability, and service." },
]

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="A trusted babieswear manufacturer rooted in Tiruppur"
        description="Peyote Knitwear Private Limited manufactures premium baby garments and socks for buyers and brands across the globe, with a production capacity of 100,000 pieces per month."
      />

      <section className="bg-background">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 lg:grid-cols-2 lg:px-8 lg:py-24">
          <div className="reveal relative overflow-hidden rounded-3xl border border-border shadow-xl">
            <Image
              src="/images/factory-team.png"
              alt="Peyote Knitwear manufacturing facility in Tiruppur"
              width={800}
              height={650}
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <p className="reveal flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-brand-accent">
              <MapPin className="h-4 w-4" /> Tiruppur, Tamil Nadu, India
            </p>
            <h2 className="reveal mt-4 font-heading text-3xl font-extrabold leading-tight tracking-tight text-foreground text-balance lg:text-4xl">
              Complete babieswear manufacturing under one roof
            </h2>
            <p className="reveal mt-5 text-lg leading-relaxed text-muted-foreground">
              From our base in Tiruppur — the knitwear capital of India — we control every step of the
              process: knitting, dyeing, cutting, stitching, finishing, and packing. This vertical
              integration lets us guarantee quality, protect lead times, and respond quickly to the needs
              of global private-label brands.
            </p>
            <p className="reveal mt-4 text-lg leading-relaxed text-muted-foreground">
              With 12+ years of expertise and 127+ advanced machinery units, we combine craftsmanship with
              modern manufacturing to produce 100,000 pieces every month.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-secondary/40">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
          <div className="reveal max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-accent">Our values</p>
            <h2 className="mt-4 font-heading text-3xl font-extrabold leading-tight tracking-tight text-foreground text-balance lg:text-4xl">
              The principles behind every order
            </h2>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div key={value.title} className="reveal rounded-2xl border border-border bg-card p-7">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand text-brand-foreground">
                  <value.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-heading text-lg font-bold text-foreground">{value.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{value.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
          <div className="reveal grid items-center gap-10 rounded-3xl border border-border bg-card p-8 lg:grid-cols-[280px_1fr] lg:p-12">
            <div className="relative mx-auto aspect-square w-56 overflow-hidden rounded-2xl border border-border lg:w-full">
              <Image
                src="/images/director.png"
                alt="Deebak Meganathan, Director of Peyote Knitwear"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-accent">Leadership</p>
              <h2 className="mt-3 font-heading text-2xl font-extrabold text-foreground lg:text-3xl">
                Deebak Meganathan
              </h2>
              <p className="mt-1 text-base font-medium text-brand">Director, Peyote Knitwear Private Limited</p>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                &ldquo;We built Peyote Knitwear to be the manufacturing partner we&apos;d want to work with —
                dependable, transparent, and obsessed with quality. Every garment we make carries our promise
                to our buyers and the families who ultimately wear it.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      <QuoteCta />
    </>
  )
}

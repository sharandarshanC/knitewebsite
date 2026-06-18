import Link from "next/link"
import Image from "next/image"
import { ArrowRight, ShieldCheck, Leaf } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-background">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 lg:grid-cols-2 lg:items-center lg:gap-8 lg:px-8 lg:py-24">
        <div>
          <div className="reveal inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand">
            <Leaf className="h-3.5 w-3.5 text-brand-accent" />
            Tiruppur, India · Est. 12+ years
          </div>
          <h1 className="reveal mt-6 font-heading text-4xl font-extrabold leading-[1.05] tracking-tight text-foreground text-balance sm:text-5xl lg:text-6xl">
            Complete babieswear manufacturing under one roof
          </h1>
          <p className="reveal mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty">
            From organic yarn to finished, packed garments — Peyote Knitwear delivers premium babieswear and
            socks for global buyers and private-label brands, with full vertical control over quality.
          </p>

          <div className="reveal mt-8 flex flex-wrap gap-4">
            <div className="flex items-center gap-2 rounded-full bg-secondary px-4 py-2 text-sm font-semibold text-foreground">
              <ShieldCheck className="h-4 w-4 text-brand" /> GOTS Certified
            </div>
            <div className="flex items-center gap-2 rounded-full bg-secondary px-4 py-2 text-sm font-semibold text-foreground">
              <ShieldCheck className="h-4 w-4 text-brand-accent" /> SEDEX Approved
            </div>
          </div>

          <div className="reveal mt-10 flex flex-col gap-3 sm:flex-row">
            <Button
              render={<Link href="/contact#quote-request" />}
              size="lg"
              className="rounded-full bg-brand text-brand-foreground hover:bg-brand/90"
            >
              Request a Quote <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
            <Button
              render={<Link href="/babies-wear" />}
              size="lg"
              variant="outline"
              className="rounded-full bg-transparent"
            >
              Explore Products
            </Button>
          </div>
        </div>

        <div className="reveal relative">
          <div className="relative overflow-hidden rounded-3xl border border-border shadow-2xl shadow-brand/10">
            <Image
              src="/images/hero-factory.png"
              alt="Modern textile knitting factory floor at Peyote Knitwear in Tiruppur"
              width={900}
              height={1000}
              priority
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-4 hidden rounded-2xl border border-border bg-card p-5 shadow-xl sm:block">
            <p className="font-heading text-3xl font-extrabold text-brand">100,000</p>
            <p className="text-sm font-medium text-muted-foreground">pieces produced / month</p>
          </div>
        </div>
      </div>
    </section>
  )
}

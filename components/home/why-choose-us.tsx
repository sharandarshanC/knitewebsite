import { Factory, ShieldCheck, Recycle, Gauge, Boxes, HeartHandshake } from "lucide-react"

const reasons = [
  {
    icon: Factory,
    title: "Vertically integrated",
    body: "Knitting, dyeing, cutting, stitching, and packing — every stage handled in-house for total quality control.",
  },
  {
    icon: ShieldCheck,
    title: "Certified & compliant",
    body: "GOTS Certified organic processing and SEDEX Approved ethical manufacturing trusted by global buyers.",
  },
  {
    icon: Recycle,
    title: "Sustainable by design",
    body: "Organic cotton, responsible water use, and low-impact dyes that meet international sustainability standards.",
  },
  {
    icon: Gauge,
    title: "Scalable capacity",
    body: "127+ advanced machinery units producing 100,000 pieces per month with consistent on-time delivery.",
  },
  {
    icon: Boxes,
    title: "Private-label ready",
    body: "Custom fabrics, trims, sizing, labelling, and packaging built precisely to your brand specification.",
  },
  {
    icon: HeartHandshake,
    title: "Buyer-first partnership",
    body: "Dedicated merchandising support, transparent communication, and reliable lead times from sample to bulk.",
  },
]

export function WhyChooseUs() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
        <div className="reveal max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-accent">Why choose us</p>
          <h2 className="mt-4 font-heading text-3xl font-extrabold leading-tight tracking-tight text-foreground text-balance lg:text-4xl">
            A manufacturing partner built for global brands
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Everything you need to launch and scale a premium babieswear range — under one roof in Tiruppur,
            the knitwear capital of India.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="reveal group rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand/30 hover:shadow-xl hover:shadow-brand/5"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-brand transition-colors group-hover:bg-brand group-hover:text-brand-foreground">
                <reason.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-heading text-lg font-bold text-foreground">{reason.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{reason.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

import type { Metadata } from "next"
import { ShieldCheck, Leaf, BadgeCheck, Users, Recycle, Droplets, FileCheck, HeartHandshake } from "lucide-react"
import { PageHero } from "@/components/page-hero"
import { QuoteCta } from "@/components/quote-cta"

export const metadata: Metadata = {
  title: "Certifications & Compliance | Peyote Knitwear",
  description:
    "GOTS Certified and SEDEX Approved manufacturing. Sustainability practices, quality assurance, and ethical manufacturing standards at Peyote Knitwear.",
}

const certifications = [
  {
    icon: Leaf,
    name: "GOTS Certified",
    tag: "Global Organic Textile Standard",
    body: "Our organic cotton processing is certified to GOTS, the leading standard for organic fibres covering ecological and social criteria across the entire supply chain.",
    points: ["Certified organic fibre content", "Restricted chemical inputs", "Full traceability from yarn to garment"],
  },
  {
    icon: BadgeCheck,
    name: "SEDEX Approved",
    tag: "Ethical & Responsible Sourcing",
    body: "We are a SEDEX member with audited compliance, demonstrating our commitment to safe, fair, and ethical working conditions throughout our operations.",
    points: ["Fair labour practices", "Safe working environment", "Transparent, audited operations"],
  },
]

const pillars = [
  { icon: Recycle, title: "Sustainability practices", body: "Organic fibres, responsible waste management, and continuous reduction of our environmental footprint." },
  { icon: Droplets, title: "Water & energy", body: "Efficient dyeing processes and low-impact, azo-free dyes that protect both skin and waterways." },
  { icon: FileCheck, title: "Quality assurance", body: "AQL-based inspection at every stage — from incoming yarn to final packed cartons — for zero-defect shipments." },
  { icon: Users, title: "Ethical manufacturing", body: "Fair wages, no child labour, and a respectful workplace verified through regular third-party audits." },
  { icon: ShieldCheck, title: "Product safety", body: "Skin-safe, non-toxic materials tested to meet the safety expectations of babieswear buyers worldwide." },
  { icon: HeartHandshake, title: "Social responsibility", body: "Investing in our community and workforce to build a sustainable, people-first manufacturing base." },
]

export default function CertificationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Certifications"
        title="Certified quality, ethical and sustainable manufacturing"
        description="Global buyers trust Peyote Knitwear because compliance isn't a checkbox — it's built into how we operate every single day."
      />

      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
          <div className="grid gap-6 lg:grid-cols-2">
            {certifications.map((cert) => (
              <div
                key={cert.name}
                className="reveal rounded-3xl border border-border bg-card p-8 transition-all duration-300 hover:shadow-xl hover:shadow-brand/5 lg:p-10"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand text-brand-foreground">
                  <cert.icon className="h-7 w-7" />
                </div>
                <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-brand-accent">{cert.tag}</p>
                <h2 className="mt-2 font-heading text-2xl font-extrabold text-foreground">{cert.name}</h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">{cert.body}</p>
                <ul className="mt-6 space-y-3">
                  {cert.points.map((point) => (
                    <li key={point} className="flex items-start gap-3 text-sm text-foreground">
                      <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-secondary/40">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
          <div className="reveal max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-accent">Our standards</p>
            <h2 className="mt-4 font-heading text-3xl font-extrabold leading-tight tracking-tight text-foreground text-balance lg:text-4xl">
              Compliance woven into every process
            </h2>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {pillars.map((pillar) => (
              <div key={pillar.title} className="reveal rounded-2xl border border-border bg-card p-7">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-secondary text-brand">
                  <pillar.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-heading text-lg font-bold text-foreground">{pillar.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{pillar.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <QuoteCta />
    </>
  )
}

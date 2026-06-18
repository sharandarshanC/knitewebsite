import type { Metadata } from "next"
import Image from "next/image"
import {
  Award,
  CheckCircle2,
  Factory,
  Gauge,
  Globe2,
  HeartHandshake,
  Leaf,
  Quote,
  ShieldCheck,
  Sparkles,
} from "lucide-react"

export const metadata: Metadata = {
  title: "About Us | Peyote Knitwear Private Limited",
  description:
    "About Peyote Knitwear Private Limited in Tiruppur, Tamil Nadu, India. Baby garments and socks manufacturing with GOTS and SEDEX approvals.",
}

const companyFacts = [
  { label: "Location", value: "Tiruppur, Tamil Nadu" },
  { label: "Monthly capacity", value: "100,000 pieces" },
  { label: "Core categories", value: "Babywear, socks, tights" },
  { label: "Compliance", value: "GOTS and SEDEX approved" },
]

const values = [
  {
    icon: ShieldCheck,
    title: "Quality assurance",
    body: "Structured checks across sampling, production, finishing, and packing keep orders consistent at scale.",
  },
  {
    icon: Leaf,
    title: "Responsible production",
    body: "Organic programs, ethical sourcing discipline, and compliant factory practices support global buyer standards.",
  },
  {
    icon: Gauge,
    title: "Operational control",
    body: "A focused Tiruppur team manages lead times, supplier coordination, and production efficiency with clear ownership.",
  },
  {
    icon: HeartHandshake,
    title: "Buyer partnership",
    body: "Transparent communication, practical merchandising support, and private-label flexibility from sample to shipment.",
  },
]

const achievements = [
  "20% reduction in lead time through tighter planning",
  "20% improvement in production efficiency",
  "15% supplier cost reduction without compromising quality",
]

const education = [
  {
    degree: "MSc, Logistics & Supply Chain",
    institution: "Lancaster University",
    years: "2010 - 2011",
  },
  {
    degree: "B.Tech, Textile Technology",
    institution: "PSG College of Technology",
    years: "2006 - 2010",
  },
]

export default function AboutPage() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-7xl px-5 py-12 lg:px-8 lg:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-[1.02fr_0.98fr]">
          <div className="reveal">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-accent">
              About Peyote Knitwear
            </p>
            <h1 className="mt-4 max-w-4xl font-heading text-4xl font-extrabold leading-tight tracking-tight text-foreground text-balance lg:text-6xl">
              Precision knitwear manufacturing from Tiruppur.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground lg:text-xl">
              Peyote Knitwear Private Limited manufactures baby garments, socks, and tights for
              brands that need reliable quality, responsible production, and dependable delivery.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <div className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand/10 px-4 py-2 text-sm font-semibold text-brand">
                <Award className="size-4" aria-hidden="true" />
                GOTS approved
              </div>
              <div className="inline-flex items-center gap-2 rounded-full border border-brand-accent/25 bg-brand-accent/10 px-4 py-2 text-sm font-semibold text-brand-accent">
                <Globe2 className="size-4" aria-hidden="true" />
                SEDEX approved
              </div>
            </div>
          </div>

          <div className="reveal relative min-h-[360px] overflow-hidden rounded-3xl border border-border bg-secondary shadow-2xl shadow-brand/10 lg:min-h-[520px]">
            <Image
              src="/images/factory-team.png"
              alt="Peyote Knitwear factory floor"
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/35 to-transparent p-6 text-white lg:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/70">
                Manufacturing base
              </p>
              <p className="mt-2 font-heading text-2xl font-extrabold">
                Tiruppur, Tamil Nadu, India
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {companyFacts.map((fact) => (
            <article
              key={fact.label}
              className="reveal rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand/30 hover:shadow-xl hover:shadow-brand/5"
            >
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground">
                {fact.label}
              </p>
              <p className="mt-3 font-heading text-xl font-extrabold leading-snug text-foreground">
                {fact.value}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-20 grid gap-10 lg:grid-cols-[0.78fr_1.22fr]">
          <div className="reveal">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-accent">
              Core values
            </p>
            <h2 className="mt-4 font-heading text-3xl font-extrabold leading-tight tracking-tight text-foreground text-balance lg:text-4xl">
              Built for buyers who need clarity at every stage.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Our operating principles are practical: protect product quality, keep communication
              visible, and make production decisions that support long-term brand trust.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {values.map((value) => (
              <article
                key={value.title}
                className="reveal rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand/30 hover:shadow-xl hover:shadow-brand/5"
              >
                <div className="flex size-12 items-center justify-center rounded-2xl bg-secondary text-brand">
                  <value.icon className="size-6" aria-hidden="true" />
                </div>
                <h3 className="mt-5 font-heading text-lg font-bold text-foreground">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{value.body}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-20 grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <aside className="reveal rounded-3xl border border-border bg-card p-7 shadow-xl shadow-brand/5 lg:p-8">
            <div className="flex items-start gap-4">
              <div className="relative size-24 shrink-0 overflow-hidden rounded-2xl border border-border bg-secondary">
                <Image
                  src="/images/director.png"
                  alt="Deebak Meganathan"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-accent">
                  Corporate leadership
                </p>
                <h2 className="mt-2 font-heading text-3xl font-extrabold leading-tight text-foreground">
                  Deebak Meganathan
                </h2>
                <p className="mt-2 font-semibold text-muted-foreground">
                  Director at Peyote Knitwear
                </p>
              </div>
            </div>

            <div className="mt-8 space-y-5 border-t border-border pt-6">
              {education.map((item) => (
                <div key={item.degree}>
                  <p className="font-heading text-lg font-bold text-foreground">{item.degree}</p>
                  <p className="mt-1 text-sm font-semibold text-muted-foreground">
                    {item.institution} · {item.years}
                  </p>
                </div>
              ))}
            </div>
          </aside>

          <div className="space-y-5">
            <div className="reveal rounded-3xl border border-brand/20 bg-brand p-7 text-brand-foreground shadow-xl shadow-brand/10 lg:p-8">
              <Quote className="size-9 text-brand-accent" aria-hidden="true" />
              <p className="mt-5 text-xl font-semibold italic leading-relaxed lg:text-2xl">
                From being a shy introvert to a corporate leader passionate about lifting others,
                Deebak shares what he has learned to help young professionals grow their careers.
              </p>
            </div>

            <div className="reveal grid gap-5 sm:grid-cols-3">
              {achievements.map((item) => (
                <div key={item} className="rounded-2xl border border-border bg-card p-5">
                  <CheckCircle2 className="size-5 text-brand-accent" aria-hidden="true" />
                  <p className="mt-3 text-sm font-semibold leading-relaxed text-foreground">{item}</p>
                </div>
              ))}
            </div>

            <div className="reveal rounded-2xl border border-border bg-secondary/60 p-6">
              <div className="flex items-start gap-4">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-background text-brand">
                  <Factory className="size-5" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold text-foreground">
                    Operations-led manufacturing
                  </h3>
                  <p className="mt-2 leading-relaxed text-muted-foreground">
                    The company combines textile knowledge with supply-chain discipline, helping
                    buyers move from concept and sampling to repeatable bulk production.
                  </p>
                </div>
              </div>
            </div>

            <div className="reveal rounded-2xl border border-brand-accent/25 bg-brand-accent/10 p-6">
              <div className="flex items-start gap-4">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-background text-brand-accent">
                  <Sparkles className="size-5" aria-hidden="true" />
                </div>
                <p className="leading-relaxed text-foreground">
                  Peyote Knitwear focuses on lasting partnerships with brands that value quality,
                  consistency, ethical production, and practical communication.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

import type { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
  title: "About Us | Peyote Knitwear Private Limited",
  description:
    "About Peyote Knitwear Private Limited in Tiruppur, Tamil Nadu, India. Baby garments and socks manufacturing with GOTS and SEDEX approvals.",
}

const companyFacts = [
  { label: "Company name", value: "Peyote Knitwear Private Limited" },
  { label: "Location", value: "Tiruppur, Tamil Nadu, India" },
  { label: "Specialization", value: "Baby garments and socks manufacturing" },
  { label: "Certifications", value: "GOTS and SEDEX approved" },
  { label: "Production capacity", value: "1,00,000 pieces per month", wide: true },
]

const coreValues = ["Quality", "Sustainability", "Operations Excellence", "Customer Focus"]

const achievements = [
  "20% reduction in lead time",
  "20% increase in production efficiency",
  "15% cost reduction with suppliers",
]

const education = [
  {
    degree: "MSc, Logistics & Supply Chain",
    institution: "Lancaster University",
    years: "(2010 - 2011)",
  },
  {
    degree: "B.Tech, Textile Technology",
    institution: "PSG College of Technology",
    years: "(2006 - 2010)",
  },
]

export default function AboutPage() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8 lg:py-20">
        <div className="max-w-4xl">
          <h1 className="reveal font-heading text-4xl font-extrabold tracking-tight text-brand lg:text-6xl">
            About Peyote Knitwear
          </h1>
          <p className="reveal mt-5 max-w-3xl text-xl leading-relaxed text-foreground/80 lg:text-2xl">
            Combining operations excellence with sustainable practices to redefine quality in the
            garment industry.
          </p>
        </div>

        <div className="reveal mt-12 h-px w-full bg-border" />

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.5fr_0.7fr]">
          <div className="grid gap-4 sm:grid-cols-2">
            {companyFacts.map((fact) => (
              <article
                key={fact.label}
                className={`reveal rounded-2xl border border-[#cfd9e6] bg-card p-6 shadow-[0_8px_24px_rgba(13,40,84,0.04)] ${
                  fact.wide ? "sm:col-span-2" : ""
                }`}
              >
                <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#97a4be]">
                  {fact.label}
                </p>
                <p className="mt-3 text-2xl font-extrabold leading-snug text-black">{fact.value}</p>
              </article>
            ))}
          </div>

          <aside className="reveal rounded-[1.75rem] border border-[#d7dbe3] bg-[#fbfbfc] p-8">
            <h2 className="text-2xl font-extrabold uppercase tracking-[0.12em] text-brand">
              Core values
            </h2>
            <ul className="mt-6 space-y-5">
              {coreValues.map((value) => (
                <li key={value} className="text-xl font-semibold text-brand-accent">
                  <span className="mr-2 text-brand-accent">-</span>
                  {value}
                </li>
              ))}
            </ul>
          </aside>
        </div>

        <div className="reveal mt-16 h-px w-full bg-border" />

        <div className="mt-12 grid gap-10 lg:grid-cols-[0.8fr_1.35fr]">
          <div className="reveal">
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#97a4be]">
              Corporate leadership
            </p>
            <div className="mt-3 flex items-start gap-4">
              <div className="relative hidden h-24 w-24 overflow-hidden rounded-2xl border border-border sm:block">
                <Image
                  src="/images/director.png"
                  alt="Deebak Meganathan"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="font-heading text-4xl font-extrabold tracking-tight text-brand">
                  Deebak Meganathan
                </h2>
                <p className="mt-2 text-base font-semibold text-foreground/75">
                  Director at Peyote Knitwear
                </p>
              </div>
            </div>

            <div className="mt-8 space-y-8 border-t border-border pt-6">
              {education.map((item) => (
                <div key={item.degree}>
                  <p className="text-xl font-extrabold text-black">{item.degree}</p>
                  <p className="mt-1 text-lg font-semibold text-[#9aa7c0]">
                    {item.institution} {item.years}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="reveal rounded-2xl border border-[#cfd9e6] bg-[#eef4fb] p-6 shadow-[0_8px_24px_rgba(13,40,84,0.05)] lg:p-8">
              <p className="text-2xl font-semibold italic leading-relaxed text-brand">
                "From being a shy introvert to a corporate leader passionate about lifting others.
                Deebak loves talking to young folks and sharing what he's learned to help brighten
                their careers and lives."
              </p>
            </div>

            <div className="reveal grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
              <div className="rounded-2xl border border-transparent bg-transparent p-1">
                <p className="text-xl leading-relaxed text-foreground/80">
                  "Since school, I dreamt of significantly impacting the garment industry. My
                  journey has had ups and downs, but I've got a knack for ensuring things work
                  efficiently. Let's connect and see how we can work together to bring positive
                  changes to the garment industry!"
                </p>
              </div>
              <div className="relative min-h-64 overflow-hidden rounded-2xl border border-[#d7e0ea]">
                <Image
                  src="/images/factory-team.png"
                  alt="Peyote Knitwear factory team"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="reveal rounded-2xl border border-[#d7dbe3] bg-card p-7">
              <p className="text-lg font-extrabold uppercase tracking-[0.12em] text-brand-accent">
                Key corporate achievements
              </p>
              <ul className="mt-5 space-y-3 text-lg font-semibold text-black">
                {achievements.map((item) => (
                  <li key={item}>- {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

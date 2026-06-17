import type { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Certifications & Compliance | Peyote Knitwear",
  description:
    "GOTS Certified and SEDEX Approved knitwear manufacturing with sustainable, ethical, and quality-focused production standards.",
}

const certifications = [
  {
    name: "GOTS Certified",
    subtitle: "Global Organic Textile Standard",
    description:
      "Our organic cotton processing follows one of the most recognized textile standards for ecological and social responsibility across the supply chain.",
    points: [
      "Certified organic fibre content",
      "Restricted chemical processing inputs",
      "Traceability from yarn to finished garment",
      "Environmentally responsible production flow",
    ],
  },
  {
    name: "SEDEX Approved",
    subtitle: "Ethical and Responsible Sourcing",
    description:
      "Our facility operates under responsible sourcing practices with strong focus on labour welfare, safe operations, and transparent compliance processes.",
    points: [
      "Fair labour and worker welfare practices",
      "Safe and structured factory environment",
      "Audited and transparent operational controls",
      "Responsible sourcing support for global buyers",
    ],
  },
]

const standards = [
  {
    title: "Sustainability practices",
    body: "Organic fibres, controlled waste handling, and process improvements that reduce environmental load.",
  },
  {
    title: "Water and energy",
    body: "Efficient dyeing, smart consumption control, and low-impact processes that support cleaner manufacturing.",
  },
  {
    title: "Quality assurance",
    body: "Inline and final inspections based on buyer requirements and repeatable production checkpoints.",
  },
  {
    title: "Ethical manufacturing",
    body: "Respectful workplace standards, trained teams, and compliance-backed shopfloor systems.",
  },
  {
    title: "Product safety",
    body: "Baby-safe materials, careful trim selection, and finishing controls aligned with export expectations.",
  },
  {
    title: "Social responsibility",
    body: "Long-term focus on people, process discipline, and building a stable manufacturing environment.",
  },
]

export default function CertificationsPage() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8 lg:py-20">
        <div className="max-w-4xl">
          <h1 className="reveal font-heading text-4xl font-extrabold tracking-tight text-brand lg:text-6xl">
            Certifications &amp; compliance
          </h1>
          <p className="reveal mt-5 max-w-4xl text-lg leading-relaxed text-foreground/80 lg:text-2xl">
            Global buyers trust Peyote Knitwear because quality, ethical manufacturing, and
            responsible sourcing are built into the way we operate every day.
          </p>
        </div>

        <div className="reveal mt-12 h-px w-full bg-border" />

        <section className="mt-12 grid gap-6 lg:grid-cols-2">
          {certifications.map((cert, index) => (
            <article
              key={cert.name}
              className="reveal overflow-hidden rounded-2xl border border-[#cfd9e6] bg-card shadow-[0_8px_24px_rgba(13,40,84,0.04)]"
            >
              <div className="relative aspect-[16/8] border-b border-[#d9e1ec] bg-secondary/40">
                <Image
                  src={index === 0 ? "/images/quality-control.png" : "/images/factory-team.png"}
                  alt={cert.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-7">
                <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#97a4be]">
                  {cert.subtitle}
                </p>
                <h2 className="mt-3 font-heading text-3xl font-extrabold text-brand">
                  {cert.name}
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-foreground/75">
                  {cert.description}
                </p>
                <div className="mt-5 border-t border-[#d9e1ec] pt-5">
                  <ul className="space-y-3 text-base leading-relaxed text-foreground/85">
                    {cert.points.map((point) => (
                      <li key={point}>- {point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </section>

        <section className="mt-14">
          <p className="reveal text-sm font-bold uppercase tracking-[0.14em] text-[#97a4be]">
            Operational standards
          </p>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {standards.map((item, index) => (
              <article
                key={item.title}
                className="reveal rounded-2xl border border-[#d7dbe3] bg-card p-7 shadow-[0_8px_24px_rgba(13,40,84,0.04)]"
              >
                <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#97a4be]">
                  Standard {index + 1}
                </p>
                <h2
                  className={`mt-3 text-2xl font-extrabold ${
                    index % 2 === 1 ? "text-brand-accent" : "text-brand"
                  }`}
                >
                  {item.title}
                </h2>
                <p className="mt-3 text-lg leading-relaxed text-foreground/75">{item.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="reveal mt-10 rounded-2xl border-2 border-[#3e5fc2] bg-card p-8">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-xl font-extrabold uppercase tracking-[0.08em] text-brand">
                Buyer confidence
              </h2>
              <ul className="mt-5 space-y-3 text-lg leading-relaxed text-foreground/85">
                <li>- Structured compliance support for exports and private-label programs</li>
                <li>- Documentation discipline across production and shipment stages</li>
                <li>- Consistent communication on standards, approvals, and order readiness</li>
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-extrabold uppercase tracking-[0.08em] text-brand-accent">
                Manufacturing commitment
              </h2>
              <ul className="mt-5 space-y-3 text-lg leading-relaxed text-foreground/85">
                <li>- Quality-first process control from input material to final packing</li>
                <li>- Ethical operations designed for long-term buyer partnerships</li>
                <li>- Continuous improvement in sustainability, safety, and efficiency</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </section>
  )
}

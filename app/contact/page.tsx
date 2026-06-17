import type { Metadata } from "next"
import { QuoteForm } from "@/components/quote-form"

export const metadata: Metadata = {
  title: "Contact & Get a Quote | Peyote Knitwear",
  description:
    "Contact Peyote Knitwear for manufacturing inquiries, factory locations, and quote requests for baby garments, socks, and tights.",
}

const directContacts = [
  {
    label: "Phone",
    value: "+91 9788852554",
    note: "Call us directly for urgent inquiries",
    href: "tel:+919788852554",
  },
  {
    label: "Email",
    value: "deebak@peyoteknitwear.com",
    note: "We respond to emails within 24 hours",
    href: "mailto:deebak@peyoteknitwear.com",
  },
]

const factories = [
  {
    name: "Factory Location 1",
    lines: [
      "No. 2/241/D, Karukkam Thottam,",
      "Ettiveerampalayam, Perumanallur, Tiruppur,",
      "Tamil Nadu 641666",
    ],
    gst: "GST: 33AAOCP8335Q1ZL",
  },
  {
    name: "Factory Location 2",
    lines: [
      "4/153, Sennimalaipalayam, Thekkalur, Avinashi,",
      "Tiruppur, Tamil Nadu 641654",
    ],
    gst: "GST: 33AAOCP8335Q1ZL",
  },
]

export default function ContactPage() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8 lg:py-20">
        <div className="max-w-5xl">
          <h1 className="reveal font-heading text-4xl font-extrabold tracking-tight text-brand lg:text-6xl">
            Get in touch
          </h1>
          <p className="reveal mt-5 max-w-5xl text-xl leading-relaxed text-foreground/80 lg:text-2xl">
            Share your manufacturing requirements or reach out to our team directly. We are ready
            to help you scale your brand.
          </p>
        </div>

        <div className="reveal mt-12 h-px w-full bg-border" />

        <div className="mt-12 grid gap-8 xl:grid-cols-[0.72fr_1.48fr]">
          <div className="space-y-8">
            <section>
              <p className="reveal text-sm font-bold uppercase tracking-[0.14em] text-[#97a4be]">
                Direct contact
              </p>
              <div className="mt-5 space-y-5">
                {directContacts.map((item) => (
                  <article
                    key={item.label}
                    className="reveal rounded-2xl border border-[#cfd9e6] bg-card p-7 shadow-[0_8px_24px_rgba(13,40,84,0.04)]"
                  >
                    <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#97a4be]">
                      {item.label}
                    </p>
                    <a
                      href={item.href}
                      className="mt-3 block break-words text-2xl font-extrabold text-black"
                    >
                      {item.value}
                    </a>
                    <p className="mt-3 text-lg leading-relaxed text-[#93a0b8]">{item.note}</p>
                  </article>
                ))}
              </div>
            </section>

            <section>
              <p className="reveal text-sm font-bold uppercase tracking-[0.14em] text-[#97a4be]">
                Factory locations
              </p>
              <div className="mt-5 space-y-5">
                {factories.map((factory) => (
                  <article
                    key={factory.name}
                    className="reveal rounded-2xl border border-[#cfd9e6] bg-card p-7 shadow-[0_8px_24px_rgba(13,40,84,0.04)]"
                  >
                    <h2 className="text-2xl font-extrabold text-brand">{factory.name}</h2>
                    <div className="mt-4 space-y-1 text-lg leading-relaxed text-foreground/75">
                      {factory.lines.map((line) => (
                        <p key={line}>{line}</p>
                      ))}
                    </div>
                    <div className="mt-5 inline-flex rounded-2xl bg-[#f1f3f8] px-4 py-3 text-xl font-extrabold tracking-[0.12em] text-[#19345f]">
                      {factory.gst}
                    </div>
                  </article>
                ))}
              </div>
            </section>
          </div>

          <section className="reveal rounded-2xl border border-[#cfd9e6] bg-card p-8 shadow-[0_12px_28px_rgba(13,40,84,0.05)] lg:p-10">
            <h2 className="font-heading text-4xl font-extrabold tracking-tight text-brand">
              Request a quote
            </h2>
            <p className="mt-4 max-w-4xl text-xl leading-relaxed text-foreground/75">
              Fill in the details below and our team will prepare a comprehensive quote including
              pricing, minimum order quantities, and production timelines.
            </p>
            <div className="mt-8">
              <QuoteForm />
            </div>
          </section>
        </div>
      </div>
    </section>
  )
}

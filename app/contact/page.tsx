import type { Metadata } from "next"
import { Building2, Clock, Mail, MapPin, MessageCircle, Phone, ShieldCheck } from "lucide-react"
import { QuoteForm } from "@/components/quote-form"

export const metadata: Metadata = {
  title: "Contact & Get a Quote | Peyote Knitwear",
  description:
    "Contact Peyote Knitwear for manufacturing inquiries, factory locations, and quote requests for baby garments, socks, and tights.",
}

const directContacts = [
  {
    icon: Phone,
    label: "Call",
    value: "+91 9788852554",
    note: "For urgent production or sampling inquiries",
    href: "tel:+919788852554",
  },
  {
    icon: Mail,
    label: "Email",
    value: "deebak@peyoteknitwear.com",
    note: "Share tech packs, quantities, and timelines",
    href: "mailto:deebak@peyoteknitwear.com",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Message our team",
    note: "Fast follow-up for buyer conversations",
    href: "https://wa.me/919788852554",
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
    gst: "33AAOCP8335Q1ZL",
  },
  {
    name: "Factory Location 2",
    lines: [
      "4/153, Sennimalaipalayam, Thekkalur, Avinashi,",
      "Tiruppur, Tamil Nadu 641654",
    ],
    gst: "33AAOCP8335Q1ZL",
  },
]

const quoteSteps = [
  "Product category and target quantity",
  "Fabric, trim, labelling, and packing needs",
  "Target delivery date and destination market",
]

export default function ContactPage() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-7xl px-5 py-12 lg:px-8 lg:py-20">
        <div className="grid items-end gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="reveal">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-accent">
              Contact Peyote Knitwear
            </p>
            <h1 className="mt-4 max-w-4xl font-heading text-4xl font-extrabold leading-tight tracking-tight text-foreground text-balance lg:text-6xl">
              Start your manufacturing inquiry.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground lg:text-xl">
              Send your requirements for babywear, socks, tights, or private-label production. Our
              team will respond with practical next steps, timelines, and quotation details.
            </p>
          </div>

          <div className="reveal rounded-3xl border border-border bg-card p-6 shadow-xl shadow-brand/5 lg:p-8">
            <div className="grid gap-4 sm:grid-cols-3">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground">
                  Response
                </p>
                <p className="mt-2 font-heading text-2xl font-extrabold text-foreground">
                  Within 24h
                </p>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground">
                  Location
                </p>
                <p className="mt-2 font-heading text-2xl font-extrabold text-foreground">
                  Tiruppur
                </p>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground">
                  Capacity
                </p>
                <p className="mt-2 font-heading text-2xl font-extrabold text-foreground">
                  100k/mo
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {directContacts.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.href.startsWith("https") ? "_blank" : undefined}
              rel={item.href.startsWith("https") ? "noopener noreferrer" : undefined}
              className="reveal group rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand/30 hover:shadow-xl hover:shadow-brand/5"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex size-12 items-center justify-center rounded-2xl bg-secondary text-brand transition-colors group-hover:bg-brand group-hover:text-brand-foreground">
                  <item.icon className="size-6" aria-hidden="true" />
                </div>
                <span className="rounded-full bg-brand-accent/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-brand-accent">
                  {item.label}
                </span>
              </div>
              <p className="mt-5 break-words font-heading text-xl font-extrabold text-foreground">
                {item.value}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.note}</p>
            </a>
          ))}
        </div>

        <div className="mt-16 grid gap-8 xl:grid-cols-[0.85fr_1.15fr]">
          <div className="space-y-8">
            <section className="reveal rounded-3xl border border-border bg-secondary/60 p-7 lg:p-8">
              <div className="flex items-center gap-3">
                <div className="flex size-11 items-center justify-center rounded-2xl bg-background text-brand">
                  <Clock className="size-5" aria-hidden="true" />
                </div>
                <h2 className="font-heading text-2xl font-extrabold text-foreground">
                  For a faster quote
                </h2>
              </div>
              <ul className="mt-6 space-y-4">
                {quoteSteps.map((step) => (
                  <li key={step} className="flex gap-3 text-sm font-semibold text-foreground">
                    <ShieldCheck
                      className="mt-0.5 size-5 shrink-0 text-brand-accent"
                      aria-hidden="true"
                    />
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <p className="reveal text-sm font-semibold uppercase tracking-[0.2em] text-brand-accent">
                Factory locations
              </p>
              <div className="mt-5 space-y-5">
                {factories.map((factory) => (
                  <article
                    key={factory.name}
                    className="reveal rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:border-brand/30 hover:shadow-xl hover:shadow-brand/5"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-secondary text-brand">
                        <MapPin className="size-5" aria-hidden="true" />
                      </div>
                      <div>
                        <h3 className="font-heading text-xl font-extrabold text-foreground">
                          {factory.name}
                        </h3>
                        <div className="mt-3 space-y-1 text-sm leading-relaxed text-muted-foreground">
                          {factory.lines.map((line) => (
                            <p key={line}>{line}</p>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="mt-5 inline-flex max-w-full items-center gap-2 rounded-full bg-secondary px-4 py-2 text-sm font-bold tracking-[0.08em] text-foreground">
                      <Building2 className="size-4 shrink-0 text-brand" aria-hidden="true" />
                      <span className="truncate">GST: {factory.gst}</span>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          </div>

          <section
            id="quote-request"
            className="reveal scroll-mt-24 rounded-3xl border border-border bg-card p-6 shadow-2xl shadow-brand/10 lg:scroll-mt-28 lg:p-8 xl:p-10"
          >
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-accent">
                Request a quote
              </p>
              <h2 className="mt-3 font-heading text-3xl font-extrabold tracking-tight text-foreground lg:text-4xl">
                Tell us what you want to produce.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground lg:text-lg">
                Add as much detail as you have. We can help clarify fabric, MOQ, pricing, packaging,
                sampling, and production timelines after reviewing your inquiry.
              </p>
            </div>
            <div className="mt-8">
              <QuoteForm />
            </div>
          </section>
        </div>
      </div>
    </section>
  )
}

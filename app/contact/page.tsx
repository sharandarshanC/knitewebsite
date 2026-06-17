import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { QuoteForm } from "@/components/quote-form"
import { Mail, Phone, MapPin, Clock } from "lucide-react"

export const metadata: Metadata = {
  title: "Contact & Get a Quote | Peyote Knitwear",
  description:
    "Request a quote for babieswear, socks, and tights manufacturing. Partner with Peyote Knitwear in Tiruppur, India for private-label and bulk production.",
}

const details = [
  {
    icon: MapPin,
    label: "Factory & Office",
    lines: ["Peyote Knitwear", "Tiruppur, Tamil Nadu 641604", "India"],
  },
  {
    icon: Mail,
    label: "Email",
    lines: ["sales@peyoteknitwear.com", "exports@peyoteknitwear.com"],
  },
  {
    icon: Phone,
    label: "Phone",
    lines: ["+91 421 000 0000", "+91 98000 00000"],
  },
  {
    icon: Clock,
    label: "Working hours",
    lines: ["Mon – Sat: 9:00 – 18:00 IST", "Replies within 1 business day"],
  },
]

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get in touch"
        title="Let's build your next collection"
        description="Share your requirements and our export team will prepare a tailored quote, samples, and lead times for your brand."
      />

      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <div className="reveal flex flex-col gap-8">
            <div className="flex flex-col gap-3">
              <h2 className="font-heading text-2xl font-semibold tracking-tight text-foreground">
                Contact details
              </h2>
              <p className="leading-relaxed text-muted-foreground">
                Reach us directly or send the form and we&apos;ll get back to you with everything you need to move forward.
              </p>
            </div>

            <ul className="flex flex-col gap-5">
              {details.map((item) => (
                <li key={item.label} className="flex gap-4 rounded-xl border border-border bg-card p-5">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-brand/10 text-brand">
                    <item.icon className="size-5" aria-hidden="true" />
                  </span>
                  <div className="flex flex-col gap-1">
                    <p className="font-medium text-foreground">{item.label}</p>
                    {item.lines.map((line) => (
                      <p key={line} className="text-sm leading-relaxed text-muted-foreground">
                        {line}
                      </p>
                    ))}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="reveal rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-10">
            <div className="mb-8 flex flex-col gap-2">
              <h2 className="font-heading text-2xl font-semibold tracking-tight text-foreground">
                Request a quote
              </h2>
              <p className="leading-relaxed text-muted-foreground">
                Fields marked with an asterisk (*) are required.
              </p>
            </div>
            <QuoteForm />
          </div>
        </div>
      </section>
    </>
  )
}

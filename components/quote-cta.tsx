import Link from "next/link"
import { ArrowRight, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function QuoteCta() {
  return (
    <section className="bg-brand">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
        <div className="reveal flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <h2 className="font-heading text-3xl font-extrabold leading-tight tracking-tight text-brand-foreground text-balance lg:text-4xl">
              Ready to bring your babieswear line to life?
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-brand-foreground/80">
              Partner with a GOTS Certified, SEDEX Approved manufacturer trusted by global brands. Get a
              tailored quote with MOQ, lead times, and fabric options.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button
              render={<Link href="/contact" />}
              size="lg"
              className="rounded-full bg-brand-accent text-brand-accent-foreground hover:bg-brand-accent/90"
            >
              Request a Quote <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
            <Button
              render={
                <a href="https://wa.me/919788852554" target="_blank" rel="noopener noreferrer" />
              }
              size="lg"
              variant="outline"
              className="rounded-full border-brand-foreground/30 bg-transparent text-brand-foreground hover:bg-brand-foreground/10 hover:text-brand-foreground"
            >
              <MessageCircle className="mr-1 h-4 w-4" /> WhatsApp Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

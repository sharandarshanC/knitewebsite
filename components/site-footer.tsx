import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"
import { Logo } from "@/components/logo"

const footerNav = [
  { href: "/babies-wear", label: "Babies Wear" },
  { href: "/socks-tights", label: "Socks & Tights" },
  { href: "/certifications", label: "Certifications" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-5 py-14 lg:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr_1.2fr]">
          <div>
            <Logo className="[&_*]:text-background" />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-background/70">
              Complete babieswear manufacturing under one roof. GOTS Certified &amp; SEDEX Approved
              production for global buyers and private-label brands.
            </p>
            <div className="mt-6 flex gap-2">
              <span className="rounded-full border border-background/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-background/80">
                GOTS Certified
              </span>
              <span className="rounded-full border border-background/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-background/80">
                SEDEX Approved
              </span>
            </div>
          </div>

          <div>
            <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-background/60">Explore</h3>
            <ul className="mt-5 space-y-3">
              {footerNav.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-background/80 transition-colors hover:text-background">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-background/60">Get in touch</h3>
            <ul className="mt-5 space-y-4 text-sm text-background/80">
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brand-accent" />
                <a href="tel:+919788852554" className="hover:text-background">+91 97888 52554</a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-brand-accent" />
                <a href="mailto:deebak@peyoteknitwear.com" className="hover:text-background">
                  deebak@peyoteknitwear.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-accent" />
                <span>Tiruppur, Tamil Nadu, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-background/15 pt-6 text-xs text-background/60 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} Peyote Knitwear Private Limited. All rights reserved.</p>
          <p>Tiruppur, Tamil Nadu, India</p>
        </div>
      </div>
    </footer>
  )
}

import Image from "next/image"
import { MapPin, Plane, Users, Wrench } from "lucide-react"

const advantages = [
  { icon: Wrench, title: "Knitwear capital", body: "Located in Tiruppur, India's premier hub for knitted garment manufacturing and skilled labour." },
  { icon: Users, title: "Skilled workforce", body: "Generations of textile expertise and a deep, trained talent pool right at our doorstep." },
  { icon: Plane, title: "Export ready", body: "Close to major ports and logistics corridors for efficient, on-time global shipping." },
]

export function LocationAdvantage() {
  return (
    <section className="bg-background">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 lg:grid-cols-2 lg:px-8 lg:py-24">
        <div className="reveal relative overflow-hidden rounded-3xl border border-border shadow-xl">
          <Image
            src="/images/quality-control.png"
            alt="Quality control inspection at Peyote Knitwear"
            width={800}
            height={700}
            className="h-full w-full object-cover"
          />
        </div>

        <div>
          <p className="reveal flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-brand-accent">
            <MapPin className="h-4 w-4" /> Location advantage
          </p>
          <h2 className="reveal mt-4 font-heading text-3xl font-extrabold leading-tight tracking-tight text-foreground text-balance lg:text-4xl">
            Manufacturing from the heart of Tiruppur, India
          </h2>
          <p className="reveal mt-4 text-lg leading-relaxed text-muted-foreground">
            Our base in Tamil Nadu gives global buyers access to world-class infrastructure, a skilled
            workforce, and a mature textile ecosystem — all translating into reliable quality and value.
          </p>

          <div className="mt-8 space-y-5">
            {advantages.map((item) => (
              <div key={item.title} className="reveal flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-secondary text-brand">
                  <item.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-heading text-base font-bold text-foreground">{item.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

import type { LucideIcon } from "lucide-react"

export type SpecItem = {
  icon: LucideIcon
  title: string
  value: string
  note?: string
}

export function SpecCards({ title, subtitle, items }: { title: string; subtitle?: string; items: SpecItem[] }) {
  return (
    <div>
      <div className="reveal max-w-2xl">
        <h2 className="font-heading text-3xl font-extrabold leading-tight tracking-tight text-foreground text-balance lg:text-4xl">
          {title}
        </h2>
        {subtitle && <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{subtitle}</p>}
      </div>
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <div key={item.title} className="reveal rounded-2xl border border-border bg-card p-6">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-secondary text-brand">
              <item.icon className="h-5 w-5" />
            </div>
            <h3 className="mt-5 text-sm font-semibold uppercase tracking-wider text-muted-foreground">{item.title}</h3>
            <p className="mt-1 font-heading text-xl font-bold text-foreground">{item.value}</p>
            {item.note && <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.note}</p>}
          </div>
        ))}
      </div>
    </div>
  )
}

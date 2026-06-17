export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string
  title: string
  description: string
}) {
  return (
    <section className="border-b border-border bg-secondary/40">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
        <p className="reveal text-sm font-semibold uppercase tracking-[0.2em] text-brand-accent">{eyebrow}</p>
        <h1 className="reveal mt-4 max-w-3xl font-heading text-4xl font-extrabold leading-tight tracking-tight text-foreground text-balance lg:text-6xl">
          {title}
        </h1>
        <p className="reveal mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty">
          {description}
        </p>
      </div>
    </section>
  )
}

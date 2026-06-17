const stats = [
  { value: "100,000", label: "Pieces produced per month", suffix: "" },
  { value: "127", label: "Advanced machinery units", suffix: "+" },
  { value: "12", label: "Years of manufacturing expertise", suffix: "+" },
  { value: "100", label: "Quality inspected output", suffix: "%" },
]

export function StatsBand() {
  return (
    <section className="border-y border-border bg-foreground">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px overflow-hidden bg-background/10 px-0 lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="reveal bg-foreground px-6 py-10 text-center lg:px-8 lg:py-14">
            <p className="font-heading text-4xl font-extrabold tracking-tight text-background lg:text-5xl">
              {stat.value}
              <span className="text-brand-accent">{stat.suffix}</span>
            </p>
            <p className="mt-3 text-sm leading-relaxed text-background/70">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

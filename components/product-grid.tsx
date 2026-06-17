import Image from "next/image"

export type Product = {
  name: string
  image: string
  description: string
  tags: string[]
}

export function ProductGrid({ products }: { products: Product[] }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {products.map((product) => (
        <article
          key={product.name}
          className="reveal group overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-brand/10"
        >
          <div className="relative aspect-square overflow-hidden bg-secondary/40">
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="p-5">
            <h3 className="font-heading text-lg font-bold text-foreground">{product.name}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{product.description}</p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {product.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-secondary px-2.5 py-1 text-xs font-medium text-brand"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </article>
      ))}
    </div>
  )
}

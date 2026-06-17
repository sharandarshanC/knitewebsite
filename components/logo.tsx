export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`flex items-center gap-2.5 ${className}`}>
      <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand text-brand-foreground">
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
          <path
            d="M4 8c2.5 1.5 5 1.5 8 0s5.5-1.5 8 0M4 14c2.5 1.5 5 1.5 8 0s5.5-1.5 8 0M4 20c2.5 1.5 5 1.5 8 0s5.5-1.5 8 0"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-heading text-base font-extrabold tracking-tight text-foreground">PEYOTE</span>
        <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-brand-accent">Knitwear</span>
      </span>
    </span>
  )
}

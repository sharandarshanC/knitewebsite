"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

export function ScrollReveal() {
  const pathname = usePathname()

  useEffect(() => {
    // Use rAF to ensure the new page's DOM is fully painted before observing
    let observer: IntersectionObserver
    const rafId = requestAnimationFrame(() => {
      const els = document.querySelectorAll<Element>(".reveal:not(.in-view)")
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("in-view")
              observer.unobserve(entry.target)
            }
          })
        },
        { threshold: 0.12 },
      )
      els.forEach((el) => observer.observe(el))
    })

    return () => {
      cancelAnimationFrame(rafId)
      observer?.disconnect()
    }
  }, [pathname])

  return null
}

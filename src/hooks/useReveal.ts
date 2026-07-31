import { useEffect, useRef } from 'react'

/**
 * Adds `is-visible` to every `.reveal` inside the returned ref once it enters
 * the viewport, so the CSS transition in index.css can run. One observer per
 * container keeps this cheap even with dozens of cards on the page.
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>(threshold = 0.12) {
  const ref = useRef<T | null>(null)

  useEffect(() => {
    const root = ref.current
    if (!root) return

    const targets = root.classList.contains('reveal')
      ? [root, ...Array.from(root.querySelectorAll<HTMLElement>('.reveal'))]
      : Array.from(root.querySelectorAll<HTMLElement>('.reveal'))

    if (targets.length === 0) return

    if (
      typeof IntersectionObserver === 'undefined' ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      targets.forEach((el) => el.classList.add('is-visible'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold, rootMargin: '0px 0px -8% 0px' },
    )

    targets.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [threshold])

  return ref
}

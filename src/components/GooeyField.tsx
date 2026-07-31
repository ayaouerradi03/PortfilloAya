import { useEffect, useRef } from 'react'
import './GooeyField.css'

interface GooeyFieldProps {
  /** How quickly the pointer blob catches up (higher = lazier). */
  inertia?: number
  className?: string
}

/**
 * The animated gooey gradient field used as the site background.
 *
 * Five blobs drift on CSS keyframes; a sixth eases toward the pointer, driven
 * imperatively so React never re-renders while the cursor moves. The loop
 * parks itself once the blob has caught up and restarts on the next move.
 */
export function GooeyField({ inertia = 18, className }: GooeyFieldProps) {
  const pointerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const blob = pointerRef.current
    if (!blob) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    // No cursor to follow on touch devices — leave the blob parked.
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0
    if (isTouch) return

    let currentX = window.innerWidth / 2
    let currentY = window.innerHeight / 2
    let targetX = currentX
    let targetY = currentY
    let frame: number | null = null

    blob.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`

    const animate = () => {
      const dx = targetX - currentX
      const dy = targetY - currentY

      currentX += dx / inertia
      currentY += dy / inertia

      blob.style.transform = `translate3d(${Math.round(currentX)}px, ${Math.round(currentY)}px, 0)`

      // Settled: stop burning frames until the pointer moves again.
      if (Math.abs(dx) < 0.5 && Math.abs(dy) < 0.5) {
        frame = null
        return
      }

      frame = requestAnimationFrame(animate)
    }

    const ensureLoop = () => {
      if (frame === null && !document.hidden) frame = requestAnimationFrame(animate)
    }

    const onPointerMove = (event: PointerEvent) => {
      targetX = event.clientX
      targetY = event.clientY
      ensureLoop()
    }

    const onVisibility = () => {
      if (document.hidden && frame !== null) {
        cancelAnimationFrame(frame)
        frame = null
      } else {
        ensureLoop()
      }
    }

    window.addEventListener('pointermove', onPointerMove, { passive: true })
    document.addEventListener('visibilitychange', onVisibility)

    return () => {
      if (frame !== null) cancelAnimationFrame(frame)
      window.removeEventListener('pointermove', onPointerMove)
      document.removeEventListener('visibilitychange', onVisibility)
    }
  }, [inertia])

  return (
    <div aria-hidden="true" className={`gooey-field ${className ?? ''}`}>
      {/* The goo: blur hard, then crush the alpha ramp so overlapping blobs
          fuse into one surface instead of cross-fading. */}
      <svg className="gooey-defs" xmlns="http://www.w3.org/2000/svg" focusable="false">
        <defs>
          <filter id="gooey-merge">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>

      <div className="gooey-blobs">
        <div className="gooey-blob gooey-blob-1" />
        <div className="gooey-blob gooey-blob-2" />
        <div className="gooey-blob gooey-blob-3" />
        <div className="gooey-blob gooey-blob-4" />
        <div className="gooey-blob gooey-blob-5" />
        <div ref={pointerRef} className="gooey-blob gooey-blob-pointer" />
      </div>
    </div>
  )
}

export default GooeyField

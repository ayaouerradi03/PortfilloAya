import { useEffect, useRef } from 'react'

interface JourneyLineProps {
  /** Horizontal swing of the serpentine, as a fraction of the rail width. */
  swing?: number
  /** Viewport fraction (0–1) where the line is considered "being drawn". */
  drawAt?: number
  /** Positioning + width of the rail. Width is read back from the DOM. */
  className?: string
}

/** Builds a gentle serpentine running top-to-bottom through the rail. */
function buildPath(width: number, height: number, amplitude: number) {
  const cx = width / 2
  const segments = Math.max(2, Math.round(height / 460))
  const step = height / segments

  let d = `M ${cx} 0`
  for (let i = 0; i < segments; i += 1) {
    const y0 = i * step
    const y1 = y0 + step
    const dir = i % 2 === 0 ? 1 : -1
    const bend = cx + dir * amplitude
    d += ` C ${bend} ${y0 + step * 0.3}, ${bend} ${y1 - step * 0.3}, ${cx} ${y1}`
  }
  return d
}

/**
 * An SVG connector that draws itself forward as the visitor scrolls. Progress
 * is published as `--journey-progress` on the nearest `[data-journey-root]`,
 * so milestone dots can light up in pure CSS without re-rendering React.
 */
export function JourneyLine({ swing = 0.3, drawAt = 0.62, className }: JourneyLineProps) {
  const hostRef = useRef<HTMLDivElement | null>(null)
  const svgRef = useRef<SVGSVGElement | null>(null)
  const pathRef = useRef<SVGPathElement | null>(null)
  const glowRef = useRef<SVGPathElement | null>(null)
  const trackRef = useRef<SVGPathElement | null>(null)
  const headRef = useRef<SVGGElement | null>(null)

  useEffect(() => {
    const host = hostRef.current
    const svg = svgRef.current
    const path = pathRef.current
    const glow = glowRef.current
    const track = trackRef.current
    const head = headRef.current
    if (!host || !svg || !path || !glow || !track || !head) return

    const root = host.closest<HTMLElement>('[data-journey-root]') ?? host
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    let length = 0
    let height = 0
    let width = 0
    let frame: number | null = null

    /** Rebuild geometry whenever the rail changes size. */
    const layout = () => {
      const rect = host.getBoundingClientRect()

      // The rail is `display: none` below the md breakpoint on some layouts —
      // measuring then would flatten the path, so bail out and wait for the
      // ResizeObserver to report a real box again.
      if (rect.height < 2 || rect.width < 2) return

      height = rect.height
      width = rect.width

      svg.setAttribute('viewBox', `0 0 ${width} ${height}`)

      const d = buildPath(width, height, width * swing)
      path.setAttribute('d', d)
      glow.setAttribute('d', d)
      track.setAttribute('d', d)

      length = path.getTotalLength()
      path.style.strokeDasharray = `${length}`
      glow.style.strokeDasharray = `${length}`

      positionNodes()
      draw()
    }

    /**
     * Nudge each milestone dot onto the curve horizontally so the line always
     * looks like it threads through them, whatever the swing.
     */
    const positionNodes = () => {
      const nodes = root.querySelectorAll<HTMLElement>('[data-journey-node]')
      if (nodes.length === 0 || length === 0) return

      const hostTop = host.getBoundingClientRect().top
      const samples = 240
      const points: { x: number; y: number }[] = []
      for (let i = 0; i <= samples; i += 1) {
        points.push(path.getPointAtLength((length * i) / samples))
      }

      nodes.forEach((node) => {
        const nodeRect = node.getBoundingClientRect()
        if (nodeRect.height === 0) return

        const targetY = nodeRect.top + nodeRect.height / 2 - hostTop

        let best = points[0]
        let bestDelta = Infinity
        for (const p of points) {
          const delta = Math.abs(p.y - targetY)
          if (delta < bestDelta) {
            bestDelta = delta
            best = p
          }
        }

        node.style.setProperty('--node-x', `${(best.x - width / 2).toFixed(2)}px`)
        node.style.setProperty('--node-at', (targetY / height).toFixed(4))
      })
    }

    const draw = () => {
      frame = null
      if (length === 0) return

      const rect = host.getBoundingClientRect()
      const viewport = window.innerHeight || 1
      const anchor = viewport * drawAt

      const raw = (anchor - rect.top) / Math.max(1, rect.height)
      const progress = reduced ? 1 : Math.min(1, Math.max(0, raw))

      const offset = `${length * (1 - progress)}`
      path.style.strokeDashoffset = offset
      glow.style.strokeDashoffset = offset

      root.style.setProperty('--journey-progress', progress.toFixed(4))

      const point = path.getPointAtLength(length * progress)
      head.setAttribute('transform', `translate(${point.x} ${point.y})`)
      // The travelling head only shows while the line is actively drawing.
      head.style.opacity = progress > 0.001 && progress < 0.999 ? '1' : '0'
    }

    const onScroll = () => {
      if (frame === null) frame = requestAnimationFrame(draw)
    }

    layout()

    const resizeObserver = new ResizeObserver(() => layout())
    resizeObserver.observe(host)
    if (root !== host) resizeObserver.observe(root)

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })

    return () => {
      if (frame !== null) cancelAnimationFrame(frame)
      resizeObserver.disconnect()
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [swing, drawAt])

  return (
    <div
      ref={hostRef}
      aria-hidden="true"
      className={`pointer-events-none absolute inset-y-0 ${className ?? ''}`}
    >
      <svg
        ref={svgRef}
        className="h-full w-full overflow-visible"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="journey-stroke" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FF7FB6" />
            <stop offset="45%" stopColor="#FF4696" />
            <stop offset="100%" stopColor="#B19EEF" />
          </linearGradient>
          <filter id="journey-glow" x="-200%" y="-20%" width="500%" height="140%">
            <feGaussianBlur stdDeviation="5" />
          </filter>
        </defs>

        {/* The full route, faintly visible ahead of the visitor */}
        <path
          ref={trackRef}
          stroke="rgba(255,255,255,0.12)"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeDasharray="1 7"
        />

        {/* Soft halo under the drawn stroke */}
        <path
          ref={glowRef}
          stroke="url(#journey-stroke)"
          strokeWidth={7}
          strokeLinecap="round"
          filter="url(#journey-glow)"
          opacity={0.55}
        />

        {/* The drawn line itself */}
        <path ref={pathRef} stroke="url(#journey-stroke)" strokeWidth={2.5} strokeLinecap="round" />

        {/* Travelling head */}
        <g ref={headRef} style={{ transition: 'opacity 400ms ease' }} opacity={0}>
          <circle r={11} fill="#FF4696" opacity={0.18} />
          <circle r={5.5} fill="#FF4696" opacity={0.4} />
          <circle r={3} fill="#FFFFFF" />
        </g>
      </svg>
    </div>
  )
}

export default JourneyLine

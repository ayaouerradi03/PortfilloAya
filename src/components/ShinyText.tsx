import type { CSSProperties } from 'react'
import { useState } from 'react'

interface ShinyTextProps {
  text: string
  disabled?: boolean
  speed?: number
  className?: string
  color?: string
  shineColor?: string
  spread?: number
  pauseOnHover?: boolean
  direction?: 'left' | 'right'
  delay?: number
}

/**
 * A living, sweeping-gradient version of `text-gradient` (index.css). Built
 * on a CSS keyframe rather than a JS animation loop so it costs nothing at
 * runtime and needs no animation library — consistent with every other
 * ambient animation in this codebase (see `animate-float-slow` etc.).
 */
export function ShinyText({
  text,
  disabled = false,
  speed = 2,
  className = '',
  color = '#c4b5fd',
  shineColor = '#ffffff',
  spread = 110,
  pauseOnHover = false,
  direction = 'left',
  delay = 0,
}: ShinyTextProps) {
  const [hovered, setHovered] = useState(false)
  const paused = disabled || (pauseOnHover && hovered)

  const style: CSSProperties = {
    backgroundImage: `linear-gradient(${spread}deg, ${color} 0%, ${color} 35%, ${shineColor} 50%, ${color} 65%, ${color} 100%)`,
    backgroundSize: '220% auto',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    color: 'transparent',
    animationDuration: `${speed}s`,
    animationDirection: direction === 'right' ? 'reverse' : 'normal',
    animationDelay: `${delay}s`,
    animationPlayState: paused ? 'paused' : 'running',
  }

  return (
    <span
      className={`shiny-text inline-block ${className}`}
      style={style}
      onMouseEnter={pauseOnHover ? () => setHovered(true) : undefined}
      onMouseLeave={pauseOnHover ? () => setHovered(false) : undefined}
    >
      {text}
    </span>
  )
}

export default ShinyText

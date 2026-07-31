import type { ElementType, HTMLAttributes, ReactNode, Ref } from 'react'
import { GLASS_SURFACE, trackGlassPointer } from '@/lib/glass'

interface GlassCardProps extends HTMLAttributes<HTMLElement> {
  as?: 'div' | 'article' | 'li' | 'section'
  /** Lifts and brightens the surface on hover. */
  interactive?: boolean
}

export function GlassCard({
  as = 'div',
  interactive = true,
  className = '',
  children,
  ...rest
}: GlassCardProps) {
  const Tag = as as ElementType

  return (
    <Tag
      onPointerMove={trackGlassPointer}
      className={[
        GLASS_SURFACE,
        interactive
          ? 'hover:-translate-y-1 hover:border-white/35 hover:shadow-[0_30px_70px_-24px_rgba(255,70,150,0.45)]'
          : '',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      {...rest}
    >
      {children}
    </Tag>
  )
}

/* ------------------------------------------------------------------------- */

export function Container({
  children,
  className = '',
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div className={`mx-auto w-full max-w-6xl px-5 sm:px-8 lg:px-12 ${className}`}>{children}</div>
  )
}

interface SectionProps extends HTMLAttributes<HTMLElement> {
  id: string
  /** React 19 passes `ref` straight through as a prop. */
  ref?: Ref<HTMLElement>
  children: ReactNode
}

export function Section({ id, className = '', children, ...rest }: SectionProps) {
  return (
    <section id={id} className={`relative py-24 md:py-32 ${className}`} {...rest}>
      {children}
    </section>
  )
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'left',
}: {
  eyebrow: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
}) {
  const centered = align === 'center'
  return (
    <header
      className={`reveal max-w-3xl ${centered ? 'mx-auto text-center' : ''}`}
    >
      <div
        className={`flex items-center gap-3 ${centered ? 'justify-center' : ''}`}
      >
        <span className="h-px w-8 bg-gradient-to-r from-transparent to-dragonfruit" />
        <span className="eyebrow">{eyebrow}</span>
        <span className="h-px w-8 bg-gradient-to-l from-transparent to-dragonfruit" />
      </div>

      <h2 className="mt-5 font-display text-[clamp(2rem,4.4vw,3.2rem)] leading-[1.08] font-semibold tracking-tight text-white text-balance">
        {title}
      </h2>

      {/* Sits directly on the gooey field rather than on a glass panel, so it
          needs more weight than the same copy would inside a card. */}
      {subtitle ? (
        <p className="mt-5 text-[1.05rem] leading-relaxed text-white/78 text-pretty">{subtitle}</p>
      ) : null}
    </header>
  )
}

/* ------------------------------------------------------------------------- */

export function Chip({
  children,
  tone = 'neutral',
  className = '',
}: {
  children: ReactNode
  tone?: 'neutral' | 'accent'
  className?: string
}) {
  const tones = {
    neutral:
      'border-white/14 bg-white/6 text-white/72 hover:border-white/30 hover:bg-white/12 hover:text-white',
    accent:
      'border-dragonfruit/40 bg-dragonfruit/12 text-dragonfruit-soft hover:border-dragonfruit/70 hover:bg-dragonfruit/20',
  } as const

  return (
    // No backdrop-filter here on purpose: the parent glass surface already
    // blurs the backdrop, and nesting the two is expensive and paints badly.
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1.5 text-[0.78rem] font-medium tracking-tight transition-colors duration-300 ${tones[tone]} ${className}`}
    >
      {children}
    </span>
  )
}

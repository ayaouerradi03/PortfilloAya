import { Fragment, type CSSProperties, type ElementType, type HTMLAttributes, type ReactNode, type Ref } from 'react'
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
          ? 'hover:-translate-y-3 hover:border-violet/40 hover:shadow-[0_0_20px_-10px_rgba(139,92,246,0.4)]'
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
    <div className={`mx-auto w-full max-w-7xl px-6 sm:px-10 lg:px-16 ${className}`}>{children}</div>
  )
}

interface SectionProps extends HTMLAttributes<HTMLElement> {
  id: string
  /** React 19 passes `ref` straight through as a prop. */
  ref?: Ref<HTMLElement>
  children: ReactNode
}

/**
 * Vertical rhythm lives here, so it stays consistent across every section.
 *
 * Padding is deliberately modest: it lands on *both* sides of the boundary
 * between two sections, so the visible gap is double whatever is set here.
 * At the old py-32 that was 256px of dead space between every section — a
 * quarter of a 1080p viewport, seven times over.
 */
export function Section({ id, className = '', children, ...rest }: SectionProps) {
  return (
    <section id={id} className={`relative py-16 md:py-20 ${className}`} {...rest}>
      {children}
    </section>
  )
}

/**
 * Splits `text` into words (so a line only ever breaks between them) of
 * individually-staggered letter spans, keyed off the ancestor
 * `.reveal.is-visible` toggle via the `.char-fade-in` class in index.css.
 *
 * The stagger is capped rather than scaling with the string length: on a
 * long, multi-line title (e.g. the About heading, 60+ characters) an
 * uncapped 0.02s-per-char stagger pushes the last letters' start past the
 * 1s mark, so a normal scroll speed carries the heading to the centre of
 * the viewport while it's still visibly half-blurred. Capping the index
 * keeps the whole reveal inside ~0.6s regardless of title length.
 */
const MAX_STAGGERED_CHARS = 18
const CHAR_STAGGER_SECONDS = 0.018

function AnimatedTitle({ text }: { text: string }) {
  const words = text.split(' ')
  let index = 0

  return (
    <>
      {words.map((word, wordIndex) => (
        <Fragment key={word + wordIndex}>
          <span className="inline-block">
            {word.split('').map((char) => {
              const delay = Math.min(index, MAX_STAGGERED_CHARS) * CHAR_STAGGER_SECONDS
              index += 1
              return (
                <span
                  key={index}
                  className="char-fade-in"
                  style={{ '--char-delay': `${delay}s` } as CSSProperties}
                >
                  {char}
                </span>
              )
            })}
          </span>
          {wordIndex < words.length - 1 ? ' ' : ''}
        </Fragment>
      ))}
    </>
  )
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  index,
}: {
  eyebrow: string
  title: string
  subtitle?: string
  /** 1-based position in the page. Rendered as an editorial "01 —" marker. */
  index?: number
}) {
  return (
    <header className="reveal max-w-3xl">
      <div className="flex items-center gap-3">
        {index !== undefined ? (
          <span className="font-mono text-[0.72rem] font-semibold text-violet">
            {String(index).padStart(2, '0')}
          </span>
        ) : null}
        <span className="h-px w-6 bg-gradient-to-r from-violet/70 to-violet/20" />
        <span className="eyebrow">{eyebrow}</span>
      </div>

      <h2 className="mt-5 font-display text-[clamp(2rem,4.4vw,3.2rem)] leading-[1.08] font-semibold tracking-tight text-white text-balance">
        <AnimatedTitle text={title} />
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
      'border-violet/40 bg-violet/12 text-violet-soft hover:border-violet/70 hover:bg-violet/20',
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

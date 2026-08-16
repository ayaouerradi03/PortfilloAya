import { Fragment, type CSSProperties } from 'react'
import { useContent } from '@/i18n/LanguageContext'
import { useReveal } from '@/hooks/useReveal'
import { trackGlassPointer } from '@/lib/glass'
import { Icon } from './Icons'
import { ShinyText } from './ShinyText'
import { Container } from './ui'

/**
 * Fluid oversized heading effect for the hero name: whole words fade + rise
 * into place, staggered, keyed off the ancestor `.reveal.is-visible` toggle
 * (see `.word-fade-in` in index.css). The heading's `clamp()` sizing is left
 * to the caller so it keeps scaling with the viewport as before.
 */
function WordFadeIn({ text }: { text: string }) {
  const words = text.split(' ')
  return (
    <>
      {words.map((word, index) => (
        <Fragment key={word + index}>
          <span
            className="word-fade-in"
            style={{ '--word-delay': `${index * 90}ms` } as CSSProperties}
          >
            {word}
          </span>
          {index < words.length - 1 ? ' ' : ''}
        </Fragment>
      ))}
    </>
  )
}

/**
 * Single-column hero.
 *
 * The identity card that used to sit on the right was dropped: every field on
 * it already had a permanent home further down (certifications in Education,
 * languages in Skills, location and LinkedIn in Contact, focus areas in the
 * kicker below). Removing it cut the duplication and let the name run at full
 * width, which is what gives the section its weight.
 */
export function Hero() {
  const { hero, heroCard, contact } = useContent()
  const ref = useReveal<HTMLElement>(0.05)
  const { taglineLead, taglineAccent } = hero

  return (
    <section
      id="top"
      ref={ref}
      /* Padding rather than flex centring: the hero is taller than the
         viewport on short screens, and centring would clip its top. */
      className="relative flex min-h-screen flex-col justify-center pt-32 pb-24 md:pt-40 md:pb-28"
    >
      <Container>
        <div className="max-w-4xl">
          <div className="reveal inline-flex items-center gap-2.5 rounded-full border border-emerald/25 bg-emerald/8 py-1.5 pr-4 pl-2.5">
            <span
              className="animate-pulse-ring grid h-1.5 w-1.5 place-items-center rounded-full bg-emerald"
              style={{ '--pulse-color': 'var(--color-emerald)' } as CSSProperties}
            />
            <span className="text-[0.75rem] font-medium tracking-tight text-emerald">
              {hero.availability}
            </span>
          </div>

          {/* Technical slug line — role plus the competency keywords, set in
              mono so it reads as metadata rather than prose. */}
          <p
            className="reveal mt-9 font-mono text-[0.72rem] leading-[1.9] tracking-[0.16em] text-violet-soft uppercase"
            style={{ '--reveal-delay': '80ms' } as CSSProperties}
          >
            {hero.role}
            <span className="text-white/20"> / </span>
            <span className="text-white/35">{heroCard.focusAreas.join(' · ')}</span>
          </p>

          <h1
            className="reveal mt-4 font-display text-[clamp(3.2rem,10vw,7rem)] leading-[0.92] font-semibold tracking-[-0.045em] text-white"
            style={{ '--reveal-delay': '140ms' } as CSSProperties}
          >
            <WordFadeIn text={hero.name} />
          </h1>

          {/* Two-tone statement: the first clause stays white, the payoff
              takes the accent, so the sentence has a visible emphasis. */}
          <p
            className="reveal mt-8 max-w-2xl font-display text-[clamp(1.35rem,2.8vw,2rem)] leading-[1.3] font-medium tracking-[-0.02em] text-pretty"
            style={{ '--reveal-delay': '220ms' } as CSSProperties}
          >
            <span className="text-white">{taglineLead} </span>
            <ShinyText text={taglineAccent} speed={4} />
          </p>

          <p
            className="reveal mt-7 max-w-xl text-[0.98rem] leading-[1.7] text-white/45 text-pretty"
            style={{ '--reveal-delay': '300ms' } as CSSProperties}
          >
            {hero.intro}
          </p>

          <div
            className="reveal mt-10 flex flex-wrap items-center gap-3"
            style={{ '--reveal-delay': '380ms' } as CSSProperties}
          >
            {/* White fill rather than a coloured gradient: on a dark page a
                plain white pill reads as the most confident possible primary,
                and it keeps the violet reserved for accents. */}
            <a
              href={`mailto:${contact.email}`}
              className="inline-flex items-center gap-2.5 rounded-full bg-white px-6 py-3 text-[0.92rem] font-semibold text-night-deep transition-colors duration-300 hover:bg-white/90"
            >
              <Icon name="mail" size={16} />
              {hero.secondaryCta}
            </a>

            <a
              href="#experience"
              onPointerMove={trackGlassPointer}
              className="group inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/6 px-6 py-3 text-[0.92rem] font-medium text-white/85 transition-colors duration-300 hover:border-white/30 hover:bg-white/10 hover:text-white"
            >
              {hero.primaryCta}
              <Icon
                name="arrowRight"
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
          </div>
        </div>

        {/* --------------------------------------------------------- stats */}
        <div
          className="reveal mt-20 grid grid-cols-2 gap-y-8 border-t border-white/8 pt-10 lg:grid-cols-4 lg:gap-0"
          style={{ '--reveal-delay': '120ms' } as CSSProperties}
        >
          {hero.stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`lg:px-8 lg:first:pl-0 ${index > 0 ? 'lg:border-l lg:border-white/8' : ''}`}
            >
              <p className="font-display text-[clamp(1.8rem,3.4vw,2.4rem)] leading-none font-semibold tracking-[-0.03em] text-white">
                {stat.value}
              </p>
              <p className="mt-2.5 text-[0.82rem] leading-snug text-white/40">{stat.label}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Hero

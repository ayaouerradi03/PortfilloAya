import type { CSSProperties } from 'react'
import { useContent } from '@/i18n/LanguageContext'
import { useReveal } from '@/hooks/useReveal'
import { Container, Section, SectionHeading } from './ui'

export function About() {
  const { about } = useContent()
  const ref = useReveal<HTMLElement>()

  const [lead, ...rest] = about.body

  return (
    <Section id="about" ref={ref}>
      <Container>
        <SectionHeading index={1} eyebrow={about.eyebrow} title={about.title} />

        {/* Narrative — the lead runs larger than the body that follows it, so
            the section opens with a statement rather than a wall of even text. */}
        <div className="mt-12 grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <p
            className="reveal text-[1.22rem] leading-[1.6] font-medium text-white/90 text-pretty"
            style={{ '--reveal-delay': '60ms' } as CSSProperties}
          >
            {lead}
          </p>

          <div className="space-y-4">
            {rest.map((paragraph, index) => (
              <p
                key={paragraph.slice(0, 24)}
                className="reveal text-[0.98rem] leading-[1.75] text-white/62 text-pretty"
                style={{ '--reveal-delay': `${140 + index * 90}ms` } as CSSProperties}
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* Highlights — a plain list, not cards. "Pourquoi moi ?" further down
            owns the card treatment for qualities; repeating it here made the
            two sections read as the same block twice. */}
        <div
          className="reveal mt-16 flex items-center gap-4"
          style={{ '--reveal-delay': '80ms' } as CSSProperties}
        >
          <span className="eyebrow whitespace-nowrap">{about.highlightsTitle}</span>
          <span className="h-px flex-1 bg-gradient-to-r from-violet/45 via-white/12 to-transparent" />
        </div>

        <div className="mt-8 grid gap-x-12 gap-y-9 sm:grid-cols-2">
          {about.highlights.map((highlight, index) => (
            <div
              key={highlight.title}
              className="reveal border-t border-white/8 pt-5"
              style={{ '--reveal-delay': `${index * 80}ms` } as CSSProperties}
            >
              <h3 className="font-display text-[1.05rem] font-semibold tracking-tight text-white">
                {highlight.title}
              </h3>
              <p className="mt-2 text-[0.92rem] leading-relaxed text-white/58 text-pretty">
                {highlight.detail}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  )
}

export default About

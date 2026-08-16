import type { CSSProperties } from 'react'
import { useContent } from '@/i18n/LanguageContext'
import { useReveal } from '@/hooks/useReveal'
import { Container, GlassCard, Section, SectionHeading } from './ui'

/**
 * The one place on the page where soft skills get card treatment — About's
 * "what I bring" list is deliberately plain so these don't compete. Numerals
 * stand in for the icon tiles used elsewhere, both to echo the section
 * numbering and to keep this grid visually distinct from the certification
 * and interest cards.
 */
export function WhyMe() {
  const { whyMe } = useContent()
  const ref = useReveal<HTMLElement>()

  return (
    <Section id="why-me" ref={ref}>
      <Container>
        <SectionHeading
          index={5}
          eyebrow={whyMe.eyebrow}
          title={whyMe.title}
          subtitle={whyMe.subtitle}
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {whyMe.items.map((item, index) => (
            <GlassCard
              key={item.id}
              className="reveal group relative flex flex-col overflow-hidden p-7"
              style={{ '--reveal-delay': `${index * 90}ms` } as CSSProperties}
            >
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -top-1 right-4 font-display text-[3.5rem] leading-none font-bold text-white/[0.05] transition-colors duration-500 group-hover:text-violet/15"
              >
                {String(index + 1).padStart(2, '0')}
              </span>

              <span className="relative h-px w-8 bg-gradient-to-r from-violet to-violet/20 transition-all duration-500 group-hover:w-12" />

              <h3 className="relative mt-5 font-display text-[1.05rem] font-semibold tracking-tight text-white text-balance">
                {item.title}
              </h3>
              <p className="relative mt-2.5 flex-1 text-[0.92rem] leading-relaxed text-white/58 text-pretty">
                {item.detail}
              </p>
            </GlassCard>
          ))}
        </div>
      </Container>
    </Section>
  )
}

export default WhyMe

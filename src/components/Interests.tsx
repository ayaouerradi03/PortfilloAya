import type { CSSProperties } from 'react'
import { useContent } from '@/i18n/LanguageContext'
import { useReveal } from '@/hooks/useReveal'
import { Icon } from './Icons'
import { Container, Section, SectionHeading } from './ui'

/**
 * Closing, human beat before Contact — kept deliberately light. These are the
 * least load-bearing items on the page, so they get plain rows rather than the
 * card treatment the professional sections use. Icons stay cyan to mark the
 * shift in register without leaving the palette.
 */
export function Interests() {
  const { interests } = useContent()
  const ref = useReveal<HTMLElement>()

  return (
    <Section id="interests" ref={ref}>
      <Container>
        <SectionHeading
          index={6}
          eyebrow={interests.eyebrow}
          title={interests.title}
          subtitle={interests.subtitle}
        />

        <div className="mt-12 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
          {interests.items.map((item, index) => (
            <div
              key={item.id}
              className="reveal group border-t border-white/8 pt-5"
              style={{ '--reveal-delay': `${index * 80}ms` } as CSSProperties}
            >
              {item.icon ? (
                <span className="inline-block text-cyan transition-transform duration-500 group-hover:scale-110">
                  <Icon name={item.icon} size={20} />
                </span>
              ) : null}

              <h3 className="mt-4 font-display text-[1rem] font-semibold tracking-tight text-white">
                {item.title}
              </h3>
              <p className="mt-2 text-[0.88rem] leading-relaxed text-white/55 text-pretty">
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  )
}

export default Interests

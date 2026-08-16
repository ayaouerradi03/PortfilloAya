import type { CSSProperties } from 'react'
import { useContent } from '@/i18n/LanguageContext'
import { useReveal } from '@/hooks/useReveal'
import { Chip, Container, Section, SectionHeading } from './ui'

/**
 * Deliberately *not* a grid of glass cards.
 *
 * By this point in the page the visitor has already scrolled past several
 * card grids (experience, education, certifications). Rendering the toolbox
 * as a plain two-column list with hairline rules gives the section its own
 * shape and stops the page reading as the same card repeated end to end.
 */
export function Skills() {
  const { skills, languages } = useContent()
  const ref = useReveal<HTMLElement>()

  return (
    <Section id="skills" ref={ref}>
      <Container>
        <SectionHeading
          index={4}
          eyebrow={skills.eyebrow}
          title={skills.title}
          subtitle={skills.subtitle}
        />

        {/* ---------------------------------------------------- skill groups */}
        <div className="mt-14">
          {skills.groups.map((group, index) => (
            <div
              key={group.id}
              className="reveal grid gap-4 border-t border-white/8 py-7 md:grid-cols-[15rem_1fr] md:gap-10"
              style={{ '--reveal-delay': `${index * 80}ms` } as CSSProperties}
            >
              <h3 className="font-display text-[1.02rem] font-semibold tracking-tight text-white text-balance">
                {group.label}
              </h3>

              {/* content-start matters: this div is a grid item, so it stretches
                  to the row height set by a two-line label. Without it the
                  wrapping flex lines stretch to absorb that extra space and the
                  chips render taller than the ones in the rows above. */}
              <div className="flex flex-wrap content-start gap-2">
                {group.items.map((item) => (
                  <Chip key={item}>{item}</Chip>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* -------------------------------------------------------- languages */}
        <div className="mt-16">
          <div className="reveal flex items-center gap-4">
            <span className="eyebrow whitespace-nowrap">{languages.eyebrow}</span>
            <span className="h-px flex-1 bg-gradient-to-r from-violet/45 via-white/12 to-transparent" />
          </div>

          <p className="reveal mt-4 max-w-2xl text-[0.95rem] leading-relaxed text-white/62">
            {languages.subtitle}
          </p>

          <div className="reveal mt-7 flex flex-col gap-6 sm:flex-row sm:gap-0">
            {languages.items.map((language, index) => (
              <div
                key={language.id}
                className={`flex-1 sm:px-8 sm:first:pl-0 sm:last:pr-0 ${
                  index > 0 ? 'sm:border-l sm:border-white/10' : ''
                }`}
              >
                <div className="flex items-baseline gap-2.5">
                  <span className="font-display text-[1.05rem] font-semibold tracking-tight text-white">
                    {language.name}
                  </span>
                  <span className="font-mono text-sm font-semibold text-violet-soft">
                    {language.level}
                  </span>
                </div>
                <p className="mt-1 text-[0.84rem] text-white/48">{language.note}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  )
}

export default Skills

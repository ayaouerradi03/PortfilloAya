import { useContent } from '@/i18n/LanguageContext'
import { useReveal } from '@/hooks/useReveal'
import { Icon } from './Icons'
import { Container, GlassCard, Section, SectionHeading } from './ui'
import type { UiIconName } from './Icons'

const HIGHLIGHT_ICONS: UiIconName[] = ['target', 'flow', 'model', 'compass']

export function About() {
  const { about } = useContent()
  const ref = useReveal<HTMLElement>()

  return (
    <Section id="about" ref={ref}>
      <Container>
        <SectionHeading eyebrow={about.eyebrow} title={about.title} />

        <div className="mt-14 grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
          {/* Narrative */}
          <div className="space-y-5">
            {about.body.map((paragraph, index) => (
              <p
                key={paragraph.slice(0, 24)}
                className="reveal text-[1.02rem] leading-[1.75] text-white/82 text-pretty"
                style={{ '--reveal-delay': `${index * 110}ms` } as React.CSSProperties}
              >
                {paragraph}
              </p>
            ))}

            <div
              className="reveal flex items-center gap-3 pt-3"
              style={{ '--reveal-delay': '330ms' } as React.CSSProperties}
            >
              <span className="h-px flex-1 bg-gradient-to-r from-dragonfruit/60 to-transparent" />
              <span className="font-display text-sm tracking-tight text-white/62">
                {about.highlightsTitle}
              </span>
            </div>
          </div>

          {/* Highlights */}
          <div className="grid gap-4 sm:grid-cols-2">
            {about.highlights.map((highlight, index) => (
              <GlassCard
                key={highlight.title}
                className="reveal group flex flex-col p-6"
                style={{ '--reveal-delay': `${index * 100}ms` } as React.CSSProperties}
              >
                <span className="grid h-11 w-11 place-items-center rounded-xl border border-white/12 bg-white/6 text-dragonfruit-soft transition-colors duration-500 group-hover:border-dragonfruit/40 group-hover:bg-dragonfruit/14 group-hover:text-white">
                  <Icon name={HIGHLIGHT_ICONS[index % HIGHLIGHT_ICONS.length]} size={19} />
                </span>

                <h3 className="mt-5 font-display text-[1.05rem] font-semibold tracking-tight text-white">
                  {highlight.title}
                </h3>
                <p className="mt-2.5 text-[0.92rem] leading-relaxed text-white/58">
                  {highlight.detail}
                </p>
              </GlassCard>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  )
}

export default About

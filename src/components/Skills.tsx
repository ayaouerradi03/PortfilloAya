import type { CSSProperties } from 'react'
import { useContent } from '@/i18n/LanguageContext'
import { useReveal } from '@/hooks/useReveal'
import { Icon } from './Icons'
import type { UiIconName } from './Icons'
import { Chip, Container, GlassCard, Section, SectionHeading } from './ui'

const GROUP_ICONS: Record<string, UiIconName> = {
  po: 'target',
  agile: 'board',
  data: 'chart',
  design: 'spark',
}

export function Skills() {
  const { skills, languages } = useContent()
  const ref = useReveal<HTMLElement>()

  return (
    <Section id="skills" ref={ref}>
      <Container>
        <SectionHeading eyebrow={skills.eyebrow} title={skills.title} subtitle={skills.subtitle} />

        {/* ---------------------------------------------------- skill groups */}
        <div className="mt-14 grid gap-4 md:grid-cols-2">
          {skills.groups.map((group, index) => (
            <GlassCard
              key={group.id}
              className="reveal group p-7"
              style={{ '--reveal-delay': `${index * 90}ms` } as CSSProperties}
            >
              <div className="flex items-center gap-3.5">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-white/12 bg-white/6 text-dragonfruit-soft transition-colors duration-500 group-hover:border-dragonfruit/40 group-hover:bg-dragonfruit/14 group-hover:text-white">
                  <Icon name={GROUP_ICONS[group.id] ?? 'spark'} size={19} />
                </span>
                <h3 className="font-display text-[1.05rem] font-semibold tracking-tight text-white text-balance">
                  {group.label}
                </h3>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <Chip key={item}>{item}</Chip>
                ))}
              </div>
            </GlassCard>
          ))}
        </div>

        {/* -------------------------------------------------------- languages */}
        <div className="mt-20">
          <div className="reveal flex items-center gap-4">
            <span className="eyebrow whitespace-nowrap">{languages.eyebrow}</span>
            <span className="h-px flex-1 bg-gradient-to-r from-dragonfruit/45 via-white/12 to-transparent" />
          </div>

          <p className="reveal mt-4 max-w-2xl text-[0.98rem] leading-relaxed text-white/75">
            {languages.subtitle}
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {languages.items.map((language, index) => (
              <GlassCard
                key={language.id}
                className="reveal p-6"
                style={{ '--reveal-delay': `${index * 100}ms` } as CSSProperties}
              >
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="flex items-center gap-2.5 font-display text-[1.05rem] font-semibold tracking-tight text-white">
                    <Icon name="translate" size={17} className="text-dragonfruit-soft" />
                    {language.name}
                  </h3>
                  <span className="font-mono text-sm font-semibold text-dragonfruit-soft">
                    {language.level}
                  </span>
                </div>

                {/* Level meter */}
                <div
                  className="mt-5 h-1.5 w-full overflow-hidden rounded-full bg-white/8"
                  role="presentation"
                >
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-dragonfruit-soft via-dragonfruit to-orchid transition-[width] duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)]"
                    style={{ width: `${language.score}%` }}
                  />
                </div>

                <p className="mt-3 text-[0.84rem] text-white/48">{language.note}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  )
}

export default Skills

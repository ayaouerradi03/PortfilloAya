import type { CSSProperties } from 'react'
import type { ExperienceData } from '@/content/types'
import { useContent } from '@/i18n/LanguageContext'
import { useReveal } from '@/hooks/useReveal'
import { Icon } from './Icons'
import { TaskCard } from './TaskCard'
import { Chip, Container, Section, SectionHeading } from './ui'

interface ExperienceBlockProps {
  experience: ExperienceData
  isCurrent: boolean
  presentLabel: string
  missionsLabel: (n: number) => string
  toolsLabel: string
}

/**
 * One role, laid out as an editorial record rather than a stack of glass
 * panels: a period rail on the left, the company and its context on the
 * right. The nested-card version buried the actual content under three
 * levels of border and blur; hairline rules carry the same structure at a
 * fraction of the visual noise.
 */
function ExperienceBlock({
  experience,
  isCurrent,
  presentLabel,
  missionsLabel,
  toolsLabel,
}: ExperienceBlockProps) {
  return (
    <article className="reveal grid gap-8 border-t border-white/10 pt-10 lg:grid-cols-[13rem_1fr] lg:gap-12">
      {/* Period rail */}
      <div className="lg:sticky lg:top-28 lg:self-start">
        <p className="font-mono text-[0.78rem] tracking-[0.1em] text-white/45">
          {experience.period}
        </p>

        {isCurrent ? (
          <span className="mt-3 inline-flex items-center gap-2 text-[0.75rem] font-medium tracking-tight text-emerald">
            <span
              className="animate-pulse-ring h-1.5 w-1.5 rounded-full bg-emerald"
              style={{ '--pulse-color': 'var(--color-emerald)' } as CSSProperties}
            />
            {presentLabel}
          </span>
        ) : null}

        <p className="mt-4 flex items-center gap-1.5 text-[0.82rem] text-white/35">
          <Icon name="pin" size={13} />
          {experience.location}
        </p>
      </div>

      {/* Body */}
      <div className="min-w-0">
        <h3 className="font-display text-[clamp(1.6rem,3.6vw,2.4rem)] leading-[1.05] font-semibold tracking-[-0.03em] text-white">
          {experience.company}
        </h3>

        <p className="mt-2 text-[1rem] font-medium text-violet-soft">
          {experience.role}
          <span className="text-white/25"> · </span>
          <span className="text-white/45">{experience.contract}</span>
        </p>

        {experience.context ? (
          <div className="mt-6 space-y-3.5">
            {experience.context.body.map((paragraph) => (
              <p
                key={paragraph.slice(0, 24)}
                className="max-w-2xl text-[0.96rem] leading-[1.75] text-white/60 text-pretty"
              >
                {paragraph}
              </p>
            ))}
          </div>
        ) : (
          <p className="mt-6 max-w-2xl text-[0.96rem] leading-[1.75] text-white/60 text-pretty">
            {experience.summary}
          </p>
        )}

        {/* Tools */}
        {experience.context ? (
          <div className="mt-9">
            <p className="font-mono text-[0.68rem] tracking-[0.18em] text-white/30 uppercase">
              {toolsLabel}
            </p>
            <div className="mt-5 grid gap-x-10 gap-y-5 sm:grid-cols-2">
              {experience.context.toolGroups.map((group) => (
                <div key={group.label}>
                  <p className="text-[0.78rem] font-medium text-white/45">{group.label}</p>
                  <div className="mt-2.5 flex flex-wrap gap-1.5">
                    {group.items.map((item) => (
                      <Chip key={item}>{item}</Chip>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : null}

        {/* Missions */}
        <p className="mt-10 font-mono text-[0.68rem] tracking-[0.18em] text-white/30 uppercase">
          {missionsLabel(experience.tasks.length)}
        </p>

        <ul className="mt-4 flex list-none flex-col p-0">
          {experience.tasks.map((task, index) => (
            <TaskCard key={task.id} task={task} index={index} />
          ))}
        </ul>
      </div>
    </article>
  )
}

export function Experience() {
  const content = useContent()
  const { experience, experiences } = content
  const ref = useReveal<HTMLElement>(0.05)

  return (
    <Section id="experience" ref={ref}>
      <Container>
        <SectionHeading
          index={2}
          eyebrow={experience.eyebrow}
          title={experience.title}
          subtitle={experience.subtitle}
        />

        <div className="mt-16 space-y-16 md:space-y-20">
          {experiences.map((item, index) => (
            <ExperienceBlock
              key={item.id}
              experience={item}
              isCurrent={index === 0}
              presentLabel={experience.presentLabel}
              missionsLabel={experience.missionsLabel}
              toolsLabel={experience.toolsLabel}
            />
          ))}
        </div>
      </Container>
    </Section>
  )
}

export default Experience

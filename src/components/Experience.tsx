import type { CSSProperties } from 'react'
import type { ExperienceData } from '@/content/types'
import { useContent } from '@/i18n/LanguageContext'
import { useReveal } from '@/hooks/useReveal'
import { Icon } from './Icons'
import { JourneyLine } from './JourneyLine'
import { TaskCard } from './TaskCard'
import { Container, GlassCard, Section, SectionHeading } from './ui'

interface ExperienceBlockProps {
  experience: ExperienceData
  isCurrent: boolean
  presentLabel: string
  missionsLabel: (n: number) => string
}

function ExperienceBlock({
  experience,
  isCurrent,
  presentLabel,
  missionsLabel,
}: ExperienceBlockProps) {
  const initials = experience.company
    .split(/\s+/)
    .slice(0, 2)
    .map((word) => word[0])
    .join('')

  return (
    <article className="md:grid md:grid-cols-[3.5rem_1fr] md:gap-x-10">
      {/* Milestone dot sitting on the journey line */}
      <div className="hidden md:flex md:justify-center md:pt-8">
        <span className="journey-node" data-journey-node />
      </div>

      <div>
        {/* ------------------------------------------------ experience header */}
        <GlassCard className="reveal overflow-hidden p-6 sm:p-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
            <div className="flex items-start gap-4 sm:gap-5">
              <span className="relative grid h-14 w-14 shrink-0 place-items-center rounded-2xl border border-white/16 bg-gradient-to-br from-white/14 to-white/4 font-display text-lg font-bold tracking-tight text-white sm:h-16 sm:w-16 sm:text-xl">
                {initials}
              </span>

              <div className="min-w-0">
                <h3 className="font-display text-[clamp(1.5rem,3.4vw,2.15rem)] leading-tight font-semibold tracking-tight text-white">
                  {experience.company}
                </h3>

                <p className="mt-1.5 text-[1.02rem] font-medium text-dragonfruit-soft">
                  {experience.role}
                  <span className="text-white/35"> · </span>
                  <span className="text-white/55">{experience.contract}</span>
                </p>

                <p className="mt-2.5 flex items-center gap-1.5 text-[0.88rem] text-white/45">
                  <Icon name="pin" size={15} />
                  {experience.location}
                </p>
              </div>
            </div>

            <div className="flex shrink-0 flex-wrap items-center gap-2 sm:flex-col sm:items-end">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/14 bg-white/6 px-4 py-2 font-mono text-[0.8rem] tracking-tight text-white/80">
                {experience.period}
              </span>

              {isCurrent ? (
                <span className="inline-flex items-center gap-2 rounded-full border border-dragonfruit/35 bg-dragonfruit/12 px-3.5 py-1.5 text-[0.75rem] font-semibold tracking-tight text-dragonfruit-soft">
                  <span className="animate-pulse-ring h-1.5 w-1.5 rounded-full bg-dragonfruit" />
                  {presentLabel}
                </span>
              ) : null}
            </div>
          </div>

          <p className="mt-6 max-w-2xl text-[0.96rem] leading-relaxed text-white/62 text-pretty">
            {experience.summary}
          </p>
        </GlassCard>

        {/* --------------------------------------------------- missions label */}
        <div
          className="reveal mt-10 mb-5 flex items-center gap-4"
          style={{ '--reveal-delay': '100ms' } as CSSProperties}
        >
          <span className="eyebrow whitespace-nowrap">
            {missionsLabel(experience.tasks.length)}
          </span>
          <span className="h-px flex-1 bg-gradient-to-r from-dragonfruit/45 via-white/12 to-transparent" />
        </div>

        {/* ------------------------------------------------------- task cards */}
        <ul className="grid list-none gap-4 p-0 lg:grid-cols-2">
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
          eyebrow={experience.eyebrow}
          title={experience.title}
          subtitle={experience.subtitle}
        />

        {/* The journey line lives in this rail and draws itself as you scroll.
            On phones it slips into the page gutter so it costs no text width;
            from md up it takes the dedicated column the milestones sit in. */}
        <div className="relative mt-16" data-journey-root>
          <JourneyLine className="-left-5 w-5 sm:-left-6 sm:w-6 md:left-0 md:w-14" />

          <div className="space-y-20 md:space-y-28">
            {experiences.map((item, index) => (
              <ExperienceBlock
                key={item.id}
                experience={item}
                isCurrent={index === 0}
                presentLabel={experience.presentLabel}
                missionsLabel={experience.missionsLabel}
              />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  )
}

export default Experience

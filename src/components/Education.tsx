import type { CSSProperties } from 'react'
import { useContent } from '@/i18n/LanguageContext'
import { useReveal } from '@/hooks/useReveal'
import { GLASS_SURFACE, trackGlassPointer } from '@/lib/glass'
import { Icon } from './Icons'
import { Container, GlassCard, Section, SectionHeading } from './ui'

export function Education() {
  const { education, certifications } = useContent()
  const ref = useReveal<HTMLElement>()

  return (
    <Section id="education" ref={ref}>
      <Container>
        <SectionHeading
          index={3}
          eyebrow={education.eyebrow}
          title={education.title}
          subtitle={education.subtitle}
        />

        {/* ------------------------------------------------------- diplomas */}
        <div className="mt-14 grid gap-4 md:grid-cols-2">
          {education.items.map((item, index) => (
            <GlassCard
              key={item.id}
              className="reveal group relative overflow-hidden p-7 sm:p-8"
              style={{ '--reveal-delay': `${index * 110}ms` } as CSSProperties}
            >
              <div className="flex items-start justify-between gap-4">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-white/12 bg-white/6 text-violet-soft transition-colors duration-500 group-hover:border-violet/40 group-hover:bg-violet/14 group-hover:text-white">
                  <Icon name="cap" size={21} />
                </span>
                <span className="rounded-full border border-white/12 bg-white/5 px-3.5 py-1.5 font-mono text-[0.78rem] text-white/70">
                  {item.period}
                </span>
              </div>

              <h3 className="mt-6 font-display text-[1.25rem] leading-snug font-semibold tracking-tight text-white text-balance">
                {item.school}
              </h3>
              <p className="mt-2 text-[0.98rem] font-medium text-violet-soft text-pretty">
                {item.degree}
              </p>
              <p className="mt-4 text-[0.92rem] leading-relaxed text-white/55">{item.detail}</p>
            </GlassCard>
          ))}
        </div>

        {/* -------------------------------------------------- certifications */}
        <div className="mt-20">
          <div className="reveal flex items-center gap-4">
            <span className="eyebrow whitespace-nowrap">{certifications.title}</span>
            <span className="h-px flex-1 bg-gradient-to-r from-violet/45 via-white/12 to-transparent" />
          </div>

          <p className="reveal mt-4 max-w-2xl text-[0.98rem] leading-relaxed text-white/75">
            {certifications.subtitle}
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {certifications.items.map((item, index) => {
              const earned = item.status === 'earned'

              const cardClassName = [
                'reveal group flex flex-col p-6',
                GLASS_SURFACE,
                item.credentialUrl
                  ? 'hover:-translate-y-3 hover:border-violet/40 hover:shadow-[0_0_20px_-10px_rgba(139,92,246,0.4)]'
                  : '',
              ]
                .filter(Boolean)
                .join(' ')

              const inner = (
                <>
                  <div className="flex items-center justify-between gap-3">
                    <span
                      className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl border transition-colors duration-500 ${
                        earned
                          ? 'border-violet/35 bg-violet/14 text-violet-soft'
                          : 'border-white/12 bg-white/6 text-white/55'
                      }`}
                    >
                      <Icon name={earned ? 'badge' : 'clock'} size={19} />
                    </span>

                    <span
                      className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-[0.72rem] font-semibold tracking-tight ${
                        earned
                          ? 'border-violet/35 bg-violet/12 text-violet-soft'
                          : 'border-white/14 bg-white/6 text-white/60'
                      }`}
                    >
                      <Icon name={earned ? 'check' : 'clock'} size={12} strokeWidth={2.4} />
                      {item.statusLabel}
                    </span>
                  </div>

                  <h3 className="mt-5 font-display text-[1rem] leading-snug font-semibold tracking-tight text-white text-balance">
                    {item.name}
                  </h3>
                  <p className="mt-2 text-[0.85rem] text-white/45">{item.issuer}</p>
                </>
              )

              return item.credentialUrl ? (
                <a
                  key={item.id}
                  href={item.credentialUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  onPointerMove={trackGlassPointer}
                  className={cardClassName}
                  style={{ '--reveal-delay': `${index * 100}ms` } as CSSProperties}
                >
                  {inner}
                </a>
              ) : (
                <div
                  key={item.id}
                  onPointerMove={trackGlassPointer}
                  className={cardClassName}
                  style={{ '--reveal-delay': `${index * 100}ms` } as CSSProperties}
                >
                  {inner}
                </div>
              )
            })}
          </div>
        </div>
      </Container>
    </Section>
  )
}

export default Education

import { useContent } from '@/i18n/LanguageContext'
import { useReveal } from '@/hooks/useReveal'
import { trackGlassPointer } from '@/lib/glass'
import { Icon } from './Icons'
import { Chip, Container, GlassCard } from './ui'

export function Hero() {
  const content = useContent()
  const { hero, experiences, contact } = content
  const current = experiences[0]
  const ref = useReveal<HTMLElement>(0.05)

  return (
    <section
      id="top"
      ref={ref}
      /* Padding rather than flex centring: the hero is taller than the
         viewport on short screens, and centring would clip its top. */
      className="relative min-h-screen pt-32 pb-24 md:pt-40 md:pb-28"
    >
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          {/* ---------------------------------------------------- copy */}
          <div>
            <div className="reveal inline-flex items-center gap-2.5 rounded-full border border-dragonfruit/30 bg-dragonfruit/10 py-2 pr-4 pl-2.5 backdrop-blur-md">
              <span className="animate-pulse-ring grid h-2 w-2 place-items-center rounded-full bg-dragonfruit" />
              <span className="text-[0.78rem] font-medium tracking-tight text-dragonfruit-soft">
                {hero.availability}
              </span>
            </div>

            <p
              className="reveal mt-8 text-sm font-medium tracking-[0.2em] text-white/60 uppercase"
              style={{ '--reveal-delay': '80ms' } as React.CSSProperties}
            >
              {hero.greeting}
            </p>

            <h1
              className="reveal mt-3 font-display text-[clamp(2.9rem,8vw,5.4rem)] leading-[0.95] font-semibold tracking-[-0.03em] text-white"
              style={{ '--reveal-delay': '140ms' } as React.CSSProperties}
            >
              {hero.name}
            </h1>

            <p
              className="reveal mt-4 font-display text-[clamp(1.6rem,4.2vw,2.6rem)] leading-tight font-semibold tracking-tight text-gradient"
              style={{ '--reveal-delay': '220ms' } as React.CSSProperties}
            >
              {hero.role}
            </p>

            <p
              className="reveal mt-6 max-w-xl text-[1.02rem] leading-relaxed text-white/78 text-pretty"
              style={{ '--reveal-delay': '300ms' } as React.CSSProperties}
            >
              <span className="font-medium text-white/85">{hero.tagline}</span> {hero.intro}
            </p>

            <div
              className="reveal mt-10 flex flex-wrap items-center gap-3"
              style={{ '--reveal-delay': '380ms' } as React.CSSProperties}
            >
              <a
                href="#experience"
                className="group inline-flex items-center gap-2.5 rounded-full bg-gradient-to-br from-dragonfruit to-dragonfruit-deep px-7 py-3.5 text-[0.95rem] font-semibold text-white shadow-[0_18px_40px_-16px_rgba(255,70,150,0.95)] transition-transform duration-300 hover:-translate-y-0.5"
              >
                {hero.primaryCta}
                <Icon
                  name="arrowRight"
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>

              <a
                href={`mailto:${contact.email}`}
                onPointerMove={trackGlassPointer}
                className="glass glass-sheen glass-lens inline-flex items-center gap-2.5 rounded-full px-7 py-3.5 text-[0.95rem] font-semibold text-white/85 transition-colors duration-300 hover:text-white"
              >
                <Icon name="mail" size={17} />
                {hero.secondaryCta}
              </a>
            </div>
          </div>

          {/* ------------------------------------------- current-role card */}
          <div className="relative">
            <div
              className="reveal relative"
              style={{ '--reveal-delay': '260ms' } as React.CSSProperties}
            >
              <GlassCard className="relative overflow-hidden p-7 sm:p-8">
                <div className="flex items-center gap-4">
                  <span className="relative grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-dragonfruit via-dragonfruit-deep to-orchid font-display text-lg font-bold text-white shadow-[0_14px_34px_-12px_rgba(255,70,150,0.9)]">
                    AO
                  </span>
                  <div className="min-w-0">
                    <p className="truncate font-display text-lg font-semibold text-white">
                      {hero.name}
                    </p>
                    <p className="truncate text-sm text-dragonfruit-soft">{current.role}</p>
                  </div>
                </div>

                <div className="my-6 h-px bg-gradient-to-r from-transparent via-white/18 to-transparent" />

                <dl className="space-y-4">
                  {[
                    { icon: 'flow' as const, label: current.company, value: current.period },
                    { icon: 'pin' as const, label: current.location, value: current.contract },
                    {
                      icon: 'badge' as const,
                      label: content.certifications.items[0].issuer,
                      value: 'PSPO II',
                    },
                    {
                      icon: 'translate' as const,
                      label: content.languages.title,
                      value: content.languages.items.map((l) => l.level).join(' · '),
                    },
                  ].map((row) => (
                    <div key={row.label} className="flex items-center gap-3.5">
                      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl border border-white/12 bg-white/6 text-dragonfruit-soft">
                        <Icon name={row.icon} size={16} />
                      </span>
                      <dt className="min-w-0 flex-1 truncate text-sm text-white/70">{row.label}</dt>
                      <dd className="shrink-0 text-sm font-medium text-white/90">{row.value}</dd>
                    </div>
                  ))}
                </dl>

                <div className="mt-7 flex flex-wrap gap-2">
                  {['Scrum', 'SAFe', 'Jira', 'Power BI', 'Figma'].map((tool) => (
                    <Chip key={tool}>{tool}</Chip>
                  ))}
                </div>
              </GlassCard>

              {/* Floating accent glyphs */}
              <div
                aria-hidden="true"
                className="animate-float-slow absolute -top-7 -right-5 hidden h-16 w-16 place-items-center rounded-2xl border border-white/16 bg-white/8 text-dragonfruit backdrop-blur-xl sm:grid"
              >
                <Icon name="target" size={26} />
              </div>
              <div
                aria-hidden="true"
                className="animate-float-slow absolute -bottom-6 -left-6 hidden h-14 w-14 place-items-center rounded-2xl border border-white/16 bg-white/8 text-orchid backdrop-blur-xl sm:grid"
                style={{ animationDelay: '-4s' }}
              >
                <Icon name="spark" size={22} />
              </div>
            </div>
          </div>
        </div>

        {/* ------------------------------------------------------- stats */}
        <div className="mt-16 grid grid-cols-2 gap-3 sm:gap-4 lg:mt-20 lg:grid-cols-4">
          {hero.stats.map((stat, index) => (
            <GlassCard
              key={stat.label}
              className="reveal px-5 py-6"
              style={{ '--reveal-delay': `${index * 90}ms` } as React.CSSProperties}
            >
              <p className="font-display text-[clamp(1.6rem,3.4vw,2.2rem)] leading-none font-semibold text-gradient">
                {stat.value}
              </p>
              <p className="mt-2.5 text-[0.82rem] leading-snug text-white/55">{stat.label}</p>
            </GlassCard>
          ))}
        </div>
      </Container>

      {/* Scroll hint */}
      <a
        href="#about"
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-white/40 transition-colors hover:text-white/80 lg:flex"
      >
        <span className="text-[0.68rem] tracking-[0.24em] uppercase">{hero.scrollHint}</span>
        <span className="relative h-9 w-px overflow-hidden bg-white/15">
          <span className="absolute inset-x-0 top-0 h-3 animate-[float-slow_2.4s_ease-in-out_infinite] bg-dragonfruit" />
        </span>
      </a>
    </section>
  )
}

export default Hero

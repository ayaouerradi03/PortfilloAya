import type { CSSProperties } from 'react'
import { useContent } from '@/i18n/LanguageContext'
import { useReveal } from '@/hooks/useReveal'
import { Icon } from './Icons'
import type { UiIconName } from './Icons'
import { trackGlassPointer } from '@/lib/glass'
import { Container, GlassCard, Section } from './ui'

export function Contact() {
  const { contact } = useContent()
  const ref = useReveal<HTMLElement>()

  const channels: {
    id: string
    icon: UiIconName
    label: string
    value: string
    href?: string
    external?: boolean
  }[] = [
    {
      id: 'email',
      icon: 'mail',
      label: contact.emailLabel,
      value: contact.email,
      href: `mailto:${contact.email}`,
    },
    {
      id: 'phone',
      icon: 'phone',
      label: contact.phoneLabel,
      value: contact.phone,
      href: `tel:${contact.phone.replace(/\s/g, '')}`,
    },
    {
      id: 'linkedin',
      icon: 'linkedin',
      label: contact.linkedinLabel,
      value: contact.linkedin,
      href: contact.linkedinHref,
      external: true,
    },
    { id: 'location', icon: 'pin', label: contact.locationLabel, value: contact.location },
  ]

  return (
    <Section id="contact" ref={ref} className="pb-20 md:pb-24">
      <Container>
        <GlassCard
          interactive={false}
          className="reveal relative overflow-hidden px-6 py-14 sm:px-10 md:px-14 md:py-20"
        >
          {/* Inner glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-40 left-1/2 h-80 w-[36rem] -translate-x-1/2 rounded-full opacity-60 blur-[90px]"
            style={{
              background: 'radial-gradient(circle, rgba(255,70,150,0.4) 0%, transparent 70%)',
            }}
          />

          <div className="relative mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2.5 rounded-full border border-dragonfruit/30 bg-dragonfruit/10 py-2 pr-4 pl-2.5">
              <span className="animate-pulse-ring h-2 w-2 rounded-full bg-dragonfruit" />
              <span className="text-[0.78rem] font-medium tracking-tight text-dragonfruit-soft">
                {contact.eyebrow}
              </span>
            </div>

            <h2 className="mt-7 font-display text-[clamp(2rem,5vw,3.4rem)] leading-[1.06] font-semibold tracking-tight text-white text-balance">
              {contact.title}
            </h2>

            <p className="mx-auto mt-6 max-w-xl text-[1.02rem] leading-relaxed text-white/62 text-pretty">
              {contact.body}
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <a
                href={`mailto:${contact.email}`}
                className="group inline-flex items-center gap-2.5 rounded-full bg-gradient-to-br from-dragonfruit to-dragonfruit-deep px-8 py-4 text-[0.95rem] font-semibold text-white shadow-[0_20px_44px_-16px_rgba(255,70,150,0.95)] transition-transform duration-300 hover:-translate-y-0.5"
              >
                <Icon name="mail" size={18} />
                {contact.cta}
                <Icon
                  name="arrowRight"
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>

              <span className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/5 px-5 py-4 text-[0.88rem] text-white/60">
                <Icon name="clock" size={16} />
                {contact.availability}
              </span>
            </div>
          </div>

          {/* ------------------------------------------------------- channels */}
          <div className="relative mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {channels.map((channel, index) => {
              const inner = (
                <>
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-white/12 bg-white/6 text-dragonfruit-soft transition-colors duration-500 group-hover:border-dragonfruit/45 group-hover:bg-dragonfruit/16 group-hover:text-white">
                    <Icon name={channel.icon} size={17} />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[0.72rem] tracking-[0.14em] text-white/40 uppercase">
                      {channel.label}
                    </span>
                    <span className="mt-0.5 block truncate text-[0.9rem] font-medium text-white/85">
                      {channel.value}
                    </span>
                  </span>
                </>
              )

              const className =
                'glass glass-sheen glass-lens group flex items-center gap-3.5 rounded-2xl p-4 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]'

              return channel.href ? (
                <a
                  key={channel.id}
                  href={channel.href}
                  target={channel.external ? '_blank' : undefined}
                  rel={channel.external ? 'noreferrer noopener' : undefined}
                  onPointerMove={trackGlassPointer}
                  className={`reveal ${className} hover:-translate-y-1`}
                  style={{ '--reveal-delay': `${index * 80}ms` } as CSSProperties}
                >
                  {inner}
                </a>
              ) : (
                <div
                  key={channel.id}
                  onPointerMove={trackGlassPointer}
                  className={`reveal ${className}`}
                  style={{ '--reveal-delay': `${index * 80}ms` } as CSSProperties}
                >
                  {inner}
                </div>
              )
            })}
          </div>
        </GlassCard>
      </Container>
    </Section>
  )
}

export default Contact

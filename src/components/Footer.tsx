import { useContent } from '@/i18n/LanguageContext'
import { Icon } from './Icons'
import { Container } from './ui'

export function Footer() {
  const { footer, hero, heroCard, contact } = useContent()
  const year = new Date().getFullYear()

  return (
    <footer className="relative border-t border-white/8 py-10">
      <Container>
        <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:justify-between sm:text-left">
          <p className="font-display text-lg font-semibold tracking-tight text-white/85">
            {hero.name}
            <span className="text-white/30"> — </span>
            <span className="font-normal text-white/55">{hero.role}</span>
          </p>

          <div className="flex items-center gap-2">
            <a
              href={contact.linkedinHref}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={contact.linkedinLabel}
              className="grid h-10 w-10 place-items-center rounded-full border border-white/12 bg-white/5 text-white/65 transition-colors duration-300 hover:border-violet/45 hover:bg-violet/14 hover:text-white"
            >
              <Icon name="linkedin" size={17} />
            </a>
            <a
              href={`mailto:${contact.email}`}
              aria-label={contact.emailLabel}
              className="grid h-10 w-10 place-items-center rounded-full border border-white/12 bg-white/5 text-white/65 transition-colors duration-300 hover:border-violet/45 hover:bg-violet/14 hover:text-white"
            >
              <Icon name="mail" size={17} />
            </a>
            <a
              href="#top"
              className="ml-1 inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/5 px-4 py-2.5 text-[0.82rem] font-medium whitespace-nowrap text-white/70 transition-colors duration-300 hover:border-white/28 hover:text-white"
            >
              <Icon name="arrowUp" size={15} />
              {footer.backToTop}
            </a>
          </div>
        </div>

        {/* Bottom bar — copyright left, live status right */}
        <div className="mt-8 flex flex-col items-center gap-3 border-t border-white/8 pt-6 text-center sm:flex-row sm:justify-between sm:text-left">
          <p className="text-[0.78rem] text-white/40">
            © {year} · {footer.rights} · {footer.built}
          </p>
          <span className="inline-flex items-center gap-2 text-[0.78rem] font-medium tracking-tight text-emerald">
            <span
              className="animate-pulse-ring h-1.5 w-1.5 rounded-full bg-emerald"
              style={{ '--pulse-color': 'var(--color-emerald)' } as React.CSSProperties}
            />
            {heroCard.availabilityLabel} · {heroCard.availabilityValue}
          </span>
        </div>
      </Container>
    </footer>
  )
}

export default Footer

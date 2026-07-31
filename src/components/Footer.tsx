import { useContent } from '@/i18n/LanguageContext'
import { Icon } from './Icons'
import { Container } from './ui'

export function Footer() {
  const { footer, hero, contact } = useContent()
  const year = new Date().getFullYear()

  return (
    <footer className="relative border-t border-white/8 py-10">
      <Container>
        <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:justify-between sm:text-left">
          <div>
            <p className="font-display text-sm font-semibold tracking-tight text-white/85">
              {hero.name}
              <span className="text-white/30"> — </span>
              <span className="font-normal text-white/55">{hero.role}</span>
            </p>
            <p className="mt-1.5 text-[0.8rem] text-white/55">
              © {year} · {footer.rights} · {footer.built}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={contact.linkedinHref}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={contact.linkedinLabel}
              className="grid h-10 w-10 place-items-center rounded-full border border-white/12 bg-white/5 text-white/65 transition-colors duration-300 hover:border-dragonfruit/45 hover:bg-dragonfruit/14 hover:text-white"
            >
              <Icon name="linkedin" size={17} />
            </a>
            <a
              href={`mailto:${contact.email}`}
              aria-label={contact.emailLabel}
              className="grid h-10 w-10 place-items-center rounded-full border border-white/12 bg-white/5 text-white/65 transition-colors duration-300 hover:border-dragonfruit/45 hover:bg-dragonfruit/14 hover:text-white"
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
      </Container>
    </footer>
  )
}

export default Footer

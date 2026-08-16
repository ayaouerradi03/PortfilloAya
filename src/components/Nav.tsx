import { useEffect, useRef, useState } from 'react'
import { useLanguage } from '@/i18n/LanguageContext'
import { Icon } from './Icons'

/** Thin violet bar at the very top showing reading progress. */
function ScrollProgressBar() {
  const barRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    let frame: number | null = null

    const update = () => {
      frame = null
      const bar = barRef.current
      if (!bar) return
      const max = document.documentElement.scrollHeight - window.innerHeight
      const progress = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0
      bar.style.transform = `scaleX(${progress})`
    }

    const onScroll = () => {
      if (frame === null) frame = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })
    return () => {
      if (frame !== null) cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return (
    <div className="fixed inset-x-0 top-0 z-60 h-px">
      <div
        ref={barRef}
        className="h-full origin-left bg-gradient-to-r from-violet via-violet-soft to-cyan"
        style={{ transform: 'scaleX(0)' }}
      />
    </div>
  )
}

function LanguageSwitch() {
  const { locale, setLocale, content } = useLanguage()

  return (
    <div
      role="group"
      aria-label={content.nav.langSwitchLabel}
      className="flex items-center gap-0.5 text-[0.72rem] font-medium tracking-[0.08em] uppercase"
    >
      {(['fr', 'en'] as const).map((code, index) => (
        <span key={code} className="flex items-center">
          {index > 0 ? <span className="px-1 text-white/20">/</span> : null}
          <button
            type="button"
            onClick={() => setLocale(code)}
            aria-pressed={locale === code}
            className={`transition-colors duration-300 ${
              locale === code ? 'text-white' : 'text-white/35 hover:text-white/70'
            }`}
          >
            {code}
          </button>
        </span>
      ))}
    </div>
  )
}

/**
 * Borderless navigation.
 *
 * The previous version wrapped everything in one floating glass pill, which
 * read as a detached island sitting on top of the page. Here the logo, links
 * and actions sit directly on the page and span its full width; only once the
 * visitor scrolls does a blur and a hairline rule fade in behind them, so the
 * bar earns its surface instead of always carrying one.
 */
export function Nav() {
  const { content } = useLanguage()
  const { items, cta, menu, close } = content.nav

  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState<string>('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Scroll spy — highlights the section currently closest to the top.
  useEffect(() => {
    const sections = items
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null)

    if (sections.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
        if (visible[0]) setActive(visible[0].target.id)
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [items])

  // Lock the page while the mobile sheet is open.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <>
      <ScrollProgressBar />

      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] ${
          scrolled
            ? 'border-b border-white/8 bg-night-deep/70 py-3.5 backdrop-blur-xl'
            : 'border-b border-transparent py-6'
        }`}
      >
        {/* Same track as <Container> so the wordmark lines up with the hero
            name below it rather than floating on its own grid. */}
        <nav className="mx-auto flex w-full max-w-7xl items-center gap-8 px-6 sm:px-10 lg:px-16">
          {/* Wordmark */}
          <a href="#top" className="group flex shrink-0 items-center gap-2.5" aria-label="Aya Ouerradi">
            <span className="grid h-7 w-7 place-items-center rounded-md bg-white/8 text-[0.62rem] font-bold tracking-tight text-white/90 transition-colors duration-300 group-hover:bg-violet/25">
              AO
            </span>
            <span className="hidden font-display text-[0.92rem] font-medium tracking-tight text-white/90 transition-colors group-hover:text-white sm:block">
              Aya Ouerradi
            </span>
          </a>

          {/* Desktop links — a marker rule under the active item rather than a
              filled pill, so nothing boxes the text. */}
          <ul className="mx-auto hidden items-center gap-7 md:flex">
            {items.map((item) => {
              const isActive = active === item.id
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    aria-current={isActive ? 'true' : undefined}
                    className={`relative block py-1 text-[0.85rem] font-medium transition-colors duration-300 ${
                      isActive ? 'text-white' : 'text-white/45 hover:text-white/80'
                    }`}
                  >
                    {item.label}
                    <span
                      aria-hidden="true"
                      className={`absolute -bottom-0.5 left-0 h-px bg-violet transition-all duration-300 ${
                        isActive ? 'w-full opacity-100' : 'w-0 opacity-0'
                      }`}
                    />
                  </a>
                </li>
              )
            })}
          </ul>

          <div className="ml-auto flex items-center gap-5 md:ml-0">
            <LanguageSwitch />

            {/* Understated on purpose — the white hero button is the page's
                primary action, so the persistent nav CTA sits back. */}
            <a
              href="#contact"
              className="hidden items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-[0.82rem] font-medium text-white/85 transition-colors duration-300 hover:border-white/35 hover:bg-white/6 hover:text-white sm:inline-flex"
            >
              <Icon name="mail" size={14} />
              {cta}
            </a>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-label={open ? close : menu}
              className="text-white/70 transition-colors hover:text-white md:hidden"
            >
              <Icon name={open ? 'close' : 'menu'} size={20} />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile sheet */}
      <div
        className={`fixed inset-0 z-40 md:hidden ${open ? '' : 'pointer-events-none'}`}
        aria-hidden={!open}
      >
        <div
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-night-deep/80 backdrop-blur-md transition-opacity duration-400 ${
            open ? 'opacity-100' : 'opacity-0'
          }`}
        />
        <div
          className={`absolute inset-x-0 top-0 border-b border-white/8 bg-night-deep/95 px-6 pt-24 pb-8 transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] ${
            open ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'
          }`}
        >
          <ul className="flex flex-col">
            {items.map((item, index) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={() => setOpen(false)}
                  className="flex items-baseline gap-4 border-b border-white/6 py-4 text-[1.15rem] font-medium text-white/80 transition-colors hover:text-white"
                >
                  <span className="font-mono text-[0.7rem] text-violet/60">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-7 flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3.5 text-sm font-semibold text-night-deep"
          >
            <Icon name="mail" size={16} />
            {cta}
          </a>
        </div>
      </div>
    </>
  )
}

export default Nav

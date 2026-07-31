import { useEffect, useRef, useState } from 'react'
import { useLanguage } from '@/i18n/LanguageContext'
import { Icon } from './Icons'
import { trackGlassPointer } from '@/lib/glass'

/** Thin dragonfruit bar at the very top showing reading progress. */
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
    <div className="fixed inset-x-0 top-0 z-60 h-[2px]">
      <div
        ref={barRef}
        className="h-full origin-left bg-gradient-to-r from-dragonfruit-soft via-dragonfruit to-orchid"
        style={{ transform: 'scaleX(0)' }}
      />
    </div>
  )
}

function LanguageSwitch({ compact = false }: { compact?: boolean }) {
  const { locale, setLocale, content } = useLanguage()

  return (
    <div
      role="group"
      aria-label={content.nav.langSwitchLabel}
      className={`glass relative flex items-center rounded-full p-1 ${compact ? '' : 'shrink-0'}`}
      style={{ '--glass-blur': '14px' } as React.CSSProperties}
    >
      {/* Sliding pill */}
      <span
        aria-hidden="true"
        className="absolute top-1 bottom-1 left-1 w-[calc(50%-0.25rem)] rounded-full bg-gradient-to-br from-dragonfruit to-dragonfruit-deep shadow-[0_6px_18px_-6px_rgba(255,70,150,0.9)] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
        style={{ transform: locale === 'en' ? 'translateX(100%)' : 'translateX(0)' }}
      />
      {(['fr', 'en'] as const).map((code) => (
        <button
          key={code}
          type="button"
          onClick={() => setLocale(code)}
          aria-pressed={locale === code}
          className={`relative z-10 w-11 rounded-full py-1.5 text-xs font-semibold tracking-widest uppercase transition-colors duration-300 ${
            locale === code ? 'text-white' : 'text-white/55 hover:text-white/85'
          }`}
        >
          {code}
        </button>
      ))}
    </div>
  )
}

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
        className={`fixed inset-x-0 top-0 z-50 transition-[padding] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          scrolled ? 'py-3' : 'py-5'
        }`}
      >
        <div className="mx-auto w-full max-w-6xl px-5 sm:px-8 lg:px-12">
          <nav
            onPointerMove={trackGlassPointer}
            className={`glass glass-sheen glass-lens flex items-center gap-4 rounded-full pr-2 pl-5 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
              scrolled ? 'py-2 shadow-[0_20px_50px_-24px_rgba(6,2,14,0.95)]' : 'py-2.5'
            }`}
          >
            {/* Wordmark */}
            <a
              href="#top"
              className="group flex shrink-0 items-center gap-2.5"
              aria-label="Aya Ouerradi"
            >
              <span className="relative grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-dragonfruit to-dragonfruit-deep text-[0.8rem] font-bold text-white shadow-[0_8px_22px_-8px_rgba(255,70,150,0.95)]">
                AO
              </span>
              <span className="hidden font-display text-sm font-semibold tracking-tight text-white/90 transition-colors group-hover:text-white sm:block">
                Aya Ouerradi
              </span>
            </a>

            {/* Desktop links */}
            <ul className="mx-auto hidden items-center gap-1 md:flex">
              {items.map((item) => {
                const isActive = active === item.id
                return (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      aria-current={isActive ? 'true' : undefined}
                      className={`relative block rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                        isActive ? 'text-white' : 'text-white/60 hover:text-white'
                      }`}
                    >
                      {isActive ? (
                        <span className="absolute inset-0 rounded-full border border-white/16 bg-white/8" />
                      ) : null}
                      <span className="relative">{item.label}</span>
                    </a>
                  </li>
                )
              })}
            </ul>

            <div className="ml-auto flex items-center gap-2 md:ml-0">
              <LanguageSwitch />

              <a
                href="#contact"
                className="hidden items-center gap-2 rounded-full bg-gradient-to-br from-dragonfruit to-dragonfruit-deep px-5 py-2.5 text-sm font-semibold text-white shadow-[0_10px_28px_-10px_rgba(255,70,150,0.95)] transition-transform duration-300 hover:-translate-y-0.5 sm:inline-flex"
              >
                {cta}
                <Icon name="arrowRight" size={16} />
              </a>

              <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                aria-expanded={open}
                aria-label={open ? close : menu}
                className="grid h-10 w-10 place-items-center rounded-full border border-white/14 bg-white/6 text-white transition-colors hover:bg-white/12 md:hidden"
              >
                <Icon name={open ? 'close' : 'menu'} size={18} />
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile sheet */}
      <div
        className={`fixed inset-0 z-40 md:hidden ${open ? '' : 'pointer-events-none'}`}
        aria-hidden={!open}
      >
        <div
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-night-deep/70 backdrop-blur-sm transition-opacity duration-400 ${
            open ? 'opacity-100' : 'opacity-0'
          }`}
        />
        <div
          className={`glass glass-sheen absolute inset-x-4 top-24 rounded-3xl p-4 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            open ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'
          }`}
        >
          <ul className="flex flex-col gap-1">
            {items.map((item, index) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between rounded-2xl px-4 py-3.5 text-base font-medium text-white/80 transition-colors hover:bg-white/8 hover:text-white"
                >
                  {item.label}
                  <span className="font-mono text-xs text-dragonfruit/70">
                    0{index + 1}
                  </span>
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-3 flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-br from-dragonfruit to-dragonfruit-deep px-5 py-3.5 text-sm font-semibold text-white"
          >
            {cta}
            <Icon name="arrowRight" size={16} />
          </a>
        </div>
      </div>
    </>
  )
}

export default Nav

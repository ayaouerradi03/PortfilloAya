import { useCallback, useEffect, useMemo, useState, type ReactNode } from 'react'
import { en } from '@/content/en'
import { fr } from '@/content/fr'
import type { Locale, SiteContent } from '@/content/types'
import { LanguageContext } from './LanguageContext'

const DICTIONARIES: Record<Locale, SiteContent> = { fr, en }
const STORAGE_KEY = 'aya-portfolio-locale'

function detectInitialLocale(): Locale {
  if (typeof window === 'undefined') return 'fr'

  const stored = window.localStorage.getItem(STORAGE_KEY)
  if (stored === 'fr' || stored === 'en') return stored

  // Fall back to the browser preference — French for francophone visitors,
  // English for everyone else.
  const browser = window.navigator.language?.toLowerCase() ?? ''
  return browser.startsWith('fr') ? 'fr' : 'en'
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(detectInitialLocale)

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next)
    try {
      window.localStorage.setItem(STORAGE_KEY, next)
    } catch {
      // Private browsing — the choice simply will not persist.
    }
  }, [])

  const toggleLocale = useCallback(() => {
    setLocaleState((current) => {
      const next: Locale = current === 'fr' ? 'en' : 'fr'
      try {
        window.localStorage.setItem(STORAGE_KEY, next)
      } catch {
        /* ignore */
      }
      return next
    })
  }, [])

  const content = DICTIONARIES[locale]

  // Keep the document in sync so screen readers and search engines get it right.
  useEffect(() => {
    document.documentElement.lang = content.meta.langAttr
    document.title = content.meta.title
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute('content', content.meta.description)
  }, [content])

  const value = useMemo(
    () => ({ locale, content, setLocale, toggleLocale }),
    [locale, content, setLocale, toggleLocale],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

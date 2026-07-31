import { createContext, useContext } from 'react'
import type { Locale, SiteContent } from '@/content/types'

export interface LanguageContextValue {
  locale: Locale
  content: SiteContent
  setLocale: (locale: Locale) => void
  toggleLocale: () => void
}

export const LanguageContext = createContext<LanguageContextValue | null>(null)

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used inside <LanguageProvider>')
  return ctx
}

/** Shorthand for components that only need the copy. */
export function useContent(): SiteContent {
  return useLanguage().content
}

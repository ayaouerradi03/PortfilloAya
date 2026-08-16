export type Locale = 'fr' | 'en'

export type IconName =
  | 'compass'
  | 'flow'
  | 'refresh'
  | 'megaphone'
  | 'target'
  | 'handshake'
  | 'shield'
  | 'model'
  | 'flask'
  | 'chart'
  | 'board'
  | 'globe'
  | 'users'
  | 'spark'
  | 'cap'

/** One card = one concrete mission inside an experience. */
export interface TaskCardData {
  id: string
  icon: IconName
  tag: string
  title: string
  /** Short summary paragraph — used when `bullets` isn't provided. */
  detail?: string
  /** Detailed breakdown, rendered as a list instead of a paragraph. */
  bullets?: string[]
  /** Small keyword chips rendered at the bottom of the card. */
  keywords?: string[]
}

/** One category of tools/practices inside an experience's context panel. */
export interface ToolGroupData {
  label: string
  items: string[]
}

export interface ExperienceData {
  id: string
  company: string
  role: string
  contract: string
  location: string
  period: string
  /** Short framing line under the header, above the task cards. */
  summary: string
  /** Deeper "what this role actually involves" panel, shown above the missions grid. */
  context?: {
    body: string[]
    toolGroups: ToolGroupData[]
  }
  tasks: TaskCardData[]
}

export interface EducationData {
  id: string
  school: string
  degree: string
  period: string
  detail: string
}

export interface CertificationData {
  id: string
  name: string
  /** Short code used in compact spots (e.g. the hero card) — "PSPO II", "AZ-900". */
  shortName: string
  issuer: string
  status: 'earned' | 'in-progress'
  statusLabel: string
  /** Link to the public credential (badge, transcript). Card becomes clickable when set. */
  credentialUrl?: string
}

export interface SkillGroupData {
  id: string
  label: string
  items: string[]
}

export interface LanguageData {
  id: string
  name: string
  level: string
  note: string
}

export interface StatData {
  value: string
  label: string
}

/** One title + description item, optionally led by an icon. */
export interface IconCardData {
  id: string
  /** Omitted where the layout leads with a numeral or rule instead (see WhyMe). */
  icon?: IconName
  title: string
  detail: string
}

export interface NavItem {
  id: string
  label: string
}

export interface SiteContent {
  meta: {
    title: string
    description: string
    langAttr: string
  }
  nav: {
    items: NavItem[]
    cta: string
    menu: string
    close: string
    langSwitchLabel: string
  }
  hero: {
    availability: string
    name: string
    role: string
    /** Hero statement, split so the payoff half can take the accent colour. */
    taglineLead: string
    taglineAccent: string
    intro: string
    primaryCta: string
    secondaryCta: string
    stats: StatData[]
  }
  /** Copy specific to the current-role card next to the hero heading. */
  heroCard: {
    availabilityLabel: string
    availabilityValue: string
    focusAreas: string[]
  }
  about: {
    eyebrow: string
    title: string
    body: string[]
    highlightsTitle: string
    highlights: { title: string; detail: string }[]
  }
  experience: {
    eyebrow: string
    title: string
    subtitle: string
    presentLabel: string
    missionsLabel: (n: number) => string
    toolsLabel: string
  }
  experiences: ExperienceData[]
  education: {
    eyebrow: string
    title: string
    subtitle: string
    items: EducationData[]
  }
  certifications: {
    eyebrow: string
    title: string
    subtitle: string
    items: CertificationData[]
  }
  skills: {
    eyebrow: string
    title: string
    subtitle: string
    groups: SkillGroupData[]
  }
  whyMe: {
    eyebrow: string
    title: string
    subtitle: string
    items: IconCardData[]
  }
  interests: {
    eyebrow: string
    title: string
    subtitle: string
    items: IconCardData[]
  }
  languages: {
    eyebrow: string
    title: string
    subtitle: string
    items: LanguageData[]
  }
  contact: {
    eyebrow: string
    title: string
    body: string
    emailLabel: string
    phoneLabel: string
    locationLabel: string
    linkedinLabel: string
    email: string
    phone: string
    location: string
    linkedin: string
    linkedinHref: string
    cta: string
  }
  footer: {
    built: string
    rights: string
    backToTop: string
  }
}

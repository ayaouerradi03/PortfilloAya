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

/** One card = one concrete mission inside an experience. */
export interface TaskCardData {
  id: string
  icon: IconName
  tag: string
  title: string
  detail: string
  /** Small keyword chips rendered at the bottom of the card. */
  keywords: string[]
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
  issuer: string
  status: 'earned' | 'in-progress'
  statusLabel: string
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
  /** 0–100, used for the glass meter. */
  score: number
  note: string
}

export interface StatData {
  value: string
  label: string
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
    greeting: string
    name: string
    role: string
    tagline: string
    intro: string
    primaryCta: string
    secondaryCta: string
    scrollHint: string
    stats: StatData[]
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
    journeyLabel: string
    presentLabel: string
    missionsLabel: (n: number) => string
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
    availability: string
  }
  footer: {
    built: string
    rights: string
    backToTop: string
  }
}

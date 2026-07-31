import type { SiteContent } from './types'

export const en: SiteContent = {
  meta: {
    title: 'Aya Ouerradi — AI Product Owner',
    description:
      'Portfolio of Aya Ouerradi, PSPO II certified Product Owner specialised in driving AI products in a SAFe Agile environment.',
    langAttr: 'en',
  },

  nav: {
    items: [
      { id: 'about', label: 'Profile' },
      { id: 'experience', label: 'Experience' },
      { id: 'education', label: 'Education' },
      { id: 'skills', label: 'Skills' },
      { id: 'contact', label: 'Contact' },
    ],
    cta: 'Get in touch',
    menu: 'Open menu',
    close: 'Close menu',
    langSwitchLabel: 'Switch language',
  },

  hero: {
    availability: 'Available for a full-time role from September 2026',
    greeting: 'Hi, I’m',
    name: 'Aya Ouerradi',
    role: 'AI Product Owner',
    tagline: 'Where business meets technology.',
    intro:
      'PSPO II certified Product Owner with 2+ years of experience at the business / tech interface in a SAFe Agile environment. Specialised in driving AI products: product vision, backlog management, KPI tracking and user workshop facilitation.',
    primaryCta: 'Explore my journey',
    secondaryCta: 'Get in touch',
    scrollHint: 'Scroll',
    stats: [
      { value: '2+', label: 'years in product' },
      { value: 'PSPO II', label: 'Scrum.org certified' },
      { value: 'SAFe', label: 'agile at scale' },
      { value: '3', label: 'languages spoken' },
    ],
  },

  about: {
    eyebrow: 'Profile',
    title: 'Turning business needs into AI products that actually deliver value',
    body: [
      'As a PSPO II certified Product Owner, I have spent 2+ years working at the interface between business and engineering, inside SAFe Agile environments where several teams move to the same beat.',
      'My playground: Artificial Intelligence products. I shape the vision, prioritise the backlog, facilitate user workshops and own the KPIs that prove business impact — from discovery all the way to monitoring models in production.',
      'Available for a permanent role from September 2026, looking for an ambitious product team where AI serves real, everyday value.',
    ],
    highlightsTitle: 'What I bring',
    highlights: [
      {
        title: 'Vision & prioritisation',
        detail:
          'Product roadmap, Epics and User Stories arbitrated by business value rather than by request volume.',
      },
      {
        title: 'Agile at scale',
        detail:
          'PI Planning, Sprint Review, Daily, Retrospective: I keep the SAFe rhythm running and align teams around one direction.',
      },
      {
        title: 'Data & AI fluency',
        detail:
          'Data quality, GDPR, MLOps lifecycle and A/B testing: I speak the language of Data Science teams.',
      },
      {
        title: 'User listening',
        detail:
          'Workshops, journey mapping and a continuous feedback loop to keep the product grounded in reality.',
      },
    ],
  },

  experience: {
    eyebrow: 'Journey',
    title: 'Professional experience',
    subtitle:
      'Two apprenticeships, one common thread: moving a product forward with method, measurement and user listening.',
    journeyLabel: 'Journey line',
    presentLabel: 'Current role',
    missionsLabel: (n: number) => `${n} key missions`,
  },

  experiences: [
    {
      id: 'schneider',
      company: 'Schneider Electric',
      role: 'AI Product Owner',
      contract: 'Apprenticeship',
      location: 'Grenoble, France',
      period: '2025 – Present',
      summary:
        'Driving an internal Artificial Intelligence platform inside a Data/AI hub, within a SAFe Agile framework.',
      tasks: [
        {
          id: 'sch-journey',
          icon: 'compass',
          tag: 'Discovery',
          title: 'Customer Journey ownership',
          detail:
            'Facilitating user workshops and keeping the customer journey mapping up to date to guarantee alignment between business needs and product objectives.',
          keywords: ['User workshops', 'Journey mapping', 'Business alignment'],
        },
        {
          id: 'sch-safe',
          icon: 'flow',
          tag: 'Agile at scale',
          title: 'Running AI projects in a SAFe Agile framework',
          detail:
            'Active participation in Scrum ceremonies — PI Planning, Sprint Review, Daily, Retrospective — and coordination across the teams involved.',
          keywords: ['PI Planning', 'Sprint Review', 'Retrospective', 'Coordination'],
        },
        {
          id: 'sch-platform',
          icon: 'refresh',
          tag: 'Continuous improvement',
          title: 'Continuous improvement of the AI platform',
          detail:
            'Set up a continuous feedback loop with internal users to prioritise enhancements, test new models and strengthen the business value of the solution.',
          keywords: ['Feedback loop', 'Prioritisation', 'Model testing'],
        },
        {
          id: 'sch-comms',
          icon: 'megaphone',
          tag: 'Communication',
          title: 'Product communication',
          detail:
            'Communicating what is new on the AI platform to the rest of the hub at every new Program Increment.',
          keywords: ['Release comms', 'Program Increment', 'Evangelism'],
        },
        {
          id: 'sch-ownership',
          icon: 'target',
          tag: 'Product vision',
          title: 'Product Ownership & product vision',
          detail:
            'Backlog management, definition and prioritisation of User Stories and Epics, and contribution to the AI product roadmap alongside Product Managers and cross-functional teams.',
          keywords: ['Backlog', 'User Stories', 'Epics', 'Roadmap'],
        },
        {
          id: 'sch-vendor',
          icon: 'handshake',
          tag: 'Vendor',
          title: 'Vendor contract management',
          detail:
            'Owning the Databricks provider contract: tracking commitments, handling renewals and coordinating with procurement and technical teams.',
          keywords: ['Databricks', 'Contract tracking', 'Procurement'],
        },
        {
          id: 'sch-governance',
          icon: 'shield',
          tag: 'Governance',
          title: 'Data / AI governance',
          detail:
            'Contributing to data quality framing, access management, GDPR awareness and documentation.',
          keywords: ['Data quality', 'Access management', 'GDPR', 'Documentation'],
        },
        {
          id: 'sch-mlops',
          icon: 'model',
          tag: 'MLOps',
          title: 'MLOps lifecycle (PO level)',
          detail:
            'Framing the model lifecycle with Data Science and Machine Learning teams: validation, monitoring and retraining.',
          keywords: ['Validation', 'Monitoring', 'Retraining'],
        },
        {
          id: 'sch-ab',
          icon: 'flask',
          tag: 'Experimentation',
          title: 'A/B testing & experimentation',
          detail:
            'Coordinating testing strategies, measuring impact and driving iterative improvements to features.',
          keywords: ['A/B testing', 'Impact measurement', 'Iteration'],
        },
        {
          id: 'sch-kpi',
          icon: 'chart',
          tag: 'Performance',
          title: 'Performance management',
          detail:
            'Defining and tracking product KPIs — engagement, user satisfaction, AI model performance, adoption rate — and building analytics dashboards to measure business impact.',
          keywords: ['Product KPIs', 'Adoption rate', 'Dashboards', 'Business impact'],
        },
      ],
    },
    {
      id: 'akm',
      company: 'AKM Technologies',
      role: 'Product Owner',
      contract: 'Apprenticeship',
      location: 'Paris, France',
      period: '2024 – 2025',
      summary:
        'End-to-end product ownership on a digital scope, from gathering the need to measuring performance.',
      tasks: [
        {
          id: 'akm-delivery',
          icon: 'board',
          tag: 'Delivery',
          title: 'Product ownership & agile delivery (Scrum / Kanban)',
          detail:
            'Defining and prioritising the backlog, writing User Stories, running sprints and facilitating agile rituals: sprint planning, reviews and retrospectives.',
          keywords: ['Scrum', 'Kanban', 'Backlog', 'Sprints'],
        },
        {
          id: 'akm-vision',
          icon: 'target',
          tag: 'Product vision',
          title: 'Product vision & roadmap',
          detail:
            'Contributing to the definition of the product vision, identifying user needs and aligning them with business objectives.',
          keywords: ['Vision', 'Roadmap', 'User needs'],
        },
        {
          id: 'akm-web',
          icon: 'globe',
          tag: 'Project',
          title: 'Website redesign (product approach)',
          detail:
            'Gathering business requirements, coordinating with the technical team, following up on development and validating deliverables.',
          keywords: ['Website redesign', 'Requirements', 'Validation'],
        },
        {
          id: 'akm-collab',
          icon: 'users',
          tag: 'Collaboration',
          title: 'Cross-functional collaboration',
          detail:
            'Working closely with technical, marketing and leadership teams to ensure product consistency and maximise delivered value.',
          keywords: ['Tech', 'Marketing', 'Leadership'],
        },
        {
          id: 'akm-perf',
          icon: 'chart',
          tag: 'Performance',
          title: 'Performance analysis',
          detail:
            'Tracking product KPIs — engagement, conversion, performance — reporting and making continuous improvement recommendations.',
          keywords: ['KPIs', 'Conversion', 'Reporting'],
        },
        {
          id: 'akm-innov',
          icon: 'spark',
          tag: 'Innovation',
          title: 'Continuous improvement & innovation',
          detail:
            'Monitoring digital trends and market tools to optimise the user experience and the product strategy.',
          keywords: ['Trend watch', 'UX', 'Product strategy'],
        },
      ],
    },
  ],

  education: {
    eyebrow: 'Education',
    title: 'A business foundation, a project management specialisation',
    subtitle: 'Project management and marketing: understanding value before building it.',
    items: [
      {
        id: 'neoma',
        school: 'NEOMA Business School',
        degree: 'MSc Project Management',
        period: '2025 – 2026',
        detail:
          'Managing complex projects, governance, stakeholder management and value creation.',
      },
      {
        id: 'urca',
        school: 'University of Reims Champagne-Ardenne',
        degree: 'Master’s in Marketing & Sales — Communication track',
        period: '2023 – 2025',
        detail: 'Marketing strategy, customer needs analysis and product communication.',
      },
    ],
  },

  certifications: {
    eyebrow: 'Certifications',
    title: 'Certifications',
    subtitle: 'Product ownership and cloud / AI, validated by the reference bodies.',
    items: [
      {
        id: 'pspo2',
        name: 'PSPO II — Professional Scrum Product Owner II',
        issuer: 'Scrum.org',
        status: 'earned',
        statusLabel: 'Earned',
      },
      {
        id: 'az900',
        name: 'Microsoft Azure Fundamentals AZ-900',
        issuer: 'Microsoft',
        status: 'earned',
        statusLabel: 'Earned',
      },
      {
        id: 'ai900',
        name: 'Microsoft Azure AI Fundamentals',
        issuer: 'Microsoft',
        status: 'in-progress',
        statusLabel: 'In progress',
      },
    ],
  },

  skills: {
    eyebrow: 'Skills',
    title: 'Toolbox',
    subtitle: 'The methods and tools I use every day to move a product forward.',
    groups: [
      {
        id: 'po',
        label: 'Product Ownership & Management',
        items: [
          'Product Roadmap',
          'Backlog',
          'User Stories',
          'MVP',
          'Product Discovery',
          'Value management',
          'Prioritisation',
          'KPIs',
          'Cross-functional collaboration',
        ],
      },
      {
        id: 'agile',
        label: 'Agile methodologies',
        items: [
          'Scrum',
          'Kanban',
          'Lean',
          'SAFe',
          'Jira',
          'Confluence',
          'Trello',
          'Notion',
          'MS Project',
        ],
      },
      {
        id: 'data',
        label: 'Data & analytics tools',
        items: ['Power BI', 'GitHub', 'Microsoft Office'],
      },
      {
        id: 'design',
        label: 'Design & collaboration',
        items: ['Figma', 'Miro', 'LaTeX', 'Power Automate', 'iObeya'],
      },
    ],
  },

  languages: {
    eyebrow: 'Languages',
    title: 'Languages',
    subtitle: 'Three languages to work with international teams and users.',
    items: [
      { id: 'fr', name: 'French', level: 'C2', score: 100, note: 'Bilingual / working language' },
      { id: 'en', name: 'English', level: 'C1', score: 85, note: 'Advanced professional' },
      { id: 'ar', name: 'Arabic', level: 'C2', score: 100, note: 'Bilingual' },
    ],
  },

  contact: {
    eyebrow: 'Contact',
    title: 'Let’s build the next product together',
    body: 'Available for a permanent role from September 2026. An opportunity, a question, or simply the urge to talk product and AI? Drop me a line.',
    emailLabel: 'Email',
    phoneLabel: 'Phone',
    locationLabel: 'Location',
    linkedinLabel: 'LinkedIn',
    email: 'aya.ouerradi26@gmail.com',
    phone: '+33 6 44 04 54 48',
    location: 'France',
    linkedin: 'linkedin.com/in/ayaouerradi',
    linkedinHref: 'https://www.linkedin.com/in/ayaouerradi',
    cta: 'Send an email',
    availability: 'Replies within 24 h',
  },

  footer: {
    built: 'Designed and built with care',
    rights: 'All rights reserved.',
    backToTop: 'Back to top',
  },
}

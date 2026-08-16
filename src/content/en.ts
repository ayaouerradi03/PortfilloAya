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
    availability: 'Available Immediately',
    name: 'Aya Ouerradi',
    role: 'AI Product Owner',
    taglineLead: 'I turn user needs and business challenges',
    taglineAccent: 'into product decisions.',
    intro:
      'PSPO II certified Product Owner with 2+ years of experience driving digital and AI products. I work across the full journey — from discovery to continuous improvement — covering Customer Journey mapping, backlog prioritisation, business/tech coordination and product performance tracking.',
    primaryCta: 'Explore my journey',
    secondaryCta: 'Get in touch',
    stats: [
      { value: '2+', label: 'years in product' },
      { value: 'PSPO II', label: 'Scrum.org certified' },
      { value: 'SAFe', label: 'agile at scale' },
      { value: '3', label: 'languages spoken' },
    ],
  },

  heroCard: {
    availabilityLabel: 'Availability',
    availabilityValue: 'Immediately',
    focusAreas: ['Product Ownership', 'Agile / Scrum', 'SAFe', 'V-Model', 'AI products'],
  },

  about: {
    eyebrow: 'Profile',
    title: 'Understand what users actually need. Build what matters, to the standard it deserves.',
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
    presentLabel: 'Current role',
    missionsLabel: (n: number) => `${n} key missions`,
    toolsLabel: 'Environment & tools',
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
      context: {
        body: [
          'As Product Owner for Data & AI within a Data/AI hub, I work alongside several Product Owners on an Artificial Intelligence platform structured around multiple streams: Agentic AI, Edge AI, Classical ML, Core, AWS/Azure and RPA.',
          'I work within a cross-functional team made up of a Tech Lead, a Scrum Master, three Data Engineers and an AI Architect, in an environment organised around the SAFe Agile framework.',
        ],
        toolGroups: [
          {
            label: 'Product methods & practices',
            items: ['SAFe', 'Scrum', 'Agile', 'Design Thinking', 'Customer Journey Mapping', 'PI Planning'],
          },
          {
            label: 'Product & collaboration',
            items: ['Jira', 'Confluence', 'Miro', 'Figma', 'iObeya'],
          },
          {
            label: 'Data, Cloud & AI',
            items: ['Databricks', 'Azure', 'AWS', 'SQL', 'GitHub'],
          },
          {
            label: 'Data & reporting',
            items: ['Power BI', 'Excel', 'PowerPoint'],
          },
          {
            label: 'Automation',
            items: ['Power Automate'],
          },
        ],
      },
      tasks: [
        {
          id: 'sch-ownership',
          icon: 'target',
          tag: 'Product Ownership',
          title: 'Product Ownership & backlog management',
          bullets: [
            'Managing and prioritising the product backlog based on user needs, business challenges and product objectives.',
            'Writing, clarifying and prioritising Features, User Stories and Epics.',
            'Defining acceptance criteria to clarify expectations and validation conditions for features.',
            'Contributing to building and evolving the product roadmap alongside other Product Owners, Product Managers and cross-functional teams.',
            'Arbitrating and prioritising topics based on user value, business value, effort and technical constraints, notably using methods such as WSJF, MoSCoW and the Value / Effort matrix.',
            'Regular exchanges with technical teams to clarify needs, refine features and prepare topics before they enter the sprints.',
          ],
        },
        {
          id: 'sch-journey',
          icon: 'compass',
          tag: 'Customer Journey',
          title: 'Customer Journey & user understanding',
          bullets: [
            'Conducting interviews and workshops with different user personas to understand their usage, needs, frustrations and overall experience of the platform.',
            'Analysing the end-to-end user journey to identify key steps, friction points and areas for improving the platform experience.',
            'Building and maintaining Customer Journey Maps based on feedback and insights gathered from users.',
            'Identifying and qualifying pain points, needs and improvement opportunities.',
            'Collaborating with Product Owners, the AI Architect and the Tech Lead to explore possible solutions, assess technical feasibility and identify the most relevant responses.',
            'Turning user research insights into product opportunities, features and backlog items.',
            'Prioritising identified opportunities based on user impact, business value, feasibility and effort.',
            'Setting up a continuous feedback loop between users and product teams to track evolving needs and continuously improve the platform.',
          ],
        },
        {
          id: 'sch-safe',
          icon: 'flow',
          tag: 'Delivery & SAFe',
          title: 'Delivery & coordination in a SAFe environment',
          bullets: [
            'Active participation in SAFe / Agile ceremonies: PI Planning, Sprint Planning, Daily, Sprint Review and Retrospective.',
            'Contributing to Program Increment preparation and aligning product priorities with PI objectives.',
            'Daily collaboration with Data, AI, architecture and engineering teams.',
            'Coordinating with the various Product Owners and stakeholders working across the platform’s streams.',
            'Tracking Feature and User Story progress throughout the delivery cycle.',
            'Clarifying requirements and supporting teams during development to ease decision-making and prevent blockers.',
            'Contributing to aligning user needs, business objectives, technical constraints and PI commitments.',
          ],
        },
        {
          id: 'sch-platform',
          icon: 'refresh',
          tag: 'Continuous improvement',
          title: 'Continuous improvement & product experimentation',
          bullets: [
            'Regularly collecting and analysing user feedback to identify priority platform improvements.',
            'Organising feedback and testing sessions with users on new features and product changes.',
            'Taking part in testing new AI models and features before wider rollout.',
            'Coordinating experiments and A/B testing strategies to compare different approaches.',
            'Analysing results and feedback to identify areas for improvement and new product opportunities.',
            'Feeding learnings from experiments and user feedback back into the backlog and upcoming iterations.',
          ],
        },
        {
          id: 'sch-kpi',
          icon: 'chart',
          tag: 'Performance',
          title: 'Product performance & KPIs',
          bullets: [
            'Defining and tracking product KPIs to measure platform usage and delivered value.',
            'Monitoring adoption, engagement and user satisfaction indicators.',
            'Factoring in AI model performance indicators in collaboration with the relevant teams.',
            'Building and maintaining analytics dashboards to track key indicators over time.',
            'Analysing usage data to identify features to improve, evolve or prioritise.',
            'Using KPIs and qualitative feedback to inform product decisions and measure the impact of shipped changes.',
          ],
        },
        {
          id: 'sch-governance',
          icon: 'shield',
          tag: 'Governance',
          title: 'Data / AI governance & model lifecycle',
          bullets: [
            'Contributing to framing data quality and governance topics used within the platform.',
            'Taking part in access management, documentation and Data/AI governance topics.',
            'Factoring in GDPR and data protection requirements across product activities.',
            'Raising participants’ awareness of GDPR and data-use considerations during interviews, workshops and user research activities.',
            'Collaborating with Data Science / Machine Learning teams on model lifecycle.',
            'Tracking, at Product Owner level, the different stages of the cycle: validation, deployment, monitoring and retraining.',
            'Contributing to embedding quality, compliance and governance constraints from the earliest stage of defining product needs.',
          ],
        },
        {
          id: 'sch-vendor',
          icon: 'handshake',
          tag: 'Vendor & support',
          title: 'Vendor management, communication & user support',
          bullets: [
            'Tracking the Databricks vendor contract, its commitments and renewal deadlines.',
            'Coordinating with procurement, technical teams and internal stakeholders on vendor-related topics.',
            'Communicating new features, changes and platform updates to users and stakeholders.',
            'Presenting platform updates to the hub at every new Program Increment (PI).',
            'Supporting users in adopting and using the platform.',
            'Identifying, tracking and resolving issues encountered by users, in coordination with the relevant teams.',
            'Capitalising on reported issues to identify recurring product improvements and prevent them from happening again.',
          ],
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
      context: {
        body: [
          'Product Owner on an internal activity-management application built to centralise consultants’ operational management: day-rate (TJM) tracking, leave, client management and follow-up, invoicing and revenue calculation.',
          'I worked within a cross-functional team made up of two developers, a Tech Lead and a Designer, in an Agile setup, acting as the link between business needs, user experience and technical constraints.',
        ],
        toolGroups: [
          {
            label: 'Product & delivery',
            items: ['Jira', 'Confluence'],
          },
          {
            label: 'Design & collaboration',
            items: ['Figma'],
          },
          {
            label: 'Ways of working',
            items: ['Agile', 'Scrum', 'Kanban'],
          },
          {
            label: 'Product management',
            items: ['Backlog', 'User Stories', 'Roadmap', 'KPIs', 'AS-IS / TO-BE'],
          },
        ],
      },
      tasks: [
        {
          id: 'akm-ownership',
          icon: 'target',
          tag: 'Product Ownership',
          title: 'Product Ownership & Agile delivery',
          bullets: [
            'Managing and prioritising the product backlog based on business needs, user requests and company priorities.',
            'Writing and clarifying User Stories and defining acceptance criteria before they enter the sprints.',
            'Breaking business needs down into features the development team can understand and act on.',
            'Organising and tracking sprints with the technical team.',
            'Facilitating and taking part in the core Agile ceremonies: Sprint Planning, Daily, Sprint Review and Retrospective.',
            'Tracking development progress and supporting the team in clarifying functional needs.',
            'Functional validation of changes before they’re released to users.',
            'Managing adjustments and backlog reprioritisation across iterations.',
          ],
        },
        {
          id: 'akm-vision',
          icon: 'compass',
          tag: 'Product vision',
          title: 'Product vision & roadmap',
          bullets: [
            'Contributing to the ERP’s product vision based on operational needs and company objectives.',
            'Identifying issues users faced in their day-to-day activities.',
            'Translating business needs and user pain points into product improvement opportunities.',
            'Contributing to building and evolving the product roadmap.',
            'Prioritising features based on business value, user impact, effort and technical feasibility.',
            'Arbitrating between new needs, functional improvements, technical debt and constraints.',
            'Regular alignment with leadership and relevant teams to keep business objectives and ERP evolutions consistent.',
          ],
        },
        {
          id: 'akm-erp',
          icon: 'model',
          tag: 'ERP evolution',
          title: 'Evolving an activity-management ERP',
          bullets: [
            'Gathering and analysing needs across the different processes covered by the internal ERP.',
            'Designing and evolving features related to consultant management and day-rate (TJM) tracking.',
            'Improving leave-management and administrative-tracking processes.',
            'Optimising client-management and follow-up journeys.',
            'Tracking and improving invoicing features.',
            'Contributing to revenue calculation and tracking features.',
            'Identifying manual, repetitive or low-value tasks that could be simplified or automated.',
            'Contributing to centralising business processes and data within a single ERP to make activity management easier.',
          ],
        },
        {
          id: 'akm-collab',
          icon: 'users',
          tag: 'Collaboration',
          title: 'Requirements gathering & cross-functional collaboration',
          bullets: [
            'Engaging with users and business stakeholders to understand their needs, constraints and operational issues.',
            'Analysing existing processes before defining new features or changes.',
            'Working closely with the two developers, the Tech Lead and the Designer throughout the product cycle.',
            'Working with the Designer to turn functional needs into journeys and interfaces suited to real usage.',
            'Working with the Tech Lead and developers to assess technical feasibility, identify constraints and adjust proposed solutions.',
            'Coordinating with marketing and leadership to keep operational needs, user experience and business objectives aligned.',
            'Centralising, qualifying and arbitrating requests before they enter the backlog.',
          ],
        },
        {
          id: 'akm-web',
          icon: 'globe',
          tag: 'Website redesign',
          title: 'Website redesign',
          bullets: [
            'Taking part in the company website redesign with a product approach.',
            'Gathering and clarifying requirements from business, marketing and leadership teams.',
            'Identifying user expectations and the business objectives behind the new site.',
            'Working with the Designer on journeys, interfaces and user experience.',
            'Coordinating between business needs, design proposals and technical constraints.',
            'Following up on development and clarifying requirements with the technical team.',
            'Functional validation of deliverables and identifying necessary adjustments.',
            'Contributing to consistency between user experience, brand identity and conversion objectives.',
          ],
        },
        {
          id: 'akm-perf',
          icon: 'chart',
          tag: 'Performance',
          title: 'Performance tracking & KPIs',
          bullets: [
            'Identifying and tracking KPIs to evaluate the performance of digital products and journeys.',
            'Analysing indicators such as engagement, conversion and usage.',
            'Building and maintaining reports to track key indicators over time.',
            'Analysing results to identify features, journeys or steps that need improvement.',
            'Cross-referencing quantitative data with qualitative user feedback for a fuller picture of performance.',
            'Formulating improvement recommendations based on collected data.',
            'Using results to inform prioritisation decisions and trade-offs.',
          ],
        },
        {
          id: 'akm-improve',
          icon: 'refresh',
          tag: 'Continuous improvement',
          title: 'Continuous improvement & process optimisation',
          bullets: [
            'Analysing and mapping existing processes (AS-IS) to understand how business journeys actually worked and identify friction points.',
            'Identifying pain points, manual steps, duplication and low-value tasks encountered by users.',
            'Designing target journeys (TO-BE) to simplify processes and improve user experience.',
            'Comparing AS-IS / TO-BE to identify gaps and the functional changes needed in the ERP.',
            'Turning identified opportunities into features, User Stories and backlog items.',
            'Looking for opportunities to automate repetitive tasks and reduce manual work.',
            'Working with the Tech Lead and developers to assess the feasibility of target journeys and proposed automations.',
            'Regularly collecting user feedback after changes to check their effectiveness and identify further improvements.',
            'Progressively feeding learnings back into the backlog to evolve the ERP iteratively.',
          ],
        },
      ],
    },
  ],

  education: {
    eyebrow: 'Education',
    title: 'Business & project management: a dual expertise in service of value',
    subtitle: 'Project management and marketing: understanding value before building it.',
    items: [
      {
        id: 'neoma',
        school: 'NEOMA Business School',
        degree: 'MSc Project Management',
        period: '2025 – 2026',
        detail:
          'Agile / Scrum and V-Model project management, PMI / PRINCE2 methods, planning and steering costs, timelines and risks, stakeholder coordination, reporting, project communication and team management in complex, international environments.',
      },
      {
        id: 'urca',
        school: 'University of Reims Champagne-Ardenne',
        degree: 'Master’s in Marketing & Sales — Communication track',
        period: '2023 – 2025',
        detail:
          'Marketing strategy & customer orientation, market research and consumer behaviour analysis, segmentation and positioning, brand strategy and communication, customer experience, performance management and marketing decision support.',
      },
    ],
  },

  certifications: {
    eyebrow: 'Certifications',
    title: 'Certifications & expertise',
    subtitle:
      'Product Ownership, project management, Cloud & AI: certified skills, continuously growing.',
    items: [
      {
        id: 'pspo2',
        name: 'PSPO II — Professional Scrum Product Owner II',
        shortName: 'PSPO II',
        issuer: 'Scrum.org',
        status: 'earned',
        statusLabel: 'Earned',
        credentialUrl:
          'https://www.credly.com/badges/c3cd5d84-e5b7-4e56-bcb8-40edca3a524d/linked_in_profile',
      },
      {
        id: 'az900',
        name: 'Microsoft Azure Fundamentals — AZ-900',
        shortName: 'AZ-900',
        issuer: 'Microsoft Azure',
        status: 'earned',
        statusLabel: 'Earned',
        credentialUrl:
          'https://learn.microsoft.com/en-us/users/ayaouerradi-8231/credentials/605f2eeb5e491c1d',
      },
      {
        id: 'ai900',
        name: 'Microsoft Azure AI Fundamentals — AI-900',
        shortName: 'AI-900',
        issuer: 'Microsoft Azure',
        status: 'in-progress',
        statusLabel: 'In progress',
      },
      {
        id: 'prince2',
        name: 'PRINCE2',
        shortName: 'PRINCE2',
        issuer: 'PeopleCert',
        status: 'in-progress',
        statusLabel: 'In progress',
      },
    ],
  },

  skills: {
    eyebrow: 'Skills',
    title: 'Toolbox',
    subtitle:
      'Methods, frameworks and tools I use to understand needs, structure priorities, run delivery and measure value.',
    groups: [
      {
        id: 'po',
        label: 'Product Ownership & strategy',
        items: [
          'Product vision',
          'Roadmap',
          'Product Discovery',
          'Customer Journey Mapping',
          'Backlog',
          'User Stories',
          'Acceptance criteria',
          'Prioritisation',
          'MVP',
          'KPIs',
          'AS-IS / TO-BE',
        ],
      },
      {
        id: 'agile',
        label: 'Delivery & project management',
        items: [
          'Agile',
          'Scrum',
          'SAFe',
          'Kanban',
          'Lean',
          'V-Model',
          'PI Planning',
          'Risk management',
          'Quality management',
          'Change Management',
        ],
      },
      {
        id: 'data',
        label: 'Data, Cloud & reporting',
        items: ['Power BI', 'SQL', 'Databricks', 'Microsoft Azure', 'AWS', 'GitHub', 'Microsoft Office'],
      },
      {
        id: 'design',
        label: 'Collaboration, design & automation',
        items: [
          'Jira',
          'Confluence',
          'Figma',
          'Miro',
          'iObeya',
          'Power Automate',
          'Notion',
          'Trello',
          'MS Project',
        ],
      },
    ],
  },

  whyMe: {
    eyebrow: 'Working style',
    title: 'Why me?',
    subtitle:
      'Beyond methods and tools, it’s really a way of working: understanding fast, taking initiative, collaborating, and turning problems into concrete action.',
    items: [
      {
        id: 'autonomous',
        title: 'Autonomous & proactive',
        detail:
          'I can move forward independently, find the information I need and identify the right people to talk to without waiting for every answer to be handed to me. I take ownership of topics and make sure they keep moving.',
      },
      {
        id: 'initiative',
        title: 'Initiative',
        detail:
          'When I spot a problem, I don’t just note it — I act on it. I dig into its cause, reach out to the right people, suggest possible solutions and push the topic until it gets a concrete answer.',
      },
      {
        id: 'action',
        title: 'Action-oriented',
        detail:
          'In a product environment where needs and priorities shift fast, I like moving from analysis to action. I structure the information available, support decision-making and turn findings into concrete next steps.',
      },
      {
        id: 'value',
        title: 'User & value focused',
        detail:
          'I keep two questions in mind at all times: what problem are we actually trying to solve, and what value will we create? That lets me challenge requests and focus effort on what genuinely matters to users and the business.',
      },
      {
        id: 'bridge',
        title: 'At ease between Business & Tech',
        detail:
          'I’m comfortable with a wide range of stakeholders: business users, developers, Data Engineers, architects, designers or managers. My role is to connect user needs, business stakes and technical reality.',
      },
      {
        id: 'collaborative',
        title: 'Collaborative & quick to integrate',
        detail:
          'I settle into a new team quickly and connect easily with different profiles. I like listening to everyone’s expertise, sharing information and bringing the right people in at the right time to move forward together.',
      },
    ],
  },

  interests: {
    eyebrow: 'Beyond work',
    title: 'Outside the backlog',
    subtitle: 'Because there’s more to life than User Stories.',
    items: [
      {
        id: 'travel',
        icon: 'globe',
        title: 'Travel',
        detail: 'Discovering new cultures, new ways of working and new perspectives.',
      },
      {
        id: 'tech-ai',
        icon: 'model',
        title: 'Tech & AI',
        detail:
          'Trying out new tools, following trends and understanding how technology is reshaping how we work.',
      },
      {
        id: 'design',
        icon: 'spark',
        title: 'Creativity & design',
        detail:
          'I love visual worlds, well thought-out interfaces and anything that makes an experience more intuitive.',
      },
      {
        id: 'learning',
        icon: 'cap',
        title: 'Continuous learning',
        detail: 'Courses, certifications, reading and a constant curiosity about product, business and tech.',
      },
    ],
  },

  languages: {
    eyebrow: 'Languages',
    title: 'Languages',
    subtitle: 'Three languages to work with international teams and users.',
    items: [
      { id: 'fr', name: 'French', level: 'C2', note: 'Bilingual / working language' },
      { id: 'en', name: 'English', level: 'C1', note: 'Advanced professional' },
      { id: 'ar', name: 'Arabic', level: 'C2', note: 'Bilingual' },
    ],
  },

  contact: {
    eyebrow: 'Contact',
    title: 'Let’s build what’s next, together',
    body: 'Available immediately, full-time. An opportunity, a project to share, or simply the urge to talk product, digital transformation or AI? I’d love to discuss it.',
    emailLabel: 'Email',
    phoneLabel: 'Phone',
    locationLabel: 'Location',
    linkedinLabel: 'LinkedIn',
    email: 'aya.ouerradi26@gmail.com',
    phone: '+33 6 44 04 54 48',
    location: 'France',
    linkedin: 'linkedin.com/in/ayaouerradi',
    linkedinHref: 'https://www.linkedin.com/in/ayaouerradi',
    cta: 'Get in touch',
  },

  footer: {
    built: 'Designed and built with care',
    rights: 'All rights reserved.',
    backToTop: 'Back to top',
  },
}

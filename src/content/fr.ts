import type { SiteContent } from './types'

export const fr: SiteContent = {
  meta: {
    title: 'Aya Ouerradi — Product Owner IA',
    description:
      'Portfolio d’Aya Ouerradi, Product Owner certifiée PSPO II spécialisée dans le pilotage de produits IA en environnement SAFe Agile.',
    langAttr: 'fr',
  },

  nav: {
    items: [
      { id: 'about', label: 'Profil' },
      { id: 'experience', label: 'Expérience' },
      { id: 'education', label: 'Formation' },
      { id: 'skills', label: 'Compétences' },
      { id: 'contact', label: 'Contact' },
    ],
    cta: 'Me contacter',
    menu: 'Ouvrir le menu',
    close: 'Fermer le menu',
    langSwitchLabel: 'Changer de langue',
  },

  hero: {
    availability: 'Disponible en CDI dès septembre 2026',
    greeting: 'Bonjour, je suis',
    name: 'Aya Ouerradi',
    role: 'Product Owner IA',
    tagline: 'À l’interface du métier et de la tech.',
    intro:
      'Product Owner certifiée PSPO II, avec plus de 2 ans d’expérience à l’interface métier / tech en environnement SAFe Agile. Spécialisée dans le pilotage de produits IA : vision produit, gestion du backlog, suivi des KPI et animation d’ateliers utilisateurs.',
    primaryCta: 'Découvrir mon parcours',
    secondaryCta: 'Me contacter',
    scrollHint: 'Faites défiler',
    stats: [
      { value: '2+', label: 'ans d’expérience produit' },
      { value: 'PSPO II', label: 'certification Scrum.org' },
      { value: 'SAFe', label: 'agilité à l’échelle' },
      { value: '3', label: 'langues courantes' },
    ],
  },

  about: {
    eyebrow: 'Profil',
    title: 'Transformer les besoins métiers en produits IA qui délivrent de la valeur',
    body: [
      'Product Owner certifiée PSPO II, j’évolue depuis plus de 2 ans à l’interface entre le métier et la technique, dans des environnements SAFe Agile où plusieurs équipes avancent au même rythme.',
      'Mon terrain de jeu : les produits d’Intelligence Artificielle. Je construis la vision, je priorise le backlog, j’anime les ateliers utilisateurs et je pilote les KPI qui prouvent l’impact business — de la découverte du besoin jusqu’au monitoring des modèles en production.',
      'Disponible en CDI dès septembre 2026, à la recherche d’une équipe produit ambitieuse où l’IA sert une vraie valeur d’usage.',
    ],
    highlightsTitle: 'Ce que j’apporte',
    highlights: [
      {
        title: 'Vision & priorisation',
        detail:
          'Roadmap produit, Epics et User Stories arbitrés par la valeur métier plutôt que par le volume de demandes.',
      },
      {
        title: 'Agilité à l’échelle',
        detail:
          'PI Planning, Sprint Review, Daily, Rétrospective : je fais tourner le rituel SAFe et je coordonne les équipes autour d’un cap commun.',
      },
      {
        title: 'Culture data & IA',
        detail:
          'Qualité des données, RGPD, cycle de vie MLOps et A/B testing : je parle le langage des équipes Data Science.',
      },
      {
        title: 'Écoute utilisateur',
        detail:
          'Ateliers, mapping de parcours et boucle de feedback continue pour garder le produit ancré dans le réel.',
      },
    ],
  },

  experience: {
    eyebrow: 'Parcours',
    title: 'Expérience professionnelle',
    subtitle:
      'Deux alternances, un même fil conducteur : faire avancer un produit avec méthode, mesure et écoute utilisateur.',
    journeyLabel: 'Ligne de parcours',
    presentLabel: 'En poste',
    missionsLabel: (n: number) => `${n} missions clés`,
  },

  experiences: [
    {
      id: 'schneider',
      company: 'Schneider Electric',
      role: 'Product Owner AI',
      contract: 'Alternance',
      location: 'Grenoble, France',
      period: '2025 – Présent',
      summary:
        'Pilotage d’une plateforme d’Intelligence Artificielle interne au sein d’un hub Data/IA, dans un cadre SAFe Agile.',
      tasks: [
        {
          id: 'sch-journey',
          icon: 'compass',
          tag: 'Discovery',
          title: 'Pilotage du Customer Journey',
          detail:
            'Animation d’ateliers utilisateurs et mise à jour du mapping des parcours clients pour garantir l’alignement entre les besoins métiers et les objectifs produit.',
          keywords: ['Ateliers utilisateurs', 'Journey mapping', 'Alignement métier'],
        },
        {
          id: 'sch-safe',
          icon: 'flow',
          tag: 'Agilité à l’échelle',
          title: 'Conduite de projets IA en cadre SAFe Agile',
          detail:
            'Participation active aux cérémonies Scrum — PI Planning, Sprint Review, Daily, Rétrospective — et coordination entre les équipes impliquées.',
          keywords: ['PI Planning', 'Sprint Review', 'Rétrospective', 'Coordination'],
        },
        {
          id: 'sch-platform',
          icon: 'refresh',
          tag: 'Amélioration continue',
          title: 'Amélioration continue de la plateforme IA',
          detail:
            'Mise en place d’une boucle de feedback continue avec les utilisateurs internes pour prioriser les évolutions, tester les nouveaux modèles et renforcer la valeur business de la solution.',
          keywords: ['Boucle de feedback', 'Priorisation', 'Test de modèles'],
        },
        {
          id: 'sch-comms',
          icon: 'megaphone',
          tag: 'Communication',
          title: 'Communication produit',
          detail:
            'Communication des nouveautés de la plateforme IA auprès du reste du hub à chaque nouveau Program Increment.',
          keywords: ['Release communication', 'Program Increment', 'Évangélisation'],
        },
        {
          id: 'sch-ownership',
          icon: 'target',
          tag: 'Vision produit',
          title: 'Product Ownership & vision produit',
          detail:
            'Gestion du backlog, définition et priorisation des User Stories et Epics, participation à la roadmap produit IA en lien avec les Product Managers et les équipes transverses.',
          keywords: ['Backlog', 'User Stories', 'Epics', 'Roadmap'],
        },
        {
          id: 'sch-vendor',
          icon: 'handshake',
          tag: 'Fournisseurs',
          title: 'Gestion des contrats fournisseurs',
          detail:
            'Pilotage du contrat provider Databricks : suivi des engagements, renouvellements et coordination avec les équipes achats et techniques.',
          keywords: ['Databricks', 'Suivi contractuel', 'Achats'],
        },
        {
          id: 'sch-governance',
          icon: 'shield',
          tag: 'Gouvernance',
          title: 'Gouvernance Data / IA',
          detail:
            'Contribution au cadrage de la qualité des données, à la gestion des accès, à la sensibilisation RGPD et à la documentation.',
          keywords: ['Qualité des données', 'Gestion des accès', 'RGPD', 'Documentation'],
        },
        {
          id: 'sch-mlops',
          icon: 'model',
          tag: 'MLOps',
          title: 'Cycle de vie MLOps (niveau PO)',
          detail:
            'Cadrage du cycle de vie des modèles avec les équipes Data Science et Machine Learning : validation, monitoring et retraining.',
          keywords: ['Validation', 'Monitoring', 'Retraining'],
        },
        {
          id: 'sch-ab',
          icon: 'flask',
          tag: 'Expérimentation',
          title: 'A/B Testing & expérimentation',
          detail:
            'Coordination des stratégies de tests, mesure de l’impact et améliorations itératives des fonctionnalités.',
          keywords: ['A/B Testing', 'Mesure d’impact', 'Itération'],
        },
        {
          id: 'sch-kpi',
          icon: 'chart',
          tag: 'Performance',
          title: 'Pilotage de la performance',
          detail:
            'Définition et suivi des KPI produit — engagement, satisfaction utilisateur, performance des modèles IA, taux d’adoption — et mise en place de tableaux de bord analytiques pour mesurer l’impact business.',
          keywords: ['KPI produit', 'Taux d’adoption', 'Dashboards', 'Impact business'],
        },
      ],
    },
    {
      id: 'akm',
      company: 'AKM Technologies',
      role: 'Product Owner',
      contract: 'Alternance',
      location: 'Paris, France',
      period: '2024 – 2025',
      summary:
        'Pilotage produit de bout en bout sur un périmètre digital, du recueil du besoin jusqu’à la mesure de la performance.',
      tasks: [
        {
          id: 'akm-delivery',
          icon: 'board',
          tag: 'Delivery',
          title: 'Pilotage produit & delivery agile (Scrum / Kanban)',
          detail:
            'Définition et priorisation du backlog, rédaction des User Stories, gestion des sprints et animation des rituels agiles : sprint planning, reviews et rétrospectives.',
          keywords: ['Scrum', 'Kanban', 'Backlog', 'Sprints'],
        },
        {
          id: 'akm-vision',
          icon: 'target',
          tag: 'Vision produit',
          title: 'Vision produit & roadmap',
          detail:
            'Contribution à la définition de la vision produit, identification des besoins utilisateurs et alignement avec les objectifs business.',
          keywords: ['Vision', 'Roadmap', 'Besoins utilisateurs'],
        },
        {
          id: 'akm-web',
          icon: 'globe',
          tag: 'Projet',
          title: 'Refonte du site web (approche produit)',
          detail:
            'Recueil des besoins métiers, coordination avec l’équipe technique, suivi des développements et validation des livrables.',
          keywords: ['Refonte web', 'Recueil du besoin', 'Validation'],
        },
        {
          id: 'akm-collab',
          icon: 'users',
          tag: 'Collaboration',
          title: 'Collaboration transverse',
          detail:
            'Travail étroit avec les équipes techniques, marketing et la direction pour assurer la cohérence produit et maximiser la valeur délivrée.',
          keywords: ['Tech', 'Marketing', 'Direction'],
        },
        {
          id: 'akm-perf',
          icon: 'chart',
          tag: 'Performance',
          title: 'Analyse de la performance',
          detail:
            'Suivi des KPI produit — engagement, conversion, performance — reporting et recommandations d’amélioration continue.',
          keywords: ['KPI', 'Conversion', 'Reporting'],
        },
        {
          id: 'akm-innov',
          icon: 'spark',
          tag: 'Innovation',
          title: 'Amélioration continue & innovation',
          detail:
            'Veille sur les tendances digitales et les outils du marché pour optimiser l’expérience utilisateur et la stratégie produit.',
          keywords: ['Veille', 'UX', 'Stratégie produit'],
        },
      ],
    },
  ],

  education: {
    eyebrow: 'Formation',
    title: 'Un socle business, une spécialisation projet',
    subtitle: 'Management de projet et marketing : comprendre la valeur avant de la construire.',
    items: [
      {
        id: 'neoma',
        school: 'NEOMA Business School',
        degree: 'MSc Management de Projet',
        period: '2025 – 2026',
        detail:
          'Pilotage de projets complexes, gouvernance, gestion des parties prenantes et création de valeur.',
      },
      {
        id: 'urca',
        school: 'Université de Reims Champagne-Ardenne',
        degree: 'Master Marketing Vente — Parcours Communication',
        period: '2023 – 2025',
        detail:
          'Stratégie marketing, compréhension des besoins clients et communication produit.',
      },
    ],
  },

  certifications: {
    eyebrow: 'Certifications',
    title: 'Certifications',
    subtitle: 'Product Ownership et cloud / IA, validés par les organismes de référence.',
    items: [
      {
        id: 'pspo2',
        name: 'PSPO II — Professional Scrum Product Owner II',
        issuer: 'Scrum.org',
        status: 'earned',
        statusLabel: 'Obtenue',
      },
      {
        id: 'az900',
        name: 'Microsoft Azure Fundamentals AZ-900',
        issuer: 'Microsoft',
        status: 'earned',
        statusLabel: 'Obtenue',
      },
      {
        id: 'ai900',
        name: 'Microsoft Azure AI Fundamentals',
        issuer: 'Microsoft',
        status: 'in-progress',
        statusLabel: 'En cours',
      },
    ],
  },

  skills: {
    eyebrow: 'Compétences',
    title: 'Boîte à outils',
    subtitle: 'Les méthodes et les outils que j’utilise au quotidien pour faire avancer un produit.',
    groups: [
      {
        id: 'po',
        label: 'Product Ownership & Management',
        items: [
          'Roadmap Produit',
          'Backlog',
          'User Stories',
          'MVP',
          'Product Discovery',
          'Gestion de la valeur',
          'Priorisation',
          'KPI',
          'Collaboration interdisciplinaire',
        ],
      },
      {
        id: 'agile',
        label: 'Méthodologies Agiles',
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
        label: 'Data & outils analytiques',
        items: ['Power BI', 'GitHub', 'Pack Office'],
      },
      {
        id: 'design',
        label: 'Design & collaboration',
        items: ['Figma', 'Miro', 'LaTeX', 'Power Automate', 'iObeya'],
      },
    ],
  },

  languages: {
    eyebrow: 'Langues',
    title: 'Langues',
    subtitle: 'Trois langues pour travailler avec des équipes et des utilisateurs internationaux.',
    items: [
      {
        id: 'fr',
        name: 'Français',
        level: 'C2',
        score: 100,
        note: 'Bilingue / langue de travail',
      },
      { id: 'en', name: 'Anglais', level: 'C1', score: 85, note: 'Professionnel avancé' },
      { id: 'ar', name: 'Arabe', level: 'C2', score: 100, note: 'Bilingue' },
    ],
  },

  contact: {
    eyebrow: 'Contact',
    title: 'Construisons le prochain produit ensemble',
    body: 'Disponible en CDI dès septembre 2026. Une opportunité, une question ou simplement l’envie d’échanger sur le produit et l’IA ? Écrivez-moi.',
    emailLabel: 'Email',
    phoneLabel: 'Téléphone',
    locationLabel: 'Localisation',
    linkedinLabel: 'LinkedIn',
    email: 'aya.ouerradi26@gmail.com',
    phone: '+33 6 44 04 54 48',
    location: 'France',
    linkedin: 'linkedin.com/in/ayaouerradi',
    linkedinHref: 'https://www.linkedin.com/in/ayaouerradi',
    cta: 'Envoyer un email',
    availability: 'Réponse sous 24 h',
  },

  footer: {
    built: 'Conçu et développé avec soin',
    rights: 'Tous droits réservés.',
    backToTop: 'Retour en haut',
  },
}

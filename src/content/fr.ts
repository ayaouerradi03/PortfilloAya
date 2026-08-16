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
    availability: 'Disponible Immédiatement',
    name: 'Aya Ouerradi',
    role: 'Product Owner IA',
    taglineLead: 'Je transforme les besoins utilisateurs et les enjeux métier',
    taglineAccent: 'en décisions produit.',
    intro:
      'Product Owner certifiée PSPO II, avec plus de 2 ans d’expérience dans le pilotage de produits digitaux et IA. J’interviens de la discovery à l’amélioration continue, en passant par le Customer Journey, la priorisation du backlog, la coordination métier/tech et le suivi de la performance produit.',
    primaryCta: 'Découvrir mon parcours',
    secondaryCta: 'Me contacter',
    stats: [
      { value: '2+', label: 'ans d’expérience produit' },
      { value: 'PSPO II', label: 'certification Scrum.org' },
      { value: 'SAFe', label: 'agilité à l’échelle' },
      { value: '3', label: 'langues courantes' },
    ],
  },

  heroCard: {
    availabilityLabel: 'Disponibilité',
    availabilityValue: 'Immédiatement',
    focusAreas: ['Product Ownership', 'Agile / Scrum', 'SAFe', 'Cycle en V', 'Produits IA'],
  },

  about: {
    eyebrow: 'Profil',
    title: 'Comprendre les vrais besoins utilisateurs. Construire ce qui compte, avec la qualité qu’il mérite.',
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
    presentLabel: 'En poste',
    missionsLabel: (n: number) => `${n} missions clés`,
    toolsLabel: 'Environnement & outils',
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
      context: {
        body: [
          'Product Owner Data & AI au sein d’un hub Data/IA, je travaille en collaboration avec plusieurs Product Owners sur une plateforme d’Intelligence Artificielle structurée autour de plusieurs streams : Agentic AI, Edge AI, Classical ML, Core, AWS/Azure et RPA.',
          'J’évolue au sein d’une équipe pluridisciplinaire composée d’un Tech Lead, d’un Scrum Master, de trois Data Engineers et d’un AI Architect, dans un environnement organisé selon le framework SAFe Agile.',
        ],
        toolGroups: [
          {
            label: 'Méthodes & pratiques produit',
            items: ['SAFe', 'Scrum', 'Agile', 'Design Thinking', 'Customer Journey Mapping', 'PI Planning'],
          },
          {
            label: 'Product & collaboration',
            items: ['Jira', 'Confluence', 'Miro', 'Figma', 'iObeya'],
          },
          {
            label: 'Data, Cloud & IA',
            items: ['Databricks', 'Azure', 'AWS', 'SQL', 'GitHub'],
          },
          {
            label: 'Data & pilotage',
            items: ['Power BI', 'Excel', 'PowerPoint'],
          },
          {
            label: 'Automatisation',
            items: ['Power Automate'],
          },
        ],
      },
      tasks: [
        {
          id: 'sch-ownership',
          icon: 'target',
          tag: 'Product Ownership',
          title: 'Product Ownership & gestion du backlog',
          bullets: [
            'Gestion et priorisation du backlog produit en fonction des besoins utilisateurs, des enjeux métier et des objectifs du produit.',
            'Rédaction, clarification et priorisation des Features, User Stories et Epics.',
            'Définition des critères d’acceptation afin de clarifier les attentes et les conditions de validation des fonctionnalités.',
            'Participation à la construction et à l’évolution de la roadmap produit en collaboration avec les autres Product Owners, Product Managers et équipes transverses.',
            'Arbitrage et priorisation des sujets selon la valeur utilisateur, la valeur business, l’effort et les contraintes techniques, notamment à l’aide de méthodes telles que WSJF, MoSCoW et la matrice Valeur / Effort.',
            'Échanges réguliers avec les équipes techniques afin de clarifier les besoins, affiner les fonctionnalités et préparer les sujets avant leur intégration dans les sprints.',
          ],
        },
        {
          id: 'sch-journey',
          icon: 'compass',
          tag: 'Customer Journey',
          title: 'Customer Journey & compréhension utilisateur',
          bullets: [
            'Conduite d’interviews et d’ateliers avec différents personas utilisateurs afin de comprendre leurs usages, leurs besoins, leurs frustrations et leur expérience globale de la plateforme.',
            'Analyse du parcours utilisateur de bout en bout afin d’identifier les étapes clés, les points de friction et les axes permettant d’améliorer l’expérience sur la plateforme.',
            'Construction et mise à jour des Customer Journey Maps à partir des retours et enseignements recueillis auprès des utilisateurs.',
            'Identification et qualification des pain points, besoins et opportunités d’amélioration.',
            'Collaboration avec les Product Owners, AI Architect et Tech Lead pour explorer les solutions possibles, analyser leur faisabilité technique et identifier les réponses les plus pertinentes.',
            'Transformation des enseignements issus de la recherche utilisateur en opportunités produit, fonctionnalités et sujets à intégrer au backlog.',
            'Priorisation des opportunités identifiées en fonction de leur impact utilisateur, valeur métier, faisabilité et effort.',
            'Mise en place d’une boucle de feedback continue entre les utilisateurs et les équipes produit afin de suivre l’évolution de leurs besoins et d’améliorer continuellement la plateforme.',
          ],
        },
        {
          id: 'sch-safe',
          icon: 'flow',
          tag: 'Delivery & SAFe',
          title: 'Delivery & coordination en environnement SAFe',
          bullets: [
            'Participation active aux cérémonies SAFe / Agile : PI Planning, Sprint Planning, Daily, Sprint Review et Rétrospective.',
            'Contribution à la préparation des Program Increments et à l’alignement des priorités produit avec les objectifs du PI.',
            'Collaboration quotidienne avec les équipes Data, AI, architecture et engineering.',
            'Coordination avec les différents Product Owners et parties prenantes intervenant sur les différents streams de la plateforme.',
            'Suivi de l’avancement des Features et User Stories tout au long du cycle de delivery.',
            'Clarification des besoins et accompagnement des équipes pendant le développement afin de faciliter la prise de décision et éviter les blocages.',
            'Contribution à l’alignement entre les besoins utilisateurs, les objectifs métier, les contraintes techniques et les engagements du PI.',
          ],
        },
        {
          id: 'sch-platform',
          icon: 'refresh',
          tag: 'Amélioration continue',
          title: 'Amélioration continue & expérimentation produit',
          bullets: [
            'Collecte et analyse régulière des retours utilisateurs afin d’identifier les améliorations prioritaires de la plateforme.',
            'Organisation de sessions de feedback et de tests avec les utilisateurs sur les nouvelles fonctionnalités et évolutions produit.',
            'Participation au test de nouveaux modèles et fonctionnalités IA avant leur généralisation.',
            'Coordination d’expérimentations et de stratégies d’A/B Testing afin de comparer différentes approches.',
            'Analyse des résultats et des retours afin d’identifier les points d’amélioration et nouvelles opportunités produit.',
            'Réintégration des enseignements issus des expérimentations et du feedback utilisateur dans le backlog et les prochaines itérations.',
          ],
        },
        {
          id: 'sch-kpi',
          icon: 'chart',
          tag: 'Performance',
          title: 'Performance produit & KPI',
          bullets: [
            'Définition et suivi des KPI produit permettant de mesurer l’utilisation et la valeur délivrée par la plateforme.',
            'Suivi d’indicateurs liés à l’adoption, l’engagement et la satisfaction utilisateur.',
            'Prise en compte des indicateurs liés à la performance des modèles IA en collaboration avec les équipes concernées.',
            'Mise en place et exploitation de tableaux de bord analytiques pour suivre l’évolution des principaux indicateurs.',
            'Analyse des données d’usage afin d’identifier les fonctionnalités à améliorer, faire évoluer ou prioriser.',
            'Utilisation des KPI et des retours qualitatifs pour alimenter les décisions produit et mesurer l’impact des évolutions déployées.',
          ],
        },
        {
          id: 'sch-governance',
          icon: 'shield',
          tag: 'Gouvernance',
          title: 'Gouvernance Data / IA & cycle de vie des modèles',
          bullets: [
            'Contribution au cadrage des sujets liés à la qualité et à la gouvernance des données utilisées au sein de la plateforme.',
            'Participation aux sujets de gestion des accès, documentation et gouvernance Data/IA.',
            'Prise en compte des exigences liées au RGPD et à la protection des données dans les activités produit.',
            'Sensibilisation des participants aux enjeux RGPD et à l’utilisation des données lors de la conduite d’interviews, workshops et activités de recherche utilisateur.',
            'Collaboration avec les équipes Data Science / Machine Learning autour du cycle de vie des modèles.',
            'Suivi, au niveau Product Owner, des différentes étapes du cycle : validation, mise en production, monitoring et retraining.',
            'Contribution à l’intégration des contraintes de qualité, conformité et gouvernance dès la définition des besoins produit.',
          ],
        },
        {
          id: 'sch-vendor',
          icon: 'handshake',
          tag: 'Fournisseurs & support',
          title: 'Gestion fournisseurs, communication & accompagnement utilisateurs',
          bullets: [
            'Suivi du contrat fournisseur Databricks, des engagements associés et des échéances de renouvellement.',
            'Coordination avec les équipes achats, techniques et parties prenantes internes sur les sujets liés au fournisseur.',
            'Communication des nouvelles fonctionnalités, évolutions et changements de la plateforme auprès des utilisateurs et parties prenantes.',
            'Présentation des nouveautés de la plateforme à chaque nouveau Program Increment (PI) auprès du hub.',
            'Accompagnement des utilisateurs dans l’adoption et l’utilisation de la plateforme.',
            'Identification, suivi et déblocage des problématiques rencontrées par les utilisateurs, en coordination avec les équipes concernées.',
            'Capitalisation sur les problèmes remontés afin d’identifier des améliorations produit récurrentes et éviter leur reproduction.',
          ],
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
      context: {
        body: [
          'Product Owner sur une application interne de pilotage d’activité, conçue pour centraliser la gestion opérationnelle des consultants : suivi des TJM, congés, gestion et relance clients, facturation et calcul des revenus.',
          'J’évoluais au sein d’une équipe pluridisciplinaire composée de deux développeurs, d’un Tech Lead et d’un Designer, avec une organisation en Agile, en assurant le lien entre les besoins métier, l’expérience utilisateur et les contraintes techniques.',
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
            label: 'Méthodes de travail',
            items: ['Agile', 'Scrum', 'Kanban'],
          },
          {
            label: 'Pilotage produit',
            items: ['Backlog', 'User Stories', 'Roadmap', 'KPI', 'AS-IS / TO-BE'],
          },
        ],
      },
      tasks: [
        {
          id: 'akm-ownership',
          icon: 'target',
          tag: 'Product Ownership',
          title: 'Product Ownership & delivery Agile',
          bullets: [
            'Gestion et priorisation du backlog produit en fonction des besoins métier, des demandes utilisateurs et des priorités de l’entreprise.',
            'Rédaction et clarification des User Stories et définition des critères d’acceptation avant leur intégration dans les sprints.',
            'Découpage des besoins métier en fonctionnalités compréhensibles et exploitables par l’équipe de développement.',
            'Organisation et suivi des sprints avec l’équipe technique.',
            'Animation et participation aux principaux rituels Agile : Sprint Planning, Daily, Sprint Review et Rétrospective.',
            'Suivi de l’avancement des développements et accompagnement de l’équipe pour clarifier les besoins fonctionnels.',
            'Validation fonctionnelle des évolutions avant leur mise à disposition des utilisateurs.',
            'Gestion des ajustements et repriorisation du backlog au fil des différentes itérations.',
          ],
        },
        {
          id: 'akm-vision',
          icon: 'compass',
          tag: 'Vision produit',
          title: 'Vision produit & roadmap',
          bullets: [
            'Contribution à la définition de la vision produit de l’ERP en fonction des besoins opérationnels et des objectifs de l’entreprise.',
            'Identification des problématiques rencontrées par les utilisateurs dans leurs activités quotidiennes.',
            'Traduction des besoins métier et des irritants utilisateurs en opportunités d’évolution produit.',
            'Participation à la construction et à l’évolution de la roadmap produit.',
            'Priorisation des fonctionnalités selon leur valeur métier, impact utilisateur, effort et faisabilité technique.',
            'Arbitrage entre nouveaux besoins, améliorations fonctionnelles, dette et contraintes techniques.',
            'Alignement régulier avec la direction et les équipes concernées afin de maintenir la cohérence entre les objectifs business et les évolutions de l’ERP.',
          ],
        },
        {
          id: 'akm-erp',
          icon: 'model',
          tag: 'Évolution ERP',
          title: 'Évolution d’un ERP de gestion d’activité',
          bullets: [
            'Recueil et analyse des besoins liés aux différents processus couverts par l’ERP interne.',
            'Conception et évolution des fonctionnalités liées à la gestion des consultants et au suivi des TJM.',
            'Amélioration des processus de gestion des congés et du suivi administratif.',
            'Optimisation des parcours liés à la gestion client et aux relances.',
            'Suivi et amélioration des fonctionnalités de facturation.',
            'Contribution aux fonctionnalités de calcul et de suivi des revenus.',
            'Identification des tâches manuelles, répétitives ou à faible valeur ajoutée pouvant être simplifiées ou automatisées.',
            'Contribution à la centralisation des processus et des données métier au sein d’un même ERP afin de faciliter le pilotage de l’activité.',
          ],
        },
        {
          id: 'akm-collab',
          icon: 'users',
          tag: 'Collaboration',
          title: 'Recueil des besoins & collaboration transverse',
          bullets: [
            'Conduite d’échanges avec les utilisateurs et parties prenantes métier afin de comprendre leurs besoins, contraintes et problématiques opérationnelles.',
            'Analyse des processus existants avant la définition de nouvelles fonctionnalités ou évolutions.',
            'Collaboration étroite avec les deux développeurs, le Tech Lead et le Designer tout au long du cycle produit.',
            'Travail avec le Designer pour transformer les besoins fonctionnels en parcours et interfaces adaptés aux usages.',
            'Collaboration avec le Tech Lead et les développeurs pour analyser la faisabilité technique, identifier les contraintes et ajuster les solutions envisagées.',
            'Coordination avec les équipes marketing et direction pour assurer l’alignement entre besoins opérationnels, expérience utilisateur et objectifs business.',
            'Centralisation, qualification et arbitrage des différentes demandes avant leur intégration dans le backlog.',
          ],
        },
        {
          id: 'akm-web',
          icon: 'globe',
          tag: 'Refonte web',
          title: 'Refonte du site web',
          bullets: [
            'Participation à la refonte du site web de l’entreprise avec une approche produit.',
            'Recueil et clarification des besoins auprès des équipes métier, marketing et direction.',
            'Identification des attentes utilisateurs et des objectifs business associés au nouveau site.',
            'Collaboration avec le Designer sur les parcours, interfaces et expérience utilisateur.',
            'Coordination entre les besoins métier, les propositions de design et les contraintes techniques.',
            'Suivi des développements et clarification des besoins auprès de l’équipe technique.',
            'Validation fonctionnelle des livrables et identification des ajustements nécessaires.',
            'Contribution à la cohérence entre expérience utilisateur, identité de l’entreprise et objectifs de conversion.',
          ],
        },
        {
          id: 'akm-perf',
          icon: 'chart',
          tag: 'Performance',
          title: 'Suivi de la performance & KPI',
          bullets: [
            'Identification et suivi des KPI permettant d’évaluer la performance des produits et parcours digitaux.',
            'Analyse d’indicateurs liés notamment à l’engagement, la conversion et l’utilisation.',
            'Construction et suivi de reportings permettant de visualiser l’évolution des principaux indicateurs.',
            'Analyse des résultats pour identifier les fonctionnalités, parcours ou étapes nécessitant une amélioration.',
            'Croisement des données quantitatives avec les retours qualitatifs des utilisateurs afin d’obtenir une vision plus complète de la performance.',
            'Formulation de recommandations d’amélioration à partir des données collectées.',
            'Utilisation des résultats pour alimenter les arbitrages et décisions de priorisation produit.',
          ],
        },
        {
          id: 'akm-improve',
          icon: 'refresh',
          tag: 'Amélioration continue',
          title: 'Amélioration continue & optimisation des processus',
          bullets: [
            'Analyse et cartographie des processus existants en AS-IS afin de comprendre le fonctionnement réel des parcours métier et d’identifier les points de friction.',
            'Identification des irritants, étapes manuelles, doublons et tâches à faible valeur ajoutée rencontrés par les utilisateurs.',
            'Conception des parcours cibles en TO-BE pour simplifier les processus et améliorer l’expérience utilisateur.',
            'Comparaison AS-IS / TO-BE afin d’identifier les écarts et les évolutions fonctionnelles nécessaires dans l’ERP.',
            'Transformation des opportunités identifiées en fonctionnalités, User Stories et évolutions à intégrer au backlog.',
            'Recherche d’opportunités d’automatisation des tâches répétitives et de réduction des interventions manuelles.',
            'Collaboration avec le Tech Lead et les développeurs pour étudier la faisabilité des parcours cibles et des automatisations envisagées.',
            'Collecte régulière des retours utilisateurs après les évolutions afin de vérifier leur efficacité et identifier de nouvelles améliorations.',
            'Intégration progressive des enseignements dans le backlog pour faire évoluer l’ERP de manière itérative et continue.',
          ],
        },
      ],
    },
  ],

  education: {
    eyebrow: 'Formation',
    title: 'Business & gestion de projet : une double expertise au service de la valeur',
    subtitle: 'Management de projet et marketing : comprendre la valeur avant de la construire.',
    items: [
      {
        id: 'neoma',
        school: 'NEOMA Business School',
        degree: 'MSc Management de Projet',
        period: '2025 – 2026',
        detail:
          'Management de projets Agile / Scrum et Cycle en V, méthodes PMI / PRINCE2, planification et pilotage des coûts, délais et risques, coordination des parties prenantes, reporting, communication projet et management d’équipes dans des environnements complexes et internationaux.',
      },
      {
        id: 'urca',
        school: 'Université de Reims Champagne-Ardenne',
        degree: 'Master Marketing Vente — Parcours Communication',
        period: '2023 – 2025',
        detail:
          'Stratégie marketing & orientation client, études de marché et analyse du comportement du consommateur, segmentation et positionnement, stratégie de marque et communication, expérience client, pilotage de la performance et aide à la décision marketing.',
      },
    ],
  },

  certifications: {
    eyebrow: 'Certifications',
    title: 'Certifications & expertises',
    subtitle:
      'Product Ownership, gestion de projet, Cloud & IA : des compétences certifiées et en développement continu.',
    items: [
      {
        id: 'pspo2',
        name: 'PSPO II — Professional Scrum Product Owner II',
        shortName: 'PSPO II',
        issuer: 'Scrum.org',
        status: 'earned',
        statusLabel: 'Obtenue',
        credentialUrl:
          'https://www.credly.com/badges/c3cd5d84-e5b7-4e56-bcb8-40edca3a524d/linked_in_profile',
      },
      {
        id: 'az900',
        name: 'Microsoft Azure Fundamentals — AZ-900',
        shortName: 'AZ-900',
        issuer: 'Microsoft Azure',
        status: 'earned',
        statusLabel: 'Obtenue',
        credentialUrl:
          'https://learn.microsoft.com/en-us/users/ayaouerradi-8231/credentials/605f2eeb5e491c1d',
      },
      {
        id: 'ai900',
        name: 'Microsoft Azure AI Fundamentals — AI-900',
        shortName: 'AI-900',
        issuer: 'Microsoft Azure',
        status: 'in-progress',
        statusLabel: 'En cours',
      },
      {
        id: 'prince2',
        name: 'PRINCE2',
        shortName: 'PRINCE2',
        issuer: 'PeopleCert',
        status: 'in-progress',
        statusLabel: 'En cours',
      },
    ],
  },

  skills: {
    eyebrow: 'Compétences',
    title: 'Boîte à outils',
    subtitle:
      'Méthodes, frameworks et outils que j’utilise pour comprendre les besoins, structurer les priorités, piloter le delivery et mesurer la valeur.',
    groups: [
      {
        id: 'po',
        label: 'Product Ownership & stratégie produit',
        items: [
          'Vision produit',
          'Roadmap',
          'Product Discovery',
          'Customer Journey Mapping',
          'Backlog',
          'User Stories',
          'Critères d’acceptation',
          'Priorisation',
          'MVP',
          'KPI',
          'AS-IS / TO-BE',
        ],
      },
      {
        id: 'agile',
        label: 'Delivery & gestion de projet',
        items: [
          'Agile',
          'Scrum',
          'SAFe',
          'Kanban',
          'Lean',
          'Cycle en V',
          'PI Planning',
          'Gestion des risques',
          'Management de la qualité',
          'Change Management',
        ],
      },
      {
        id: 'data',
        label: 'Data, Cloud & pilotage',
        items: ['Power BI', 'SQL', 'Databricks', 'Microsoft Azure', 'AWS', 'GitHub', 'Microsoft Office'],
      },
      {
        id: 'design',
        label: 'Collaboration, design & automatisation',
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
    eyebrow: 'Savoir-être',
    title: 'Pourquoi moi ?',
    subtitle:
      'Au-delà des méthodes et des outils, c’est surtout une façon de travailler : comprendre vite, prendre des initiatives, collaborer et transformer les problèmes en actions concrètes.',
    items: [
      {
        id: 'autonomous',
        title: 'Autonome & proactive',
        detail:
          'Je sais avancer de manière autonome, chercher l’information dont j’ai besoin et identifier les bons interlocuteurs sans attendre que toutes les réponses me soient données. Je prends en main les sujets et je veille à les faire progresser.',
      },
      {
        id: 'initiative',
        title: 'Esprit d’initiative',
        detail:
          'Quand je vois un problème, je ne reste pas dans le constat : je passe à l’action. Je cherche à comprendre sa cause, je contacte les bonnes personnes, je propose des pistes de solution et je fais avancer le sujet jusqu’à obtenir une réponse concrète.',
      },
      {
        id: 'action',
        title: 'Orientée action',
        detail:
          'Dans un environnement produit où les besoins et les priorités évoluent rapidement, j’aime passer de l’analyse à l’action. Je structure les informations disponibles, facilite la prise de décision et transforme les constats en prochaines étapes concrètes.',
      },
      {
        id: 'value',
        title: 'Orientée utilisateur & valeur',
        detail:
          'Je garde toujours deux questions en tête : quel problème cherchons-nous réellement à résoudre et quelle valeur allons-nous créer ? Cela me permet de challenger les demandes et de concentrer les efforts sur ce qui compte vraiment pour les utilisateurs et le business.',
      },
      {
        id: 'bridge',
        title: 'À l’aise entre Business & Tech',
        detail:
          'Je suis à l’aise avec des interlocuteurs aux profils très différents : utilisateurs métier, développeurs, Data Engineers, architectes, designers ou managers. Mon rôle est de faire le lien entre le besoin utilisateur, les enjeux business et la réalité technique.',
      },
      {
        id: 'collaborative',
        title: 'Collaborative & facilement intégrable',
        detail:
          'Je m’intègre rapidement dans une nouvelle équipe et je crée facilement du lien avec des profils différents. J’aime écouter les expertises de chacun, partager l’information et embarquer les bonnes personnes au bon moment pour avancer collectivement.',
      },
    ],
  },

  interests: {
    eyebrow: 'Côté perso',
    title: 'En dehors du backlog',
    subtitle: 'Parce qu’il n’y a pas que les User Stories dans la vie.',
    items: [
      {
        id: 'travel',
        icon: 'globe',
        title: 'Voyages',
        detail:
          'Découvrir de nouvelles cultures, de nouvelles façons de travailler et de nouveaux points de vue.',
      },
      {
        id: 'tech-ai',
        icon: 'model',
        title: 'Tech & IA',
        detail:
          'Tester de nouveaux outils, suivre les tendances et comprendre comment la technologie transforme les usages.',
      },
      {
        id: 'design',
        icon: 'spark',
        title: 'Création & design',
        detail:
          'J’aime les univers visuels, les interfaces bien pensées et tout ce qui rend une expérience plus intuitive.',
      },
      {
        id: 'learning',
        icon: 'cap',
        title: 'Apprentissage continu',
        detail:
          'Formations, certifications, lectures et curiosité constante autour du produit, du business et de la tech.',
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
        note: 'Bilingue / langue de travail',
      },
      { id: 'en', name: 'Anglais', level: 'C1', note: 'Professionnel avancé' },
      { id: 'ar', name: 'Arabe', level: 'C2', note: 'Bilingue' },
    ],
  },

  contact: {
    eyebrow: 'Contact',
    title: 'Construisons la suite ensemble',
    body: 'Disponible immédiatement en CDI. Une opportunité, un projet à partager ou simplement l’envie d’échanger autour du produit, de la transformation digitale ou de l’IA ? Je serai ravie d’en discuter.',
    emailLabel: 'Email',
    phoneLabel: 'Téléphone',
    locationLabel: 'Localisation',
    linkedinLabel: 'LinkedIn',
    email: 'aya.ouerradi26@gmail.com',
    phone: '+33 6 44 04 54 48',
    location: 'France',
    linkedin: 'linkedin.com/in/ayaouerradi',
    linkedinHref: 'https://www.linkedin.com/in/ayaouerradi',
    cta: 'Me contacter',
  },

  footer: {
    built: 'Conçu et développé avec soin',
    rights: 'Tous droits réservés.',
    backToTop: 'Retour en haut',
  },
}

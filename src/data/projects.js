export const projectsData = [
  {
    id: 'signature-electronique',
    title: 'Signature électronique',
    layout: 'web',
    tagline: 'Solution sécurisée pour signer et valider des documents en ligne avec une expérience web fluide.',
    heroImage: {
      src: '/images/sn1.png',
      alt: 'Aperçu web de la signature électronique',
    },
    galleryImages: [
      { src: '/images/sn2.png', alt: 'Formulaire de signature et validation' },
      { src: '/images/sn3.png', alt: 'Historique des documents signés' },
      { src: '/images/sn4.png', alt: 'Statut de signature en temps réel' },
      { src: '/images/sn5.png', alt: 'Vue des documents signés' },
      { src: '/images/sn6.png', alt: 'Tableau de bord des utilisateurs' },
    ],
    video: {
      poster: '/images/sn2.png',
      alt: 'Démonstration web du parcours de signature électronique',
      sources: [
        { src: '/images/sndi.mp4', type: 'video/mp4' },
      ],
    },
    context:
      'Plateforme web destinée à accélérer la signature de contrats et documents administratifs en offrant un flux clair et sécurisé.',
    role:
      'Lead développeuse front-end : intégration web, responsive design, sécurité et performance média.',
    features: [
      'Envoi et partage de documents sécurisés',
      'Suivi des statuts de signature en temps réel',
      'Authentification multi-facteurs et validation',
      'Archivage automatique et génération de PDF',
    ],
    stack: ['React', 'CSS web', 'API REST', 'JWT', 'Optimisation média'],
    result:
      'Gain de 40% sur le temps de validation et expérience web professionnelle pour les utilisateurs métiers.',
  },
  {
    id: 'app-bien-etre',
    title: 'App bien-être',
    layout: 'mobile',
    tagline: 'Application mobile de bien-être pour accompagner les routines quotidiennes et l’interaction intelligente.',
    heroImage: {
      src: '/images/d1.jpeg',
      alt: 'Aperçu mobile de l’application bien-être',
    },
    galleryImages: [
      { src: '/images/d2.jpeg', alt: 'Suivi des objectifs santé' },
      { src: '/images/d3.jpeg', alt: 'Suivi des objectifs santé' },
      { src: '/images/d4.jpeg', alt: 'Suivi des objectifs santé' },
      { src: '/images/d5.jpeg', alt: 'Section recommandations bien-être' },
      { src: '/images/d6.jpeg', alt: 'Visualisation des progrès' },
      { src: '/images/d7.jpeg', alt: 'Interface de méditation guidée' },
      { src: '/images/d8.jpeg', alt: 'Écran de conseils personnalisés' },
      { src: '/images/d9.jpeg', alt: 'Commandes rapides pour routines' },
      { src: '/images/d10.jpeg', alt: 'Alertes et notifications motivationnelles' },
    ],
    video: {
      poster: '/images/d2.jpeg',
      alt: 'Démonstration mobile principale de l’app bien-être',
      sources: [
        { src: '/images/dispositif1.mp4', type: 'video/mp4' },
      ],
    },
    secondaryVideo: {
      poster: '/images/d9.jpeg',
      alt: 'Interaction offline avec l’assistante IA',
      sources: [
        { src: '/images/off.mp4', type: 'video/mp4' },
      ],
      label: 'Interaction IA offline',
    },
    
    context:
      'Application mobile-first pensée pour cultiver le bien-être au quotidien : routines, suivi d’humeur et interaction assistée.',
    role:
      'Product designer et développeuse front-end : création de l’expérience mobile, parcours utilisateur et intégration média optimisée.',
    features: [
      'Création de routines personnalisées',
      'Suivi de l’humeur et des objectifs santé',
      'Assistante IA offline pour recommandations',
      'Contenus audio et coaching motivant',
    ],
    stack: ['React', 'HTML5', 'CSS mobile', 'API externe', 'UX mobile'],
    result:
      'Engagement augmenté avec un parcours mobile moderne et une interaction IA fluide.',
  },
];

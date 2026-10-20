export interface ServiceItem {
  id: string;
  iconName: 'Search' | 'Hammer' | 'Sparkles';
  title: string;
  text: string;
  tags: string[];
  linkText: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: 'fuites',
    iconName: 'Search',
    title: 'Recherche de Fuites',
    text: "Votre toit fuit ? On localise l'infiltration rapidement et on répare durablement pour éviter les dégâts.",
    tags: ['DIAGNOSTIC PRÉCIS', 'INTERVENTION RAPIDE', 'RÉPARATION DURABLE'],
    linkText: 'En savoir plus →',
  },
  {
    id: 'renovation',
    iconName: 'Hammer',
    title: 'Rénovation de Toiture',
    text: 'Tuiles cassées, toiture vieillissante ? On remet votre couverture en état pour des années de tranquillité.',
    tags: ['REMPLACEMENT TUILES', 'RÉFECTION COMPLÈTE', 'CHARPENTE'],
    linkText: 'En savoir plus →',
  },
  {
    id: 'demoussage',
    iconName: 'Sparkles',
    title: 'Démoussage & Traitement',
    text: 'Mousse, lichen, traces noires ? On nettoie en profondeur et on protège avec un hydrofuge biodégradable.',
    tags: ['NETTOYAGE HAUTE PRESSION', 'TRAITEMENT ANTI-MOUSSE', 'HYDROFUGE 10 ANS'],
    linkText: 'En savoir plus →',
  },
];

export interface ReviewItem {
  id: number;
  name: string;
  initial: string;
  location: string;
  date: string;
  rating: number;
  quote: string;
}

export const reviewsData: ReviewItem[] = [
  {
    id: 1,
    name: 'Jean-Pierre M.',
    initial: 'J',
    location: 'Aubenas (07200)',
    date: 'il y a 3 semaines',
    rating: 5,
    quote:
      'Travail impeccable du début à la fin. Le chantier était propre chaque soir. Ma toiture a retrouvé une seconde jeunesse. Je recommande vivement !',
  },
  {
    id: 2,
    name: 'Sophie L.',
    initial: 'S',
    location: 'Privas (07000)',
    date: 'il y a 1 mois',
    rating: 5,
    quote:
      "Intervention rapide pour une fuite urgente un dimanche. L'équipe a été rassurante et très efficace. Le devis était clair et sans surprise. Merci !",
  },
  {
    id: 3,
    name: 'Marc D.',
    initial: 'M',
    location: "Vallon-Pont-d'Arc (07150)",
    date: 'il y a 2 semaines',
    rating: 5,
    quote:
      "J'ai comparé 3 devis, c'est Protect Toiture que j'ai choisi pour leur honnêteté et leur transparence. Aucune vente forcée. Un vrai artisan de confiance.",
  },
  {
    id: 4,
    name: 'Catherine B.',
    initial: 'C',
    location: 'Villeneuve-de-Berg (07170)',
    date: 'il y a 5 semaines',
    rating: 5,
    quote:
      'Notre toiture avait 30 ans de mousse. Après le passage de Protect Toiture, on ne la reconnaît plus ! Produits écolos en plus, c\'est un vrai plus.',
  },
  {
    id: 5,
    name: 'Philippe R.',
    initial: 'P',
    location: 'Lavilledieu (07170)',
    date: 'il y a 2 mois',
    rating: 5,
    quote:
      "Très professionnel. Ils m'ont tout expliqué avant de commencer et le résultat est au-delà de mes attentes. La garantie 10 ans me rassure.",
  },
  {
    id: 6,
    name: 'Marie-Claire G.',
    initial: 'M',
    location: 'Lablachère (07230)',
    date: 'il y a 3 mois',
    rating: 5,
    quote:
      'Deuxième fois que je fais appel à eux. Toujours aussi sérieux et ponctuels. Mon voisin les a aussi contactés après avoir vu le résultat chez moi !',
  },
];

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const faqData: FaqItem[] = [
  {
    id: 'zone',
    question: "Quelle est votre zone d'intervention ?",
    answer:
      "Nous intervenons rapidement dans l'ensemble du département de l'Ardèche (07) ainsi que dans les secteurs limitrophes de la Drôme (Aubenas, Privas, Vallon-Pont-d'Arc, Montélimar, Ruoms, Le Teil, etc.). Le déplacement pour diagnostic et devis est 100% gratuit.",
  },
  {
    id: 'devis',
    question: "Comment se déroule un devis ?",
    answer:
      "Le processus est simple et transparent : après votre premier contact téléphonique ou par formulaire, nous convenons d'un créneau sous 24h à 48h. Nous venons inspecter votre toiture sur place, prenons les métrés exacts et vous remettons un devis détaillé, ferme et sans engagement.",
  },
  {
    id: 'produits',
    question: "Vos produits sont-ils dangereux pour l'environnement ?",
    answer:
      "Absolument pas. Nous utilisons exclusivement des produits professionnels 100% biodégradables, sans chlore agressif ni javel. Ils respectent parfaitement la structure de vos tuiles, vos espaces verts, vos animaux domestiques et les systèmes de récupération d'eau de pluie.",
  },
  {
    id: 'garantie',
    question: "Quelle garantie offrez-vous ?",
    answer:
      "Tous nos travaux de réfection, couverture et étanchéité sont couverts par notre Assurance Garantie Décennale (10 ans). De plus, nos traitements hydrofuges bénéficient d'une garantie d'efficacité longue durée assurant la protection hydrophobe de vos matériaux.",
  },
  {
    id: 'delai',
    question: "Quel est le délai d'intervention ?",
    answer:
      "Pour toute urgence (infiltration active, fuite sur plafond, tuiles arrachées par le vent), nous intervenons sous 24h en Ardèche. Pour les chantiers de rénovation globale ou d'entretien complet, nous nous adaptons à vos créneaux et respectons scrupuleusement les délais annoncés.",
  },
  {
    id: 'cout',
    question: "Combien coûte un démoussage de toiture en Ardèche ?",
    answer:
      "Le prix varie selon la surface de votre toiture, son état et le type de traitement nécessaire. En moyenne, comptez entre 15€ et 30€/m² pour un démoussage avec traitement hydrofuge. Le mieux est de nous appeler pour un devis gratuit et personnalisé.",
  },
  {
    id: 'urgence',
    question: "Intervenez-vous en urgence le week-end ?",
    answer:
      "Oui, nous disposons d'une permanence d'astreinte pour les interventions d'urgence et de mise en sécurité (bâchage temporaire, sécurisation de fuites) le samedi et le dimanche en cas de sinistre ou d'intempéries exceptionnelles.",
  },
];

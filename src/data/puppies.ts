export interface Puppy {
  id: string;
  name: string;
  breed: string;
  breedCategory: 'Cavapoo' | 'Mini Goldendoodle' | 'French Bulldog' | 'Toy Poodle';
  gender: 'Female' | 'Male';
  status: 'Available' | 'Reserved' | 'Coming Soon' | 'Adopted';
  dob: string;
  ageInWeeks: number;
  expectedWeight: string;
  color: string;
  personality: string[];
  description: string;
  image: string;
  gallery: string[];
  parents: {
    sireName: string;
    sireBreed: string;
    sireImage: string;
    damName: string;
    damBreed: string;
    damImage: string;
  };
  includedPerks: string[];
}

export const PUPPIES_DATA: Puppy[] = [
  {
    id: "luna",
    name: "Luna",
    breed: "F1b Cavapoo",
    breedCategory: "Cavapoo",
    gender: "Female",
    status: "Available",
    dob: "June 22, 2026",
    ageInWeeks: 8,
    expectedWeight: "12 - 15 lbs",
    color: "Ruby Red with White Chest Star",
    personality: ["Affectionate", "Gentle", "Cuddle Bug", "Quick Learner"],
    description:
      "Luna is an exceptionally sweet ruby Cavapoo puppy with a soft, teddy-bear coat and expressive eyes. She loves snuggling on laps and follows her human caregivers around our Greenville home.",
    image: "https://images.unsplash.com/photo-1591160690555-5debfba289f0?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1591160690555-5debfba289f0?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1560807707-8cc77767d783?auto=format&fit=crop&w=1200&q=80",
    ],
    parents: {
      sireName: "Duke",
      sireBreed: "Red Toy Poodle (9 lbs)",
      sireImage: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=800&q=80",
      damName: "Rosie",
      damBreed: "Cavalier King Charles Spaniel (14 lbs)",
      damImage: "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?auto=format&fit=crop&w=800&q=80",
    },
    includedPerks: [
      "Full Veterinary Health Exam & Certificate",
      "First Round Vaccinations & De-worming",
      "ISO Microchip Registration",
      "30-Day Trupanion Pet Health Insurance",
      "Scent Blanket from Mom & Littermates",
      "5 lb Bag of Royal Canin Puppy Food",
      "1-Year Genetic Health Guarantee",
    ],
  },
  {
    id: "milo",
    name: "Milo",
    breed: "F1 Mini Goldendoodle",
    breedCategory: "Mini Goldendoodle",
    gender: "Male",
    status: "Available",
    dob: "June 18, 2026",
    ageInWeeks: 8,
    expectedWeight: "18 - 22 lbs",
    color: "Golden Apricot",
    personality: ["Playful", "Confident", "Social", "Enthusiastic"],
    description:
      "Milo is an energetic, joyful Mini Goldendoodle puppy with soft wavy golden fur. He loves outdoor garden play sessions in our Greenville yard and gets along wonderfully with kids.",
    image: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=1200&q=80",
    ],
    parents: {
      sireName: "Teddy",
      sireBreed: "Miniature Poodle (12 lbs)",
      sireImage: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=800&q=80",
      damName: "Honey",
      damBreed: "Golden Retriever (45 lbs)",
      damImage: "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?auto=format&fit=crop&w=800&q=80",
    },
    includedPerks: [
      "Full Veterinary Health Exam & Certificate",
      "First Round Vaccinations & De-worming",
      "ISO Microchip Registration",
      "Scent Blanket from Mom & Littermates",
      "Starter Puppy Kit & Toys",
      "1-Year Genetic Health Guarantee",
    ],
  },
  {
    id: "bella",
    name: "Bella",
    breed: "Boutique French Bulldog",
    breedCategory: "French Bulldog",
    gender: "Female",
    status: "Reserved",
    dob: "May 30, 2026",
    ageInWeeks: 11,
    expectedWeight: "20 - 24 lbs",
    color: "Lilac Fawn",
    personality: ["Calm", "Expressive", "Loving", "Low Bark"],
    description:
      "Bella is a compact, adorable lilac fawn Frenchie with soft expressive bat ears and a serene temperament. She loves lounge afternoons and gentle belly rubs.",
    image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=1200&q=80",
    ],
    parents: {
      sireName: "Winston",
      sireBreed: "French Bulldog (22 lbs)",
      sireImage: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=800&q=80",
      damName: "Coco",
      damBreed: "French Bulldog (20 lbs)",
      damImage: "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?auto=format&fit=crop&w=800&q=80",
    },
    includedPerks: [
      "Full Vet Health Certificate",
      "Vaccination Record",
      "Microchipped",
      "1-Year Health Guarantee",
    ],
  },
  {
    id: "teddy",
    name: "Teddy",
    breed: "Purebred Toy Poodle",
    breedCategory: "Toy Poodle",
    gender: "Male",
    status: "Available",
    dob: "June 25, 2026",
    ageInWeeks: 7,
    expectedWeight: "8 - 10 lbs",
    color: "Deep Mahogany Red",
    personality: ["Smart", "Hypoallergenic", "Attentive", "Devoted"],
    description:
      "Teddy is a tiny red Toy Poodle with an exceptionally sharp mind and hypoallergenic curly coat. Perfect for owners looking for a low-shedding luxury companion.",
    image: "https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=1200&q=80",
    ],
    parents: {
      sireName: "Prince",
      sireBreed: "Toy Poodle (7 lbs)",
      sireImage: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=800&q=80",
      damName: "Belle",
      damBreed: "Toy Poodle (9 lbs)",
      damImage: "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?auto=format&fit=crop&w=800&q=80",
    },
    includedPerks: [
      "Vet Exam & Vaccinations",
      "Hypoallergenic Grooming Prep",
      "Microchip & Guarantee",
    ],
  },
  {
    id: "daisy",
    name: "Daisy",
    breed: "F1 Cavapoo",
    breedCategory: "Cavapoo",
    gender: "Female",
    status: "Coming Soon",
    dob: "Expected Aug 28, 2026",
    ageInWeeks: 0,
    expectedWeight: "10 - 14 lbs",
    color: "Cream & Blenheim",
    personality: ["Curious", "Sweet", "Family Focused"],
    description:
      "Daisy is part of our upcoming late-summer Cavapoo litter. She will be available for home visits starting mid-October 2026.",
    image: "https://images.unsplash.com/photo-1560807707-8cc77767d783?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1560807707-8cc77767d783?auto=format&fit=crop&w=1200&q=80",
    ],
    parents: {
      sireName: "Duke",
      sireBreed: "Red Toy Poodle",
      sireImage: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=800&q=80",
      damName: "Rosie",
      damBreed: "Cavalier King Charles",
      damImage: "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?auto=format&fit=crop&w=800&q=80",
    },
    includedPerks: [
      "Priority Waiting List Selection",
      "Weekly Video Updates",
      "Vet Certificate & Guarantee",
    ],
  },
  {
    id: "oliver",
    name: "Oliver",
    breed: "F1b Mini Goldendoodle",
    breedCategory: "Mini Goldendoodle",
    gender: "Male",
    status: "Adopted",
    dob: "March 10, 2026",
    ageInWeeks: 22,
    expectedWeight: "16 lbs",
    color: "Wavy Cream",
    personality: ["Gentle", "Therapy Potential", "Loving"],
    description:
      "Oliver was recently adopted by a wonderful family in Spartanburg, SC. See our Litters page for his full siblings coming soon!",
    image: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=1200&q=80",
    ],
    parents: {
      sireName: "Teddy",
      sireBreed: "Mini Poodle",
      sireImage: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=800&q=80",
      damName: "Honey",
      damBreed: "Goldendoodle",
      damImage: "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?auto=format&fit=crop&w=800&q=80",
    },
    includedPerks: ["Adopted & Thriving"],
  },
];

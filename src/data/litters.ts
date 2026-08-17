export interface Litter {
  id: string;
  litterName: string;
  breed: string;
  expectedDate: string;
  takeHomeDate: string;
  expectedWeightRange: string;
  expectedColors: string[];
  status: 'Planned' | 'Expected Soon' | 'Available' | 'Fully Reserved';
  totalSlots: number;
  reservedSlots: number;
  description: string;
  sire: {
    name: string;
    breed: string;
    weight: string;
    image: string;
  };
  dam: {
    name: string;
    breed: string;
    weight: string;
    image: string;
  };
}

export const LITTERS_DATA: Litter[] = [
  {
    id: "autumn-cavapoos-2026",
    litterName: "Autumn Spice Cavapoos",
    breed: "F1b Cavapoo (Toy/Mini)",
    expectedDate: "September 15, 2026",
    takeHomeDate: "November 10, 2026",
    expectedWeightRange: "11 - 15 lbs",
    expectedColors: ["Ruby Red", "Apricot White Star", "Blenheim"],
    status: "Expected Soon",
    totalSlots: 6,
    reservedSlots: 4,
    description:
      "Our flagship Cavapoo pairing between Duke and Rosie. Known for incredibly sweet temperaments, low-to-no shedding curly coats, and exceptional health histories.",
    sire: {
      name: "Duke",
      breed: "AKC Red Toy Poodle",
      weight: "9.5 lbs",
      image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=800&q=80",
    },
    dam: {
      name: "Rosie",
      breed: "AKC Cavalier King Charles Spaniel",
      weight: "14 lbs",
      image: "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?auto=format&fit=crop&w=800&q=80",
    },
  },
  {
    id: "winter-doodles-2026",
    litterName: "Winter Wonderland Mini Doodles",
    breed: "F1b Mini Goldendoodle",
    expectedDate: "October 20, 2026",
    takeHomeDate: "December 15, 2026",
    expectedWeightRange: "16 - 22 lbs",
    expectedColors: ["Teddy Bear Cream", "Warm Apricot", "Caramel"],
    status: "Planned",
    totalSlots: 6,
    reservedSlots: 2,
    description:
      "A gorgeous upcoming pairing designed for active families seeking therapy-grade temperaments and ultra-plush hypoallergenic coats.",
    sire: {
      name: "Teddy",
      breed: "AKC Miniature Poodle",
      weight: "12 lbs",
      image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=800&q=80",
    },
    dam: {
      name: "Honey",
      breed: "F1 Goldendoodle",
      weight: "26 lbs",
      image: "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?auto=format&fit=crop&w=800&q=80",
    },
  },
  {
    id: "spring-frenchies-2027",
    litterName: "Boutique Frenchie Heritage",
    breed: "French Bulldog",
    expectedDate: "January 10, 2027",
    takeHomeDate: "March 5, 2027",
    expectedWeightRange: "20 - 24 lbs",
    expectedColors: ["Lilac Fawn", "Blue Tan", "Cream"],
    status: "Planned",
    totalSlots: 5,
    reservedSlots: 1,
    description:
      "Exceptional lineage French Bulldogs focused on clear airways, solid structure, and loving indoor household temperaments.",
    sire: {
      name: "Winston",
      breed: "French Bulldog",
      weight: "22 lbs",
      image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=800&q=80",
    },
    dam: {
      name: "Coco",
      breed: "French Bulldog",
      weight: "20 lbs",
      image: "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?auto=format&fit=crop&w=800&q=80",
    },
  },
];

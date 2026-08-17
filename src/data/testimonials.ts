export interface Testimonial {
  id: string;
  customerName: string;
  location: string;
  puppyName: string;
  breed: string;
  quote: string;
  rating: number;
  date: string;
  avatar: string;
}

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: "1",
    customerName: "Sarah & Mark Jenkins",
    location: "Greenville, SC (Augusta Road)",
    puppyName: "Oliver (now Barnaby)",
    breed: "Cavapoo",
    quote:
      "From our very first conversation with Jameshia to picking up Barnaby in Greenville, the experience was transparent, caring, and professional. Barnaby slept through his first night and came pre-socialized. We could not recommend Petite Puppy Co. enough!",
    rating: 5,
    date: "May 2026",
    avatar: "https://images.unsplash.com/photo-1591160690555-5debfba289f0?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "2",
    customerName: "Elena Rostova",
    location: "Simpsonville, SC",
    puppyName: "Cleo",
    breed: "Mini Goldendoodle",
    quote:
      "Having researched breeders across Upstate SC for six months, Petite Puppy Co. stood out immediately. Their home nursery environment is spotless, and Jameshia sent weekly video updates of Cleo. She is the healthiest, happiest puppy our family has ever owned.",
    rating: 5,
    date: "April 2026",
    avatar: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "3",
    customerName: "Dr. David & Claire Sterling",
    location: "Spartanburg, SC",
    puppyName: "Winston Jr.",
    breed: "French Bulldog",
    quote:
      "As healthcare professionals, health screening and clean breeding environments were non-negotiable for us. Petite Puppy Co. exceeded every expectation. Our vet was blown away by Winston's health records and socialization.",
    rating: 5,
    date: "March 2026",
    avatar: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=400&q=80",
  },
];

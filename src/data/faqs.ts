export interface FAQItem {
  id: string;
  category: 'Inquiry & Process' | 'Puppy Health & Care' | 'Visits & Pickup' | 'Breeds & Litters';
  question: string;
  answer: string;
}

export const FAQS_DATA: FAQItem[] = [
  {
    id: "1",
    category: "Inquiry & Process",
    question: "How does the puppy inquiry and adoption process work?",
    answer:
      "Our process is designed to be warm, personal, and simple. First, submit an inquiry form specifying your puppy or litter of interest. Jameshia reviews your inquiry and schedules a brief 15-minute phone call to learn about your home and lifestyle. Once approved, you can place a deposit to secure your puppy or join our priority waiting list.",
  },
  {
    id: "2",
    category: "Visits & Pickup",
    question: "Where are you located and can we visit the puppies?",
    answer:
      "We are based in Greenville, South Carolina. To ensure the health, safety, and tranquility of our nursing mothers and young puppies, in-person nursery visits are scheduled exclusively for approved deposit holders after puppies reach 6 weeks of age. We also host live FaceTime video visits anytime with Jameshia!",
  },
  {
    id: "3",
    category: "Puppy Health & Care",
    question: "What health records and guarantees come with my puppy?",
    answer:
      "Every Petite Puppy Co. puppy goes home with a comprehensive veterinary health exam, up-to-date vaccinations, microchip registration, de-worming records, and a written 1-Year Genetic Health Guarantee. You will receive a complete binder with all health documentation.",
  },
  {
    id: "4",
    category: "Puppy Health & Care",
    question: "What comes in our puppy's take-home starter kit?",
    answer:
      "Your puppy arrives with a custom starter bundle including a soft blanket infused with scent from mom and littermates (which helps them settle smoothly), a 5 lb bag of premium Royal Canin puppy food, favorite chew toys, health records binder, and 30 days of Trupanion pet insurance.",
  },
  {
    id: "5",
    category: "Breeds & Litters",
    question: "What breeds do you raise at Petite Puppy Co.?",
    answer:
      "We specialize in boutique companion breeds carefully chosen for exceptional temperaments and suitability for family living: F1 and F1b Cavapoos, F1b Mini Goldendoodles, Toy Poodles, and French Bulldogs.",
  },
  {
    id: "6",
    category: "Inquiry & Process",
    question: "Do you offer delivery or pickup options outside Greenville, SC?",
    answer:
      "Yes! While most puppy owners pick up directly at Jameshia's Greenville residence, we also offer hand-delivery by a flight nanny to your nearest major airport, or ground transport within Upstate SC, North Carolina, and Georgia.",
  },
];

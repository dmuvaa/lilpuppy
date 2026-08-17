import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Petite Puppy Co. | Boutique Puppy Breeder in Greenville, SC",
  description:
    "Petite Puppy Co. is a boutique puppy breeder based in Greenville, South Carolina. We raise healthy, loved, home-reared Cavapoos, Mini Goldendoodles, and French Bulldogs serving Upstate SC.",
  keywords: [
    "Puppies for sale Greenville SC",
    "Dog breeder Greenville SC",
    "Cavapoo puppies South Carolina",
    "Mini Goldendoodle breeder SC",
    "French Bulldog puppies Greenville",
    "Upstate SC puppy breeder",
  ],
  openGraph: {
    title: "Petite Puppy Co. | Premium Puppies Raised With Love in Greenville, SC",
    description:
      "Boutique puppy breeder in Greenville, SC. Beautiful, healthy puppies raised in a loving home environment with health guarantees and socialization.",
    url: "https://petitepuppyco.com",
    siteName: "Petite Puppy Co.",
    images: [
      {
        url: "/images/hero_puppy.jpg",
        width: 1200,
        height: 675,
        alt: "Petite Puppy Co. Cavapoo puppy in Greenville SC",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Petite Puppy Co.",
    image: "https://petitepuppyco.com/images/hero_puppy.jpg",
    description:
      "Boutique puppy breeder in Greenville, South Carolina specializing in home-reared Cavapoos, Mini Goldendoodles, and French Bulldogs.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Greenville",
      addressRegion: "SC",
      postalCode: "29601",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 34.8526,
      longitude: -82.394,
    },
    url: "https://petitepuppyco.com",
    telephone: "+1-864-555-0192",
    priceRange: "$$$",
    areaServed: [
      "Greenville, SC",
      "Spartanburg, SC",
      "Anderson, SC",
      "Clemson, SC",
      "Upstate South Carolina",
    ],
  };

  return (
    <html
      lang="en"
      className={`${playfair.variable} ${jakarta.variable} h-full antialiased scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#FAF7F2] text-[#1C1917] font-sans selection:bg-[#EFE6DC] selection:text-[#8C5E3C]">
        {children}
      </body>
    </html>
  );
}

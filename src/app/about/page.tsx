"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InquiryModal from "@/components/InquiryModal";
import { Sparkles, Heart, Home, ShieldCheck, MapPin, Award, CheckCircle2, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  const [inquiryModalOpen, setInquiryModalOpen] = useState<boolean>(false);

  const handleOpenInquiry = () => {
    setInquiryModalOpen(true);
  };

  const galleryPhotos = [
    "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1591160690555-5debfba289f0?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1560807707-8cc77767d783?auto=format&fit=crop&w=800&q=80",
  ];

  return (
    <main className="min-h-screen flex flex-col bg-[#FDF8F6]">
      <Navbar onOpenInquiry={handleOpenInquiry} />

      {/* Hero Header */}
      <section className="bg-[#F9ECE9] border-b border-[#F0DCDD] py-14 md:py-20 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F7E4E6] text-[#C46D74] text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Meet The Breeder</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#231617]">
            About Jameshia Butler & Petite Puppy Co.
          </h1>
          <p className="text-base text-[#7A5C60] max-w-2xl mx-auto leading-relaxed">
            Learn about our founding story, home-reared philosophy, and ethical commitment to raising healthy companion puppies in Greenville, SC.
          </p>
        </div>
      </section>

      {/* Main Story & Letter Section */}
      <div className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="text-xs font-bold text-[#C46D74] uppercase tracking-wider">
              A Personal Letter From Jameshia
            </div>
            <h2 className="font-serif text-3xl font-bold text-[#231617]">
              &ldquo;Raising puppies with love, care, and family values.&rdquo;
            </h2>
            <div className="space-y-4 text-xs sm:text-sm text-[#7A5C60] leading-relaxed">
              <p>
                Welcome to Petite Puppy Co.! My name is <strong>Jameshia Butler</strong>, and I founded Petite Puppy Co. out of a deep passion for small companion breeds. Based in Greenville, South Carolina, our kennel is not a remote warehouse or anonymous facility — it is our warm family home.
              </p>
              <p>
                From the moment our puppies are born, they are handled gently, spoken to, and acclimated to normal household sights and sounds. We raise Cavapoos, Mini Goldendoodles, and French Bulldogs known for their low-stress temperaments and sweet natures.
              </p>
              <p>
                Whether you visit our Greenville residence in person or connect via FaceTime video visits, I am here to guide you every step of the way.
              </p>
            </div>

            <div className="pt-2 flex items-center gap-4">
              <button
                onClick={handleOpenInquiry}
                className="bg-[#C46D74] hover:bg-[#9E4950] text-white px-7 py-3 rounded-full text-xs font-semibold uppercase tracking-wider shadow-md"
              >
                Inquire With Jameshia
              </button>
              <a
                href="tel:8645550192"
                className="text-xs font-bold text-[#231617] hover:text-[#C46D74] flex items-center gap-1.5"
              >
                <Phone className="w-4 h-4 text-[#C46D74]" /> (864) 555-0192
              </a>
            </div>
          </div>

          <div className="lg:col-span-6 relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border-4 border-white">
            <Image
              src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=1200&q=80"
              alt="Petite Puppy Co puppies playing"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Ethical Breeding Pillars */}
        <div className="bg-white p-8 sm:p-12 rounded-3xl border border-[#F0DCDD] shadow-sm space-y-8">
          <div className="text-center space-y-2">
            <h3 className="font-serif text-3xl font-bold text-[#231617]">
              Our Four Breeding Pillars
            </h3>
            <p className="text-xs text-[#7A5C60]">What makes Petite Puppy Co. a trusted choice in Upstate SC</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#FDF8F6] p-6 rounded-2xl border border-[#F0DCDD] space-y-2">
              <div className="w-10 h-10 rounded-full bg-[#F7E4E6] text-[#C46D74] flex items-center justify-center">
                <Home className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-sm text-[#231617]">100% Home Reared</h4>
              <p className="text-xs text-[#7A5C60]">Puppies grow up inside our living room nursery surrounded by family attention.</p>
            </div>

            <div className="bg-[#FDF8F6] p-6 rounded-2xl border border-[#F0DCDD] space-y-2">
              <div className="w-10 h-10 rounded-full bg-[#F7E4E6] text-[#C46D74] flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-sm text-[#231617]">Vet Examined & Guaranteed</h4>
              <p className="text-xs text-[#7A5C60]">Backed by full health exams, vaccinations, microchip, and 1-year guarantee.</p>
            </div>

            <div className="bg-[#FDF8F6] p-6 rounded-2xl border border-[#F0DCDD] space-y-2">
              <div className="w-10 h-10 rounded-full bg-[#F7E4E6] text-[#C46D74] flex items-center justify-center">
                <Award className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-sm text-[#231617]">Early Socialization</h4>
              <p className="text-xs text-[#7A5C60]">Exposed to textures, sounds, and gentle human contact for smooth transition.</p>
            </div>

            <div className="bg-[#FDF8F6] p-6 rounded-2xl border border-[#F0DCDD] space-y-2">
              <div className="w-10 h-10 rounded-full bg-[#F7E4E6] text-[#C46D74] flex items-center justify-center">
                <Heart className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-sm text-[#231617]">Lifelong Support</h4>
              <p className="text-xs text-[#7A5C60]">Jameshia remains your personal resource long after your puppy arrives home.</p>
            </div>
          </div>
        </div>

        {/* Life at Petite Puppy Co Photo Gallery */}
        <div className="space-y-6">
          <div className="text-center space-y-2">
            <h3 className="font-serif text-3xl font-bold text-[#231617]">Life at Petite Puppy Co.</h3>
            <p className="text-xs text-[#7A5C60]">Sneak peek inside our puppy nursery and play yard in Greenville, SC</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryPhotos.map((img, idx) => (
              <div key={idx} className="relative aspect-square rounded-2xl overflow-hidden shadow-md group">
                <Image src={img} alt="Puppy gallery photo" fill className="object-cover group-hover:scale-105 transition-transform" />
              </div>
            ))}
          </div>
        </div>

      </div>

      <Footer onOpenInquiry={handleOpenInquiry} />

      <InquiryModal
        isOpen={inquiryModalOpen}
        onClose={() => setInquiryModalOpen(false)}
      />
    </main>
  );
}

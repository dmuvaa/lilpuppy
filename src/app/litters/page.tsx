"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InquiryModal from "@/components/InquiryModal";
import LittersSection from "@/components/LittersSection";
import { Sparkles, Calendar, ShieldCheck, Heart, Users, Award, Dna } from "lucide-react";
import Image from "next/image";

export default function LittersPage() {
  const [inquiryModalOpen, setInquiryModalOpen] = useState<boolean>(false);
  const [inquiryTargetName, setInquiryTargetName] = useState<string | undefined>(undefined);

  const handleOpenInquiry = (name?: string) => {
    setInquiryTargetName(name);
    setInquiryModalOpen(true);
  };

  const litterSeasons = [
    {
      season: "Late Summer / Autumn 2026",
      status: "Reserving Now",
      pairings: "Duke (Toy Poodle) x Rosie (Cavalier King Charles Spaniel)",
      breed: "F1b Cavapoo",
      takeHome: "November 2026",
      highlights: "Deep ruby red coats, high hypoallergenic potential, 11-15 lbs.",
    },
    {
      season: "Winter 2026",
      status: "Planned Pairing",
      pairings: "Teddy (Mini Poodle) x Honey (F1 Goldendoodle)",
      breed: "F1b Mini Goldendoodle",
      takeHome: "December 2026",
      highlights: "Teddy-bear apricoted & caramel curly coats, 16-22 lbs.",
    },
    {
      season: "Spring 2027",
      status: "Early Deposit List",
      pairings: "Winston (Frenchie) x Coco (Frenchie)",
      breed: "Boutique French Bulldog",
      takeHome: "March 2027",
      highlights: "Lilac fawn & cream short coats, robust health genetics, 20-24 lbs.",
    },
  ];

  return (
    <main className="min-h-screen flex flex-col bg-[#FDF8F6]">
      <Navbar onOpenInquiry={handleOpenInquiry} />

      {/* Page Header */}
      <section className="bg-[#F9ECE9] border-b border-[#F0DCDD] py-14 md:py-20 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F7E4E6] text-[#C46D74] text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Lineage & Genetics</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#231617]">
            Upcoming Breeding Announcements
          </h1>
          <p className="text-base text-[#7A5C60] max-w-2xl mx-auto leading-relaxed">
            Discover our planned breeding pairings, reserve pick-of-the-litter positions, and view our parent health standards.
          </p>
        </div>
      </section>

      {/* Litters Showcase */}
      <div className="flex-1 space-y-16 py-12">
        <LittersSection onOpenInquiry={handleOpenInquiry} />

        {/* Unique Section 1: Litter Calendar Timeline */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center space-y-2">
            <h2 className="font-serif text-3xl font-bold text-[#231617]">
              2026 - 2027 Breeding Season Roadmap
            </h2>
            <p className="text-xs text-[#7A5C60]">Planned availability dates and expected puppy characteristics</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {litterSeasons.map((s, idx) => (
              <div key={idx} className="bg-white p-6 rounded-3xl border border-[#F0DCDD] shadow-sm space-y-4">
                <div className="flex items-center justify-between">
                  <span className="badge-available px-3 py-1 rounded-full text-xs font-bold">{s.status}</span>
                  <span className="text-xs text-[#7A5C60] font-semibold">{s.breed}</span>
                </div>
                <h3 className="font-serif text-xl font-bold text-[#231617]">{s.season}</h3>
                <div className="space-y-2 text-xs text-[#7A5C60]">
                  <p><strong className="text-[#231617]">Pairing:</strong> {s.pairings}</p>
                  <p><strong className="text-[#231617]">Take Home:</strong> {s.takeHome}</p>
                  <p><strong className="text-[#231617]">Perks:</strong> {s.highlights}</p>
                </div>
                <button
                  onClick={() => handleOpenInquiry(`Waiting List — ${s.season}`)}
                  className="w-full bg-[#F7E4E6] text-[#C46D74] hover:bg-[#C46D74] hover:text-white py-2.5 rounded-full text-xs font-bold uppercase transition-colors"
                >
                  Reserve Pick Slot
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Unique Section 2: Parent Genetics & Health Pledge */}
        <section className="bg-white py-16 border-y border-[#F0DCDD]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase text-[#C46D74]">
                <Dna className="w-4 h-4" /> Health & Genetic Standard
              </div>
              <h2 className="font-serif text-3xl font-bold text-[#231617]">
                Carefully Selected Parent Lineage
              </h2>
              <p className="text-xs sm:text-sm text-[#7A5C60] leading-relaxed">
                Jameshia Butler selects parent dogs exclusively for gentle, loving temperaments, clear genetic screening histories, and structural soundness. Our goal is to ensure every puppy enjoys a long, vibrant life.
              </p>
              <div className="space-y-2 text-xs text-[#231617]">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#C46D74]" /> Written 1-Year Genetic Health Guarantee
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-[#C46D74]" /> Checked by Registered Upstate SC Veterinarians
                </div>
                <div className="flex items-center gap-2">
                  <Heart className="w-4 h-4 text-[#C46D74]" /> Family Raised inside Jameshia&apos;s Greenville Nursery
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 relative aspect-[16/10] rounded-3xl overflow-hidden shadow-lg border-2 border-white">
              <Image
                src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=1200&q=80"
                alt="Petite Puppy Co Sire portrait"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>
      </div>

      <Footer onOpenInquiry={handleOpenInquiry} />

      <InquiryModal
        isOpen={inquiryModalOpen}
        onClose={() => setInquiryModalOpen(false)}
        initialPuppyName={inquiryTargetName}
      />
    </main>
  );
}

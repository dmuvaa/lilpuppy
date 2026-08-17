"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PuppyCard from "@/components/PuppyCard";
import PuppyDetailModal from "@/components/PuppyDetailModal";
import InquiryModal from "@/components/InquiryModal";
import { PUPPIES_DATA, Puppy } from "@/data/puppies";
import { Sparkles, Filter, Search, Heart, CheckCircle2, ShieldCheck, Dog, Calendar } from "lucide-react";
import Image from "next/image";

export default function PuppiesPage() {
  const [selectedPuppy, setSelectedPuppy] = useState<Puppy | null>(null);
  const [inquiryModalOpen, setInquiryModalOpen] = useState<boolean>(false);
  const [inquiryTargetName, setInquiryTargetName] = useState<string | undefined>(undefined);

  const [statusFilter, setStatusFilter] = useState<string>("All");
  const [breedFilter, setBreedFilter] = useState<string>("All");
  const [activeBreedTab, setActiveBreedTab] = useState<string>("Cavapoo");

  const breedSpotlights = {
    Cavapoo: {
      name: "Cavapoo (Cavalier King Charles x Poodle)",
      desc: "Affectionate, gentle, and highly intelligent. Cavapoos are renowned for teddy-bear wavy coats, low shedding, and wonderful companionship with children.",
      weight: "10 - 16 lbs",
      shedding: "Very Low to Hypoallergenic",
      image: "https://images.unsplash.com/photo-1591160690555-5debfba289f0?auto=format&fit=crop&w=800&q=80",
    },
    "Mini Goldendoodle": {
      name: "Mini Goldendoodle (Golden Retriever x Poodle)",
      desc: "Enthusiastic, outgoing, and therapy-grade temperaments. Mini Goldendoodles are perfect active family dogs with soft golden coats.",
      weight: "16 - 24 lbs",
      shedding: "Low to Non-Shedding",
      image: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=800&q=80",
    },
    "French Bulldog": {
      name: "Boutique French Bulldog",
      desc: "Compact, quiet, and deeply devoted. Frenchies make charming apartment and indoor companions with sweet, tranquil dispositions.",
      weight: "18 - 24 lbs",
      shedding: "Low Maintenance Short Coat",
      image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=800&q=80",
    },
  };

  const handleOpenInquiry = (name?: string) => {
    setInquiryTargetName(name);
    setInquiryModalOpen(true);
  };

  const filteredPuppies = PUPPIES_DATA.filter((p) => {
    if (statusFilter !== "All" && p.status !== statusFilter) return false;
    if (breedFilter !== "All" && p.breedCategory !== breedFilter) return false;
    return true;
  });

  return (
    <main className="min-h-screen flex flex-col bg-[#FDF8F6]">
      <Navbar onOpenInquiry={handleOpenInquiry} />

      {/* Dedicated Page Hero Header */}
      <section className="bg-[#F9ECE9] border-b border-[#F0DCDD] py-14 md:py-20 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F7E4E6] text-[#C46D74] text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Greenville, SC Nursery</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#231617]">
            Available Puppies Directory
          </h1>
          <p className="text-base text-[#7A5C60] max-w-2xl mx-auto leading-relaxed">
            Browse our current roster of home-raised Cavapoos, Mini Goldendoodles, and French Bulldogs lovingly nurtured by Jameshia Butler.
          </p>
        </div>
      </section>

      {/* Breed Spotlight Guide Bar */}
      <section className="py-12 bg-white border-b border-[#F0DCDD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center space-y-2">
            <h2 className="font-serif text-2xl font-bold text-[#231617]">
              Explore Our Signature Breeds
            </h2>
            <p className="text-xs text-[#7A5C60]">Select a breed to view temperament and coat characteristics</p>
          </div>

          <div className="flex justify-center gap-2 flex-wrap">
            {Object.keys(breedSpotlights).map((breed) => (
              <button
                key={breed}
                onClick={() => setActiveBreedTab(breed)}
                className={`px-5 py-2.5 rounded-full text-xs font-semibold transition-all ${
                  activeBreedTab === breed
                    ? "bg-[#C46D74] text-white shadow-md"
                    : "bg-[#FDF8F6] text-[#231617] hover:bg-[#F7E4E6] border border-[#F0DCDD]"
                }`}
              >
                {breed}
              </button>
            ))}
          </div>

          {/* Active Breed Card */}
          <div className="bg-[#FDF8F6] p-6 sm:p-8 rounded-3xl border border-[#F0DCDD] grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-4 relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md">
              <Image
                src={breedSpotlights[activeBreedTab as keyof typeof breedSpotlights].image}
                alt={breedSpotlights[activeBreedTab as keyof typeof breedSpotlights].name}
                fill
                className="object-cover"
              />
            </div>
            <div className="md:col-span-8 space-y-3">
              <h3 className="font-serif text-2xl font-bold text-[#231617]">
                {breedSpotlights[activeBreedTab as keyof typeof breedSpotlights].name}
              </h3>
              <p className="text-xs sm:text-sm text-[#7A5C60] leading-relaxed">
                {breedSpotlights[activeBreedTab as keyof typeof breedSpotlights].desc}
              </p>
              <div className="flex flex-wrap gap-4 text-xs pt-2">
                <div className="bg-white px-3 py-1.5 rounded-xl border border-[#F0DCDD]">
                  <span className="text-[#7A5C60]">Est. Weight: </span>
                  <span className="font-bold text-[#231617]">{breedSpotlights[activeBreedTab as keyof typeof breedSpotlights].weight}</span>
                </div>
                <div className="bg-white px-3 py-1.5 rounded-xl border border-[#F0DCDD]">
                  <span className="text-[#7A5C60]">Shedding: </span>
                  <span className="font-bold text-[#231617]">{breedSpotlights[activeBreedTab as keyof typeof breedSpotlights].shedding}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Puppy Filter & Cards Showcase */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 flex-1">
        
        {/* Filter Bar */}
        <div className="glass-panel p-4 rounded-2xl border border-[#F0DCDD] flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-[#7A5C60]">Filter Status:</span>
            {["All", "Available", "Reserved", "Coming Soon"].map((st) => (
              <button
                key={st}
                onClick={() => setStatusFilter(st)}
                className={`px-3 py-1 rounded-full text-xs font-semibold transition-all ${
                  statusFilter === st
                    ? "bg-[#C46D74] text-white"
                    : "bg-white text-[#231617] border border-[#F0DCDD] hover:bg-[#F7E4E6]"
                }`}
              >
                {st}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2 text-xs">
            <span className="text-[#7A5C60] font-semibold">Breed:</span>
            <select
              value={breedFilter}
              onChange={(e) => setBreedFilter(e.target.value)}
              className="bg-white border border-[#F0DCDD] rounded-lg px-3 py-1 text-[#231617] font-medium"
            >
              <option value="All">All Breeds</option>
              <option value="Cavapoo">Cavapoo</option>
              <option value="Mini Goldendoodle">Mini Goldendoodle</option>
              <option value="French Bulldog">French Bulldog</option>
              <option value="Toy Poodle">Toy Poodle</option>
            </select>
          </div>
        </div>

        {/* Larger Puppy Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredPuppies.map((puppy) => (
            <PuppyCard
              key={puppy.id}
              puppy={puppy}
              onSelectPuppy={(p) => setSelectedPuppy(p)}
              onOpenInquiry={handleOpenInquiry}
            />
          ))}
        </div>

        {/* Step-by-Step Adoption Timeline */}
        <div className="mt-20 bg-white p-8 sm:p-12 rounded-3xl border border-[#F0DCDD] shadow-sm space-y-8">
          <div className="text-center space-y-2">
            <h3 className="font-serif text-3xl font-bold text-[#231617]">
              The Adoption Process with Jameshia
            </h3>
            <p className="text-xs text-[#7A5C60]">Four simple steps to welcoming your new companion home</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#FDF8F6] p-5 rounded-2xl border border-[#F0DCDD] space-y-2">
              <div className="w-8 h-8 rounded-full bg-[#C46D74] text-white font-bold flex items-center justify-center text-xs">1</div>
              <h4 className="font-bold text-sm text-[#231617]">Submit Inquiry</h4>
              <p className="text-xs text-[#7A5C60]">Fill out our simple form with your puppy or litter preference.</p>
            </div>

            <div className="bg-[#FDF8F6] p-5 rounded-2xl border border-[#F0DCDD] space-y-2">
              <div className="w-8 h-8 rounded-full bg-[#C46D74] text-white font-bold flex items-center justify-center text-xs">2</div>
              <h4 className="font-bold text-sm text-[#231617]">15-Min Phone Call</h4>
              <p className="text-xs text-[#7A5C60]">Jameshia reaches out to answer questions and discuss your home setup.</p>
            </div>

            <div className="bg-[#FDF8F6] p-5 rounded-2xl border border-[#F0DCDD] space-y-2">
              <div className="w-8 h-8 rounded-full bg-[#C46D74] text-white font-bold flex items-center justify-center text-xs">3</div>
              <h4 className="font-bold text-sm text-[#231617]">Deposit & Updates</h4>
              <p className="text-xs text-[#7A5C60]">Secure your spot and receive weekly video updates as your puppy grows.</p>
            </div>

            <div className="bg-[#FDF8F6] p-5 rounded-2xl border border-[#F0DCDD] space-y-2">
              <div className="w-8 h-8 rounded-full bg-[#C46D74] text-white font-bold flex items-center justify-center text-xs">4</div>
              <h4 className="font-bold text-sm text-[#231617]">Greenville Pickup</h4>
              <p className="text-xs text-[#7A5C60]">Pick up your puppy in Greenville, SC with full vet records binder!</p>
            </div>
          </div>
        </div>

      </section>

      <Footer onOpenInquiry={handleOpenInquiry} />

      <PuppyDetailModal
        puppy={selectedPuppy}
        onClose={() => setSelectedPuppy(null)}
        onOpenInquiry={(name) => {
          setSelectedPuppy(null);
          handleOpenInquiry(name);
        }}
      />

      <InquiryModal
        isOpen={inquiryModalOpen}
        onClose={() => setInquiryModalOpen(false)}
        initialPuppyName={inquiryTargetName}
      />
    </main>
  );
}

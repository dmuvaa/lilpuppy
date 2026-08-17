"use client";

import React, { useState } from "react";
import { PUPPIES_DATA, Puppy } from "../data/puppies";
import PuppyCard from "./PuppyCard";
import { Sparkles, Filter, Search, Heart } from "lucide-react";

interface FeaturedPuppiesProps {
  onSelectPuppy: (puppy: Puppy) => void;
  onOpenInquiry: (puppyName?: string) => void;
}

export default function FeaturedPuppies({
  onSelectPuppy,
  onOpenInquiry,
}: FeaturedPuppiesProps) {
  const [statusFilter, setStatusFilter] = useState<string>("All");
  const [breedFilter, setBreedFilter] = useState<string>("All");
  const [genderFilter, setGenderFilter] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredPuppies = PUPPIES_DATA.filter((puppy) => {
    if (statusFilter !== "All" && puppy.status !== statusFilter) return false;
    if (breedFilter !== "All" && puppy.breedCategory !== breedFilter) return false;
    if (genderFilter !== "All" && puppy.gender !== genderFilter) return false;
    if (searchQuery.trim() !== "") {
      const q = searchQuery.toLowerCase();
      const matchName = puppy.name.toLowerCase().includes(q);
      const matchBreed = puppy.breed.toLowerCase().includes(q);
      const matchTrait = puppy.personality.some((p) => p.toLowerCase().includes(q));
      if (!matchName && !matchBreed && !matchTrait) return false;
    }
    return true;
  });

  return (
    <section id="puppies" className="py-16 md:py-24 bg-[#F9F8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E2EBE4] text-[#2A543D] text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Discover Your Companion</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#13281E] tracking-tight">
            Our Available Puppies
          </h2>

          <p className="text-base text-[#576B60] leading-relaxed">
            Every puppy at Petite Puppy Co. is born and raised inside our Greenville home, surrounded by love, early socialization, and daily veterinary-approved care.
          </p>
        </div>

        {/* Filter & Search Toolbar */}
        <div className="glass-panel p-4 sm:p-6 rounded-2xl border border-[#DFE5E0] shadow-sm space-y-4">
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
            
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 text-[#576B60] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search by puppy name, breed, or temperament..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-white border border-[#DFE5E0] rounded-full text-xs sm:text-sm text-[#13281E] focus:outline-none focus:border-[#2A543D] focus:ring-1 focus:ring-[#2A543D] transition-all"
              />
            </div>

            {/* Quick Status Filter Tabs */}
            <div className="flex flex-wrap items-center gap-1.5">
              <span className="text-xs font-semibold text-[#576B60] mr-2 flex items-center gap-1">
                <Filter className="w-3.5 h-3.5" /> Status:
              </span>
              {["All", "Available", "Reserved", "Coming Soon"].map((status) => (
                <button
                  key={status}
                  onClick={() => setStatusFilter(status)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                    statusFilter === status
                      ? "bg-[#2A543D] text-white shadow-xs"
                      : "bg-white text-[#13281E] hover:bg-[#E2EBE4] border border-[#DFE5E0]"
                  }`}
                >
                  {status}
                </button>
              ))}
            </div>

          </div>

          {/* Secondary Breed & Gender Dropdowns */}
          <div className="pt-3 border-t border-[#DFE5E0]/60 flex flex-wrap items-center gap-4 text-xs">
            <div className="flex items-center gap-2">
              <span className="text-[#576B60] font-medium">Breed:</span>
              <select
                value={breedFilter}
                onChange={(e) => setBreedFilter(e.target.value)}
                className="bg-white border border-[#DFE5E0] rounded-lg px-3 py-1.5 text-[#13281E] font-medium focus:outline-none focus:border-[#2A543D]"
              >
                <option value="All">All Breeds</option>
                <option value="Cavapoo">Cavapoo</option>
                <option value="Mini Goldendoodle">Mini Goldendoodle</option>
                <option value="French Bulldog">French Bulldog</option>
                <option value="Toy Poodle">Toy Poodle</option>
              </select>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-[#576B60] font-medium">Gender:</span>
              <select
                value={genderFilter}
                onChange={(e) => setGenderFilter(e.target.value)}
                className="bg-white border border-[#DFE5E0] rounded-lg px-3 py-1.5 text-[#13281E] font-medium focus:outline-none focus:border-[#2A543D]"
              >
                <option value="All">Both Genders</option>
                <option value="Female">Female</option>
                <option value="Male">Male</option>
              </select>
            </div>

            {(statusFilter !== "All" || breedFilter !== "All" || genderFilter !== "All" || searchQuery !== "") && (
              <button
                onClick={() => {
                  setStatusFilter("All");
                  setBreedFilter("All");
                  setGenderFilter("All");
                  setSearchQuery("");
                }}
                className="text-[#2A543D] underline hover:text-[#1B3B2B] font-medium ml-auto"
              >
                Reset Filters
              </button>
            )}
          </div>
        </div>

        {/* Puppy Grid */}
        {filteredPuppies.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPuppies.map((puppy) => (
              <PuppyCard
                key={puppy.id}
                puppy={puppy}
                onSelectPuppy={onSelectPuppy}
                onOpenInquiry={onOpenInquiry}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-2xl border border-[#DFE5E0] p-8 space-y-4">
            <Heart className="w-10 h-10 text-[#2A543D] mx-auto opacity-50" />
            <h3 className="font-serif text-xl font-bold text-[#13281E]">No matching puppies found</h3>
            <p className="text-sm text-[#576B60] max-w-md mx-auto">
              We update our puppy roster frequently. Try adjusting your filters or join our upcoming litters waiting list to get notified!
            </p>
            <button
              onClick={() => onOpenInquiry()}
              className="bg-[#2A543D] text-white px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider"
            >
              Join Priority Waiting List
            </button>
          </div>
        )}

      </div>
    </section>
  );
}

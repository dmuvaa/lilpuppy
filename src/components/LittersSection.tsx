"use client";

import React from "react";
import Image from "next/image";
import { LITTERS_DATA, Litter } from "../data/litters";
import { Calendar, Heart, Sparkles } from "lucide-react";

interface LittersSectionProps {
  onOpenInquiry: (litterOrPuppyName?: string) => void;
}

export default function LittersSection({ onOpenInquiry }: LittersSectionProps) {
  const getStatusBadge = (status: Litter["status"]) => {
    switch (status) {
      case "Available":
        return <span className="badge-available px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Available Litter</span>;
      case "Expected Soon":
        return <span className="badge-coming-soon px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Expected Soon</span>;
      case "Planned":
        return <span className="badge-reserved px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Planned Litter</span>;
      case "Fully Reserved":
        return <span className="badge-adopted px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Fully Reserved</span>;
    }
  };

  return (
    <section id="litters" className="py-16 md:py-24 bg-[#F9ECE9] border-y border-[#F0DCDD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F7E4E6] text-[#C46D74] text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Future Breeding Announcements</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#231617] tracking-tight">
            Upcoming Litters & Reserve Slots
          </h2>

          <p className="text-base text-[#7A5C60] leading-relaxed">
            Planning your next family member? Reserve your pick of the litter early. Approved applicants gain priority selection in order of deposit.
          </p>
        </div>

        {/* Litters Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {LITTERS_DATA.map((litter) => {
            const availableSlots = litter.totalSlots - litter.reservedSlots;
            return (
              <div
                key={litter.id}
                className="bg-white rounded-3xl overflow-hidden border border-[#F0DCDD] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                {/* Header Banner */}
                <div className="bg-[#FDF8F6] p-6 border-b border-[#F0DCDD] space-y-3">
                  <div className="flex items-center justify-between">
                    {getStatusBadge(litter.status)}
                    <span className="text-xs font-bold text-[#C46D74]">
                      {availableSlots > 0 ? `${availableSlots} Slots Available` : "Full"}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-[#231617]">
                    {litter.litterName}
                  </h3>

                  <div className="text-xs font-semibold text-[#C46D74]">
                    {litter.breed}
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 space-y-6 flex-1 flex flex-col justify-between">
                  <div className="space-y-4">
                    <p className="text-xs text-[#7A5C60] leading-relaxed">
                      {litter.description}
                    </p>

                    {/* Dates & Weight Stats */}
                    <div className="bg-[#FDF8F6] p-3.5 rounded-2xl border border-[#F0DCDD] space-y-2 text-xs">
                      <div className="flex items-center justify-between">
                        <span className="text-[#7A5C60] flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5 text-[#C46D74]" /> Expected Date:
                        </span>
                        <span className="font-bold text-[#231617]">{litter.expectedDate}</span>
                      </div>
                      <div className="flex items-center justify-between pt-1 border-t border-[#F0DCDD]/60">
                        <span className="text-[#7A5C60]">Ready to Go Home:</span>
                        <span className="font-bold text-[#231617]">{litter.takeHomeDate}</span>
                      </div>
                      <div className="flex items-center justify-between pt-1 border-t border-[#F0DCDD]/60">
                        <span className="text-[#7A5C60]">Est. Adult Size:</span>
                        <span className="font-bold text-[#231617]">{litter.expectedWeightRange}</span>
                      </div>
                    </div>

                    {/* Parents Pair Showcase */}
                    <div>
                      <div className="text-[11px] font-bold uppercase tracking-wider text-[#7A5C60] mb-2">
                        Pairing Lineage
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        {/* Sire */}
                        <div className="bg-[#FDF8F6] p-2.5 rounded-xl border border-[#F0DCDD] flex items-center gap-2">
                          <div className="relative w-10 h-10 rounded-lg overflow-hidden shrink-0">
                            <Image src={litter.sire.image} alt={litter.sire.name} fill className="object-cover" />
                          </div>
                          <div className="text-xs">
                            <div className="font-bold text-[#231617]">Sire: {litter.sire.name}</div>
                            <div className="text-[10px] text-[#7A5C60]">{litter.sire.weight}</div>
                          </div>
                        </div>

                        {/* Dam */}
                        <div className="bg-[#FDF8F6] p-2.5 rounded-xl border border-[#F0DCDD] flex items-center gap-2">
                          <div className="relative w-10 h-10 rounded-lg overflow-hidden shrink-0">
                            <Image src={litter.dam.image} alt={litter.dam.name} fill className="object-cover" />
                          </div>
                          <div className="text-xs">
                            <div className="font-bold text-[#231617]">Dam: {litter.dam.name}</div>
                            <div className="text-[10px] text-[#7A5C60]">{litter.dam.weight}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Action CTA */}
                  <div className="pt-4 border-t border-[#F0DCDD]">
                    <button
                      onClick={() => onOpenInquiry(`Waiting List — ${litter.litterName}`)}
                      className="w-full bg-[#C46D74] hover:bg-[#9E4950] text-white py-3 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors shadow-sm flex items-center justify-center gap-2 active:scale-95"
                    >
                      <Heart className="w-3.5 h-3.5 fill-current" />
                      <span>Join Waiting List for This Litter</span>
                    </button>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Puppy } from "../data/puppies";
import { X, Heart, ShieldCheck, Check, MapPin } from "lucide-react";

interface PuppyDetailModalProps {
  puppy: Puppy | null;
  onClose: () => void;
  onOpenInquiry: (puppyName: string) => void;
}

export default function PuppyDetailModal({
  puppy,
  onClose,
  onOpenInquiry,
}: PuppyDetailModalProps) {
  if (!puppy) return null;

  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const getStatusBadge = (status: Puppy["status"]) => {
    switch (status) {
      case "Available":
        return <span className="badge-available px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Available</span>;
      case "Reserved":
        return <span className="badge-reserved px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Reserved</span>;
      case "Coming Soon":
        return <span className="badge-coming-soon px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Coming Soon</span>;
      case "Adopted":
        return <span className="badge-adopted px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Adopted</span>;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm overflow-y-auto animate-in fade-in duration-200">
      <div className="bg-[#F9F8F5] rounded-3xl max-w-4xl w-full overflow-hidden shadow-2xl border border-[#DFE5E0] relative max-h-[92vh] flex flex-col my-auto">
        
        {/* Header bar with close button */}
        <div className="bg-white/80 backdrop-blur-md px-6 py-4 border-b border-[#DFE5E0] flex items-center justify-between sticky top-0 z-20">
          <div className="flex items-center gap-3">
            <span className="font-serif text-xl font-bold text-[#13281E]">
              {puppy.name}&apos;s Profile
            </span>
            {getStatusBadge(puppy.status)}
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full text-[#576B60] hover:bg-[#E2EBE4] hover:text-[#13281E] transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="p-6 overflow-y-auto space-y-8 flex-1">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            
            {/* Left Column: Photo Gallery */}
            <div className="md:col-span-6 space-y-4">
              {/* Main Photo */}
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border-2 border-white shadow-lg bg-[#EBF0EC]">
                <Image
                  src={puppy.gallery[activeImageIndex] || puppy.image}
                  alt={`${puppy.name} photo`}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Thumbnails */}
              {puppy.gallery.length > 1 && (
                <div className="flex items-center gap-3 overflow-x-auto pb-1">
                  {puppy.gallery.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImageIndex(idx)}
                      className={`relative w-20 h-16 rounded-xl overflow-hidden border-2 transition-all ${
                        activeImageIndex === idx
                          ? "border-[#2A543D] scale-105 shadow-md"
                          : "border-transparent opacity-70 hover:opacity-100"
                      }`}
                    >
                      <Image src={img} alt="" fill className="object-cover" />
                    </button>
                  ))}
                </div>
              )}

              {/* Greenville Guarantee Callout */}
              <div className="bg-[#EBF0EC]/80 p-4 rounded-xl border border-[#DFE5E0] text-xs text-[#576B60] space-y-1.5">
                <div className="font-bold text-[#13281E] flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#2A543D]" />
                  Raised in Greenville, SC
                </div>
                <p>
                  This puppy receives daily sensory playtime, early crate introduction, and home noise conditioning in our nursery.
                </p>
              </div>
            </div>

            {/* Right Column: Key Details & Specs */}
            <div className="md:col-span-6 space-y-6">
              <div>
                <div className="text-xs font-semibold text-[#2A543D] uppercase tracking-wider">
                  {puppy.breed}
                </div>
                <h2 className="font-serif text-3xl font-bold text-[#13281E]">
                  Meet {puppy.name}
                </h2>
                <p className="text-sm text-[#576B60] mt-2 leading-relaxed">
                  {puppy.description}
                </p>
              </div>

              {/* Quick Specs Grid */}
              <div className="grid grid-cols-2 gap-3 bg-white p-4 rounded-2xl border border-[#DFE5E0]">
                <div>
                  <div className="text-[11px] text-[#576B60] uppercase font-semibold">Gender</div>
                  <div className="text-sm font-bold text-[#13281E]">{puppy.gender}</div>
                </div>
                <div>
                  <div className="text-[11px] text-[#576B60] uppercase font-semibold">Date of Birth</div>
                  <div className="text-sm font-bold text-[#13281E]">{puppy.dob}</div>
                </div>
                <div>
                  <div className="text-[11px] text-[#576B60] uppercase font-semibold">Est. Adult Weight</div>
                  <div className="text-sm font-bold text-[#13281E]">{puppy.expectedWeight}</div>
                </div>
                <div>
                  <div className="text-[11px] text-[#576B60] uppercase font-semibold">Coat Color</div>
                  <div className="text-sm font-bold text-[#13281E]">{puppy.color}</div>
                </div>
              </div>

              {/* Personality Badges */}
              <div>
                <div className="text-xs font-bold text-[#13281E] mb-2 uppercase tracking-wider">
                  Temperament & Traits
                </div>
                <div className="flex flex-wrap gap-2">
                  {puppy.personality.map((trait, idx) => (
                    <span
                      key={idx}
                      className="bg-[#E2EBE4] text-[#2A543D] text-xs font-semibold px-3 py-1 rounded-full border border-[#DFE5E0]"
                    >
                      {trait}
                    </span>
                  ))}
                </div>
              </div>

              {/* Parent Showcase */}
              <div className="bg-white p-4 rounded-2xl border border-[#DFE5E0] space-y-3">
                <div className="text-xs font-bold text-[#13281E] uppercase tracking-wider">
                  Parents Lineage
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-2.5">
                    <div className="relative w-10 h-10 rounded-full overflow-hidden shrink-0 border border-[#DFE5E0]">
                      <Image src={puppy.parents.sireImage} alt={puppy.parents.sireName} fill className="object-cover" />
                    </div>
                    <div className="text-xs">
                      <div className="font-bold text-[#13281E]">Sire: {puppy.parents.sireName}</div>
                      <div className="text-[10px] text-[#576B60]">{puppy.parents.sireBreed}</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <div className="relative w-10 h-10 rounded-full overflow-hidden shrink-0 border border-[#DFE5E0]">
                      <Image src={puppy.parents.damImage} alt={puppy.parents.damName} fill className="object-cover" />
                    </div>
                    <div className="text-xs">
                      <div className="font-bold text-[#13281E]">Dam: {puppy.parents.damName}</div>
                      <div className="text-[10px] text-[#576B60]">{puppy.parents.damBreed}</div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Included Perks Checklist */}
          <div className="bg-white p-6 rounded-2xl border border-[#DFE5E0] space-y-4">
            <h3 className="font-serif text-lg font-bold text-[#13281E] flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#2A543D]" />
              What Comes With {puppy.name}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#13281E]">
              {puppy.includedPerks.map((perk, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3" />
                  </div>
                  <span>{perk}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Action Bar */}
        <div className="bg-white px-6 py-4 border-t border-[#DFE5E0] flex items-center justify-between sticky bottom-0 z-20">
          <div>
            <div className="text-xs text-[#576B60]">Inquiring about:</div>
            <div className="text-sm font-bold text-[#13281E]">{puppy.name} — {puppy.breed}</div>
          </div>

          <button
            onClick={() => {
              onClose();
              onOpenInquiry(puppy.name);
            }}
            className="bg-[#2A543D] hover:bg-[#1B3B2B] text-white px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider flex items-center gap-2 shadow-lg active:scale-95 transition-all"
          >
            <Heart className="w-4 h-4 fill-current" />
            Inquire About {puppy.name}
          </button>
        </div>

      </div>
    </div>
  );
}

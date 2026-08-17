"use client";

import React from "react";
import Image from "next/image";
import { Puppy } from "../data/puppies";
import { Heart, ArrowRight, Info, MapPin } from "lucide-react";

interface PuppyCardProps {
  puppy: Puppy;
  onSelectPuppy: (puppy: Puppy) => void;
  onOpenInquiry: (puppyName: string) => void;
}

export default function PuppyCard({
  puppy,
  onSelectPuppy,
  onOpenInquiry,
}: PuppyCardProps) {
  const getStatusBadge = (status: Puppy["status"]) => {
    switch (status) {
      case "Available":
        return <span className="badge-available px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase shadow-2xs">Available</span>;
      case "Reserved":
        return <span className="badge-reserved px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase shadow-2xs">Reserved</span>;
      case "Coming Soon":
        return <span className="badge-coming-soon px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase shadow-2xs">Coming Soon</span>;
      case "Adopted":
        return <span className="badge-adopted px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase shadow-2xs">Adopted</span>;
    }
  };

  return (
    <div className="group bg-white rounded-3xl overflow-hidden border border-[#F0DCDD] shadow-md hover:shadow-2xl transition-all duration-500 flex flex-col justify-between hover:-translate-y-1.5">
      {/* Top Image Container - LARGER aspect ratio (3/2) */}
      <div className="relative aspect-[3/2] w-full overflow-hidden bg-[#F9ECE9]">
        <Image
          src={puppy.image}
          alt={`${puppy.name} - ${puppy.breed} puppy in Greenville SC`}
          fill
          className="object-cover group-hover:scale-108 transition-transform duration-700"
        />
        
        {/* Status Badge Overlay */}
        <div className="absolute top-4 left-4 z-10">
          {getStatusBadge(puppy.status)}
        </div>

        {/* Gender Badge Overlay */}
        <div className="absolute top-4 right-4 z-10 glass-panel px-3.5 py-1.5 rounded-full text-xs font-bold text-[#231617] shadow-sm">
          {puppy.gender}
        </div>

        {/* Hover Quick View Overlay */}
        <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
          <button
            onClick={() => onSelectPuppy(puppy)}
            className="bg-white/95 text-[#231617] px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-xl transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2"
          >
            <Info className="w-4 h-4 text-[#C46D74]" />
            Quick Profile
          </button>
        </div>
      </div>

      {/* Card Content - LARGER Padding & Typography */}
      <div className="p-6 sm:p-7 space-y-5 flex-1 flex flex-col justify-between">
        <div className="space-y-3">
          {/* Breed & Age */}
          <div className="flex items-center justify-between text-xs sm:text-sm text-[#7A5C60] font-semibold">
            <span>{puppy.breed}</span>
            <span>{puppy.ageInWeeks > 0 ? `${puppy.ageInWeeks} Weeks Old` : puppy.dob}</span>
          </div>

          {/* Puppy Name */}
          <h3
            onClick={() => onSelectPuppy(puppy)}
            className="font-serif text-3xl font-bold text-[#231617] hover:text-[#C46D74] cursor-pointer transition-colors"
          >
            {puppy.name}
          </h3>

          {/* Short Description snippet */}
          <p className="text-xs sm:text-sm text-[#7A5C60] line-clamp-2 leading-relaxed">
            {puppy.description}
          </p>

          {/* Color & Expected Weight */}
          <div className="pt-2 text-xs sm:text-sm text-[#231617] space-y-1.5">
            <div className="flex items-center justify-between border-b border-[#F9ECE9] pb-2">
              <span className="text-[#7A5C60]">Coat Color:</span>
              <span className="font-semibold text-right">{puppy.color}</span>
            </div>
            <div className="flex items-center justify-between pt-1">
              <span className="text-[#7A5C60]">Est. Adult Weight:</span>
              <span className="font-semibold">{puppy.expectedWeight}</span>
            </div>
          </div>

          {/* Personality Pills */}
          <div className="pt-2 flex flex-wrap gap-1.5">
            {puppy.personality.map((tag, idx) => (
              <span
                key={idx}
                className="bg-[#FDF8F6] text-[#C46D74] border border-[#F0DCDD] text-xs font-semibold px-3 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-4 border-t border-[#F0DCDD] flex items-center justify-between gap-3">
          <button
            onClick={() => onSelectPuppy(puppy)}
            className="text-xs sm:text-sm font-bold text-[#231617] hover:text-[#C46D74] transition-colors flex items-center gap-1.5"
          >
            <span>Meet {puppy.name}</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          {puppy.status === "Available" ? (
            <button
              onClick={() => onOpenInquiry(puppy.name)}
              className="bg-[#C46D74] hover:bg-[#9E4950] text-white text-xs sm:text-sm font-semibold px-5 py-2.5 rounded-full transition-all flex items-center gap-2 shadow-sm active:scale-95"
            >
              <Heart className="w-4 h-4 fill-current" />
              Inquire
            </button>
          ) : (
            <button
              onClick={() => onSelectPuppy(puppy)}
              className="bg-[#F9ECE9] text-[#7A5C60] text-xs sm:text-sm font-semibold px-4 py-2 rounded-full hover:bg-[#F7E4E6] transition-colors"
            >
              View Info
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

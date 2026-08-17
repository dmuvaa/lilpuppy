"use client";

import React from "react";
import { MapPin, HeartHandshake, Shield, CheckCircle2 } from "lucide-react";

export default function LocalSeoBanner() {
  const localCities = [
    "Greenville",
    "Spartanburg",
    "Anderson",
    "Simpsonville",
    "Clemson",
    "Greer",
    "Travelers Rest",
    "Mauldin",
  ];

  return (
    <section className="bg-[#F9ECE9] border-y border-[#F0DCDD] py-10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Local Focus Statement */}
          <div className="lg:col-span-6 space-y-3">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C46D74]">
              <MapPin className="w-4 h-4 text-[#C46D74]" />
              <span>Locally Rooted & Serving Upstate South Carolina</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#231617]">
              Meet Your New Little Companion in Greenville, South Carolina.
            </h2>
            <p className="text-sm text-[#7A5C60] leading-relaxed">
              Petite Puppy Co. is conveniently situated in Greenville, SC under the care of Jameshia Butler. We provide personal, face-to-face puppy pickups and virtual video visits for families throughout Upstate SC.
            </p>
          </div>

          {/* Right Column: Local Service Radius & Ethical Guarantees */}
          <div className="lg:col-span-6 glass-panel rounded-2xl p-6 border border-[#F0DCDD] space-y-4">
            <div className="text-xs font-bold text-[#231617] uppercase tracking-wider flex items-center justify-between border-b border-[#F0DCDD] pb-3">
              <span>Primary Upstate SC Service Radius</span>
              <span className="text-[#C46D74] font-semibold">Greenville County</span>
            </div>

            {/* City Tags */}
            <div className="flex flex-wrap gap-2">
              {localCities.map((city) => (
                <span
                  key={city}
                  className="bg-white/90 text-[#231617] border border-[#F0DCDD] text-xs font-medium px-3 py-1 rounded-full shadow-2xs flex items-center gap-1.5"
                >
                  <CheckCircle2 className="w-3 h-3 text-[#C46D74]" />
                  {city}, SC
                </span>
              ))}
            </div>

            <div className="pt-2 flex items-center gap-4 text-xs text-[#7A5C60]">
              <span className="flex items-center gap-1 text-[#231617] font-medium">
                <HeartHandshake className="w-4 h-4 text-[#C46D74]" />
                In-Person Greenville Pickups
              </span>
              <span>&bull;</span>
              <span className="flex items-center gap-1 text-[#231617] font-medium">
                <Shield className="w-4 h-4 text-[#C46D74]" />
                Flight Nanny Delivery Available
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

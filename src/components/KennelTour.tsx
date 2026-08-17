"use client";

import React from "react";
import Image from "next/image";
import { Sparkles, Sun } from "lucide-react";

export default function KennelTour() {
  const careSteps = [
    {
      title: "Clean, Climate-Controlled Nursery",
      desc: "Our indoor nursery features soft orthopedic bedding, temperature control, and sanitized play enclosures.",
    },
    {
      title: "Daily Socialization & Enrichment",
      desc: "Puppies engage with sensory toys, balance ramps, and audio exposure to household sounds.",
    },
    {
      title: "Supervised Garden Playtime",
      desc: "Fresh Greenville air and secure grass lawns for outdoor exploration once vaccinated.",
    },
    {
      title: "Veterinary Wellness & Nutrition",
      desc: "Regular vet checkups, microchipping, and high-protein Royal Canin puppy food.",
    },
  ];

  return (
    <section id="kennel" className="py-16 md:py-24 bg-[#F9ECE9] border-y border-[#F0DCDD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F7E4E6] text-[#C46D74] text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Behind The Scenes</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#231617] tracking-tight">
            Our Nursery & Puppy Environment
          </h2>

          <p className="text-base text-[#7A5C60] leading-relaxed">
            Take a visual look inside Jameshia Butler&apos;s Greenville home nursery where every puppy receives 24/7 care, clean environments, and structured daily enrichment.
          </p>
        </div>

        {/* Nursery Showcase Feature */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white p-6 sm:p-8 rounded-3xl border border-[#F0DCDD] shadow-sm">
          
          {/* Main Nursery Image */}
          <div className="lg:col-span-7 relative aspect-[16/9] rounded-2xl overflow-hidden shadow-lg border-2 border-white">
            <Image
              src="/images/kennel_nursery.jpg"
              alt="Inside Petite Puppy Co luxury home nursery in Greenville SC"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute bottom-3 left-3 glass-panel px-3 py-1.5 rounded-xl text-xs font-bold text-[#231617] flex items-center gap-2">
              <Sun className="w-4 h-4 text-[#C46D74]" />
              <span>Greenville SC Residence Nursery</span>
            </div>
          </div>

          {/* Nursery Care Checklist */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="font-serif text-2xl font-bold text-[#231617]">
              Prepared for a Smooth Transition Home
            </h3>

            <div className="space-y-4">
              {careSteps.map((step, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#F7E4E6] text-[#C46D74] flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                    {idx + 1}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#231617]">{step.title}</h4>
                    <p className="text-xs text-[#7A5C60] leading-relaxed mt-0.5">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

"use client";

import React from "react";
import Image from "next/image";
import { TESTIMONIALS_DATA } from "../data/testimonials";
import { Star, MapPin, Heart } from "lucide-react";

export default function TestimonialsSection() {
  return (
    <section className="py-16 md:py-24 bg-[#EBF0EC] border-y border-[#DFE5E0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E2EBE4] text-[#2A543D] text-xs font-semibold uppercase tracking-wider">
            <Heart className="w-3.5 h-3.5 fill-current" />
            <span>Happy Puppy Families</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#13281E] tracking-tight">
            Stories From Upstate SC Adopters
          </h2>

          <p className="text-base text-[#576B60] leading-relaxed">
            Read real experiences from families in Greenville and nearby SC communities who found their companion through Petite Puppy Co.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS_DATA.map((testi) => (
            <div
              key={testi.id}
              className="bg-white p-6 sm:p-8 rounded-3xl border border-[#DFE5E0] shadow-sm flex flex-col justify-between space-y-6 hover:shadow-md transition-shadow"
            >
              <div className="space-y-4">
                {/* Rating Stars */}
                <div className="flex items-center gap-1 text-[#C5A059]">
                  {[...Array(testi.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-xs sm:text-sm text-[#13281E] leading-relaxed italic font-normal">
                  &ldquo;{testi.quote}&rdquo;
                </p>
              </div>

              {/* Author & Puppy Details */}
              <div className="pt-4 border-t border-[#DFE5E0] flex items-center gap-3">
                <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0 border-2 border-[#EBF0EC]">
                  <Image src={testi.avatar} alt={testi.customerName} fill className="object-cover" />
                </div>
                <div>
                  <div className="font-bold text-sm text-[#13281E]">{testi.customerName}</div>
                  <div className="text-[11px] text-[#2A543D] font-semibold">
                    Adopter of {testi.puppyName} ({testi.breed})
                  </div>
                  <div className="text-[10px] text-[#576B60] flex items-center gap-1 mt-0.5">
                    <MapPin className="w-2.5 h-2.5" /> {testi.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

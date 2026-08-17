"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, Heart, Home, MapPin } from "lucide-react";

interface AboutSectionProps {
  onOpenInquiry: (name?: string) => void;
}

export default function AboutSection({ onOpenInquiry }: AboutSectionProps) {
  return (
    <section id="about" className="py-16 md:py-24 bg-[#FDF8F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Top Grid: Story & Puppy Photo */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Adorable Puppish Image */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="absolute -inset-3 bg-[#F7E4E6] rounded-3xl transform -rotate-2"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/3]">
                <Image
                  src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=1200&q=80"
                  alt="Petite Puppy Co puppies playing happily in Greenville SC"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Location Badge */}
              <div className="absolute -bottom-4 -right-2 glass-panel p-3.5 rounded-2xl shadow-xl border border-[#F0DCDD] flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-[#C46D74]" />
                <div className="text-xs">
                  <div className="font-bold text-[#231617]">Greenville, SC Residence</div>
                  <div className="text-[10px] text-[#7A5C60]">Home-Reared Environment</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Story Copy */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F7E4E6] text-[#C46D74] text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Founded By Jameshia Butler</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#231617] tracking-tight">
              A Boutique Breeder Raised With Integrity & Love.
            </h2>

            <p className="text-base text-[#7A5C60] leading-relaxed font-normal">
              Founded by <strong className="text-[#231617]">Jameshia Butler</strong>, Petite Puppy Co. is built on the core belief that every puppy deserves to begin life surrounded by warmth, human touch, and attentive care. Located right here in Greenville, South Carolina, our nursery is our personal family home.
            </p>

            <p className="text-sm text-[#7A5C60] leading-relaxed">
              Jameshia specializes in small companion breeds — Cavapoos, Mini Goldendoodles, and French Bulldogs — chosen for their gentle natures, intelligence, and suitability as beloved family companions.
            </p>

            {/* Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="bg-white p-4 rounded-2xl border border-[#F0DCDD] space-y-1.5 shadow-2xs">
                <div className="font-bold text-sm text-[#231617] flex items-center gap-2">
                  <Home className="w-4 h-4 text-[#C46D74]" />
                  <span>100% Home Raised</span>
                </div>
                <p className="text-xs text-[#7A5C60]">
                  Puppies spend their first critical weeks in Jameshia&apos;s nursery, accustomed to household sounds.
                </p>
              </div>

              <div className="bg-white p-4 rounded-2xl border border-[#F0DCDD] space-y-1.5 shadow-2xs">
                <div className="font-bold text-sm text-[#231617] flex items-center gap-2">
                  <Heart className="w-4 h-4 text-[#C46D74]" />
                  <span>Early Socialization</span>
                </div>
                <p className="text-xs text-[#7A5C60]">
                  Daily gentle handling, sensory play protocols, and positive interaction with adults and children.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-block bg-[#C46D74] hover:bg-[#9E4950] text-white px-8 py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all shadow-md active:scale-95"
              >
                Connect With Jameshia
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

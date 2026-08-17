"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InquiryModal from "@/components/InquiryModal";
import { Sparkles, Sun, ShieldCheck, Heart, Clock, CheckCircle2 } from "lucide-react";
import Image from "next/image";

export default function KennelPage() {
  const [inquiryModalOpen, setInquiryModalOpen] = useState<boolean>(false);

  const handleOpenInquiry = () => {
    setInquiryModalOpen(true);
  };

  const nurseryZones = [
    {
      title: "Climate-Controlled Living Room Nursery",
      desc: "Puppies spend their first critical weeks in an indoor nursery equipped with orthopedic fleece beds, air purification, and soft lighting.",
      icon: "🏡",
    },
    {
      title: "Outdoor Greenville Play Lawn",
      desc: "A secure, fenced grass lawn where puppies enjoy fresh air, sunbeams, and safe natural exploration once vaccinated.",
      icon: "🌳",
    },
    {
      title: "Sensory Enrichment & Play Zone",
      desc: "Equipped with texture mats, balance ramps, squeak toys, and household sound exposure (vacuum, radio, thunder) to build confidence.",
      icon: "🧸",
    },
    {
      title: "Veterinary Sanitation Station",
      desc: "Sanitizing stations, health record logs, daily weight tracking scales, and routine grooming tables for pristine cleanliness.",
      icon: "🩺",
    },
  ];

  const dailySchedule = [
    { time: "7:00 AM", activity: "Morning Wake-Up & Royal Canin Breakfast", detail: "Fresh water, formula, and morning weight check log." },
    { time: "9:00 AM", activity: "Outdoor Grass Exploration & Play", detail: "Puppy socialization and early potty pad training reinforcement." },
    { time: "11:30 AM", activity: "Sensory Enrichment & Music Time", detail: "Gentle classical music exposure, lap cuddling, and tactile handling." },
    { time: "2:00 PM", activity: "Afternoon Rest & Grooming Session", detail: "Nail trimming, coat brushing, and soothing lavender scent time." },
    { time: "5:30 PM", activity: "Evening Dinner & Group Play", detail: "Interactive puzzle toys and group play with littermates." },
    { time: "8:30 PM", activity: "Bedtime Wind-Down & Crate Comfort", detail: "Dim lights, plush blanket nest, and restful night sleep." },
  ];

  return (
    <main className="min-h-screen flex flex-col bg-[#FDF8F6]">
      <Navbar onOpenInquiry={handleOpenInquiry} />

      {/* Page Hero Header */}
      <section className="bg-[#F9ECE9] border-b border-[#F0DCDD] py-14 md:py-20 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F7E4E6] text-[#C46D74] text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Greenville Home Nursery</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#231617]">
            Our Nursery & Puppy Environment
          </h1>
          <p className="text-base text-[#7A5C60] max-w-2xl mx-auto leading-relaxed">
            Take a visual tour inside Jameshia Butler&apos;s home nursery where every puppy receives 24/7 care, clean environments, and structured daily routines.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        
        {/* Nursery Environment Zones */}
        <div className="space-y-8">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <h2 className="font-serif text-3xl font-bold text-[#231617]">
              Designed for Optimal Health & Comfort
            </h2>
            <p className="text-xs text-[#7A5C60]">Every square foot of our nursery is structured to keep puppies thriving</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {nurseryZones.map((zone, idx) => (
              <div key={idx} className="bg-white p-6 rounded-3xl border border-[#F0DCDD] shadow-sm space-y-3">
                <div className="text-3xl">{zone.icon}</div>
                <h3 className="font-serif text-xl font-bold text-[#231617]">{zone.title}</h3>
                <p className="text-xs text-[#7A5C60] leading-relaxed">{zone.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Nursery Showcase Feature */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white p-6 sm:p-8 rounded-3xl border border-[#F0DCDD] shadow-sm">
          <div className="lg:col-span-7 relative aspect-[16/9] rounded-2xl overflow-hidden shadow-lg border-2 border-white">
            <Image
              src="/images/kennel_nursery.jpg"
              alt="Inside Petite Puppy Co luxury home nursery in Greenville SC"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>

          <div className="lg:col-span-5 space-y-4">
            <div className="text-xs font-bold uppercase text-[#C46D74]">Pristine Hygiene Protocol</div>
            <h3 className="font-serif text-2xl font-bold text-[#231617]">Veterinary Sanitation Standards</h3>
            <p className="text-xs text-[#7A5C60] leading-relaxed">
              We maintain non-toxic, pet-safe sanitation procedures every morning and evening. Bedding is laundered daily, and visitors wear sanitized shoe covers during nursery visits.
            </p>
            <div className="space-y-2 text-xs text-[#231617]">
              <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#C46D74]" /> HEPA Air Purification 24/7</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#C46D74]" /> Daily Puppy Weight & Growth Logs</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#C46D74]" /> Registered SC Veterinarian Inspections</div>
            </div>
          </div>
        </div>

        {/* Daily Schedule Table */}
        <div className="bg-white p-8 sm:p-10 rounded-3xl border border-[#F0DCDD] shadow-sm space-y-6">
          <div className="space-y-2">
            <h3 className="font-serif text-2xl font-bold text-[#231617] flex items-center gap-2">
              <Clock className="w-6 h-6 text-[#C46D74]" /> A Day in the Life of Our Puppies
            </h3>
            <p className="text-xs text-[#7A5C60]">Structured daily routine that builds calm, predictable puppy habits</p>
          </div>

          <div className="divide-y divide-[#F0DCDD]">
            {dailySchedule.map((item, idx) => (
              <div key={idx} className="py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs">
                <div className="font-bold text-[#C46D74] w-24 shrink-0">{item.time}</div>
                <div className="font-bold text-[#231617] w-64 shrink-0">{item.activity}</div>
                <div className="text-[#7A5C60] flex-1">{item.detail}</div>
              </div>
            ))}
          </div>
        </div>

      </div>

      <Footer onOpenInquiry={handleOpenInquiry} />

      <InquiryModal
        isOpen={inquiryModalOpen}
        onClose={() => setInquiryModalOpen(false)}
      />
    </main>
  );
}

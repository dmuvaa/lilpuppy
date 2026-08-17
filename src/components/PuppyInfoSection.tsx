"use client";

import React, { useState } from "react";
import { FAQS_DATA } from "../data/faqs";
import { HelpCircle, ChevronDown, CheckCircle2, ShoppingBag, BookOpen, ShieldCheck, Search } from "lucide-react";

export default function PuppyInfoSection() {
  const [openFaqId, setOpenFaqId] = useState<string | null>("1");
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = ["All", "Inquiry & Process", "Puppy Health & Care", "Visits & Pickup", "Breeds & Litters"];

  const filteredFaqs = FAQS_DATA.filter((faq) => {
    if (activeCategory !== "All" && faq.category !== activeCategory) return false;
    if (searchQuery.trim() !== "") {
      const q = searchQuery.toLowerCase();
      return (
        faq.question.toLowerCase().includes(q) ||
        faq.answer.toLowerCase().includes(q)
      );
    }
    return true;
  });

  return (
    <section id="puppy-info" className="py-16 md:py-24 bg-[#FDF8F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F7E4E6] text-[#C46D74] text-xs font-semibold uppercase tracking-wider">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Owner Guide & Knowledge Hub</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#231617] tracking-tight">
            Puppy Care & Frequently Asked Questions
          </h2>

          <p className="text-base text-[#7A5C60] leading-relaxed">
            Everything you need to know about welcoming your new puppy home, our health guarantees, and adoption procedures with Jameshia.
          </p>
        </div>

        {/* Preparation & Take-Home Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="bg-white p-6 rounded-3xl border border-[#F0DCDD] shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-2xl bg-[#F7E4E6] text-[#C46D74] flex items-center justify-center">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-xl font-bold text-[#231617]">Before Pickup Day</h3>
            <p className="text-xs text-[#7A5C60] leading-relaxed">
              We recommend preparing an indoor crate, puppy pads, stainless water bowls, and a cozy puppy bed. We provide a sample of food and scent blanket!
            </p>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-[#F0DCDD] shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-2xl bg-[#F7E4E6] text-[#C46D74] flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-xl font-bold text-[#231617]">1-Year Health Guarantee</h3>
            <p className="text-xs text-[#7A5C60] leading-relaxed">
              Every puppy is backed by a written 1-year genetic health guarantee, full veterinary exam certificate, and microchip registration.
            </p>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-[#F0DCDD] shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-2xl bg-[#F7E4E6] text-[#C46D74] flex items-center justify-center">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-xl font-bold text-[#231617]">Lifelong Breeder Support</h3>
            <p className="text-xs text-[#7A5C60] leading-relaxed">
              When you adopt from Petite Puppy Co., you become part of our extended family. Jameshia Butler is always available for phone, text, or email advice.
            </p>
          </div>

        </div>

        {/* Interactive FAQ Section */}
        <div className="bg-white p-6 sm:p-10 rounded-3xl border border-[#F0DCDD] shadow-sm space-y-8 max-w-4xl mx-auto">
          
          <div className="space-y-4">
            <h3 className="font-serif text-2xl font-bold text-[#231617] flex items-center gap-2">
              <HelpCircle className="w-6 h-6 text-[#C46D74]" />
              Frequently Asked Questions
            </h3>

            {/* FAQ Search & Category Filter */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
              <div className="relative flex-1">
                <Search className="w-4 h-4 text-[#7A5C60] absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search questions..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-[#FDF8F6] border border-[#F0DCDD] rounded-full text-xs text-[#231617] focus:outline-none focus:border-[#C46D74]"
                />
              </div>

              <div className="flex flex-wrap items-center gap-1">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                      activeCategory === cat
                        ? "bg-[#C46D74] text-white"
                        : "bg-[#FDF8F6] text-[#231617] hover:bg-[#F7E4E6]"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Accordion List */}
          <div className="space-y-3 pt-2">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq) => {
                const isOpen = openFaqId === faq.id;
                return (
                  <div
                    key={faq.id}
                    className="border border-[#F0DCDD] rounded-2xl overflow-hidden transition-all"
                  >
                    <button
                      onClick={() => setOpenFaqId(isOpen ? null : faq.id)}
                      className="w-full text-left p-4 sm:p-5 bg-[#FDF8F6]/60 hover:bg-[#FDF8F6] flex items-center justify-between font-serif text-base sm:text-lg font-bold text-[#231617] transition-colors"
                    >
                      <span className="pr-4">{faq.question}</span>
                      <ChevronDown
                        className={`w-5 h-5 text-[#C46D74] transition-transform duration-300 shrink-0 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {isOpen && (
                      <div className="p-4 sm:p-5 bg-white border-t border-[#F0DCDD] text-xs sm:text-sm text-[#7A5C60] leading-relaxed animate-in fade-in duration-200">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })
            ) : (
              <div className="text-center py-8 text-xs text-[#7A5C60]">
                No questions found matching your search term.
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}

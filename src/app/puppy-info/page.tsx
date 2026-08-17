"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InquiryModal from "@/components/InquiryModal";
import { FAQS_DATA } from "@/data/faqs";
import { BookOpen, HelpCircle, ChevronDown, CheckCircle2, ShoppingBag, ShieldCheck, Search, Sparkles, Heart } from "lucide-react";

export default function PuppyInfoPage() {
  const [inquiryModalOpen, setInquiryModalOpen] = useState<boolean>(false);
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

  const takeHomeChecklist = [
    { item: "Indoor Wire Crate (24\" or 30\")", desc: "Includes divider panel so the crate grows with your puppy." },
    { item: "Stainless Steel Water & Food Bowls", desc: "Hygienic, easy to wash, and chew-proof." },
    { item: "Royal Canin Small Puppy Kibble", desc: "We provide a 5 lb starter bag so you can transition smoothly." },
    { item: "Soft Plush Bed & Scent Blanket", desc: "We provide a blanket infused with scent from mom and littermates." },
    { item: "Puppy Potty Pads & Enzymatic Cleaner", desc: "For indoor training during early weeks before full vaccination." },
    { item: "Chew Toys & Teething Rings", desc: "Kong toys and rubber chew rings to satisfy natural puppy teething." },
  ];

  return (
    <main className="min-h-screen flex flex-col bg-[#FDF8F6]">
      <Navbar onOpenInquiry={() => setInquiryModalOpen(true)} />

      {/* Page Hero Header */}
      <section className="bg-[#F9ECE9] border-b border-[#F0DCDD] py-14 md:py-20 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F7E4E6] text-[#C46D74] text-xs font-semibold uppercase tracking-wider">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Owner Knowledge Hub</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#231617]">
            Puppy Care Guide & FAQs
          </h1>
          <p className="text-base text-[#7A5C60] max-w-2xl mx-auto leading-relaxed">
            Everything you need to prepare for pickup day, settling your new puppy into your home, and exploring our FAQs.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        
        {/* Take Home Checklist */}
        <div className="bg-white p-8 sm:p-12 rounded-3xl border border-[#F0DCDD] shadow-sm space-y-8">
          <div className="text-center space-y-2">
            <h2 className="font-serif text-3xl font-bold text-[#231617]">
              New Puppy Take-Home Shopping Checklist
            </h2>
            <p className="text-xs text-[#7A5C60]">Essential items Jameshia recommends having ready before your puppy arrives home</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {takeHomeChecklist.map((c, idx) => (
              <div key={idx} className="bg-[#FDF8F6] p-5 rounded-2xl border border-[#F0DCDD] flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#F7E4E6] text-[#C46D74] flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                  ✓
                </div>
                <div>
                  <h3 className="font-bold text-sm text-[#231617]">{c.item}</h3>
                  <p className="text-xs text-[#7A5C60] mt-0.5">{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Health Guarantee Overview */}
        <div className="bg-white p-8 sm:p-12 rounded-3xl border border-[#F0DCDD] shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase text-[#C46D74]">
              <ShieldCheck className="w-4 h-4" /> Written Protection
            </div>
            <h3 className="font-serif text-2xl font-bold text-[#231617]">
              1-Year Genetic Health Guarantee
            </h3>
            <p className="text-xs sm:text-sm text-[#7A5C60] leading-relaxed">
              Every puppy from Petite Puppy Co. comes with a signed written 1-Year Genetic Health Guarantee. Our puppies receive thorough vet examinations, first vaccinations, microchipping, and de-worming records before leaving our Greenville nursery.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#231617]">
              <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#C46D74]" /> Vet Exam & Certificate included</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#C46D74]" /> ISO Microchip Registration included</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#C46D74]" /> 30-Day Trupanion Pet Insurance</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#C46D74]" /> Complete Medical History Binder</div>
            </div>
          </div>

          <div className="lg:col-span-4 bg-[#F9ECE9] p-6 rounded-2xl border border-[#F0DCDD] text-center space-y-3">
            <Heart className="w-10 h-10 text-[#C46D74] mx-auto" />
            <h4 className="font-serif text-xl font-bold text-[#231617]">Have Questions?</h4>
            <p className="text-xs text-[#7A5C60]">Jameshia is available to discuss any health or care questions before adoption.</p>
            <button
              onClick={() => setInquiryModalOpen(true)}
              className="bg-[#C46D74] text-white px-5 py-2.5 rounded-full text-xs font-semibold uppercase shadow-md hover:bg-[#9E4950] transition-colors"
            >
              Ask Jameshia
            </button>
          </div>
        </div>

        {/* Interactive Searchable FAQ Accordion */}
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

      <Footer onOpenInquiry={() => setInquiryModalOpen(true)} />

      <InquiryModal
        isOpen={inquiryModalOpen}
        onClose={() => setInquiryModalOpen(false)}
      />
    </main>
  );
}

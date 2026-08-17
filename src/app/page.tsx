"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LocalSeoBanner from "@/components/LocalSeoBanner";
import FeaturedPuppies from "@/components/FeaturedPuppies";
import LittersSection from "@/components/LittersSection";
import AboutSection from "@/components/AboutSection";
import KennelTour from "@/components/KennelTour";
import PuppyInfoSection from "@/components/PuppyInfoSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";
import PuppyDetailModal from "@/components/PuppyDetailModal";
import InquiryModal from "@/components/InquiryModal";
import { Puppy } from "@/data/puppies";

export default function Home() {
  const [selectedPuppy, setSelectedPuppy] = useState<Puppy | null>(null);
  const [inquiryModalOpen, setInquiryModalOpen] = useState<boolean>(false);
  const [inquiryTargetName, setInquiryTargetName] = useState<string | undefined>(undefined);

  const handleOpenInquiry = (name?: string) => {
    setInquiryTargetName(name);
    setInquiryModalOpen(true);
  };

  const handleCloseInquiry = () => {
    setInquiryModalOpen(false);
    setInquiryTargetName(undefined);
  };

  return (
    <main className="min-h-screen flex flex-col bg-[#FDF8F6]">
      {/* Header Navigation */}
      <Navbar onOpenInquiry={handleOpenInquiry} />

      {/* Main Page Sections */}
      <div className="flex-1 space-y-0">
        <Hero onOpenInquiry={handleOpenInquiry} />

        <LocalSeoBanner />

        <FeaturedPuppies
          onSelectPuppy={(puppy) => setSelectedPuppy(puppy)}
          onOpenInquiry={handleOpenInquiry}
        />

        <LittersSection onOpenInquiry={handleOpenInquiry} />

        <AboutSection onOpenInquiry={handleOpenInquiry} />

        <KennelTour />

        <PuppyInfoSection />

        <TestimonialsSection />
      </div>

      {/* Footer */}
      <Footer
        onNavClick={() => {}}
        onOpenInquiry={handleOpenInquiry}
      />

      {/* Puppy Detail Modal / Drawer */}
      <PuppyDetailModal
        puppy={selectedPuppy}
        onClose={() => setSelectedPuppy(null)}
        onOpenInquiry={(name) => {
          setSelectedPuppy(null);
          handleOpenInquiry(name);
        }}
      />

      {/* Universal Inquiry Lead Modal */}
      <InquiryModal
        isOpen={inquiryModalOpen}
        onClose={handleCloseInquiry}
        initialPuppyName={inquiryTargetName}
      />
    </main>
  );
}

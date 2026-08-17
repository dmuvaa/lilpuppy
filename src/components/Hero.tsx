"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, ArrowRight, ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";

interface HeroProps {
  onOpenInquiry?: (puppyName?: string) => void;
}

export default function Hero({ onOpenInquiry }: HeroProps) {
  const slides = [
    {
      image: "/images/dog-hero.webp",
      title: "Beautiful Puppies, Raised With Love",
      subtitle: "Boutique Cavapoos & Goldendoodles raised by Jameshia Butler in Greenville, SC.",
      badge: "Autumn 2026 Litters Available",
      puppyName: "Luna",
    },
    {
      image: "/images/dog-pretty.webp",
      title: "Home-Reared With Gentle Care",
      subtitle: "Socialized daily with children and family in a clean indoor nursery.",
      badge: "Upstate SC's Premier Breeder",
      puppyName: "Milo",
    },
    {
      image: "/images/dog-two.webp",
      title: "Health Guaranteed & Loved",
      subtitle: "Comprehensive vet health exam, 1-year genetic guarantee, and microchip.",
      badge: "Greenville, SC Residence",
      puppyName: "Bella",
    },
    {
      image: "/images/dog-beach.webp",
      title: "Meet Your New Companion",
      subtitle: "Personal face-to-face pickups in Greenville or flight nanny options nationwide.",
      badge: "Inquire Today",
      puppyName: "Teddy",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPlaying, slides.length]);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative w-full overflow-hidden bg-[#1A0D0E] h-[82vh] min-h-[540px] max-h-[760px]">
      
      {/* Slides Container - Horizontal Right-To-Left Sliding */}
      <div
        className="flex h-full w-full transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, idx) => (
          <div key={idx} className="relative w-full h-full shrink-0">
            {/* Background WebP Image */}
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              priority={idx === 0}
              className="object-cover object-center"
            />
            {/* Dark Gradient Overlay for legibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-black/10"></div>
          </div>
        ))}
      </div>

      {/* Top Right Scroller Controls (No Collision with buttons or text) */}
      <div className="absolute top-4 right-4 sm:top-6 sm:right-8 z-30 flex items-center gap-2 bg-[#C46D74]/95 text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-white/30 shadow-xl backdrop-blur-md">
        <button
          onClick={handlePrev}
          className="p-1 hover:text-[#231617] transition-colors"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
        </button>

        {/* Dots */}
        <div className="flex items-center gap-1">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`h-2 rounded-full transition-all ${
                currentSlide === i ? "bg-white w-4 sm:w-5" : "bg-white/40 w-2"
              }`}
            />
          ))}
        </div>

        <button
          onClick={handleNext}
          className="p-1 hover:text-[#231617] transition-colors"
          aria-label="Next Slide"
        >
          <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
        </button>

        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="p-1 hover:text-[#231617] transition-colors pl-1.5 border-l border-white/30"
          aria-label="Play/Pause"
        >
          {isPlaying ? <Pause className="w-3.5 h-3.5 text-white" /> : <Play className="w-3.5 h-3.5 text-white" />}
        </button>
      </div>

      {/* BARE TEXT OVER THE BOTTOM PORTION (Cleanly formatted on mobile and desktop) */}
      <div className="absolute inset-x-0 bottom-0 z-20 pb-6 sm:pb-12 pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl space-y-3 sm:space-y-4 text-white">
            
            {/* Slide Badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C46D74] text-white text-[11px] sm:text-xs font-semibold uppercase tracking-wider shadow-sm">
              <Sparkles className="w-3 h-3 text-white" />
              <span>{slides[currentSlide].badge}</span>
            </div>

            {/* Main Bare Headline */}
            <h1 className="font-serif text-2xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight sm:leading-[1.12] drop-shadow-md">
              {slides[currentSlide].title}
            </h1>

            {/* Subtitle Bare Text */}
            <p className="text-xs sm:text-base text-stone-200 leading-relaxed font-normal max-w-xl drop-shadow-sm line-clamp-2 sm:line-clamp-none">
              {slides[currentSlide].subtitle}
            </p>

            {/* Action Buttons (Stacked neatly on mobile) */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-4 pt-1 sm:pt-2">
              <Link
                href="/puppies"
                className="bg-[#C46D74] hover:bg-[#9E4950] text-white px-6 py-3 sm:px-7 sm:py-3.5 rounded-full font-semibold text-xs sm:text-sm tracking-wide uppercase shadow-xl transition-all duration-300 flex items-center justify-center gap-2 group active:scale-95 text-center"
              >
                <span>View Available Puppies</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/about"
                className="bg-white/90 hover:bg-white text-[#231617] px-6 py-3 sm:px-7 sm:py-3.5 rounded-full font-medium text-xs sm:text-sm tracking-wide transition-all duration-300 flex items-center justify-center gap-2 shadow-md text-center"
              >
                <span>Meet Jameshia & Co.</span>
              </Link>
            </div>

          </div>
        </div>
      </div>

    </section>
  );
}

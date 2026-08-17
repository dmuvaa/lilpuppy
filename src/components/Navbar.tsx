"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Dog, Heart, Phone, Menu, X, MapPin, Sparkles } from "lucide-react";

interface NavbarProps {
  onOpenInquiry?: (puppyName?: string) => void;
}

export default function Navbar({ onOpenInquiry }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/puppies", label: "Puppies" },
    { href: "/litters", label: "Litters" },
    { href: "/about", label: "About Us" },
    { href: "/kennel", label: "Our Nursery" },
    { href: "/puppy-info", label: "Puppy Info & FAQ" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      {/* Top Banner */}
      <div className="bg-[#231617] text-[#FDF8F6] text-xs py-2 px-4 text-center font-medium tracking-wide flex items-center justify-center gap-2">
        <Sparkles className="w-3.5 h-3.5 text-[#C46D74]" />
        <span>Boutique Puppy Breeder in Greenville, SC &bull; Jameshia Butler, Owner</span>
        <span className="hidden md:inline-block text-[#F0DCDD] ml-2">
          &bull; Call or Text: (864) 555-0192
        </span>
      </div>

      {/* Main Navbar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled
            ? "glass-nav py-3 shadow-xs"
            : "bg-[#FDF8F6]/90 backdrop-blur-md py-4 border-b border-[#F0DCDD]"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 group text-left"
          >
            <div className="w-10 h-10 rounded-full bg-[#C46D74] text-white flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-300">
              <Dog className="w-5 h-5" />
            </div>
            <div>
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#231617] block leading-none">
                Petite Puppy Co.
              </span>
              <span className="text-[10px] uppercase tracking-widest text-[#C46D74] font-semibold flex items-center gap-1 mt-0.5">
                <MapPin className="w-2.5 h-2.5 text-[#C46D74]" /> Greenville, South Carolina
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3.5 py-2 text-sm font-medium rounded-full transition-colors duration-200 ${
                    isActive
                      ? "bg-[#F7E4E6] text-[#C46D74] font-semibold"
                      : "text-[#231617] hover:text-[#C46D74] hover:bg-[#F9ECE9]/60"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center space-x-3">
            <a
              href="tel:8645550192"
              className="p-2.5 rounded-full text-[#231617] hover:bg-[#F7E4E6] transition-colors duration-200 flex items-center gap-1.5 text-xs font-medium"
              title="Call Breeder"
            >
              <Phone className="w-4 h-4 text-[#C46D74]" />
              <span className="hidden md:inline">(864) 555-0192</span>
            </a>
            <button
              onClick={() => onOpenInquiry && onOpenInquiry()}
              className="bg-[#C46D74] hover:bg-[#9E4950] text-white px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 shadow-sm hover:shadow-md flex items-center gap-2 active:scale-95"
            >
              <Heart className="w-3.5 h-3.5 fill-current" />
              Inquire Now
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => onOpenInquiry && onOpenInquiry()}
              className="bg-[#C46D74] text-white p-2 rounded-full text-xs font-semibold sm:hidden"
            >
              <Heart className="w-4 h-4 fill-current" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#231617] hover:bg-[#F7E4E6] transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden bg-black/40 backdrop-blur-sm">
          <div className="fixed inset-y-0 right-0 max-w-xs w-full bg-[#FDF8F6] p-6 shadow-2xl flex flex-col justify-between border-l border-[#F0DCDD] animate-in slide-in-from-right duration-300">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-[#F0DCDD]">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-[#C46D74] text-white flex items-center justify-center">
                    <Dog className="w-4 h-4" />
                  </div>
                  <span className="font-serif font-bold text-lg text-[#231617]">
                    Petite Puppy Co.
                  </span>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1 rounded-md text-[#7A5C60] hover:text-[#231617]"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="mt-6 flex flex-col space-y-2">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`w-full text-left px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                        isActive
                          ? "bg-[#C46D74] text-white font-semibold"
                          : "text-[#231617] hover:bg-[#F7E4E6]"
                      }`}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </div>
            </div>

            <div className="pt-6 border-t border-[#F0DCDD] space-y-3">
              <div className="text-xs text-[#7A5C60] flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#C46D74]" />
                Greenville, South Carolina
              </div>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenInquiry && onOpenInquiry();
                }}
                className="w-full bg-[#C46D74] text-white py-3 rounded-full text-sm font-semibold tracking-wider uppercase shadow-md flex items-center justify-center gap-2"
              >
                <Heart className="w-4 h-4 fill-current" />
                Inquire About a Puppy
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

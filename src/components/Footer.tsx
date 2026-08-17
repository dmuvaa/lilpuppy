"use client";

import React from "react";
import Link from "next/link";
import { Dog, Heart, Phone, Mail, MapPin } from "lucide-react";

interface FooterProps {
  onNavClick?: (id: string) => void;
  onOpenInquiry?: (name?: string) => void;
}

export default function Footer({ onOpenInquiry }: FooterProps) {
  return (
    <footer className="bg-[#231617] text-[#FDF8F6] pt-16 pb-12 border-t border-[#C46D74]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#C46D74] text-white flex items-center justify-center shadow-md">
                <Dog className="w-5 h-5" />
              </div>
              <span className="font-serif text-2xl font-bold tracking-tight text-white">
                Petite Puppy Co.
              </span>
            </div>

            <p className="text-xs text-[#F0DCDD] max-w-sm leading-relaxed">
              A boutique puppy breeder in Greenville, South Carolina, owned and operated by Jameshia Butler. Dedicated to raising healthy, home-reared companion puppies with love.
            </p>

            <div className="flex items-center gap-2 text-xs text-[#F0DCDD]">
              <MapPin className="w-4 h-4 text-[#C46D74]" />
              <span>Greenville, South Carolina, USA</span>
            </div>

            {/* Visual Social Media Icons Bar */}
            <div className="pt-3 space-y-2">
              <div className="text-xs text-[#7A5C60] font-semibold uppercase tracking-wider">Follow Jameshia & Co.</div>
              <div className="flex items-center gap-2.5">
                
                {/* Instagram Icon */}
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-9 h-9 rounded-full bg-[#F7E4E6]/10 text-[#F0DCDD] hover:bg-[#C46D74] hover:text-white flex items-center justify-center transition-all duration-300 shadow-sm border border-white/10 hover:scale-110"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>

                {/* Facebook Icon */}
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-9 h-9 rounded-full bg-[#F7E4E6]/10 text-[#F0DCDD] hover:bg-[#C46D74] hover:text-white flex items-center justify-center transition-all duration-300 shadow-sm border border-white/10 hover:scale-110"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>

                {/* TikTok Icon */}
                <a
                  href="https://tiktok.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TikTok"
                  className="w-9 h-9 rounded-full bg-[#F7E4E6]/10 text-[#F0DCDD] hover:bg-[#C46D74] hover:text-white flex items-center justify-center transition-all duration-300 shadow-sm border border-white/10 hover:scale-110"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-1-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.24-2.61.82-5.26 2.82-6.85 1.57-1.25 3.63-1.8 5.62-1.52.02 1.41.01 2.83.01 4.24-.96-.16-1.97-.01-2.83.47-1.04.57-1.74 1.64-1.85 2.82-.14 1.35.48 2.7 1.56 3.49.92.68 2.14.93 3.25.68 1.14-.23 2.15-.99 2.62-2.07.38-.85.49-1.81.47-2.75.02-4.99.01-9.97.01-14.96z"/>
                  </svg>
                </a>

                {/* WhatsApp Icon */}
                <a
                  href="https://whatsapp.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="w-9 h-9 rounded-full bg-[#F7E4E6]/10 text-[#F0DCDD] hover:bg-[#C46D74] hover:text-white flex items-center justify-center transition-all duration-300 shadow-sm border border-white/10 hover:scale-110"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                  </svg>
                </a>

              </div>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-white">
              Navigation Pages
            </div>
            <ul className="space-y-2.5 text-xs text-[#F0DCDD]">
              <li>
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/puppies" className="hover:text-white transition-colors">Available Puppies</Link>
              </li>
              <li>
                <Link href="/litters" className="hover:text-white transition-colors">Upcoming Litters</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">About Jameshia</Link>
              </li>
              <li>
                <Link href="/kennel" className="hover:text-white transition-colors">Our Nursery</Link>
              </li>
              <li>
                <Link href="/puppy-info" className="hover:text-white transition-colors">Puppy Care & FAQ</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">Contact Breeder</Link>
              </li>
            </ul>
          </div>

          {/* Contact Details & Direct Inquiry */}
          <div className="md:col-span-4 space-y-4">
            <div className="text-xs font-bold uppercase tracking-wider text-white">
              Contact Jameshia Butler
            </div>

            <div className="space-y-2.5 text-xs text-[#F0DCDD]">
              <a href="tel:8645550192" className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone className="w-4 h-4 text-[#C46D74]" />
                <span>(864) 555-0192</span>
              </a>
              <a href="mailto:jameshia@petitepuppyco.com" className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail className="w-4 h-4 text-[#C46D74]" />
                <span>jameshia@petitepuppyco.com</span>
              </a>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onOpenInquiry && onOpenInquiry()}
                className="bg-[#C46D74] hover:bg-[#9E4950] text-white px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors flex items-center gap-2 shadow-sm"
              >
                <Heart className="w-3.5 h-3.5 fill-current" />
                <span>Send Inquiry</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Legal Links */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#7A5C60]">
          <div>
            &copy; 2026 Petite Puppy Co. &bull; Jameshia Butler. All rights reserved. Greenville, SC.
          </div>
          <div className="flex items-center gap-4">
            <Link href="/" className="hover:text-[#F0DCDD]">Privacy Policy</Link>
            <span>&bull;</span>
            <Link href="/" className="hover:text-[#F0DCDD]">Terms of Service</Link>
            <span>&bull;</span>
            <Link href="/" className="hover:text-[#F0DCDD]">Adoption Policies</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}

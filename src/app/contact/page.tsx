"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InquiryModal from "@/components/InquiryModal";
import { Phone, Mail, MapPin, Sparkles, Heart, Send, CheckCircle2 } from "lucide-react";
import { PUPPIES_DATA } from "@/data/puppies";
import { LITTERS_DATA } from "@/data/litters";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    puppyInterest: "General Inquiry",
    contactMethod: "Phone Call",
    location: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1000);
  };

  return (
    <main className="min-h-screen flex flex-col bg-[#FDF8F6]">
      <Navbar onOpenInquiry={() => setInquiryModalOpen(true)} />

      <div className="flex-1 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Page Header */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F7E4E6] text-[#C46D74] text-xs font-semibold uppercase tracking-wider">
              <Heart className="w-3.5 h-3.5 fill-current" />
              <span>Get In Touch With Jameshia</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#231617] tracking-tight">
              Contact Petite Puppy Co.
            </h1>

            <p className="text-base text-[#7A5C60] leading-relaxed">
              Have a question about one of our available puppies or upcoming litters? Jameshia Butler would love to speak with you.
            </p>
          </div>

          {/* Contact Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Info Panel */}
            <div className="lg:col-span-5 bg-white p-8 rounded-3xl border border-[#F0DCDD] shadow-sm space-y-8">
              <div>
                <h3 className="font-serif text-2xl font-bold text-[#231617]">
                  Breeder Information
                </h3>
                <p className="text-xs text-[#7A5C60] mt-1">
                  Located in Greenville, South Carolina. We welcome face-to-face puppy visits by appointment!
                </p>
              </div>

              <div className="space-y-4 text-xs text-[#231617]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#F7E4E6] text-[#C46D74] flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold">Location</div>
                    <div className="text-[#7A5C60]">Greenville, South Carolina, USA</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#F7E4E6] text-[#C46D74] flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold">Call or Text Jameshia</div>
                    <a href="tel:8645550192" className="text-[#C46D74] hover:underline font-semibold">(864) 555-0192</a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#F7E4E6] text-[#C46D74] flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold">Email Us</div>
                    <a href="mailto:jameshia@petitepuppyco.com" className="text-[#C46D74] hover:underline font-semibold">jameshia@petitepuppyco.com</a>
                  </div>
                </div>
              </div>

              <div className="bg-[#F9ECE9] p-4 rounded-2xl border border-[#F0DCDD] text-xs text-[#7A5C60] space-y-1">
                <div className="font-bold text-[#231617] flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#C46D74]" /> Response Guarantee
                </div>
                <p>Jameshia reviews every inquiry personally and aims to respond within 2-4 business hours.</p>
              </div>
            </div>

            {/* Right Contact Form */}
            <div className="lg:col-span-7 bg-white p-8 rounded-3xl border border-[#F0DCDD] shadow-sm">
              {isSubmitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-[#231617]">Message Received!</h3>
                  <p className="text-sm text-[#7A5C60] max-w-md mx-auto">
                    Thank you, <span className="font-bold text-[#231617]">{formData.name}</span>. Jameshia has received your message and will reach out to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h3 className="font-serif text-2xl font-bold text-[#231617]">
                    Send a Direct Message
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                    <div>
                      <label className="block font-semibold text-[#231617] mb-1">Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full p-3 bg-[#FDF8F6] border border-[#F0DCDD] rounded-xl focus:outline-none focus:border-[#C46D74]"
                      />
                    </div>

                    <div>
                      <label className="block font-semibold text-[#231617] mb-1">Email Address *</label>
                      <input
                        type="email"
                        required
                        placeholder="email@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full p-3 bg-[#FDF8F6] border border-[#F0DCDD] rounded-xl focus:outline-none focus:border-[#C46D74]"
                      />
                    </div>

                    <div>
                      <label className="block font-semibold text-[#231617] mb-1">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        placeholder="(864) 555-0123"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full p-3 bg-[#FDF8F6] border border-[#F0DCDD] rounded-xl focus:outline-none focus:border-[#C46D74]"
                      />
                    </div>

                    <div>
                      <label className="block font-semibold text-[#231617] mb-1">Puppy / Litter Interest</label>
                      <select
                        value={formData.puppyInterest}
                        onChange={(e) => setFormData({ ...formData, puppyInterest: e.target.value })}
                        className="w-full p-3 bg-[#FDF8F6] border border-[#F0DCDD] rounded-xl focus:outline-none focus:border-[#C46D74] font-medium"
                      >
                        <option value="General Inquiry">General Inquiry</option>
                        {PUPPIES_DATA.map((p) => (
                          <option key={p.id} value={p.name}>{p.name} ({p.breed})</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#231617] mb-1">Message</label>
                    <textarea
                      rows={4}
                      placeholder="How can Jameshia help you today?"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full p-3 bg-[#FDF8F6] border border-[#F0DCDD] rounded-xl text-xs focus:outline-none focus:border-[#C46D74]"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#C46D74] hover:bg-[#9E4950] text-white py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? <span>Sending...</span> : <><Send className="w-4 h-4" /><span>Send Message</span></>}
                  </button>
                </form>
              )}
            </div>

          </div>

        </div>
      </div>

      <Footer onOpenInquiry={() => setInquiryModalOpen(true)} onNavClick={() => {}} />

      <InquiryModal
        isOpen={inquiryModalOpen}
        onClose={() => setInquiryModalOpen(false)}
      />
    </main>
  );
}

"use client";

import React, { useState, useEffect } from "react";
import { PUPPIES_DATA } from "../data/puppies";
import { LITTERS_DATA } from "../data/litters";
import { X, Heart, Send, CheckCircle2, Sparkles } from "lucide-react";

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialPuppyName?: string;
}

export default function InquiryModal({
  isOpen,
  onClose,
  initialPuppyName,
}: InquiryModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    puppyInterest: initialPuppyName || "General Inquiry",
    contactMethod: "Phone Call",
    location: "",
    experience: "First-time owner",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (initialPuppyName) {
      setFormData((prev) => ({ ...prev, puppyInterest: initialPuppyName }));
    }
  }, [initialPuppyName]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1000);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm overflow-y-auto animate-in fade-in duration-200">
      <div className="bg-[#FDF8F6] rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border border-[#F0DCDD] relative my-auto">
        
        {/* Header Bar */}
        <div className="bg-white px-6 py-4 border-b border-[#F0DCDD] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-[#C46D74] text-white flex items-center justify-center">
              <Heart className="w-4 h-4 fill-current" />
            </div>
            <div>
              <h2 className="font-serif font-bold text-lg text-[#231617]">
                Puppy Inquiry Form
              </h2>
              <p className="text-[11px] text-[#C46D74]">Petite Puppy Co. &bull; Jameshia Butler, Owner</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-[#7A5C60] hover:bg-[#F7E4E6] hover:text-[#231617] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 max-h-[80vh] overflow-y-auto">
          {isSubmitted ? (
            <div className="text-center py-10 space-y-4">
              <div className="w-16 h-16 rounded-full bg-pink-100 text-[#C46D74] flex items-center justify-center mx-auto animate-bounce">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#231617]">
                Inquiry Received!
              </h3>
              <p className="text-sm text-[#7A5C60] max-w-md mx-auto leading-relaxed">
                Thank you for reaching out, <span className="font-bold text-[#231617]">{formData.name}</span>. Jameshia Butler has received your request regarding <span className="font-bold text-[#C46D74]">{formData.puppyInterest}</span> and will respond via {formData.contactMethod} within 2 to 4 hours.
              </p>
              <div className="pt-4">
                <button
                  onClick={handleReset}
                  className="bg-[#C46D74] text-white px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider shadow-md hover:bg-[#9E4950] transition-colors"
                >
                  Return to Website
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Friendly Reassurance Note */}
              <div className="bg-[#F9ECE9] p-4 rounded-2xl border border-[#F0DCDD] text-xs text-[#7A5C60] space-y-1">
                <div className="font-bold text-[#231617] flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#C46D74]" />
                  Direct Communication With Jameshia Butler
                </div>
                <p>
                  Have a question about one of our puppies or upcoming litters? We would love to hear from you. No automated sales bots — you deal directly with Jameshia in Greenville.
                </p>
              </div>

              {/* Selected Target Callout */}
              <div className="bg-white p-3 rounded-xl border border-[#F0DCDD] flex items-center justify-between text-xs">
                <span className="text-[#7A5C60]">You&apos;re inquiring about:</span>
                <span className="font-bold text-[#C46D74]">{formData.puppyInterest}</span>
              </div>

              {/* Input Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div>
                  <label className="block text-[#231617] font-semibold mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sarah Jenkins"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full p-3 bg-white border border-[#F0DCDD] rounded-xl focus:outline-none focus:border-[#C46D74]"
                  />
                </div>

                <div>
                  <label className="block text-[#231617] font-semibold mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="sarah@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full p-3 bg-white border border-[#F0DCDD] rounded-xl focus:outline-none focus:border-[#C46D74]"
                  />
                </div>

                <div>
                  <label className="block text-[#231617] font-semibold mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="(864) 555-0123"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full p-3 bg-white border border-[#F0DCDD] rounded-xl focus:outline-none focus:border-[#C46D74]"
                  />
                </div>

                <div>
                  <label className="block text-[#231617] font-semibold mb-1">
                    Puppy / Litter Interested In
                  </label>
                  <select
                    value={formData.puppyInterest}
                    onChange={(e) => setFormData({ ...formData, puppyInterest: e.target.value })}
                    className="w-full p-3 bg-white border border-[#F0DCDD] rounded-xl focus:outline-none focus:border-[#C46D74] font-medium text-[#231617]"
                  >
                    <option value="General Inquiry">General Inquiry / Not Sure Yet</option>
                    <optgroup label="Available Puppies">
                      {PUPPIES_DATA.map((p) => (
                        <option key={p.id} value={`${p.name} (${p.breed})`}>
                          {p.name} — {p.breed} ({p.status})
                        </option>
                      ))}
                    </optgroup>
                    <optgroup label="Upcoming Litters">
                      {LITTERS_DATA.map((l) => (
                        <option key={l.id} value={`Litter — ${l.litterName}`}>
                          Litter: {l.litterName} ({l.breed})
                        </option>
                      ))}
                    </optgroup>
                  </select>
                </div>
              </div>

              {/* Preferences */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div>
                  <label className="block text-[#231617] font-semibold mb-1">
                    Preferred Contact Method
                  </label>
                  <select
                    value={formData.contactMethod}
                    onChange={(e) => setFormData({ ...formData, contactMethod: e.target.value })}
                    className="w-full p-3 bg-white border border-[#F0DCDD] rounded-xl focus:outline-none focus:border-[#C46D74]"
                  >
                    <option value="Phone Call">Phone Call</option>
                    <option value="Text Message">Text Message</option>
                    <option value="Email">Email</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[#231617] font-semibold mb-1">
                    Your City & State
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Greenville, SC"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full p-3 bg-white border border-[#F0DCDD] rounded-xl focus:outline-none focus:border-[#C46D74]"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-[#231617] text-xs font-semibold mb-1">
                  Tell us about your home and lifestyle
                </label>
                <textarea
                  rows={3}
                  placeholder="Share a bit about your family, yard, work schedule, or any specific questions..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full p-3 bg-white border border-[#F0DCDD] rounded-xl text-xs focus:outline-none focus:border-[#C46D74]"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#C46D74] hover:bg-[#9E4950] text-white py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-2 active:scale-95 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span>Sending Inquiry...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Puppy Inquiry</span>
                  </>
                )}
              </button>

            </form>
          )}
        </div>

      </div>
    </div>
  );
}

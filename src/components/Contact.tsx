'use client';

import { useState } from 'react';
import { Mail, MapPin, ExternalLink } from 'lucide-react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <section
      id="contact"
      className="relative py-[60px] lg:py-[100px] min-h-[calc(100vh-140px)] bg-[var(--bg-blue-lo)]"
    >
      <div className="max-w-[1240px] mx-auto px-6">
        
        {/* Asymmetric Section Header: Cols 1–5 heading, Cols 8–12 text */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 mb-14 items-end">
          <div className="lg:col-span-5">
            <span className="micro-label text-[var(--text-3)] block mb-3">
              Direct Inquiries
            </span>
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-[var(--text-1)] leading-none">
              Contact
            </h1>
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <p className="text-[17px] leading-[1.65] text-[var(--text-2)] max-w-[68ch]">
              Available for film visual effects asset supervision, modeling leadership, and advanced 3D pipeline consulting worldwide.
            </p>
          </div>
        </div>

        {/* 12-Col Grid: Left Contact Info, Right Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Direct Contact Details (Cols 1–5) */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Email Card */}
            <div className="border border-[var(--line-blue)] hover:border-[var(--line-strong)] rounded-[var(--radius)] p-5 bg-transparent transition-colors">
              <div className="flex items-start gap-4">
                <div className="p-2 border border-[var(--line-blue)] rounded-[var(--radius)] text-[var(--text-3)]">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="micro-label text-[9px] text-[var(--text-3)] block mb-1">
                    Direct Email
                  </span>
                  <a
                    href="mailto:poojariganu@yahoo.co.in"
                    className="text-sm font-semibold text-[var(--text-1)] hover:underline"
                  >
                    poojariganu@yahoo.co.in
                  </a>
                </div>
              </div>
            </div>

            {/* Location Card */}
            <div className="border border-[var(--line-blue)] hover:border-[var(--line-strong)] rounded-[var(--radius)] p-5 bg-transparent transition-colors">
              <div className="flex items-start gap-4">
                <div className="p-2 border border-[var(--line-blue)] rounded-[var(--radius)] text-[var(--text-3)]">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="micro-label text-[9px] text-[var(--text-3)] block mb-1">
                    Current Location
                  </span>
                  <p className="text-sm font-semibold text-[var(--text-1)]">
                    Mumbai, Maharashtra, India
                  </p>
                  <p className="micro-label text-[10px] text-[var(--text-3)] mt-1">
                    Open to International Relocation & Remote Supervision
                  </p>
                </div>
              </div>
            </div>

            {/* Professional Links */}
            <div className="pt-2 grid grid-cols-2 gap-3">
              <a
                href="https://www.linkedin.com/in/ganesh-poojari-a878b017/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border border-[var(--line-blue)] hover:border-[var(--line-strong)] rounded-[var(--radius)] micro-label text-[10px] text-[var(--text-2)] hover:text-[var(--text-1)] flex items-center justify-between transition-colors"
              >
                <span>LinkedIn</span>
                <ExternalLink className="w-3 h-3 text-[var(--text-3)]" />
              </a>

              <a
                href="https://www.imdb.com/name/nm6199377/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border border-[var(--line-blue)] hover:border-[var(--line-strong)] rounded-[var(--radius)] micro-label text-[10px] text-[var(--text-2)] hover:text-[var(--text-1)] flex items-center justify-between transition-colors"
              >
                <span>IMDb Profile</span>
                <ExternalLink className="w-3 h-3 text-[var(--text-3)]" />
              </a>
            </div>

          </div>

          {/* Contact Inquiry Form (Cols 6–12) */}
          <div className="lg:col-span-7 lg:col-start-6 border border-[var(--line-blue)] rounded-[var(--radius)] p-6 sm:p-8 bg-transparent">
            {submitted ? (
              <div className="py-12 text-center">
                <span className="micro-label text-[11px] text-[var(--text-1)] block mb-2">
                  Message Sent
                </span>
                <p className="text-sm text-[var(--text-2)]">
                  Thank you for reaching out. I will respond to your inquiry shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="micro-label text-[10px] text-[var(--text-3)] block mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      className="w-full px-3.5 py-2.5 bg-transparent border border-[var(--line-blue)] focus:border-[var(--line-strong)] text-sm text-[var(--text-1)] placeholder-[var(--text-3)] rounded-[var(--radius)] outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="micro-label text-[10px] text-[var(--text-3)] block mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="jane@studio.com"
                      className="w-full px-3.5 py-2.5 bg-transparent border border-[var(--line-blue)] focus:border-[var(--line-strong)] text-sm text-[var(--text-1)] placeholder-[var(--text-3)] rounded-[var(--radius)] outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="micro-label text-[10px] text-[var(--text-3)] block mb-2">
                    Subject / Production Show
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="VFX Modeling Leadership Inquiry"
                    className="w-full px-3.5 py-2.5 bg-transparent border border-[var(--line-blue)] focus:border-[var(--line-strong)] text-sm text-[var(--text-1)] placeholder-[var(--text-3)] rounded-[var(--radius)] outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="micro-label text-[10px] text-[var(--text-3)] block mb-2">
                    Message / Project Details
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Briefly describe your production timeline, facility location, and asset scope..."
                    className="w-full px-3.5 py-2.5 bg-transparent border border-[var(--line-blue)] focus:border-[var(--line-strong)] text-sm text-[var(--text-1)] placeholder-[var(--text-3)] rounded-[var(--radius)] outline-none transition-colors resize-none"
                  />
                </div>

                <div className="pt-2 flex justify-end">
                  <button
                    type="submit"
                    disabled={loading}
                    className="micro-label px-6 py-3 border border-[var(--line-strong)] hover:border-[var(--text-1)] text-[var(--text-1)] bg-transparent rounded-[var(--radius)] transition-colors"
                  >
                    {loading ? 'Sending...' : 'Transmit Message'}
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}

'use client';

import { useState } from 'react';
import { Mail, MapPin, Film, Send, CheckCircle2, Play } from 'lucide-react';
import ShowreelModal from './ShowreelModal';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isShowreelOpen, setIsShowreelOpen] = useState(false);

  const ARTSTATION_URL = "https://ganesh.artstation.com/";
  const SHOWREEL_URL = "https://vimeo.com";

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 border-t border-zinc-800/60 bg-[#09090b] relative overflow-hidden">
      {/* Background Artwork Layer (Subtle 3D Sculpt Texture) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-[0.05]">
        <img
          src="/artwork/creature.jpg"
          alt=""
          className="w-full h-full object-cover object-center filter grayscale scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#09090b]/80 via-[#09090b]/90 to-[#09090b]" />
      </div>

      <div className="container max-w-6xl mx-auto px-4 z-10 relative">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-medium text-zinc-500 uppercase tracking-widest bg-zinc-900/90 px-3 py-1 rounded-full border border-zinc-800">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight mt-4 text-zinc-100">
            Contact & Inquiries
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base font-light leading-relaxed mt-2">
            Interested in hiring me for film VFX asset supervision, modeling leadership, or project inquiries? Feel free to reach out.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Contact Details Column */}
          <div className="lg:col-span-5 space-y-4">
            
            <div className="double-bezel">
              <div className="double-bezel-inner p-5 flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-[10px] font-medium text-zinc-500 uppercase tracking-wider">Email Address</h4>
                  <a href="mailto:poojariganu@yahoo.co.in" className="text-zinc-200 font-semibold text-sm hover:text-white transition-colors">
                    poojariganu@yahoo.co.in
                  </a>
                </div>
              </div>
            </div>

            <div className="double-bezel">
              <div className="double-bezel-inner p-5 flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-[10px] font-medium text-zinc-500 uppercase tracking-wider">Location</h4>
                  <p className="text-zinc-200 font-semibold text-sm">
                    Mumbai, Maharashtra, India
                  </p>
                  <p className="text-xs text-zinc-400 font-light mt-0.5">Open to Remote & Global Relocation</p>
                </div>
              </div>
            </div>

            {/* Social & Portfolio Links Grid */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <a
                href="https://www.linkedin.com/in/ganesh-poojari-a878b017/"
                target="_blank"
                rel="noopener noreferrer"
                className="double-bezel group transition-transform"
              >
                <div className="double-bezel-inner p-4 text-center flex flex-col items-center justify-center">
                  <svg className="w-5 h-5 text-zinc-400 group-hover:text-zinc-100 transition-colors mb-1.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                  <span className="text-xs font-medium text-zinc-300">LinkedIn</span>
                </div>
              </a>

              <a
                href={ARTSTATION_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="double-bezel group transition-transform"
              >
                <div className="double-bezel-inner p-4 text-center flex flex-col items-center justify-center">
                  <svg className="w-5 h-5 text-zinc-400 group-hover:text-zinc-100 transition-colors mb-1.5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M.057 18.816L3.435 13.01h.001l4.896 8.384H1.678A1.62 1.62 0 0 1 .057 18.816zm11.233-14.88a1.642 1.642 0 0 1 1.398.777l7.842 13.486c.277.476.297 1.05.053 1.543a1.636 1.636 0 0 1-1.451.858H8.847l2.443-4.185h6.666L12.69 7.421l-3.328 5.707-2.44-4.183 4.368-7.509a1.64 1.64 0 0 1 1.399-.777z"/>
                  </svg>
                  <span className="text-xs font-medium text-zinc-300">ArtStation</span>
                </div>
              </a>

              <button
                onClick={() => setIsShowreelOpen(true)}
                className="double-bezel group transition-transform text-left w-full cursor-pointer"
              >
                <div className="double-bezel-inner p-4 text-center flex flex-col items-center justify-center">
                  <Play className="w-5 h-5 text-zinc-400 fill-current group-hover:text-zinc-100 transition-colors mb-1.5" />
                  <span className="text-xs font-medium text-zinc-300">Showreel</span>
                </div>
              </button>

              <a
                href="https://www.imdb.com/name/nm6199377/"
                target="_blank"
                rel="noopener noreferrer"
                className="double-bezel group transition-transform"
              >
                <div className="double-bezel-inner p-4 text-center flex flex-col items-center justify-center">
                  <Film className="w-5 h-5 text-zinc-400 group-hover:text-zinc-100 transition-colors mb-1.5" />
                  <span className="text-xs font-medium text-zinc-300">IMDb Credits</span>
                </div>
              </a>
            </div>

          </div>

          {/* Form Column */}
          <div className="lg:col-span-7">
            <div className="double-bezel">
              <div className="double-bezel-inner p-6 sm:p-7">
                
                {submitted ? (
                  <div className="py-12 text-center space-y-4">
                    <div className="w-12 h-12 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 mx-auto flex items-center justify-center">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-semibold text-zinc-100">Message Sent</h3>
                    <p className="text-xs sm:text-sm text-zinc-400 max-w-sm mx-auto font-light">
                      Thank you for reaching out. Your message has been received and I will get back to you shortly.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-4 px-5 py-2 rounded-full bg-zinc-800 text-xs font-medium text-zinc-300 hover:text-white transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-medium text-zinc-400 uppercase tracking-wider mb-2">
                          Your Name
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Your name"
                          className="w-full rounded-lg bg-zinc-950/80 border border-zinc-800 px-3.5 py-2.5 text-sm text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-zinc-600 focus:ring-1 focus:ring-zinc-600 transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-zinc-400 uppercase tracking-wider mb-2">
                          Your Email
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="your@email.com"
                          className="w-full rounded-lg bg-zinc-950/80 border border-zinc-800 px-3.5 py-2.5 text-sm text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-zinc-600 focus:ring-1 focus:ring-zinc-600 transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-zinc-400 uppercase tracking-wider mb-2">
                        Subject
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="VFX Supervision / Project Inquiry"
                        className="w-full rounded-lg bg-zinc-950/80 border border-zinc-800 px-3.5 py-2.5 text-sm text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-zinc-600 focus:ring-1 focus:ring-zinc-600 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-zinc-400 uppercase tracking-wider mb-2">
                        Message
                      </label>
                      <textarea
                        rows={4}
                        required
                        placeholder="Tell me about your show or production requirements..."
                        className="w-full rounded-lg bg-zinc-950/80 border border-zinc-800 px-3.5 py-2.5 text-sm text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-zinc-600 focus:ring-1 focus:ring-zinc-600 transition-all resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-zinc-100 hover:bg-white px-6 py-3 text-sm font-medium text-zinc-950 transition-colors disabled:opacity-50"
                    >
                      {loading ? (
                        <span>Sending Message...</span>
                      ) : (
                        <>
                          <Send className="w-3.5 h-3.5" />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>
                  </form>
                )}

              </div>
            </div>
          </div>

        </div>

      </div>

      <ShowreelModal
        isOpen={isShowreelOpen}
        onClose={() => setIsShowreelOpen(false)}
        showreelUrl={SHOWREEL_URL}
      />
    </section>
  );
}

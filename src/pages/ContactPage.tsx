import { Reveal } from "@/shared"

export default function ContactPage() {
  return (
    <div className="pt-20">
      <section className="py-24 px-6 relative overflow-hidden" style={{ background: "#023785" }}>
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, rgba(254,254,254,0.4) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />

        <div className="max-w-6xl mx-auto relative z-10">
          <Reveal className="text-center mb-16">
            <p className="text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: "#93D4F0" }}>Contact Us</p>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4" style={{ fontFamily: "'DM Serif Display', serif" }}>Let's Plan Your Next Adventure</h1>
            <p className="text-blue-100 max-w-xl mx-auto text-lg">Reach out and a travel specialist will be in touch within 24 hours.</p>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-4 mb-16">
            {[
              { icon: "📧", label: "Email", value: "support@worldviewcationtravelandtours.com inquiry@worldviewcationtravelandtours.com partners@worldviewcationtravelandtours.com" },
              { icon: "📞", label: "Phone", value: "+63 908 417 5922" },
              { icon: "📍", label: "Location", value: "1047B Bagumbayan, Mendiola Street, Siniloan Laguna, 4019 Philippines." },
            ].map((c) => (
              <Reveal key={c.label}>
                <div className="rounded-3xl p-7 text-center" style={{ background: "rgba(254,254,254,0.08)", border: "1px solid rgba(254,254,254,0.15)" }}>
                  <div className="text-4xl mb-3">{c.icon}</div>
                  <div className="text-blue-200 text-xs font-semibold tracking-widest uppercase mb-1">{c.label}</div>
                  <div className="text-white font-medium">{c.value}</div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Contact form */}
          <Reveal>
            <div className="max-w-2xl mx-auto rounded-3xl p-8 md:p-10" style={{ background: "rgba(254,254,254,0.08)", border: "1px solid rgba(254,254,254,0.15)" }}>
              <h2 className="text-2xl font-bold text-white mb-6" style={{ fontFamily: "'DM Serif Display', serif" }}>Send Us a Message</h2>
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-blue-200 text-sm font-semibold mb-2">Name</label>
                    <input type="text" placeholder="Your full name" className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-blue-300 outline-none transition-all" style={{ background: "rgba(254,254,254,0.1)", border: "1px solid rgba(254,254,254,0.2)" }} />
                  </div>
                  <div>
                    <label className="block text-blue-200 text-sm font-semibold mb-2">Email</label>
                    <input type="email" placeholder="you@example.com" className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-blue-300 outline-none transition-all" style={{ background: "rgba(254,254,254,0.1)", border: "1px solid rgba(254,254,254,0.2)" }} />
                  </div>
                </div>
                <div>
                  <label className="block text-blue-200 text-sm font-semibold mb-2">Subject</label>
                  <input type="text" placeholder="How can we help?" className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-blue-300 outline-none transition-all" style={{ background: "rgba(254,254,254,0.1)", border: "1px solid rgba(254,254,254,0.2)" }} />
                </div>
                <div>
                  <label className="block text-blue-200 text-sm font-semibold mb-2">Message</label>
                  <textarea rows={4} placeholder="Tell us about your dream trip..." className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-blue-300 outline-none transition-all resize-none" style={{ background: "rgba(254,254,254,0.1)", border: "1px solid rgba(254,254,254,0.2)" }} />
                </div>
                <button type="submit" className="w-full py-4 rounded-xl font-semibold text-white text-base transition-all duration-300 hover:scale-[1.02] hover:shadow-lg" style={{ background: "linear-gradient(90deg, #0092CE, #023785)" }}>
                  Send Message
                </button>
              </form>
            </div>
          </Reveal>

          <Reveal className="text-center mt-16">
            <p className="text-blue-200 text-sm mb-6 tracking-widest uppercase font-semibold">Follow Our Journey</p>
            <div className="flex justify-center gap-4 flex-wrap">
              {/* Facebook */}
              <a href="#" aria-label="Facebook" className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg" style={{ background: "#1877F2" }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              {/* Instagram */}
              <a href="#" aria-label="Instagram" className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg" style={{ background: "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)" }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="white" stroke="none" />
                </svg>
              </a>
              {/* TikTok */}
              <a href="#" aria-label="TikTok" className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg" style={{ background: "#010101" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z" />
                </svg>
              </a>
              {/* YouTube */}
              <a href="#" aria-label="YouTube" className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg" style={{ background: "#FF0000" }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.96-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
                  <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#FF0000" />
                </svg>
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}

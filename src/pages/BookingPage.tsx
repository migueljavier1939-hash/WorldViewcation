import { useState } from "react"
import { Reveal } from "@/shared"

const fs = {
  borderColor: "rgba(0,146,206,0.25)",
  fontFamily: "'Outfit', sans-serif",
  background: "#FEFEFE",
} as React.CSSProperties

const SPECIAL_REQUIREMENTS = [
  "Business class flight",
  "Hotel 4★ or above",
  "Halal foods",
  "Dietary requirements",
  "Infant car seat",
  "Wheelchair assistance",
  "Airport VIP meet & greet",
  "English speaking guide",
]

export default function BookingPage() {
  const [tripType, setTripType] = useState<"local" | "international" | "">("")
  const [specialReqs, setSpecialReqs] = useState<string[]>([])
  const [submitted, setSubmitted] = useState(false)

  const toggleReq = (req: string) =>
    setSpecialReqs((prev) =>
      prev.includes(req) ? prev.filter((r) => r !== req) : [...prev, req]
    )

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  if (submitted) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center px-6" style={{ background: "linear-gradient(135deg, #023785 0%, #0092CE 100%)" }}>
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10 pointer-events-none" style={{ background: "#FEFEFE", transform: "translate(30%,-30%)" }} />
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full opacity-10 pointer-events-none" style={{ background: "#FEFEFE", transform: "translate(-30%,30%)" }} />
        <div className="text-center relative z-10" style={{ animation: "successPop 0.6s cubic-bezier(0.34,1.56,0.64,1) both" }}>
          <div className="relative inline-block mb-8">
            <div className="w-28 h-28 rounded-full flex items-center justify-center mx-auto" style={{ background: "rgba(254,254,254,0.15)", border: "3px solid rgba(254,254,254,0.4)", animation: "pulseRing 2s ease-in-out infinite" }}>
              <span className="text-5xl" style={{ animation: "planeFly 1s 0.3s ease-out both" }}>✈️</span>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "'DM Serif Display', serif", animation: "fadeUp 0.5s 0.3s ease-out both" }}>Inquiry Received!</h2>
          <p className="text-blue-100 text-lg mb-10 max-w-md mx-auto" style={{ animation: "fadeUp 0.5s 0.45s ease-out both" }}>
            Thank you for reaching out. Our travel specialist will contact you within 24 hours to discuss your perfect trip.
          </p>
          <div style={{ animation: "fadeUp 0.5s 0.6s ease-out both" }}>
            <button onClick={() => setSubmitted(false)} className="px-8 py-3 rounded-full font-semibold text-white transition-all hover:scale-105" style={{ background: "rgba(254,254,254,0.2)", border: "2px solid rgba(254,254,254,0.5)" }}>
              Submit Another Inquiry
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-20" style={{ background: "#E8F4FD" }}>
      {/* Header */}
      <div className="py-16 px-6 text-center relative overflow-hidden" style={{ background: "linear-gradient(135deg, #023785 0%, #0092CE 100%)" }}>
        <div className="absolute top-0 right-0 w-72 h-72 rounded-full opacity-10 pointer-events-none" style={{ background: "#FEFEFE", transform: "translate(30%,-30%)" }} />
        <Reveal>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2" style={{ fontFamily: "'DM Serif Display', serif" }}>
            World Viewcation Travel &amp; Tours
          </h1>
          <p className="text-blue-100 text-lg font-light">Inquiry Form</p>
        </Reveal>
      </div>

      {/* Form */}
      <div className="max-w-3xl mx-auto px-6 py-16">
        <Reveal>
          <form onSubmit={handleSubmit} className="space-y-10">

            {/* ── 1. Destination ─────────────────────────────────── */}
            <div className="rounded-2xl p-7 shadow-sm" style={{ background: "#FEFEFE", border: "1px solid rgba(0,146,206,0.15)" }}>
              <h3 className="text-lg font-bold mb-1" style={{ color: "#023785", fontFamily: "'DM Serif Display', serif" }}>Where would you like to go?</h3>
              <p className="text-xs text-slate-400 mb-4 uppercase tracking-widest">Destination type</p>

              <div className="flex gap-4 mb-5 flex-wrap">
                {(["local", "international"] as const).map((type) => (
                  <label key={type} className="flex items-center gap-2.5 cursor-pointer group">
                    <div
                      onClick={() => setTripType(type)}
                      className="w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all"
                      style={{ borderColor: tripType === type ? "#0092CE" : "rgba(0,146,206,0.3)", background: tripType === type ? "#0092CE" : "transparent" }}
                    >
                      {tripType === type && <div className="w-2 h-2 rounded-full bg-white" />}
                    </div>
                    <span className="text-sm font-medium capitalize" style={{ color: "#023785" }}>
                      {type === "local" ? "Local / Domestic" : "International"}
                    </span>
                  </label>
                ))}
              </div>

              <label className="block text-sm font-semibold mb-2" style={{ color: "#023785" }}>Please specify the location</label>
              <input type="text" placeholder="e.g. Palawan, Philippines or Tokyo, Japan" required className="form-field w-full px-4 py-3 rounded-xl border text-sm transition-all" style={fs} />
            </div>

            {/* ── 2. Service ─────────────────────────────────────── */}
            <div className="rounded-2xl p-7 shadow-sm" style={{ background: "#FEFEFE", border: "1px solid rgba(0,146,206,0.15)" }}>
              <h3 className="text-lg font-bold mb-1" style={{ color: "#023785", fontFamily: "'DM Serif Display', serif" }}>Which service are you interested in?</h3>
              <p className="text-xs text-slate-400 mb-4 uppercase tracking-widest">Service type</p>
              <select required className="form-field w-full px-4 py-3 rounded-xl border text-sm transition-all" style={fs}>
                <option value="">— Select a service —</option>
                <option>Solo Travel</option>
                <option>2–10 Pax Small Group Custom Travel</option>
                <option>Clan / Family Outing</option>
                <option>Corporate Team Building</option>
                <option>Educational Field Trip</option>
                <option>Sports Event Travel</option>
              </select>
            </div>

            {/* ── 3. Group Size ──────────────────────────────────── */}
            <div className="rounded-2xl p-7 shadow-sm" style={{ background: "#FEFEFE", border: "1px solid rgba(0,146,206,0.15)" }}>
              <h3 className="text-lg font-bold mb-1" style={{ color: "#023785", fontFamily: "'DM Serif Display', serif" }}>Estimated Group Size (Pax)</h3>
              <p className="text-xs text-slate-400 mb-4 uppercase tracking-widest">Number of travelers</p>
              <select required className="form-field w-full px-4 py-3 rounded-xl border text-sm transition-all" style={fs}>
                <option value="">— Select group size —</option>
                <option>2–4 pax</option>
                <option>5–8 pax</option>
                <option>9–15 pax</option>
                <option>16–30 pax</option>
                <option>31–50 pax</option>
                <option>Above 50 pax</option>
              </select>
            </div>

            {/* ── 4. Special Requirements ────────────────────────── */}
            <div className="rounded-2xl p-7 shadow-sm" style={{ background: "#FEFEFE", border: "1px solid rgba(0,146,206,0.15)" }}>
              <h3 className="text-lg font-bold mb-1" style={{ color: "#023785", fontFamily: "'DM Serif Display', serif" }}>Special Requirements</h3>
              <p className="text-xs text-slate-400 mb-5 uppercase tracking-widest">Select all that apply — add details in the Remarks section below</p>
              <div className="grid sm:grid-cols-2 gap-3">
                {SPECIAL_REQUIREMENTS.map((req) => {
                  const checked = specialReqs.includes(req)
                  return (
                    <label key={req} className="flex items-center gap-3 cursor-pointer group p-3 rounded-xl transition-all" style={{ background: checked ? "rgba(0,146,206,0.06)" : "transparent", border: `1px solid ${checked ? "rgba(0,146,206,0.3)" : "rgba(0,146,206,0.1)"}` }}>
                      <div
                        onClick={() => toggleReq(req)}
                        className="w-5 h-5 rounded flex items-center justify-center flex-shrink-0 transition-all"
                        style={{ background: checked ? "#0092CE" : "transparent", border: `2px solid ${checked ? "#0092CE" : "rgba(0,146,206,0.35)"}` }}
                      >
                        {checked && <span className="text-white text-xs font-bold leading-none">✓</span>}
                      </div>
                      <span className="text-sm" style={{ color: checked ? "#023785" : "#475569", fontWeight: checked ? 600 : 400 }}>{req}</span>
                    </label>
                  )
                })}
              </div>
            </div>

            {/* ── 5. Budget ──────────────────────────────────────── */}
            <div className="rounded-2xl p-7 shadow-sm" style={{ background: "#FEFEFE", border: "1px solid rgba(0,146,206,0.15)" }}>
              <h3 className="text-lg font-bold mb-1" style={{ color: "#023785", fontFamily: "'DM Serif Display', serif" }}>Estimated Budget Per Person (PHP)</h3>
              <p className="text-xs text-slate-400 mb-4 uppercase tracking-widest">Per person budget range</p>
              <select required className="form-field w-full px-4 py-3 rounded-xl border text-sm transition-all" style={fs}>
                <option value="">— Select budget range —</option>
                <option>₱1,500 – ₱2,500</option>
                <option>₱2,500 – ₱3,500</option>
                <option>₱3,500 – ₱5,000</option>
                <option>₱5,000 – ₱8,000</option>
                <option>₱8,000 – ₱15,000</option>
                <option>₱15,000 – ₱25,000</option>
                <option>₱25,000 – ₱35,000</option>
                <option>₱35,000 – ₱50,000</option>
                <option>₱50,000 – ₱100,000</option>
                <option>₱100,000 &amp; Above</option>
              </select>
            </div>

            {/* ── 6. Contact Details ─────────────────────────────── */}
            <div className="rounded-2xl p-7 shadow-sm" style={{ background: "#FEFEFE", border: "1px solid rgba(0,146,206,0.15)" }}>
              <h3 className="text-lg font-bold mb-1" style={{ color: "#023785", fontFamily: "'DM Serif Display', serif" }}>Your Details</h3>
              <p className="text-xs text-slate-400 mb-5 uppercase tracking-widest">Contact information</p>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold mb-2" style={{ color: "#023785" }}>Name</label>
                  <input type="text" placeholder="Your full name" required className="form-field w-full px-4 py-3 rounded-xl border text-sm transition-all" style={fs} />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold mb-2" style={{ color: "#023785" }}>Contact Number</label>
                    <input type="tel" placeholder="+63 9XX XXX XXXX" required className="form-field w-full px-4 py-3 rounded-xl border text-sm transition-all" style={fs} />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2" style={{ color: "#023785" }}>Viber / WhatsApp</label>
                    <input type="tel" placeholder="+63 9XX XXX XXXX" className="form-field w-full px-4 py-3 rounded-xl border text-sm transition-all" style={fs} />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold mb-2" style={{ color: "#023785" }}>Email Address</label>
                    <input type="email" placeholder="you@example.com" required className="form-field w-full px-4 py-3 rounded-xl border text-sm transition-all" style={fs} />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2" style={{ color: "#023785" }}>Travel Date</label>
                    <input type="date" required className="form-field w-full px-4 py-3 rounded-xl border text-sm transition-all" style={fs} />
                  </div>
                </div>
              </div>
            </div>

            {/* ── 7. How did you find us ─────────────────────────── */}
            <div className="rounded-2xl p-7 shadow-sm" style={{ background: "#FEFEFE", border: "1px solid rgba(0,146,206,0.15)" }}>
              <h3 className="text-lg font-bold mb-1" style={{ color: "#023785", fontFamily: "'DM Serif Display', serif" }}>How did you find World Viewcation Travel &amp; Tours?</h3>
              <p className="text-xs text-slate-400 mb-4 uppercase tracking-widest">Referral source</p>
              <select required className="form-field w-full px-4 py-3 rounded-xl border text-sm transition-all" style={fs}>
                <option value="">— Select one —</option>
                <option>Facebook</option>
                <option>Instagram</option>
                <option>Travel Fair Event</option>
                <option>Google Business Profile</option>
                <option>Travel Website</option>
                <option>Blog / Vlog</option>
                <option>Travel Agent</option>
                <option>Referral from a friend known by World Viewcation Travel & Tours</option>
              </select>
            </div>

            {/* ── 8. Remarks ─────────────────────────────────────── */}
            <div className="rounded-2xl p-7 shadow-sm" style={{ background: "#FEFEFE", border: "1px solid rgba(0,146,206,0.15)" }}>
              <h3 className="text-lg font-bold mb-1" style={{ color: "#023785", fontFamily: "'DM Serif Display', serif" }}>Remarks</h3>
              <p className="text-xs text-slate-400 mb-4 uppercase tracking-widest">Additional details, special requests, or notes</p>
              <textarea
                rows={5}
                placeholder="Add any additional details about your trip, special requirements selected above, dietary specifics, preferred hotel areas, promo that you want to avail, or anything else you'd like us to know..."
                className="form-field w-full px-4 py-3 rounded-xl border text-sm transition-all"
                style={{ ...fs, resize: "vertical", minHeight: "120px" }}
              />
            </div>

            {/* ── Submit ─────────────────────────────────────────── */}
            <button
              type="submit"
              className="w-full py-5 rounded-2xl font-bold text-white text-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
              style={{ background: "linear-gradient(90deg, #0092CE, #023785)" }}
            >
              Submit Inquiry
            </button>

          </form>
        </Reveal>
      </div>
    </div>
  )
}

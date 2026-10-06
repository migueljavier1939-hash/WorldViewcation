import { useState } from "react"
import { useNavigate } from "react-router"
import { Reveal } from "@/shared"

const STEPS = [
  { num: "01", title: "Tell Us Your Dream", desc: "Share your destination wishlist, travel dates, group size, and interests." },
  { num: "02", title: "We Build Your Plan", desc: "Our travel specialists craft a personalized itinerary tailored to you." },
  { num: "03", title: "Review & Refine", desc: "Tweak any detail until the plan feels exactly right for your vision." },
  { num: "04", title: "Pack & Go", desc: "We handle all logistics — you just show up and enjoy the adventure." },
]

const INTERESTS = [
  { icon: "🌊", label: "Beach & Diving" },
  { icon: "🏔️", label: "Mountain Trekking" },
  { icon: "🍜", label: "Food & Culinary" },
  { icon: "🏛️", label: "Culture & Heritage" },
  { icon: "🦁", label: "Wildlife & Nature" },
  { icon: "🛍️", label: "Shopping & Leisure" },
  { icon: "📸", label: "Photography" },
  { icon: "🧘", label: "Wellness & Spa" },
]

export default function CustomizePage() {
  const navigate = useNavigate()
  const [selected, setSelected] = useState<string[]>([])

  const toggle = (label: string) =>
    setSelected((prev) => prev.includes(label) ? prev.filter((l) => l !== label) : [...prev, label])

  return (
    <div className="pt-20">
      {/* Banner */}
      <div className="py-20 px-6 text-center relative overflow-hidden" style={{ background: "linear-gradient(160deg, #023785 0%, #0092CE 100%)" }}>
        <div className="absolute top-0 left-1/2 w-96 h-96 rounded-full opacity-10 -translate-x-1/2 -translate-y-1/2 pointer-events-none" style={{ background: "#FEFEFE" }} />
        <Reveal>
          <p className="text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: "#93D4F0" }}>Customize Your Trip</p>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4" style={{ fontFamily: "'DM Serif Display', serif" }}>Your Journey, Your Way</h1>
          <p className="text-blue-100 max-w-xl mx-auto text-lg">Have something different in mind? Tell us your destination, schedule, budget, group size, and interests. We will help create a tailored fit travel plan specially for you.</p>
        </Reveal>
      </div>

      {/* How it works */}
      <section className="py-24 px-6" style={{ background: "#FEFEFE" }}>
        <div className="max-w-6xl mx-auto">
          <Reveal className="text-center mb-16">
            <p className="text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: "#0092CE" }}>How It Works</p>
            <h2 className="text-4xl font-bold" style={{ fontFamily: "'DM Serif Display', serif", color: "#023785" }}>Four Easy Steps</h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {STEPS.map((s, i) => (
              <Reveal key={s.num} className={`delay-${(i + 1) * 150}`}>
                <div className="rounded-3xl p-7 h-full relative overflow-hidden" style={{ background: "linear-gradient(135deg, #023785 0%, #0092CE 100%)" }}>
                  <div className="text-6xl font-black mb-4 leading-none" style={{ color: "rgba(254,254,254,0.12)", fontFamily: "'DM Serif Display', serif" }}>{s.num}</div>
                  <h3 className="text-white font-bold text-lg mb-3">{s.title}</h3>
                  <p className="text-blue-100 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Pick your interests */}
      <section className="py-24 px-6" style={{ background: "#E8F4FD" }}>
        <div className="max-w-4xl mx-auto text-center">
          <Reveal className="mb-12">
            <p className="text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: "#0092CE" }}>Interests</p>
            <h2 className="text-4xl font-bold mb-4" style={{ fontFamily: "'DM Serif Display', serif", color: "#023785" }}>What Excites You?</h2>
            <p className="text-slate-500">Choose what you love and we will tailor your itinerary around it.</p>
          </Reveal>
          <Reveal>
            <div className="flex flex-wrap gap-4 justify-center mb-12">
              {INTERESTS.map((item) => {
                const active = selected.includes(item.label)
                return (
                  <button
                    key={item.label}
                    onClick={() => toggle(item.label)}
                    className="flex items-center gap-2 px-5 py-3 rounded-full font-semibold text-sm transition-all duration-300 hover:scale-105"
                    style={{
                      background: active ? "linear-gradient(90deg, #0092CE, #023785)" : "#FEFEFE",
                      color: active ? "#FEFEFE" : "#023785",
                      border: active ? "2px solid transparent" : "2px solid rgba(2,55,133,0.15)",
                      boxShadow: active ? "0 4px 14px rgba(0,146,206,0.35)" : "0 2px 8px rgba(0,146,206,0.08)",
                    }}
                  >
                    <span>{item.icon}</span>
                    <span>{item.label}</span>
                  </button>
                )
              })}
            </div>
            <div
              className="transition-all duration-500 overflow-hidden"
              style={{ maxHeight: selected.length > 0 ? "80px" : "0px", opacity: selected.length > 0 ? 1 : 0 }}
            >
              <button
                onClick={() => { navigate("/book"); window.scrollTo({ top: 0 }) }}
                className="px-10 py-4 rounded-full font-semibold text-white text-base transition-all duration-300 hover:scale-105 hover:shadow-xl"
                style={{ background: "linear-gradient(90deg, #0092CE, #023785)" }}
              >
                Start Planning My Trip →
              </button>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}

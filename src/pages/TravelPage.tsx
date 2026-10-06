import { useState, useEffect } from "react"
import { useNavigate } from "react-router"
import { Reveal } from "@/shared"
import imgBaguio from "@/imports/domestic_baguio.jpeg"
import imgMayon from "@/imports/domestic_mayon.jpeg"
import imgVigan from "@/imports/domestic_vigan.jpeg"
import imgVilla from "@/imports/domestic_villa.jpeg"
import imgIntramuros from "@/imports/edu_intramuros.jpeg"
import imgRizal from "@/imports/edu_rizal.jpeg"
import imgCemetery from "@/imports/edu_cemetery2.jpeg"
import imgBataan from "@/imports/edu_bataan.jpeg"
import imgMuseum from "@/imports/edu_museum.jpeg"
import imgBoracay from "@/imports/beach_boracay.jpeg"
import imgCoron from "@/imports/2. Coron Palawan, Philippines.jpeg"
import imgCalatagan from "@/imports/beach_calatagan.jpeg"
import imgJomalig from "@/imports/beach_jomalig.jpeg"
import imgHKDisneyland from "@/imports/0CFFE11D-CC47-4714-9F94-52065F250D32.png"
import imgUniversalSG from "@/imports/intl_universal_sg.jpeg"
import imgLegoland from "@/imports/intl_legoland.jpeg"
import imgMinneriya from "@/imports/intl_minneriya.jpeg"

// ─── Category data ─────────────────────────────────────────────────────────
const TRAVEL_CATEGORIES = [
  {
    id: "beach", label: "Beach and Island Escapes", icon: "🏖️",
    photos: [
      { src: imgBoracay,   caption: "Boracay" },
      { src: imgCoron,     caption: "Coron, Palawan" },
      { src: imgCalatagan, caption: "Calatagan Beach, Batangas" },
      { src: imgJomalig,   caption: "Jomalig Island" },
    ],
  },
  {
    id: "international", label: "International Adventures", icon: "🌍",
    photos: [
      { src: imgHKDisneyland, caption: "Hong Kong Disneyland" },
      { src: imgUniversalSG,  caption: "Universal Studios Singapore" },
      { src: imgLegoland,     caption: "Legoland Malaysia" },
      { src: imgMinneriya,    caption: "Minneriya National Park, Sri Lanka" },
    ],
  },
  {
    id: "domestic", label: "Domestic / Local Adventures", icon: "🗺️",
    photos: [
      { src: imgBaguio, caption: "Baguio City" },
      { src: imgMayon, caption: "Vigan, Ilocos Sur" },
      { src: imgVigan, caption: "Mayon Volcano" },
      { src: imgVilla, caption: "Villa Escudero" },
    ],
  },
  {
    id: "educational", label: "Educational Tours", icon: "🎓",
    photos: [
      { src: imgIntramuros, caption: "Educational Tours" },
      { src: imgRizal, caption: "Dr. Jose P. Rizal Shrine" },
      { src: imgCemetery, caption: "Bataan" },
      { src: imgBataan, caption: "Intramuros" },
      { src: imgMuseum, caption: "Museum Y" },
    ],
  },
  {
    id: "corporate", label: "Corporate Travel", icon: "💼",
    photos: [
      { src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=900&h=560&fit=crop&auto=format", caption: "Conference and events" },
      { src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=900&h=560&fit=crop&auto=format", caption: "Corporate training sessions" },
      { src: "https://images.unsplash.com/photo-1571645163064-77faa9676a46?w=900&h=560&fit=crop&auto=format", caption: "Business summit" },
      { src: "https://images.unsplash.com/photo-1627931539006-d5c4677e05ea?w=900&h=560&fit=crop&auto=format", caption: "Executive presentation" },
    ],
  },
  {
    id: "sports", label: "Sports and Event Travel", icon: "🏟️",
    photos: [
      { src: "https://images.unsplash.com/photo-1537228783107-df09e892bdbb?w=900&h=560&fit=crop&auto=format", caption: "Live concert experience" },
      { src: "https://images.unsplash.com/photo-1596727362302-b8d891c42ab8?w=900&h=560&fit=crop&auto=format", caption: "Street event festival" },
      { src: "https://images.unsplash.com/photo-1452626038306-9aae5e071dd3?w=900&h=560&fit=crop&auto=format", caption: "Marathon race day" },
      { src: "https://images.unsplash.com/photo-1565483276060-e6730c0cc6a1?w=900&h=560&fit=crop&auto=format", caption: "Stadium atmosphere" },
    ],
  },
  {
    id: "group", label: "Group Tours", icon: "👥",
    photos: [
      { src: "https://images.unsplash.com/photo-1506869640319-fe1a24fd76dc?w=900&h=560&fit=crop&auto=format", caption: "Summit group adventure" },
      { src: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=900&h=560&fit=crop&auto=format", caption: "Friends on tour" },
      { src: "https://images.unsplash.com/photo-1539635278303-d4002c07eae3?w=900&h=560&fit=crop&auto=format", caption: "Group fun and games" },
      { src: "https://images.unsplash.com/photo-1536607961765-592e80bcc19e?w=900&h=560&fit=crop&auto=format", caption: "Mountain trail group" },
    ],
  },
]

// ─── Slideshow ─────────────────────────────────────────────────────────────
function CategorySlideshow({ photos }: { photos: { src: string; caption: string }[] }) {
  const [current, setCurrent] = useState(0)
  const [animDir, setAnimDir] = useState<"left" | "right">("right")
  const [sliding, setSliding] = useState(false)

  useEffect(() => {
    const t = setInterval(() => slide("right"), 4000)
    return () => clearInterval(t)
  }, [current])

  const slide = (dir: "left" | "right") => {
    if (sliding) return
    setAnimDir(dir)
    setSliding(true)
    setTimeout(() => {
      setCurrent((c) => dir === "right" ? (c + 1) % photos.length : (c - 1 + photos.length) % photos.length)
      setSliding(false)
    }, 350)
  }

  return (
    <div className="relative rounded-2xl overflow-hidden mt-6 shadow-xl" style={{ height: "340px", background: "#023785" }}>
      <img key={current} src={photos[current].src} alt={photos[current].caption} className="w-full h-full object-cover"
        style={{ animation: sliding ? `${animDir === "right" ? "slideshow-out-left" : "slideshow-out-right"} 0.35s ease forwards` : "slideshow-in 0.35s ease forwards" }} />
      <div className="absolute bottom-0 left-0 right-0 px-5 py-4" style={{ background: "linear-gradient(to top, rgba(2,55,133,0.85) 0%, transparent 100%)" }}>
        <p className="text-white text-sm font-medium">{photos[current].caption}</p>
      </div>
      <button onClick={() => slide("left")} className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full flex items-center justify-center text-white text-xl transition-all hover:scale-110" style={{ background: "rgba(2,55,133,0.7)", backdropFilter: "blur(6px)" }} aria-label="Previous">‹</button>
      <button onClick={() => slide("right")} className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full flex items-center justify-center text-white text-xl transition-all hover:scale-110" style={{ background: "rgba(2,55,133,0.7)", backdropFilter: "blur(6px)" }} aria-label="Next">›</button>
      <div className="absolute bottom-10 right-4 flex gap-1.5">
        {photos.map((_, i) => (
          <button key={i} onClick={() => { setAnimDir("right"); setCurrent(i) }} style={{ width: i === current ? "18px" : "6px", height: "6px", borderRadius: "3px", background: i === current ? "#FEFEFE" : "rgba(254,254,254,0.5)", border: "none", cursor: "pointer", transition: "all 0.3s" }} aria-label={`Photo ${i + 1}`} />
        ))}
      </div>
    </div>
  )
}


// ─── Page ──────────────────────────────────────────────────────────────────
export default function TravelPage() {
  const [activeId, setActiveId] = useState<string | null>(null)
  const navigate = useNavigate()
  const active = TRAVEL_CATEGORIES.find((c) => c.id === activeId) ?? null

  return (
    <div className="pt-20">
      {/* Banner */}
      <div className="py-20 px-6 text-center relative overflow-hidden" style={{ background: "#FEFEFE" }}>
        <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, rgba(0,146,206,0.12) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
        <Reveal>
          <p className="text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: "#0092CE" }}>Travel</p>
          <h1 className="text-5xl md:text-6xl font-bold mb-3" style={{ fontFamily: "'DM Serif Display', serif", color: "#023785" }}>Featured Travel Experiences</h1>
          <p className="text-slate-500 max-w-xl mx-auto text-lg">Find your kind of adventure</p>
        </Reveal>
      </div>

      {/* Categories */}
      <section className="px-6 pb-24" style={{ background: "#FEFEFE" }}>
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="flex flex-wrap gap-3 justify-center mb-10">
              {TRAVEL_CATEGORIES.map((cat) => {
                const isActive = activeId === cat.id
                return (
                  <button key={cat.id} onClick={() => setActiveId(isActive ? null : cat.id)}
                    className="flex items-center gap-2 px-5 py-3 rounded-full font-semibold text-sm transition-all duration-300 hover:scale-105"
                    style={{ background: isActive ? "linear-gradient(90deg, #023785, #0092CE)" : "rgba(2,55,133,0.06)", color: isActive ? "#FEFEFE" : "#023785", border: isActive ? "2px solid transparent" : "2px solid rgba(2,55,133,0.15)", boxShadow: isActive ? "0 8px 24px rgba(0,146,206,0.25)" : "none" }}
                  >
                    <span>{cat.icon}</span>
                    <span>{cat.label}</span>
                    <span className="ml-1 transition-transform duration-300" style={{ transform: isActive ? "rotate(180deg)" : "rotate(0deg)", display: "inline-block" }}>▾</span>
                  </button>
                )
              })}
            </div>

            {active && (
              <div key={active.id} className="rounded-3xl overflow-hidden" style={{ background: "linear-gradient(135deg, #023785 0%, #0092CE 100%)", padding: "2px", animation: "fadeSlideUp 0.4s ease forwards" }}>
                <div className="rounded-3xl p-6 md:p-8" style={{ background: "#FEFEFE" }}>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl">{active.icon}</span>
                      <div>
                        <h3 className="text-xl font-bold" style={{ color: "#023785" }}>{active.label}</h3>
                        <p className="text-slate-400 text-sm">{active.photos.length} featured photos</p>
                      </div>
                    </div>
                    <button onClick={() => { navigate("/book"); window.scrollTo({ top: 0 }) }} className="px-5 py-2.5 rounded-full text-sm font-semibold text-white transition-all hover:scale-105 hover:shadow-md hidden sm:inline-flex items-center gap-1" style={{ background: "linear-gradient(90deg, #0092CE, #023785)" }}>
                      Book This Experience →
                    </button>
                  </div>
                  <CategorySlideshow photos={active.photos} />
                </div>
              </div>
            )}

            {!active && (
              <div className="text-center py-8 text-slate-400 text-sm">Select a category above to explore photos</div>
            )}
          </Reveal>
        </div>
      </section>

      {/* CTA to booking */}
      <div className="py-12 px-6 text-center" style={{ background: "#E8F4FD" }}>
        <p className="text-slate-500 mb-4">Ready to make it happen?</p>
        <button onClick={() => { navigate("/book"); window.scrollTo({ top: 0 }) }} className="px-10 py-4 rounded-full font-semibold text-white text-base transition-all duration-300 hover:scale-105 hover:shadow-xl" style={{ background: "linear-gradient(90deg, #0092CE, #023785)" }}>
          Submit an Inquiry →
        </button>
      </div>
    </div>
  )
}

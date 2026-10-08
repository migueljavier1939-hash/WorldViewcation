import { useState, useEffect } from "react"
import { useNavigate } from "react-router"
import { Reveal } from "@/shared"
import heroImg1 from "@/imports/1st_photo.jpeg"
import heroImg2 from "@/imports/2nd_photo.jpeg"
import heroImg4 from "@/imports/4. Nine Arches Bridge, Sri Lanka.jpeg"
import heroImg5 from "@/imports/2. Coron Palawan, Philippines.jpeg"
import marinaBaySands from "@/imports/3._Marina_Bay_Sands__Singapore.jpeg"
import aboutUsImg from "@/imports/att.LJsU1ybP8H2ZkaGcxhLcRTrsMQyOKtwJtpxwPdRblZU.jpeg"

const HERO_IMAGES = [heroImg1, heroImg2, heroImg4, heroImg5]

// ─── Hero ──────────────────────────────────────────────────────────────────
function Hero() {
  const [current, setCurrent] = useState(0)
  const [prev, setPrev] = useState<number | null>(null)
  const [sliding, setSliding] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const timer = setInterval(() => {
      setPrev(current)
      setSliding(true)
      setCurrent((c) => (c + 1) % HERO_IMAGES.length)
      setTimeout(() => { setPrev(null); setSliding(false) }, 700)
    }, 5000)
    return () => clearInterval(timer)
  }, [current])

  const goTo = (idx: number) => {
    if (idx === current || sliding) return
    setPrev(current)
    setSliding(true)
    setCurrent(idx)
    setTimeout(() => { setPrev(null); setSliding(false) }, 700)
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ fontFamily: "'Outfit', sans-serif" }}>
      <div className="absolute inset-0">
        {prev !== null && (
          <div className="absolute inset-0 bg-center bg-cover" style={{ backgroundImage: `url('${HERO_IMAGES[prev]}')`, animation: "slideOutLeft 0.7s ease forwards" }} />
        )}
        <div key={current} className="absolute inset-0 bg-center bg-cover" style={{ backgroundImage: `url('${HERO_IMAGES[current]}')`, animation: sliding ? "slideInRight 0.7s ease forwards" : "none" }} />
      </div>

      {/* Minimal dark vignette — no blue tint, just enough for text legibility */}
      <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.15) 50%, rgba(0,0,0,0.45) 100%)" }} />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="hero-text-1 mb-3">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase" style={{ background: "rgba(0,146,206,0.35)", color: "#E8F4FD", border: "1px solid rgba(0,146,206,0.5)" }}>
            Discover · Explore · Experience
          </span>
        </div>
        <h1 className="hero-text-2 font-bold text-white mb-2 leading-tight" style={{ fontFamily: "'DM Serif Display', serif", fontSize: "clamp(2.5rem, 5vw, 4rem)", width: "max-content", margin: "0 auto 0.5rem" }}>
          World Viewcation Travel & Tours
        </h1>
        <div className="hero-text-2 mb-6">
          <button
            onClick={() => { navigate("/book"); window.scrollTo({ top: 0 }) }}
            className="animated-gradient transition-all duration-300 hover:scale-105 hover:drop-shadow-lg cursor-pointer"
            style={{ background: "linear-gradient(90deg, #FEFEFE, #0092CE, #FEFEFE)", backgroundSize: "200% auto", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", fontFamily: "'Style Script', cursive", fontStyle: "italic", fontSize: "clamp(1.8rem, 4vw, 3rem)", fontWeight: "bold", display: "inline-block" }}
          >
            Where Would You Like to Go? '
          </button>
        </div>
        <h2 className="hero-text-3 text-blue-100 text-2xl md:text-2xl mb-10 max-w-2xl mx-auto font-light leading-relaxed">
          Travel beyond boundaries
        </h2>
        <div className="hero-text-3 flex justify-center">
          <button onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })} className="px-8 py-4 rounded-full font-semibold text-white text-base border-2 border-white/40 hover:border-white/80 hover:bg-white/10 transition-all duration-300">
            Learn More
          </button>
        </div>
      </div>

      <div className="float-card-2 absolute right-8 bottom-32 hidden lg:block">
        <div className="px-5 py-3 rounded-2xl text-white text-sm font-medium shadow-xl" style={{ background: "rgba(2,55,133,0.85)", backdropFilter: "blur(12px)", border: "1px solid rgba(0,146,206,0.4)" }}>
          <div className="text-blue-100 text-xs font-semibold tracking-wide">More Destinations Covered</div>
          <div className="text-sky-300 text-sm font-bold">Book Now!</div>
        </div>
      </div>

      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-2.5 z-20">
        {HERO_IMAGES.map((_, i) => (
          <button key={i} onClick={() => goTo(i)} aria-label={`Slide ${i + 1}`} style={{ width: i === current ? "28px" : "8px", height: "8px", borderRadius: "4px", background: i === current ? "#FEFEFE" : "rgba(254,254,254,0.45)", border: "none", cursor: "pointer", transition: "all 0.3s" }} />
        ))}
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-white/50 text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-white/50 to-transparent" />
      </div>
    </section>
  )
}

// ─── Why Us / Our Story ────────────────────────────────────────────────────
function WhyUs() {
  return (
    <section className="overflow-hidden" style={{ background: "#FEFEFE" }}>
      <div className="flex flex-col lg:flex-row min-h-[600px]">
        {/* Image — flush to left edge, no rounded corners */}
        <div className="lg:w-1/2 w-full" style={{ minHeight: '500px' }}>
          <img
            src={marinaBaySands}
            alt="Marina Bay Sands, Singapore"
            className="w-full h-full object-cover"
            style={{ display: 'block', minHeight: '500px' }}
          />
        </div>

        {/* Text — right side */}
        <div className="lg:w-1/2 w-full flex items-center px-10 lg:px-16 py-20" style={{ background: "#FEFEFE" }}>
          <Reveal dir="right" className="w-full">
            <p className="text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: "#0092CE" }}>Why World Viewcation?</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-8" style={{ fontFamily: "'DM Serif Display', serif", color: "#023785" }}>Our Story</h2>

            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>The name <strong style={{ color: "#023785" }}>World Viewcation</strong> represents how we see travel. Every journey gives us an opportunity to see the world from a different view.</p>
              <p>Travel allows us to discover places we have never seen, experience cultures different from our own, meet people from different walks of life, and create memories that stay with us for a lifetime.</p>
              <p>We want our travellers to go beyond simply taking a vacation. We want them to <em>experience the world.</em></p>
            </div>

            <div className="mt-8 space-y-1">
              <p className="text-lg font-bold tracking-widest uppercase" style={{ color: "#023785" }}>Travel Beyond Boundaries.</p>
              {["Beyond places.", "Beyond cultures.", "Beyond expectations.", "Toward travel that is more thoughtful, responsible, and sustainable."].map((line) => (
                <p key={line} className="text-sm font-medium" style={{ color: "#0092CE" }}>{line}</p>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

// ─── About Us ─────────────────────────────────────────────────────────────
function AboutUs() {
  return (
    <section id="about" className="py-24 px-6 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #023785 0%, #0092CE 100%)" }}>
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10 pointer-events-none" style={{ background: "#FEFEFE", transform: "translate(30%, -30%)" }} />
      <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full opacity-10 pointer-events-none" style={{ background: "#FEFEFE", transform: "translate(-30%, 30%)" }} />
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
        <Reveal dir="left">
          <div className="relative group overflow-hidden rounded-3xl shadow-2xl">
            <img src={aboutUsImg} alt="Entalula Beach, El Nido, Palawan" className="w-full object-cover transition-transform duration-500 group-hover:scale-105" style={{ height: "420px" }} />
            {/* Hover overlay — only visible on hover */}
            <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-end" style={{ background: "linear-gradient(to top, rgba(2,55,133,0.75) 0%, transparent 55%)" }}>
              <div className="w-full px-6 py-5">
                <div className="flex items-center gap-2 mb-1">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  <span className="text-xs font-bold tracking-widest uppercase" style={{ color: "#93D4F0" }}>Location</span>
                </div>
                <p className="text-white font-semibold text-sm leading-snug" style={{ fontFamily: "'DM Serif Display', serif" }}>
                  Entalula Beach, El Nido, Palawan, Philippines
                </p>
              </div>
            </div>
          </div>
        </Reveal>
        <Reveal dir="right">
          <div className="text-white">
            <p className="text-sm font-semibold tracking-widest uppercase mb-4" style={{ color: "#93D4F0" }}>About Us</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight" style={{ fontFamily: "'DM Serif Display', serif" }}>More Than Travel. A Journey With Purpose.
</h2>
            <p className="text-blue-100 text-lg leading-relaxed mb-6">World Viewcation Travel & Tours was created with simple belief;</p>
            <p className="text-blue-100 text-lg leading-relaxed mb-6">The world is meant to be experienced and protected.</p>
            <p className="text-blue-100 leading-relaxed mb-8">We are a Philippines-based travel and tours business committed to helping individuals, families, groups, schools, organizations, and companies discover destinations in the Philippines and around the world.</p>
            <p className="text-blue-100 leading-relaxed mb-8">From airline tickets and accommodation to customized tours, attractions, transportation, education trips, corporate travel and group arrangements, our goal is to make travel planning simpler, more convenient, and more meaningful.</p>
            <p className="text-blue-100 leading-relaxed mb-8">But our vision goes beyond bookings.</p>
            <p className="text-blue-100 leading-relaxed mb-8">We want World Viewcation to become a travel company that grows responsibly. A business that creates memorable experiences for our travellers while encouraging greater appreciation and care for the world we explore.</p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <Hero />
      <WhyUs />
      <AboutUs />
    </>
  )
}

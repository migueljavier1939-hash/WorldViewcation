import { useNavigate } from "react-router"
import { Reveal } from "@/shared"

const TIPS = [
  { icon: "🧴", text: "Reusable water bottle" },
  { icon: "🛍️", text: "Eco or shopping bag" },
  { icon: "🧼", text: "Refillable toiletry containers" },
  { icon: "🍴", text: "Reusable utensils when practical" },
]

const DONT_LIST = [
  {
    title: "Don't Overpack Your Itinerary",
    body: "Singapore looks small on a map, which can tempt travelers to schedule too many attractions. Allow time for meals, transportation, queues, photographs and simply enjoying the destination. A holiday shouldn't feel like a race.",
  },
  {
    title: "Don't Ignore Singapore's Rules",
    body: "Singapore is known for cleanliness and public order. Pay attention to local regulations, signs and instructions in public areas, transportation systems, attractions and nature reserves. Respect the destination just as you would want visitors to respect your home.",
  },
  {
    title: "Don't Forget the Weather",
    body: "Singapore is tropical — expect heat, humidity and occasional rain. Pack lightweight clothing, comfortable footwear and a compact umbrella.",
  },
  {
    title: "Don't Skip Local Neighborhoods",
    body: "Orchard Road, Marina Bay and Sentosa are excellent, but they aren't the whole Singapore experience. Explore the heritage districts and neighborhood food scenes too.",
  },
]

const ADVICE = [
  "Choose the experiences that matter most to you.",
  "Eat something you've never tried.",
  "Explore beyond the famous landmarks.",
  "Take photographs, but also put your phone away occasionally and enjoy where you are.",
  "Respect the culture, the community and the environment.",
]

export default function TravelGuidePage() {
  const navigate = useNavigate()

  return (
    <div className="pt-20" style={{ background: "#FEFEFE" }}>
      {/* Hero banner */}
      <div className="py-20 px-6 text-center relative overflow-hidden" style={{ background: "linear-gradient(135deg, #023785 0%, #0092CE 100%)" }}>
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full opacity-10 pointer-events-none" style={{ background: "#FEFEFE", transform: "translate(30%,-30%)" }} />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-10 pointer-events-none" style={{ background: "#FEFEFE", transform: "translate(-30%,30%)" }} />
        <Reveal>
          <p className="text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: "#93D4F0" }}>World Viewcation</p>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4" style={{ fontFamily: "'DM Serif Display', serif" }}>Travel Guide</h1>
          <p className="text-blue-100 max-w-xl mx-auto text-lg font-light">Responsible travel tips and destination advice from our team.</p>
        </Reveal>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-20 space-y-16">

        {/* ── Responsible Travel ──────────────────────────── */}
        <Reveal>
          <div className="rounded-3xl overflow-hidden" style={{ border: "1px solid rgba(0,146,206,0.15)" }}>
            {/* Header stripe */}
            <div className="px-8 py-6" style={{ background: "linear-gradient(90deg, #023785, #0092CE)" }}>
              <p className="text-xs font-bold tracking-widest uppercase text-blue-200 mb-1">World Viewcation Responsible Travel Tip</p>
              <h2 className="text-3xl font-bold text-white" style={{ fontFamily: "'DM Serif Display', serif" }}>Explore More. Waste Less.</h2>
            </div>

            <div className="px-8 py-8" style={{ background: "#FEFEFE" }}>
              <p className="text-slate-600 leading-relaxed mb-6">
                Singapore's clean and green environment is part of what makes visiting the country enjoyable.
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                We encourage World Viewcation travelers to carry practical reusable travel essentials whenever possible:
              </p>

              <div className="grid sm:grid-cols-2 gap-3 mb-8">
                {TIPS.map((tip) => (
                  <div key={tip.text} className="flex items-center gap-3 px-4 py-3 rounded-xl" style={{ background: "rgba(0,146,206,0.06)", border: "1px solid rgba(0,146,206,0.12)" }}>
                    <span className="text-xl">{tip.icon}</span>
                    <span className="text-sm font-medium" style={{ color: "#023785" }}>{tip.text}</span>
                  </div>
                ))}
              </div>

              <p className="text-slate-600 leading-relaxed mb-4">Small travel habits can help reduce unnecessary single-use waste.</p>
              <p className="font-semibold italic" style={{ color: "#023785" }}>
                Enjoy the destination. Respect the destination. Help preserve it for the travelers who come after us.
              </p>
            </div>
          </div>
        </Reveal>

        {/* ── Before You Go ────────────────────────────────── */}
        <Reveal>
          <div className="mb-3">
            <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: "#0092CE" }}>Before You Go</p>
            <h2 className="text-3xl font-bold" style={{ fontFamily: "'DM Serif Display', serif", color: "#023785" }}>Things Worth Knowing</h2>
          </div>
        </Reveal>

        <div className="space-y-5">
          {DONT_LIST.map((item, i) => (
            <Reveal key={item.title} className={`delay-${(i + 1) * 100}`}>
              <div className="rounded-2xl p-6" style={{ background: "#FEFEFE", border: "1px solid rgba(0,146,206,0.12)", boxShadow: "0 2px 12px rgba(2,55,133,0.06)" }}>
                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-bold text-white" style={{ background: "linear-gradient(135deg, #023785, #0092CE)" }}>
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2" style={{ color: "#023785" }}>{item.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{item.body}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* ── Our Advice ───────────────────────────────────── */}
        <Reveal>
          <div className="rounded-3xl p-8 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #023785 0%, #0092CE 100%)" }}>
            <div className="absolute top-0 right-0 w-48 h-48 rounded-full opacity-10 pointer-events-none" style={{ background: "#FEFEFE", transform: "translate(20%,-20%)" }} />
            <p className="text-xs font-bold tracking-widest uppercase mb-3 relative z-10" style={{ color: "#93D4F0" }}>Our World Viewcation Advice</p>
            <p className="text-xl text-white mb-6 leading-relaxed relative z-10" style={{ fontFamily: "'DM Serif Display', serif" }}>
              You don't have to see everything in Singapore to have an unforgettable Singapore holiday.
            </p>
            <ul className="space-y-3 mb-6 relative z-10">
              {ADVICE.map((line) => (
                <li key={line} className="flex items-start gap-3 text-blue-100 text-sm">
                  <span className="mt-1 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "#0092CE", marginTop: "6px" }} />
                  {line}
                </li>
              ))}
            </ul>
            <div className="relative z-10 border-t border-white/20 pt-6">
              <p className="text-blue-200 text-sm mb-1">And most importantly —</p>
              <p className="text-white text-2xl font-bold" style={{ fontFamily: "'DM Serif Display', serif" }}>
                Don't simply visit Singapore. Experience it.
              </p>
            </div>
          </div>
        </Reveal>

      </div>

      {/* ── Ready to Experience Singapore CTA ─────────────── */}
      <div className="py-20 px-6 text-center relative overflow-hidden" style={{ background: "linear-gradient(135deg, #023785 0%, #0092CE 100%)" }}>
        <div className="absolute top-0 left-0 w-80 h-80 rounded-full opacity-10 pointer-events-none" style={{ background: "#FEFEFE", transform: "translate(-30%,-30%)" }} />
        <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full opacity-10 pointer-events-none" style={{ background: "#FEFEFE", transform: "translate(30%,30%)" }} />
        <div className="max-w-2xl mx-auto relative z-10">
          <p className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: "#93D4F0" }}>World Viewcation Travel & Tours</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: "'DM Serif Display', serif" }}>Ready to Experience Singapore?</h2>
          <p className="text-blue-100 text-lg leading-relaxed mb-4">
            Whether you're traveling as a couple, family, barkada, school group, sports team, organization, or company, World Viewcation Travel & Tours can help you create a Singapore itinerary suited to your schedule, interests and budget.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-8 mb-10">
            <span className="text-white text-sm font-semibold italic">Travel Beyond Boundaries.</span>
            <span className="hidden sm:block text-blue-300">·</span>
            <span className="text-blue-200 text-sm italic">Travel More. Experience More. Care More.</span>
          </div>
          <button
            onClick={() => { navigate("/book"); window.scrollTo({ top: 0 }) }}
            className="px-10 py-4 rounded-full font-semibold text-white text-base transition-all duration-300 hover:scale-105 hover:shadow-xl"
            style={{ background: "rgba(254,254,254,0.2)", border: "2px solid rgba(254,254,254,0.5)", backdropFilter: "blur(8px)" }}
          >
            Customize Your Singapore Trip →
          </button>
        </div>
      </div>
    </div>
  )
}

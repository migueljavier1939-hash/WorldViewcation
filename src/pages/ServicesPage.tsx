import { useNavigate } from "react-router"
import { Reveal } from "@/shared"
import destPalawan from "@/imports/att.ALYY__G6ib3YAojvenCBHtU3n8pHE7KSDvAhTquHzdU.jpeg"
import destSingapore from "@/imports/6E25DB77-7044-4218-AC3F-8FB2B447474B.png"
import destBali from "@/imports/B133A6AA-BF57-4C42-9B91-E4A632977B1D.png"
import destMalaysia from "@/imports/E80F8484-22DB-40D0-8100-52E3A206E58F.png"
import destThailand from "@/imports/7FFD0D3F-BFED-4471-8079-667ACB06E2B6.png"
import destVietnam from "@/imports/76B320FD-7E69-46EF-A472-620F949A8058.png"
import destHongKong from "@/imports/0CFFE11D-CC47-4714-9F94-52065F250D32.png"
import destJapan from "@/imports/5D00CCDA-6376-4B34-B26A-579A7AD43B40.png"
import destSriLanka from "@/imports/F8F1E292-3153-4304-9BA7-3D1980A6A056.png"
import destChongqing from "@/imports/IMG_0855.jpeg"
import destGreece from "@/imports/85DBBE04-4227-4C40-800B-ADC71F05C09B.png"

const DESTINATIONS = [
  { badge: "Featured", name: "Palawan, Philippines", desc: "Pristine beaches, crystal lagoons and limestone cliffs in the Philippines' last frontier.", img: destPalawan, alt: "Palawan Philippines" },
  { badge: "Must Visit", name: "Singapore, Gardens by the Bay", desc: "Garden City, where towering Supertrees, breathtaking gardens, and dazzling light shows create an unforgettable Singapore experience.", img: destSriLanka, alt: "Gardens by the Bay Singapore" },
  { badge: "Tropical Escape", name: "Indonesia, Bali", desc: "Tropical paradise of temples, terraced rice fields and vibrant culture.", img: destJapan, alt: "Bali Indonesia" },
  { badge: "Family Pick", name: "Malaysia, Legoland", desc: "The ultimate family destination with thrilling rides and iconic Lego attractions.", img: destHongKong, alt: "Legoland Malaysia" },
  { badge: "Cultural Gem", name: "Thailand, Wat Arun", desc: "Bangkok's Temple of Dawn rises majestically over the Chao Phraya River.", img: destVietnam, alt: "Wat Arun Thailand" },
  { badge: "Trending", name: "Vietnam, Mường Hoa Valley", desc: "A breathtaking mountain train ride through the misty valleys of Sa Pa.", img: destThailand, alt: "Muong Hoa mountain train Sapa Vietnam" },
  { badge: "Adventure", name: "Hong Kong, Disneyland", desc: "Magic meets the stunning Hong Kong skyline at Asia's beloved theme park.", img: destMalaysia, alt: "Hong Kong Disneyland" },
  { badge: "Iconic", name: "Japan, Mount Fuji", desc: "Japan's sacred peak — a timeless symbol of beauty and spiritual wonder.", img: destBali, alt: "Mount Fuji Japan" },
  { badge: "Nature", name: "Sri Lanka, Ravana Falls", desc: "One of Sri Lanka's widest waterfalls cascading through lush hill country.", img: destSingapore, alt: "Ravana Falls Sri Lanka" },
  { badge: "Futuristic", name: "Chongqing, China — Hongya Cave", desc: "A jaw-dropping illuminated cliffside complex that glows over the Jialing River after dark.", img: destGreece, alt: "Hongya Cave Chongqing China" },
  { badge: "Romantic Escape", name: "Greece, Santorini", desc: "Whitewashed cliffside villages, volcanic caldera views and legendary Aegean sunsets.", img: destChongqing, alt: "Santorini Greece" },
]

const SERVICES = [
  { icon: "✈️", title: "Airline Ticketing", desc: "Domestic and international flight booking assistance." },
  { icon: "🏨", title: "Hotel & Accommodations", desc: "From practical stays to premium accommodations for individuals, families, and large groups." },
  { icon: "🗺️", title: "Tour Packages", desc: "Domestic and international packages designed for different travel styles and budgets." },
  { icon: "🎯", title: "Attractions & Activities", desc: "Make every destination more memorable with carefully selected attractions, tours, and activities." },
  { icon: "🚐", title: "Transportation", desc: "Assistance with airport transfers and transportation arrangements for individuals and groups." },
  { icon: "🎒", title: "Educational & School Tours", desc: "Travel arrangements for educational field trips, student activities, conferences, and learning experiences." },
  { icon: "🏢", title: "Corporate & Group Travel", desc: "Customized arrangements for company outings, conferences, organizations and large groups." },
  { icon: "🏅", title: "Sport & Event Travel", desc: "Travel, accommodation, and transportation assistance for teams and groups participating in sporting events and other special activities." },
  { icon: "📄", title: "Travel Document Assistance", desc: "Guidance and assistance for selected passport, visa, and other travel-related requirements, subject to applicable government rules and approval." },
]

export default function ServicesPage() {
  const navigate = useNavigate()

  return (
    <div className="pt-20">
      {/* Hero banner */}
      <div className="py-20 px-6 text-center relative overflow-hidden" style={{ background: "linear-gradient(135deg, #023785 0%, #0092CE 100%)" }}>
        <div className="absolute top-0 right-0 w-72 h-72 rounded-full opacity-10 pointer-events-none" style={{ background: "#FEFEFE", transform: "translate(30%,-30%)" }} />
        <Reveal>
          <p className="text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: "#93D4F0" }}>What We Offer</p>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4" style={{ fontFamily: "'DM Serif Display', serif" }}>Our Services</h1>
          <p className="text-blue-100 max-w-xl mx-auto text-lg">From first booking to safe return, we handle every detail so you can simply enjoy the journey.</p>
        </Reveal>
      </div>

      {/* Services grid */}
      <section className="py-24 px-6 relative overflow-hidden" style={{ background: "#E8F4FD" }}>
        <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, rgba(0,146,206,0.15) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((s, i) => (
              <Reveal key={s.title} className={`delay-${((i % 3) + 1) * 100}`}>
                <div className="card-glow rounded-3xl p-7 bg-white h-full" style={{ border: "1px solid rgba(0,146,206,0.12)" }}>
                  <div className="icon-bounce text-4xl mb-5 inline-block">{s.icon}</div>
                  <h3 className="font-bold text-lg mb-2" style={{ color: "#023785" }}>{s.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Featured destinations */}
      <section className="py-24 px-6" style={{ background: "#FEFEFE" }}>
        <div className="max-w-6xl mx-auto">
          <Reveal className="text-center mb-16">
            <p className="text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: "#0092CE" }}>Featured Destinations</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: "'DM Serif Display', serif", color: "#023785" }}>Places Our Travelers Vouch For</h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {DESTINATIONS.map((d, i) => (
              <Reveal key={d.name} className={`delay-${((i % 3) + 1) * 100}`}>
                <div className="group rounded-3xl overflow-hidden bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl" style={{ border: "1px solid rgba(0,146,206,0.1)" }}>
                  <div className="relative overflow-hidden" style={{ height: "220px" }}>
                    <img src={d.img} alt={d.alt} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(2,55,133,0.7) 0%, transparent 50%)" }} />
                    <div className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold text-white" style={{ background: "linear-gradient(90deg, #0092CE, #023785)" }}>{d.badge}</div>
                    {/* Hover location pin */}
                    <div className="absolute bottom-0 left-0 right-0 px-5 py-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <div className="flex items-center gap-1.5">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                        <span className="text-white text-xs font-semibold">{d.name}</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="text-base font-bold mb-1.5" style={{ color: "#023785" }}>{d.name}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed mb-4">{d.desc}</p>
                    <button onClick={() => { navigate("/book"); window.scrollTo({ top: 0 }) }} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-md" style={{ background: "linear-gradient(90deg, #0092CE, #023785)" }}>
                      Book Now →
                    </button>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

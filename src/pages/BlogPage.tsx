import { useState, useEffect } from "react"
import { Reveal } from "@/shared"

type Section = {
  icon: string
  title: string
  tag: string
  preview: string
  img: string
  body: string[]
}

const SECTIONS: Section[] = [
  {
    icon: "🌃",
    title: "Experience Marina Bay",
    tag: "Landmark",
    preview: "If there's one area that captures modern Singapore, it's Marina Bay.",
    img: "https://images.unsplash.com/photo-1672068245918-d99e9bf4b1e2?w=1200&fit=crop&auto=format",
    body: [
      "Walk around the waterfront and you'll encounter some of the country's most recognizable landmarks, including Marina Bay Sands, the Merlion, Art Science Museum, Helix Bridge, and Gardens by the Bay.",
      "For panoramic views, head up to the Marina Bay Sands SkyPark Observation Deck.",
      "World Viewcation Tip: Visit the area in the late afternoon so you can experience Marina Bay in daylight, watch the sunset, and stay to see the skyline illuminated at night.",
    ],
  },
  {
    icon: "🌳",
    title: "Step Into the Future at Gardens by the Bay",
    tag: "Nature",
    preview: "Singapore's famous garden attraction feels like nature meeting science fiction.",
    img: "https://images.unsplash.com/photo-1768117177972-d7210aff2d5d?w=1200&fit=crop&auto=format",
    body: [
      "The towering Supertrees dominate the outdoor landscape, while the Cloud Forest and Flower Dome offer completely different indoor experiences.",
      "Don't rush away after sunset. The illuminated Supertrees make the area particularly magical in the evening.",
      "📸 Photo idea: Capture the Supertrees from below to emphasize their incredible height.",
    ],
  },
  {
    icon: "🎢",
    title: "Make a Day of Sentosa",
    tag: "Entertainment",
    preview: "If you're looking for entertainment, beaches and attractions, dedicate some time to Sentosa Island.",
    img: "https://images.unsplash.com/photo-1662385825401-d529115306a4?w=1200&fit=crop&auto=format",
    body: [
      "Depending on your interests, your day could include theme-park adventures, marine attractions, cable-car rides, beach time and evening entertainment.",
      "Families may want a full day here, while travelers with shorter itineraries can select one or two attractions.",
      "Travel Tip: Avoid trying to squeeze every Sentosa attraction into one day. Choose the experiences that matter most to you and enjoy them properly.",
    ],
  },
  {
    icon: "🏮",
    title: "Discover Chinatown",
    tag: "Heritage",
    preview: "Singapore isn't only about futuristic architecture.",
    img: "https://images.unsplash.com/photo-1501834220016-4251a3bb3074?w=1200&fit=crop&auto=format",
    body: [
      "Walk through Chinatown and you'll discover heritage buildings, temples, traditional shops, restaurants and busy streets that reveal another side of the city.",
      "Visit the Buddha Tooth Relic Temple, explore the surrounding streets and stop for something to eat at one of the area's food centres.",
    ],
  },
  {
    icon: "🌺",
    title: "Experience the Colours of Little India",
    tag: "Culture",
    preview: "Expect vibrant streets, fragrant spices, colorful shops and beautiful places of worship.",
    img: "https://images.unsplash.com/photo-1699062990091-062bf12e11fb?w=1200&fit=crop&auto=format",
    body: [
      "Explore Serangoon Road, visit the historic Sri Veeramakaliamman Temple, wander through the neighborhood and enjoy authentic Indian cuisine.",
      "Little India is particularly enjoyable for travelers interested in culture, architecture and street photography.",
    ],
  },
  {
    icon: "🦁",
    title: "Discover Singapore's Wildlife Attractions",
    tag: "Wildlife",
    preview: "Singapore's Mandai wildlife attractions deserve serious consideration, particularly for families.",
    img: "https://images.unsplash.com/photo-1507318584470-a67407ebe29a?w=1200&fit=crop&auto=format",
    body: [
      "Depending on your schedule, choose among experiences such as Singapore Zoo, Night Safari, River Wonders, Bird Paradise, and other Mandai attractions.",
      "The Night Safari provides a very different experience from a conventional daytime zoo, making it a popular evening activity.",
      "World Viewcation Tip: Don't automatically try to visit several wildlife parks in one day. They can involve considerable walking, so plan according to your group's energy level — especially when traveling with young children or seniors.",
    ],
  },
  {
    icon: "🌊",
    title: "Spend an Evening Along the Singapore River",
    tag: "Leisure",
    preview: "For a slower evening, explore the Singapore River and areas around Clarke Quay and Boat Quay.",
    img: "https://images.unsplash.com/photo-1496939376851-89342e90adcd?w=1200&fit=crop&auto=format",
    body: [
      "Take a riverside walk, enjoy dinner, or experience Singapore from the water on a river cruise.",
      "The combination of historic architecture and illuminated modern buildings makes this area especially attractive after sunset.",
    ],
  },
  {
    icon: "🏨",
    title: "Admire Historic Singapore at Raffles Hotel",
    tag: "Heritage",
    preview: "Singapore's story isn't only told through skyscrapers.",
    img: "https://images.unsplash.com/photo-1665909003711-7e9f029d3c4a?w=1200&fit=crop&auto=format",
    body: [
      "The legendary Raffles Hotel Singapore offers a glimpse into the country's colonial-era architectural heritage.",
      "Even if you're not staying at the hotel, the surrounding area is worth seeing as part of a heritage-focused Singapore itinerary.",
    ],
  },
  {
    icon: "🍗",
    title: "Hainanese Chicken Rice",
    tag: "Food",
    preview: "Simple but incredibly popular — one of Singapore's signature meals.",
    img: "https://images.unsplash.com/photo-1584198414538-f469f6fad430?w=1200&fit=crop&auto=format",
    body: [
      "This combination of fragrant rice, tender chicken and sauces is one of Singapore's most beloved dishes.",
      "You'll find excellent versions throughout the city's hawker centres.",
    ],
  },
  {
    icon: "🦀",
    title: "Chilli Crab",
    tag: "Food",
    preview: "One of Singapore's most famous seafood dishes.",
    img: "https://images.unsplash.com/photo-1504674999014-e8f0b689c560?w=1200&fit=crop&auto=format",
    body: [
      "The rich, sweet, savoury and mildly spicy sauce is often enjoyed with mantou buns — perfect for soaking up the sauce.",
      "Don't spend your entire holiday eating inside shopping malls or hotels. Places like Maxwell Food Centre, Lau Pa Sat, and Old Airport Road Food Centre offer multiple local dishes without spending heavily.",
    ],
  },
  {
    icon: "🍜",
    title: "Laksa, Char Kway Teow & More",
    tag: "Food",
    preview: "Singapore's hawker culture is part of the experience itself.",
    img: "https://images.unsplash.com/photo-1584198414538-f469f6fad430?w=1200&fit=crop&auto=format",
    body: [
      "Laksa — creamy, spicy and aromatic, combining noodles with a coconut-based broth. Especially associated with the Katong area.",
      "Char Kway Teow — flat rice noodles stir-fried with a combination of ingredients and sauces. One of Singapore's classic hawker dishes.",
      "Satay — grilled meat skewers paired with peanut sauce. Lau Pa Sat's Satay Street is particularly atmospheric after dark.",
      "Kaya Toast & Kopi — for a local-style breakfast: toasted bread with kaya and butter, soft-boiled eggs and traditional Singapore coffee.",
      "Come hungry — and try something you've never ordered before.",
    ],
  },
  {
    icon: "📸",
    title: "Where to Capture Your Singapore Memories",
    tag: "Photography",
    preview: "Some of our favorite areas for photographs across the city.",
    img: "https://images.unsplash.com/photo-1600664356348-10686526af4f?w=1200&fit=crop&auto=format",
    body: [
      "📍 Merlion Park — Get the classic Singapore photograph with Marina Bay Sands behind you.",
      "📍 Gardens by the Bay — Particularly beautiful around the Supertree Grove.",
      "📍 Marina Bay Waterfront — Excellent for sunset and nighttime skyline photographs.",
      "📍 Jewel Changi Airport — The Rain Vortex creates an impressive arrival or departure photograph.",
      "📍 Chinatown — Heritage architecture, temples and colorful streets.",
      "📍 Little India — Vibrant architecture and street scenes.",
      "📍 Sentosa — Beaches, attractions and sunset views.",
      "📍 Singapore River — Great for evening photography around Clarke Quay and Boat Quay.",
    ],
  },
  {
    icon: "🚇",
    title: "Getting Around Without the Stress",
    tag: "Transport",
    preview: "One reason Singapore works so well for independent travelers is its efficient public transportation.",
    img: "https://images.unsplash.com/photo-1605460162158-315a0e3ad64c?w=1200&fit=crop&auto=format",
    body: [
      "MRT & Public Buses — For most visitors, Singapore's MRT and bus network will cover the majority of places you'll want to visit. Plan your attractions geographically to minimize commuting time.",
      "🚶 Walk When It Makes Sense — Singapore is pedestrian-friendly in many tourist districts.",
      "🚕 Taxis & Ride-Hailing — Convenient when traveling with luggage, young children, seniors or several people sharing the fare.",
      "🚐 Private Transport — For families and larger groups, private transportation can make certain itineraries much easier, particularly when several destinations need to be covered in one day.",
    ],
  },
  {
    icon: "🌿",
    title: "Want Something Different? Escape to Pulau Ubin",
    tag: "Off the Beaten Path",
    preview: "Travelers who want to see a quieter side of Singapore can consider a visit to Pulau Ubin.",
    img: "https://images.unsplash.com/photo-1629517797635-93ea3471e8ba?w=1200&fit=crop&auto=format",
    body: [
      "The island offers a completely different atmosphere from Marina Bay and Orchard Road, with greenery, cycling routes and a more rustic environment.",
      "It's a refreshing addition for travellers who have already experienced Singapore's major city attractions.",
      "🎡 See Singapore From Above — The Singapore Flyer offers another perspective of the Marina Bay skyline. Consider timing your visit around sunset.",
      "🚤 Experience the City From the River — A Singapore River cruise provides a relaxing way to see several historical and modern landmarks from a different angle. Particularly beautiful in the evening.",
      "🐉 Haw Par Villa — Looking for something unusual? Haw Par Villa explores Chinese mythology, folklore and traditional moral stories through an unusual collection of sculptures and displays. It's certainly different — and that's exactly why some travellers enjoy it.",
    ],
  },
]

const TAG_COLORS: Record<string, string> = {
  Landmark: "#0092CE",
  Nature: "#16a34a",
  Entertainment: "#7c3aed",
  Heritage: "#b45309",
  Culture: "#db2777",
  Wildlife: "#15803d",
  Leisure: "#0369a1",
  Food: "#ea580c",
  Photography: "#0284c7",
  Transport: "#374151",
  "Off the Beaten Path": "#059669",
}

export default function BlogPage() {
  const [expanded, setExpanded] = useState<Section | null>(null)

  // Lock body scroll when expanded
  useEffect(() => {
    document.body.style.overflow = expanded ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [expanded])

  return (
    <div className="pt-20" style={{ background: "#FEFEFE" }}>
      {/* Full-page expanded overlay */}
      {expanded && (
        <div
          className="fixed left-0 right-0 bottom-0 z-40 overflow-y-auto"
          style={{ top: "80px", background: "#FEFEFE", animation: "expandIn 0.35s cubic-bezier(0.22,1,0.36,1) both" }}
        >
          {/* Hero image */}
          <div className="relative w-full" style={{ height: "320px" }}>
            <img
              src={expanded.img}
              alt={expanded.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(2,55,133,0.3) 0%, rgba(2,55,133,0.7) 100%)" }} />

            {/* Back button */}
            <button
              onClick={() => setExpanded(null)}
              className="absolute top-5 left-5 flex items-center gap-2 px-4 py-2 rounded-full font-semibold text-sm text-white transition-all duration-200 hover:scale-105"
              style={{ background: "rgba(2,55,133,0.8)", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.3)" }}
            >
              ← Back
            </button>

            {/* Title overlay */}
            <div className="absolute bottom-0 left-0 right-0 px-8 pb-7">
              <span
                className="text-xs font-bold tracking-widest uppercase px-2 py-0.5 rounded-full text-white mb-3 inline-block"
                style={{ background: TAG_COLORS[expanded.tag] ?? "#0092CE" }}
              >
                {expanded.tag}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white" style={{ fontFamily: "'DM Serif Display', serif" }}>
                {expanded.icon} {expanded.title}
              </h2>
            </div>
          </div>

          {/* Body content */}
          <div className="max-w-3xl mx-auto px-6 py-12 space-y-5">
            {expanded.body.map((line, i) => (
              <p key={i} className="text-slate-700 text-base leading-relaxed" style={{ fontFamily: "'Outfit', sans-serif" }}>
                {line}
              </p>
            ))}

            {/* Bottom back button */}
            <div className="pt-8 border-t" style={{ borderColor: "rgba(0,146,206,0.15)" }}>
              <button
                onClick={() => setExpanded(null)}
                className="flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm text-white transition-all duration-200 hover:scale-105 hover:shadow-lg"
                style={{ background: "linear-gradient(90deg, #0092CE, #023785)" }}
              >
                ← Back to all articles
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Hero banner */}
      <div className="py-20 px-6 text-center relative overflow-hidden" style={{ background: "linear-gradient(135deg, #023785 0%, #0092CE 100%)" }}>
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full opacity-10 pointer-events-none" style={{ background: "#FEFEFE", transform: "translate(30%,-30%)" }} />
        <Reveal>
          <p className="text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: "#93D4F0" }}>World Viewcation Blog</p>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4" style={{ fontFamily: "'DM Serif Display', serif" }}>Singapore</h1>
          <p className="text-white text-xl font-semibold mb-2" style={{ fontFamily: "'DM Serif Display', serif" }}>What to See, Eat, Experience & Know Before You Go</p>
          <p className="text-blue-100 max-w-2xl mx-auto text-base leading-relaxed mt-4">
            Small in size but packed with experiences, Singapore is one of Asia's most exciting destinations for first-time and returning travellers. Futuristic skylines sit beside heritage neighbourhoods, world-famous attractions are only a few MRT stops away from local hawker centres, and lush gardens appear in the middle of one of the world's most modern cities.
          </p>
          <p className="text-blue-200 mt-6 text-sm italic">Here's the World Viewcation guide to experiencing Singapore.</p>
        </Reveal>
      </div>

      {/* Grid */}
      <section className="py-20 px-6" style={{ background: "#E8F4FD" }}>
        <div className="max-w-6xl mx-auto">
          <Reveal className="text-center mb-14">
            <p className="text-sm font-semibold tracking-widest uppercase mb-2" style={{ color: "#0092CE" }}>✨ Experiences Worth Adding to Your Itinerary</p>
            <h2 className="text-3xl font-bold" style={{ fontFamily: "'DM Serif Display', serif", color: "#023785" }}>Click any card to read more</h2>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SECTIONS.map((section) => (
              <Reveal key={section.title}>
                <div
                  className="rounded-3xl overflow-hidden cursor-pointer transition-all duration-300 bg-white group hover:shadow-xl hover:-translate-y-1"
                  style={{ border: "1px solid rgba(0,146,206,0.15)", boxShadow: "0 2px 12px rgba(2,55,133,0.06)" }}
                  onClick={() => { setExpanded(section); window.scrollTo({ top: 0 }) }}
                >
                  {/* Card image */}
                  <div className="relative overflow-hidden" style={{ height: "160px" }}>
                    <img
                      src={section.img}
                      alt={section.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, transparent 50%, rgba(2,55,133,0.5) 100%)" }} />
                    <span
                      className="absolute top-3 left-3 text-xs font-bold tracking-widest uppercase px-2 py-0.5 rounded-full text-white"
                      style={{ background: TAG_COLORS[section.tag] ?? "#0092CE" }}
                    >
                      {section.tag}
                    </span>
                  </div>

                  {/* Card body */}
                  <div className="p-5">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h3 className="font-bold text-sm leading-snug" style={{ color: "#023785", fontFamily: "'DM Serif Display', serif" }}>
                        {section.icon} {section.title}
                      </h3>
                      <div
                        className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 transition-all duration-300 group-hover:scale-110"
                        style={{ background: "rgba(0,146,206,0.1)" }}
                      >
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                          <path d="M2 5h6M5 2l3 3-3 3" stroke="#0092CE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                    </div>
                    <p className="text-slate-500 text-xs leading-relaxed">{section.preview}</p>
                    <p className="text-xs font-semibold mt-3 transition-colors group-hover:text-sky-500" style={{ color: "#0092CE" }}>Read more →</p>
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

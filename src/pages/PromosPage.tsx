import { useNavigate } from "react-router"
import { Reveal } from "@/shared"
import promoDealsImg from "@/imports/Promo___Deals.jpeg"

export default function PromosPage() {
  const navigate = useNavigate()

  return (
    <div className="pt-20">
      <section className="py-24 px-6 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #023785 0%, #0092CE 100%)" }}>
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full opacity-10 pointer-events-none" style={{ background: "#FEFEFE", transform: "translate(30%, -30%)" }} />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-10 pointer-events-none" style={{ background: "#FEFEFE", transform: "translate(-30%, 30%)" }} />

        <div className="max-w-6xl mx-auto relative z-10">
          <Reveal className="text-center mb-12">
            <p className="text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: "#93D4F0" }}>Limited Time Offers</p>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4" style={{ fontFamily: "'DM Serif Display', serif" }}>Promos &amp; Deals</h1>
            <p className="text-blue-100 max-w-xl mx-auto text-lg">Exclusive discounts and packages — grab them before they're gone.</p>
          </Reveal>

          <Reveal>
            <div className="rounded-3xl overflow-hidden shadow-2xl card-glow">
              <img src={promoDealsImg} alt="World Viewcation Promos and Deals" className="w-full object-cover" style={{ maxHeight: "780px", objectPosition: "center top" }} />
            </div>
          </Reveal>

          <Reveal className="text-center mt-10">
            <button
              onClick={() => { navigate("/book"); window.scrollTo({ top: 0 }) }}
              className="inline-block px-10 py-4 rounded-full font-semibold text-white text-base transition-all duration-300 hover:scale-105 hover:shadow-xl"
              style={{ background: "rgba(254,254,254,0.2)", border: "2px solid rgba(254,254,254,0.5)", backdropFilter: "blur(8px)" }}
            >
              Claim This Deal →
            </button>
          </Reveal>
        </div>
      </section>
    </div>
  )
}

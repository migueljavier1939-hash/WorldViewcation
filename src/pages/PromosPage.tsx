import { useEffect, useState } from "react"
import { useNavigate } from "react-router"
import { Reveal } from "@/shared"

type Promo = {
  id: number
  title: string
  description: string | null
  image_url: string | null
  start_date: string | null
  end_date: string | null
}

function formatDate(date: string) {
  return new Date(`${date}T00:00:00`).toLocaleDateString("en-PH", {
    month: "long",
    day: "numeric",
    year: "numeric",
  })
}

export default function PromosPage() {
  const navigate = useNavigate()
  const [promos, setPromos] = useState<Promo[] | null>(null)
  const [failed, setFailed] = useState(false)

  useEffect(() => {
    let cancelled = false
    fetch("/api/promos")
      .then((res) => {
        if (!res.ok) throw new Error(String(res.status))
        return res.json()
      })
      .then((data: Promo[]) => {
        if (!cancelled) setPromos(data)
      })
      .catch(() => {
        if (!cancelled) setFailed(true)
      })
    return () => {
      cancelled = true
    }
  }, [])

  const loading = promos === null && !failed
  const hasPromos = promos !== null && promos.length > 0

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

          {loading && (
            <div className="rounded-3xl bg-white/10 animate-pulse" style={{ height: "420px" }} />
          )}

          {failed && (
            <p className="text-center text-blue-100 text-lg">
              We couldn't load the latest promos right now. Please try again in a moment.
            </p>
          )}

          {promos !== null && promos.length === 0 && (
            <p className="text-center text-blue-100 text-lg">
              No promos at the moment. Please check back soon!
            </p>
          )}

          {hasPromos && (
            <div className="space-y-10">
              {promos.map((promo) => (
                <Reveal key={promo.id}>
                  {promo.image_url ? (
                    <div className="rounded-3xl overflow-hidden shadow-2xl card-glow">
                      <img
                        src={promo.image_url}
                        alt={promo.title}
                        className="w-full object-cover"
                        style={{ maxHeight: "780px", objectPosition: "center top" }}
                      />
                    </div>
                  ) : (
                    <div className="rounded-3xl p-10 text-center text-white shadow-2xl" style={{ background: "rgba(254,254,254,0.15)", backdropFilter: "blur(8px)" }}>
                      <h2 className="text-3xl font-bold mb-3" style={{ fontFamily: "'DM Serif Display', serif" }}>{promo.title}</h2>
                      {promo.description && <p className="text-blue-100 text-lg mb-3">{promo.description}</p>}
                      {promo.end_date && (
                        <p className="text-sm text-blue-100">Valid until {formatDate(promo.end_date)}</p>
                      )}
                    </div>
                  )}
                </Reveal>
              ))}
            </div>
          )}

          {hasPromos && (
            <Reveal className="text-center mt-10">
              <button
                onClick={() => { navigate("/book"); window.scrollTo({ top: 0 }) }}
                className="inline-block px-10 py-4 rounded-full font-semibold text-white text-base transition-all duration-300 hover:scale-105 hover:shadow-xl"
                style={{ background: "rgba(254,254,254,0.2)", border: "2px solid rgba(254,254,254,0.5)", backdropFilter: "blur(8px)" }}
              >
                Claim This Deal →
              </button>
            </Reveal>
          )}
        </div>
      </section>
    </div>
  )
}
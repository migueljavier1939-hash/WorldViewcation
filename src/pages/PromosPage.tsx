import { useEffect, useState } from "react"
import { useNavigate } from "react-router"
import { Reveal } from "@/shared"

type Promo = {
  id: number
  title: string
  description: string | null
  destination: string | null
  discount: string | null
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
  const [broken, setBroken] = useState<number[]>([])
  const [open, setOpen] = useState<Promo | null>(null)

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

  // Close the enlarged poster with the Escape key
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [open])

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

          {loading && <div className="rounded-3xl bg-white/10 animate-pulse" style={{ height: "420px" }} />}

          {failed && (
            <p className="text-center text-blue-100 text-lg">
              We couldn't load the latest promos right now. Please try again in a moment.
            </p>
          )}

          {promos !== null && promos.length === 0 && (
            <p className="text-center text-blue-100 text-lg">No promos at the moment. Please check back soon!</p>
          )}

          {hasPromos && (
            <div className="space-y-10">
              {promos.map((promo) => {
                const showImage = !!promo.image_url && !broken.includes(promo.id)
                return (
                  <Reveal key={promo.id}>
                    <div className="rounded-3xl overflow-hidden shadow-2xl card-glow bg-white">
                      {showImage && (
                        <button
                          type="button"
                          onClick={() => setOpen(promo)}
                          className="relative block w-full cursor-zoom-in"
                          aria-label={`View ${promo.title} poster full size`}
                        >
                          <img
                            src={promo.image_url!}
                            alt={promo.title}
                            className="w-full object-cover"
                            style={{ maxHeight: "560px", objectPosition: "center top" }}
                            onError={() => setBroken((b) => [...b, promo.id])}
                          />
                          <span
                            className="absolute bottom-3 right-3 text-xs font-semibold px-3 py-1.5 rounded-full text-white"
                            style={{ background: "rgba(2,55,133,0.8)" }}
                          >
                            Click to enlarge
                          </span>
                        </button>
                      )}

                      <div className="p-6 md:p-8 text-left">
                        <div className="flex flex-wrap items-center gap-3 mb-2">
                          <h2 className="text-2xl md:text-3xl font-bold" style={{ fontFamily: "'DM Serif Display', serif", color: "#023785" }}>
                            {promo.title}
                          </h2>
                          {promo.discount && (
                            <span className="px-3 py-1 rounded-full text-sm font-bold text-white" style={{ background: "#0092CE" }}>
                              {promo.discount}
                            </span>
                          )}
                        </div>

                        {promo.destination && (
                          <p className="text-base font-semibold mb-2" style={{ color: "#0092CE" }}>
                            {promo.destination}
                          </p>
                        )}

                        {promo.description && <p className="text-base mb-2" style={{ color: "#4a5b73" }}>{promo.description}</p>}

                        <div className="flex flex-wrap items-center justify-between gap-4 mt-5">
                          <p className="text-sm" style={{ color: "#6b7c93" }}>
                            {promo.end_date ? `Valid until ${formatDate(promo.end_date)}` : "Available for a limited time"}
                          </p>
                          <button
                            onClick={() => { navigate("/book"); window.scrollTo({ top: 0 }) }}
                            className="px-8 py-3 rounded-full font-semibold text-white text-sm transition-all duration-300 hover:scale-105 hover:shadow-xl"
                            style={{ background: "linear-gradient(135deg, #023785 0%, #0092CE 100%)" }}
                          >
                            Claim This Deal →
                          </button>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                )
              })}
            </div>
          )}
        </div>
      </section>

      {open && open.image_url && (
        <div
          className="fixed inset-0 flex items-center justify-center p-4"
          style={{ zIndex: 100, background: "rgba(0,0,0,0.85)" }}
          onClick={() => setOpen(null)}
          role="dialog"
          aria-modal="true"
          aria-label={open.title}
        >
          <button
            type="button"
            onClick={() => setOpen(null)}
            aria-label="Close"
            className="absolute top-4 right-5 text-white text-4xl leading-none"
          >
            ×
          </button>
          <img
            src={open.image_url}
            alt={open.title}
            className="rounded-2xl"
            style={{ maxHeight: "90vh", maxWidth: "100%" }}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  )
}
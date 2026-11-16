import { useState, useEffect } from "react"
import { Reveal } from "@/shared"

type Photo = {
  id: number
  image_url: string
  caption: string
  category: string
  width: number | null
  height: number | null
}

export default function GalleryPage() {
  const [photos, setPhotos] = useState<Photo[] | null>(null)
  const [failed, setFailed] = useState(false)
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null)

  useEffect(() => {
    let cancelled = false
    fetch("/api/gallery")
      .then((res) => {
        if (!res.ok) throw new Error(String(res.status))
        return res.json()
      })
      .then((data: Photo[]) => {
        if (!cancelled) setPhotos(data)
      })
      .catch(() => {
        if (!cancelled) setFailed(true)
      })
    return () => {
      cancelled = true
    }
  }, [])

  // Close on Escape key
  useEffect(() => {
    if (!lightbox) return
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") setLightbox(null) }
    window.addEventListener("keydown", handler)
    document.body.style.overflow = "hidden"
    return () => {
      window.removeEventListener("keydown", handler)
      document.body.style.overflow = ""
    }
  }, [lightbox])

  const loading = photos === null && !failed
  // Portrait photos take two rows, like the original hand-tuned layout
  const spanFor = (p: Photo) => (p.width && p.height && p.height / p.width > 1.15 ? "row-span-2" : "")

  return (
    <div className="pt-20">
      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: "rgba(2,15,40,0.92)", backdropFilter: "blur(8px)", animation: "fadeIn 0.2s ease" }}
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-5 right-5 w-10 h-10 rounded-full flex items-center justify-center text-white transition-all hover:scale-110"
            style={{ background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.3)" }}
            onClick={() => setLightbox(null)}
          >
            ✕
          </button>
          <div
            className="relative max-w-5xl max-h-[88vh] w-full flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
            style={{ animation: "lbPop 0.3s cubic-bezier(0.34,1.56,0.64,1) both" }}
          >
            <img
              src={lightbox.src}
              alt={lightbox.alt}
              className="rounded-2xl shadow-2xl"
              style={{ maxHeight: "80vh", maxWidth: "100%", objectFit: "contain" }}
            />
            <p className="mt-4 text-white/80 text-sm font-medium tracking-wide">{lightbox.alt}</p>
          </div>
        </div>
      )}

      {/* Header */}
      <div className="py-20 px-6 text-center relative overflow-hidden" style={{ background: "#E8F4FD" }}>
        <div className="absolute inset-0 opacity-30 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, rgba(0,146,206,0.15) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
        <Reveal>
          <p className="text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: "#0092CE" }}>Gallery</p>
          <h1 className="text-5xl md:text-6xl font-bold mb-4" style={{ fontFamily: "'DM Serif Display', serif", color: "#023785" }}>Moments Worth Chasing</h1>
          <p className="text-slate-500 max-w-xl mx-auto text-lg">A glimpse into the experiences our travelers bring home.</p>
        </Reveal>
      </div>

      {/* Grid */}
      <section className="py-16 px-6" style={{ background: "#FEFEFE" }}>
        <div className="max-w-6xl mx-auto">
          {loading && (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[200px]">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="rounded-2xl bg-slate-200 animate-pulse" />
              ))}
            </div>
          )}

          {failed && (
            <p className="text-center text-slate-500 text-lg">
              We couldn't load the gallery right now. Please try again in a moment.
            </p>
          )}

          {photos !== null && photos.length === 0 && (
            <p className="text-center text-slate-500 text-lg">New photos are coming soon. Please check back!</p>
          )}

          {photos !== null && photos.length > 0 && (
            <Reveal>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[200px] grid-flow-dense">
                {photos.map((p) => (
                  <div
                    key={p.id}
                    className={`gallery-item group rounded-2xl cursor-pointer ${spanFor(p)}`}
                    style={{ background: "#023785" }}
                    onClick={() => setLightbox({ src: p.image_url, alt: p.caption })}
                  >
                    <img src={p.image_url} alt={p.caption} loading="lazy" />
                    <div className="gallery-overlay">
                      <span className="text-white text-sm font-medium">{p.caption}</span>
                    </div>
                    {/* Zoom hint */}
                    <div className="absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: "rgba(255,255,255,0.2)" }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35M11 8v6M8 11h6"/></svg>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          )}
        </div>
      </section>
    </div>
  )
}
import { useState, useEffect } from "react"
import { Reveal } from "@/shared"
import sg1 from "@/imports/SG_1.jpeg"
import sg2 from "@/imports/SG_2.jpeg"
import sg3 from "@/imports/SG_3.jpeg"
import cebu4 from "@/imports/CEBU_4.jpeg"
import cebu5 from "@/imports/CEBU_5.jpeg"
import cebu6 from "@/imports/CEBU_6.jpeg"
import cebu7 from "@/imports/CEBU_7.jpeg"
import cebu10 from "@/imports/CEBU_10.jpeg"
import cebu11 from "@/imports/CEBU_11.jpeg"
import indo1 from "@/imports/INDO_1.jpeg"
import galleryAdd1 from "@/imports/gallery_add1.jpeg"
import gallerySgZoo from "@/imports/gallery_sg_zoo.jpeg"
import galleryRiverWonders from "@/imports/gallery_river_wonders.jpeg"
import galleryBirdParadise1 from "@/imports/gallery_bird_paradise1.jpeg"
import galleryBirdParadise2 from "@/imports/gallery_bird_paradise2.jpeg"

const GALLERY_PHOTOS = [
  { src: sg1,                 alt: "Singapore",               span: "row-span-2" },
  { src: sg2,                 alt: "Sri Lanka",               span: "" },
  { src: sg3,                 alt: "Singapore",               span: "row-span-2" },
  { src: cebu4,               alt: "Cebu, Philippines",       span: "" },
  { src: cebu5,               alt: "Cebu, Philippines",       span: "" },
  { src: cebu6,               alt: "Cebu, Philippines",       span: "row-span-2" },
  { src: cebu7,               alt: "Cebu, Philippines",       span: "" },
  { src: cebu10,              alt: "Cebu, Philippines",       span: "" },
  { src: cebu11,              alt: "Cebu, Philippines",       span: "row-span-2" },
  { src: indo1,               alt: "Indonesia",               span: "" },
  { src: galleryAdd1,         alt: "Singapore",               span: "" },
  { src: gallerySgZoo,        alt: "Singapore Zoo",           span: "" },
  { src: galleryRiverWonders, alt: "River Wonders, Singapore", span: "row-span-2" },
  { src: galleryBirdParadise1,alt: "Bird Paradise, Singapore", span: "" },
  { src: galleryBirdParadise2,alt: "Bird Paradise, Singapore", span: "" },
]

export default function GalleryPage() {
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null)

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
          <Reveal>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[200px]">
              {GALLERY_PHOTOS.map((p, i) => (
                <div
                  key={i}
                  className={`gallery-item rounded-2xl cursor-pointer ${p.span}`}
                  style={{ background: "#023785" }}
                  onClick={() => setLightbox(p)}
                >
                  <img src={p.src} alt={p.alt} />
                  <div className="gallery-overlay">
                    <span className="text-white text-sm font-medium">{p.alt}</span>
                  </div>
                  {/* Zoom hint */}
                  <div className="absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: "rgba(255,255,255,0.2)" }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35M11 8v6M8 11h6"/></svg>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}

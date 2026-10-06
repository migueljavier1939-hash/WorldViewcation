import { useState, useEffect, useRef, type ReactNode } from "react"
import { useNavigate, useLocation, Link, Outlet } from "react-router"
import logo from "@/imports/Logo2.jpeg"

// ─── Scroll reveal ─────────────────────────────────────────────────────────
export function useReveal() {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add("visible") },
      { threshold: 0.12 },
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return ref
}

export function Reveal({ children, className = "", dir = "" }: { children: ReactNode; className?: string; dir?: string }) {
  const ref = useReveal()
  const base = dir === "left" ? "reveal-left" : dir === "right" ? "reveal-right" : "reveal"
  return <div ref={ref} className={`${base} ${className}`}>{children}</div>
}

// ─── Nav config ────────────────────────────────────────────────────────────
export const NAV_LINKS = [
  { label: "Home",               to: "/",         isHash: false },
  { label: "About Us",           to: "/#about",   isHash: true  },
  { label: "Our Services",       to: "/services", isHash: false },
  { label: "Customize Your Trip",to: "/customize",isHash: false },
  { label: "Travel",             to: "/travel",   isHash: false },
  { label: "Promos & Deals",     to: "/promos",   isHash: false },
  { label: "Gallery",            to: "/gallery",       isHash: false },
  { label: "Blog",               to: "/blog",          isHash: false },
  { label: "Customer Reviews",   to: "/reviews",       isHash: false },
  { label: "Travel Guide",       to: "/travel-guide",  isHash: false },
  { label: "FAQ",                to: "/faq",           isHash: false },
  { label: "Contact Us",         to: "/contact",       isHash: false },
]

// ─── Navbar ────────────────────────────────────────────────────────────────
export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // scroll to hash after navigation
  const handleNav = (to: string, isHash: boolean) => {
    setMenuOpen(false)
    if (isHash) {
      const hash = to.split("#")[1]
      if (location.pathname === "/") {
        document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" })
      } else {
        navigate("/")
        setTimeout(() => document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" }), 100)
      }
    } else {
      navigate(to)
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  const isActive = (to: string, isHash: boolean) => {
    if (isHash) return false
    if (to === "/") return location.pathname === "/"
    return location.pathname.startsWith(to)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${scrolled ? "navbar-solid shadow-lg" : "navbar-transparent"}`}
      style={{ fontFamily: "'Outfit', sans-serif" }}
    >
      <div className="max-w-8xl mx-0 px-1 py-3 flex items-center justify-between">
        <button onClick={() => handleNav("/", false)} className="flex items-center gap-3 group">
          <img src={logo} alt="World Viewcation Travel & Tours logo" className="w-50 h-15 rounded-full object-cover" />
          <div className="leading-tight">
            <div className="text-white font-bold text-sm tracking-wide">World Viewcation</div>
            <div className="text-blue-200 text-xs font-light tracking-widest">TRAVEL & TOURS</div>
          </div>
        </button>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-0">
          {NAV_LINKS.map((link) => (
            <button
              key={link.to}
              onClick={() => handleNav(link.to, link.isHash)}
              className={`nav-link-item px-2 py-2 text-xs font-medium transition-colors duration-200 ${isActive(link.to, link.isHash) ? "text-white active" : "text-blue-100 hover:text-white"}`}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => { navigate("/book"); window.scrollTo({ top: 0 }) }}
            className="ml-2 px-4 py-2 rounded-full text-xs font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
            style={{ background: "linear-gradient(90deg, #0092CE, #023785)" }}
          >
            Book Now
          </button>
        </nav>

        {/* Mobile hamburger */}
        <button className="lg:hidden flex flex-col gap-1.5 p-2" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          <span className={`block h-0.5 w-6 bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block h-0.5 w-6 bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-6 bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`lg:hidden overflow-hidden transition-all duration-300 ${menuOpen ? "max-h-screen" : "max-h-0"}`} style={{ background: "rgba(2, 55, 133, 0.97)" }}>
        <nav className="px-6 pb-4 flex flex-col gap-1">
          {NAV_LINKS.map((link) => (
            <button
              key={link.to}
              onClick={() => handleNav(link.to, link.isHash)}
              className="py-2.5 text-left text-blue-100 hover:text-white font-medium border-b border-white/10 text-sm transition-colors"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => { navigate("/book"); setMenuOpen(false) }}
            className="mt-3 py-3 rounded-full font-semibold text-white text-sm"
            style={{ background: "linear-gradient(90deg, #0092CE, #023785)" }}
          >
            Book Now
          </button>
        </nav>
      </div>
    </header>
  )
}

// ─── Footer ────────────────────────────────────────────────────────────────
export function Footer() {
  const navigate = useNavigate()

  const handleNav = (to: string, isHash: boolean) => {
    if (isHash) {
      const hash = to.split("#")[1]
      navigate("/")
      setTimeout(() => document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" }), 100)
    } else {
      navigate(to)
      window.scrollTo({ top: 0 })
    }
  }

  return (
    <footer style={{ background: "#011f5c", fontFamily: "'Outfit', sans-serif" }}>
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="Logo" className="w-40 h-10 rounded-full object-cover" />
              <div>
                <div className="text-white font-bold text-sm">World Viewcation</div>
                <div className="text-blue-400 text-xs">TRAVEL & TOURS</div>
              </div>
            </div>
            <p className="text-blue-300 text-sm leading-relaxed">Travel beyond boundaries</p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm tracking-wider uppercase">Navigation</h4>
            <ul className="space-y-2">
              {NAV_LINKS.slice(0, 4).map((link) => (
                <li key={link.to}>
                  <button onClick={() => handleNav(link.to, link.isHash)} className="text-blue-300 hover:text-white text-sm transition-colors duration-200 text-left">
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm tracking-wider uppercase">Explore</h4>
            <ul className="space-y-2">
              {NAV_LINKS.slice(4).map((link) => (
                <li key={link.to}>
                  <button onClick={() => handleNav(link.to, link.isHash)} className="text-blue-300 hover:text-white text-sm transition-colors duration-200 text-left">
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm tracking-wider uppercase">Contact</h4>
            <ul className="space-y-2 text-blue-300 text-sm">
              <li>inquiry@worldviewcationtravelandtours.com</li>
              <li>support@worldviewcationtravelandtours.com</li>
              <li>partners@worldviewcationtravelandtours.com</li>
              <li>Viber/WhatsApp: +63 908 417 5922</li>
              <li>Office Address: 1047B Bagumbayan, Mendiola Street, Siniloan Laguna, 4019 Philippines.</li>
            </ul>
            <div className="flex gap-3 mt-4">
              {["FB", "IG", "TT"].map((s) => (
                <a key={s} href="#" className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white transition-all duration-200 hover:scale-110" style={{ background: "rgba(0,146,206,0.4)" }}>{s}</a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs" style={{ borderTop: "1px solid rgba(254,254,254,0.1)" }}>
          <p className="text-blue-400">&copy; 2026 World Viewcation Travel & Tours. All rights reserved.</p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service", "Sitemap"].map((l) => (
              <a key={l} href="#" className="text-blue-400 hover:text-white transition-colors">{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

// ─── Root layout ───────────────────────────────────────────────────────────
export function Layout() {
  return (
    <div style={{ fontFamily: "'Outfit', sans-serif" }}>
      <Navbar />
      <main className="pt-0">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

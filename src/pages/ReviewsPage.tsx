export default function ReviewsPage() {
  return (
    <div className="pt-20 min-h-screen" style={{ background: "#FEFEFE" }}>
      <div className="py-20 px-6 text-center relative overflow-hidden" style={{ background: "linear-gradient(135deg, #023785 0%, #0092CE 100%)" }}>
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4" style={{ fontFamily: "'DM Serif Display', serif" }}>Customer Reviews</h1>
        <p className="text-blue-100 text-lg font-light">Hear what our travelers have to say.</p>
      </div>
      <div className="flex items-center justify-center py-32 px-6">
        <div className="text-center">
          <div className="text-6xl mb-6">⭐</div>
          <h2 className="text-2xl font-bold mb-3" style={{ fontFamily: "'DM Serif Display', serif", color: "#023785" }}>Coming Soon</h2>
          <p className="text-slate-400 max-w-sm mx-auto">We're collecting our travelers' stories. Reviews will be published here shortly.</p>
        </div>
      </div>
    </div>
  )
}

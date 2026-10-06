import { useState } from "react"
import { Reveal } from "@/shared"

const FAQS = [
  {
    q: "What services do you offer?",
    a: "World Viewcation Travel & Tours provides domestic and international travel services, including flight bookings, hotel accommodations, customized tour packages, group and educational tours, attraction tickets, activities, and travel insurance arrangements.",
  },
  {
    q: "How do I request a quotation?",
    a: "Send us your preferred destination, travel dates, number of travelers, preferred accommodation, activities, and estimated budget. Our team will prepare travel options based on your requirements and availability.",
  },
  {
    q: "Can you customize a travel package for me?",
    a: "Absolutely! We can customize your trip according to your interests, preferred pace, schedule, accommodation, activities, and budget.\n\nWhether you're traveling solo, as a couple, with family and friends, or as part of a large group, we can help create an itinerary suited to you.",
  },
  {
    q: "Do you arrange group and educational tours?",
    a: "Yes. We accommodate families, schools, companies, organizations, sports teams, reunions, and other groups. We can coordinate flights, accommodations, transportation, attractions, activities, and customized itineraries depending on your requirements.",
  },
  {
    q: "Are the prices in my quotation guaranteed?",
    a: "Airfares, hotel rates, attraction prices, and other travel costs are subject to availability and may change without prior notice.\n\nPrices are generally not guaranteed until the required payment has been received and the booking has been successfully confirmed by the applicable travel supplier.",
  },
  {
    q: "When is my booking considered confirmed?",
    a: "Your booking is confirmed only after the required payment has been received and World Viewcation Travel & Tours has issued your booking confirmation, itinerary, voucher, ticket, or other applicable confirmation document.\n\nAn inquiry or quotation alone does not constitute a confirmed reservation.",
  },
  {
    q: "Can I change or cancel my booking?",
    a: "Changes and cancellations are subject to the policies of the airline, hotel, tour operator, attraction, insurance provider, or other applicable supplier.\n\nFare differences, cancellation penalties, administrative charges, or other fees may apply. Some promotional bookings may also be non-refundable or non-changeable.\n\nPlease contact us as soon as possible if your travel plans change.",
  },
  {
    q: "How long does a refund take?",
    a: "Refund eligibility and processing times depend on the applicable supplier and payment method.\n\nWorld Viewcation Travel & Tours will assist with eligible refund requests; however, we cannot guarantee the exact date a refund will be completed when processing is controlled by a third-party supplier or payment provider.",
  },
  {
    q: "What happens if my flight is cancelled or rescheduled?",
    a: "We will assist you in reviewing the options offered by the airline, which may include rebooking, rerouting, travel credit, or a refund depending on the airline's policy and the circumstances of the disruption.",
  },
  {
    q: "Do you guarantee visa approval or entry into another country?",
    a: "No. Visa approval and permission to enter a country are determined exclusively by the relevant embassy, consulate, immigration authority, or government agency.\n\nTravelers remain responsible for ensuring that they have valid passports, visas, permits, and other documents required for their destination and transit countries.",
  },
  {
    q: "Is my personal information kept confidential?",
    a: "We respect the privacy of our customers. Personal information collected for inquiries and bookings will be handled for legitimate travel-related purposes and may be shared with airlines, hotels, insurers, tour operators, and other service providers when necessary to process your requested travel arrangements.\n\nPlease refer to our Privacy Notice for further information regarding the collection, use, storage, and disclosure of personal information.",
  },
  {
    q: "Why book with World Viewcation Travel & Tours?",
    a: "We believe every journey should be more than just a booking. We provide personalized assistance and help our clients find travel arrangements suited to their destination, preferences, schedule, and budget.\n\nFrom your first inquiry until your travel arrangements are confirmed, we're here to help make planning your journey easier.",
  },
]

export default function FAQPage() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <div className="pt-20" style={{ background: "#FEFEFE" }}>
      {/* Hero */}
      <div className="py-20 px-6 text-center relative overflow-hidden" style={{ background: "linear-gradient(135deg, #023785 0%, #0092CE 100%)" }}>
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full opacity-10 pointer-events-none" style={{ background: "#FEFEFE", transform: "translate(30%,-30%)" }} />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-10 pointer-events-none" style={{ background: "#FEFEFE", transform: "translate(-30%,30%)" }} />
        <Reveal>
          <p className="text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: "#93D4F0" }}>Got Questions?</p>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4" style={{ fontFamily: "'DM Serif Display', serif" }}>Frequently Asked Questions</h1>
          <p className="text-blue-100 max-w-xl mx-auto text-lg font-light">Everything you need to know about traveling with World Viewcation.</p>
        </Reveal>
      </div>

      {/* Accordion */}
      <section className="py-20 px-6" style={{ background: "#E8F4FD" }}>
        <div className="max-w-3xl mx-auto space-y-3">
          {FAQS.map((faq, i) => {
            const isOpen = open === i
            return (
              <Reveal key={i}>
                <div
                  className="rounded-2xl overflow-hidden transition-all duration-300"
                  style={{
                    background: "#FEFEFE",
                    border: isOpen ? "1.5px solid #0092CE" : "1px solid rgba(0,146,206,0.15)",
                    boxShadow: isOpen ? "0 6px 24px rgba(0,146,206,0.15)" : "0 2px 8px rgba(2,55,133,0.05)",
                  }}
                >
                  <button
                    className="w-full flex items-start justify-between gap-4 px-6 py-5 text-left"
                    onClick={() => setOpen(isOpen ? null : i)}
                  >
                    <div className="flex items-start gap-4">
                      <span
                        className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-white mt-0.5"
                        style={{ background: "linear-gradient(135deg, #023785, #0092CE)" }}
                      >
                        {i + 1}
                      </span>
                      <span className="font-semibold text-base leading-snug" style={{ color: "#023785" }}>{faq.q}</span>
                    </div>
                    <div
                      className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300"
                      style={{ background: isOpen ? "#0092CE" : "rgba(0,146,206,0.1)", transform: isOpen ? "rotate(45deg)" : "rotate(0deg)" }}
                    >
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M6 2v8M2 6h8" stroke={isOpen ? "#fff" : "#0092CE"} strokeWidth="1.8" strokeLinecap="round" />
                      </svg>
                    </div>
                  </button>

                  <div
                    className="overflow-hidden transition-all duration-400"
                    style={{ maxHeight: isOpen ? "600px" : "0px" }}
                  >
                    <div className="px-6 pb-6" style={{ paddingLeft: "4.25rem" }}>
                      {faq.a.split("\n\n").map((para, j) => (
                        <p key={j} className={`text-slate-600 text-sm leading-relaxed ${j > 0 ? "mt-3" : ""}`}>{para}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>

        {/* CTA */}
        <Reveal className="text-center mt-16">
          <div className="inline-block rounded-3xl px-10 py-8" style={{ background: "linear-gradient(135deg, #023785, #0092CE)" }}>
            <p className="text-white font-bold text-lg mb-2" style={{ fontFamily: "'DM Serif Display', serif" }}>Still have questions?</p>
            <p className="text-blue-100 text-sm mb-5">Our team is happy to help you plan your next adventure.</p>
            <a href="/contact" className="inline-block px-8 py-3 rounded-full font-semibold text-sm transition-all duration-300 hover:scale-105" style={{ background: "rgba(254,254,254,0.2)", border: "2px solid rgba(254,254,254,0.5)", color: "#fff" }}>
              Contact Us →
            </a>
          </div>
        </Reveal>
      </section>
    </div>
  )
}

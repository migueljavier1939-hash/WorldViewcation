import { createBrowserRouter } from "react-router"
import { Layout } from "@/shared"
import Home from "@/pages/Home"
import ServicesPage from "@/pages/ServicesPage"
import CustomizePage from "@/pages/CustomizePage"
import TravelPage from "@/pages/TravelPage"
import PromosPage from "@/pages/PromosPage"
import GalleryPage from "@/pages/GalleryPage"
import ContactPage from "@/pages/ContactPage"
import BookingPage from "@/pages/BookingPage"
import BlogPage from "@/pages/BlogPage"
import ReviewsPage from "@/pages/ReviewsPage"
import TravelGuidePage from "@/pages/TravelGuidePage"
import FAQPage from "@/pages/FAQPage"

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "services", Component: ServicesPage },
      { path: "customize", Component: CustomizePage },
      { path: "travel", Component: TravelPage },
      { path: "book", Component: BookingPage },
      { path: "promos", Component: PromosPage },
      { path: "gallery", Component: GalleryPage },
      { path: "blog", Component: BlogPage },
      { path: "reviews", Component: ReviewsPage },
      { path: "travel-guide", Component: TravelGuidePage },
      { path: "faq", Component: FAQPage },
      { path: "contact", Component: ContactPage },
    ],
  },
])

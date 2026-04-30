import { Routes, Route, useLocation } from "react-router-dom";
import { Suspense, lazy, useEffect } from "react";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";

// Eager: HomePage is the LCP route, no splitting penalty there.
import HomePage from "@/routes/HomePage";
const AboutPage = lazy(() => import("@/routes/AboutPage"));
const ServicesPage = lazy(() => import("@/routes/ServicesPage"));
const BranchesPage = lazy(() => import("@/routes/BranchesPage"));
const BranchDetailPage = lazy(() => import("@/routes/BranchDetailPage"));
const MenuPage = lazy(() => import("@/routes/MenuPage"));
const ContactPage = lazy(() => import("@/routes/ContactPage"));
const NotFoundPage = lazy(() => import("@/routes/NotFoundPage"));

function RouteFallback() {
  return (
    <div className="max-w-[1140px] mx-auto px-8 py-24 text-center text-sm text-[#1F1B17]/50">
      Loading…
    </div>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <div
      className="min-h-screen flex flex-col"
      style={{
        backgroundColor: "#FAF7F4",
        color: "#1F1B17",
        fontFamily: "Space Grotesk, sans-serif",
      }}
    >
      <ScrollToTop />
      <SiteHeader />
      <div className="flex-1">
        <Suspense fallback={<RouteFallback />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/branches" element={<BranchesPage />} />
            <Route path="/branches/:slug" element={<BranchDetailPage />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </div>
      <SiteFooter />
    </div>
  );
}

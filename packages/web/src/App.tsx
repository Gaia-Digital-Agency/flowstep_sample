import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";

import HomePage from "@/routes/HomePage";
import AboutPage from "@/routes/AboutPage";
import ServicesPage from "@/routes/ServicesPage";
import BranchesPage from "@/routes/BranchesPage";
import BranchDetailPage from "@/routes/BranchDetailPage";
import MenuPage from "@/routes/MenuPage";
import ContactPage from "@/routes/ContactPage";
import NotFoundPage from "@/routes/NotFoundPage";

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
      </div>
      <SiteFooter />
    </div>
  );
}

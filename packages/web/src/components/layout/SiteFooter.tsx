import { Link } from "react-router-dom";
import { Facebook, Music2, MessageCircle, Leaf } from "lucide-react";

export function SiteFooter() {
  return (
    <footer
      className="border-t"
      style={{ backgroundColor: "#FAF7F4", borderColor: "#E8E2DC" }}
    >
      <div className="max-w-[1140px] mx-auto px-8 py-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-2">
          <span
            className="size-7 rounded-full flex items-center justify-center"
            style={{ backgroundColor: "#C4714F" }}
          >
            <Leaf className="size-3.5 text-white" aria-hidden="true" />
          </span>
          <span className="text-sm" style={{ color: "#1F1B17" }}>
            © {new Date().getFullYear()} Gaia AI. All rights reserved.
          </span>
        </div>

        <nav aria-label="Footer" className="flex items-center gap-6 text-sm">
          <Link to="/about" className="text-[#1F1B17] hover:text-[#C4714F]">
            About
          </Link>
          <Link to="/contact" className="text-[#1F1B17] hover:text-[#C4714F]">
            Contact
          </Link>
          <a
            href="https://facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="text-[#1F1B17] hover:text-[#C4714F]"
          >
            <Facebook className="size-4" />
          </a>
          <a
            href="https://www.tiktok.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
            className="text-[#1F1B17] hover:text-[#C4714F]"
          >
            <Music2 className="size-4" />
          </a>
          <a
            href="https://wa.me/60123456789"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="text-[#1F1B17] hover:text-[#C4714F]"
            data-track="whatsapp-click"
          >
            <MessageCircle className="size-4" />
          </a>
        </nav>
      </div>
    </footer>
  );
}

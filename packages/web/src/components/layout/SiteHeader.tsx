import { Leaf } from "lucide-react";
import { NavLink, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const NAV = [
  { to: "/", label: "Home", end: true },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/branches", label: "Branches" },
  { to: "/menu", label: "Menu" },
  { to: "/contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header
      className="sticky top-0 z-50 w-full border-b"
      style={{ backgroundColor: "#FAF7F4", borderColor: "#E8E2DC" }}
    >
      <div className="max-w-[1140px] mx-auto px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2" aria-label="Gaia AI home">
          <span
            className="size-8 rounded-full flex items-center justify-center"
            style={{ backgroundColor: "#C4714F" }}
          >
            <Leaf className="size-4 text-white" aria-hidden="true" />
          </span>
          <span className="text-lg leading-7 tracking-tight" style={{ color: "#1F1B17" }}>
            Gaia AI
          </span>
        </Link>

        <nav aria-label="Main" className="hidden md:flex items-center gap-8">
          {NAV.map(({ to, label, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              className={({ isActive }) =>
                cn(
                  "text-sm leading-5 pb-1 border-b-2 transition-colors",
                  isActive
                    ? "border-[#C4714F] text-[#C4714F]"
                    : "border-transparent text-[#1F1B17] hover:text-[#C4714F]",
                )
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        <Button asChild>
          <Link to="/contact">Reserve a Table</Link>
        </Button>
      </div>
    </header>
  );
}

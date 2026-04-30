import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { usePageMeta } from "@/hooks/usePageMeta";

export default function NotFoundPage() {
  usePageMeta({ title: "Page not found — Gaia AI", noindex: true });
  return (
    <>
      <main className="max-w-[1140px] mx-auto px-8 py-24 text-center">
        <p className="text-sm uppercase tracking-widest text-[#C4714F] mb-3">404</p>
        <h1 className="text-4xl tracking-tight font-normal mb-4">
          We can't find that page
        </h1>
        <p className="text-[#1F1B17]/70 mb-8 max-w-md mx-auto">
          The link may be outdated or the page was moved. Head back home and try again.
        </p>
        <Button asChild>
          <Link to="/">Back to home</Link>
        </Button>
      </main>
    </>
  );
}

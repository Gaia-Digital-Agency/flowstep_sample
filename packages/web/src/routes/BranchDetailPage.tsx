import { useParams, Link } from "react-router-dom";
import { MapPin, Phone, Clock, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { usePageMeta } from "@/hooks/usePageMeta";
import { useCms, type PayloadList, type BranchDoc } from "@/hooks/useCms";

function NotFoundBranch() {
  usePageMeta({
    title: "Branch not found — Gaia AI",
    description: "The branch you're looking for doesn't exist.",
    noindex: true,
  });
  return (
    <main className="max-w-[1140px] mx-auto px-8 py-24 text-center">
      <h1 className="text-3xl mb-4">Branch not found</h1>
      <p className="text-[#1F1B17]/70 mb-8">
        The branch you're looking for doesn't exist.
      </p>
      <Button asChild>
        <Link to="/branches">
          <ArrowLeft className="size-4" /> Back to all branches
        </Link>
      </Button>
    </main>
  );
}

export default function BranchDetailPage() {
  const { slug = "" } = useParams();
  const url = slug
    ? `/api/branches?where[slug][equals]=${encodeURIComponent(slug)}&limit=1`
    : null;
  const { data, loading, error } = useCms<PayloadList<BranchDoc>>(url);

  const branch = data?.docs?.[0];
  const imageSrc = branch?.imageUrl || branch?.image?.url || undefined;

  usePageMeta(
    branch
      ? {
          title: `${branch.name} — Gaia AI`,
          description: branch.tagline,
          canonical: `https://flowstep.gaiada.online/branches/${slug}`,
          jsonLd: {
            "@context": "https://schema.org",
            "@type": "Restaurant",
            name: branch.name,
            address: branch.address,
            telephone: branch.phone,
            openingHours: branch.hours,
            image: imageSrc,
            url: `https://flowstep.gaiada.online/branches/${slug}`,
          },
        }
      : { title: "Branch — Gaia AI" },
  );

  if (loading) {
    return (
      <main className="max-w-[1140px] mx-auto px-8 py-24 text-center text-sm text-[#1F1B17]/50">
        Loading branch…
      </main>
    );
  }
  if (error || !branch) return <NotFoundBranch />;

  return (
    <>
      <main>
        <section className="max-w-[1140px] mx-auto px-8 py-12">
          <Link
            to="/branches"
            className="inline-flex items-center gap-2 text-sm text-[#1F1B17]/70 hover:text-[#C4714F] mb-6"
          >
            <ArrowLeft className="size-4" /> All branches
          </Link>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-7">
              {imageSrc ? (
                <img
                  src={imageSrc}
                  alt={branch.name}
                  className="rounded-xl w-full aspect-[4/3] object-cover"
                  loading="lazy"
                />
              ) : (
                <div
                  className="rounded-xl w-full aspect-[4/3]"
                  style={{ backgroundColor: "#E8E2DC" }}
                  aria-hidden="true"
                />
              )}
            </div>
            <div className="lg:col-span-5 flex flex-col gap-6">
              <h1 className="text-4xl tracking-tight font-normal">
                {branch.name}
              </h1>
              {branch.tagline && (
                <p className="text-base text-[#1F1B17]/80 leading-7">
                  {branch.tagline}
                </p>
              )}
              <Card>
                <CardHeader>
                  <CardTitle>Visit us</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col gap-3 text-sm">
                  <div className="flex items-start gap-3">
                    <MapPin className="size-4 mt-0.5 text-[#C4714F]" />
                    <span>
                      {branch.address}
                      {branch.city ? `, ${branch.city}` : ""}
                    </span>
                  </div>
                  {branch.phone && (
                    <div className="flex items-start gap-3">
                      <Phone className="size-4 mt-0.5 text-[#C4714F]" />
                      <a
                        href={`tel:${branch.phone.replace(/\s+/g, "")}`}
                        data-track="phone-click"
                        className="hover:text-[#C4714F]"
                      >
                        {branch.phone}
                      </a>
                    </div>
                  )}
                  {branch.hours && (
                    <div className="flex items-start gap-3">
                      <Clock className="size-4 mt-0.5 text-[#C4714F]" />
                      <span>{branch.hours}</span>
                    </div>
                  )}
                </CardContent>
              </Card>
              <Button asChild>
                <Link to="/contact">Reserve a table</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

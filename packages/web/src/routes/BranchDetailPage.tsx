import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { MapPin, Phone, Clock, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const BRANCHES: Record<
  string,
  { name: string; tagline: string; address: string; phone: string; hours: string; image: string }
> = {
  "branch-1": {
    name: "Branch 1 — Heritage House",
    tagline: "Our flagship — a restored colonial townhouse with garden seating.",
    address: "12 Jalan Heritage, Bukit Bintang, Kuala Lumpur",
    phone: "+60 3 2148 0001",
    hours: "Tue–Sun · 12:00 – 23:00",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1600&q=80&auto=format",
  },
  "branch-2": {
    name: "Branch 2 — Coastline",
    tagline: "Open-air dining with sea views and a wood-fired hearth.",
    address: "Pantai Cenang Boardwalk, Langkawi",
    phone: "+60 4 955 0002",
    hours: "Daily · 16:00 – 24:00",
    image:
      "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=1600&q=80&auto=format",
  },
  "branch-3": {
    name: "Branch 3 — Highlands",
    tagline: "A mountain retreat with seasonal tasting menus.",
    address: "Genting Highlands Resort, Pahang",
    phone: "+60 3 6101 0003",
    hours: "Wed–Sun · 17:00 – 23:00",
    image:
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1600&q=80&auto=format",
  },
};

export default function BranchDetailPage() {
  const { slug = "" } = useParams();
  const branch = BRANCHES[slug];

  if (!branch) {
    return (
      <main className="max-w-[1140px] mx-auto px-8 py-24 text-center">
        <Helmet>
          <title>Branch not found — Gaia AI</title>
        </Helmet>
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

  return (
    <>
      <Helmet>
        <title>{branch.name} — Gaia AI</title>
        <meta name="description" content={branch.tagline} />
        <link rel="canonical" href={`https://flowstep.gaiada.online/branches/${slug}`} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Restaurant",
            name: branch.name,
            address: branch.address,
            telephone: branch.phone,
            openingHours: branch.hours,
            image: branch.image,
            url: `https://flowstep.gaiada.online/branches/${slug}`,
          })}
        </script>
      </Helmet>
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
              <img
                src={branch.image}
                alt={branch.name}
                className="rounded-xl w-full aspect-[4/3] object-cover"
                loading="lazy"
              />
            </div>
            <div className="lg:col-span-5 flex flex-col gap-6">
              <h1 className="text-4xl tracking-tight font-normal">{branch.name}</h1>
              <p className="text-base text-[#1F1B17]/80 leading-7">{branch.tagline}</p>
              <Card>
                <CardHeader>
                  <CardTitle>Visit us</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col gap-3 text-sm">
                  <div className="flex items-start gap-3">
                    <MapPin className="size-4 mt-0.5 text-[#C4714F]" />
                    <span>{branch.address}</span>
                  </div>
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
                  <div className="flex items-start gap-3">
                    <Clock className="size-4 mt-0.5 text-[#C4714F]" />
                    <span>{branch.hours}</span>
                  </div>
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

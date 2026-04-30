import { usePageMeta } from "@/hooks/usePageMeta";
import {
  ArrowRight,
  Award,
  Building2,
  ChefHat,
  Flame,
  Heart,
  Leaf,
  MapPin,
  MessageCircle,
  Music2,
  Sparkles,
  Sprout,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function HomePage() {
  usePageMeta({
    title: "Gaia AI — Energetic dining, polished service",
    description: "Gaia AI is a luxury dining concept blending bold flavour with polished hospitality.",
    canonical: "https://flowstep.gaiada.online/",
  });
  return (
    <>
      <main>
        <section
          className="max-w-[1140px] mx-auto px-8 py-12"
        >
          <div
            className="grid grid-cols-12 items-center gap-8"
          >
            <div
              className="col-span-5 flex flex-col gap-6"
            >
              <span
                className="uppercase text-[13px] tracking-widest"
                style={{ color: "#2D6A4F" }}
              >
                Luxury Dining · Est. 2013
              </span>
              <h1
                className="font-normal text-5xl leading-[53px] tracking-tight"
                style={{ color: "#1F1B17" }}
              >
                Where Every Meal Becomes a Memory
              </h1>
              <p
                className="text-base leading-[26px]"
                style={{ color: "#5C544C" }}
              >
                Authentic flavors, curated experiences, and warm hospitality —
                crafted for the discerning traveler.
              </p>
              <div
                className="flex pt-2 items-center gap-4"
              >
                <Button
                  className="rounded-md text-white px-6 h-11"
                  style={{ backgroundColor: "#C4714F" }}
                >
                  Explore Our Menu
                  <ArrowRight
                    className="size-4 ml-1"
                  />
                </Button>
                <Button
                  className="rounded-md border-black/1 border-1 border-solid px-6 h-11"
                  style={{ borderColor: "#2D6A4F", color: "#2D6A4F" }}
                  variant="ghost"
                >
                  Our Story
                </Button>
              </div>
              <div
                className="flex pt-4 items-center gap-6"
              >
                <div
                  className="flex items-center gap-2"
                >
                  <Star
                    className="size-4 fill-current"
                    style={{ color: "#C4714F" }}
                  />
                  <span
                    className="text-[13px]"
                    style={{ color: "#5C544C" }}
                  >
                    4.9 Guest Rating
                  </span>
                </div>
                <div
                  className="w-px h-4"
                  style={{ backgroundColor: "#E8E2DC" }}
                />
                <div
                  className="flex items-center gap-2"
                >
                  <Award
                    className="size-4 fill-current"
                    style={{ color: "#2D6A4F" }}
                  />
                  <span
                    className="text-[13px]"
                    style={{ color: "#5C544C" }}
                  >
                    Michelin Recommended
                  </span>
                </div>
              </div>
            </div>
            <div
              className="col-span-7"
            >
              <div
                className="relative rounded-2xl overflow-hidden"
                style={{ height: "420px" }}
              >
                <img
                  alt="Elegant Gaia restaurant interior with warm ambient lighting"
                  className="object-cover w-full h-full"
                  src="https://images.unsplash.com/photo-1768697358705-c1b60333da35?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3ODc2NDd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwcmVzdGF1cmFudCUyMGludGVyaW9yJTIwd2FybSUyMGxpZ2h0aW5nJTIwbHV4dXJ5fGVufDF8MHx8fDE3Nzc1NTc2NjF8MA&ixlib=rb-4.1.0&q=80&w=1400"
                />
                <div
                  className="rounded-lg flex absolute left-4 bottom-4 px-4 py-2 items-center gap-2"
                  style={{ backgroundColor: "rgba(250,247,244,0.85)" }}
                >
                  <MapPin
                    className="size-4 fill-current"
                    style={{ color: "#C4714F" }}
                  />
                  <span
                    className="text-[13px]"
                    style={{ color: "#1F1B17" }}
                  >
                    Flagship Branch · Old Town
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className="max-w-[1140px] mx-auto p-8"
        >
          <div
            className="grid grid-cols-3 gap-6"
          >
            <Card
              className="rounded-xl border-black/1 border-1 border-solid p-6 gap-4"
              style={{ backgroundColor: "#FFFFFF", borderColor: "#E8E2DC" }}
            >
              <CardHeader
                className="flex p-0 flex-row items-center gap-2"
              >
                <div
                  className="size-12 rounded-full flex justify-center items-center"
                  style={{ backgroundColor: "#F5E6DD" }}
                >
                  <Sparkles
                    className="size-5 fill-current"
                    style={{ color: "#C4714F" }}
                  />
                </div>
              </CardHeader>
              <CardContent
                className="p-0 gap-1"
              >
                <div
                  className="leading-none text-4xl"
                  style={{ color: "#1F1B17" }}
                >
                  12+
                </div>
                <div
                  className="text-base leading-6"
                  style={{ color: "#5C544C" }}
                >
                  Years of Excellence
                </div>
              </CardContent>
            </Card>
            <Card
              className="rounded-xl border-black/1 border-1 border-solid p-6 gap-4"
              style={{ backgroundColor: "#FFFFFF", borderColor: "#E8E2DC" }}
            >
              <CardHeader
                className="flex p-0 flex-row items-center gap-2"
              >
                <div
                  className="size-12 rounded-full flex justify-center items-center"
                  style={{ backgroundColor: "#F5E6DD" }}
                >
                  <Building2
                    className="size-5 fill-current"
                    style={{ color: "#C4714F" }}
                  />
                </div>
              </CardHeader>
              <CardContent
                className="p-0 gap-1"
              >
                <div
                  className="leading-none text-4xl"
                  style={{ color: "#1F1B17" }}
                >
                  3
                </div>
                <div
                  className="text-base leading-6"
                  style={{ color: "#5C544C" }}
                >
                  Signature Branches
                </div>
              </CardContent>
            </Card>
            <Card
              className="rounded-xl border-black/1 border-1 border-solid p-6 gap-4"
              style={{ backgroundColor: "#FFFFFF", borderColor: "#E8E2DC" }}
            >
              <CardHeader
                className="flex p-0 flex-row items-center gap-2"
              >
                <div
                  className="size-12 rounded-full flex justify-center items-center"
                  style={{ backgroundColor: "#F5E6DD" }}
                >
                  <Heart
                    className="size-5 fill-current"
                    style={{ color: "#C4714F" }}
                  />
                </div>
              </CardHeader>
              <CardContent
                className="p-0 gap-1"
              >
                <div
                  className="leading-none text-4xl"
                  style={{ color: "#1F1B17" }}
                >
                  10,000+
                </div>
                <div
                  className="text-base leading-6"
                  style={{ color: "#5C544C" }}
                >
                  Happy Guests
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
        <section
          className="max-w-[1140px] mx-auto p-8"
        >
          <div
            className="flex mb-6 justify-between items-end"
          >
            <div
              className="flex flex-col gap-2"
            >
              <span
                className="uppercase text-[13px] tracking-widest"
                style={{ color: "#2D6A4F" }}
              >
                What Sets Us Apart
              </span>
              <h2
                className="leading-tight font-normal text-4xl"
                style={{ color: "#1F1B17" }}
              >
                Crafted with Intention, Served with Soul
              </h2>
            </div>
          </div>
          <div
            className="grid grid-cols-3 gap-6"
          >
            <div
              className="rounded-xl border-black/1 border-1 border-solid flex p-6 flex-col gap-4"
              style={{ backgroundColor: "#FFFFFF", borderColor: "#E8E2DC" }}
            >
              <div
                className="size-12 rounded-lg flex justify-center items-center"
                style={{ backgroundColor: "#E5F0EA" }}
              >
                <Sprout
                  className="size-5 fill-current"
                  style={{ color: "#2D6A4F" }}
                />
              </div>
              <h3
                className="text-xl leading-7"
                style={{ color: "#1F1B17" }}
              >
                Locally Sourced Ingredients
              </h3>
              <p
                className="text-base leading-[26px]"
                style={{ color: "#5C544C" }}
              >
                Every plate begins at the local farms and fisheries we trust —
                fresh, seasonal, and traceable to its origin.
              </p>
              <a
                className="inline-flex text-sm leading-5 items-center gap-1"
                href="#"
                style={{ color: "#C4714F" }}
              >
                Meet our farmers
                <ArrowRight
                  className="size-3.5"
                />
              </a>
            </div>
            <div
              className="rounded-xl border-black/1 border-1 border-solid flex p-6 flex-col gap-4"
              style={{ backgroundColor: "#FFFFFF", borderColor: "#E8E2DC" }}
            >
              <div
                className="size-12 rounded-lg flex justify-center items-center"
                style={{ backgroundColor: "#E5F0EA" }}
              >
                <ChefHat
                  className="size-5 fill-current"
                  style={{ color: "#2D6A4F" }}
                />
              </div>
              <h3
                className="text-xl leading-7"
                style={{ color: "#1F1B17" }}
              >
                Award-Winning Chefs
              </h3>
              <p
                className="text-base leading-[26px]"
                style={{ color: "#5C544C" }}
              >
                A globally trained kitchen brigade led by chefs whose work has
                been celebrated across guides and competitions.
              </p>
              <a
                className="inline-flex text-sm leading-5 items-center gap-1"
                href="#"
                style={{ color: "#C4714F" }}
              >
                See our team
                <ArrowRight
                  className="size-3.5"
                />
              </a>
            </div>
            <div
              className="rounded-xl border-black/1 border-1 border-solid flex p-6 flex-col gap-4"
              style={{ backgroundColor: "#FFFFFF", borderColor: "#E8E2DC" }}
            >
              <div
                className="size-12 rounded-lg flex justify-center items-center"
                style={{ backgroundColor: "#E5F0EA" }}
              >
                <Flame
                  className="size-5 fill-current"
                  style={{ color: "#2D6A4F" }}
                />
              </div>
              <h3
                className="text-xl leading-7"
                style={{ color: "#1F1B17" }}
              >
                Immersive Dining Atmosphere
              </h3>
              <p
                className="text-base leading-[26px]"
                style={{ color: "#5C544C" }}
              >
                Architectural interiors, layered lighting, and curated music —
                designed so each visit feels like a small journey.
              </p>
              <a
                className="inline-flex text-sm leading-5 items-center gap-1"
                href="#"
                style={{ color: "#C4714F" }}
              >
                Tour our spaces
                <ArrowRight
                  className="size-3.5"
                />
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

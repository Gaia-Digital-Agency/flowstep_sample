import { Link } from "react-router-dom";
import { usePageMeta } from "@/hooks/usePageMeta";
import { useCms, type PayloadList, type BranchDoc } from "@/hooks/useCms";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  CalendarCheck,
  Clock,
  Leaf,
  MapPin,
  MessageCircle,
  Minus,
  Music2,
  Navigation,
  Plus,
  Search,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

function BranchCard({ branch }: { branch: BranchDoc }) {
  const img = branch.imageUrl || branch.image?.url;
  return (
    <Card className="border-neutral-200 border-0 border-solid p-0 gap-0 overflow-hidden">
      <div className="relative w-full h-44 overflow-hidden">
        {img ? (
          <img
            alt={`${branch.name} exterior`}
            className="object-cover w-full h-full"
            src={img}
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full" style={{ backgroundColor: "#E8E2DC" }} />
        )}
      </div>
      <CardContent className="flex p-6 flex-col gap-4">
        <div className="flex justify-between items-start gap-2">
          <h2 className="text-xl leading-7 tracking-tight">{branch.name}</h2>
          <Badge className="text-white" style={{ backgroundColor: "#2D6A4F" }}>
            Open
          </Badge>
        </div>
        <div className="flex flex-col gap-1">
          <div className="text-neutral-500 text-sm leading-5 flex items-center gap-2">
            <MapPin className="size-4" style={{ color: "#2D6A4F" }} />
            <span>
              {branch.address}
              {branch.city ? `, ${branch.city}` : ""}
            </span>
          </div>
          {branch.hours && (
            <div className="text-neutral-500 text-sm leading-5 flex items-center gap-2">
              <Clock className="size-4" style={{ color: "#2D6A4F" }} />
              <span>{branch.hours}</span>
            </div>
          )}
        </div>
        {branch.tagline && (
          <p className="leading-relaxed text-neutral-950/80 text-sm leading-5">
            {branch.tagline}
          </p>
        )}
        <div className="flex pt-2 items-center gap-2">
          <Button asChild className="text-white flex-1" style={{ backgroundColor: "#C4714F" }}>
            <Link to={`/branches/${branch.slug}`}>View Branch</Link>
          </Button>
          <Button
            className="flex-1"
            style={{ borderColor: "#2D6A4F", color: "#2D6A4F" }}
            variant="outline"
            asChild
          >
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                `${branch.name} ${branch.address}`,
              )}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Navigation className="size-4" />
              Directions
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

export default function BranchesPage() {
  usePageMeta({
    title: "Our Branches — Three locations, one Gaia AI",
    description: "Find Gaia AI across three signature branches, each with its own character and view.",
    canonical: "https://flowstep.gaiada.online/branches",
  });
  const { data, loading, error } = useCms<PayloadList<BranchDoc>>(
    "/api/branches?limit=20&sort=name",
  );
  const branches = data?.docs ?? [];
  return (
    <>
      <main>
        <main
          className="max-w-[1140px] mx-auto px-8 py-12 w-full"
          style={{ backgroundColor: "#FAF7F4" }}
        >
          <section
            className="flex pb-8 flex-col gap-6"
          >
            <div
              className="flex flex-col gap-2"
            >
              <span
                className="uppercase text-xs leading-4 tracking-widest"
                style={{ color: "#2D6A4F" }}
              >
                Our Locations
              </span>
              <h1
                className="text-neutral-950 text-5xl leading-12 tracking-tight"
              >
                Find Your Nearest Gaia
              </h1>
              <p
                className="text-neutral-500 text-base leading-6"
              >
                Three unique locations, one unforgettable experience.
              </p>
            </div>
            <Card
              className="border-neutral-200 border-0 border-solid p-4 gap-4"
            >
              <CardContent
                className="flex p-0 items-center gap-2"
              >
                <div
                  className="relative flex-1"
                >
                  <Search
                    className="top-1/2 size-4 -translate-y-1/2 text-neutral-500 absolute left-3"
                  />
                  <Input
                    className="pl-9 h-11"
                    placeholder="Search by branch name or neighbourhood..."
                  />
                </div>
                <Select data-id="76b7997d-1f55-589b-851d-a8323651b10b">
                  <SelectTrigger
                    className="w-45 h-11"
                  >
                    <SelectValue
                      placeholder="Area"
                    />
                  </SelectTrigger>
                  <SelectContent data-id="c7350023-a963-5d7e-bbbe-c88fc1cbe997">
                    <SelectItem
                      value="city"
                    >
                      City Centre
                    </SelectItem>
                    <SelectItem
                      value="water"
                    >
                      Waterfront
                    </SelectItem>
                    <SelectItem
                      value="heritage"
                    >
                      Heritage Quarter
                    </SelectItem>
                  </SelectContent>
                </Select>
                <Select data-id="4ac6f67e-13f3-5660-8fa7-329df32b8192">
                  <SelectTrigger
                    className="w-45 h-11"
                  >
                    <SelectValue
                      placeholder="Type"
                    />
                  </SelectTrigger>
                  <SelectContent data-id="3166b02c-c0ea-58a2-a36b-45647d13524a">
                    <SelectItem
                      value="fine"
                    >
                      Fine Dining
                    </SelectItem>
                    <SelectItem
                      value="casual"
                    >
                      Casual
                    </SelectItem>
                    <SelectItem
                      value="bar"
                    >{`Bar & Lounge`}</SelectItem>
                  </SelectContent>
                </Select>
                <Button
                  className="text-white px-6 h-11"
                  style={{ backgroundColor: "#C4714F" }}
                >
                  <Search
                    className="size-4"
                  />
                  Search
                </Button>
              </CardContent>
            </Card>
          </section>
          <section
            className="grid grid-cols-3 pb-12 gap-6"
          >
            {loading && (
              <div className="col-span-3 text-center text-sm text-[#1F1B17]/50 py-12">
                Loading branches…
              </div>
            )}
            {error && (
              <div className="col-span-3 text-center text-sm text-red-600 py-12">
                Could not load branches. Please refresh.
              </div>
            )}
            {!loading && !error && branches.length === 0 && (
              <div className="col-span-3 text-center text-sm text-[#1F1B17]/50 py-12">
                No branches yet.
              </div>
            )}
            {branches.map((b) => (
              <BranchCard key={b.id} branch={b} />
            ))}
          </section>
          <section
            className="flex pb-12 flex-col gap-4"
          >
            <div
              className="flex justify-between items-end"
            >
              <h2
                className="text-2xl leading-8 tracking-tight"
              >
                All Locations on Map
              </h2>
              <span
                className="text-neutral-500 text-sm leading-5"
              >
                3 branches · interactive view
              </span>
            </div>
            <div
              className="relative rounded-xl bg-neutral-100 border-neutral-200 border-1 border-solid w-full h-72 overflow-hidden"
            >
              <img
                alt="Interactive map showing all three Gaia branch locations"
                className="object-cover opacity-90 w-full h-full"
                src="https://screens-image-components-public.s3.eu-north-1.amazonaws.com/city-map-2d.png"
              />
              <div
                className="left-[22%] top-[40%] flex absolute flex-col items-center gap-1"
              >
                <div
                  className="size-9 shadow-lg rounded-full text-white flex justify-center items-center"
                  style={{ backgroundColor: "#C4714F" }}
                >
                  <MapPin
                    className="size-5"
                  />
                </div>
                <span
                  className="shadow-sm rounded-full bg-white text-xs leading-4 px-2 py-0.5"
                >
                  Branch 1
                </span>
              </div>
              <div
                className="left-[55%] top-[58%] flex absolute flex-col items-center gap-1"
              >
                <div
                  className="size-9 shadow-lg rounded-full text-white flex justify-center items-center"
                  style={{ backgroundColor: "#C4714F" }}
                >
                  <MapPin
                    className="size-5"
                  />
                </div>
                <span
                  className="shadow-sm rounded-full bg-white text-xs leading-4 px-2 py-0.5"
                >
                  Branch 2
                </span>
              </div>
              <div
                className="left-[78%] top-[30%] flex absolute flex-col items-center gap-1"
              >
                <div
                  className="size-9 shadow-lg rounded-full text-white flex justify-center items-center"
                  style={{ backgroundColor: "#C4714F" }}
                >
                  <MapPin
                    className="size-5"
                  />
                </div>
                <span
                  className="shadow-sm rounded-full bg-white text-xs leading-4 px-2 py-0.5"
                >
                  Branch 3
                </span>
              </div>
              <div
                className="flex absolute right-4 bottom-4 flex-col gap-1"
              >
                <Button
                  className="size-8"
                  size="icon"
                  variant="secondary"
                >
                  <Plus
                    className="size-4"
                  />
                </Button>
                <Button
                  className="size-8"
                  size="icon"
                  variant="secondary"
                >
                  <Minus
                    className="size-4"
                  />
                </Button>
              </div>
            </div>
          </section>
        </main>
      </main>
    </>
  );
}
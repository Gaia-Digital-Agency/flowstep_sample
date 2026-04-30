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
          data-id="f5bd68b3-d97d-5e35-9852-a4d7da153ecd"
        >
          <section
            className="flex pb-8 flex-col gap-6"
            data-id="fd1ab182-9e9b-5a8b-98b2-516c63df089c"
          >
            <div
              className="flex flex-col gap-2"
              data-id="daa5fd06-8122-5753-9b31-a82cfc80ceb7"
            >
              <span
                className="uppercase text-xs leading-4 tracking-widest"
                style={{ color: "#2D6A4F" }}
                data-id="22300d69-a09b-5256-a119-3f1048b17716"
              >
                Our Locations
              </span>
              <h1
                className="text-neutral-950 text-5xl leading-12 tracking-tight"
                data-id="b279fdf5-b066-5d34-916b-a6637fcbe95b"
              >
                Find Your Nearest Gaia
              </h1>
              <p
                className="text-neutral-500 text-base leading-6"
                data-id="d03a362f-69ee-560e-bbdd-15946de785e1"
              >
                Three unique locations, one unforgettable experience.
              </p>
            </div>
            <Card
              className="border-neutral-200 border-0 border-solid p-4 gap-4"
              data-id="d785a575-825f-5f6b-bc8a-f1993a8be369"
            >
              <CardContent
                className="flex p-0 items-center gap-2"
                data-id="afeebb70-f2ec-53a9-a1ed-36d14bf88115"
              >
                <div
                  className="relative flex-1"
                  data-id="2f504e90-8ecd-5a6d-b227-9341f16384ea"
                >
                  <Search
                    className="top-1/2 size-4 -translate-y-1/2 text-neutral-500 absolute left-3"
                    data-id="b2026df6-0d59-5531-8ef5-9def0c35f518"
                  />
                  <Input
                    className="pl-9 h-11"
                    placeholder="Search by branch name or neighbourhood..."
                    data-id="8b9c53a7-3a79-5836-99c3-62ec5ee6577c"
                  />
                </div>
                <Select data-id="76b7997d-1f55-589b-851d-a8323651b10b">
                  <SelectTrigger
                    className="w-45 h-11"
                    data-id="9b93cab0-faf5-5b70-813a-4555b3843cca"
                  >
                    <SelectValue
                      placeholder="Area"
                      data-id="ddcd64b2-8445-5302-8443-7bb87015efd0"
                    />
                  </SelectTrigger>
                  <SelectContent data-id="c7350023-a963-5d7e-bbbe-c88fc1cbe997">
                    <SelectItem
                      value="city"
                      data-id="795f6b36-ae48-5f35-9f7f-1aa6ef931bb6"
                    >
                      City Centre
                    </SelectItem>
                    <SelectItem
                      value="water"
                      data-id="d9b6ec0d-03cc-5e04-bab0-d7ab1d4fdfb2"
                    >
                      Waterfront
                    </SelectItem>
                    <SelectItem
                      value="heritage"
                      data-id="41e532de-aeb3-529f-8f0b-d465ee6115c1"
                    >
                      Heritage Quarter
                    </SelectItem>
                  </SelectContent>
                </Select>
                <Select data-id="4ac6f67e-13f3-5660-8fa7-329df32b8192">
                  <SelectTrigger
                    className="w-45 h-11"
                    data-id="0f6d81ef-31a9-58bb-986f-f07befb349d4"
                  >
                    <SelectValue
                      placeholder="Type"
                      data-id="0894e0f5-0a51-55a0-813d-4e0e916e9d37"
                    />
                  </SelectTrigger>
                  <SelectContent data-id="3166b02c-c0ea-58a2-a36b-45647d13524a">
                    <SelectItem
                      value="fine"
                      data-id="c1c3de38-7f86-58c8-9c93-a2b7db2fc2aa"
                    >
                      Fine Dining
                    </SelectItem>
                    <SelectItem
                      value="casual"
                      data-id="dd5441d0-cee3-5a83-9a63-5cf183a32835"
                    >
                      Casual
                    </SelectItem>
                    <SelectItem
                      value="bar"
                      data-id="ec7b30fe-325a-5434-98f0-0a06de54c47e"
                    >{`Bar & Lounge`}</SelectItem>
                  </SelectContent>
                </Select>
                <Button
                  className="text-white px-6 h-11"
                  style={{ backgroundColor: "#C4714F" }}
                  data-id="a505f40c-0583-5e1d-b227-ce293e750824"
                >
                  <Search
                    className="size-4"
                    data-id="a3862f5d-cd8e-5347-a6d1-1e0fd2d29d19"
                  />
                  Search
                </Button>
              </CardContent>
            </Card>
          </section>
          <section
            className="grid grid-cols-3 pb-12 gap-6"
            data-id="57cf94c1-1b17-5fd3-a347-e8ed5dbf9bb0"
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
            data-id="248398ae-162d-5fff-9954-1a05ad3af20a"
          >
            <div
              className="flex justify-between items-end"
              data-id="58f8e084-b8b9-5685-9fa6-1312422af8be"
            >
              <h2
                className="text-2xl leading-8 tracking-tight"
                data-id="3ef1f818-ea83-5e0a-a2dc-028993fb9270"
              >
                All Locations on Map
              </h2>
              <span
                className="text-neutral-500 text-sm leading-5"
                data-id="8dc3ea87-35ee-5326-b462-a54ad8ea8650"
              >
                3 branches · interactive view
              </span>
            </div>
            <div
              className="relative rounded-xl bg-neutral-100 border-neutral-200 border-1 border-solid w-full h-72 overflow-hidden"
              data-id="b2c84a5f-65d8-5583-afa9-8372c28c4360"
            >
              <img
                alt="Interactive map showing all three Gaia branch locations"
                className="object-cover opacity-90 w-full h-full"
                src="https://screens-image-components-public.s3.eu-north-1.amazonaws.com/city-map-2d.png"
                data-id="3e25870d-9cc3-5b39-b2d3-bc4cb8599c98"
              />
              <div
                className="left-[22%] top-[40%] flex absolute flex-col items-center gap-1"
                data-id="5df75f6a-6113-5abc-a7ef-1f0b92ee6198"
              >
                <div
                  className="size-9 shadow-lg rounded-full text-white flex justify-center items-center"
                  style={{ backgroundColor: "#C4714F" }}
                  data-id="d608a2f8-44e6-5c1b-a46b-a8c42c71b3c7"
                >
                  <MapPin
                    className="size-5"
                    data-id="4146f857-c7be-54f6-abf8-d43353ef0088"
                  />
                </div>
                <span
                  className="shadow-sm rounded-full bg-white text-xs leading-4 px-2 py-0.5"
                  data-id="70bb4407-7be1-5e30-b9bc-4f940fcf7cdc"
                >
                  Branch 1
                </span>
              </div>
              <div
                className="left-[55%] top-[58%] flex absolute flex-col items-center gap-1"
                data-id="4ead4336-e8e7-550c-b88e-5113b739f752"
              >
                <div
                  className="size-9 shadow-lg rounded-full text-white flex justify-center items-center"
                  style={{ backgroundColor: "#C4714F" }}
                  data-id="3e52ce3b-936c-5b97-803e-f04a6abba730"
                >
                  <MapPin
                    className="size-5"
                    data-id="f3c7f9d9-050a-5bcc-804b-77228e7587cf"
                  />
                </div>
                <span
                  className="shadow-sm rounded-full bg-white text-xs leading-4 px-2 py-0.5"
                  data-id="87d41953-a8f5-562f-818c-84919b5cd840"
                >
                  Branch 2
                </span>
              </div>
              <div
                className="left-[78%] top-[30%] flex absolute flex-col items-center gap-1"
                data-id="d19b5e19-0b75-5d66-be97-874915d9c56d"
              >
                <div
                  className="size-9 shadow-lg rounded-full text-white flex justify-center items-center"
                  style={{ backgroundColor: "#C4714F" }}
                  data-id="e7c81d3b-b263-53e7-89e4-7dd021e8f867"
                >
                  <MapPin
                    className="size-5"
                    data-id="871ea64e-518e-5a26-a165-6889d96b0dec"
                  />
                </div>
                <span
                  className="shadow-sm rounded-full bg-white text-xs leading-4 px-2 py-0.5"
                  data-id="84db10d0-1d11-5afc-b61a-d5da809704f8"
                >
                  Branch 3
                </span>
              </div>
              <div
                className="flex absolute right-4 bottom-4 flex-col gap-1"
                data-id="d78a31a8-2288-51bd-96a0-a2d214ff86d6"
              >
                <Button
                  className="size-8"
                  size="icon"
                  variant="secondary"
                  data-id="7388e048-600a-5f23-8427-8ac3f6e9be29"
                >
                  <Plus
                    className="size-4"
                    data-id="cae6b98b-7270-5995-8af4-b8935174b841"
                  />
                </Button>
                <Button
                  className="size-8"
                  size="icon"
                  variant="secondary"
                  data-id="847e82a9-abdd-511f-b146-14b8f37f9a93"
                >
                  <Minus
                    className="size-4"
                    data-id="21b9c999-0799-5da5-976c-c94eb0872345"
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
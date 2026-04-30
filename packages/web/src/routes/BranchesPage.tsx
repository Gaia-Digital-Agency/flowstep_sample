import { usePageMeta } from "@/hooks/usePageMeta";
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

export default function BranchesPage() {
  usePageMeta({
    title: "Our Branches — Three locations, one Gaia AI",
    description: "Find Gaia AI across three signature branches, each with its own character and view.",
    canonical: "https://flowstep.gaiada.online/branches",
  });
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
            <Card
              className="border-neutral-200 border-0 border-solid p-0 gap-0 overflow-hidden"
              data-id="178e1dcd-a66e-5901-aae2-55dc22cecea9"
            >
              <div
                className="relative w-full h-44 overflow-hidden"
                data-id="edbfe877-e732-538e-be50-bbfe2489c9ad"
              >
                <img
                  alt="Gaia Branch 1 exterior"
                  className="object-cover w-full h-full"
                  data-authorname="Unsplash"
                  data-authorurl="https://unsplash.com"
                  data-photoid="a"
                  src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600"
                  data-id="88c7734d-3743-5e17-80ee-6e2f9e87613a"
                />
              </div>
              <CardContent
                className="flex p-6 flex-col gap-4"
                data-id="1c1c1c02-7970-56ea-ac33-3b3323965e66"
              >
                <div
                  className="flex justify-between items-start gap-2"
                  data-id="3ccd9084-a469-52f2-9edc-f4dc9c1e0efd"
                >
                  <h2
                    className="text-xl leading-7 tracking-tight"
                    data-id="9efbbc77-5b72-58af-9a12-eef843267a38"
                  >
                    Branch 1 — City Centre
                  </h2>
                  <Badge
                    className="text-white"
                    style={{ backgroundColor: "#2D6A4F" }}
                    data-id="870288ee-22f8-5e9c-910b-aed6a13c4ce0"
                  >
                    Open
                  </Badge>
                </div>
                <div
                  className="flex flex-col gap-1"
                  data-id="98a0a33a-7a76-5b79-8262-56542ec32298"
                >
                  <div
                    className="text-neutral-500 text-sm leading-5 flex items-center gap-2"
                    data-id="1cb6bf06-0dac-50a3-bbee-cc88ff148185"
                  >
                    <MapPin
                      className="size-4"
                      style={{ color: "#2D6A4F" }}
                      data-id="72a339b1-eb93-5acb-ad1b-0c077ab52f6c"
                    />
                    <span data-id="a8db7716-1b10-5ce8-9b14-99111003339d">
                      14 Market Square, Central District
                    </span>
                  </div>
                  <div
                    className="text-neutral-500 text-sm leading-5 flex items-center gap-2"
                    data-id="7d99d106-0e1f-5758-a874-a511a2a7691b"
                  >
                    <Clock
                      className="size-4"
                      style={{ color: "#2D6A4F" }}
                      data-id="a7391461-8470-504d-852f-92d05a18dd5f"
                    />
                    <span data-id="4668f089-9ee8-5081-8c65-88a1acf7998c">
                      Mon–Sun · 11:00 – 23:00
                    </span>
                  </div>
                </div>
                <p
                  className="leading-relaxed text-neutral-950/80 text-sm leading-5"
                  data-id="fdc9527f-9b61-598a-987b-ed78f149dd6f"
                >
                  A vibrant flagship in the heart of downtown, blending bold
                  flavours with confident contemporary design.
                </p>
                <div
                  className="flex pt-2 items-center gap-2"
                  data-id="9519b556-040d-5e6d-846a-5cbb9d0ac1d6"
                >
                  <Button
                    className="text-white flex-1"
                    style={{ backgroundColor: "#C4714F" }}
                    data-id="0c9d61e6-afa3-5995-9763-cdbaa8a853df"
                  >
                    View Branch
                  </Button>
                  <Button
                    className="flex-1"
                    style={{ borderColor: "#2D6A4F", color: "#2D6A4F" }}
                    variant="outline"
                    data-id="f4332bc4-31f8-5fbb-876b-92c86a4505e4"
                  >
                    <Navigation
                      className="size-4"
                      data-id="07264727-b486-5c7c-944b-d97b85903536"
                    />
                    Directions
                  </Button>
                </div>
              </CardContent>
            </Card>
            <Card
              className="border-neutral-200 border-0 border-solid p-0 gap-0 overflow-hidden"
              data-id="d1684057-ee9f-59f6-844d-7317f8f569f2"
            >
              <div
                className="relative w-full h-44 overflow-hidden"
                data-id="9506d146-34d6-590f-9a00-e189c8a9442f"
              >
                <img
                  alt="Gaia Branch 2 exterior"
                  className="object-cover w-full h-full"
                  data-authorname="Unsplash"
                  data-authorurl="https://unsplash.com"
                  data-photoid="b"
                  src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600"
                  data-id="39cac120-4651-5f4d-befd-4d7321cfa4c2"
                />
              </div>
              <CardContent
                className="flex p-6 flex-col gap-4"
                data-id="158475b8-fdb2-5e49-9e19-c00e5a4b6b24"
              >
                <div
                  className="flex justify-between items-start gap-2"
                  data-id="071faf2b-4f72-5ec8-8eba-7c6ce3731f59"
                >
                  <h2
                    className="text-xl leading-7 tracking-tight"
                    data-id="2cd93401-19d3-5e21-8dde-99e3ebaf4e99"
                  >
                    Branch 2 — Waterfront
                  </h2>
                  <Badge
                    className="text-white"
                    style={{ backgroundColor: "#2D6A4F" }}
                    data-id="93356c98-c247-5beb-9175-f55e0d3b438a"
                  >
                    Open
                  </Badge>
                </div>
                <div
                  className="flex flex-col gap-1"
                  data-id="5a679156-2708-5484-ac5c-cdb3a1c4a581"
                >
                  <div
                    className="text-neutral-500 text-sm leading-5 flex items-center gap-2"
                    data-id="cce182e2-aee1-5e0c-8f17-62caf3bdd437"
                  >
                    <MapPin
                      className="size-4"
                      style={{ color: "#2D6A4F" }}
                      data-id="5fbc957c-7626-59f4-964b-b2238b1938e0"
                    />
                    <span data-id="b0f3f28e-ea6f-59f1-9dbe-1b96687627d7">
                      27 Harbour Promenade, Marina Bay
                    </span>
                  </div>
                  <div
                    className="text-neutral-500 text-sm leading-5 flex items-center gap-2"
                    data-id="c00b6ae3-5cb9-567e-bdb1-18ac52b11558"
                  >
                    <Clock
                      className="size-4"
                      style={{ color: "#2D6A4F" }}
                      data-id="550f1c87-9e4b-54c1-9ef5-d8fe1263743a"
                    />
                    <span data-id="250c13b8-2214-55d0-9d3e-bb27ad21de67">
                      Mon–Sun · 12:00 – 00:00
                    </span>
                  </div>
                </div>
                <p
                  className="leading-relaxed text-neutral-950/80 text-sm leading-5"
                  data-id="c73ce630-82bc-5ca4-93e9-7552cfa499c7"
                >
                  Sweeping harbour views and a refined, airy terrace make this
                  our most aspirational seaside destination.
                </p>
                <div
                  className="flex pt-2 items-center gap-2"
                  data-id="37c84814-fcac-5497-af7e-53728ab1f732"
                >
                  <Button
                    className="text-white flex-1"
                    style={{ backgroundColor: "#C4714F" }}
                    data-id="26e7a02a-0d9c-5218-a0db-3a26615a368b"
                  >
                    View Branch
                  </Button>
                  <Button
                    className="flex-1"
                    style={{ borderColor: "#2D6A4F", color: "#2D6A4F" }}
                    variant="outline"
                    data-id="757d9f69-c29c-5014-82ba-d359841f60f2"
                  >
                    <Navigation
                      className="size-4"
                      data-id="1752ffbf-6618-555d-a8e5-dea4be7b38dd"
                    />
                    Directions
                  </Button>
                </div>
              </CardContent>
            </Card>
            <Card
              className="border-neutral-200 border-0 border-solid p-0 gap-0 overflow-hidden"
              data-id="900dbd62-8d8f-596d-b7d4-b81dd772b1f8"
            >
              <div
                className="relative w-full h-44 overflow-hidden"
                data-id="632c5c77-1b3a-54d4-96d3-47fd178f50a6"
              >
                <img
                  alt="Gaia Branch 3 exterior"
                  className="object-cover w-full h-full"
                  data-authorname="Unsplash"
                  data-authorurl="https://unsplash.com"
                  data-photoid="c"
                  src="https://images.unsplash.com/photo-1559339352-11d035aa65de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600"
                  data-id="2e3ba1b5-7a84-5495-a10d-90fa74562d27"
                />
              </div>
              <CardContent
                className="flex p-6 flex-col gap-4"
                data-id="3a6c1bde-ad51-5f07-bd57-0792f09dd8f3"
              >
                <div
                  className="flex justify-between items-start gap-2"
                  data-id="98503649-2cb0-548d-86a4-f2ff6548c885"
                >
                  <h2
                    className="text-xl leading-7 tracking-tight"
                    data-id="2b16a6e8-0480-56a2-85cf-92dd321ff4e6"
                  >
                    Branch 3 — Heritage Quarter
                  </h2>
                  <Badge
                    className="text-white"
                    style={{ backgroundColor: "#2D6A4F" }}
                    data-id="2b5dd51e-e514-553a-8a8f-49ab45ab1072"
                  >
                    Open
                  </Badge>
                </div>
                <div
                  className="flex flex-col gap-1"
                  data-id="c0238bff-975a-5d97-8629-1615b8bf00eb"
                >
                  <div
                    className="text-neutral-500 text-sm leading-5 flex items-center gap-2"
                    data-id="e5be9bf5-4d74-5798-846b-d426c7babb0e"
                  >
                    <MapPin
                      className="size-4"
                      style={{ color: "#2D6A4F" }}
                      data-id="316da04b-09a6-5983-9f56-d96c687416ce"
                    />
                    <span data-id="546029f0-4cc4-5158-a3a6-ea304fd07212">
                      9 Old Stone Lane, Heritage Quarter
                    </span>
                  </div>
                  <div
                    className="text-neutral-500 text-sm leading-5 flex items-center gap-2"
                    data-id="08c897c3-d9e1-5f0e-87a8-a2e8227fe920"
                  >
                    <Clock
                      className="size-4"
                      style={{ color: "#2D6A4F" }}
                      data-id="3c099f9c-51aa-54a2-bc77-5a912efb38da"
                    />
                    <span data-id="fc6868a6-5c84-5b27-94ad-bb1dd6d9a681">
                      Tue–Sun · 17:00 – 23:00
                    </span>
                  </div>
                </div>
                <p
                  className="leading-relaxed text-neutral-950/80 text-sm leading-5"
                  data-id="bed00d67-9423-5a36-a26c-d8b6a8ee58d6"
                >
                  Set in a restored colonial villa, this intimate venue pairs
                  heritage architecture with modern, polished hospitality.
                </p>
                <div
                  className="flex pt-2 items-center gap-2"
                  data-id="fa89231f-c6bc-579c-be23-3e71448f8ba5"
                >
                  <Button
                    className="text-white flex-1"
                    style={{ backgroundColor: "#C4714F" }}
                    data-id="60612308-9377-5b9f-92da-e100d04bceea"
                  >
                    View Branch
                  </Button>
                  <Button
                    className="flex-1"
                    style={{ borderColor: "#2D6A4F", color: "#2D6A4F" }}
                    variant="outline"
                    data-id="f1dd8ec7-b4f8-5d03-bcc2-1dc11295db75"
                  >
                    <Navigation
                      className="size-4"
                      data-id="7d386dd5-938d-5ceb-b7b9-cd23ab27bd1c"
                    />
                    Directions
                  </Button>
                </div>
              </CardContent>
            </Card>
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

import { useEffect } from "react";
import {
  ArrowRight,
  Briefcase,
  ChefHat,
  CookingPot,
  Flame,
  MessageCircle,
  Music2,
  PartyPopper,
  Truck,
  UtensilsCrossed,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

import { FallbackComponent } from "./CustomComponents";

export default function App() {
  return (
    <div>
      <div
        className="bg-white text-neutral-950 w-full h-fit h-fit min-h-screen w-screen min-w-screen max-w-screen overflow-visible"
        style={{
          backgroundColor: "#FAF7F4",
          fontFamily: "Space Grotesk, sans-serif",
        }}
        data-id="2a42c8ed-9217-5cf0-8c6f-ce24f5cd0d9e"
      >
        <header
          className="sticky z-50 border-black/1 border-t-0 border-r-0 border-b-1 border-l-0 border-solid top-0"
          style={{ backgroundColor: "#FAF7F4", borderColor: "#E8E2DC" }}
          data-id="1b86e5c7-ee81-51f2-8cb1-c7a675f65727"
        >
          <nav
            aria-label="Main navigation"
            className="flex px-12 py-4 justify-between items-center"
            data-id="ab51737a-c36c-5418-9e78-af0006935251"
          >
            <div
              className="flex items-center gap-2"
              data-id="5503ace0-3741-59ab-acbf-3defa2139aa3"
            >
              <div
                className="size-8 rounded-full flex justify-center items-center"
                style={{ backgroundColor: "#C4714F" }}
                data-id="c6a8ab46-cafd-54db-85fa-3cc574457bf5"
              >
                <Flame
                  className="size-4 text-white"
                  data-id="161449fe-845d-5662-b88c-669bd9d971bb"
                />
              </div>
              <span
                className="font-medium text-lg leading-7 tracking-tight"
                style={{ color: "#1A1A1A" }}
                data-id="714ec41d-ba99-5b2d-9147-bcb9c1906306"
              >
                Gaia AI
              </span>
            </div>
            <ul
              className="flex items-center gap-8"
              data-id="79924283-1d22-58e7-b355-a2261a3fe454"
            >
              <li data-id="188b5c1c-6e78-52b4-81d0-7e8fcd012a3c">
                <a
                  className="text-sm leading-5"
                  href="#"
                  style={{ color: "#4A4A4A" }}
                  data-id="004ad6cb-03fc-5722-9c2c-98ec988341e9"
                >
                  Home
                </a>
              </li>
              <li data-id="c8194b87-2504-5bfa-85e4-44ea13cb1295">
                <a
                  className="text-sm leading-5"
                  href="#"
                  style={{ color: "#4A4A4A" }}
                  data-id="fcb3c90f-0d5e-599e-b5f5-713e07efbd5a"
                >
                  About
                </a>
              </li>
              <li data-id="512fd29b-81db-5f07-aa2c-48d5db99a570">
                <a
                  aria-current="page"
                  className="font-medium text-sm leading-5 border-black/1 border-t-0 border-r-0 border-b-2 border-l-0 border-solid pb-1"
                  href="#"
                  style={{ borderColor: "#C4714F", color: "#C4714F" }}
                  data-id="c277742e-ca0f-53d5-bad6-47193334e249"
                >
                  Services
                </a>
              </li>
              <li data-id="c41713fe-bde0-5844-88c9-5d134df15217">
                <a
                  className="text-sm leading-5"
                  href="#"
                  style={{ color: "#4A4A4A" }}
                  data-id="9d49604d-89b1-5e71-a817-a5a2c86ac9fb"
                >
                  Branches
                </a>
              </li>
              <li data-id="2dee59c6-9ca2-56e8-81df-c1d433f0c86d">
                <a
                  className="text-sm leading-5"
                  href="#"
                  style={{ color: "#4A4A4A" }}
                  data-id="a6cc6fb8-b37c-59b8-b5d6-a8afe7776aa8"
                >
                  Menu
                </a>
              </li>
            </ul>
            <Button
              className="text-white"
              style={{ backgroundColor: "#C4714F" }}
              data-id="348605ca-9071-584d-ad9b-6bdf86448de8"
            >
              Reserve a Table
            </Button>
          </nav>
        </header>
        <section
          className="px-12 pt-12 pb-8"
          style={{ backgroundColor: "#FAF7F4" }}
          data-id="cb89376e-26f4-5a63-b937-7cbc0550e43d"
        >
          <div
            className="max-w-3xl"
            data-id="16423adf-5e01-5acb-8af9-028c8e2ae469"
          >
            <span
              className="uppercase text-xs leading-4 tracking-widest"
              style={{ color: "#C4714F" }}
              data-id="241fb6a8-9eea-57d6-af43-c0f393fe8a27"
            >
              Our Services
            </span>
            <h1
              className="font-normal text-5xl leading-12 tracking-tight mt-4"
              style={{ color: "#1A1A1A" }}
              data-id="1b64b5e5-c792-5cb2-951a-948ce912e99e"
            >
              Experiences Crafted for You
            </h1>
            <div
              className="my-6 w-24 h-px"
              style={{ backgroundColor: "#C4714F" }}
              data-id="426bef69-4e36-5383-b4be-9f4c863a5bb3"
            />
            <p
              className="leading-relaxed text-base leading-6"
              style={{ color: "#4A4A4A" }}
              data-id="5f93cab3-96ac-5493-b06c-65022bc4ec13"
            >
              From intimate dinners to grand celebrations — Gaia offers a full
              spectrum of dining experiences designed to delight every palate
              and occasion.
            </p>
          </div>
        </section>
        <section
          className="px-12 py-8"
          data-id="59d0a7ac-e8ae-5ce4-937a-3b3b4f509acc"
        >
          <div
            className="grid grid-cols-3 gap-6"
            data-id="811f3c26-b3cc-5505-8f2b-4dcad201a48f"
          >
            <Card
              className="border-black/1 border-1 border-solid p-6 gap-4"
              style={{ backgroundColor: "#FFFFFF", borderColor: "#E8E2DC" }}
              data-id="7468909d-70a6-5d30-8e03-537208b115a8"
            >
              <CardHeader
                className="p-0 gap-4"
                data-id="cb406fb5-ecb9-5103-a040-ffc0e5d84de3"
              >
                <div
                  className="size-12 rounded-lg flex justify-center items-center"
                  style={{ backgroundColor: "#C4714F" }}
                  data-id="8b44fc86-c5f2-56f2-888f-55946660095f"
                >
                  <UtensilsCrossed
                    className="size-6 text-white"
                    data-id="288f41e7-12a8-56ab-b602-93a6a0c49523"
                  />
                </div>
                <h3
                  className="font-medium text-xl leading-7"
                  style={{ color: "#1A1A1A" }}
                  data-id="ffe48741-9472-58c8-9362-aa4db16cc6fb"
                >
                  Fine Dining
                </h3>
              </CardHeader>
              <CardContent
                className="p-0 gap-2"
                data-id="163bac48-dd79-5da5-aa7a-4287c0aa9f2f"
              >
                <p
                  className="leading-relaxed text-sm leading-5"
                  style={{ color: "#4A4A4A" }}
                  data-id="63fdb7e8-1155-5397-a73c-ee743d2094ef"
                >
                  Multi-course tasting menus paired with curated wines in our
                  signature dining room.
                </p>
              </CardContent>
              <CardFooter
                className="p-0 gap-2"
                data-id="52192b36-4c76-5ae3-8e11-1dea267daea6"
              >
                <a
                  className="inline-flex font-medium text-sm leading-5 items-center gap-1"
                  href="#"
                  style={{ color: "#C4714F" }}
                  data-id="959448d5-a956-5fe5-8841-97dc0e08dfd7"
                >
                  Learn more
                  <ArrowRight
                    className="size-4"
                    data-id="bf6639de-1283-51b9-8585-24237d23a8e9"
                  />
                </a>
              </CardFooter>
            </Card>
            <Card
              className="border-black/1 border-1 border-solid p-6 gap-4"
              style={{ backgroundColor: "#FFFFFF", borderColor: "#E8E2DC" }}
              data-id="0892d001-055d-5cd8-9f27-fe27f1d836f4"
            >
              <CardHeader
                className="p-0 gap-4"
                data-id="8e1507ae-35e1-5dec-b6e6-62ff2cd03902"
              >
                <div
                  className="size-12 rounded-lg flex justify-center items-center"
                  style={{ backgroundColor: "#C4714F" }}
                  data-id="e21a5c04-f89e-5e61-a720-a2f3514b07cd"
                >
                  <PartyPopper
                    className="size-6 text-white"
                    data-id="e6e81440-6ee1-566a-bacb-c34c618832c3"
                  />
                </div>
                <h3
                  className="font-medium text-xl leading-7"
                  style={{ color: "#1A1A1A" }}
                  data-id="8d495c97-4f5c-5f48-be98-d8fb635c9b27"
                >
                  Private Events
                </h3>
              </CardHeader>
              <CardContent
                className="p-0 gap-2"
                data-id="174049e9-d9dc-5851-87a6-6394cc1fafd0"
              >
                <p
                  className="leading-relaxed text-sm leading-5"
                  style={{ color: "#4A4A4A" }}
                  data-id="ef1b64d4-bdde-5531-bd0f-7fdd3ba4fad2"
                >
                  Bespoke celebrations in elegant private rooms tailored for
                  weddings and milestones.
                </p>
              </CardContent>
              <CardFooter
                className="p-0 gap-2"
                data-id="cf085adc-6b61-5223-a888-cc392f95304b"
              >
                <a
                  className="inline-flex font-medium text-sm leading-5 items-center gap-1"
                  href="#"
                  style={{ color: "#C4714F" }}
                  data-id="d70f068a-0cc1-592f-acfa-dd85e98713b1"
                >
                  Learn more
                  <ArrowRight
                    className="size-4"
                    data-id="cb911002-e424-5048-9438-b72639a555f0"
                  />
                </a>
              </CardFooter>
            </Card>
            <Card
              className="border-black/1 border-1 border-solid p-6 gap-4"
              style={{ backgroundColor: "#FFFFFF", borderColor: "#E8E2DC" }}
              data-id="4e715a7a-5627-53de-96a7-61e7c9e551b0"
            >
              <CardHeader
                className="p-0 gap-4"
                data-id="ee2218be-bbd7-5fdb-a744-ed9cef49f955"
              >
                <div
                  className="size-12 rounded-lg flex justify-center items-center"
                  style={{ backgroundColor: "#C4714F" }}
                  data-id="cfb10b9b-58da-5b3c-b268-e4bc7846b6d6"
                >
                  <Truck
                    className="size-6 text-white"
                    data-id="cf5159a6-7651-56cb-bcc6-69393476b1fa"
                  />
                </div>
                <h3
                  className="font-medium text-xl leading-7"
                  style={{ color: "#1A1A1A" }}
                  data-id="af81dc7e-9ccf-52f2-906d-920878e854e5"
                >{`Catering & Delivery`}</h3>
              </CardHeader>
              <CardContent
                className="p-0 gap-2"
                data-id="54e11fa6-45f6-53b6-bacf-326efe16ddb8"
              >
                <p
                  className="leading-relaxed text-sm leading-5"
                  style={{ color: "#4A4A4A" }}
                  data-id="2d9f8b7b-9555-5f6b-b4b8-9bcfd044e8d9"
                >
                  Restaurant-quality menus delivered to your home or workplace
                  with seamless service.
                </p>
              </CardContent>
              <CardFooter
                className="p-0 gap-2"
                data-id="ac13f5a7-2e1a-5674-8ba0-839c9c22b6fe"
              >
                <a
                  className="inline-flex font-medium text-sm leading-5 items-center gap-1"
                  href="#"
                  style={{ color: "#C4714F" }}
                  data-id="a625c13a-048d-51c8-a965-c498c2c9dfce"
                >
                  Learn more
                  <ArrowRight
                    className="size-4"
                    data-id="0273af02-41c8-54e2-aa7d-e8d94381006f"
                  />
                </a>
              </CardFooter>
            </Card>
            <Card
              className="border-black/1 border-1 border-solid p-6 gap-4"
              style={{ backgroundColor: "#FFFFFF", borderColor: "#E8E2DC" }}
              data-id="4f38d79c-e0e7-5622-be5a-e3b64113a746"
            >
              <CardHeader
                className="p-0 gap-4"
                data-id="b04fc66e-f439-5f97-a8a5-48ab4e260072"
              >
                <div
                  className="size-12 rounded-lg flex justify-center items-center"
                  style={{ backgroundColor: "#C4714F" }}
                  data-id="becac244-b35f-5b31-956c-866801fde149"
                >
                  <ChefHat
                    className="size-6 text-white"
                    data-id="56625dfe-e62d-5665-b865-f0222000eff6"
                  />
                </div>
                <h3
                  className="font-medium text-xl leading-7"
                  style={{ color: "#1A1A1A" }}
                  data-id="503aeb56-a530-516e-96d4-1f39c577f5d8"
                >
                  Chef's Table Experience
                </h3>
              </CardHeader>
              <CardContent
                className="p-0 gap-2"
                data-id="20138d82-9385-54dd-bb00-99131f006552"
              >
                <p
                  className="leading-relaxed text-sm leading-5"
                  style={{ color: "#4A4A4A" }}
                  data-id="8e296250-a6ab-58f3-ad20-aaa060a37515"
                >
                  An intimate seat at the heart of our kitchen with a
                  personalised tasting journey.
                </p>
              </CardContent>
              <CardFooter
                className="p-0 gap-2"
                data-id="a35d9f4c-f54e-512f-a9fe-deaa41a17297"
              >
                <a
                  className="inline-flex font-medium text-sm leading-5 items-center gap-1"
                  href="#"
                  style={{ color: "#C4714F" }}
                  data-id="73a1a0e7-872f-5439-b8f4-31063273fd60"
                >
                  Learn more
                  <ArrowRight
                    className="size-4"
                    data-id="5e784dfe-0091-57c6-80fb-acc4c6a5eb7d"
                  />
                </a>
              </CardFooter>
            </Card>
            <Card
              className="border-black/1 border-1 border-solid p-6 gap-4"
              style={{ backgroundColor: "#FFFFFF", borderColor: "#E8E2DC" }}
              data-id="70493874-c8d1-5182-b98d-e2d0754085db"
            >
              <CardHeader
                className="p-0 gap-4"
                data-id="696ab0c0-243f-5c90-b39c-bdc861748c6c"
              >
                <div
                  className="size-12 rounded-lg flex justify-center items-center"
                  style={{ backgroundColor: "#C4714F" }}
                  data-id="896ca835-3422-5445-bc7e-9f6f80c98660"
                >
                  <Briefcase
                    className="size-6 text-white"
                    data-id="6196da42-82bd-5893-8fd6-dd316b7d4006"
                  />
                </div>
                <h3
                  className="font-medium text-xl leading-7"
                  style={{ color: "#1A1A1A" }}
                  data-id="6a49e26c-5f76-560a-bce2-1048999dd3b7"
                >
                  Corporate Lunches
                </h3>
              </CardHeader>
              <CardContent
                className="p-0 gap-2"
                data-id="62efaf22-2973-5104-b55e-06f445073afe"
              >
                <p
                  className="leading-relaxed text-sm leading-5"
                  style={{ color: "#4A4A4A" }}
                  data-id="871bd157-eaa1-5f2c-b98c-8cb4bc954600"
                >
                  Refined business lunches and meeting packages with reserved
                  seating and quick service.
                </p>
              </CardContent>
              <CardFooter
                className="p-0 gap-2"
                data-id="5f872d1b-f9c1-56bb-bf8b-19a9ff0472d0"
              >
                <a
                  className="inline-flex font-medium text-sm leading-5 items-center gap-1"
                  href="#"
                  style={{ color: "#C4714F" }}
                  data-id="764ee7e6-eeaf-50ef-bc44-fb1b65c5c5ad"
                >
                  Learn more
                  <ArrowRight
                    className="size-4"
                    data-id="81ee6dcf-c589-5067-8840-49ee98ecd69a"
                  />
                </a>
              </CardFooter>
            </Card>
            <Card
              className="border-black/1 border-1 border-solid p-6 gap-4"
              style={{ backgroundColor: "#FFFFFF", borderColor: "#E8E2DC" }}
              data-id="24485f27-91c9-568d-96ee-b13fc7508cb5"
            >
              <CardHeader
                className="p-0 gap-4"
                data-id="19907cf9-e502-5417-a9fe-4c7dc7ac05f3"
              >
                <div
                  className="size-12 rounded-lg flex justify-center items-center"
                  style={{ backgroundColor: "#C4714F" }}
                  data-id="f8e7bb78-a652-515f-bd49-52f9259eb9c3"
                >
                  <CookingPot
                    className="size-6 text-white"
                    data-id="6852c642-d72e-5cff-93f8-94c92fffd109"
                  />
                </div>
                <h3
                  className="font-medium text-xl leading-7"
                  style={{ color: "#1A1A1A" }}
                  data-id="13925fcd-f09c-5d96-9b9a-9b2d9317ab94"
                >
                  Cooking Masterclasses
                </h3>
              </CardHeader>
              <CardContent
                className="p-0 gap-2"
                data-id="4547fbbf-b317-583e-91fe-74dc32859a8c"
              >
                <p
                  className="leading-relaxed text-sm leading-5"
                  style={{ color: "#4A4A4A" }}
                  data-id="9cbea98b-ca9c-5f94-bf06-1b9166dcd435"
                >
                  Hands-on classes led by our head chefs covering technique,
                  plating and pairing.
                </p>
              </CardContent>
              <CardFooter
                className="p-0 gap-2"
                data-id="ac8629a3-3913-515a-a931-842eac10c698"
              >
                <a
                  className="inline-flex font-medium text-sm leading-5 items-center gap-1"
                  href="#"
                  style={{ color: "#C4714F" }}
                  data-id="1e39811c-7eea-5b7b-980f-c523e73407b2"
                >
                  Learn more
                  <ArrowRight
                    className="size-4"
                    data-id="9c36a5e4-2a86-5b42-b022-8a967778877e"
                  />
                </a>
              </CardFooter>
            </Card>
          </div>
        </section>
        <section
          className="p-12"
          style={{ backgroundColor: "#E8E2DC" }}
          data-id="0341651a-fd28-5712-a7a2-5cefcfc69d02"
        >
          <div
            className="grid grid-cols-3 gap-12"
            data-id="9266f26d-b70c-526b-8b95-d0e7f26208fa"
          >
            <div
              className="col-span-1"
              data-id="c23ceceb-32c7-524a-a565-52cca49b1a4e"
            >
              <span
                className="uppercase text-xs leading-4 tracking-widest"
                style={{ color: "#C4714F" }}
                data-id="f3858431-d3fa-5803-afc4-c341c24d97a8"
              >
                Support
              </span>
              <h2
                className="font-normal text-3xl leading-9 tracking-tight mt-2"
                style={{ color: "#1A1A1A" }}
                data-id="7650570c-6222-550c-b605-20d1891154a6"
              >
                Frequently Asked Questions
              </h2>
              <p
                className="leading-relaxed text-sm leading-5 mt-4"
                style={{ color: "#4A4A4A" }}
                data-id="cf32f969-9631-583b-a008-34faea09c567"
              >
                Everything you need to know before your visit.
              </p>
            </div>
            <div
              className="col-span-2"
              data-id="56d6dbeb-dfbe-5b33-a1fe-d7216eb087df"
            >
              <Accordion
                className="w-full"
                collapsible={true}
                type="single"
                data-id="f7be88ef-93f5-56d4-b38f-ccc9189a60e1"
              >
                <AccordionItem
                  className="border-black/1 border-t-0 border-r-0 border-b-1 border-l-0 border-solid"
                  style={{ borderColor: "#FAF7F4" }}
                  value="item-1"
                  data-id="19595d9e-61bd-5f73-91a6-6eb99020ac18"
                >
                  <AccordionTrigger
                    className="font-medium text-base leading-6 py-4"
                    style={{ color: "#1A1A1A" }}
                    data-id="2d810c63-9f25-5c31-bc5d-e9d343f137f4"
                  >
                    How do I make a reservation?
                  </AccordionTrigger>
                  <AccordionContent
                    className="leading-relaxed text-sm leading-5 pb-4"
                    style={{ color: "#4A4A4A" }}
                    data-id="e280e1bb-0c93-5930-b5e9-c9d042151ad5"
                  >
                    Reservations can be made online via our booking widget, by
                    phone, or through the Reserve a Table button.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem
                  className="border-black/1 border-t-0 border-r-0 border-b-1 border-l-0 border-solid"
                  style={{ borderColor: "#FAF7F4" }}
                  value="item-2"
                  data-id="18d91d27-2ac0-5b4d-b213-5b6319c86cbe"
                >
                  <AccordionTrigger
                    className="font-medium text-base leading-6 py-4"
                    style={{ color: "#1A1A1A" }}
                    data-id="da0810de-dc1d-563a-a343-829c871d4cf4"
                  >
                    Do you accommodate dietary requirements?
                  </AccordionTrigger>
                  <AccordionContent
                    className="leading-relaxed text-sm leading-5 pb-4"
                    style={{ color: "#4A4A4A" }}
                    data-id="709d3101-53e8-5d3c-96d4-a75742a95f76"
                  >
                    Yes — please let us know in advance and our chefs will craft
                    alternatives for vegan, gluten-free and allergy needs.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem
                  className="border-black/1 border-t-0 border-r-0 border-b-1 border-l-0 border-solid"
                  style={{ borderColor: "#FAF7F4" }}
                  value="item-3"
                  data-id="cc7ada48-e35e-5ff3-a35f-0101acccda19"
                >
                  <AccordionTrigger
                    className="font-medium text-base leading-6 py-4"
                    style={{ color: "#1A1A1A" }}
                    data-id="404512d9-1c7c-5649-b0fe-ede5a4f3a7e1"
                  >
                    How do I book a private event?
                  </AccordionTrigger>
                  <AccordionContent
                    className="leading-relaxed text-sm leading-5 pb-4"
                    style={{ color: "#4A4A4A" }}
                    data-id="964929e0-9610-5669-abd2-af8fd5f4d20f"
                  >
                    Private events can be enquired through our contact form. Our
                    events manager will respond within 24 hours.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem
                  className="border-black/1 border-t-0 border-r-0 border-b-1 border-l-0 border-solid"
                  style={{ borderColor: "#FAF7F4" }}
                  value="item-4"
                  data-id="413d09aa-4c20-54e0-b73a-744e7f627d8c"
                >
                  <AccordionTrigger
                    className="font-medium text-base leading-6 py-4"
                    style={{ color: "#1A1A1A" }}
                    data-id="8f16b9b1-0f21-5016-b839-d32bcaf81d52"
                  >
                    What is your delivery radius?
                  </AccordionTrigger>
                  <AccordionContent
                    className="leading-relaxed text-sm leading-5 pb-4"
                    style={{ color: "#4A4A4A" }}
                    data-id="c5e9a203-a19b-585e-a3d3-f3190f41c887"
                  >
                    We deliver within a 10 km radius of each branch. Catering
                    orders may extend further with prior arrangement.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem
                  className="border-black/1 border-t-0 border-r-0 border-b-1 border-l-0 border-solid"
                  style={{ borderColor: "#FAF7F4" }}
                  value="item-5"
                  data-id="fd55e96a-8436-5ab7-8185-98c10a7f49f4"
                >
                  <AccordionTrigger
                    className="font-medium text-base leading-6 py-4"
                    style={{ color: "#1A1A1A" }}
                    data-id="b55c3e9c-c928-5acc-a6ac-0b462c44f3c5"
                  >
                    Is there a dress code?
                  </AccordionTrigger>
                  <AccordionContent
                    className="leading-relaxed text-sm leading-5 pb-4"
                    style={{ color: "#4A4A4A" }}
                    data-id="ecbff035-edab-5c16-b52e-5218ca538ac6"
                  >
                    Smart casual is recommended for dinner service. The Chef's
                    Table requests business attire.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem
                  value="item-6"
                  data-id="48ca4f63-2a91-54a3-bdc2-36e31e15ac61"
                >
                  <AccordionTrigger
                    className="font-medium text-base leading-6 py-4"
                    style={{ color: "#1A1A1A" }}
                    data-id="c6bc2ce2-4f93-5254-b789-d231e06bff2c"
                  >
                    Do you offer gift vouchers?
                  </AccordionTrigger>
                  <AccordionContent
                    className="leading-relaxed text-sm leading-5 pb-4"
                    style={{ color: "#4A4A4A" }}
                    data-id="b7cfaa8b-a4b8-55ab-bf92-ad33a265a5b2"
                  >
                    Yes — digital and printed vouchers are available in any
                    denomination, redeemable across all branches.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>
        <section
          className="p-12"
          style={{ backgroundColor: "#FAF7F4" }}
          data-id="46dce0e9-2f4a-5cc1-a2be-f0da23e505d2"
        >
          <div
            className="rounded-2xl flex p-12 justify-between items-center gap-8"
            style={{ backgroundColor: "#FFFFFF", border: "1px solid #E8E2DC" }}
            data-id="53148afe-538e-5ae2-a396-30cce2464c7b"
          >
            <div
              className="max-w-xl"
              data-id="c202a376-fc8d-5b93-bd55-1d5b6d72cbff"
            >
              <h2
                className="font-normal text-3xl leading-9 tracking-tight"
                style={{ color: "#1A1A1A" }}
                data-id="5116a452-97c7-5c2f-a0d5-d619f8bb3b30"
              >
                Ready to Book?
              </h2>
              <p
                className="leading-relaxed text-sm leading-5 mt-2"
                style={{ color: "#4A4A4A" }}
                data-id="c2891693-1993-57f7-8103-8be56613b94f"
              >
                Tell us about your occasion and our team will craft an
                experience tailored to you.
              </p>
            </div>
            <Button
              className="text-white px-8"
              style={{ backgroundColor: "#C4714F" }}
              data-id="bb9ff63d-29d9-5758-a07a-363038f7ef41"
            >
              Get in Touch
              <ArrowRight
                className="size-4 ml-2"
                data-id="47801bf6-9f4f-55eb-be9f-93432d67c567"
              />
            </Button>
          </div>
        </section>
        <footer
          className="border-black/1 border-t-1 border-r-0 border-b-0 border-l-0 border-solid px-12 py-8"
          style={{ backgroundColor: "#FAF7F4", borderColor: "#E8E2DC" }}
          data-id="29919c83-2250-506d-b572-f1e9a873832f"
        >
          <div
            className="flex justify-between items-center"
            data-id="78bc51e4-375c-5d84-804b-aadae3141aec"
          >
            <p
              className="text-xs leading-4"
              style={{ color: "#4A4A4A" }}
              data-id="2b876a57-82da-56ea-bc5c-4388fb7b45a0"
            >
              © 2025 Gaia AI. All rights reserved.
            </p>
            <div
              className="flex items-center gap-6"
              data-id="45ada51f-df71-5381-aef8-2ade3bd76ade"
            >
              <a
                className="text-xs leading-4"
                href="#"
                style={{ color: "#4A4A4A" }}
                data-id="1f9e972b-f594-5bb6-b999-550b1c55748d"
              >
                Privacy
              </a>
              <a
                className="text-xs leading-4"
                href="#"
                style={{ color: "#4A4A4A" }}
                data-id="2a75d29e-d2cf-57f5-ae71-9af34138c725"
              >
                Terms
              </a>
              <a
                className="text-xs leading-4"
                href="#"
                style={{ color: "#4A4A4A" }}
                data-id="22ecb034-2e4c-54a3-b061-b40d03bf119a"
              >
                Contact
              </a>
            </div>
            <div
              className="flex items-center gap-4"
              data-id="03630808-2adb-5384-8fce-51d632bc9209"
            >
              <a
                aria-label="Facebook"
                href="#"
                data-id="85b201f6-bdbd-5d3b-9213-b2dbecab5b68"
              >
                <FallbackComponent
                  className="size-4"
                  style={{ color: "#2D6A4F" }}
                  data-id="780453dd-7f03-5915-bbb3-52d99b421e48"
                />
              </a>
              <a
                aria-label="TikTok"
                href="#"
                data-id="9ed7877a-6377-5f6e-bfaa-c7eca276026b"
              >
                <Music2
                  className="size-4"
                  style={{ color: "#2D6A4F" }}
                  data-id="808cbdee-c27a-5271-8c37-b23b124ae7cb"
                />
              </a>
              <a
                aria-label="WhatsApp"
                href="#"
                data-id="6ba7be19-d315-5dc3-b692-e41f0a5dc173"
              >
                <MessageCircle
                  className="size-4"
                  style={{ color: "#2D6A4F" }}
                  data-id="248d6e56-2e15-5375-b9c8-4205d738b7f5"
                />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

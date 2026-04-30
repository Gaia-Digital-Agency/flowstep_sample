import { usePageMeta } from "@/hooks/usePageMeta";
import {
  useCms,
  richTextToPlain,
  type PayloadList,
  type FaqDoc,
} from "@/hooks/useCms";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
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
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card";

export default function ServicesPage() {
  usePageMeta({
    title: "Services — Private dining, events, and bespoke menus",
    description: "Private rooms, events, and bespoke menus tailored for travellers and locals alike.",
    canonical: "https://flowstep.gaiada.online/services",
  });
  const { data: faqData, loading: faqLoading, error: faqError } = useCms<
    PayloadList<FaqDoc>
  >("/api/faqs?limit=50&sort=order");
  const faqs = faqData?.docs ?? [];
  return (
    <>
      <main>
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
                {faqLoading && (
                  <p className="text-sm text-[#1F1B17]/50 py-4">Loading FAQs…</p>
                )}
                {faqError && (
                  <p className="text-sm text-red-600 py-4">
                    Could not load FAQs. Please refresh.
                  </p>
                )}
                {!faqLoading && !faqError && faqs.length === 0 && (
                  <p className="text-sm text-[#1F1B17]/50 py-4">No FAQs yet.</p>
                )}
                {faqs.map((faq, idx) => (
                  <AccordionItem
                    key={faq.id}
                    className="border-black/1 border-t-0 border-r-0 border-b-1 border-l-0 border-solid"
                    style={{ borderColor: "#FAF7F4" }}
                    value={`faq-${faq.id}`}
                  >
                    <AccordionTrigger
                      className="font-medium text-base leading-6 py-4"
                      style={{ color: "#1A1A1A" }}
                    >
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent
                      className="leading-relaxed text-sm leading-5 pb-4"
                      style={{ color: "#4A4A4A" }}
                    >
                      {richTextToPlain(faq.answer).split("\n\n").map((para, i) => (
                        <p key={i} className={i > 0 ? "mt-2" : ""}>
                          {para}
                        </p>
                      ))}
                    </AccordionContent>
                  </AccordionItem>
                ))}
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
      </main>
    </>
  );
}
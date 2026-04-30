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
        >
          <div
            className="max-w-3xl"
          >
            <span
              className="uppercase text-xs leading-4 tracking-widest"
              style={{ color: "#C4714F" }}
            >
              Our Services
            </span>
            <h1
              className="font-normal text-5xl leading-12 tracking-tight mt-4"
              style={{ color: "#1A1A1A" }}
            >
              Experiences Crafted for You
            </h1>
            <div
              className="my-6 w-24 h-px"
              style={{ backgroundColor: "#C4714F" }}
            />
            <p
              className="leading-relaxed text-base leading-6"
              style={{ color: "#4A4A4A" }}
            >
              From intimate dinners to grand celebrations — Gaia offers a full
              spectrum of dining experiences designed to delight every palate
              and occasion.
            </p>
          </div>
        </section>
        <section
          className="px-12 py-8"
        >
          <div
            className="grid grid-cols-3 gap-6"
          >
            <Card
              className="border-black/1 border-1 border-solid p-6 gap-4"
              style={{ backgroundColor: "#FFFFFF", borderColor: "#E8E2DC" }}
            >
              <CardHeader
                className="p-0 gap-4"
              >
                <div
                  className="size-12 rounded-lg flex justify-center items-center"
                  style={{ backgroundColor: "#C4714F" }}
                >
                  <UtensilsCrossed
                    className="size-6 text-white"
                  />
                </div>
                <h3
                  className="font-medium text-xl leading-7"
                  style={{ color: "#1A1A1A" }}
                >
                  Fine Dining
                </h3>
              </CardHeader>
              <CardContent
                className="p-0 gap-2"
              >
                <p
                  className="leading-relaxed text-sm leading-5"
                  style={{ color: "#4A4A4A" }}
                >
                  Multi-course tasting menus paired with curated wines in our
                  signature dining room.
                </p>
              </CardContent>
              <CardFooter
                className="p-0 gap-2"
              >
                <a
                  className="inline-flex font-medium text-sm leading-5 items-center gap-1"
                  href="#"
                  style={{ color: "#C4714F" }}
                >
                  Learn more
                  <ArrowRight
                    className="size-4"
                  />
                </a>
              </CardFooter>
            </Card>
            <Card
              className="border-black/1 border-1 border-solid p-6 gap-4"
              style={{ backgroundColor: "#FFFFFF", borderColor: "#E8E2DC" }}
            >
              <CardHeader
                className="p-0 gap-4"
              >
                <div
                  className="size-12 rounded-lg flex justify-center items-center"
                  style={{ backgroundColor: "#C4714F" }}
                >
                  <PartyPopper
                    className="size-6 text-white"
                  />
                </div>
                <h3
                  className="font-medium text-xl leading-7"
                  style={{ color: "#1A1A1A" }}
                >
                  Private Events
                </h3>
              </CardHeader>
              <CardContent
                className="p-0 gap-2"
              >
                <p
                  className="leading-relaxed text-sm leading-5"
                  style={{ color: "#4A4A4A" }}
                >
                  Bespoke celebrations in elegant private rooms tailored for
                  weddings and milestones.
                </p>
              </CardContent>
              <CardFooter
                className="p-0 gap-2"
              >
                <a
                  className="inline-flex font-medium text-sm leading-5 items-center gap-1"
                  href="#"
                  style={{ color: "#C4714F" }}
                >
                  Learn more
                  <ArrowRight
                    className="size-4"
                  />
                </a>
              </CardFooter>
            </Card>
            <Card
              className="border-black/1 border-1 border-solid p-6 gap-4"
              style={{ backgroundColor: "#FFFFFF", borderColor: "#E8E2DC" }}
            >
              <CardHeader
                className="p-0 gap-4"
              >
                <div
                  className="size-12 rounded-lg flex justify-center items-center"
                  style={{ backgroundColor: "#C4714F" }}
                >
                  <Truck
                    className="size-6 text-white"
                  />
                </div>
                <h3
                  className="font-medium text-xl leading-7"
                  style={{ color: "#1A1A1A" }}
                >{`Catering & Delivery`}</h3>
              </CardHeader>
              <CardContent
                className="p-0 gap-2"
              >
                <p
                  className="leading-relaxed text-sm leading-5"
                  style={{ color: "#4A4A4A" }}
                >
                  Restaurant-quality menus delivered to your home or workplace
                  with seamless service.
                </p>
              </CardContent>
              <CardFooter
                className="p-0 gap-2"
              >
                <a
                  className="inline-flex font-medium text-sm leading-5 items-center gap-1"
                  href="#"
                  style={{ color: "#C4714F" }}
                >
                  Learn more
                  <ArrowRight
                    className="size-4"
                  />
                </a>
              </CardFooter>
            </Card>
            <Card
              className="border-black/1 border-1 border-solid p-6 gap-4"
              style={{ backgroundColor: "#FFFFFF", borderColor: "#E8E2DC" }}
            >
              <CardHeader
                className="p-0 gap-4"
              >
                <div
                  className="size-12 rounded-lg flex justify-center items-center"
                  style={{ backgroundColor: "#C4714F" }}
                >
                  <ChefHat
                    className="size-6 text-white"
                  />
                </div>
                <h3
                  className="font-medium text-xl leading-7"
                  style={{ color: "#1A1A1A" }}
                >
                  Chef's Table Experience
                </h3>
              </CardHeader>
              <CardContent
                className="p-0 gap-2"
              >
                <p
                  className="leading-relaxed text-sm leading-5"
                  style={{ color: "#4A4A4A" }}
                >
                  An intimate seat at the heart of our kitchen with a
                  personalised tasting journey.
                </p>
              </CardContent>
              <CardFooter
                className="p-0 gap-2"
              >
                <a
                  className="inline-flex font-medium text-sm leading-5 items-center gap-1"
                  href="#"
                  style={{ color: "#C4714F" }}
                >
                  Learn more
                  <ArrowRight
                    className="size-4"
                  />
                </a>
              </CardFooter>
            </Card>
            <Card
              className="border-black/1 border-1 border-solid p-6 gap-4"
              style={{ backgroundColor: "#FFFFFF", borderColor: "#E8E2DC" }}
            >
              <CardHeader
                className="p-0 gap-4"
              >
                <div
                  className="size-12 rounded-lg flex justify-center items-center"
                  style={{ backgroundColor: "#C4714F" }}
                >
                  <Briefcase
                    className="size-6 text-white"
                  />
                </div>
                <h3
                  className="font-medium text-xl leading-7"
                  style={{ color: "#1A1A1A" }}
                >
                  Corporate Lunches
                </h3>
              </CardHeader>
              <CardContent
                className="p-0 gap-2"
              >
                <p
                  className="leading-relaxed text-sm leading-5"
                  style={{ color: "#4A4A4A" }}
                >
                  Refined business lunches and meeting packages with reserved
                  seating and quick service.
                </p>
              </CardContent>
              <CardFooter
                className="p-0 gap-2"
              >
                <a
                  className="inline-flex font-medium text-sm leading-5 items-center gap-1"
                  href="#"
                  style={{ color: "#C4714F" }}
                >
                  Learn more
                  <ArrowRight
                    className="size-4"
                  />
                </a>
              </CardFooter>
            </Card>
            <Card
              className="border-black/1 border-1 border-solid p-6 gap-4"
              style={{ backgroundColor: "#FFFFFF", borderColor: "#E8E2DC" }}
            >
              <CardHeader
                className="p-0 gap-4"
              >
                <div
                  className="size-12 rounded-lg flex justify-center items-center"
                  style={{ backgroundColor: "#C4714F" }}
                >
                  <CookingPot
                    className="size-6 text-white"
                  />
                </div>
                <h3
                  className="font-medium text-xl leading-7"
                  style={{ color: "#1A1A1A" }}
                >
                  Cooking Masterclasses
                </h3>
              </CardHeader>
              <CardContent
                className="p-0 gap-2"
              >
                <p
                  className="leading-relaxed text-sm leading-5"
                  style={{ color: "#4A4A4A" }}
                >
                  Hands-on classes led by our head chefs covering technique,
                  plating and pairing.
                </p>
              </CardContent>
              <CardFooter
                className="p-0 gap-2"
              >
                <a
                  className="inline-flex font-medium text-sm leading-5 items-center gap-1"
                  href="#"
                  style={{ color: "#C4714F" }}
                >
                  Learn more
                  <ArrowRight
                    className="size-4"
                  />
                </a>
              </CardFooter>
            </Card>
          </div>
        </section>
        <section
          className="p-12"
          style={{ backgroundColor: "#E8E2DC" }}
        >
          <div
            className="grid grid-cols-3 gap-12"
          >
            <div
              className="col-span-1"
            >
              <span
                className="uppercase text-xs leading-4 tracking-widest"
                style={{ color: "#C4714F" }}
              >
                Support
              </span>
              <h2
                className="font-normal text-3xl leading-9 tracking-tight mt-2"
                style={{ color: "#1A1A1A" }}
              >
                Frequently Asked Questions
              </h2>
              <p
                className="leading-relaxed text-sm leading-5 mt-4"
                style={{ color: "#4A4A4A" }}
              >
                Everything you need to know before your visit.
              </p>
            </div>
            <div
              className="col-span-2"
            >
              <Accordion
                className="w-full"
                collapsible={true}
                type="single"
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
        >
          <div
            className="rounded-2xl flex p-12 justify-between items-center gap-8"
            style={{ backgroundColor: "#FFFFFF", border: "1px solid #E8E2DC" }}
          >
            <div
              className="max-w-xl"
            >
              <h2
                className="font-normal text-3xl leading-9 tracking-tight"
                style={{ color: "#1A1A1A" }}
              >
                Ready to Book?
              </h2>
              <p
                className="leading-relaxed text-sm leading-5 mt-2"
                style={{ color: "#4A4A4A" }}
              >
                Tell us about your occasion and our team will craft an
                experience tailored to you.
              </p>
            </div>
            <Button
              className="text-white px-8"
              style={{ backgroundColor: "#C4714F" }}
            >
              Get in Touch
              <ArrowRight
                className="size-4 ml-2"
              />
            </Button>
          </div>
        </section>
      </main>
    </>
  );
}
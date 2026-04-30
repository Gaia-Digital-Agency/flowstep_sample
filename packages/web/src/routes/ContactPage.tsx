import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { usePageMeta } from "@/hooks/usePageMeta";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Clock,
  Leaf,
  MapPin,
  MessageCircle,
  Music2,
  Phone,
  Send,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";

export default function ContactPage() {
  usePageMeta({
    title: "Contact — Reservations, enquiries, and visits",
    description: "Reserve a table, send an enquiry, or visit one of our three branches.",
    canonical: "https://flowstep.gaiada.online/contact",
  });

  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (submitting) return;

    const form = e.currentTarget;
    const fd = new FormData(form);

    // Honeypot — silently drop bots that fill it
    if (fd.get("website")) {
      toast.success("Message sent. We'll be in touch within 24 hours.");
      form.reset();
      return;
    }

    const payload = {
      name: String(fd.get("name") ?? "").trim(),
      email: String(fd.get("email") ?? "").trim(),
      phone: String(fd.get("phone") ?? "").trim() || undefined,
      message: String(fd.get("message") ?? "").trim(),
    };

    if (!payload.name || !payload.email || !payload.message) {
      toast.error("Please fill in your name, email, and message.");
      return;
    }

    try {
      setSubmitting(true);
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      toast.success("Message sent. We'll be in touch within 24 hours.");
      form.reset();
      window.dispatchEvent(new CustomEvent("flowstep:contact_submit"));
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong. Please try again or call us directly.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      <main>
        <main
          className="max-w-[1140px] mx-auto px-8 py-12 w-full"
          style={{ backgroundColor: "#FAF7F4" }}
        >
          <section
            aria-labelledby="contact-heading"
            className="flex flex-col gap-8"
          >
            <div
              className="flex flex-col gap-2"
            >
              <span
                className="font-medium uppercase text-xs leading-4 tracking-widest"
                style={{ color: "#2D6A4F" }}
              >
                Contact
              </span>
              <h1
                className="font-normal text-4xl leading-10 tracking-tight"
                id="contact-heading"
              >
                Get in Touch
              </h1>
              <p
                className="text-neutral-500 text-sm leading-5"
              >
                We'd love to hear from you. Reach out for reservations, events,
                or general inquiries.
              </p>
            </div>
            <div
              className="grid grid-cols-12 gap-8"
            >
              <form onSubmit={handleSubmit} className="col-span-7" noValidate>
                {/* honeypot */}
                <input
                  type="text"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  className="sr-only"
                  aria-hidden="true"
                />
              <Card
                className="border-neutral-200 border-0 border-solid p-6 gap-4"
              >
                <CardHeader
                  className="p-0 gap-1"
                >
                  <CardTitle
                    className="font-medium text-xl leading-7"
                  >
                    Send us a Message
                  </CardTitle>
                  <CardDescription
                    className="text-sm leading-5"
                  >
                    Fill out the form and we'll respond within 24 hours.
                  </CardDescription>
                </CardHeader>
                <CardContent
                  className="flex p-0 flex-col gap-4"
                >
                  <div
                    className="grid grid-cols-2 gap-4"
                  >
                    <div
                      className="flex flex-col gap-2"
                    >
                      <Label
                        className="text-sm leading-5"
                        htmlFor="name"
                      >
                        Full Name
                        <span
                          aria-hidden="true"
                          style={{ color: "#C4714F" }}
                        >
                          *
                        </span>
                      </Label>
                      <Input
                        aria-required="true"
                        id="name"
                        placeholder="Jane Doe"
                        required={true}
                        style={{ borderColor: "#E8E2DC" }}
                        type="text"
                      />
                    </div>
                    <div
                      className="flex flex-col gap-2"
                    >
                      <Label
                        className="text-sm leading-5"
                        htmlFor="email"
                      >
                        Email Address
                        <span
                          aria-hidden="true"
                          style={{ color: "#C4714F" }}
                        >
                          *
                        </span>
                      </Label>
                      <Input
                        aria-required="true"
                        id="email"
                        placeholder="jane@example.com"
                        required={true}
                        style={{ borderColor: "#E8E2DC" }}
                        type="email"
                      />
                    </div>
                  </div>
                  <div
                    className="flex flex-col gap-2"
                  >
                    <Label
                      className="text-sm leading-5"
                      htmlFor="phone"
                    >
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      placeholder="+1 (555) 000-0000"
                      style={{ borderColor: "#E8E2DC" }}
                      type="tel"
                    />
                  </div>
                  <div
                    className="flex flex-col gap-2"
                  >
                    <Label
                      className="text-sm leading-5"
                      htmlFor="message"
                    >
                      Message
                      <span
                        aria-hidden="true"
                        style={{ color: "#C4714F" }}
                      >
                        *
                      </span>
                    </Label>
                    <Textarea
                      aria-required="true"
                      id="message"
                      placeholder="Tell us how we can help..."
                      required={true}
                      rows={4}
                      style={{ borderColor: "#E8E2DC" }}
                    />
                  </div>
                </CardContent>
                <CardFooter
                  className="p-0 gap-2"
                >
                  <Button
                    className="text-white gap-2"
                    data-conversion="contact_form_submit"
                    style={{ backgroundColor: "#C4714F" }}
                    type="submit"
                    disabled={submitting}
                  >
                    <Send
                      className="size-4"
                    />
                    {submitting ? "Sending…" : "Send Message"}
                  </Button>
                  <Button
                    className="text-neutral-950"
                    variant="ghost"
                    type="reset"
                  >
                    Clear
                  </Button>
                </CardFooter>
              </Card>
              </form>
              <div
                className="col-span-5 flex flex-col gap-4"
              >
                <Card
                  className="border-neutral-200 border-0 border-solid p-6 gap-4"
                >
                  <CardContent
                    className="flex p-0 flex-col gap-4"
                  >
                    <div
                      className="flex items-start gap-4"
                    >
                      <div
                        className="size-8 shrink-0 rounded-lg flex justify-center items-center"
                        style={{ backgroundColor: "#E8E2DC" }}
                      >
                        <MapPin
                          className="size-4"
                          style={{ color: "#2D6A4F" }}
                        />
                      </div>
                      <div
                        className="flex flex-col gap-1"
                      >
                        <span
                          className="font-medium text-sm leading-5"
                        >
                          Address
                        </span>
                        <address
                          className="not-italic text-neutral-500 text-sm leading-5"
                        >
                          42 Olive Grove Lane
                          <br data-id="ea1b50be-2fe1-5a47-9ba1-e138144627cf" />
                          Lisbon, 1200-109, Portugal
                        </address>
                      </div>
                    </div>
                    <div
                      className="flex items-start gap-4"
                    >
                      <div
                        className="size-8 shrink-0 rounded-lg flex justify-center items-center"
                        style={{ backgroundColor: "#E8E2DC" }}
                      >
                        <Clock
                          className="size-4"
                          style={{ color: "#2D6A4F" }}
                        />
                      </div>
                      <div
                        className="flex flex-col gap-1"
                      >
                        <span
                          className="font-medium text-sm leading-5"
                        >
                          Opening Hours
                        </span>
                        <span
                          className="text-neutral-500 text-sm leading-5"
                        >
                          Mon–Fri: 12:00 – 23:00
                        </span>
                        <span
                          className="text-neutral-500 text-sm leading-5"
                        >
                          Sat–Sun: 11:00 – 00:00
                        </span>
                      </div>
                    </div>
                    <div
                      className="flex items-start gap-4"
                    >
                      <div
                        className="size-8 shrink-0 rounded-lg flex justify-center items-center"
                        style={{ backgroundColor: "#E8E2DC" }}
                      >
                        <Phone
                          className="size-4"
                          style={{ color: "#2D6A4F" }}
                        />
                      </div>
                      <div
                        className="flex flex-col gap-1"
                      >
                        <span
                          className="font-medium text-sm leading-5"
                        >
                          Phone
                        </span>
                        <a
                          aria-label="Call Gaia AI at +351 21 123 4567"
                          className="underline-offset-4 font-medium text-sm leading-5"
                          data-conversion="phone_click"
                          href="tel:+351211234567"
                          style={{ color: "#2D6A4F" }}
                        >
                          +351 21 123 4567
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <div
                  className="relative rounded-xl border-neutral-200 border-1 border-solid w-full h-40 overflow-hidden"
                >
                  <img
                    alt="Map showing Gaia main branch location"
                    className="object-cover w-full h-full"
                    src="https://screens-image-components-public.s3.eu-north-1.amazonaws.com/city-map-2d.png"
                  />
                  <div
                    className="left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex absolute flex-col items-center gap-1"
                  >
                    <div
                      className="size-8 shadow-lg rounded-full text-white flex justify-center items-center"
                      style={{ backgroundColor: "#C4714F" }}
                    >
                      <MapPin
                        className="size-4"
                      />
                    </div>
                    <span
                      className="font-medium rounded-sm bg-white text-xs leading-4 px-2 py-0.5"
                    >
                      Gaia Main
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section
            aria-labelledby="styleguide-heading"
            className="flex mt-12 flex-col gap-8"
          >
            <div
              className="flex flex-col gap-2"
            >
              <span
                className="font-medium uppercase text-xs leading-4 tracking-widest"
                style={{ color: "#2D6A4F" }}
              >
                Reference
              </span>
              <h2
                className="font-normal text-2xl leading-8 tracking-tight"
                id="styleguide-heading"
              >
                Style Guide
              </h2>
            </div>
            <Card
              className="border-neutral-200 border-0 border-solid p-6 gap-4"
            >
              <CardHeader
                className="p-0 gap-1"
              >
                <CardTitle
                  className="font-medium text-base leading-6"
                >
                  Color Palette
                </CardTitle>
                <CardDescription
                  className="text-xs leading-4"
                >
                  Tailwind tokens with hex values
                </CardDescription>
              </CardHeader>
              <CardContent
                className="grid grid-cols-7 p-0 gap-4"
              >
                <div
                  className="flex flex-col gap-2"
                >
                  <div
                    className="rounded-lg w-full h-16"
                    style={{ backgroundColor: "#C4714F" }}
                  />
                  <div
                    className="flex flex-col"
                  >
                    <span
                      className="font-medium text-xs leading-4"
                    >
                      Terracotta
                    </span>
                    <span
                      className="text-neutral-500 text-xs leading-4"
                    >
                      primary · #C4714F
                    </span>
                  </div>
                </div>
                <div
                  className="flex flex-col gap-2"
                >
                  <div
                    className="rounded-lg w-full h-16"
                    style={{ backgroundColor: "#2D6A4F" }}
                  />
                  <div
                    className="flex flex-col"
                  >
                    <span
                      className="font-medium text-xs leading-4"
                    >
                      Emerald
                    </span>
                    <span
                      className="text-neutral-500 text-xs leading-4"
                    >
                      accent · #2D6A4F
                    </span>
                  </div>
                </div>
                <div
                  className="flex flex-col gap-2"
                >
                  <div
                    className="rounded-lg border-neutral-200 border-1 border-solid w-full h-16"
                    style={{ backgroundColor: "#FAF7F4" }}
                  />
                  <div
                    className="flex flex-col"
                  >
                    <span
                      className="font-medium text-xs leading-4"
                    >
                      Warm White
                    </span>
                    <span
                      className="text-neutral-500 text-xs leading-4"
                    >
                      background · #FAF7F4
                    </span>
                  </div>
                </div>
                <div
                  className="flex flex-col gap-2"
                >
                  <div
                    className="rounded-lg w-full h-16"
                    style={{ backgroundColor: "#E8E2DC" }}
                  />
                  <div
                    className="flex flex-col"
                  >
                    <span
                      className="font-medium text-xs leading-4"
                    >
                      Soft Gray
                    </span>
                    <span
                      className="text-neutral-500 text-xs leading-4"
                    >
                      secondary · #E8E2DC
                    </span>
                  </div>
                </div>
                <div
                  className="flex flex-col gap-2"
                >
                  <div
                    className="rounded-lg w-full h-16"
                    style={{ backgroundColor: "#4CAF50" }}
                  />
                  <div
                    className="flex flex-col"
                  >
                    <span
                      className="font-medium text-xs leading-4"
                    >
                      Success
                    </span>
                    <span
                      className="text-neutral-500 text-xs leading-4"
                    >
                      success · #4CAF50
                    </span>
                  </div>
                </div>
                <div
                  className="flex flex-col gap-2"
                >
                  <div
                    className="rounded-lg w-full h-16"
                    style={{ backgroundColor: "#F59E0B" }}
                  />
                  <div
                    className="flex flex-col"
                  >
                    <span
                      className="font-medium text-xs leading-4"
                    >
                      Warning
                    </span>
                    <span
                      className="text-neutral-500 text-xs leading-4"
                    >
                      warning · #F59E0B
                    </span>
                  </div>
                </div>
                <div
                  className="flex flex-col gap-2"
                >
                  <div
                    className="rounded-lg w-full h-16"
                    style={{ backgroundColor: "#EF4444" }}
                  />
                  <div
                    className="flex flex-col"
                  >
                    <span
                      className="font-medium text-xs leading-4"
                    >
                      Error
                    </span>
                    <span
                      className="text-neutral-500 text-xs leading-4"
                    >
                      error · #EF4444
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
            <div
              className="grid grid-cols-12 gap-4"
            >
              <Card
                className="col-span-6 border-neutral-200 border-0 border-solid p-6 gap-4"
              >
                <CardHeader
                  className="p-0 gap-1"
                >
                  <CardTitle
                    className="font-medium text-base leading-6"
                  >
                    Typography · Space Grotesk
                  </CardTitle>
                </CardHeader>
                <CardContent
                  className="flex p-0 flex-col gap-2"
                >
                  <div
                    className="items-baseline border-neutral-200 border-t-0 border-r-0 border-b-1 border-l-0 border-solid flex pb-2 justify-between gap-4"
                  >
                    <span
                      className="font-normal text-3xl leading-9 tracking-tight"
                    >
                      Display
                    </span>
                    <span
                      className="text-neutral-500 text-xs leading-4"
                    >
                      48 / 56 · 400
                    </span>
                  </div>
                  <div
                    className="items-baseline border-neutral-200 border-t-0 border-r-0 border-b-1 border-l-0 border-solid flex pb-2 justify-between gap-4"
                  >
                    <span
                      className="font-normal text-2xl leading-8"
                    >
                      Heading 1
                    </span>
                    <span
                      className="text-neutral-500 text-xs leading-4"
                    >
                      36 / 44 · 400
                    </span>
                  </div>
                  <div
                    className="items-baseline border-neutral-200 border-t-0 border-r-0 border-b-1 border-l-0 border-solid flex pb-2 justify-between gap-4"
                  >
                    <span
                      className="font-medium text-xl leading-7"
                    >
                      Heading 2
                    </span>
                    <span
                      className="text-neutral-500 text-xs leading-4"
                    >
                      24 / 32 · 500
                    </span>
                  </div>
                  <div
                    className="items-baseline border-neutral-200 border-t-0 border-r-0 border-b-1 border-l-0 border-solid flex pb-2 justify-between gap-4"
                  >
                    <span
                      className="font-medium text-base leading-6"
                    >
                      Heading 3
                    </span>
                    <span
                      className="text-neutral-500 text-xs leading-4"
                    >
                      18 / 28 · 500
                    </span>
                  </div>
                  <div
                    className="items-baseline border-neutral-200 border-t-0 border-r-0 border-b-1 border-l-0 border-solid flex pb-2 justify-between gap-4"
                  >
                    <span
                      className="text-sm leading-5"
                    >
                      Body — Polished and aspirational copy.
                    </span>
                    <span
                      className="text-neutral-500 text-xs leading-4"
                    >
                      14 / 22 · 400
                    </span>
                  </div>
                  <div
                    className="items-baseline border-neutral-200 border-t-0 border-r-0 border-b-1 border-l-0 border-solid flex pb-2 justify-between gap-4"
                  >
                    <span
                      className="text-xs leading-4"
                    >
                      Small text supporting metadata
                    </span>
                    <span
                      className="text-neutral-500 text-xs leading-4"
                    >
                      12 / 18 · 400
                    </span>
                  </div>
                  <div
                    className="items-baseline flex justify-between gap-4"
                  >
                    <span
                      className="uppercase text-neutral-500 text-xs leading-4 tracking-widest"
                    >
                      Caption
                    </span>
                    <span
                      className="text-neutral-500 text-xs leading-4"
                    >
                      11 / 16 · 500
                    </span>
                  </div>
                </CardContent>
              </Card>
              <Card
                className="col-span-6 border-neutral-200 border-0 border-solid p-6 gap-4"
              >
                <CardHeader
                  className="p-0 gap-1"
                >
                  <CardTitle
                    className="font-medium text-base leading-6"
                  >
                    Button States
                  </CardTitle>
                  <CardDescription
                    className="text-xs leading-4"
                  >{`Primary & ghost variants`}</CardDescription>
                </CardHeader>
                <CardContent
                  className="flex p-0 flex-col gap-4"
                >
                  <div
                    className="flex flex-col gap-2"
                  >
                    <span
                      className="font-medium text-neutral-500 text-xs leading-4"
                    >
                      Primary
                    </span>
                    <div
                      className="flex flex-wrap items-center gap-2"
                    >
                      <Button
                        className="text-white"
                        style={{ backgroundColor: "#C4714F" }}
                      >
                        Default
                      </Button>
                      <Button
                        className="text-white"
                        style={{ backgroundColor: "#A85D3F" }}
                      >
                        Hover
                      </Button>
                      <Button
                        className="text-white"
                        style={{ backgroundColor: "#8B4A30" }}
                      >
                        Active
                      </Button>
                      <Button
                        className="opacity-50 text-white"
                        disabled={true}
                        style={{ backgroundColor: "#C4714F" }}
                      >
                        Disabled
                      </Button>
                      <Button
                        className="ring-2 ring-offset-2 text-white"
                        style={{
                          backgroundColor: "#C4714F",
                        }}
                      >
                        Focus
                      </Button>
                    </div>
                  </div>
                  <div
                    className="flex flex-col gap-2"
                  >
                    <span
                      className="font-medium text-neutral-500 text-xs leading-4"
                    >
                      Ghost
                    </span>
                    <div
                      className="flex flex-wrap items-center gap-2"
                    >
                      <Button
                        variant="ghost"
                      >
                        Default
                      </Button>
                      <Button
                        className="bg-neutral-100"
                        variant="ghost"
                      >
                        Hover
                      </Button>
                      <Button
                        className="bg-neutral-100"
                        variant="ghost"
                      >
                        Active
                      </Button>
                      <Button
                        className="opacity-50"
                        disabled={true}
                        variant="ghost"
                      >
                        Disabled
                      </Button>
                      <Button
                        className="ring-2 ring-offset-2"
                        variant="ghost"
                      >
                        Focus
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            <Card
              className="border-neutral-200 border-0 border-solid p-6 gap-4"
            >
              <CardHeader
                className="p-0 gap-1"
              >
                <CardTitle
                  className="font-medium text-base leading-6"
                >
                  Spacing · Radius · Shadow
                </CardTitle>
              </CardHeader>
              <CardContent
                className="grid grid-cols-3 p-0 gap-8"
              >
                <div
                  className="flex flex-col gap-2"
                >
                  <span
                    className="font-medium text-neutral-500 text-xs leading-4"
                  >
                    Spacing (4px base)
                  </span>
                  <div
                    className="flex items-end gap-2"
                  >
                    <div
                      className="flex flex-col items-center gap-1"
                    >
                      <div
                        className="w-1 h-1"
                        style={{ backgroundColor: "#C4714F" }}
                      />
                      <span
                        className="text-neutral-500 text-xs leading-4"
                      >
                        4
                      </span>
                    </div>
                    <div
                      className="flex flex-col items-center gap-1"
                    >
                      <div
                        className="w-2 h-2"
                        style={{ backgroundColor: "#C4714F" }}
                      />
                      <span
                        className="text-neutral-500 text-xs leading-4"
                      >
                        8
                      </span>
                    </div>
                    <div
                      className="flex flex-col items-center gap-1"
                    >
                      <div
                        className="w-4 h-4"
                        style={{ backgroundColor: "#C4714F" }}
                      />
                      <span
                        className="text-neutral-500 text-xs leading-4"
                      >
                        16
                      </span>
                    </div>
                    <div
                      className="flex flex-col items-center gap-1"
                    >
                      <div
                        className="w-6 h-6"
                        style={{ backgroundColor: "#C4714F" }}
                      />
                      <span
                        className="text-neutral-500 text-xs leading-4"
                      >
                        24
                      </span>
                    </div>
                    <div
                      className="flex flex-col items-center gap-1"
                    >
                      <div
                        className="w-8 h-8"
                        style={{ backgroundColor: "#C4714F" }}
                      />
                      <span
                        className="text-neutral-500 text-xs leading-4"
                      >
                        32
                      </span>
                    </div>
                    <div
                      className="flex flex-col items-center gap-1"
                    >
                      <div
                        className="w-12 h-12"
                        style={{ backgroundColor: "#C4714F" }}
                      />
                      <span
                        className="text-neutral-500 text-xs leading-4"
                      >
                        48
                      </span>
                    </div>
                  </div>
                </div>
                <div
                  className="flex flex-col gap-2"
                >
                  <span
                    className="font-medium text-neutral-500 text-xs leading-4"
                  >
                    Radius
                  </span>
                  <div
                    className="flex items-end gap-2"
                  >
                    <div
                      className="flex flex-col items-center gap-1"
                    >
                      <div
                        className="size-10 rounded-sm border-neutral-200 border-1 border-solid"
                        style={{ backgroundColor: "#E8E2DC" }}
                      />
                      <span
                        className="text-neutral-500 text-xs leading-4"
                      >
                        sm
                      </span>
                    </div>
                    <div
                      className="flex flex-col items-center gap-1"
                    >
                      <div
                        className="size-10 rounded-lg border-neutral-200 border-1 border-solid"
                        style={{ backgroundColor: "#E8E2DC" }}
                      />
                      <span
                        className="text-neutral-500 text-xs leading-4"
                      >
                        lg
                      </span>
                    </div>
                    <div
                      className="flex flex-col items-center gap-1"
                    >
                      <div
                        className="size-10 rounded-xl border-neutral-200 border-1 border-solid"
                        style={{ backgroundColor: "#E8E2DC" }}
                      />
                      <span
                        className="text-neutral-500 text-xs leading-4"
                      >
                        xl
                      </span>
                    </div>
                    <div
                      className="flex flex-col items-center gap-1"
                    >
                      <div
                        className="size-10 rounded-2xl border-neutral-200 border-1 border-solid"
                        style={{ backgroundColor: "#E8E2DC" }}
                      />
                      <span
                        className="text-neutral-500 text-xs leading-4"
                      >
                        2xl
                      </span>
                    </div>
                    <div
                      className="flex flex-col items-center gap-1"
                    >
                      <div
                        className="size-10 rounded-full border-neutral-200 border-1 border-solid"
                        style={{ backgroundColor: "#E8E2DC" }}
                      />
                      <span
                        className="text-neutral-500 text-xs leading-4"
                      >
                        full
                      </span>
                    </div>
                  </div>
                </div>
                <div
                  className="flex flex-col gap-2"
                >
                  <span
                    className="font-medium text-neutral-500 text-xs leading-4"
                  >
                    Shadow
                  </span>
                  <div
                    className="flex items-end gap-4"
                  >
                    <div
                      className="flex flex-col items-center gap-1"
                    >
                      <div
                        className="size-10 shadow-sm rounded-lg bg-white"
                      />
                      <span
                        className="text-neutral-500 text-xs leading-4"
                      >
                        sm
                      </span>
                    </div>
                    <div
                      className="flex flex-col items-center gap-1"
                    >
                      <div
                        className="size-10 shadow-md rounded-lg bg-white"
                      />
                      <span
                        className="text-neutral-500 text-xs leading-4"
                      >
                        md
                      </span>
                    </div>
                    <div
                      className="flex flex-col items-center gap-1"
                    >
                      <div
                        className="size-10 shadow-lg rounded-lg bg-white"
                      />
                      <span
                        className="text-neutral-500 text-xs leading-4"
                      >
                        lg
                      </span>
                    </div>
                    <div
                      className="flex flex-col items-center gap-1"
                    >
                      <div
                        className="size-10 shadow-xl rounded-lg bg-white"
                      />
                      <span
                        className="text-neutral-500 text-xs leading-4"
                      >
                        xl
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
        </main>
      </main>
    </>
  );
}

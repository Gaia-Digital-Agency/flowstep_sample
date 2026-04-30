import { Helmet } from "react-helmet-async";
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
  return (
    <>
      <Helmet>
        <title>Contact — Reservations, enquiries, and visits</title>
        <meta name="description" content="Reserve a table, send an enquiry, or visit one of our three branches." />
        <link rel="canonical" href="https://flowstep.gaiada.online/contact" />
      </Helmet>
      <main>
        <main
          className="max-w-[1140px] mx-auto px-8 py-12 w-full"
          style={{ backgroundColor: "#FAF7F4" }}
          data-id="ad879e2c-429c-5612-81f1-c8cf89d99f2e"
        >
          <section
            aria-labelledby="contact-heading"
            className="flex flex-col gap-8"
            data-id="44741dd9-7fa2-5f26-8db9-e2d8719f54c6"
          >
            <div
              className="flex flex-col gap-2"
              data-id="90298506-0b00-5ccf-a712-2af7beee393b"
            >
              <span
                className="font-medium uppercase text-xs leading-4 tracking-widest"
                style={{ color: "#2D6A4F" }}
                data-id="2990c02e-a49f-5783-a00a-c0851de3e5e3"
              >
                Contact
              </span>
              <h1
                className="font-normal text-4xl leading-10 tracking-tight"
                id="contact-heading"
                data-id="37c06ccb-b4f8-54a3-8ee4-bb90cd66def7"
              >
                Get in Touch
              </h1>
              <p
                className="text-neutral-500 text-sm leading-5"
                data-id="4bad9dae-0ebc-50b2-a79e-87e17881ac1a"
              >
                We'd love to hear from you. Reach out for reservations, events,
                or general inquiries.
              </p>
            </div>
            <div
              className="grid grid-cols-12 gap-8"
              data-id="a9d3a143-a0cb-5c84-b805-a73560758a17"
            >
              <Card
                className="col-span-7 border-neutral-200 border-0 border-solid p-6 gap-4"
                data-id="6e5f5045-c019-5fd8-8670-1988eb8f5931"
              >
                <CardHeader
                  className="p-0 gap-1"
                  data-id="12221673-b601-5d0d-9446-f3761914c2f0"
                >
                  <CardTitle
                    className="font-medium text-xl leading-7"
                    data-id="bd3f293f-0210-5074-b7a6-9abf92c05785"
                  >
                    Send us a Message
                  </CardTitle>
                  <CardDescription
                    className="text-sm leading-5"
                    data-id="832c64e0-db30-54ee-b08c-a8528a54cb09"
                  >
                    Fill out the form and we'll respond within 24 hours.
                  </CardDescription>
                </CardHeader>
                <CardContent
                  className="flex p-0 flex-col gap-4"
                  data-id="8bc0a035-87ec-5402-94b2-fbcf6a4774d8"
                >
                  <div
                    className="grid grid-cols-2 gap-4"
                    data-id="ac11c93d-24bb-54b6-8a73-ffbf39e94db2"
                  >
                    <div
                      className="flex flex-col gap-2"
                      data-id="fe0a6332-6c20-5e88-84d8-1b72e762134a"
                    >
                      <Label
                        className="text-sm leading-5"
                        htmlFor="name"
                        data-id="79350848-633e-5b4c-bf9c-374a21fbcf05"
                      >
                        Full Name
                        <span
                          aria-hidden="true"
                          style={{ color: "#C4714F" }}
                          data-id="6d19be11-59d8-5244-8f72-5ff6bf4a81ed"
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
                        data-id="ad9a0eee-bf7d-59e4-8e96-3d2caec09065"
                      />
                    </div>
                    <div
                      className="flex flex-col gap-2"
                      data-id="f279a1ff-cf25-568b-95de-721af26d5199"
                    >
                      <Label
                        className="text-sm leading-5"
                        htmlFor="email"
                        data-id="127c853e-6c83-5a51-83f3-e24e1d1fa185"
                      >
                        Email Address
                        <span
                          aria-hidden="true"
                          style={{ color: "#C4714F" }}
                          data-id="2eabf6e1-f449-5b92-af07-1fbda9984316"
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
                        data-id="33b57253-e755-5e34-b09b-fe4829258cdc"
                      />
                    </div>
                  </div>
                  <div
                    className="flex flex-col gap-2"
                    data-id="a42e269b-3e2d-5bc2-a9c2-69d854cb9d3a"
                  >
                    <Label
                      className="text-sm leading-5"
                      htmlFor="phone"
                      data-id="3cba6fc8-f8d4-5296-9ab8-bee9ad01f7e4"
                    >
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      placeholder="+1 (555) 000-0000"
                      style={{ borderColor: "#E8E2DC" }}
                      type="tel"
                      data-id="f87ced63-ffcf-5f57-803e-cf6bd8421fbe"
                    />
                  </div>
                  <div
                    className="flex flex-col gap-2"
                    data-id="bf66a213-b2fc-5116-bfed-bd493d7a6a96"
                  >
                    <Label
                      className="text-sm leading-5"
                      htmlFor="message"
                      data-id="0a890441-4358-52c7-bd1d-d13def75a107"
                    >
                      Message
                      <span
                        aria-hidden="true"
                        style={{ color: "#C4714F" }}
                        data-id="be9cb696-0d80-5fbf-9c03-d721687a4932"
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
                      data-id="d91451a6-fa41-51af-9390-cc47a2e49c16"
                    />
                  </div>
                </CardContent>
                <CardFooter
                  className="p-0 gap-2"
                  data-id="b1a17c67-d5cc-598d-9fb8-4e2f06cf2e89"
                >
                  <Button
                    className="text-white gap-2"
                    data-conversion="contact_form_submit"
                    style={{ backgroundColor: "#C4714F" }}
                    type="submit"
                    data-id="479fa4e0-6741-5e66-9c3c-d0daacd6eafd"
                  >
                    <Send
                      className="size-4"
                      data-id="37a42549-8c99-50e6-9390-fc44fb0fabdc"
                    />
                    Send Message
                  </Button>
                  <Button
                    className="text-neutral-950"
                    variant="ghost"
                    data-id="c5b4722a-0af8-5c63-9b6a-99a2b5c5df45"
                  >
                    Clear
                  </Button>
                </CardFooter>
              </Card>
              <div
                className="col-span-5 flex flex-col gap-4"
                data-id="f41da19f-e76b-5dca-b9af-b450ecc55853"
              >
                <Card
                  className="border-neutral-200 border-0 border-solid p-6 gap-4"
                  data-id="cd084240-9af6-5c8e-8cb1-fd012dc046e3"
                >
                  <CardContent
                    className="flex p-0 flex-col gap-4"
                    data-id="dcdc63d1-4245-57f3-8a2f-ed843ea19ee4"
                  >
                    <div
                      className="flex items-start gap-4"
                      data-id="3f163f8a-8fc9-5d73-a961-5205394ab4fb"
                    >
                      <div
                        className="size-8 shrink-0 rounded-lg flex justify-center items-center"
                        style={{ backgroundColor: "#E8E2DC" }}
                        data-id="378a4235-3a84-5c90-9543-94807aaa909d"
                      >
                        <MapPin
                          className="size-4"
                          style={{ color: "#2D6A4F" }}
                          data-id="9190ac02-ca45-5cfe-bb7f-30eeb898ba42"
                        />
                      </div>
                      <div
                        className="flex flex-col gap-1"
                        data-id="980eb2ac-d66e-5fdf-aa0f-3c1b0051dc50"
                      >
                        <span
                          className="font-medium text-sm leading-5"
                          data-id="f7251431-76f2-52c8-844c-8737431cdcfc"
                        >
                          Address
                        </span>
                        <address
                          className="not-italic text-neutral-500 text-sm leading-5"
                          data-id="3860acb7-a37e-5939-8734-1100e9e3ee60"
                        >
                          42 Olive Grove Lane
                          <br data-id="ea1b50be-2fe1-5a47-9ba1-e138144627cf" />
                          Lisbon, 1200-109, Portugal
                        </address>
                      </div>
                    </div>
                    <div
                      className="flex items-start gap-4"
                      data-id="d7fb0b4d-80bb-56d4-8a6a-ec1d20ddbfa1"
                    >
                      <div
                        className="size-8 shrink-0 rounded-lg flex justify-center items-center"
                        style={{ backgroundColor: "#E8E2DC" }}
                        data-id="7994cbcc-2198-5611-a7f7-a46fba9ac1d7"
                      >
                        <Clock
                          className="size-4"
                          style={{ color: "#2D6A4F" }}
                          data-id="34937abc-1e98-5faa-aa04-83592041b00a"
                        />
                      </div>
                      <div
                        className="flex flex-col gap-1"
                        data-id="5468a47d-9fc9-5b72-b50c-1b6f9017251d"
                      >
                        <span
                          className="font-medium text-sm leading-5"
                          data-id="100d2716-4a72-588d-9025-190dac5624bd"
                        >
                          Opening Hours
                        </span>
                        <span
                          className="text-neutral-500 text-sm leading-5"
                          data-id="09b9730c-9278-541e-a867-026b2a7ac86c"
                        >
                          Mon–Fri: 12:00 – 23:00
                        </span>
                        <span
                          className="text-neutral-500 text-sm leading-5"
                          data-id="2525224e-c12d-5024-8988-12461452600b"
                        >
                          Sat–Sun: 11:00 – 00:00
                        </span>
                      </div>
                    </div>
                    <div
                      className="flex items-start gap-4"
                      data-id="9a8ebd98-7be2-5dfe-9ff3-bd89d7acc975"
                    >
                      <div
                        className="size-8 shrink-0 rounded-lg flex justify-center items-center"
                        style={{ backgroundColor: "#E8E2DC" }}
                        data-id="42d1a012-0c52-5eb8-a498-7992225e189e"
                      >
                        <Phone
                          className="size-4"
                          style={{ color: "#2D6A4F" }}
                          data-id="0b47af04-f2d9-5702-ad82-0d1ada863a5f"
                        />
                      </div>
                      <div
                        className="flex flex-col gap-1"
                        data-id="265ef4a4-e251-59a5-9f61-7c9531488748"
                      >
                        <span
                          className="font-medium text-sm leading-5"
                          data-id="5cd87f3f-b485-5eb7-8bf1-f2c1f89c2aa2"
                        >
                          Phone
                        </span>
                        <a
                          aria-label="Call Gaia AI at +351 21 123 4567"
                          className="underline-offset-4 font-medium text-sm leading-5"
                          data-conversion="phone_click"
                          href="tel:+351211234567"
                          style={{ color: "#2D6A4F" }}
                          data-id="f663d474-326c-5c2d-bd03-6de089ed0452"
                        >
                          +351 21 123 4567
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <div
                  className="relative rounded-xl border-neutral-200 border-1 border-solid w-full h-40 overflow-hidden"
                  data-id="60f2fdda-675c-5da4-99b9-aec40adf881d"
                >
                  <img
                    alt="Map showing Gaia main branch location"
                    className="object-cover w-full h-full"
                    src="https://screens-image-components-public.s3.eu-north-1.amazonaws.com/city-map-2d.png"
                    data-id="5143037b-2d7f-50e2-a906-8787a1287e4b"
                  />
                  <div
                    className="left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex absolute flex-col items-center gap-1"
                    data-id="46a7a910-cee9-5f52-9d57-2550c980abd6"
                  >
                    <div
                      className="size-8 shadow-lg rounded-full text-white flex justify-center items-center"
                      style={{ backgroundColor: "#C4714F" }}
                      data-id="07cec827-4cd6-5030-9809-b13d06b3556c"
                    >
                      <MapPin
                        className="size-4"
                        data-id="d7fb5995-05e1-5e30-b348-b742d5e4ae32"
                      />
                    </div>
                    <span
                      className="font-medium rounded-sm bg-white text-xs leading-4 px-2 py-0.5"
                      data-id="fd1c28e6-ea71-5859-a99f-88e54e85a014"
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
            data-id="ce2b40d3-a047-52cb-9a5d-3dc5d4e7e159"
          >
            <div
              className="flex flex-col gap-2"
              data-id="69ddecda-c568-552d-a0f5-39ebaceb730b"
            >
              <span
                className="font-medium uppercase text-xs leading-4 tracking-widest"
                style={{ color: "#2D6A4F" }}
                data-id="c279d4f9-2141-54b9-bddc-8b9d0cce8b4e"
              >
                Reference
              </span>
              <h2
                className="font-normal text-2xl leading-8 tracking-tight"
                id="styleguide-heading"
                data-id="249f3e72-20d0-5850-b127-3ec555d57384"
              >
                Style Guide
              </h2>
            </div>
            <Card
              className="border-neutral-200 border-0 border-solid p-6 gap-4"
              data-id="cdb078b7-7483-5332-817a-583cc05a26dd"
            >
              <CardHeader
                className="p-0 gap-1"
                data-id="285a8c4a-b565-52b8-b785-2a33ee6ddb3f"
              >
                <CardTitle
                  className="font-medium text-base leading-6"
                  data-id="8685b55e-cc1b-56b6-be87-4d310b9592d5"
                >
                  Color Palette
                </CardTitle>
                <CardDescription
                  className="text-xs leading-4"
                  data-id="ec544229-acca-5561-88f9-6172c07d1867"
                >
                  Tailwind tokens with hex values
                </CardDescription>
              </CardHeader>
              <CardContent
                className="grid grid-cols-7 p-0 gap-4"
                data-id="b3c68db5-a041-53ce-8e91-fd75cc6dc58a"
              >
                <div
                  className="flex flex-col gap-2"
                  data-id="52bf0059-73b0-5bc9-b9f0-9c45413251aa"
                >
                  <div
                    className="rounded-lg w-full h-16"
                    style={{ backgroundColor: "#C4714F" }}
                    data-id="eed1d73b-fc05-5496-8155-c89ab97be9b7"
                  />
                  <div
                    className="flex flex-col"
                    data-id="b8e86a76-fc4b-5fd0-81f6-fb7cf6b9ebd4"
                  >
                    <span
                      className="font-medium text-xs leading-4"
                      data-id="dfdb482b-84e8-5b39-b797-41bce7f4d4ab"
                    >
                      Terracotta
                    </span>
                    <span
                      className="text-neutral-500 text-xs leading-4"
                      data-id="570911a1-73ee-5ec9-b285-1d1add78eb94"
                    >
                      primary · #C4714F
                    </span>
                  </div>
                </div>
                <div
                  className="flex flex-col gap-2"
                  data-id="dba235df-0268-5195-9a76-aad48fef39f6"
                >
                  <div
                    className="rounded-lg w-full h-16"
                    style={{ backgroundColor: "#2D6A4F" }}
                    data-id="8c179b4e-d2cd-58a0-897b-06d1ee59057d"
                  />
                  <div
                    className="flex flex-col"
                    data-id="6fc405c5-1894-5867-a82e-21be46e25c94"
                  >
                    <span
                      className="font-medium text-xs leading-4"
                      data-id="c6e27f26-74ae-5c75-b4e1-de274ed34069"
                    >
                      Emerald
                    </span>
                    <span
                      className="text-neutral-500 text-xs leading-4"
                      data-id="bcc9998a-5361-5498-8bfc-0c005a314489"
                    >
                      accent · #2D6A4F
                    </span>
                  </div>
                </div>
                <div
                  className="flex flex-col gap-2"
                  data-id="89925e20-da29-581d-8490-771bd48338e8"
                >
                  <div
                    className="rounded-lg border-neutral-200 border-1 border-solid w-full h-16"
                    style={{ backgroundColor: "#FAF7F4" }}
                    data-id="851277de-5c07-504d-baf6-757dcd2620c4"
                  />
                  <div
                    className="flex flex-col"
                    data-id="0efc147f-bf67-5916-bb46-8534ba4cfa1a"
                  >
                    <span
                      className="font-medium text-xs leading-4"
                      data-id="fead61e0-86ee-5d57-ac70-3270b6517ef2"
                    >
                      Warm White
                    </span>
                    <span
                      className="text-neutral-500 text-xs leading-4"
                      data-id="4e1444b5-9c3c-5ba3-8f96-b3be81fd1981"
                    >
                      background · #FAF7F4
                    </span>
                  </div>
                </div>
                <div
                  className="flex flex-col gap-2"
                  data-id="6ee8ba61-d2d3-54fc-a13a-822c424b4d8c"
                >
                  <div
                    className="rounded-lg w-full h-16"
                    style={{ backgroundColor: "#E8E2DC" }}
                    data-id="cbe94631-607a-579e-9f00-1597eb19b413"
                  />
                  <div
                    className="flex flex-col"
                    data-id="5e5ae27f-ce01-59a5-8cba-1c1edb0d0c42"
                  >
                    <span
                      className="font-medium text-xs leading-4"
                      data-id="cd2738d9-f573-5187-aa87-5ab123a34fb0"
                    >
                      Soft Gray
                    </span>
                    <span
                      className="text-neutral-500 text-xs leading-4"
                      data-id="fb2e18b8-8a8d-5d90-bcde-e7c3d5de9e93"
                    >
                      secondary · #E8E2DC
                    </span>
                  </div>
                </div>
                <div
                  className="flex flex-col gap-2"
                  data-id="a20ecad0-71bf-5762-b7be-9b49c3a656ec"
                >
                  <div
                    className="rounded-lg w-full h-16"
                    style={{ backgroundColor: "#4CAF50" }}
                    data-id="d8158f82-4751-5436-9383-1e39f166f5b3"
                  />
                  <div
                    className="flex flex-col"
                    data-id="7cbc00b0-7ad0-5612-88a1-c3a95b54a617"
                  >
                    <span
                      className="font-medium text-xs leading-4"
                      data-id="2713f295-9530-5c2e-8f63-ad22ae5db15b"
                    >
                      Success
                    </span>
                    <span
                      className="text-neutral-500 text-xs leading-4"
                      data-id="87e4bd57-b411-5c82-8eb9-d58827305192"
                    >
                      success · #4CAF50
                    </span>
                  </div>
                </div>
                <div
                  className="flex flex-col gap-2"
                  data-id="4627520b-ba2c-5b43-a625-7f527b43e6a2"
                >
                  <div
                    className="rounded-lg w-full h-16"
                    style={{ backgroundColor: "#F59E0B" }}
                    data-id="98fa4a97-4e79-5b17-ac0d-c2984da0e8d2"
                  />
                  <div
                    className="flex flex-col"
                    data-id="cf4f405e-06d2-5f46-92f4-9104a0319213"
                  >
                    <span
                      className="font-medium text-xs leading-4"
                      data-id="f651e0a4-59ad-5fa6-9265-aa63aa203515"
                    >
                      Warning
                    </span>
                    <span
                      className="text-neutral-500 text-xs leading-4"
                      data-id="a8a0e29d-3dc3-5921-9e8e-64b92099aa50"
                    >
                      warning · #F59E0B
                    </span>
                  </div>
                </div>
                <div
                  className="flex flex-col gap-2"
                  data-id="34109c6f-9756-523d-91df-13c43c354510"
                >
                  <div
                    className="rounded-lg w-full h-16"
                    style={{ backgroundColor: "#EF4444" }}
                    data-id="d34ab990-2ff5-5afd-9e24-6f899b701154"
                  />
                  <div
                    className="flex flex-col"
                    data-id="64db7a37-375b-5f20-9784-4e203d69ab97"
                  >
                    <span
                      className="font-medium text-xs leading-4"
                      data-id="4f96ae94-16e6-581c-a445-663c6ca1a9c8"
                    >
                      Error
                    </span>
                    <span
                      className="text-neutral-500 text-xs leading-4"
                      data-id="d81dc7b7-60c1-5c06-bac4-dde63a9c9371"
                    >
                      error · #EF4444
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
            <div
              className="grid grid-cols-12 gap-4"
              data-id="46776d87-fe2c-51a0-a799-adb3d555447a"
            >
              <Card
                className="col-span-6 border-neutral-200 border-0 border-solid p-6 gap-4"
                data-id="b049c606-cea3-5746-aa6b-206616ad5e42"
              >
                <CardHeader
                  className="p-0 gap-1"
                  data-id="4c0c0355-8edf-555e-ab31-763df310cbff"
                >
                  <CardTitle
                    className="font-medium text-base leading-6"
                    data-id="962eb963-385c-559c-a2cd-66d72a08c56d"
                  >
                    Typography · Space Grotesk
                  </CardTitle>
                </CardHeader>
                <CardContent
                  className="flex p-0 flex-col gap-2"
                  data-id="c997716c-ba9e-581e-8121-2dad40c13ef7"
                >
                  <div
                    className="items-baseline border-neutral-200 border-t-0 border-r-0 border-b-1 border-l-0 border-solid flex pb-2 justify-between gap-4"
                    data-id="fbc3cd47-b015-597f-baa7-7f65daab6f25"
                  >
                    <span
                      className="font-normal text-3xl leading-9 tracking-tight"
                      data-id="d521dcca-2299-5526-8a84-af453fe6ee71"
                    >
                      Display
                    </span>
                    <span
                      className="text-neutral-500 text-xs leading-4"
                      data-id="58c17783-4d94-5588-878c-c1b5ae35dc34"
                    >
                      48 / 56 · 400
                    </span>
                  </div>
                  <div
                    className="items-baseline border-neutral-200 border-t-0 border-r-0 border-b-1 border-l-0 border-solid flex pb-2 justify-between gap-4"
                    data-id="746db571-50b6-5ea6-9810-1514196e3c79"
                  >
                    <span
                      className="font-normal text-2xl leading-8"
                      data-id="935a7d15-9e9c-5b62-9a26-46aa31874748"
                    >
                      Heading 1
                    </span>
                    <span
                      className="text-neutral-500 text-xs leading-4"
                      data-id="d12891ee-0a4c-5ac8-9a40-4529e018b702"
                    >
                      36 / 44 · 400
                    </span>
                  </div>
                  <div
                    className="items-baseline border-neutral-200 border-t-0 border-r-0 border-b-1 border-l-0 border-solid flex pb-2 justify-between gap-4"
                    data-id="7a632b84-a0e9-52ed-a7cc-e03859a2e31e"
                  >
                    <span
                      className="font-medium text-xl leading-7"
                      data-id="a9250a11-d770-568d-a489-cecbf5eb55ae"
                    >
                      Heading 2
                    </span>
                    <span
                      className="text-neutral-500 text-xs leading-4"
                      data-id="5756e89e-60d1-5777-9740-ca0c2aa4dc9c"
                    >
                      24 / 32 · 500
                    </span>
                  </div>
                  <div
                    className="items-baseline border-neutral-200 border-t-0 border-r-0 border-b-1 border-l-0 border-solid flex pb-2 justify-between gap-4"
                    data-id="eacb7bf9-b74d-5201-b5d8-b898ff1a0d58"
                  >
                    <span
                      className="font-medium text-base leading-6"
                      data-id="605967b3-9787-5626-aba5-2c626bd2d815"
                    >
                      Heading 3
                    </span>
                    <span
                      className="text-neutral-500 text-xs leading-4"
                      data-id="56c4fd79-4e80-569f-b928-9734aeb2a408"
                    >
                      18 / 28 · 500
                    </span>
                  </div>
                  <div
                    className="items-baseline border-neutral-200 border-t-0 border-r-0 border-b-1 border-l-0 border-solid flex pb-2 justify-between gap-4"
                    data-id="5c36b753-1c2f-5df3-a207-1d3bdc47bec8"
                  >
                    <span
                      className="text-sm leading-5"
                      data-id="7dc5b53a-a234-5167-81d7-726de7706517"
                    >
                      Body — Polished and aspirational copy.
                    </span>
                    <span
                      className="text-neutral-500 text-xs leading-4"
                      data-id="e46a4a98-cdee-5681-983d-e9990164b7bd"
                    >
                      14 / 22 · 400
                    </span>
                  </div>
                  <div
                    className="items-baseline border-neutral-200 border-t-0 border-r-0 border-b-1 border-l-0 border-solid flex pb-2 justify-between gap-4"
                    data-id="38db643d-d811-5657-bf49-b17b32eb7edc"
                  >
                    <span
                      className="text-xs leading-4"
                      data-id="2e592635-930d-5023-9c5e-a541de00ce83"
                    >
                      Small text supporting metadata
                    </span>
                    <span
                      className="text-neutral-500 text-xs leading-4"
                      data-id="c8455afd-9ef0-5c79-974a-27e342ccfec8"
                    >
                      12 / 18 · 400
                    </span>
                  </div>
                  <div
                    className="items-baseline flex justify-between gap-4"
                    data-id="43c2c43e-9c6c-5070-bbb8-90c40f836e51"
                  >
                    <span
                      className="uppercase text-neutral-500 text-xs leading-4 tracking-widest"
                      data-id="2924a543-b79a-57f8-b954-e25c1355af04"
                    >
                      Caption
                    </span>
                    <span
                      className="text-neutral-500 text-xs leading-4"
                      data-id="f2da5517-8d04-56b5-a317-d7ac5a781a20"
                    >
                      11 / 16 · 500
                    </span>
                  </div>
                </CardContent>
              </Card>
              <Card
                className="col-span-6 border-neutral-200 border-0 border-solid p-6 gap-4"
                data-id="f9a3edbf-f2f4-531f-b3ed-f995143dcaf5"
              >
                <CardHeader
                  className="p-0 gap-1"
                  data-id="3d0aa1c2-3ea0-5f6c-a94e-946b417891c8"
                >
                  <CardTitle
                    className="font-medium text-base leading-6"
                    data-id="bd847598-43b1-5266-9637-ebeaf03c321e"
                  >
                    Button States
                  </CardTitle>
                  <CardDescription
                    className="text-xs leading-4"
                    data-id="9866e8de-044a-5d62-a980-08471a00eb14"
                  >{`Primary & ghost variants`}</CardDescription>
                </CardHeader>
                <CardContent
                  className="flex p-0 flex-col gap-4"
                  data-id="68c9cb5a-7204-5362-8647-01e53f5d1561"
                >
                  <div
                    className="flex flex-col gap-2"
                    data-id="0935b459-7b01-5502-8d9d-2f197ba133e3"
                  >
                    <span
                      className="font-medium text-neutral-500 text-xs leading-4"
                      data-id="a0ac9764-ffd1-527e-93a9-e1ec0426a9fe"
                    >
                      Primary
                    </span>
                    <div
                      className="flex flex-wrap items-center gap-2"
                      data-id="fba359a0-dfdc-5c8e-85c3-caf4cf39bdd3"
                    >
                      <Button
                        className="text-white"
                        style={{ backgroundColor: "#C4714F" }}
                        data-id="0a68e991-3756-5160-9dec-06189d582c8a"
                      >
                        Default
                      </Button>
                      <Button
                        className="text-white"
                        style={{ backgroundColor: "#A85D3F" }}
                        data-id="7948a851-9733-57aa-80e6-63050dcd461c"
                      >
                        Hover
                      </Button>
                      <Button
                        className="text-white"
                        style={{ backgroundColor: "#8B4A30" }}
                        data-id="b76f2b4c-9f09-536f-8d65-19eda7d339db"
                      >
                        Active
                      </Button>
                      <Button
                        className="opacity-50 text-white"
                        disabled={true}
                        style={{ backgroundColor: "#C4714F" }}
                        data-id="c2964f29-163c-5e77-a9ca-e4d0d0b679a9"
                      >
                        Disabled
                      </Button>
                      <Button
                        className="ring-2 ring-offset-2 text-white"
                        style={{
                          "[object Object]": "#2D6A4F",
                          backgroundColor: "#C4714F",
                        }}
                        data-id="e1caa4c1-5b53-57f8-b0fb-bbaf965e39cb"
                      >
                        Focus
                      </Button>
                    </div>
                  </div>
                  <div
                    className="flex flex-col gap-2"
                    data-id="a808b263-3925-5e88-b980-c6c1d67c3e22"
                  >
                    <span
                      className="font-medium text-neutral-500 text-xs leading-4"
                      data-id="79ab6bcd-6be4-530f-b6a6-080413e553c1"
                    >
                      Ghost
                    </span>
                    <div
                      className="flex flex-wrap items-center gap-2"
                      data-id="7cbbab21-9960-5f33-a926-aa8982d2cc57"
                    >
                      <Button
                        variant="ghost"
                        data-id="23144553-ea87-5743-abd6-f87be4f744d5"
                      >
                        Default
                      </Button>
                      <Button
                        className="bg-neutral-100"
                        variant="ghost"
                        data-id="6d7f9978-f657-5ad0-89c4-502ee13ddcdb"
                      >
                        Hover
                      </Button>
                      <Button
                        className="bg-neutral-100"
                        variant="ghost"
                        data-id="c4eb44e6-2577-5dc9-babd-1792ca83a64f"
                      >
                        Active
                      </Button>
                      <Button
                        className="opacity-50"
                        disabled={true}
                        variant="ghost"
                        data-id="fdc09a34-eea0-58a3-b687-caa34beaa526"
                      >
                        Disabled
                      </Button>
                      <Button
                        className="ring-2 ring-offset-2"
                        style={{ "[object Object]": "#2D6A4F" }}
                        variant="ghost"
                        data-id="98de4919-53a7-537e-95d2-a1ccbdf3217f"
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
              data-id="a647983c-4dcc-59ec-b344-b79d393cdb40"
            >
              <CardHeader
                className="p-0 gap-1"
                data-id="ef9a1dc7-a6de-592e-bf21-e594d8427950"
              >
                <CardTitle
                  className="font-medium text-base leading-6"
                  data-id="b73600c6-30a5-5290-8181-4c7217ff42aa"
                >
                  Spacing · Radius · Shadow
                </CardTitle>
              </CardHeader>
              <CardContent
                className="grid grid-cols-3 p-0 gap-8"
                data-id="f93b7b64-14e9-5160-8f50-9e9af724315d"
              >
                <div
                  className="flex flex-col gap-2"
                  data-id="cce72e32-4060-5cf8-934d-7d7a9441667a"
                >
                  <span
                    className="font-medium text-neutral-500 text-xs leading-4"
                    data-id="6636f82e-2297-5eac-9be8-58dd66e20b12"
                  >
                    Spacing (4px base)
                  </span>
                  <div
                    className="flex items-end gap-2"
                    data-id="6fbf1268-04ee-5112-b22c-f767c73df41f"
                  >
                    <div
                      className="flex flex-col items-center gap-1"
                      data-id="6f41ca18-7140-51be-a56a-e6a68e18e139"
                    >
                      <div
                        className="w-1 h-1"
                        style={{ backgroundColor: "#C4714F" }}
                        data-id="96099353-400e-50d3-a234-2e6bc4f79799"
                      />
                      <span
                        className="text-neutral-500 text-xs leading-4"
                        data-id="273c9bb9-c979-54fc-a1d5-2fd6c1232d41"
                      >
                        4
                      </span>
                    </div>
                    <div
                      className="flex flex-col items-center gap-1"
                      data-id="3f4e6859-b2df-57b5-8464-828b4ca63d3c"
                    >
                      <div
                        className="w-2 h-2"
                        style={{ backgroundColor: "#C4714F" }}
                        data-id="9a69ff81-15ce-5b13-a024-482f337baff7"
                      />
                      <span
                        className="text-neutral-500 text-xs leading-4"
                        data-id="acf9acc5-40d9-5549-a5dd-3d1e43613fbd"
                      >
                        8
                      </span>
                    </div>
                    <div
                      className="flex flex-col items-center gap-1"
                      data-id="f6816f6e-0bdd-5f59-bfe9-73c712ecd664"
                    >
                      <div
                        className="w-4 h-4"
                        style={{ backgroundColor: "#C4714F" }}
                        data-id="b205f35c-173b-51fc-9aac-a70c26db6d47"
                      />
                      <span
                        className="text-neutral-500 text-xs leading-4"
                        data-id="3fdbb2af-f876-5b4a-b63c-8cc43aeea68c"
                      >
                        16
                      </span>
                    </div>
                    <div
                      className="flex flex-col items-center gap-1"
                      data-id="50491c53-09e0-5964-b598-186aac109bd5"
                    >
                      <div
                        className="w-6 h-6"
                        style={{ backgroundColor: "#C4714F" }}
                        data-id="653acf03-b761-5f29-bff2-9f61ec995f6c"
                      />
                      <span
                        className="text-neutral-500 text-xs leading-4"
                        data-id="21b6f6ea-9768-5b74-b3fe-025aa650b875"
                      >
                        24
                      </span>
                    </div>
                    <div
                      className="flex flex-col items-center gap-1"
                      data-id="55b99fdb-705c-52ed-8d1f-457a4bec8629"
                    >
                      <div
                        className="w-8 h-8"
                        style={{ backgroundColor: "#C4714F" }}
                        data-id="fe88a423-08b9-562f-bd54-3c94158c1976"
                      />
                      <span
                        className="text-neutral-500 text-xs leading-4"
                        data-id="3c5f636a-7123-5fda-b09e-29a6bd31e71e"
                      >
                        32
                      </span>
                    </div>
                    <div
                      className="flex flex-col items-center gap-1"
                      data-id="11764b5e-3592-58ab-9b48-ecc442b5fbdb"
                    >
                      <div
                        className="w-12 h-12"
                        style={{ backgroundColor: "#C4714F" }}
                        data-id="4e6f4e0a-3a5f-55ac-99e0-b0a953c0809d"
                      />
                      <span
                        className="text-neutral-500 text-xs leading-4"
                        data-id="139781c5-335a-5c08-9b66-3d4577fdb15a"
                      >
                        48
                      </span>
                    </div>
                  </div>
                </div>
                <div
                  className="flex flex-col gap-2"
                  data-id="6911964e-8fd0-5146-b55e-c9d3e5d3c728"
                >
                  <span
                    className="font-medium text-neutral-500 text-xs leading-4"
                    data-id="f1b615dc-7e74-57d3-a3bc-8143fa779926"
                  >
                    Radius
                  </span>
                  <div
                    className="flex items-end gap-2"
                    data-id="f1a62a96-eddb-503e-a3a1-a1fcea2dc093"
                  >
                    <div
                      className="flex flex-col items-center gap-1"
                      data-id="3ad1f437-6e01-5c86-95cd-84bfca3a55f9"
                    >
                      <div
                        className="size-10 rounded-sm border-neutral-200 border-1 border-solid"
                        style={{ backgroundColor: "#E8E2DC" }}
                        data-id="5cf05277-d575-537a-8fa4-df8ab6a38362"
                      />
                      <span
                        className="text-neutral-500 text-xs leading-4"
                        data-id="187122bc-53ae-5439-bdbc-d892662356dd"
                      >
                        sm
                      </span>
                    </div>
                    <div
                      className="flex flex-col items-center gap-1"
                      data-id="34a39910-a6f8-5515-95cd-de9b1ed467ce"
                    >
                      <div
                        className="size-10 rounded-lg border-neutral-200 border-1 border-solid"
                        style={{ backgroundColor: "#E8E2DC" }}
                        data-id="505a3f2e-48e0-5b5c-9ad4-cf3a94f19068"
                      />
                      <span
                        className="text-neutral-500 text-xs leading-4"
                        data-id="382bcab9-f727-5f5a-99d9-a6389ec010de"
                      >
                        lg
                      </span>
                    </div>
                    <div
                      className="flex flex-col items-center gap-1"
                      data-id="394f49f5-af3a-5772-8670-6b341b18cb69"
                    >
                      <div
                        className="size-10 rounded-xl border-neutral-200 border-1 border-solid"
                        style={{ backgroundColor: "#E8E2DC" }}
                        data-id="76d9cd75-b6eb-5b6e-8dd9-c15caf1a9a53"
                      />
                      <span
                        className="text-neutral-500 text-xs leading-4"
                        data-id="2c556802-e80e-5168-9968-0cb992c5d2bb"
                      >
                        xl
                      </span>
                    </div>
                    <div
                      className="flex flex-col items-center gap-1"
                      data-id="58daf294-b700-52ce-9fb7-1cbd7f9a6e80"
                    >
                      <div
                        className="size-10 rounded-2xl border-neutral-200 border-1 border-solid"
                        style={{ backgroundColor: "#E8E2DC" }}
                        data-id="d22a7bef-8476-54f1-ba4b-fc31cdb6a44a"
                      />
                      <span
                        className="text-neutral-500 text-xs leading-4"
                        data-id="76be6d93-f814-5f23-b2c1-77955c352d1e"
                      >
                        2xl
                      </span>
                    </div>
                    <div
                      className="flex flex-col items-center gap-1"
                      data-id="e1749e70-d73a-547c-91c4-d47487d6bfc2"
                    >
                      <div
                        className="size-10 rounded-full border-neutral-200 border-1 border-solid"
                        style={{ backgroundColor: "#E8E2DC" }}
                        data-id="586a8d0e-f395-5324-bf6e-ea3e2ec391ad"
                      />
                      <span
                        className="text-neutral-500 text-xs leading-4"
                        data-id="4dfa4fff-e13e-57da-8967-962e1b815a37"
                      >
                        full
                      </span>
                    </div>
                  </div>
                </div>
                <div
                  className="flex flex-col gap-2"
                  data-id="5c5553ae-58ce-5e12-9c4b-6842ffff6a34"
                >
                  <span
                    className="font-medium text-neutral-500 text-xs leading-4"
                    data-id="8c30663f-60ae-5dac-afe4-312876ea1b16"
                  >
                    Shadow
                  </span>
                  <div
                    className="flex items-end gap-4"
                    data-id="d7c7e914-84a3-5474-90fc-2fde0b5e7463"
                  >
                    <div
                      className="flex flex-col items-center gap-1"
                      data-id="f6f23620-bf66-583b-b2aa-e9d337bcaa0b"
                    >
                      <div
                        className="size-10 shadow-sm rounded-lg bg-white"
                        data-id="455936fe-5d77-5c9a-a36f-6680c0ac9595"
                      />
                      <span
                        className="text-neutral-500 text-xs leading-4"
                        data-id="422c09bc-6400-55eb-8dd2-2a24678ef9dc"
                      >
                        sm
                      </span>
                    </div>
                    <div
                      className="flex flex-col items-center gap-1"
                      data-id="debc8d4b-8717-5e4a-b436-01eadea139d6"
                    >
                      <div
                        className="size-10 shadow-md rounded-lg bg-white"
                        data-id="6c7723b7-4ff2-5574-bd5f-e56131ed4acc"
                      />
                      <span
                        className="text-neutral-500 text-xs leading-4"
                        data-id="909e3a3a-4e4f-53ac-8ac0-771911d2553a"
                      >
                        md
                      </span>
                    </div>
                    <div
                      className="flex flex-col items-center gap-1"
                      data-id="95a83b7c-4094-554a-ba59-f3b6cca1ae29"
                    >
                      <div
                        className="size-10 shadow-lg rounded-lg bg-white"
                        data-id="e9ebf55a-eaaa-57fe-b2be-04a143bd8f8f"
                      />
                      <span
                        className="text-neutral-500 text-xs leading-4"
                        data-id="839515aa-3aa1-5977-927e-73f532b8a010"
                      >
                        lg
                      </span>
                    </div>
                    <div
                      className="flex flex-col items-center gap-1"
                      data-id="ebf97a97-e2ab-5b24-b0a4-aa298080c1b0"
                    >
                      <div
                        className="size-10 shadow-xl rounded-lg bg-white"
                        data-id="87e9f537-5f9b-5bca-b3fb-32ddebce1a07"
                      />
                      <span
                        className="text-neutral-500 text-xs leading-4"
                        data-id="779f1329-0de2-56d6-a66c-63f8c1e9c326"
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

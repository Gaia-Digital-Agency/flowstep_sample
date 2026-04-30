import { useEffect } from "react";
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
        data-id="8e6a3e0d-c94e-5eb2-8b17-40fd5f1ec392"
      >
        <header
          className="sticky z-50 border-black/1 border-t-0 border-r-0 border-b-1 border-l-0 border-solid top-0 w-full"
          style={{ backgroundColor: "#FAF7F4", borderColor: "#E8E2DC" }}
          data-id="3e3c967f-ab5a-5287-9240-3ab629a30a76"
        >
          <div
            className="max-w-[1140px] flex mx-auto px-8 justify-between items-center h-16"
            data-id="38c196ef-7bce-5221-81f3-119a00af4844"
          >
            <div
              className="flex items-center gap-2"
              data-id="3edd599d-d6bc-54b7-ad7d-13cd00854331"
            >
              <div
                className="size-8 rounded-full flex justify-center items-center"
                style={{ backgroundColor: "#C4714F" }}
                data-id="d7327b7c-3a40-5929-9f84-5d21bc3b58b8"
              >
                <Leaf
                  className="size-4 text-white"
                  data-id="538cb5cf-6905-5f2b-89ae-e3a19d7996f9"
                />
              </div>
              <span
                className="text-lg leading-7 tracking-tight"
                style={{ color: "#1F1B17" }}
                data-id="d192dea4-ae5f-595d-815b-63ca3f4803f3"
              >
                Gaia AI
              </span>
            </div>
            <nav
              aria-label="Main"
              className="flex justify-start items-center gap-8"
              data-id="3d2a37aa-68b7-57f5-85f9-a8a82dd0eea3"
            >
              <a
                className="text-sm leading-5 border-black/1 border-t-0 border-r-0 border-b-2 border-l-0 border-solid pb-1"
                href="#"
                style={{ borderColor: "#C4714F", color: "#C4714F" }}
                data-id="b2bb725c-5d3f-5f69-b02e-86b0fd89b7dd"
              >
                Home
              </a>
              <a
                className="text-sm leading-5"
                href="#"
                style={{ color: "#1F1B17" }}
                data-id="28031ded-f052-5e5b-8154-7eb72aaae694"
              >
                About
              </a>
              <a
                className="text-sm leading-5"
                href="#"
                style={{ color: "#1F1B17" }}
                data-id="bccb6ef3-22fa-5874-b0b8-e220fce28106"
              >
                Services
              </a>
              <a
                className="text-sm leading-5"
                href="#"
                style={{ color: "#1F1B17" }}
                data-id="02b269f8-3a37-5c5b-8195-565dff835e64"
              >
                Branches
              </a>
              <a
                className="text-sm leading-5"
                href="#"
                style={{ color: "#1F1B17" }}
                data-id="a4b16039-a8c6-5483-8513-7515652848f2"
              >
                Menu
              </a>
            </nav>
            <Button
              className="rounded-md text-white"
              style={{ backgroundColor: "#C4714F" }}
              data-id="309e3bde-aad3-547e-89cc-247e499978eb"
            >
              Reserve a Table
            </Button>
          </div>
        </header>
        <section
          className="max-w-[1140px] mx-auto px-8 py-12"
          data-id="f5d304ff-ea88-594c-a89b-81346756e94d"
        >
          <div
            className="grid grid-cols-12 items-center gap-8"
            data-id="6df2e46f-755d-5294-9982-22f0d2e9d53c"
          >
            <div
              className="col-span-5 flex flex-col gap-6"
              data-id="52129cd2-8c74-5c61-a611-5b53f30dd622"
            >
              <span
                className="uppercase text-[13px] tracking-widest"
                style={{ color: "#2D6A4F" }}
                data-id="ccec8513-a06f-5da5-bf73-eabb41b87bb0"
              >
                Luxury Dining · Est. 2013
              </span>
              <h1
                className="font-normal text-5xl leading-[53px] tracking-tight"
                style={{ color: "#1F1B17" }}
                data-id="05c6e44a-ad5b-5e30-9898-ac7aac3f8b69"
              >
                Where Every Meal Becomes a Memory
              </h1>
              <p
                className="text-base leading-[26px]"
                style={{ color: "#5C544C" }}
                data-id="9bd07fd5-78c7-5d6d-9af8-3e4ab06800ad"
              >
                Authentic flavors, curated experiences, and warm hospitality —
                crafted for the discerning traveler.
              </p>
              <div
                className="flex pt-2 items-center gap-4"
                data-id="96984852-8fa4-58c5-a912-95605f3671b2"
              >
                <Button
                  className="rounded-md text-white px-6 h-11"
                  style={{ backgroundColor: "#C4714F" }}
                  data-id="3cc8f59b-9086-58f6-91b9-a88caeef1eb5"
                >
                  Explore Our Menu
                  <ArrowRight
                    className="size-4 ml-1"
                    data-id="79eb3cf4-3d41-55ef-bfe3-4fc235f60c4e"
                  />
                </Button>
                <Button
                  className="rounded-md border-black/1 border-1 border-solid px-6 h-11"
                  style={{ borderColor: "#2D6A4F", color: "#2D6A4F" }}
                  variant="ghost"
                  data-id="a4a7761b-2813-5431-ba36-180cbcb00dfc"
                >
                  Our Story
                </Button>
              </div>
              <div
                className="flex pt-4 items-center gap-6"
                data-id="a89ff217-2066-5a93-b75a-41f57bca84fd"
              >
                <div
                  className="flex items-center gap-2"
                  data-id="734c9bba-3006-5ca7-b78a-04fd2d63db39"
                >
                  <Star
                    className="size-4 fill-current"
                    style={{ color: "#C4714F" }}
                    data-id="088f9784-75d1-51e3-829d-7d99339f11f6"
                  />
                  <span
                    className="text-[13px]"
                    style={{ color: "#5C544C" }}
                    data-id="05d5d2d4-c3ae-5c07-9e46-8d625a00fd79"
                  >
                    4.9 Guest Rating
                  </span>
                </div>
                <div
                  className="w-px h-4"
                  style={{ backgroundColor: "#E8E2DC" }}
                  data-id="8375721a-94e9-5870-9b26-6f9e89f24fa4"
                />
                <div
                  className="flex items-center gap-2"
                  data-id="ade4e007-6242-5b30-b6a7-e330b470b3ef"
                >
                  <Award
                    className="size-4 fill-current"
                    style={{ color: "#2D6A4F" }}
                    data-id="bec7c5d3-93b9-5bdf-94e7-f67caa2c9db0"
                  />
                  <span
                    className="text-[13px]"
                    style={{ color: "#5C544C" }}
                    data-id="55deeea6-0903-585f-8f99-d75d11ead1d7"
                  >
                    Michelin Recommended
                  </span>
                </div>
              </div>
            </div>
            <div
              className="col-span-7"
              data-id="c8de0373-d8de-5593-a1a6-4581caad1105"
            >
              <div
                className="relative rounded-2xl overflow-hidden"
                style={{ height: "420px" }}
                data-id="7b9f6c3f-6d74-5318-8ed3-6624e6c9694a"
              >
                <img
                  alt="Elegant Gaia restaurant interior with warm ambient lighting"
                  className="object-cover w-full h-full"
                  data-authorname="Hakim Menikh"
                  data-authorurl="https://unsplash.com/@grafiklink"
                  data-blurhash="LoJ#$9$i10V[-U$iniWB$MjZR,oe"
                  data-photoid="PGbiUKbJpoM"
                  src="https://images.unsplash.com/photo-1768697358705-c1b60333da35?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3ODc2NDd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwcmVzdGF1cmFudCUyMGludGVyaW9yJTIwd2FybSUyMGxpZ2h0aW5nJTIwbHV4dXJ5fGVufDF8MHx8fDE3Nzc1NTc2NjF8MA&ixlib=rb-4.1.0&q=80&w=1400"
                  data-id="430dabf9-4e25-5b16-937b-fa0e521d8684"
                />
                <div
                  className="rounded-lg flex absolute left-4 bottom-4 px-4 py-2 items-center gap-2"
                  style={{ backgroundColor: "rgba(250,247,244,0.85)" }}
                  data-id="146811af-c7e3-5b8a-b5fd-a8f7ff46807c"
                >
                  <MapPin
                    className="size-4 fill-current"
                    style={{ color: "#C4714F" }}
                    data-id="54e8f75e-ecb6-5186-8732-5a54b48cf4c7"
                  />
                  <span
                    className="text-[13px]"
                    style={{ color: "#1F1B17" }}
                    data-id="e7b4063c-e90f-5cc1-b8b8-929f702a62a3"
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
          data-id="7a08f741-9fca-5d10-abdb-c8a945e9c22e"
        >
          <div
            className="grid grid-cols-3 gap-6"
            data-id="5e53ab99-4d66-51f9-8e77-c62670b20214"
          >
            <Card
              className="rounded-xl border-black/1 border-1 border-solid p-6 gap-4"
              style={{ backgroundColor: "#FFFFFF", borderColor: "#E8E2DC" }}
              data-id="7ef603d4-f5c3-58ed-8e7b-78b311928983"
            >
              <CardHeader
                className="flex p-0 flex-row items-center gap-2"
                data-id="d56f9e74-dddc-53b3-9d99-a8a3bdd44c72"
              >
                <div
                  className="size-12 rounded-full flex justify-center items-center"
                  style={{ backgroundColor: "#F5E6DD" }}
                  data-id="f435ac26-00ce-58eb-8661-f5d4930cb1b8"
                >
                  <Sparkles
                    className="size-5 fill-current"
                    style={{ color: "#C4714F" }}
                    data-id="7166b8f6-604a-5b4a-8623-f6b6fdfdf8b8"
                  />
                </div>
              </CardHeader>
              <CardContent
                className="p-0 gap-1"
                data-id="a9cd60ba-ce29-5470-affb-2f542b09c797"
              >
                <div
                  className="leading-none text-4xl"
                  style={{ color: "#1F1B17" }}
                  data-id="161293d1-c550-5c4f-b2a1-b1dca9b8470a"
                >
                  12+
                </div>
                <div
                  className="text-base leading-6"
                  style={{ color: "#5C544C" }}
                  data-id="ba03482d-6647-59f2-9cc1-e64e7e9633f3"
                >
                  Years of Excellence
                </div>
              </CardContent>
            </Card>
            <Card
              className="rounded-xl border-black/1 border-1 border-solid p-6 gap-4"
              style={{ backgroundColor: "#FFFFFF", borderColor: "#E8E2DC" }}
              data-id="ef597401-349f-5e18-b800-5713607044eb"
            >
              <CardHeader
                className="flex p-0 flex-row items-center gap-2"
                data-id="f0558993-a506-5335-a8bc-b33c9bd6ba05"
              >
                <div
                  className="size-12 rounded-full flex justify-center items-center"
                  style={{ backgroundColor: "#F5E6DD" }}
                  data-id="7946f0f1-4920-51c7-a256-b793e35edb10"
                >
                  <Building2
                    className="size-5 fill-current"
                    style={{ color: "#C4714F" }}
                    data-id="72d2863a-a35a-5072-beec-e5daa7b3c687"
                  />
                </div>
              </CardHeader>
              <CardContent
                className="p-0 gap-1"
                data-id="c70a7c22-2c1f-5689-a1b6-04989900f806"
              >
                <div
                  className="leading-none text-4xl"
                  style={{ color: "#1F1B17" }}
                  data-id="516de171-1e17-58d7-b315-8e345a234a1c"
                >
                  3
                </div>
                <div
                  className="text-base leading-6"
                  style={{ color: "#5C544C" }}
                  data-id="d597af90-27bb-577e-a42c-1aa0c12e5e8b"
                >
                  Signature Branches
                </div>
              </CardContent>
            </Card>
            <Card
              className="rounded-xl border-black/1 border-1 border-solid p-6 gap-4"
              style={{ backgroundColor: "#FFFFFF", borderColor: "#E8E2DC" }}
              data-id="27d24ff6-4df3-5c8e-afa3-33f5e4211218"
            >
              <CardHeader
                className="flex p-0 flex-row items-center gap-2"
                data-id="050955d4-c4b5-5e34-bb9c-41b4b7bd3459"
              >
                <div
                  className="size-12 rounded-full flex justify-center items-center"
                  style={{ backgroundColor: "#F5E6DD" }}
                  data-id="8fa07292-2242-51b5-95b9-5d8d9447b556"
                >
                  <Heart
                    className="size-5 fill-current"
                    style={{ color: "#C4714F" }}
                    data-id="ebaf13a3-4ec6-5c31-9437-b680219e2dba"
                  />
                </div>
              </CardHeader>
              <CardContent
                className="p-0 gap-1"
                data-id="eda754f0-4abb-5666-8a42-0b04e813e5e7"
              >
                <div
                  className="leading-none text-4xl"
                  style={{ color: "#1F1B17" }}
                  data-id="956bab84-5b1b-5d00-9785-96ae141f6ec2"
                >
                  10,000+
                </div>
                <div
                  className="text-base leading-6"
                  style={{ color: "#5C544C" }}
                  data-id="c0a32c69-d824-5959-9f33-20904d01e15d"
                >
                  Happy Guests
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
        <section
          className="max-w-[1140px] mx-auto p-8"
          data-id="4351b012-e27a-5afa-834d-75dcca6dd81e"
        >
          <div
            className="flex mb-6 justify-between items-end"
            data-id="27335215-3d9e-58f7-a295-2edf452db6fd"
          >
            <div
              className="flex flex-col gap-2"
              data-id="4548d033-e5e7-5934-b9a3-6d055265d7e2"
            >
              <span
                className="uppercase text-[13px] tracking-widest"
                style={{ color: "#2D6A4F" }}
                data-id="b8d5c8b4-4cc9-5cb2-9472-159554d22ab5"
              >
                What Sets Us Apart
              </span>
              <h2
                className="leading-tight font-normal text-4xl"
                style={{ color: "#1F1B17" }}
                data-id="87d4ded4-29d0-5571-b185-d5e459963ea8"
              >
                Crafted with Intention, Served with Soul
              </h2>
            </div>
          </div>
          <div
            className="grid grid-cols-3 gap-6"
            data-id="0eb4ef03-d159-5420-8b09-255ddb8b6535"
          >
            <div
              className="rounded-xl border-black/1 border-1 border-solid flex p-6 flex-col gap-4"
              style={{ backgroundColor: "#FFFFFF", borderColor: "#E8E2DC" }}
              data-id="525a0245-a9be-50ef-9e90-7e782d574492"
            >
              <div
                className="size-12 rounded-lg flex justify-center items-center"
                style={{ backgroundColor: "#E5F0EA" }}
                data-id="442f9449-a303-599d-ba44-f491db04873d"
              >
                <Sprout
                  className="size-5 fill-current"
                  style={{ color: "#2D6A4F" }}
                  data-id="35bee0cb-f4ac-5db2-a042-cced6876e2bf"
                />
              </div>
              <h3
                className="text-xl leading-7"
                style={{ color: "#1F1B17" }}
                data-id="b0a97072-69dd-533d-b989-e04aa0410592"
              >
                Locally Sourced Ingredients
              </h3>
              <p
                className="text-base leading-[26px]"
                style={{ color: "#5C544C" }}
                data-id="6ceabf4f-eb9e-50ce-8703-6a28d8bb13f2"
              >
                Every plate begins at the local farms and fisheries we trust —
                fresh, seasonal, and traceable to its origin.
              </p>
              <a
                className="inline-flex text-sm leading-5 items-center gap-1"
                href="#"
                style={{ color: "#C4714F" }}
                data-id="e9e69d0b-c82d-589f-89a8-4451c2132673"
              >
                Meet our farmers
                <ArrowRight
                  className="size-3.5"
                  data-id="ef809faf-0020-5c0c-ac1e-e6e57f4dee88"
                />
              </a>
            </div>
            <div
              className="rounded-xl border-black/1 border-1 border-solid flex p-6 flex-col gap-4"
              style={{ backgroundColor: "#FFFFFF", borderColor: "#E8E2DC" }}
              data-id="cf6be7a0-3698-5354-9dda-07f19e8862d4"
            >
              <div
                className="size-12 rounded-lg flex justify-center items-center"
                style={{ backgroundColor: "#E5F0EA" }}
                data-id="d30ba714-bdcb-5d32-869c-89d05695fd63"
              >
                <ChefHat
                  className="size-5 fill-current"
                  style={{ color: "#2D6A4F" }}
                  data-id="3512d9ed-cb72-549e-913b-181ccdfb5fe6"
                />
              </div>
              <h3
                className="text-xl leading-7"
                style={{ color: "#1F1B17" }}
                data-id="99f8b34d-f3c9-5cf8-9b60-7b9c735e9ec1"
              >
                Award-Winning Chefs
              </h3>
              <p
                className="text-base leading-[26px]"
                style={{ color: "#5C544C" }}
                data-id="8bfebf2e-aeea-51c4-9971-dfbc8d351fc5"
              >
                A globally trained kitchen brigade led by chefs whose work has
                been celebrated across guides and competitions.
              </p>
              <a
                className="inline-flex text-sm leading-5 items-center gap-1"
                href="#"
                style={{ color: "#C4714F" }}
                data-id="5362b551-8e7c-530f-93e7-839cff46eb1a"
              >
                See our team
                <ArrowRight
                  className="size-3.5"
                  data-id="5f78bd84-3660-5b71-9c3d-d456a6ce4d0f"
                />
              </a>
            </div>
            <div
              className="rounded-xl border-black/1 border-1 border-solid flex p-6 flex-col gap-4"
              style={{ backgroundColor: "#FFFFFF", borderColor: "#E8E2DC" }}
              data-id="2cfb6c38-624a-5f72-9dd5-5d45cacfd819"
            >
              <div
                className="size-12 rounded-lg flex justify-center items-center"
                style={{ backgroundColor: "#E5F0EA" }}
                data-id="b71b58d9-ba17-56ca-aa49-7a48fe1da170"
              >
                <Flame
                  className="size-5 fill-current"
                  style={{ color: "#2D6A4F" }}
                  data-id="8e61ea02-6e1b-5b77-be8f-7bb09af4e1a4"
                />
              </div>
              <h3
                className="text-xl leading-7"
                style={{ color: "#1F1B17" }}
                data-id="0567060c-4e13-5514-b685-2cb210b338f6"
              >
                Immersive Dining Atmosphere
              </h3>
              <p
                className="text-base leading-[26px]"
                style={{ color: "#5C544C" }}
                data-id="c0a5d6ea-6798-5fc5-9967-c962caf687c4"
              >
                Architectural interiors, layered lighting, and curated music —
                designed so each visit feels like a small journey.
              </p>
              <a
                className="inline-flex text-sm leading-5 items-center gap-1"
                href="#"
                style={{ color: "#C4714F" }}
                data-id="3d8c47a3-87bc-506f-866f-db0477b30429"
              >
                Tour our spaces
                <ArrowRight
                  className="size-3.5"
                  data-id="87bd674e-6c11-5f44-bf8a-d6e6439bc8de"
                />
              </a>
            </div>
          </div>
        </section>
        <footer
          className="border-black/1 border-t-1 border-r-0 border-b-0 border-l-0 border-solid mt-8"
          style={{ borderColor: "#E8E2DC" }}
          data-id="67a55077-229e-5edc-ad97-f00d87db696c"
        >
          <div
            className="max-w-[1140px] flex mx-auto p-8 flex-col items-center gap-4"
            data-id="61947486-6cf4-5bec-90a4-d856f18928be"
          >
            <div
              className="flex items-center gap-6"
              data-id="f450bcdf-3e15-5b00-8bf0-5e21ff6b1b0b"
            >
              <a
                className="text-sm leading-5"
                href="#"
                style={{ color: "#5C544C" }}
                data-id="c305f50b-5bac-523f-8278-6aadd4007e24"
              >
                Privacy Policy
              </a>
              <a
                className="text-sm leading-5"
                href="#"
                style={{ color: "#5C544C" }}
                data-id="dc112817-24f2-5000-b580-568182b70ee4"
              >
                Terms
              </a>
              <a
                className="text-sm leading-5"
                href="#"
                style={{ color: "#5C544C" }}
                data-id="926cddf4-a310-58d3-ae40-5ae83f7006a4"
              >
                Contact
              </a>
            </div>
            <div
              className="flex items-center gap-4"
              data-id="ab1e7625-c490-5390-83d5-88e5d52db649"
            >
              <a
                aria-label="Facebook"
                className="size-9 rounded-full border-black/1 border-1 border-solid flex justify-center items-center"
                href="#"
                style={{ borderColor: "#E8E2DC" }}
                data-id="39d0c287-1849-5832-8b51-c4ea392a10e4"
              >
                <FallbackComponent
                  className="size-4 fill-current"
                  style={{ color: "#2D6A4F" }}
                  data-id="422904f9-5a49-592e-8c47-31f9263cb433"
                />
              </a>
              <a
                aria-label="TikTok"
                className="size-9 rounded-full border-black/1 border-1 border-solid flex justify-center items-center"
                href="#"
                style={{ borderColor: "#E8E2DC" }}
                data-id="c6afa19f-aaf0-5d63-8ff1-48ecb88d5719"
              >
                <Music2
                  className="size-4 fill-current"
                  style={{ color: "#2D6A4F" }}
                  data-id="41ee4708-4781-5f51-a2ea-506b5466c798"
                />
              </a>
              <a
                aria-label="WhatsApp"
                className="size-9 rounded-full border-black/1 border-1 border-solid flex justify-center items-center"
                href="#"
                style={{ borderColor: "#E8E2DC" }}
                data-id="7aea5da2-7a3d-51e9-ac87-31b8a69239dc"
              >
                <MessageCircle
                  className="size-4 fill-current"
                  style={{ color: "#2D6A4F" }}
                  data-id="c7afc2c8-f940-5ccc-b73c-58adaca2639c"
                />
              </a>
            </div>
            <p
              className="text-[13px]"
              style={{ color: "#5C544C" }}
              data-id="4f268b36-c13a-58f9-9b43-b65dbb11f1ac"
            >
              © 2025 Gaia AI. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}

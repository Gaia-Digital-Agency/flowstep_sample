import { usePageMeta } from "@/hooks/usePageMeta";
import {
  Award,
  Leaf,
  MessageCircle,
  Music2,
  Sparkles,
  Users,
} from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function AboutPage() {
  usePageMeta({
    title: "About Gaia AI — Our story, our craft",
    description: "How Gaia AI grew from a single kitchen into a polished, multi-branch dining experience.",
    canonical: "https://flowstep.gaiada.online/about",
  });
  return (
    <>
      <main>
        <section
          className="relative w-full h-70 overflow-hidden"
        >
          <img
            alt="Gaia restaurant exterior facade at golden hour"
            className="object-cover w-full h-full"
            src="https://images.unsplash.com/photo-1759167582278-b3a5179487de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3ODc2NDd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwZXh0ZXJpb3IlMjBmYWNhZGUlMjBnb2xkZW4lMjBob3VyJTIwYXJjaGl0ZWN0dXJlfGVufDF8MHx8fDE3Nzc1NTc2NjN8MA&ixlib=rb-4.1.0&q=80&w=1400"
          />
          <div
            className="absolute inset-0"
            style={{ backgroundColor: "rgba(196,113,79,0.4)" }}
          />
          <div
            className="flex absolute inset-0 px-8 flex-col justify-center items-center"
          >
            <span
              className="uppercase text-white/90 text-xs leading-4 tracking-[3.2px] mb-2"
            >
              About Gaia
            </span>
            <h1
              className="font-normal text-center text-white text-5xl leading-12 tracking-tight"
            >
              Our Story, Our Passion
            </h1>
          </div>
        </section>
        <section
          className="max-w-[1140px] grid grid-cols-12 mx-auto px-8 py-12 gap-8"
        >
          <div
            className="col-span-7 flex flex-col gap-4"
          >
            <span
              className="uppercase text-xs leading-4 tracking-[3.2px]"
              style={{ color: "#2D6A4F" }}
            >
              Our Heritage
            </span>
            <h2
              className="font-normal text-3xl leading-9 tracking-tight"
              style={{ color: "#1A1A1A" }}
            >
              Born from a Love of Hospitality
            </h2>
            <p
              className="leading-relaxed text-neutral-500 text-sm leading-5"
            >
              Gaia began as a quiet conversation between two friends who
              believed that a meal could be more than nourishment — it could be
              a memory worth carrying home. Founded in the heart of the city,
              our restaurant draws inspiration from the architectural warmth of
              Mediterranean courtyards and the unhurried rhythm of long, shared
              tables.
            </p>
            <p
              className="leading-relaxed text-neutral-500 text-sm leading-5"
            >
              Our culinary philosophy is rooted in seasonality, provenance, and
              quiet craftsmanship. Every plate tells a story of the land it came
              from — sourced from local growers, cured in-house, and finished
              with the kind of restraint that lets each ingredient speak for
              itself. We cook the way we wish to eat: honestly, generously, and
              with care.
            </p>
            <p
              className="leading-relaxed text-neutral-500 text-sm leading-5"
            >
              For travelers and tourists discovering our city for the first
              time, Gaia is a doorway. We welcome wanderers, regulars, and the
              curious alike — offering a space that feels distinctly local yet
              universally familiar. Whether it is your first visit or your
              fiftieth, we hope you leave with a story worth telling.
            </p>
          </div>
          <div
            className="col-span-5"
          >
            <div
              className="rounded-2xl w-full h-105 overflow-hidden"
            >
              <img
                alt="Gaia founder and head chef in the kitchen"
                className="object-cover w-full h-full"
                src="https://images.unsplash.com/photo-1724451344572-6d71e6823638?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3ODc2NDd8MHwxfHNlYXJjaHwxfHxjaGVmJTIwaW4lMjByZXN0YXVyYW50JTIwa2l0Y2hlbiUyMHBvcnRyYWl0fGVufDF8MXx8fDE3Nzc1NTc2NjN8MA&ixlib=rb-4.1.0&q=80&w=600"
              />
            </div>
          </div>
        </section>
        <section
          className="py-12 w-full"
          style={{ backgroundColor: "#FAF7F4" }}
        >
          <div
            className="max-w-[1140px] mx-auto px-8"
          >
            <div
              className="grid grid-cols-4 gap-6"
            >
              <Card
                className="bg-white border-neutral-200 border-0 border-solid p-6 gap-2"
              >
                <CardHeader
                  className="p-0 gap-2"
                >
                  <div
                    className="size-10 rounded-full flex justify-center items-center"
                    style={{ backgroundColor: "rgba(196,113,79,0.12)" }}
                  >
                    <Sparkles
                      className="size-5"
                      fill="#C4714F"
                      style={{ color: "#C4714F" }}
                    />
                  </div>
                  <h3
                    className="font-medium text-base leading-6"
                    style={{ color: "#1A1A1A" }}
                  >
                    Authenticity
                  </h3>
                </CardHeader>
                <CardContent
                  className="p-0"
                >
                  <p
                    className="leading-relaxed text-neutral-500 text-xs leading-4"
                  >
                    Honest cooking, honest sourcing, honest welcome.
                  </p>
                </CardContent>
              </Card>
              <Card
                className="bg-white border-neutral-200 border-0 border-solid p-6 gap-2"
              >
                <CardHeader
                  className="p-0 gap-2"
                >
                  <div
                    className="size-10 rounded-full flex justify-center items-center"
                    style={{ backgroundColor: "rgba(196,113,79,0.12)" }}
                  >
                    <Users
                      className="size-5"
                      fill="#C4714F"
                      style={{ color: "#C4714F" }}
                    />
                  </div>
                  <h3
                    className="font-medium text-base leading-6"
                    style={{ color: "#1A1A1A" }}
                  >
                    Community
                  </h3>
                </CardHeader>
                <CardContent
                  className="p-0"
                >
                  <p
                    className="leading-relaxed text-neutral-500 text-xs leading-4"
                  >
                    A table for neighbors, travelers, and friends alike.
                  </p>
                </CardContent>
              </Card>
              <Card
                className="bg-white border-neutral-200 border-0 border-solid p-6 gap-2"
              >
                <CardHeader
                  className="p-0 gap-2"
                >
                  <div
                    className="size-10 rounded-full flex justify-center items-center"
                    style={{ backgroundColor: "rgba(196,113,79,0.12)" }}
                  >
                    <Award
                      className="size-5"
                      fill="#C4714F"
                      style={{ color: "#C4714F" }}
                    />
                  </div>
                  <h3
                    className="font-medium text-base leading-6"
                    style={{ color: "#1A1A1A" }}
                  >
                    Excellence
                  </h3>
                </CardHeader>
                <CardContent
                  className="p-0"
                >
                  <p
                    className="leading-relaxed text-neutral-500 text-xs leading-4"
                  >
                    Quiet craftsmanship in every detail of service.
                  </p>
                </CardContent>
              </Card>
              <Card
                className="bg-white border-neutral-200 border-0 border-solid p-6 gap-2"
              >
                <CardHeader
                  className="p-0 gap-2"
                >
                  <div
                    className="size-10 rounded-full flex justify-center items-center"
                    style={{ backgroundColor: "rgba(196,113,79,0.12)" }}
                  >
                    <Leaf
                      className="size-5"
                      fill="#C4714F"
                      style={{ color: "#C4714F" }}
                    />
                  </div>
                  <h3
                    className="font-medium text-base leading-6"
                    style={{ color: "#1A1A1A" }}
                  >
                    Sustainability
                  </h3>
                </CardHeader>
                <CardContent
                  className="p-0"
                >
                  <p
                    className="leading-relaxed text-neutral-500 text-xs leading-4"
                  >
                    Seasonal sourcing and a gentler footprint.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section
          className="max-w-[1140px] mx-auto px-8 py-12"
        >
          <div
            className="flex mb-8 flex-col items-center gap-2"
          >
            <span
              className="uppercase text-xs leading-4 tracking-[3.2px]"
              style={{ color: "#2D6A4F" }}
            >
              Our People
            </span>
            <h2
              className="font-normal text-3xl leading-9 tracking-tight"
              style={{ color: "#1A1A1A" }}
            >
              Meet the Team
            </h2>
          </div>
          <div
            className="grid grid-cols-3 gap-6"
          >
            <Card
              className="text-center bg-white border-neutral-200 border-0 border-solid p-6 items-center gap-4"
            >
              <div
                className="size-24 rounded-full overflow-hidden"
              >
                <img
                  alt="Team member portrait"
                  className="object-cover w-full h-full"
                  src="https://images.unsplash.com/photo-1701878198293-d1f3641efdb3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3ODc2NDd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMGNoZWYlMjBwb3J0cmFpdHxlbnwxfDJ8fHwxNzc3NTU3NjYzfDA&ixlib=rb-4.1.0&q=80&w=300"
                />
              </div>
              <CardHeader
                className="p-0 items-center gap-1"
              >
                <h3
                  className="font-medium text-lg leading-7"
                  style={{ color: "#1A1A1A" }}
                >
                  Elena Marchetti
                </h3>
                <p
                  className="uppercase text-xs leading-4 tracking-[2.4px]"
                  style={{ color: "#C4714F" }}
                >{`Head Chef & Co-Founder`}</p>
              </CardHeader>
              <CardContent
                className="p-0"
              >
                <p
                  className="leading-relaxed text-neutral-500 text-xs leading-4"
                >
                  Trained across Florence and Lyon, Elena brings two decades of
                  seasonal cooking and an unwavering eye for detail.
                </p>
              </CardContent>
            </Card>
            <Card
              className="text-center bg-white border-neutral-200 border-0 border-solid p-6 items-center gap-4"
            >
              <div
                className="size-24 rounded-full overflow-hidden"
              >
                <img
                  alt="Team member portrait"
                  className="object-cover w-full h-full"
                  src="https://images.unsplash.com/photo-1583394293214-28ded15ee548?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3ODc2NDd8MHwxfHNlYXJjaHwxfHxtYWxlJTIwcmVzdGF1cmFudCUyMG1hbmFnZXIlMjBwb3J0cmFpdHxlbnwxfDJ8fHwxNzc3NTU3NjYzfDA&ixlib=rb-4.1.0&q=80&w=300"
                />
              </div>
              <CardHeader
                className="p-0 items-center gap-1"
              >
                <h3
                  className="font-medium text-lg leading-7"
                  style={{ color: "#1A1A1A" }}
                >
                  Mateo Alvarez
                </h3>
                <p
                  className="uppercase text-xs leading-4 tracking-[2.4px]"
                  style={{ color: "#C4714F" }}
                >
                  General Manager
                </p>
              </CardHeader>
              <CardContent
                className="p-0"
              >
                <p
                  className="leading-relaxed text-neutral-500 text-xs leading-4"
                >
                  Mateo leads the floor with warmth and precision, ensuring
                  every guest feels they are the only table in the room.
                </p>
              </CardContent>
            </Card>
            <Card
              className="text-center bg-white border-neutral-200 border-0 border-solid p-6 items-center gap-4"
            >
              <div
                className="size-24 rounded-full overflow-hidden"
              >
                <img
                  alt="Team member portrait"
                  className="object-cover w-full h-full"
                  src="https://images.unsplash.com/photo-1662195725883-e278eec95768?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3ODc2NDd8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBzb21tZWxpZXIlMjBwb3J0cmFpdHxlbnwxfDJ8fHwxNzc3NTU3NjYzfDA&ixlib=rb-4.1.0&q=80&w=300"
                />
              </div>
              <CardHeader
                className="p-0 items-center gap-1"
              >
                <h3
                  className="font-medium text-lg leading-7"
                  style={{ color: "#1A1A1A" }}
                >
                  Sofia Reyes
                </h3>
                <p
                  className="uppercase text-xs leading-4 tracking-[2.4px]"
                  style={{ color: "#C4714F" }}
                >
                  Head Sommelier
                </p>
              </CardHeader>
              <CardContent
                className="p-0"
              >
                <p
                  className="leading-relaxed text-neutral-500 text-xs leading-4"
                >
                  Sofia curates a list that travels — small producers,
                  low-intervention wines, and pairings written for discovery.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
    </>
  );
}

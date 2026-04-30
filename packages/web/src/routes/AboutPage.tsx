import { Helmet } from "react-helmet-async";
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
  return (
    <>
      <Helmet>
        <title>About Gaia AI — Our story, our craft</title>
        <meta name="description" content="How Gaia AI grew from a single kitchen into a polished, multi-branch dining experience." />
        <link rel="canonical" href="https://flowstep.gaiada.online/about" />
      </Helmet>
      <main>
        <section
          className="relative w-full h-70 overflow-hidden"
          data-id="0b3c5ac0-2f22-5559-8efd-bdba8269fe6d"
        >
          <img
            alt="Gaia restaurant exterior facade at golden hour"
            className="object-cover w-full h-full"
            data-authorname="Maxim Tolchinskiy"
            data-authorurl="https://unsplash.com/@shaikhulud"
            data-blurhash="LGF#EkMx5T9a~BE1%LxYtRIptRM|"
            data-photoid="syzghFb3eRU"
            src="https://images.unsplash.com/photo-1759167582278-b3a5179487de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3ODc2NDd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwZXh0ZXJpb3IlMjBmYWNhZGUlMjBnb2xkZW4lMjBob3VyJTIwYXJjaGl0ZWN0dXJlfGVufDF8MHx8fDE3Nzc1NTc2NjN8MA&ixlib=rb-4.1.0&q=80&w=1400"
            data-id="d2b767aa-0eb5-5ee2-917e-0e0ca42aac05"
          />
          <div
            className="absolute inset-0"
            style={{ backgroundColor: "rgba(196,113,79,0.4)" }}
            data-id="4a6f4676-0089-5686-bc98-1f44da6d36b0"
          />
          <div
            className="flex absolute inset-0 px-8 flex-col justify-center items-center"
            data-id="3d3b7d61-bf08-5741-828f-5c320e073128"
          >
            <span
              className="uppercase text-white/90 text-xs leading-4 tracking-[3.2px] mb-2"
              data-id="17489aa5-2e97-57bd-8502-2b855ddfcd77"
            >
              About Gaia
            </span>
            <h1
              className="font-normal text-center text-white text-5xl leading-12 tracking-tight"
              data-id="bc0ed847-9883-5d6d-beb2-38373c9f5d3f"
            >
              Our Story, Our Passion
            </h1>
          </div>
        </section>
        <section
          className="max-w-[1140px] grid grid-cols-12 mx-auto px-8 py-12 gap-8"
          data-id="c50bc895-aeb9-5fd3-b5f1-699ccdc566c7"
        >
          <div
            className="col-span-7 flex flex-col gap-4"
            data-id="29193250-dab7-5ebe-a6f6-6d34683c077a"
          >
            <span
              className="uppercase text-xs leading-4 tracking-[3.2px]"
              style={{ color: "#2D6A4F" }}
              data-id="cc6c4009-a80d-5ae7-b1a7-70963677afb1"
            >
              Our Heritage
            </span>
            <h2
              className="font-normal text-3xl leading-9 tracking-tight"
              style={{ color: "#1A1A1A" }}
              data-id="5735b6f3-1b2d-5bbc-b2be-d0c7816ce22b"
            >
              Born from a Love of Hospitality
            </h2>
            <p
              className="leading-relaxed text-neutral-500 text-sm leading-5"
              data-id="a1a4ad3c-40b1-5aeb-9015-221c017941c6"
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
              data-id="05bfa058-ba1a-50d2-b84d-495df813e84e"
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
              data-id="7a02244d-e2dc-565b-b6e6-6f39ce389445"
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
            data-id="40fca912-1c4f-566d-9468-59159b75f5ac"
          >
            <div
              className="rounded-2xl w-full h-105 overflow-hidden"
              data-id="ff0db608-8df2-5d46-81be-25bf5caac54d"
            >
              <img
                alt="Gaia founder and head chef in the kitchen"
                className="object-cover w-full h-full"
                data-authorname="Laryssa Ares"
                data-authorurl="https://unsplash.com/@laryssaares"
                data-blurhash="LYFr-Lt7ofWB?vWBR*f6~qV@IVof"
                data-photoid="ySZFWN0TWH8"
                src="https://images.unsplash.com/photo-1724451344572-6d71e6823638?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3ODc2NDd8MHwxfHNlYXJjaHwxfHxjaGVmJTIwaW4lMjByZXN0YXVyYW50JTIwa2l0Y2hlbiUyMHBvcnRyYWl0fGVufDF8MXx8fDE3Nzc1NTc2NjN8MA&ixlib=rb-4.1.0&q=80&w=600"
                data-id="0ac23f95-048d-5ed4-8adc-4ea8614714b0"
              />
            </div>
          </div>
        </section>
        <section
          className="py-12 w-full"
          style={{ backgroundColor: "#FAF7F4" }}
          data-id="7cda9e8f-2235-59cb-8464-114e93379622"
        >
          <div
            className="max-w-[1140px] mx-auto px-8"
            data-id="2c5b0293-bab0-52fb-82ae-5bb7a45f5b0b"
          >
            <div
              className="grid grid-cols-4 gap-6"
              data-id="4d613718-5de3-5bfe-8349-c823300af153"
            >
              <Card
                className="bg-white border-neutral-200 border-0 border-solid p-6 gap-2"
                data-id="5e6a3062-9671-5c2d-9aff-36b8f9528cbd"
              >
                <CardHeader
                  className="p-0 gap-2"
                  data-id="8a9d2804-af8a-5ce6-bbb4-57b4c4e450b9"
                >
                  <div
                    className="size-10 rounded-full flex justify-center items-center"
                    style={{ backgroundColor: "rgba(196,113,79,0.12)" }}
                    data-id="f8e3e2fd-beaa-5887-a6fb-e0935fbee417"
                  >
                    <Sparkles
                      className="size-5"
                      fill="#C4714F"
                      style={{ color: "#C4714F" }}
                      data-id="4176418d-3945-585a-97f5-c280260e156e"
                    />
                  </div>
                  <h3
                    className="font-medium text-base leading-6"
                    style={{ color: "#1A1A1A" }}
                    data-id="e1aea466-a9ec-5252-9adc-62a086b8006f"
                  >
                    Authenticity
                  </h3>
                </CardHeader>
                <CardContent
                  className="p-0"
                  data-id="14da38d5-4a5c-5d33-b59e-ade9d80acf58"
                >
                  <p
                    className="leading-relaxed text-neutral-500 text-xs leading-4"
                    data-id="790ecbef-b553-536e-9b92-8e567948eb2c"
                  >
                    Honest cooking, honest sourcing, honest welcome.
                  </p>
                </CardContent>
              </Card>
              <Card
                className="bg-white border-neutral-200 border-0 border-solid p-6 gap-2"
                data-id="55e74651-cdc2-53a0-a534-b59f548cca84"
              >
                <CardHeader
                  className="p-0 gap-2"
                  data-id="467aa0e5-1f74-5210-8cba-744f74e0d50f"
                >
                  <div
                    className="size-10 rounded-full flex justify-center items-center"
                    style={{ backgroundColor: "rgba(196,113,79,0.12)" }}
                    data-id="0a4177d6-6bf2-5839-8a62-441ed6ac8ac7"
                  >
                    <Users
                      className="size-5"
                      fill="#C4714F"
                      style={{ color: "#C4714F" }}
                      data-id="39752440-fa7e-5fa1-8594-edb0d98f2fd1"
                    />
                  </div>
                  <h3
                    className="font-medium text-base leading-6"
                    style={{ color: "#1A1A1A" }}
                    data-id="4de29c2e-3cf8-561d-8da8-c22d715faf96"
                  >
                    Community
                  </h3>
                </CardHeader>
                <CardContent
                  className="p-0"
                  data-id="8a3153e5-7e11-5e8b-8a11-ff598f1efae6"
                >
                  <p
                    className="leading-relaxed text-neutral-500 text-xs leading-4"
                    data-id="85bea0bc-626f-51be-8024-fe4ddd25ea42"
                  >
                    A table for neighbors, travelers, and friends alike.
                  </p>
                </CardContent>
              </Card>
              <Card
                className="bg-white border-neutral-200 border-0 border-solid p-6 gap-2"
                data-id="73482904-9185-50ba-be4d-0aa54f691ea0"
              >
                <CardHeader
                  className="p-0 gap-2"
                  data-id="cc44dfd7-b961-55cb-a80a-20808826b8b3"
                >
                  <div
                    className="size-10 rounded-full flex justify-center items-center"
                    style={{ backgroundColor: "rgba(196,113,79,0.12)" }}
                    data-id="cafbdc3b-d341-5897-a784-8345c1a1d077"
                  >
                    <Award
                      className="size-5"
                      fill="#C4714F"
                      style={{ color: "#C4714F" }}
                      data-id="7d32e43c-aacb-5788-b0ec-938e4b65ef89"
                    />
                  </div>
                  <h3
                    className="font-medium text-base leading-6"
                    style={{ color: "#1A1A1A" }}
                    data-id="26fd3721-7b3a-5cec-bee3-bc3972a7b69e"
                  >
                    Excellence
                  </h3>
                </CardHeader>
                <CardContent
                  className="p-0"
                  data-id="a0e658c1-d8c8-5b16-a04b-6fb68635f054"
                >
                  <p
                    className="leading-relaxed text-neutral-500 text-xs leading-4"
                    data-id="613f1688-5ecc-5af6-a689-8e76dc020f94"
                  >
                    Quiet craftsmanship in every detail of service.
                  </p>
                </CardContent>
              </Card>
              <Card
                className="bg-white border-neutral-200 border-0 border-solid p-6 gap-2"
                data-id="01a2101c-0942-5d4b-a1af-1f1d4750cbc1"
              >
                <CardHeader
                  className="p-0 gap-2"
                  data-id="b7212c8d-43df-5125-a13c-fd54042ab9c0"
                >
                  <div
                    className="size-10 rounded-full flex justify-center items-center"
                    style={{ backgroundColor: "rgba(196,113,79,0.12)" }}
                    data-id="365fbfbc-44ec-564a-b773-95dd7c51cfed"
                  >
                    <Leaf
                      className="size-5"
                      fill="#C4714F"
                      style={{ color: "#C4714F" }}
                      data-id="d733a167-86b1-55dc-9ff5-4c52d737d75c"
                    />
                  </div>
                  <h3
                    className="font-medium text-base leading-6"
                    style={{ color: "#1A1A1A" }}
                    data-id="5696de2c-778c-58bb-bf4f-fe46d2a07f10"
                  >
                    Sustainability
                  </h3>
                </CardHeader>
                <CardContent
                  className="p-0"
                  data-id="d31f152b-e880-52e7-b31c-f6169e537976"
                >
                  <p
                    className="leading-relaxed text-neutral-500 text-xs leading-4"
                    data-id="95b2075d-78c2-5d7c-ada0-2a90e7470e9e"
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
          data-id="0cde8a20-f997-55d9-9121-55d57039c75f"
        >
          <div
            className="flex mb-8 flex-col items-center gap-2"
            data-id="771d8c38-fa00-5975-8043-ec01d4ce7146"
          >
            <span
              className="uppercase text-xs leading-4 tracking-[3.2px]"
              style={{ color: "#2D6A4F" }}
              data-id="47b72859-7e2b-55cb-ae52-c546340bd95b"
            >
              Our People
            </span>
            <h2
              className="font-normal text-3xl leading-9 tracking-tight"
              style={{ color: "#1A1A1A" }}
              data-id="44bf73b9-7ef0-5e60-b553-e41648e8ad63"
            >
              Meet the Team
            </h2>
          </div>
          <div
            className="grid grid-cols-3 gap-6"
            data-id="8cd33b7b-02ab-5c9b-8700-40fb8a71dc30"
          >
            <Card
              className="text-center bg-white border-neutral-200 border-0 border-solid p-6 items-center gap-4"
              data-id="3f1ee310-292c-599c-a52c-627df4828d26"
            >
              <div
                className="size-24 rounded-full overflow-hidden"
                data-id="0b8bd4bb-04ff-5f0c-af47-81d6f2fea36c"
              >
                <img
                  alt="Team member portrait"
                  className="object-cover w-full h-full"
                  data-authorname="Andy Sartori"
                  data-authorurl="https://unsplash.com/@andysartori"
                  data-blurhash="LPF={=.9R+%M~WIT9EoLD$MxRORj"
                  data-photoid="Hz_SNGGPnxI"
                  src="https://images.unsplash.com/photo-1701878198293-d1f3641efdb3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3ODc2NDd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMGNoZWYlMjBwb3J0cmFpdHxlbnwxfDJ8fHwxNzc3NTU3NjYzfDA&ixlib=rb-4.1.0&q=80&w=300"
                  data-id="a58d9a49-686e-5806-a67e-016c2b04fa2d"
                />
              </div>
              <CardHeader
                className="p-0 items-center gap-1"
                data-id="52e6486c-378c-5837-b007-9c83bf70fdf6"
              >
                <h3
                  className="font-medium text-lg leading-7"
                  style={{ color: "#1A1A1A" }}
                  data-id="7c40160e-15e4-5667-87ad-0bd35b25b51c"
                >
                  Elena Marchetti
                </h3>
                <p
                  className="uppercase text-xs leading-4 tracking-[2.4px]"
                  style={{ color: "#C4714F" }}
                  data-id="b21c0711-9491-5872-9858-17d4fd071209"
                >{`Head Chef & Co-Founder`}</p>
              </CardHeader>
              <CardContent
                className="p-0"
                data-id="75fed73c-bec2-5daa-919f-6b22b3855d21"
              >
                <p
                  className="leading-relaxed text-neutral-500 text-xs leading-4"
                  data-id="998d554e-7558-52e6-8835-02afad4ed3b1"
                >
                  Trained across Florence and Lyon, Elena brings two decades of
                  seasonal cooking and an unwavering eye for detail.
                </p>
              </CardContent>
            </Card>
            <Card
              className="text-center bg-white border-neutral-200 border-0 border-solid p-6 items-center gap-4"
              data-id="631cdfaa-daff-54a8-ad0d-d5a9d73d5602"
            >
              <div
                className="size-24 rounded-full overflow-hidden"
                data-id="16d3dcab-f134-56c5-b5bb-cf36e66641b5"
              >
                <img
                  alt="Team member portrait"
                  className="object-cover w-full h-full"
                  data-authorname="Rc Cf"
                  data-authorurl="https://unsplash.com/@rccf"
                  data-photoid="FMh5o5m5N9E"
                  src="https://images.unsplash.com/photo-1583394293214-28ded15ee548?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3ODc2NDd8MHwxfHNlYXJjaHwxfHxtYWxlJTIwcmVzdGF1cmFudCUyMG1hbmFnZXIlMjBwb3J0cmFpdHxlbnwxfDJ8fHwxNzc3NTU3NjYzfDA&ixlib=rb-4.1.0&q=80&w=300"
                  data-id="868e9748-3a91-50b2-9646-6b4a84981c46"
                />
              </div>
              <CardHeader
                className="p-0 items-center gap-1"
                data-id="ca95b522-9693-59d9-a567-0e45642c157c"
              >
                <h3
                  className="font-medium text-lg leading-7"
                  style={{ color: "#1A1A1A" }}
                  data-id="fffc47ba-3964-570f-b384-4a379c74cf80"
                >
                  Mateo Alvarez
                </h3>
                <p
                  className="uppercase text-xs leading-4 tracking-[2.4px]"
                  style={{ color: "#C4714F" }}
                  data-id="f63c20fa-c5de-5d82-8bb1-bd595f376943"
                >
                  General Manager
                </p>
              </CardHeader>
              <CardContent
                className="p-0"
                data-id="e2277988-7964-5692-9cf3-bcfd37117c21"
              >
                <p
                  className="leading-relaxed text-neutral-500 text-xs leading-4"
                  data-id="81835756-60e2-5a8d-94e7-14a0a5756f39"
                >
                  Mateo leads the floor with warmth and precision, ensuring
                  every guest feels they are the only table in the room.
                </p>
              </CardContent>
            </Card>
            <Card
              className="text-center bg-white border-neutral-200 border-0 border-solid p-6 items-center gap-4"
              data-id="d3ab62b4-989f-53eb-88a9-d8b9bcabba6e"
            >
              <div
                className="size-24 rounded-full overflow-hidden"
                data-id="e9d0d075-86f4-5ef5-969e-95cad7785890"
              >
                <img
                  alt="Team member portrait"
                  className="object-cover w-full h-full"
                  data-authorname="Alexandre Lecocq"
                  data-authorurl="https://unsplash.com/@mr_alexandre"
                  data-blurhash="LKJsh1-C3Y-o~qE2T0NbF{R%$zX9"
                  data-photoid="qwskm5WvIsE"
                  src="https://images.unsplash.com/photo-1662195725883-e278eec95768?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3ODc2NDd8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBzb21tZWxpZXIlMjBwb3J0cmFpdHxlbnwxfDJ8fHwxNzc3NTU3NjYzfDA&ixlib=rb-4.1.0&q=80&w=300"
                  data-id="fe49e85c-2199-518b-b1cb-e9af3c6953e2"
                />
              </div>
              <CardHeader
                className="p-0 items-center gap-1"
                data-id="c309d309-6393-5a8b-a9ca-97d7bb6342b2"
              >
                <h3
                  className="font-medium text-lg leading-7"
                  style={{ color: "#1A1A1A" }}
                  data-id="4a069795-4f3a-58e1-86b5-24cce96baaf9"
                >
                  Sofia Reyes
                </h3>
                <p
                  className="uppercase text-xs leading-4 tracking-[2.4px]"
                  style={{ color: "#C4714F" }}
                  data-id="41b49e88-6d77-5ea2-b183-cc627f0d8ef5"
                >
                  Head Sommelier
                </p>
              </CardHeader>
              <CardContent
                className="p-0"
                data-id="5af31827-b42a-566a-b4e4-72d7211ae05d"
              >
                <p
                  className="leading-relaxed text-neutral-500 text-xs leading-4"
                  data-id="5bdbb5bc-418e-5cad-b71e-e6acdb167b07"
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

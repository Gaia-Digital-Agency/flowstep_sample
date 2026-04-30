import { Helmet } from "react-helmet-async";
import {
  CalendarCheck,
  Code2,
  Leaf,
  MessageCircle,
  Music2,
} from "lucide-react";
import { Card, CardHeader, CardFooter } from "@/components/ui/card";

export default function MenuPage() {
  return (
    <>
      <Helmet>
        <title>Menu — Seasonal plates, modern technique</title>
        <meta name="description" content="Seasonal plates with modern technique — dishes designed to surprise and reward." />
        <link rel="canonical" href="https://flowstep.gaiada.online/menu" />
      </Helmet>
      <main>
        <main
          className="mx-auto p-12"
          style={{ maxWidth: "1140px" }}
          data-id="0a5d72c8-5dc9-517c-a5ed-f8d1787f5e87"
        >
          <section
            className="text-center flex pb-8 flex-col items-center gap-4"
            data-id="07f80d54-3f89-51bd-918e-6ef62c53162a"
          >
            <span
              className="uppercase text-xs leading-4 tracking-[3.2px]"
              style={{ color: "#C4714F" }}
              data-id="6994d5ae-37f6-5eb1-a3e1-f523fa713e2c"
            >
              The Gaia Kitchen
            </span>
            <h1
              className="font-normal text-5xl leading-12 tracking-tight"
              style={{ color: "#1F1B16" }}
              data-id="8a2847d7-531a-540a-a712-1e6dd599cfe4"
            >
              Our Menu
            </h1>
            <div
              className="rounded-full w-16 h-0.5"
              style={{ backgroundColor: "#C4714F" }}
              data-id="6f55013a-c03b-59e8-a238-26cfb2b50d41"
            />
            <p
              className="max-w-xl text-base leading-6"
              style={{ color: "#5C5247" }}
              data-id="6d1618f2-8fb5-5955-9bf5-2401cad9dd91"
            >
              Seasonal ingredients, bold flavors, and dishes designed to delight
              every palate.
            </p>
          </section>
          <Tabs
            className="pb-8 w-full"
            defaultValue="all"
            data-id="224b6635-c77c-5ceb-91e3-44c4f2b3f5f9"
          >
            <TabsList
              className="bg-transparent border-black/1 border-t-0 border-r-0 border-b-1 border-l-0 border-solid p-0 justify-center gap-2 w-full h-auto"
              style={{ borderColor: "#E8E2DC" }}
              data-id="3cf9e922-f22b-5ec1-a1cf-4357f0249faf"
            >
              <TabsTrigger
                className="text-sm leading-5 border-black/1 border-t-0 border-r-0 border-b-2 border-l-0 border-solid px-4 py-3"
                style={{ borderColor: "#C4714F", color: "#C4714F" }}
                value="all"
                data-id="2b26a1d6-a134-5b5b-aa62-32d678de6f82"
              >
                All
              </TabsTrigger>
              <TabsTrigger
                className="border-transparent text-sm leading-5 border-black/1 border-t-0 border-r-0 border-b-2 border-l-0 border-solid px-4 py-3"
                style={{ color: "#5C5247" }}
                value="starters"
                data-id="4786b043-fc42-5826-8085-d384ef58fae4"
              >
                Starters
              </TabsTrigger>
              <TabsTrigger
                className="border-transparent text-sm leading-5 border-black/1 border-t-0 border-r-0 border-b-2 border-l-0 border-solid px-4 py-3"
                style={{ color: "#5C5247" }}
                value="mains"
                data-id="94f6620c-d3f0-5fb3-8f32-3493d71ebe14"
              >
                Mains
              </TabsTrigger>
              <TabsTrigger
                className="border-transparent text-sm leading-5 border-black/1 border-t-0 border-r-0 border-b-2 border-l-0 border-solid px-4 py-3"
                style={{ color: "#5C5247" }}
                value="desserts"
                data-id="0d68dfdb-2586-5961-a4ad-c5829183563d"
              >
                Desserts
              </TabsTrigger>
              <TabsTrigger
                className="border-transparent text-sm leading-5 border-black/1 border-t-0 border-r-0 border-b-2 border-l-0 border-solid px-4 py-3"
                style={{ color: "#5C5247" }}
                value="drinks"
                data-id="529d013e-723d-52e0-9082-e57995d8c976"
              >
                Drinks
              </TabsTrigger>
              <TabsTrigger
                className="border-transparent text-sm leading-5 border-black/1 border-t-0 border-r-0 border-b-2 border-l-0 border-solid px-4 py-3"
                style={{ color: "#5C5247" }}
                value="specials"
                data-id="27900345-12df-5c74-9a05-51eb3aa65527"
              >
                Chef's Specials
              </TabsTrigger>
            </TabsList>
          </Tabs>
          <section
            className="grid grid-cols-3 gap-6"
            data-id="fa837ed9-0a7a-56ee-a540-8078f00a4d95"
          >
            <Card
              className="shadow-none border-black/1 border-0 border-solid p-4 gap-4"
              style={{ backgroundColor: "#FFFFFF" }}
              data-id="c1841c9c-d964-5aa6-b37f-9b8c0d8a6a7c"
            >
              <div
                className="aspect-square rounded-xl overflow-hidden"
                style={{ backgroundColor: "#E8E2DC" }}
                data-id="54995c34-09b0-5d2b-9e05-2ad0fa1226f9"
              >
                <img
                  alt="Heirloom Tomato Carpaccio — plated presentation"
                  className="object-cover w-full h-full"
                  data-authorname="Alexander Ross"
                  data-authorurl="https://unsplash.com/@arossphotography"
                  data-blurhash="LFBD7j5PN2xC%et6RjW;0N-VoINK"
                  data-photoid="bD6ydkkcppA"
                  src="https://images.unsplash.com/photo-1574031491550-35f444917508?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3ODc2NDd8MHwxfHNlYXJjaHwxfHx2ZWdhbiUyMHNhbGFkJTIwYm93bCUyMGdyZWVufGVufDF8Mnx8fDE3Nzc1NTc2ODF8MA&ixlib=rb-4.1.0&q=80&w=400"
                  data-id="16366333-b232-52c1-9850-7d39514bd933"
                />
              </div>
              <CardHeader
                className="p-0 gap-2"
                data-id="cc8f677e-d20e-50c3-b2ef-49f96190794c"
              >
                <div
                  className="flex justify-between items-start gap-2"
                  data-id="ff7973c7-a445-5cbd-ae46-e7d0ea20fc55"
                >
                  <h3
                    className="font-medium text-lg leading-7"
                    style={{ color: "#1F1B16" }}
                    data-id="317ed6d7-15f1-5310-9cab-3e990807a27d"
                  >
                    Heirloom Carpaccio
                  </h3>
                  <span
                    className="font-medium text-lg leading-7"
                    style={{ color: "#C4714F" }}
                    data-id="7bf2d9d8-2f54-50ca-a636-76fd93ecf10f"
                  >
                    $14
                  </span>
                </div>
                <p
                  className="leading-relaxed text-sm leading-5"
                  style={{ color: "#5C5247" }}
                  data-id="12877758-44db-5815-80c5-066b1efcd0cb"
                >
                  Thinly sliced heirloom tomatoes, basil oil, aged balsamic, and
                  crumbled feta on toasted sourdough.
                </p>
              </CardHeader>
              <CardFooter
                className="p-0 gap-2"
                data-id="6a8df2a7-0432-5dbf-932a-053443815254"
              >
                <Badge
                  className="font-normal rounded-full border-black/1 border-0 border-solid"
                  style={{ backgroundColor: "#E6F0EA", color: "#2D6A4F" }}
                  data-id="9cb2fe24-e8b6-5994-98ac-8097c38a2ee8"
                >
                  Vegan
                </Badge>
                <Badge
                  className="font-normal rounded-full border-black/1 border-0 border-solid"
                  style={{ backgroundColor: "#F5E9E2", color: "#C4714F" }}
                  data-id="f9be8290-0385-5dd9-89ca-68e255b0adf7"
                >
                  Gluten-Free
                </Badge>
              </CardFooter>
            </Card>
            <Card
              className="shadow-none border-black/1 border-0 border-solid p-4 gap-4"
              style={{ backgroundColor: "#FFFFFF" }}
              data-id="9db64bc2-203d-52e1-9fb1-3c22e2e49f14"
            >
              <div
                className="aspect-square rounded-xl overflow-hidden"
                style={{ backgroundColor: "#E8E2DC" }}
                data-id="fbc49f70-082f-5c29-848d-e1773befa502"
              >
                <img
                  alt="Burrata & Stone Fruit — plated presentation"
                  className="object-cover w-full h-full"
                  data-authorname="Martin Baron"
                  data-authorurl="https://unsplash.com/@elmartinbaron"
                  data-blurhash="LBN^Vox^yZ$%Obn#RObwGdxaH=I@"
                  data-photoid="BDnO_6lRTT0"
                  src="https://images.unsplash.com/photo-1673663095512-b188c4604a5a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3ODc2NDd8MHwxfHNlYXJjaHwxfHxwbGF0ZWQlMjBnb3VybWV0JTIwc3RhcnRlciUyMGRpc2h8ZW58MXwyfHx8MTc3NzU1NzY2M3ww&ixlib=rb-4.1.0&q=80&w=400"
                  data-id="207cc738-ff8e-59ff-97c6-6874d18043f1"
                />
              </div>
              <CardHeader
                className="p-0 gap-2"
                data-id="bcce2d97-a770-5257-9186-679c3880af8f"
              >
                <div
                  className="flex justify-between items-start gap-2"
                  data-id="da000431-fa81-55d6-97cc-6b16842f6d0b"
                >
                  <h3
                    className="font-medium text-lg leading-7"
                    style={{ color: "#1F1B16" }}
                    data-id="0a212c98-96fe-5224-8bcf-b3d5e2f588af"
                  >{`Burrata & Stone Fruit`}</h3>
                  <span
                    className="font-medium text-lg leading-7"
                    style={{ color: "#C4714F" }}
                    data-id="d780d00f-bb39-5fd4-bc96-43021d9e1aa3"
                  >
                    $18
                  </span>
                </div>
                <p
                  className="leading-relaxed text-sm leading-5"
                  style={{ color: "#5C5247" }}
                  data-id="5bd07bb6-6b3c-5beb-83c6-c0f9b3c59717"
                >
                  Creamy burrata paired with grilled peaches, pistachio, mint,
                  and a drizzle of honey-lemon vinaigrette.
                </p>
              </CardHeader>
              <CardFooter
                className="p-0 gap-2"
                data-id="516999b1-cd0c-589f-9afe-98494146cff4"
              >
                <Badge
                  className="font-normal rounded-full border-black/1 border-0 border-solid"
                  style={{ backgroundColor: "#F5E9E2", color: "#C4714F" }}
                  data-id="50fbdb09-2ab3-5ee9-84cd-cb5e7db73310"
                >
                  Gluten-Free
                </Badge>
                <Badge
                  className="font-normal rounded-full border-black/1 border-0 border-solid"
                  style={{ backgroundColor: "#FBEFD9", color: "#A06A1B" }}
                  data-id="ca317ded-352b-5668-ae82-e8cf4ff08c0f"
                >
                  Signature
                </Badge>
              </CardFooter>
            </Card>
            <Card
              className="shadow-none border-black/1 border-0 border-solid p-4 gap-4"
              style={{ backgroundColor: "#FFFFFF" }}
              data-id="5421bcb8-daa7-5137-acc8-f5673d8d1c2c"
            >
              <div
                className="aspect-square rounded-xl overflow-hidden"
                style={{ backgroundColor: "#E8E2DC" }}
                data-id="13c793d6-0e58-59c4-a789-0b592da8800f"
              >
                <img
                  alt="Wagyu Striploin — plated presentation"
                  className="object-cover w-full h-full"
                  data-authorname="Nima Naseri"
                  data-authorurl="https://unsplash.com/@nimanaseri"
                  data-blurhash="LYK^pcs:pInh01xtM{of4mV@RPof"
                  data-photoid="pAE-E9C_Jq8"
                  src="https://images.unsplash.com/photo-1676471912422-defa79bd178c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3ODc2NDd8MHwxfHNlYXJjaHwxfHxwbGF0ZWQlMjBzdGVhayUyMG1haW4lMjBjb3Vyc2UlMjByZXN0YXVyYW50fGVufDF8Mnx8fDE3Nzc1NTc2NjN8MA&ixlib=rb-4.1.0&q=80&w=400"
                  data-id="b41f9b8f-042a-5840-ab48-038e1e97a856"
                />
              </div>
              <CardHeader
                className="p-0 gap-2"
                data-id="3abd4d0c-e175-5248-b3f2-1851ca0a2c1d"
              >
                <div
                  className="flex justify-between items-start gap-2"
                  data-id="e4fb2e49-55ae-5d8c-84e6-0c03a7272312"
                >
                  <h3
                    className="font-medium text-lg leading-7"
                    style={{ color: "#1F1B16" }}
                    data-id="2936731d-6528-594c-b402-1fdece17154e"
                  >
                    Wagyu Striploin
                  </h3>
                  <span
                    className="font-medium text-lg leading-7"
                    style={{ color: "#C4714F" }}
                    data-id="e221e80b-cc9e-5704-8d6d-1c9c05d82a37"
                  >
                    $48
                  </span>
                </div>
                <p
                  className="leading-relaxed text-sm leading-5"
                  style={{ color: "#5C5247" }}
                  data-id="cee1dac0-c506-5f38-b329-21fcd72f822d"
                >
                  Reverse-seared A5 wagyu, charred shallots, smoked bone-marrow
                  jus, and a black garlic puree.
                </p>
              </CardHeader>
              <CardFooter
                className="p-0 gap-2"
                data-id="4edb5905-c7fc-53df-a57c-7271880955af"
              >
                <Badge
                  className="font-normal rounded-full border-black/1 border-0 border-solid"
                  style={{ backgroundColor: "#FBEFD9", color: "#A06A1B" }}
                  data-id="5a75e054-5c28-5d81-a22b-578d66742fd9"
                >
                  Signature
                </Badge>
                <Badge
                  className="font-normal rounded-full border-black/1 border-0 border-solid"
                  style={{ backgroundColor: "#F5E9E2", color: "#C4714F" }}
                  data-id="e5845a80-b64b-5809-8b8a-c0e53b20c02c"
                >
                  Gluten-Free
                </Badge>
              </CardFooter>
            </Card>
            <Card
              className="shadow-none border-black/1 border-0 border-solid p-4 gap-4"
              style={{ backgroundColor: "#FFFFFF" }}
              data-id="6679fca3-436f-5cad-a25f-d27e3a13d3e9"
            >
              <div
                className="aspect-square rounded-xl overflow-hidden"
                style={{ backgroundColor: "#E8E2DC" }}
                data-id="8c515821-fee3-5d63-86a4-75af900f2ac2"
              >
                <img
                  alt="Saffron Risotto Tartare — plated presentation"
                  className="object-cover w-full h-full"
                  data-authorname="Nima Naseri"
                  data-authorurl="https://unsplash.com/@nimanaseri"
                  data-blurhash="LNH2D:Q-R+WUMd$%M{WV00%1oebb"
                  data-photoid="RAUGKcReU8A"
                  src="https://images.unsplash.com/photo-1676471926534-d5c9771909fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3ODc2NDd8MHwxfHNlYXJjaHwxfHxjaGVmJTIwc3BlY2lhbCUyMHNpZ25hdHVyZSUyMGRpc2h8ZW58MXwyfHx8MTc3NzU1NzY2NHww&ixlib=rb-4.1.0&q=80&w=400"
                  data-id="6a7774c8-7f21-5598-b8aa-8d081e0329f1"
                />
              </div>
              <CardHeader
                className="p-0 gap-2"
                data-id="467da0f2-7518-5988-9f9b-4202a0ff764d"
              >
                <div
                  className="flex justify-between items-start gap-2"
                  data-id="3b0f86a2-f111-5fb3-bb07-fa48eb3d0241"
                >
                  <h3
                    className="font-medium text-lg leading-7"
                    style={{ color: "#1F1B16" }}
                    data-id="168349ee-dc29-565d-81f1-124a1b8fb958"
                  >
                    Saffron Risotto
                  </h3>
                  <span
                    className="font-medium text-lg leading-7"
                    style={{ color: "#C4714F" }}
                    data-id="ba571135-e0de-5987-813f-53759a9d3fd4"
                  >
                    $26
                  </span>
                </div>
                <p
                  className="leading-relaxed text-sm leading-5"
                  style={{ color: "#5C5247" }}
                  data-id="4a9549fc-dee9-51c3-b388-4cdeecf6c016"
                >
                  Carnaroli rice slow-cooked with saffron threads, parmesan
                  reggiano, brown butter, and crispy sage.
                </p>
              </CardHeader>
              <CardFooter
                className="p-0 gap-2"
                data-id="fd4b7629-51f6-5bd8-9a6c-dc9c79a3634f"
              >
                <Badge
                  className="font-normal rounded-full border-black/1 border-0 border-solid"
                  style={{ backgroundColor: "#E6F0EA", color: "#2D6A4F" }}
                  data-id="8a860702-7a3e-59ff-a3c7-c3ad9cb4e851"
                >
                  Vegan
                </Badge>
                <Badge
                  className="font-normal rounded-full border-black/1 border-0 border-solid"
                  style={{ backgroundColor: "#FBEFD9", color: "#A06A1B" }}
                  data-id="ffa7baf7-8691-5678-9078-0813ac69958c"
                >
                  Signature
                </Badge>
              </CardFooter>
            </Card>
            <Card
              className="shadow-none border-black/1 border-0 border-solid p-4 gap-4"
              style={{ backgroundColor: "#FFFFFF" }}
              data-id="a81eba3c-825c-53b5-b248-45dd33830e6a"
            >
              <div
                className="aspect-square rounded-xl overflow-hidden"
                style={{ backgroundColor: "#E8E2DC" }}
                data-id="c943faed-40c3-501b-b8fd-8a33ed651833"
              >
                <img
                  alt="Dark Chocolate Sphere — plated presentation"
                  className="object-cover w-full h-full"
                  data-authorname="Farhad Ibrahimzade"
                  data-authorurl="https://unsplash.com/@ferhadd"
                  data-blurhash="LHNA;z=_%h%$4ma#ozRPR~tm8^R4"
                  data-photoid="cq7y4VMwJco"
                  src="https://images.unsplash.com/photo-1625938144292-ec8ccfb4bf5e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3ODc2NDd8MHwxfHNlYXJjaHwxfHxjaG9jb2xhdGUlMjBkZXNzZXJ0JTIwcGxhdGUlMjBsdXh1cnl8ZW58MXwyfHx8MTc3NzU1NzY4MXww&ixlib=rb-4.1.0&q=80&w=400"
                  data-id="ff27ea35-de7d-5783-b330-384cbf40c5ed"
                />
              </div>
              <CardHeader
                className="p-0 gap-2"
                data-id="b39970e6-961e-575f-bb1a-90024baa810b"
              >
                <div
                  className="flex justify-between items-start gap-2"
                  data-id="1016d3a7-9fc6-51da-b9db-c07036aa71a8"
                >
                  <h3
                    className="font-medium text-lg leading-7"
                    style={{ color: "#1F1B16" }}
                    data-id="c98d03b0-a7d2-51df-9121-6121a56eebcd"
                  >
                    Dark Chocolate Sphere
                  </h3>
                  <span
                    className="font-medium text-lg leading-7"
                    style={{ color: "#C4714F" }}
                    data-id="4021d3f7-210e-5384-af3b-e7617ec36464"
                  >
                    $13
                  </span>
                </div>
                <p
                  className="leading-relaxed text-sm leading-5"
                  style={{ color: "#5C5247" }}
                  data-id="6a13a1f5-1869-534d-81cc-55dd44f0e26a"
                >
                  70% Valrhona shell filled with raspberry coulis, hazelnut
                  praline, and finished with warm salted caramel.
                </p>
              </CardHeader>
              <CardFooter
                className="p-0 gap-2"
                data-id="d29faf07-b0f5-5d2c-9d5a-b3686f9c8214"
              >
                <Badge
                  className="font-normal rounded-full border-black/1 border-0 border-solid"
                  style={{ backgroundColor: "#F5E9E2", color: "#C4714F" }}
                  data-id="29e951dc-0896-50a7-8bd6-dd92c1b19e64"
                >
                  Gluten-Free
                </Badge>
                <Badge
                  className="font-normal rounded-full border-black/1 border-0 border-solid"
                  style={{ backgroundColor: "#FBEFD9", color: "#A06A1B" }}
                  data-id="c17cceeb-3a68-5764-9567-45d01d882daf"
                >
                  Signature
                </Badge>
              </CardFooter>
            </Card>
            <Card
              className="shadow-none border-black/1 border-0 border-solid p-4 gap-4"
              style={{ backgroundColor: "#FFFFFF" }}
              data-id="6d43f196-423c-51bd-8e81-86253ab2e314"
            >
              <div
                className="aspect-square rounded-xl overflow-hidden"
                style={{ backgroundColor: "#E8E2DC" }}
                data-id="cf253ce9-aaea-59a0-abe0-8194961a4a30"
              >
                <img
                  alt="Citrus Garden Spritz — plated presentation"
                  className="object-cover w-full h-full"
                  data-authorname="Farhad Ibrahimzade"
                  data-authorurl="https://unsplash.com/@ferhadd"
                  data-blurhash="L9E.%@5GM_IB?^?HxTM{H=S6xrtR"
                  data-photoid="9lNTm5PcXOY"
                  src="https://images.unsplash.com/photo-1626201853293-d39a9fca6c3d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3ODc2NDd8MHwxfHNlYXJjaHwxfHxjb2NrdGFpbCUyMGRyaW5rJTIwcmVzdGF1cmFudHxlbnwxfDJ8fHwxNzc3NTU3NjYzfDA&ixlib=rb-4.1.0&q=80&w=400"
                  data-id="fb948c30-4c93-515c-a206-f628d6490bf7"
                />
              </div>
              <CardHeader
                className="p-0 gap-2"
                data-id="e2775b3d-707c-5bdb-ae31-56fca7d3f0ce"
              >
                <div
                  className="flex justify-between items-start gap-2"
                  data-id="d699fd9b-09b4-5a25-bccd-312d7b05a256"
                >
                  <h3
                    className="font-medium text-lg leading-7"
                    style={{ color: "#1F1B16" }}
                    data-id="d6330916-7f20-515d-afbe-e90c76f9bb2a"
                  >
                    Citrus Garden Spritz
                  </h3>
                  <span
                    className="font-medium text-lg leading-7"
                    style={{ color: "#C4714F" }}
                    data-id="63597f03-1042-598c-ba3f-5eeeaecbde30"
                  >
                    $11
                  </span>
                </div>
                <p
                  className="leading-relaxed text-sm leading-5"
                  style={{ color: "#5C5247" }}
                  data-id="c97cede3-66d6-50f0-882d-40c3bf39d49c"
                >
                  House-infused gin with elderflower, fresh meyer lemon, garden
                  basil, and a kiss of sparkling prosecco.
                </p>
              </CardHeader>
              <CardFooter
                className="p-0 gap-2"
                data-id="5f238f84-c539-5251-9ca6-02813adf93ce"
              >
                <Badge
                  className="font-normal rounded-full border-black/1 border-0 border-solid"
                  style={{ backgroundColor: "#E6F0EA", color: "#2D6A4F" }}
                  data-id="2eb1765a-6ce0-5378-b84a-c2895e9cccbd"
                >
                  Vegan
                </Badge>
                <Badge
                  className="font-normal rounded-full border-black/1 border-0 border-solid"
                  style={{ backgroundColor: "#F5E9E2", color: "#C4714F" }}
                  data-id="37284162-3620-51c1-8c8c-55e7327c1a1d"
                >
                  Gluten-Free
                </Badge>
              </CardFooter>
            </Card>
          </section>
          <section
            className="mt-12"
            data-id="561d237e-fd92-57af-a2a8-dd0adbfdeeb2"
          >
            <Card
              className="border-black/1 border-0 border-solid p-6 flex-row items-start gap-4"
              style={{ backgroundColor: "#E8E2DC" }}
              data-id="aacb9c20-9f53-5021-8f60-0f4a49bc8b45"
            >
              <div
                className="size-10 shrink-0 rounded-lg flex justify-center items-center"
                style={{ backgroundColor: "#FAF7F4" }}
                data-id="bb7f37ea-b34c-57de-93dc-3807a20f7f12"
              >
                <Code2
                  className="size-5"
                  style={{ color: "#2D6A4F" }}
                  data-id="329d1939-a928-5e12-bb5b-bf31aa24e494"
                />
              </div>
              <div
                className="flex flex-col gap-1"
                data-id="99b66912-38f2-500d-acc2-ad14c2dce8c8"
              >
                <p
                  className="font-medium text-sm leading-5"
                  style={{ color: "#1F1B16" }}
                  data-id="689dd468-b4ae-533d-b2c5-2018aad03f9e"
                >
                  Developer note · SEO
                </p>
                <p
                  className="text-sm leading-5"
                  style={{ color: "#5C5247" }}
                  data-id="1456f934-526b-5a6c-ba51-1b1c9318714e"
                >
                  Product schema markup applied to all menu items for SEO. Each
                  MenuItem renders structured data (name, description, image,
                  offers.price, suitableForDiet) via Headless Payload CMS.
                </p>
              </div>
            </Card>
          </section>
        </main>
      </main>
    </>
  );
}

import { useState } from "react";
import { usePageMeta } from "@/hooks/usePageMeta";
import { useCms, type PayloadList, type MenuItemDoc } from "@/hooks/useCms";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import {
  CalendarCheck,
  Code2,
  Leaf,
  MessageCircle,
  Music2,
} from "lucide-react";
import { Card, CardHeader, CardFooter } from "@/components/ui/card";

const TAG_STYLES: Record<string, { bg: string; color: string; label: string }> = {
  vegetarian: { bg: "#E6F0EA", color: "#2D6A4F", label: "Vegetarian" },
  vegan: { bg: "#E6F0EA", color: "#2D6A4F", label: "Vegan" },
  "gluten-free": { bg: "#F5E9E2", color: "#C4714F", label: "Gluten-Free" },
  spicy: { bg: "#FBE6E0", color: "#A33A1F", label: "Spicy" },
  signature: { bg: "#1F1B17", color: "#FAF7F4", label: "Signature" },
};

function MenuItemCard({ item }: { item: MenuItemDoc }) {
  const img = item.imageUrl || item.image?.url;
  const price =
    typeof item.price === "number"
      ? new Intl.NumberFormat(undefined, {
          style: "currency",
          currency: item.currency || "MYR",
          maximumFractionDigits: 0,
        }).format(item.price)
      : null;
  return (
    <Card
      className="shadow-none border-black/1 border-0 border-solid p-4 gap-4"
      style={{ backgroundColor: "#FFFFFF" }}
    >
      <div className="aspect-square rounded-xl overflow-hidden" style={{ backgroundColor: "#E8E2DC" }}>
        {img && (
          <img
            alt={item.name}
            className="object-cover w-full h-full"
            src={img}
            loading="lazy"
          />
        )}
      </div>
      <CardHeader className="p-0 gap-2">
        <div className="flex justify-between items-start gap-2">
          <h3 className="font-medium text-lg leading-7" style={{ color: "#1F1B16" }}>
            {item.name}
          </h3>
          {price && (
            <span className="font-medium text-lg leading-7" style={{ color: "#C4714F" }}>
              {price}
            </span>
          )}
        </div>
        {item.description && (
          <p className="leading-relaxed text-sm leading-5" style={{ color: "#5C5247" }}>
            {item.description}
          </p>
        )}
      </CardHeader>
      {item.tags && item.tags.length > 0 && (
        <CardFooter className="p-0 gap-2 flex-wrap">
          {item.tags.map((t) => {
            const style = TAG_STYLES[t] || { bg: "#1F1B17/8", color: "#1F1B17", label: t };
            return (
              <Badge
                key={t}
                className="font-normal rounded-full border-black/1 border-0 border-solid"
                style={{ backgroundColor: style.bg, color: style.color }}
              >
                {style.label}
              </Badge>
            );
          })}
        </CardFooter>
      )}
    </Card>
  );
}

const CATEGORIES: Array<{ value: MenuItemDoc["category"] | "all"; label: string }> = [
  { value: "all", label: "All" },
  { value: "starters", label: "Starters" },
  { value: "mains", label: "Mains" },
  { value: "desserts", label: "Desserts" },
  { value: "drinks", label: "Drinks" },
  { value: "tasting", label: "Tasting" },
];

export default function MenuPage() {
  usePageMeta({
    title: "Menu — Seasonal plates, modern technique",
    description: "Seasonal plates with modern technique — dishes designed to surprise and reward.",
    canonical: "https://flowstep.gaiada.online/menu",
  });
  const { data, loading, error } = useCms<PayloadList<MenuItemDoc>>(
    "/api/menu-items?limit=200&where[available][equals]=true&sort=category",
  );
  const allItems = data?.docs ?? [];
  const [active, setActive] = useState<string>("all");
  const visible = active === "all" ? allItems : allItems.filter((i) => i.category === active);
  return (
    <>
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
            value={active}
            onValueChange={setActive}
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
            {loading && (
              <div className="col-span-3 text-center text-sm text-[#1F1B17]/50 py-12">
                Loading menu…
              </div>
            )}
            {error && (
              <div className="col-span-3 text-center text-sm text-red-600 py-12">
                Could not load menu. Please refresh.
              </div>
            )}
            {!loading && !error && visible.length === 0 && (
              <div className="col-span-3 text-center text-sm text-[#1F1B17]/50 py-12">
                Nothing in this section yet.
              </div>
            )}
            {visible.map((item) => (
              <MenuItemCard key={item.id} item={item} />
            ))}
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
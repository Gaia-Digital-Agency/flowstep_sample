import type { CollectionConfig } from "payload/types";

export const FAQs: CollectionConfig = {
  slug: "faqs",
  admin: {
    useAsTitle: "question",
    defaultColumns: ["question", "category", "order", "updatedAt"],
  },
  access: {
    read: () => true,
    create: ({ req: { user } }) => Boolean(user),
    update: ({ req: { user } }) => Boolean(user),
    delete: ({ req: { user } }) => Boolean(user),
  },
  fields: [
    { name: "question", type: "text", required: true },
    { name: "answer", type: "richText", required: true },
    {
      name: "category",
      type: "select",
      defaultValue: "general",
      options: [
        { label: "General", value: "general" },
        { label: "Reservations", value: "reservations" },
        { label: "Menu", value: "menu" },
        { label: "Events", value: "events" },
      ],
    },
    { name: "order", type: "number", defaultValue: 0 },
  ],
};

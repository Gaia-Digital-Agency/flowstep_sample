import type { CollectionConfig } from "payload/types";

export const Branches: CollectionConfig = {
  slug: "branches",
  admin: {
    useAsTitle: "name",
    defaultColumns: ["name", "city", "phone", "updatedAt"],
  },
  access: {
    read: () => true,
    create: ({ req: { user } }) => Boolean(user),
    update: ({ req: { user } }) => Boolean(user),
    delete: ({ req: { user } }) => Boolean(user),
  },
  fields: [
    { name: "name", type: "text", required: true },
    { name: "slug", type: "text", required: true, unique: true },
    { name: "tagline", type: "text" },
    { name: "address", type: "textarea", required: true },
    { name: "city", type: "text" },
    { name: "phone", type: "text" },
    { name: "hours", type: "text", admin: { description: "e.g. Tue–Sun · 12:00 – 23:00" } },
    {
      name: "coordinates",
      type: "group",
      fields: [
        { name: "lat", type: "number" },
        { name: "lng", type: "number" },
      ],
    },
    { name: "image", type: "upload", relationTo: "media" },
    { name: "gallery", type: "array", fields: [{ name: "image", type: "upload", relationTo: "media", required: true }] },
    { name: "description", type: "richText" },
  ],
};

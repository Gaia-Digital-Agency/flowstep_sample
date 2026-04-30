import type { CollectionConfig } from "payload/types";

export const MenuItems: CollectionConfig = {
  slug: "menu-items",
  admin: {
    useAsTitle: "name",
    defaultColumns: ["name", "category", "price", "updatedAt"],
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
    {
      name: "category",
      type: "select",
      required: true,
      options: [
        { label: "Starters", value: "starters" },
        { label: "Mains", value: "mains" },
        { label: "Desserts", value: "desserts" },
        { label: "Drinks", value: "drinks" },
        { label: "Tasting Menu", value: "tasting" },
      ],
    },
    { name: "description", type: "textarea" },
    { name: "price", type: "number", admin: { description: "In MYR; leave blank for tasting menus" } },
    { name: "currency", type: "text", defaultValue: "MYR" },
    { name: "image", type: "upload", relationTo: "media" },
    {
      name: "imageUrl",
      type: "text",
      admin: { description: "External image URL — used when no Media upload is set." },
    },
    {
      name: "tags",
      type: "select",
      hasMany: true,
      options: [
        { label: "Vegetarian", value: "vegetarian" },
        { label: "Vegan", value: "vegan" },
        { label: "Gluten-free", value: "gluten-free" },
        { label: "Spicy", value: "spicy" },
        { label: "Signature", value: "signature" },
      ],
    },
    { name: "available", type: "checkbox", defaultValue: true },
  ],
};

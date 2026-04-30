import type { CollectionConfig } from "payload/types";

export const ContactSubmissions: CollectionConfig = {
  slug: "contact-submissions",
  admin: {
    useAsTitle: "email",
    defaultColumns: ["email", "name", "read", "createdAt"],
    description: "Inbound contact-form submissions. Created via /api/contact.",
  },
  access: {
    read: ({ req: { user } }) => Boolean(user),
    // Created server-side via the public /api/contact endpoint, which runs
    // as the system (no req.user). Block direct creation by clients.
    create: () => false,
    update: ({ req: { user } }) => Boolean(user),
    delete: ({ req: { user } }) => Boolean(user),
  },
  fields: [
    { name: "name", type: "text", required: true },
    { name: "email", type: "email", required: true, index: true },
    { name: "phone", type: "text" },
    { name: "message", type: "textarea", required: true },
    { name: "read", type: "checkbox", defaultValue: false },
    { name: "ip", type: "text", admin: { readOnly: true } },
    { name: "userAgent", type: "text", admin: { readOnly: true } },
  ],
  timestamps: true,
};

import path from "path";
import { fileURLToPath } from "url";
import { buildConfig } from "payload/config";
import { postgresAdapter } from "@payloadcms/db-postgres";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { webpackBundler } from "@payloadcms/bundler-webpack";

import { Users } from "./collections/Users";
import { Media } from "./collections/Media";
import { Pages } from "./collections/Pages";
import { Branches } from "./collections/Branches";
import { MenuItems } from "./collections/MenuItems";
import { FAQs } from "./collections/FAQs";
import { ContactSubmissions } from "./collections/ContactSubmissions";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default buildConfig({
  serverURL: process.env.PUBLIC_SERVER_URL || "http://localhost:3030",
  admin: {
    user: Users.slug,
    bundler: webpackBundler(),
    meta: {
      titleSuffix: " — Flowstep CMS",
      favicon: "/favicon.svg",
    },
  },
  editor: lexicalEditor({}),
  collections: [
    Users,
    Media,
    Pages,
    Branches,
    MenuItems,
    FAQs,
    ContactSubmissions,
  ],
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI,
    },
  }),
  cors: [
    "http://localhost:5173",
    "http://localhost:4173",
    "https://flowstep.gaiada.online",
  ],
  csrf: [
    "http://localhost:5173",
    "http://localhost:4173",
    "https://flowstep.gaiada.online",
  ],
  typescript: {
    outputFile: path.resolve(__dirname, "payload-types.ts"),
  },
  upload: {
    limits: { fileSize: 5_000_000 },
  },
});

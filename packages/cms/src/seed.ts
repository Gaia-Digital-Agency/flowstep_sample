import "dotenv/config";
import payload from "payload";

async function main() {
  if (!process.env.PAYLOAD_SECRET || !process.env.DATABASE_URI) {
    throw new Error("PAYLOAD_SECRET and DATABASE_URI must be set before seeding");
  }

  await payload.init({
    secret: process.env.PAYLOAD_SECRET,
    local: true,
  });

  const adminEmail = process.env.INITIAL_ADMIN_EMAIL || "super_admin@email.com";
  const adminPassword = process.env.INITIAL_ADMIN_PASSWORD || "Teameditor@123";

  // 1. Initial admin user
  const existing = await payload.find({
    collection: "users",
    where: { email: { equals: adminEmail } },
    limit: 1,
  });
  if (existing.totalDocs === 0) {
    await payload.create({
      collection: "users",
      data: {
        email: adminEmail,
        password: adminPassword,
        name: "Super Admin",
      },
    });
    payload.logger.info(`Created admin user: ${adminEmail}`);
  } else {
    payload.logger.info(`Admin user already exists: ${adminEmail}`);
  }

  // 2. Branches (Branch 1/2/3 per brief)
  const BRANCHES = [
    {
      slug: "branch-1",
      name: "Branch 1 — Heritage House",
      tagline: "Our flagship — a restored colonial townhouse with garden seating.",
      address: "12 Jalan Heritage, Bukit Bintang",
      city: "Kuala Lumpur",
      phone: "+60 3 2148 0001",
      hours: "Tue–Sun · 12:00 – 23:00",
    },
    {
      slug: "branch-2",
      name: "Branch 2 — Coastline",
      tagline: "Open-air dining with sea views and a wood-fired hearth.",
      address: "Pantai Cenang Boardwalk",
      city: "Langkawi",
      phone: "+60 4 955 0002",
      hours: "Daily · 16:00 – 24:00",
    },
    {
      slug: "branch-3",
      name: "Branch 3 — Highlands",
      tagline: "A mountain retreat with seasonal tasting menus.",
      address: "Genting Highlands Resort",
      city: "Pahang",
      phone: "+60 3 6101 0003",
      hours: "Wed–Sun · 17:00 – 23:00",
    },
  ];
  for (const b of BRANCHES) {
    const found = await payload.find({
      collection: "branches",
      where: { slug: { equals: b.slug } },
      limit: 1,
    });
    if (found.totalDocs === 0) {
      await payload.create({ collection: "branches", data: b });
      payload.logger.info(`Seeded branch: ${b.slug}`);
    }
  }

  // 3. FAQs
  const FAQS = [
    { question: "Do you accept walk-ins?", answer: "Yes, walk-ins are welcome — but we strongly recommend reserving for weekend evenings.", category: "reservations", order: 1 },
    { question: "Is there a dress code?", answer: "Smart casual. We ask that guests avoid beachwear and athletic apparel for evening service.", category: "general", order: 2 },
    { question: "Can you accommodate dietary restrictions?", answer: "Absolutely. Our kitchen handles vegetarian, vegan, gluten-free, and most allergen-aware requests with 24 hours' notice.", category: "menu", order: 3 },
    { question: "Do you host private events?", answer: "Yes — each branch has private dining rooms for 8–40 guests. Get in touch via the contact form.", category: "events", order: 4 },
  ];
  for (const f of FAQS) {
    const found = await payload.find({
      collection: "faqs",
      where: { question: { equals: f.question } },
      limit: 1,
    });
    if (found.totalDocs === 0) {
      await payload.create({
        collection: "faqs",
        data: {
          ...f,
          answer: {
            root: {
              type: "root",
              format: "",
              indent: 0,
              version: 1,
              direction: "ltr",
              children: [
                {
                  type: "paragraph",
                  format: "",
                  indent: 0,
                  version: 1,
                  direction: "ltr",
                  children: [{ type: "text", text: f.answer, version: 1, format: 0, mode: "normal", style: "", detail: 0 }],
                },
              ],
            },
          },
        },
      });
      payload.logger.info(`Seeded FAQ: ${f.question.slice(0, 40)}…`);
    }
  }

  payload.logger.info("Seed complete.");
  process.exit(0);
}

main().catch((err) => {
  // eslint-disable-next-line no-console
  console.error("Seed failed:", err);
  process.exit(1);
});

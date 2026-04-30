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
      imageUrl:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1600&q=80&auto=format",
    },
    {
      slug: "branch-2",
      name: "Branch 2 — Coastline",
      tagline: "Open-air dining with sea views and a wood-fired hearth.",
      address: "Pantai Cenang Boardwalk",
      city: "Langkawi",
      phone: "+60 4 955 0002",
      hours: "Daily · 16:00 – 24:00",
      imageUrl:
        "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=1600&q=80&auto=format",
    },
    {
      slug: "branch-3",
      name: "Branch 3 — Highlands",
      tagline: "A mountain retreat with seasonal tasting menus.",
      address: "Genting Highlands Resort",
      city: "Pahang",
      phone: "+60 3 6101 0003",
      hours: "Wed–Sun · 17:00 – 23:00",
      imageUrl:
        "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1600&q=80&auto=format",
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
    } else {
      // Always refresh imageUrl so existing rows pick up the new field
      await payload.update({
        collection: "branches",
        id: found.docs[0].id,
        data: { imageUrl: b.imageUrl },
      });
    }
  }

  // 2b. Menu items
  const MENU_ITEMS: Array<{
    slug: string;
    name: string;
    category: "starters" | "mains" | "desserts" | "drinks" | "tasting";
    description: string;
    price: number;
    currency: string;
    tags: string[];
    imageUrl: string;
  }> = [
    {
      slug: "heirloom-carpaccio",
      name: "Heirloom Carpaccio",
      category: "starters",
      description:
        "Thinly sliced heirloom tomatoes, basil oil, aged balsamic, and crumbled feta on toasted sourdough.",
      price: 38,
      currency: "MYR",
      tags: ["vegetarian", "signature"],
      imageUrl:
        "https://images.unsplash.com/photo-1574031491550-35f444917508?w=600&q=80&auto=format",
    },
    {
      slug: "charred-eggplant",
      name: "Charred Eggplant",
      category: "starters",
      description:
        "Wood-fired eggplant, tahini, pomegranate molasses, toasted pine nuts.",
      price: 32,
      currency: "MYR",
      tags: ["vegan", "gluten-free"],
      imageUrl:
        "https://images.unsplash.com/photo-1604908554049-15768cd8b56a?w=600&q=80&auto=format",
    },
    {
      slug: "slow-cooked-lamb",
      name: "Slow-Cooked Lamb Shoulder",
      category: "mains",
      description:
        "Eight-hour braise, smoked aubergine purée, charred greens, jus.",
      price: 92,
      currency: "MYR",
      tags: ["signature"],
      imageUrl:
        "https://images.unsplash.com/photo-1544025162-d76694265947?w=600&q=80&auto=format",
    },
    {
      slug: "chargrilled-snapper",
      name: "Chargrilled Snapper",
      category: "mains",
      description:
        "Whole-fish presentation, lemongrass, calamansi butter, jasmine rice.",
      price: 78,
      currency: "MYR",
      tags: ["gluten-free"],
      imageUrl:
        "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=600&q=80&auto=format",
    },
    {
      slug: "garden-risotto",
      name: "Garden Risotto",
      category: "mains",
      description:
        "Carnaroli rice, seasonal vegetables, aged parmesan, brown-butter crumb.",
      price: 64,
      currency: "MYR",
      tags: ["vegetarian"],
      imageUrl:
        "https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=600&q=80&auto=format",
    },
    {
      slug: "burnt-honey-cheesecake",
      name: "Burnt Honey Cheesecake",
      category: "desserts",
      description:
        "Basque-style cheesecake, scorched honey caramel, sea salt.",
      price: 32,
      currency: "MYR",
      tags: ["signature"],
      imageUrl:
        "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?w=600&q=80&auto=format",
    },
    {
      slug: "dark-chocolate-tart",
      name: "Dark Chocolate Tart",
      category: "desserts",
      description: "70% dark chocolate ganache, hazelnut praline, crème fraîche.",
      price: 28,
      currency: "MYR",
      tags: ["vegetarian"],
      imageUrl:
        "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=600&q=80&auto=format",
    },
    {
      slug: "smoked-old-fashioned",
      name: "Smoked Old Fashioned",
      category: "drinks",
      description:
        "Cherrywood-smoked bourbon, demerara, orange peel.",
      price: 48,
      currency: "MYR",
      tags: ["signature"],
      imageUrl:
        "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=600&q=80&auto=format",
    },
    {
      slug: "garden-spritz",
      name: "Garden Spritz",
      category: "drinks",
      description:
        "Cucumber, elderflower, basil, prosecco — light, herbaceous, dry.",
      price: 38,
      currency: "MYR",
      tags: ["vegan"],
      imageUrl:
        "https://images.unsplash.com/photo-1547595628-c61a29f496f0?w=600&q=80&auto=format",
    },
    {
      slug: "tasting-menu-7",
      name: "Seven-Course Tasting Menu",
      category: "tasting",
      description:
        "Chef's selection of seven seasonal courses. Available evenings only — book ahead.",
      price: 320,
      currency: "MYR",
      tags: ["signature"],
      imageUrl:
        "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=600&q=80&auto=format",
    },
  ];
  for (const m of MENU_ITEMS) {
    const found = await payload.find({
      collection: "menu-items",
      where: { slug: { equals: m.slug } },
      limit: 1,
    });
    if (found.totalDocs === 0) {
      await payload.create({
        collection: "menu-items",
        data: { ...m, available: true },
      });
      payload.logger.info(`Seeded menu item: ${m.slug}`);
    } else {
      await payload.update({
        collection: "menu-items",
        id: found.docs[0].id,
        data: { ...m, available: true },
      });
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

// One-shot helper: read each Figma export App.tsx, strip the wrapper/header/footer,
// and emit packages/web/src/routes/<Name>Page.tsx wired to react-router + react-helmet-async.
// After this runs once, the routes are hand-edited going forward.
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const repo = resolve(__dirname, "..");

const PAGES = [
  { dir: "Home Page",     name: "HomePage",     title: "Gaia AI — Energetic dining, polished service",                  desc: "Gaia AI is a luxury dining concept blending bold flavour with polished hospitality." },
  { dir: "About Page",    name: "AboutPage",    title: "About Gaia AI — Our story, our craft",                          desc: "How Gaia AI grew from a single kitchen into a polished, multi-branch dining experience." },
  { dir: "Services Page", name: "ServicesPage", title: "Services — Private dining, events, and bespoke menus",          desc: "Private rooms, events, and bespoke menus tailored for travellers and locals alike." },
  { dir: "Branches Page", name: "BranchesPage", title: "Our Branches — Three locations, one Gaia AI",                   desc: "Find Gaia AI across three signature branches, each with its own character and view." },
  { dir: "Menu Page",     name: "MenuPage",     title: "Menu — Seasonal plates, modern technique",                      desc: "Seasonal plates with modern technique — dishes designed to surprise and reward." },
  { dir: "Contact Page",  name: "ContactPage",  title: "Contact — Reservations, enquiries, and visits",                 desc: "Reserve a table, send an enquiry, or visit one of our three branches." },
];

function extract(srcPath) {
  const txt = readFileSync(srcPath, "utf8");
  const lines = txt.split("\n");

  // Capture lucide-react icon import block (multi-line { ... } from "lucide-react";)
  const lucideStart = lines.findIndex((l) => l.startsWith('import {') && (l.includes('"lucide-react"') || lines.slice(0, 20).some(x => false)));
  let lucideImport = "";
  // Simpler: find the lucide-react line range
  const luStart = lines.findIndex((l) => /^import \{/.test(l) && /from\s+"lucide-react"/.test(lines.slice(lines.indexOf(l), lines.indexOf(l) + 30).join("\n")));
  if (luStart >= 0) {
    let end = luStart;
    while (end < lines.length && !lines[end].includes("from \"lucide-react\"")) end++;
    lucideImport = lines.slice(luStart, end + 1).join("\n");
  }

  // Find the page body: after line containing `</header>` until the line containing `<footer`
  const headerEnd = lines.findIndex((l) => /<\/header>/.test(l));
  const footerStart = lines.findIndex((l, i) => i > headerEnd && /<footer/.test(l));
  if (headerEnd < 0 || footerStart < 0) {
    throw new Error("could not locate header/footer markers in " + srcPath);
  }
  const body = lines.slice(headerEnd + 1, footerStart).join("\n");

  // Detect which Card sub-imports the body uses
  const cardImports = new Set(["Card"]);
  if (/\bCardContent\b/.test(body)) cardImports.add("CardContent");
  if (/\bCardHeader\b/.test(body)) cardImports.add("CardHeader");
  if (/\bCardTitle\b/.test(body)) cardImports.add("CardTitle");
  if (/\bCardDescription\b/.test(body)) cardImports.add("CardDescription");
  if (/\bCardFooter\b/.test(body)) cardImports.add("CardFooter");
  const cardLine = `import { ${[...cardImports].join(", ")} } from "@/components/ui/card";`;

  const usesButton = /\bButton\b/.test(body);
  const usesFallback = /\bFallbackComponent\b/.test(body);

  return { lucideImport, body, cardLine, usesButton, usesFallback };
}

for (const page of PAGES) {
  const src = resolve(repo, "references/figma-exports", page.dir, "src/App.tsx");
  const { lucideImport, body, cardLine, usesButton, usesFallback } = extract(src);

  const out = `import { Helmet } from "react-helmet-async";
${lucideImport}
${usesButton ? 'import { Button } from "@/components/ui/button";\n' : ""}${cardLine}
${usesFallback ? 'import { FallbackComponent } from "@/CustomComponents";\n' : ""}
export default function ${page.name}() {
  return (
    <>
      <Helmet>
        <title>${page.title}</title>
        <meta name="description" content="${page.desc}" />
        <link rel="canonical" href="https://flowstep.gaiada.online${page.name === "HomePage" ? "/" : "/" + page.name.replace(/Page$/, "").toLowerCase()}" />
      </Helmet>
      <main>
${body}
      </main>
    </>
  );
}
`;

  const outPath = resolve(repo, "packages/web/src/routes", `${page.name}.tsx`);
  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, out, "utf8");
  console.log("wrote", outPath, "(" + out.split("\n").length + " lines)");
}

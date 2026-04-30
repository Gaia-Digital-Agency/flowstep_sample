import { useEffect } from "react";

interface PageMeta {
  title: string;
  description?: string;
  canonical?: string;
  noindex?: boolean;
  jsonLd?: object;
}

function setMeta(name: string, attr: "name" | "property", content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${name}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setLink(rel: string, href: string) {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.rel = rel;
    document.head.appendChild(el);
  }
  el.href = href;
}

const JSON_LD_ID = "flowstep-page-jsonld";

export function usePageMeta({
  title,
  description,
  canonical,
  noindex,
  jsonLd,
}: PageMeta) {
  useEffect(() => {
    document.title = title;
    if (description) {
      setMeta("description", "name", description);
      setMeta("og:title", "property", title);
      setMeta("og:description", "property", description);
      setMeta("og:type", "property", "website");
      setMeta("twitter:card", "name", "summary_large_image");
    }
    if (canonical) setLink("canonical", canonical);
    if (noindex) setMeta("robots", "name", "noindex");
    else setMeta("robots", "name", "index,follow");

    // JSON-LD: replace any existing flowstep block on this page
    document.getElementById(JSON_LD_ID)?.remove();
    if (jsonLd) {
      const script = document.createElement("script");
      script.id = JSON_LD_ID;
      script.type = "application/ld+json";
      script.text = JSON.stringify(jsonLd);
      document.head.appendChild(script);
    }

    return () => {
      // Leave title/meta in place — next page will overwrite. Only clean up JSON-LD.
      document.getElementById(JSON_LD_ID)?.remove();
    };
  }, [title, description, canonical, noindex, jsonLd]);
}

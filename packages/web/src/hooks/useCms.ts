import { useEffect, useState } from "react";

interface State<T> {
  data: T | null;
  error: Error | null;
  loading: boolean;
}

const cache = new Map<string, unknown>();
const inflight = new Map<string, Promise<unknown>>();

async function fetchOnce<T>(url: string): Promise<T> {
  if (inflight.has(url)) return inflight.get(url) as Promise<T>;
  const p = fetch(url, { credentials: "same-origin" })
    .then(async (res) => {
      if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
      const json = (await res.json()) as T;
      cache.set(url, json);
      return json;
    })
    .finally(() => inflight.delete(url));
  inflight.set(url, p);
  return p as Promise<T>;
}

/**
 * Tiny SWR-style hook against Payload's REST API.
 * Returns cached data immediately if available; refetches in background.
 */
export function useCms<T>(url: string | null): State<T> {
  const [state, setState] = useState<State<T>>(() => ({
    data: (url && (cache.get(url) as T)) || null,
    error: null,
    loading: !!url && !cache.has(url),
  }));

  useEffect(() => {
    if (!url) return;
    let cancelled = false;
    setState((s) => ({
      data: (cache.get(url) as T) ?? s.data,
      error: null,
      loading: !cache.has(url),
    }));
    fetchOnce<T>(url)
      .then((data) => {
        if (!cancelled) setState({ data, error: null, loading: false });
      })
      .catch((error: Error) => {
        if (!cancelled) setState((s) => ({ ...s, error, loading: false }));
      });
    return () => {
      cancelled = true;
    };
  }, [url]);

  return state;
}

// Payload REST list response shape.
export interface PayloadList<T> {
  docs: T[];
  totalDocs: number;
  totalPages: number;
  page: number;
}

// Domain types — keep loose; Payload returns lots of metadata fields.
export interface BranchDoc {
  id: number;
  name: string;
  slug: string;
  tagline?: string;
  address: string;
  city?: string;
  phone?: string;
  hours?: string;
  imageUrl?: string;
  image?: { url?: string };
  description?: unknown;
  coordinates?: { lat?: number; lng?: number };
}

export interface MenuItemDoc {
  id: number;
  name: string;
  slug: string;
  category: "starters" | "mains" | "desserts" | "drinks" | "tasting";
  description?: string;
  price?: number;
  currency?: string;
  imageUrl?: string;
  image?: { url?: string };
  tags?: string[];
  available?: boolean;
}

export interface FaqDoc {
  id: number;
  question: string;
  answer: { root: { children: Array<{ children?: Array<{ text?: string }> }> } };
  category?: string;
  order?: number;
}

export function richTextToPlain(rt: FaqDoc["answer"]): string {
  try {
    return rt.root.children
      .map((p) => (p.children || []).map((c) => c.text || "").join(""))
      .join("\n\n");
  } catch {
    return "";
  }
}

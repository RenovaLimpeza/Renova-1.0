import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  return [
    { url: `${base}/`, changeFrequency: "monthly", priority: 1.0 },
    { url: `${base}/#about`, changeFrequency: "yearly", priority: 0.8 },
    { url: `${base}/#services`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/#mentoria`, changeFrequency: "yearly", priority: 0.6 },
    { url: `${base}/#contato`, changeFrequency: "yearly", priority: 0.5 },
  ];
}


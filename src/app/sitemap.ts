import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const envBase = process.env.NEXT_PUBLIC_SITE_URL || "https://renovalimpezams.com.br";
  const base = envBase.replace(/\/+$/, "");
  return [
    { url: `${base}/`, changeFrequency: "monthly", priority: 1.0 },
  ];
}


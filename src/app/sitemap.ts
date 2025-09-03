import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const envBase = process.env.NEXT_PUBLIC_SITE_URL || "https://renovalimpezams.com.br";
  const base = envBase.replace(/\/+$/, "");
  return [
    { url: `${base}/`, changeFrequency: "monthly", priority: 1.0 },
    { url: `${base}/limpeza-pos-obra`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/limpeza-de-pisos`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/limpeza-de-vidros`, changeFrequency: "monthly", priority: 0.9 },
  ];
}


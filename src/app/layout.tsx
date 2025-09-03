import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Navbar, NavLink } from "@/components";

const SITE_URL =
  (process.env.NEXT_PUBLIC_SITE_URL || "https://renovalimpezams.com.br").replace(/\/+$/, "");


const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

// Navigation (includes service landing pages)
const NEW_SITE_NAV_LINKS: NavLink[] = [
  { href: "#about", label: "Sobre nós" },
  {
    href: "/#services",
    label: "Serviços",
    children: [
      { href: "/limpeza-pos-obra", label: "Limpeza Pós-Obra" },
      { href: "/limpeza-de-pisos", label: "Limpeza de Pisos" },
      { href: "/limpeza-de-vidros", label: "Limpeza de Vidros" },
    ],
  },
  { href: "#mentoria", label: "Mentoria" },
  { href: "#contato", label: "Contato" },
];

const NEW_SITE_CTA_LINK: NavLink = { href: "#orcamento", label: "Orçamento" };
const siteNavLinks: NavLink[] = [
  { href: "#about", label: "Sobre nós" },
  { href: "#services", label: "Serviços" },
  { href: "/limpeza-pos-obra", label: "Pós-Obra" },
  { href: "/limpeza-de-pisos", label: "Pisos" },
  { href: "/limpeza-de-vidros", label: "Vidros" },
  { href: "#mentoria", label: "Mentoria" },
  { href: "#contato", label: "Contato" },
];

const siteCtaLink: NavLink = { href: "#orcamento", label: "Orçamento" };

const navLinks: NavLink[] = [
  { href: "#about", label: "Sobre nós" },
  { href: "#services", label: "Serviços" },
  { href: "#mentoria", label: "Mentoria" },
  { href: "#contato", label: "Contato" },
];

const ctaLink: NavLink = { href: "#orcamento", label: "Orçamento" };

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://www.renovalimpezams.com.br"),
  title: {
    default: "Empresa de Limpeza Profissional – Pós-Obra, Vidros e Pisos | Renova",
    template: "%s | Renova",
  },
  description:
    "Empresa de limpeza profissional especializada em limpeza pós-obra, limpeza de vidros e limpeza de pisos. Qualidade, pontualidade e atenção aos detalhes.",
  alternates: { canonical: `${SITE_URL}/` },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: `${SITE_URL}/`,
    siteName: "Renova",
    title: "Empresa de Limpeza Profissional – Pós-Obra, Vidros e Pisos | Renova",
    description:
      "Empresa de limpeza profissional: limpeza pós-obra, limpeza de vidros e limpeza de pisos com alto padrão.",
    images: [{ url: `${SITE_URL}/renova.png`, width: 1200, height: 630, alt: "Renova - Serviços de Limpeza" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Empresa de Limpeza Profissional – Pós-Obra, Vidros e Pisos | Renova",
    description:
      "Limpeza pós-obra, limpeza de vidros e limpeza de pisos. Solicite orçamento pelo WhatsApp.",
    images: [`${SITE_URL}/renova.png`],
  },
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/logo-menor.png", sizes: "192x192", type: "image/png" },
      { url: "/renova.png", sizes: "512x512", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <head>
        <meta charSet="utf-8" />
      </head>
      <body className={`${poppins.variable} antialiased`}>
        <Navbar links={NEW_SITE_NAV_LINKS} cta={NEW_SITE_CTA_LINK} />
        {children}

        {/* JSON-LD: LocalBusiness + CleaningService */}
        {(() => {
          const envBase = process.env.NEXT_PUBLIC_SITE_URL || "https://renovalimpezams.com.br";
          const base = envBase.replace(/\/+$/, "");
          const json = {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "additionalType": "https://schema.org/CleaningService",
            "name": "Renova",
            "url": `${base}/`,
            "description": "Empresa de limpeza profissional especializada em Pós-Obra, Vidros e Pisos.",
            "image": [`${base}/renova.png`],
            "sameAs": [
              "https://www.instagram.com/renovapisos.cg/",
              "https://web.facebook.com/renova.piso.127"
            ],
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "BR",
              "addressLocality": "Campo Grande",
              "addressRegion": "MS"
            },
            "areaServed": "Campo Grande - MS, Brasil",
            "telephone": "+5567996218497",
            "openingHoursSpecification": [
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                "opens": "08:00",
                "closes": "18:00"
              },
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Saturday"],
                "opens": "08:00",
                "closes": "12:00"
              }
            ],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Serviços de limpeza",
              "itemListElement": [
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Limpeza Pós-Obra" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Limpeza de Vidros" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Limpeza de Pisos" } }
              ]
            }
          };
          return (
            <script
              id="ld-json-business"
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
            />
          );
        })()}
        
        {/* JSON-LD: WebSite */}
        {(() => {
          const envBase = process.env.NEXT_PUBLIC_SITE_URL || "https://renovalimpezams.com.br";
          const base = envBase.replace(/\/+$/, "");
          const json = {
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Renova",
            url: `${base}/`,
            potentialAction: {
              "@type": "SearchAction",
              target: `${base}/?q={search_term_string}`,
              "query-input": "required name=search_term_string",
            },
          };
          return (
            <script
              id="ld-json-website"
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
            />
          );
        })()}

        {/* JSON-LD: Organization */}
        {(() => {
          const envBase = process.env.NEXT_PUBLIC_SITE_URL || "https://renovalimpezams.com.br";
          const base = envBase.replace(/\/+$/, "");
          const json = {
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Renova",
            url: `${base}/`,
            logo: `${base}/renova.png`,
            image: [`${base}/renova.png`],
            sameAs: [
              "https://www.instagram.com/renovapisos.cg/",
              "https://web.facebook.com/renova.piso.127",
            ],
          };
          return (
            <script
              id="ld-json-organization"
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
            />
          );
        })()}
      </body>
    </html>
  );
}

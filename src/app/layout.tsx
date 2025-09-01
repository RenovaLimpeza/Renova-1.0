import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Navbar, NavLink } from "@/components";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const navLinks: NavLink[] = [
  { href: "#about", label: "Sobre nós" },
  { href: "#services", label: "Serviços" },
  { href: "#mentoria", label: "Mentoria" },
  { href: "#contato", label: "Contato" },
];

const ctaLink: NavLink = { href: "#orcamento", label: "Orçamento" };

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title: {
    default: "Empresa de Limpeza Profissional – Pós-Obra, Vidros e Pisos | Renova",
    template: "%s | Renova",
  },
  description:
    "Empresa de limpeza profissional especializada em limpeza pós-obra, limpeza de vidros e limpeza de pisos. Qualidade, pontualidade e atenção aos detalhes.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: "Renova",
    title: "Empresa de Limpeza Profissional – Pós-Obra, Vidros e Pisos | Renova",
    description:
      "Empresa de limpeza profissional: limpeza pós-obra, limpeza de vidros e limpeza de pisos com alto padrão.",
    images: [{ url: "/renova.png", width: 1200, height: 630, alt: "Renova - Serviços de Limpeza" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Empresa de Limpeza Profissional – Pós-Obra, Vidros e Pisos | Renova",
    description:
      "Limpeza pós-obra, limpeza de vidros e limpeza de pisos. Solicite orçamento pelo WhatsApp.",
    images: ["/renova.png"],
  },
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body className={`${poppins.variable} antialiased`}>
        <Navbar links={navLinks} cta={ctaLink} />
        {children}
        {/* JSON-LD: Organização/LocalBusiness básico */}
        <Script
          id="ld-json-org"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "CleaningService",
              name: "Renova",
              url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
              description:
                "Empresa de limpeza profissional: pós-obra, vidros e pisos. Orçamentos rápidos via WhatsApp.",
              image: ["/renova.png"],
              sameAs: [
                "https://www.instagram.com/renovapisos.cg/",
                "https://web.facebook.com/renova.piso.127",
              ],
              address: { "@type": "PostalAddress", addressCountry: "BR" },
              telephone: "+55-67-99621-8497",
              areaServed: { "@type": "AdministrativeArea", name: "Brasil" },
              serviceType: ["Limpeza pós-obra", "Limpeza de vidros", "Limpeza de pisos"],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Serviços de limpeza",
                itemListElement: [
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Limpeza pós-obra" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Limpeza de vidros" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Limpeza de pisos" } },
                ],
              },
            }),
          }}
        />
      </body>
    </html>
  );
}


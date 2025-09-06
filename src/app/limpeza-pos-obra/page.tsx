import type { Metadata } from "next";
import { ServiceHero, RodapeFinal, RodapePrincipal } from "@/components";
import ServiceCards from "@/components/ServiceCards";
import ServiceVideoSection from "@/components/ServiceVideoSection";

const SITE = (process.env.NEXT_PUBLIC_SITE_URL || "https://renovalimpezams.com.br").replace(/\/+$/, "");

export const metadata: Metadata = {
  title: "Limpeza Pós-Obra: Transformamos seu espaço, eliminando todo o resíduo da construção.",
  description:
    "Após a realização de obras ou reformas, garantimos que o seu ambiente fique limpo e organizado. Removemos resíduos, poeira e detritos de construção, deixando o espaço pronto para uso com um acabamento impecável.",
  alternates: { canonical: `${SITE}/limpeza-pos-obra` },
  openGraph: {
    title: "Limpeza Pós-Obra: Transformamos seu espaço, eliminando todo o resíduo da construção.",
    description:
      "Remoção de resíduos, limpeza detalhada e acabamento final para ambientes prontos para uso.",
    url: `${SITE}/limpeza-pos-obra`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Limpeza Pós-Obra: Transformamos seu espaço, eliminando todo o resíduo da construção.",
    description:
      "Remoção de resíduos, limpeza detalhada e acabamento final para ambientes prontos para uso.",
  },
};

export default function LimpezaPosObraPage() {
  const cards = [
    { title: "Casas", image: "/cards/cards-pos-obra/casa.png" },
    { title: "Apartamentos", image: "/cards/cards-pos-obra/apartamento.png" },
    { title: "Empresas", image: "/cards/cards-pos-obra/empresa.png" },
    { title: "Chácaras", image: "/cards/cards-pos-obra/chacara.png" },
    { title: "Espaços", image: "/cards/cards-pos-obra/espaco.png" },
    { title: "Comércios", image: "/cards/cards-pos-obra/comercio.png" },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Limpeza Pós-Obra",
    url: `${SITE}/limpeza-pos-obra`,
    provider: {
      "@type": "LocalBusiness",
      name: "Renova",
      url: `${SITE}/`,
    },
    areaServed: "Campo Grande - MS, Brasil",
    serviceType: "Limpeza Pós-Obra",
    description:
      "Serviço completo de limpeza pós-obra: remoção de resíduos, poeira e detritos, com acabamento final para deixar o ambiente pronto para uso.",
  };

  return (
    <main className="bg-white">
      <ServiceHero
        title="Limpeza Pós-Obra: Transformamos seu espaço, eliminando todo o resíduo da construção."
        description="Após a realização de obras ou reformas, garantimos que o seu ambiente fique limpo e organizado. Removemos resíduos, poeira e detritos de construção, deixando o espaço pronto para uso com um acabamento impecável."
        ctaLabel="Solicitar Orçamento"
        imageUrl="/geral/hero-pos-obra.png"
        imageAlt="Ambiente limpo e organizado após obra"
        iconUrl="/icons/hero-icone-pos-obra.jpg"
        iconAlt="Ícone de limpeza pós-obra"
      />

      <ServiceCards
        title="Limpeza Especializada"
        description="Oferecemos serviços especializados de limpeza pós-obra, removendo resíduos e sujeiras de construção, garantindo um ambiente limpo, organizado e pronto para uso, seja casas ou até em empresas."
        items={cards}
      />

      <ServiceVideoSection
        title="Se busca um tratamento de excelência pós-obra, conte com a Renova!"
        subtitleLeftTitle="Atendimento Personalizado"
        subtitleLeftText="Adaptamos nossos serviços às suas necessidades, oferecendo soluções sob medida."
        subtitleRightTitle="Trabalho Eficaz"
        subtitleRightText="Somos comprometidos em entregar resultados rápidos e de alta qualidade, sem comprometer a eficiência."
        videoSrc="/videos/pos-obra.mp4"
        posterSrc="/renova.png"
      />

      <RodapePrincipal />
      <RodapeFinal />

      <script
        id="ld-json-service-pos-obra"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </main>
  );
}


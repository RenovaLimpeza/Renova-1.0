import Image from "next/image";
import { WhatsAppButton } from ".";

interface HeroProps {
  title?: string;
  description?: string;
  ctaLabel?: string;
  ctaHref?: string;
}

export default function Hero({
  title = "Limpeza Pós-Obra com Qualidade e Confiança",
  description = "Um parágrafo curto descrevendo o benefício/valor. Escreva de forma clara e direta para que as pessoas entendam rapidamente o que você oferece.",
  ctaLabel = "Solicitar Orçamento",
}: HeroProps) {
  return (
<section className="bg-gradient-to-r from-[#DAEAFE] to-white">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-12 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-y-12 gap-x-30 lg:grid-cols-12">
          
          {/* Left: conteúdo */}
          <div className="lg:col-span-6 xl:col-span-6">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              {title}
            </h1>
            <p className="mt-6 text-lg leading-8 text-foreground/80">{description}</p>
            <div className="mt-8">
              <WhatsAppButton
                type="orcamento"
                label={ctaLabel}
                unstyled
                className="inline-flex items-center justify-center rounded-md bg-yellow-400 px-5 py-3 text-base font-semibold text-slate-900 shadow-sm transition-colors hover:bg-yellow-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-400"
              />
            </div>
          </div>

          {/* Right: imagem */}
          <div className="lg:col-span-6 xl:col-span-6 flex justify-center">
            <Image
              src="/logo-completa.png"
              alt="Logo Renova"
              width={400}
              height={300}
              className="object-contain"
              priority
            />
          </div>

        </div>
      </div>
    </section>
  );
}

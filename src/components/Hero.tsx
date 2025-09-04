import Image from "next/image";
import { WhatsAppButton } from ".";

interface HeroProps {
  title?: string;
  description?: string;
  ctaLabel?: string;
  ctaHref?: string;
}

export default function Hero({
  title = "Seu Espaço, Outro Nível: Limpeza Profissional de Alto Padrão",
  description =
    "Na Renova, oferecemos um serviço completo de limpeza, com técnicas especializadas e materiais de alta qualidade. Atendemos tanto residências quanto empresas, garantindo resultados excepcionais, com preços justos e atendimento personalizado.",
  ctaLabel = "Solicitar Orçamento",
}: HeroProps) {
  return (
    <section className="bg-gradient-to-r from-[#DAEAFE] to-white">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-12 lg:px-8">
        {/* Linha 1 no mobile: título e imagem lado a lado. Em telas grandes, vira grid 2 colunas. */}
        <div className="flex lg:grid flex-row items-center gap-6 lg:gap-10 lg:grid-cols-12">
          <div className="flex-1 basis-0 min-w-0 lg:col-span-6">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              {title}
            </h1>
            {/* Texto em telas grandes fica abaixo do título, col-esquerda */}
            <p className="mt-6 hidden lg:block text-lg leading-8 text-foreground/80">
              {description}
            </p>
            <div className="mt-8 hidden lg:block">
              <WhatsAppButton
                type="orcamento"
                label={ctaLabel}
                unstyled
                className="inline-flex items-center justify-center rounded-md bg-yellow-400 px-5 py-3 text-base font-semibold text-slate-900 shadow-sm transition-colors hover:bg-yellow-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-400"
              />
            </div>
          </div>

          <div className="flex-1 basis-0 min-w-0 flex justify-end lg:col-span-6">
            <Image
              src="/logo/logo-completa.png"
              alt="Logo Renova"
              width={400}
              height={300}
              className="object-contain h-auto w-auto max-w-[180px] sm:max-w-[220px] lg:max-w-[400px]"
              priority
              sizes="(max-width: 640px) 40vw, (max-width: 1024px) 40vw, 400px"
            />
          </div>
        </div>

        {/* Texto e CTA abaixo no mobile (ocupando a largura toda) */}
        <p className="mt-6 lg:hidden text-lg leading-8 text-foreground/80">
          {description}
        </p>
        <div className="mt-6 lg:hidden">
          <WhatsAppButton
            type="orcamento"
            label={ctaLabel}
            unstyled
            className="inline-flex items-center justify-center rounded-md bg-yellow-400 px-5 py-3 text-base font-semibold text-slate-900 shadow-sm transition-colors hover:bg-yellow-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-400"
          />
        </div>
      </div>
    </section>
  );
}


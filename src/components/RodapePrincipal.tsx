import Image from "next/image";
import { BotaoWhatsApp } from ".";

interface RodapePrincipalProps {
  id?: string;
  title?: string;
  imageSrc?: string;
  imageAlt?: string;
}

export default function RodapePrincipal({
  id = "orcamento",
  title = "Pronto para transformar seu espaço?",
  imageSrc = "/logo-menor.png",
  imageAlt = "Solicite orçamento de limpeza profissional - Renova",
}: RodapePrincipalProps) {
  return (
    <section id={id} className="bg-[#163558]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
          <div className="order-2 lg:order-1 flex justify-center">
            <div className="relative w-48 h-48 sm:w-64 sm:h-64">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-contain rounded-lg"
                priority
              />
            </div>
          </div>

          <div className="order-1 lg:order-2 flex flex-col items-center text-center lg:items-start lg:text-left">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {title}
            </h2>
            <div className="mt-6">
              <BotaoWhatsApp
                type="orcamento"
                label="Fazer Orçamento"
                unstyled
                className="inline-flex items-center justify-center rounded-md bg-yellow-400 px-5 py-3 font-semibold text-[#163558] transition-colors hover:bg-yellow-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-400"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

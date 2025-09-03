import Image from "next/image";
import { BotaoWhatsApp } from ".";

interface MentoriaSectionProps {
  id?: string;
  title?: string;
  description?: string;
  ctaLabel?: string;
  ctaHref?: string;
  imageSrc?: string;
  imageAlt?: string;
}

export default function Mentoria({
  id = "mentoria",
  title = "Limpeza Profissional: o método por trás dos resultados",
  description =
    "Aprimore seus processos de limpeza com uma mentoria personalizada. Organizamos rotinas, padronizamos procedimentos e transmitimos técnicas para resultados consistentes, qualidade superior e maior segurança.",
  ctaLabel = "Participar da mentoria!",
  ctaHref = "#contato",
  imageSrc = "/geral/mentoria.png",
  imageAlt = "Mentoria em limpeza profissional Renova",
}: MentoriaSectionProps) {
  return (
    <section id={id} className="bg-[#EFF5FF] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
          <div className="order-1 lg:order-1 flex justify-center">
            <div className="relative inline-block rounded-full p-[4px] bg-gradient-to-br from-yellow-400 to-transparent">
              <div className="rounded-full bg-white">
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  width={400}
                  height={400}
                  className="rounded-full object-contain"
                  priority
                  sizes="(max-width: 1024px) 60vw, 400px"
                />
              </div>
            </div>
          </div>

          <div className="order-2 lg:order-2 flex flex-col items-center text-center gap-5">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {title}
            </h2>
            <p className="mt-6 text-foreground/80 leading-relaxed max-w-lg">{description}</p>
            <div className="mt-8">
              <BotaoWhatsApp
                type="mentoria"
                label={ctaLabel}
                unstyled
                className="inline-flex items-center justify-center rounded-md bg-[#2F6AA6] px-5 py-3 font-semibold text-white transition-colors hover:bg-foreground/90"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}



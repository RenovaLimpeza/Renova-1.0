import Image from "next/image";
import { WhatsAppButton } from ".";

interface ServiceHeroProps {
  title: string;
  description: string;
  ctaLabel?: string;
  imageUrl: string;
  imageAlt?: string;
  iconUrl?: string;
  iconAlt?: string;
  priority?: boolean;
}

export default function ServiceHero({
  title,
  description,
  ctaLabel = "Solicitar Orçamento",
  imageUrl,
  imageAlt = "Imagem ilustrativa do serviço",
  iconUrl,
  iconAlt,
  priority = true,
}: ServiceHeroProps) {
  return (
    <section className="bg-gradient-to-r from-[#DAEAFE] to-white">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-12 lg:px-8">
        <div className="flex lg:grid flex-row items-center gap-6 lg:gap-10 lg:grid-cols-12">
          {/* Text column */}
          <div className="flex-1 basis-0 min-w-0 lg:col-span-6">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              {title}
            </h1>
            <div className="mt-6">
              <WhatsAppButton
                type="orcamento"
                label={ctaLabel}
                unstyled
                className="inline-flex items-center justify-center rounded-md bg-yellow-400 px-5 py-3 text-base font-semibold text-slate-900 shadow-sm transition-colors hover:bg-yellow-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-400"
              />
            </div>
          </div>

          {/* Image square column */}
          <div className="flex-1 basis-0 min-w-0 lg:col-span-6 flex justify-end">
            <div className="relative w-48 h-66 sm:w-64 sm:h-112 md:w-72 md:h-128 lg:w-96 lg:h-140 aspect-square">
              <div className="absolute inset-0 overflow-hidden rounded-t-[500px] shadow-md">
                <Image
                  src={imageUrl}
                  alt={imageAlt}
                  fill
                  priority={priority}
                  sizes="(max-width: 640px) 12rem, (max-width: 768px) 16rem, (max-width: 1024px) 18rem, 24rem"
                  className="object-cover object-center"
                />
              </div>
              {iconUrl && (
                <div className="absolute left-[-25px] sm:left-[-60px] md:left-[-70px] lg:left-[-75px] bottom-[-20px] w-16 sm:w-24 md:w-32 lg:w-40 h-16 sm:h-24 md:h-32 lg:h-40 rounded-full overflow-hidden shadow-lg z-10 bg-white">
                  <Image
                    src={iconUrl}
                    alt={iconAlt ?? "Ícone do serviço"}
                    fill
                    sizes="(max-width: 640px) 80px, 96px"
                    className="object-cover"
                  />
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Description removed; only CTA under title */}
      </div>
    </section>
  );
}

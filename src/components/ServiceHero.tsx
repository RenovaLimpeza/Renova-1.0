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

          {/* Image square column */}
          <div className="flex-1 basis-0 min-w-0 flex justify-end lg:col-span-6">
            <div className="relative w-48 h-[500] sm:w-64 md:w-72 lg:w-96 aspect-square">
              <div className="absolute inset-0 overflow-hidden rounded-t-[80px] shadow-md">
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
                <div className="absolute left-[-25px] bottom-[-20px] w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden shadow-lg z-10 bg-white">
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

        {/* mobile text + CTA */}
        <p className="mt-6 lg:hidden text-lg leading-8 text-foreground/80">{description}</p>
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


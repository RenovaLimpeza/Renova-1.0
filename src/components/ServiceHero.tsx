import { WhatsAppButton } from ".";

interface ServiceHeroProps {
  title: string;
  description: string;
  ctaLabel?: string;
  imageUrl: string; // background image inside a square with rounded top borders
}

export default function ServiceHero({
  title,
  description,
  ctaLabel = "Solicitar Orçamento",
  imageUrl,
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
            <div className="relative w-48 sm:w-64 md:w-72 lg:w-96 h-[450px] rounded-t-[80px] bg-center bg-cover bg-no-repeat shadow-md" style={{ backgroundImage: `url(${imageUrl})` }} aria-label="Imagem ilustrativa do serviço" role="img">
              <div className="absolute left-[-25px] bottom-[-20px] w-24 h-24 bg-white rounded-full flex justify-center items-center shadow-lg">
                <img src="/path/to/your/icon.png" alt="Ícone de limpeza" className="w-8 h-8" />
              </div>
          </div>

        </div>
      </div>

      {/* mobile text + CTA */}
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
    </section >
  );
}


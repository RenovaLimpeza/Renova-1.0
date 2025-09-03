import Image from "next/image";

export interface ServiceCardItem {
  title: string;
  image: string;
}

interface ServiceCardsProps {
  id?: string;
  title?: string;
  description?: string;
  items: ServiceCardItem[]; // expect length 6
}

export default function ServiceCards({
  id,
  title = "Sobre o serviço",
  description,
  items,
}: ServiceCardsProps) {
  return (
    <section id={id} className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {title}
          </h2>
          {description && (
            <p className="mx-auto mt-6 text-base leading-7 text-foreground/80 sm:text-lg">
              {description}
            </p>
          )}
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((card, idx) => (
            <div
              key={`${card.title}-${idx}`}
              className="relative h-52 rounded-xl overflow-hidden shadow-md group"
            >
              <Image
                src={card.image}
                alt={card.title}
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="object-cover"
                priority={idx < 2}
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />
              <div className="absolute inset-0 flex items-center justify-center p-4">
                <h3 className="text-center text-white text-lg font-semibold drop-shadow">
                  {card.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


"use client";

import Image from "next/image";
import { useState } from "react";

interface GalleryItem {
  description: string;
  instagramUrl?: string;
  images?: string[];
}

interface ServiceGallerySectionProps {
  id?: string;
  title?: string;
  instagramUrl?: string;
  items?: GalleryItem[];
}

export default function GaleriaServicos({
  id = "galeria",
  title = "Resultados que Entregamos",
  instagramUrl = "https://www.instagram.com/renovapisos.cg/",
  items = [
    {
      description: "Limpeza de pisos com remoção de sujeiras e manchas.",
      images: ["/cards/card1/img1.png", "/cards/card1/img2.png"],
    },
    {
      description: "Transparência renovada com limpeza profissional de vidros.",
      images: ["/cards/card2/img1.png", "/cards/card2/img2.png"],
    },
    {
      description: "Tratamento que realça o brilho e valoriza sua calçada de pedra portuguesa.",
      images: ["/cards/card3/img1.png", "/cards/card3/img2.png"],
    },
    {
      description: "Casa renovada e livre de sujeira com nossa limpeza pós-obra especializada.",
      images: ["/cards/card4/img1.png", "/cards/card4/img2.png"],
    },
  ],
}: ServiceGallerySectionProps) {
  return (
    <section id={id} className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          {title}
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-4">
          {items.map((item, idx) => (
            <Card key={idx} item={item} hideBadge={idx === items.length - 1} />
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Abrir o Instagram da Renova em nova aba"
            title="Ver mais no Instagram"
            className="inline-flex items-center justify-center rounded-md bg-yellow-400 px-5 py-2.5 font-semibold text-foreground transition-colors hover:bg-yellow-300"
          >
            Ver mais
          </a>
        </div>
      </div>
    </section>
  );
}

function Card({ item, hideBadge = false }: { item: GalleryItem; hideBadge?: boolean }) {
  const defaultPaths = [
    "/services/calcada-antes.jpeg",
    "/services/calcada-depois.jpeg",
  ];

  const paths = (item.images?.length ? item.images : defaultPaths).slice(0, 2);
  const imgs = [
    { src: paths[0], alt: "Antes da limpeza" },
    { src: paths[1] ?? paths[0], alt: "Depois da limpeza" },
  ];

  const [idx, setIdx] = useState(0);
  const goPrev = () => setIdx((i) => (i === 0 ? imgs.length - 1 : i - 1));
  const goNext = () => setIdx((i) => (i === imgs.length - 1 ? 0 : i + 1));

  return (
    <div className="rounded-xl bg-white p-6 shadow-md transition-transform duration-300 hover:scale-105">
      <div className="flex flex-col items-center justify-center text-center">
        <div className="relative w-full h-80 overflow-hidden rounded-lg">
          {imgs.map((img, i) => (
            <Image
              key={i}
              src={img.src}
              alt={img.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 25vw"
              className={`absolute inset-0 object-cover transition-opacity duration-300 ease-in-out ${idx === i ? "opacity-100" : "opacity-0"
                }`}
              priority={i === 0}
            />
          ))}

          {!hideBadge && (
            <span className="absolute top-2 left-1/2 -translate-x-1/2 bg-black/50 text-white text-xs font-semibold px-3 py-1 rounded-md">
              {idx === 0 ? "Antes" : "Depois"}
            </span>

          )}

          <button
            type="button"
            aria-label="Anterior"
            onClick={goPrev}
            className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/40 p-2 text-white drop-shadow-md backdrop-blur transition-colors hover:bg-black/50"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
              <path d="M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
            </svg>
          </button>
          <button
            type="button"
            aria-label="Próximo"
            onClick={goNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/40 p-2 text-white drop-shadow-md backdrop-blur transition-colors hover:bg-black/50"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
              <path d="m10 6-1.41 1.41L13.17 12l-4.58 4.59L10 18l6-6z" />
            </svg>
          </button>

          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
            {imgs.map((_, i) => (
              <button
                key={i}
                aria-label={`Ir para imagem ${i + 1}`}
                onClick={() => setIdx(i)}
                className={`h-2.5 rounded-full transition-all ${idx === i ? "bg-white w-6" : "bg-white/50 w-2.5"
                  }`}
              />
            ))}
          </div>
        </div>

        <p className="mt-4 text-foreground/80">{item.description}</p>
      </div>
    </div>
  );
}


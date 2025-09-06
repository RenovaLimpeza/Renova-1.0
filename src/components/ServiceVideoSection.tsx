import Image from "next/image";

interface ServiceVideoSectionProps {
  id?: string;
  title: string;
  subtitleLeftTitle: string;
  subtitleLeftText: string;
  subtitleRightTitle: string;
  subtitleRightText: string;
  videoSrc?: string; // optional, can be empty and we show a placeholder image
  embedUrl?: string; // optional, supports iframe embeds (e.g., Google Drive)
  posterSrc?: string;
}

export default function ServiceVideoSection({
  id,
  title,
  subtitleLeftTitle,
  subtitleLeftText,
  subtitleRightTitle,
  subtitleRightText,
  videoSrc,
  embedUrl,
  posterSrc = "/renova.png",
}: ServiceVideoSectionProps) {
  return (
    <section id={id} className="bg-[#FFF9E6] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2">
          <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow">
            {embedUrl ? (
              <iframe
                src={embedUrl}
                className="w-full h-full"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            ) : videoSrc ? (
              <video
                controls
                preload="metadata"
                playsInline
                poster={posterSrc}
                aria-label={title}
                className="w-full h-full object-cover"
              >
                <source src={videoSrc} />
              </video>
            ) : (
              <div className="relative w-full h-full">
                <Image
                  src={posterSrc}
                  alt="Pré-visualização do vídeo"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-contain bg-white"
                />
              </div>
            )}
          </div>

          <div className="flex flex-col gap-6">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {title}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="rounded-lg p-5">
                <h3 className="text-lg font-semibold text-foreground">{subtitleLeftTitle}</h3>
                <p className="mt-2 text-foreground/80">{subtitleLeftText}</p>
              </div>
              <div className="rounded-lg p-5">
                <h3 className="text-lg font-semibold text-foreground">{subtitleRightTitle}</h3>
                <p className="mt-2 text-foreground/80">{subtitleRightText}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

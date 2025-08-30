import Image from "next/image";

interface SmallFooterProps {
  id?: string;
  instagramUrl?: string;
  facebookUrl?: string;
  phone?: string;
  email?: string;
  logoSrc?: string;
  logoAlt?: string;
}

export default function RodapeFinal({
  id = "contato",
  instagramUrl = "https://www.instagram.com/renovapisos.cg/",
  facebookUrl = "https://web.facebook.com/renova.piso.127",
  phone = "(67) 9 9621-8497",
  email = "contato@renova.com",
  logoSrc = "/logo-footer.png",
  logoAlt = "Renova Logo",
}: SmallFooterProps) {
  return (
    <footer id={id} className="bg-[#101828] ">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 md:grid-cols-3">
        <div className="flex justify-center md:justify-start">
          <Image
            src={logoSrc}
            alt={logoAlt}
            width={140}
            height={100}
            className="h-30 w-auto"
            priority
          />
        </div>

        <div className="text-center text-white">
          <p className="font-semibold">Contato</p>
          <p className="mt-1 opacity-90">{phone}</p>
          <p className="opacity-90">{email}</p>
        </div>

        <div className="flex items-center justify-center gap-6 md:justify-end">
          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-white transition-opacity hover:opacity-80"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-6 w-6"
            >
              <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm0 2h10c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3zm12 2a1 1 0 100 2 1 1 0 000-2zM12 7a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6z" />
            </svg>
          </a>
          <a
            href={facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="text-white transition-opacity hover:opacity-80"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-6 w-6"
            >
              <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987H7.898v-2.89h2.54v-2.205c0-2.507 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46H15.83c-1.24 0-1.627.77-1.627 1.562v1.878h2.77l-.443 2.89h-2.327v6.987C18.343 21.128 22 16.991 22 12z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}

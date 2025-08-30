import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Navbar, NavLink } from "@/components";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const navLinks: NavLink[] = [
  { href: "#sobre", label: "Sobre nós" },
  { href: "#servicos", label: "Serviços" },
  { href: "#mentoria", label: "Mentoria" },
  { href: "#contato", label: "Contato" },
];

const ctaLink: NavLink = { href: "#orcamento", label: "Orçamento" };

export const metadata: Metadata = {
  title: "Renova - Limpeza Pós-Obra",
  description:
    "Em breve um novo site para nossos serviços de limpeza pós-obra.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${poppins.variable} antialiased`}>
        <Navbar links={navLinks} cta={ctaLink} />
        {children}
      </body>
    </html>
  );
}

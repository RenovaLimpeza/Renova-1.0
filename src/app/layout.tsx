import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { Navbar, NavLink } from "@/components";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const navLinks: NavLink[] = [
  { href: "#servicos", label: "Serviços" },
  { href: "#contato", label: "Contato" },
];

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
      <body className={`${geistSans.variable} antialiased`}>
        <Navbar links={navLinks} />
        {children}
      </body>
    </html>
  );
}

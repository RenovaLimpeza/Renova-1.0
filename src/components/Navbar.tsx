"use client";

import Image from "next/image";
import Link from "next/link";
import { WhatsAppButton } from ".";
import { useEffect, useMemo, useState } from "react";

export interface NavLink {
  href: string;
  label: string;
  children?: NavLink[];
}

interface NavbarProps {
  links: NavLink[];
  cta?: NavLink;
}

export default function Navbar({ links, cta }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false); // mobile submenu state
  const [openDropdown, setOpenDropdown] = useState<number | null>(null); // desktop dropdown index
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // find services link if provided
  const servicesLink = useMemo(() => links.find(l => l.label.toLowerCase().includes("servi")), [links]);

  return (
    <header
      className={[
        "sticky top-0 z-50 h-16 lg:h-20 transition-colors duration-300",
        "drop-shadow-[0_2px_6px_rgba(0,0,0,0.15)]",
        // No mobile, o fundo deve ser sólido (não transparente)
        // Em telas >= sm, mantém o comportamento anterior com base no scroll
        "bg-white",
        scrolled
          ? "sm:bg-white/80 sm:backdrop-blur"
          : "sm:bg-background",
      ].join(" ")}
    >
      <nav
        className="mx-auto flex h-full items-center justify-between px-4 max-w-7xl text-foreground"
        aria-label="Navegação principal"
      >
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo/logo-navbar.png"
            alt="Renova"
            width={140}
            height={48}
            className="h-10 w-auto sm:h-12"
            sizes="(max-width: 640px) 120px, 140px"
          />
        </Link>

        <div className="flex items-center gap-6">
          {/* Desktop menu */}
          <ul className="hidden sm:flex gap-6">
            {links.map((link, idx) => {
              const hasChildren = !!link.children?.length;
              if (!hasChildren) {
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-foreground hover:text-yellow-400 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              }

              // Dropdown for services
              return (
                <li
                  key={link.href}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(idx)}
                  onMouseLeave={() => setOpenDropdown((v) => (v === idx ? null : v))}
                >
                  <Link
                    href={link.href}
                    className="text-foreground hover:text-yellow-400 transition-colors inline-flex items-center gap-1"
                  >
                    {link.label}
                    <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 011.08 1.04l-4.25 4.25a.75.75 0 01-1.06 0L5.21 8.27a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                    </svg>
                  </Link>
                  {/* Use padding-top to create hoverable buffer without causing a gap */}
                  <div
                    className={`absolute left-0 top-full pt-2 ${openDropdown === idx ? "block" : "hidden"}`}
                  >
                    <div className="min-w-[220px] rounded-md bg-white p-2 shadow-md">
                      {link.children?.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block w-full whitespace-nowrap rounded px-3 py-2 text-sm text-foreground hover:bg-yellow-100"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>

          {cta && (
            <WhatsAppButton
              type="orcamento"
              label={cta.label}
              unstyled
              className="hidden sm:block bg-yellow-400 text-slate-900 font-semibold px-4 py-2 rounded hover:bg-yellow-300 transition-colors"
            />
          )}

          <button
            className="sm:hidden p-2"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </nav>

      {open && (
        <ul className="sm:hidden flex flex-col gap-2 p-4 border-t border-foreground/10 bg-white">
          {links.map((link) => {
            const hasChildren = !!link.children?.length;
            if (!hasChildren) {
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block w-full py-2"
                  >
                    {link.label}
                  </Link>
                </li>
              );
            }

            const isServices = servicesLink && link.label === servicesLink.label;
            return (
              <li key={link.href} className="">
                <button
                  className="flex w-full items-center justify-between py-2"
                  onClick={() => setServicesOpen((v) => !v)}
                  aria-expanded={servicesOpen}
                >
                  <span>{link.label}</span>
                  <svg className={`w-4 h-4 transition-transform ${servicesOpen ? "rotate-180" : "rotate-0"}`} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 011.08 1.04l-4.25 4.25a.75.75 0 01-1.06 0L5.21 8.27a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                  </svg>
                </button>
                <div className={`${servicesOpen ? "block" : "hidden"} pl-3`}> 
                  {/* Clicking the parent label should take to #services on home */}
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block w-full rounded px-3 py-2 text-sm text-foreground/90 hover:bg-yellow-100"
                  >
                    Ver todos os serviços
                  </Link>
                  {link.children?.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      onClick={() => setOpen(false)}
                      className="block w-full rounded px-3 py-2 text-sm text-foreground/90 hover:bg-yellow-100"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              </li>
            );
          })}
          {cta && (
            <li>
              <WhatsAppButton
                type="orcamento"
                label={cta.label}
                unstyled
                className="block w-full py-2 text-center bg-yellow-400 text-slate-900 font-semibold rounded hover:bg-yellow-300 transition-colors"
              />
            </li>
          )}
        </ul>
      )}
    </header>
  );
}

function MenuIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}


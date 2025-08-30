"use client";

import Image from "next/image";
import Link from "next/link";
import { WhatsAppButton } from ".";
import { useEffect, useState } from "react";

export interface NavLink {
  href: string;
  label: string;
}

interface NavbarProps {
  links: NavLink[];
  cta?: NavLink;
}

export default function Navbar({ links, cta }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={[
        "sticky top-0 z-50 h-16 lg:h-20 transition-colors duration-300",
        "drop-shadow-[0_2px_6px_rgba(0,0,0,0.15)]",
        scrolled
          ? "bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/70"
          : "bg-background",
      ].join(" ")}
    >
      <nav className="mx-auto flex h-full items-center justify-between px-4 max-w-7xl text-foreground">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo-navbar.png"
            alt="Renova"
            width={140}
            height={48}
            className="h-10 w-auto sm:h-12"
            priority
          />
        </Link>

        <div className="flex items-center gap-6">
          <ul className="hidden sm:flex gap-6">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-foreground hover:text-yellow-400 transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
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
            aria-label="Abrir menu"
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </nav>

      {open && (
        <ul className="sm:hidden flex flex-col gap-4 p-4 border-t border-foreground/10 bg-white/95 backdrop-blur">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setOpen(false)}
                className="block w-full py-2"
              >
                {link.label}
              </Link>
            </li>
          ))}
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
    <svg
      className="w-6 h-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      className="w-6 h-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}

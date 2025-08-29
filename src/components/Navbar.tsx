"use client";

import Link from "next/link";
import { useState } from "react";

export interface NavLink {
  href: string;
  label: string;
}

interface NavbarProps {
  links: NavLink[];
}

export default function Navbar({ links }: NavbarProps) {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-background text-foreground shadow-sm">
      <nav className="mx-auto flex items-center justify-between p-4 max-w-7xl">
        <Link href="/" className="text-xl font-bold">
          Renova
        </Link>
        <button
          className="sm:hidden p-2"
          onClick={() => setOpen(!open)}
          aria-label="Abrir menu"
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
        <ul className="hidden sm:flex gap-6">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="hover:text-foreground/70 transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      {open && (
        <ul className="sm:hidden flex flex-col gap-4 p-4 border-t border-foreground/10">
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

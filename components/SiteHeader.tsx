import Link from "next/link";

import { site } from "@/data/portfolio";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/resume", label: "Resume" },
  { href: "/#contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 px-4 py-4 sm:px-6">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 rounded-full border border-white/14 bg-[#171513]/72 px-5 py-3 text-cream shadow-[0_18px_60px_rgba(23,21,19,0.22)] backdrop-blur-xl sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <Link href="/" className="text-sm font-semibold tracking-normal text-cream">
          {site.name}
        </Link>
        <nav
          aria-label="Primary"
          className="flex w-full flex-wrap items-center gap-x-5 gap-y-2 text-sm text-cream/68 sm:w-auto sm:flex-nowrap sm:justify-start"
        >
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="transition hover:text-cream">
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

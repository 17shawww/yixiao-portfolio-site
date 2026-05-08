import type { Metadata } from "next";

import "@/app/globals.css";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { site } from "@/data/portfolio";

export const metadata: Metadata = {
  title: {
    default: `${site.name} | ${site.portfolioTitle}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "Yixiao Peng",
    "product manager",
    "UX researcher",
    "user research",
    "product strategy",
    "portfolio",
    "case study",
    "AI product design",
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className="bg-paper text-ink">
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}

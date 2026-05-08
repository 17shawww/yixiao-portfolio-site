import Link from "next/link";
import { ArrowUpRight, FileText, Mail } from "lucide-react";

import { site } from "@/data/portfolio";

export function ContactSection() {
  return (
    <section id="contact" className="relative overflow-hidden border-t border-cream/10 bg-warm-black text-cream">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_16%_24%,rgba(203,132,117,0.18),transparent_30%),radial-gradient(circle_at_84%_10%,rgba(246,232,210,0.10),transparent_28%)]" />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-24 sm:px-8 lg:grid-cols-[1.2fr,0.8fr] lg:px-10 lg:py-28">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blush">Contact</p>
          <h2 className="mt-5 text-5xl font-semibold leading-[0.95] tracking-normal text-cream sm:text-6xl">
            Open to product, research, and strategy conversations.
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-8 text-cream/66 sm:text-lg">
            I am especially interested in roles where user evidence, product judgment, and clear storytelling help teams decide what to build next.
          </p>
        </div>
        <div className="space-y-3 self-end">
          <Link
            href={`mailto:${site.email}`}
            className="flex items-center justify-between rounded-[1.15rem] border border-cream/14 bg-cream/[0.04] px-5 py-4 text-sm font-medium transition hover:border-cream/32 hover:bg-cream/[0.08]"
          >
            <span className="inline-flex items-center gap-3">
              <Mail className="h-4 w-4" aria-hidden="true" />
              {site.email}
            </span>
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Link>
          <Link
            href={site.linkedin}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-between rounded-[1.15rem] border border-cream/14 bg-cream/[0.04] px-5 py-4 text-sm font-medium transition hover:border-cream/32 hover:bg-cream/[0.08]"
          >
            <span>LinkedIn</span>
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Link>
          <Link
            href={site.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-between rounded-[1.15rem] border border-cream/14 bg-cream/[0.04] px-5 py-4 text-sm font-medium transition hover:border-cream/32 hover:bg-cream/[0.08]"
          >
            <span className="inline-flex items-center gap-3">
              <FileText className="h-4 w-4" aria-hidden="true" />
              Resume PDF
            </span>
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}

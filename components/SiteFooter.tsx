import Link from "next/link";

import { site } from "@/data/portfolio";

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-paper">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-8 text-sm text-slate sm:flex-row sm:items-center sm:justify-between lg:px-8">
        <p>{site.name} - UX and product portfolio.</p>
        <div className="flex items-center gap-4">
          <Link href={`mailto:${site.email}`} className="transition hover:text-ink">
            Email
          </Link>
          <Link href={site.linkedin} target="_blank" rel="noreferrer" className="transition hover:text-ink">
            LinkedIn
          </Link>
          <Link href={site.resumeUrl} target="_blank" rel="noreferrer" className="transition hover:text-ink">
            Resume PDF
          </Link>
        </div>
      </div>
    </footer>
  );
}


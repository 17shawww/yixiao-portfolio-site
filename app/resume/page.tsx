import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Download } from "lucide-react";

import { SectionHeading } from "@/components/SectionHeading";
import { site } from "@/data/portfolio";
import { withBasePath } from "@/lib/paths";

export const metadata: Metadata = {
  title: "Resume",
  description: "Embedded resume for Yixiao Peng.",
};

export default function ResumePage() {
  return (
    <main className="bg-paper">
      <section className="border-b border-line bg-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-16 lg:px-8">
          <SectionHeading
            label="Resume"
            title="Current resume and quick access to the PDF."
            description="The embedded file below is sourced directly from the repository and can be opened in a separate tab if you prefer."
          />
          <div className="flex flex-wrap gap-4">
            <Link
              href={site.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-ink px-5 py-3 text-sm font-semibold text-white transition hover:bg-teal"
            >
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              Open PDF
            </Link>
            <Link
              href={site.resumeUrl}
              download
              className="inline-flex items-center gap-2 rounded-lg border border-line px-5 py-3 text-sm font-semibold text-ink transition hover:border-ink"
            >
              <Download className="h-4 w-4" aria-hidden="true" />
              Download copy
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10 lg:px-8">
        <div className="overflow-hidden rounded-lg border border-line bg-white shadow-subtle">
          <iframe
            src={`${withBasePath(site.resumeUrl)}#view=FitH`}
            title="Yixiao Peng Resume"
            className="h-[78vh] w-full"
          />
        </div>
      </section>
    </main>
  );
}

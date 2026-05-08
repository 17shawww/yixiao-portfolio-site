import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import { ArrowUpRight } from "lucide-react";

import type { Project } from "@/data/portfolio";
import { withBasePath } from "@/lib/paths";

type ProjectCardProps = {
  project: Project;
  className?: string;
};

export function ProjectCard({ project, className = "" }: ProjectCardProps) {
  const previewMedia = project.heroGallery[0] ?? {
    src: project.heroImage,
    alt: project.heroAlt,
    caption: project.teaser,
    aspectRatio: "4 / 3",
    fit: "contain" as const,
  };
  const atomStyle: CSSProperties = {
    ["--accent" as string]: project.theme.accent,
  };

  return (
    <article className={`premium-card group overflow-hidden rounded-[32px] border border-line bg-white/90 shadow-subtle ${className}`}>
      <div className="p-6">
        <div className="relative overflow-hidden rounded-[30px] border border-line/60 bg-paper p-5" style={atomStyle}>
          <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-slate">
            <span>{project.year}</span>
            <span>/</span>
            <span>{project.type}</span>
          </div>
          <div
            className={`relative mt-6 ${
              project.presentation === "signal"
                ? "min-h-[330px]"
                : project.presentation === "editorial"
                  ? "min-h-[300px]"
                  : "min-h-[260px]"
            }`}
            style={{ aspectRatio: previewMedia.aspectRatio ?? "4 / 3" }}
          >
            <Image
              src={withBasePath(previewMedia.src)}
              alt={previewMedia.alt}
              fill
              sizes="(min-width: 1280px) 36vw, (min-width: 768px) 44vw, 88vw"
              className={`${previewMedia.fit === "cover" ? "object-cover" : "object-contain"} object-center drop-shadow-[0_22px_42px_rgba(23,21,19,0.16)] transition duration-500 group-hover:scale-[1.025]`}
              style={previewMedia.objectPosition ? { objectPosition: previewMedia.objectPosition } : undefined}
            />
          </div>
          <p className="mt-4 max-w-sm text-xs font-medium leading-5 text-slate">{previewMedia.caption}</p>
        </div>

        <div className="mt-6 space-y-5">
          <div className="space-y-3">
            <h3 className="text-3xl font-semibold text-ink">{project.title}</h3>
            <p className="max-w-2xl text-base leading-7 text-slate">{project.teaser}</p>
          </div>

          <div
            className="rounded-[22px] border p-4"
            style={{ borderColor: `${project.theme.accent}2B`, backgroundColor: "#ffffff" }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate">Core takeaway</p>
            <p className="mt-2 text-sm leading-7 text-ink">{project.overview.takeaway}</p>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            {project.snapshots.map((snapshot) => (
              <div
                key={`${snapshot.value}-${snapshot.label}`}
                className="rounded-2xl border p-4"
                style={{ borderColor: `${project.theme.accent}2B`, backgroundColor: project.theme.soft }}
              >
                <p className="text-sm font-semibold text-ink">{snapshot.value}</p>
                <p className="mt-2 text-xs leading-5 text-slate">{snapshot.label}</p>
              </div>
            ))}
          </div>

          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center gap-2 text-sm font-semibold text-ink transition hover:text-[color:var(--accent)]"
            style={{ ["--accent" as string]: project.theme.accent }}
          >
            View case study
            <ArrowUpRight className="h-4 w-4 transition duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </article>
  );
}

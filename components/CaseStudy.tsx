import Image from "next/image";
import type { CSSProperties, ReactNode } from "react";
import {
  BookOpen,
  Camera,
  Clock,
  Eye,
  FileText,
  Lightbulb,
  Layers,
  MessageCircle,
  MessagesSquare,
  Palette,
  Route,
  Scale,
  Search,
  ShieldCheck,
  Shirt,
  ShoppingBag,
  Sparkles,
  Users,
  WandSparkles,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import type { CaseCard, DecisionBlock, EvidenceChart, ProcessStep, Project, ProjectMedia, ProjectStat } from "@/data/portfolio";
import { withBasePath } from "@/lib/paths";

type SectionIntroProps = {
  eyebrow: string;
  title: string;
  body: string;
};

type CardGridProps = {
  cards: CaseCard[];
  accent: string;
  presentation?: Project["presentation"];
};

type StepListProps = {
  steps: ProcessStep[];
  accent: string;
};

type ProjectHeroProps = {
  project: Project;
};

type StatStripProps = {
  items: ProjectStat[];
  accent: string;
};

type MediaItemProps = {
  item: ProjectMedia;
  priority?: boolean;
  className?: string;
  surfaceClassName?: string;
  surfaceStyle?: CSSProperties;
  imageClassName?: string;
  captionClassName?: string;
  fit?: "contain" | "cover";
};

type ContentShellProps = {
  children: ReactNode;
  className?: string;
};

type EvidenceChartProps = {
  chart: EvidenceChart;
  accent: string;
  soft: string;
};

type DecisionTrailProps = {
  project: Project;
};

type CaseStudyNavProps = {
  project: Project;
};

function translucentBorder(accent: string) {
  return `${accent}33`;
}

function shadowGlow(accent: string) {
  return `0 24px 80px ${accent}1A`;
}

function cardIconFor(title: string, presentation: Project["presentation"] = "system"): LucideIcon {
  const text = title.toLowerCase();

  if (text.includes("trust") || text.includes("legal")) return ShieldCheck;
  if (text.includes("document") || text.includes("paper") || text.includes("evidence")) return FileText;
  if (text.includes("communication") || text.includes("caption") || text.includes("language")) return MessageCircle;
  if (text.includes("matching") || text.includes("flow") || text.includes("journey")) return Route;
  if (text.includes("ai") || text.includes("generation") || text.includes("prompt")) return Sparkles;
  if (text.includes("camera") || text.includes("photo") || text.includes("image")) return Camera;
  if (text.includes("prototype") || text.includes("system")) return Layers;
  if (text.includes("community") || text.includes("social")) return Users;
  if (text.includes("shopping") || text.includes("commerce") || text.includes("buy")) return ShoppingBag;
  if (text.includes("style") || text.includes("fashion") || text.includes("closet")) return Shirt;
  if (text.includes("education") || text.includes("learning")) return BookOpen;
  if (text.includes("experiment") || text.includes("try")) return Eye;
  if (text.includes("research") || text.includes("studied")) return Search;
  if (text.includes("time") || text.includes("quick")) return Clock;

  if (presentation === "editorial") return Palette;
  if (presentation === "signal") return WandSparkles;
  return Scale;
}

const supportCopy: Record<Project["presentation"], { title: string; body: string; icons: LucideIcon[] }> = {
  system: {
    title: "A structured visual layer for service clarity.",
    body:
      "This generated motif bridges the real interface boards with the case-study narrative, reinforcing milestones, trust, and connected legal touchpoints.",
    icons: [Route, FileText, ShieldCheck],
  },
  signal: {
    title: "A softer visual layer for AI-assisted expression.",
    body:
      "This generated motif supports the product story without inventing screens: image input, tone control, and caption output stay visible as one lightweight flow.",
    icons: [Camera, Sparkles, MessagesSquare],
  },
  editorial: {
    title: "A more editorial layer for fashion discovery.",
    body:
      "This generated motif adds texture and rhythm around the real app visuals, making Stylr feel more like a fashion product while keeping the UX process legible.",
    icons: [Shirt, Palette, Eye],
  },
};

export function ContentShell({ children, className = "" }: ContentShellProps) {
  return <div className={`mx-auto max-w-6xl px-6 lg:px-8 ${className}`}>{children}</div>;
}

export function CaseStudyNav({ project }: CaseStudyNavProps) {
  const links = [
    { href: "#overview", label: "Overview" },
    { href: "#lens", label: "Lens" },
    { href: "#evidence", label: "Evidence" },
    { href: "#decisions", label: "Decisions" },
    { href: "#impact", label: "Impact" },
    { href: "#reflection", label: "Reflection" },
  ];

  return (
    <div className="sticky top-[93px] z-30 border-b border-line bg-paper/88 backdrop-blur-xl sm:top-[73px]">
      <ContentShell className="py-3">
        <nav className="flex items-center gap-2 overflow-x-auto" aria-label={`${project.title} case study sections`}>
          <span
            className="mr-2 hidden shrink-0 rounded-full px-3 py-1.5 text-xs font-semibold text-white md:inline-flex"
            style={{ backgroundColor: project.theme.accent }}
          >
            {project.title}
          </span>
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="shrink-0 rounded-full border border-line bg-white px-3 py-1.5 text-xs font-semibold text-slate transition hover:border-[color:var(--accent)] hover:text-[color:var(--accent)]"
              style={{ ["--accent" as string]: project.theme.accent }}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </ContentShell>
    </div>
  );
}

export function SectionIntro({ eyebrow, title, body }: SectionIntroProps) {
  return (
    <div className="motion-fade-up max-w-2xl">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-semibold text-ink sm:text-[2.5rem] sm:leading-tight">{title}</h2>
      <p className="mt-4 text-base leading-8 text-slate sm:text-lg">{body}</p>
    </div>
  );
}

export function MediaItem({
  item,
  priority = false,
  className = "",
  surfaceClassName = "",
  surfaceStyle,
  imageClassName = "",
  captionClassName = "",
  fit = item.fit ?? "contain",
}: MediaItemProps) {
  const imageStyle = item.objectPosition ? { objectPosition: item.objectPosition } : undefined;

  return (
    <figure className={`motion-scale-in space-y-3 ${className}`}>
      <div
        className={`relative overflow-hidden rounded-[26px] p-0 ${surfaceClassName}`}
        style={surfaceStyle}
      >
        <div className="relative w-full overflow-hidden rounded-[22px]" style={{ aspectRatio: item.aspectRatio ?? "16 / 11" }}>
          <Image
            src={withBasePath(item.src)}
            alt={item.alt}
            fill
            priority={priority}
            sizes="(min-width: 1024px) 40vw, 100vw"
            style={imageStyle}
            className={`${fit === "cover" ? "object-cover" : "object-contain"} media-lift object-center drop-shadow-[0_24px_42px_rgba(23,21,19,0.14)] ${imageClassName}`}
          />
        </div>
      </div>
      <figcaption className={`max-w-xl px-1 text-xs leading-5 text-slate ${captionClassName}`}>{item.caption}</figcaption>
    </figure>
  );
}

function VisualAtom({
  item,
  priority = false,
  className = "",
  imageClassName = "",
  sizes = "(min-width: 1024px) 28vw, 70vw",
}: {
  item: ProjectMedia;
  priority?: boolean;
  className?: string;
  imageClassName?: string;
  sizes?: string;
}) {
  const imageStyle = item.objectPosition ? { objectPosition: item.objectPosition } : undefined;

  return (
    <div className={`relative ${className}`} style={{ aspectRatio: item.aspectRatio ?? "4 / 3" }}>
      <Image
        src={withBasePath(item.src)}
        alt={item.alt}
        fill
        priority={priority}
        sizes={sizes}
        style={imageStyle}
        className={`${item.fit === "cover" ? "object-cover" : "object-contain"} object-center drop-shadow-[0_20px_38px_rgba(23,21,19,0.16)] ${imageClassName}`}
      />
    </div>
  );
}

function HeroVisualCluster({ project }: { project: Project }) {
  const items = project.heroGallery;
  const [primary, secondary, tertiary] = items;
  const accentStyle = { ["--accent" as string]: project.theme.accent };

  if (project.presentation === "signal") {
    return (
      <div className="motion-scale-in relative min-h-[430px] overflow-hidden" style={accentStyle}>
        <div className="absolute inset-x-12 bottom-10 h-px bg-gradient-to-r from-transparent via-[color:var(--accent)]/20 to-transparent" />
        <div className="grid min-h-[430px] grid-cols-3 items-end gap-3 sm:gap-5">
          {secondary ? (
            <VisualAtom item={secondary} className="h-[315px] translate-y-4 opacity-90" sizes="(min-width: 1024px) 11vw, 32vw" />
          ) : null}
          {primary ? (
            <VisualAtom item={primary} priority className="h-[405px] -translate-y-2" sizes="(min-width: 1024px) 15vw, 40vw" />
          ) : null}
          {tertiary ? (
            <VisualAtom item={tertiary} className="h-[315px] translate-y-10 opacity-90" sizes="(min-width: 1024px) 11vw, 32vw" />
          ) : null}
        </div>
      </div>
    );
  }

  if (project.presentation === "editorial") {
    return (
      <div className="motion-scale-in relative min-h-[430px] overflow-hidden" style={accentStyle}>
        <div className="absolute right-12 top-8 hidden h-64 w-64 rounded-full border border-[color:var(--accent)]/20 sm:block" />
        {primary ? (
          <VisualAtom
            item={primary}
            priority
            className="absolute bottom-8 left-0 h-[345px] w-[43%]"
            sizes="(min-width: 1024px) 18vw, 48vw"
          />
        ) : null}
        {secondary ? (
          <VisualAtom
            item={secondary}
            className="absolute right-0 top-8 h-[292px] w-[58%]"
            sizes="(min-width: 1024px) 24vw, 58vw"
          />
        ) : null}
      </div>
    );
  }

  return (
    <div className="motion-scale-in relative overflow-hidden" style={accentStyle}>
      <div className="absolute left-8 top-10 h-40 w-40 rounded-full border border-[color:var(--accent)]/20" />
      <div className="grid min-h-[390px] grid-cols-12 items-center gap-5">
        {primary ? <VisualAtom item={primary} priority className="col-span-12 h-[260px]" sizes="(min-width: 1024px) 42vw, 86vw" /> : null}
        {tertiary ? <VisualAtom item={tertiary} className="col-span-8 col-start-3 h-[120px]" sizes="(min-width: 1024px) 24vw, 70vw" /> : null}
      </div>
    </div>
  );
}

function MediaCluster({ items, project }: { items: ProjectMedia[]; project: Project }) {
  return (
    <div className="motion-scale-in grid gap-4 sm:grid-cols-2">
      {items.map((item, index) => (
        <figure
          key={item.src}
          className={`rounded-[24px] p-2 ${
            index === 0 && items.length !== 2 ? "sm:col-span-2" : ""
          }`}
          style={{ ["--accent" as string]: project.theme.accent }}
        >
          <VisualAtom
            item={item}
            priority={index === 0}
            className={index === 0 ? "min-h-[230px]" : "min-h-[180px]"}
            sizes={index === 0 ? "(min-width: 1024px) 42vw, 90vw" : "(min-width: 1024px) 20vw, 80vw"}
          />
          <figcaption className="mt-3 text-xs font-medium leading-5 text-slate">{item.caption}</figcaption>
        </figure>
      ))}
    </div>
  );
}

export function ProjectHero({ project }: ProjectHeroProps) {
  const isEditorial = project.presentation === "editorial";

  const heroStyle: CSSProperties = {
    backgroundImage: isEditorial
      ? `radial-gradient(circle at top right, ${project.theme.glow} 0%, transparent 42%), linear-gradient(180deg, ${project.theme.soft} 0%, #ffffff 82%)`
      : `radial-gradient(circle at top left, ${project.theme.glow} 0%, transparent 38%), linear-gradient(180deg, ${project.theme.soft} 0%, #ffffff 75%)`,
  };

  const decorStyle: CSSProperties | undefined = project.decorImage
    ? {
        backgroundImage: `url(${withBasePath(project.decorImage)})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }
    : undefined;

  const factStyle: CSSProperties = {
    borderColor: translucentBorder(project.theme.accent),
    backgroundColor: "#ffffff",
    boxShadow: shadowGlow(project.theme.accent),
  };

  const tagStyle: CSSProperties = {
    borderColor: translucentBorder(project.theme.accent),
    backgroundColor: "#ffffff",
    color: project.theme.accent,
  };

  return (
    <section className="relative overflow-hidden border-b border-line" style={heroStyle}>
      {project.decorImage ? <div className="pointer-events-none absolute inset-0 opacity-35" style={decorStyle} /> : null}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: "linear-gradient(180deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.74) 38%, #ffffff 100%)",
        }}
      />
      <ContentShell className="relative py-10 sm:py-14 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[0.8fr,1.2fr] lg:items-center">
          <div className="motion-fade-up space-y-6">
            <p className="text-sm font-medium text-slate">{project.year} / {project.type}</p>
            <div className="space-y-4">
              <h1 className="max-w-3xl text-5xl font-semibold leading-none text-ink sm:text-6xl">{project.title}</h1>
              <p className="max-w-2xl text-xl leading-8 text-slate">{project.summary}</p>
            </div>
            <ul className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <li key={tag} className="rounded-full border px-3 py-1 text-xs font-medium" style={tagStyle}>
                  {tag}
                </li>
              ))}
            </ul>
          </div>

          <HeroVisualCluster project={project} />
        </div>

        <div className="motion-fade-up motion-delay-2 mt-8 grid gap-4 sm:grid-cols-3">
          {project.quickFacts.map((fact) => (
            <div key={fact.label} className="rounded-[24px] border p-5" style={factStyle}>
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate">{fact.label}</p>
              <p className="mt-3 text-sm leading-7 text-ink">{fact.value}</p>
            </div>
          ))}
        </div>
      </ContentShell>
    </section>
  );
}

export function SnapshotStrip({ items, accent }: StatStripProps) {
  const cardStyle: CSSProperties = {
    borderColor: translucentBorder(accent),
    backgroundColor: "#ffffff",
  };

  return (
    <div className="grid gap-4 md:grid-cols-3">
      {items.map((item, index) => (
        <div
          key={`${item.value}-${item.label}`}
          className={`motion-fade-up rounded-[24px] border p-5 ${index === 1 ? "motion-delay-1" : index === 2 ? "motion-delay-2" : ""}`}
          style={cardStyle}
        >
          <p className="text-2xl font-semibold text-ink">{item.value}</p>
          <p className="mt-2 text-sm font-medium text-slate">{item.label}</p>
          {item.note ? <p className="mt-1 text-xs leading-6 text-slate">{item.note}</p> : null}
        </div>
      ))}
    </div>
  );
}

export function CardGrid({ cards, accent, presentation = "system" }: CardGridProps) {
  const cardStyle: CSSProperties = {
    borderColor: translucentBorder(accent),
  };

  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {cards.map((card, index) => (
        <div
          key={card.title}
          className={`premium-card motion-fade-up rounded-[24px] border bg-white p-5 shadow-subtle ${
            index % 2 === 1 ? "motion-delay-1" : ""
          }`}
          style={cardStyle}
        >
          <div className="flex items-start gap-3">
            <div
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl"
              style={{ backgroundColor: `${accent}16`, color: accent }}
            >
              {(() => {
                const Icon = cardIconFor(card.title, presentation);
                return <Icon className="h-5 w-5" aria-hidden="true" />;
              })()}
            </div>
            <h3 className="pt-1 text-lg font-semibold text-ink">{card.title}</h3>
          </div>
          <p className="mt-3 text-sm leading-7 text-slate">{card.body}</p>
        </div>
      ))}
    </div>
  );
}

export function ProjectSupportVisual({ project }: { project: Project }) {
  const copy = supportCopy[project.presentation];

  return (
    <div className="grid gap-10 lg:grid-cols-[0.72fr,1.28fr] lg:items-center">
      <div className="motion-fade-up max-w-xl">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate">Visual support</p>
        <h2 className="mt-3 text-3xl font-semibold leading-tight text-ink sm:text-4xl">{copy.title}</h2>
        <p className="mt-4 text-base leading-8 text-slate">{copy.body}</p>
        <div className="mt-6 flex gap-3">
          {copy.icons.map((Icon, index) => (
            <div
              key={index}
              className="flex h-12 w-12 items-center justify-center rounded-2xl border bg-white shadow-subtle"
              style={{ borderColor: translucentBorder(project.theme.accent), color: project.theme.accent }}
            >
              <Icon className="h-5 w-5" aria-hidden="true" />
            </div>
          ))}
        </div>
      </div>
      <MediaItem
        item={project.supportVisual}
        fit="cover"
        surfaceStyle={{
          backgroundImage: `radial-gradient(circle at top left, ${project.theme.glow} 0%, ${project.theme.soft} 34%, rgba(255,255,255,0.96) 100%)`,
        }}
        surfaceClassName="p-3 sm:p-4"
      />
    </div>
  );
}

export function ResearchLensPanel({ project }: { project: Project }) {
  const lens = project.researchLens;
  const methodStyle: CSSProperties = {
    borderColor: translucentBorder(project.theme.accent),
    backgroundColor: `${project.theme.accent}0F`,
    color: project.theme.accent,
  };

  const cards = [
    {
      label: "Research question",
      value: lens.question,
      icon: Search,
    },
    {
      label: "Product decision",
      value: lens.productDecision,
      icon: Route,
    },
    {
      label: "Tradeoff",
      value: lens.tradeoff,
      icon: Scale,
    },
    {
      label: "Evidence artifact",
      value: lens.evidenceArtifact,
      icon: FileText,
    },
  ];

  return (
    <div
      className="motion-scale-in overflow-hidden rounded-[32px] border border-line bg-white shadow-subtle"
      style={{
        boxShadow: shadowGlow(project.theme.accent),
      }}
    >
      <div
        className="border-b border-line p-6 sm:p-8"
        style={{
          backgroundImage: `radial-gradient(circle at top left, ${project.theme.glow} 0%, ${project.theme.soft} 38%, #ffffff 100%)`,
        }}
      >
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate">Product + Research Lens</p>
        <h2 className="mt-3 max-w-3xl text-3xl font-semibold leading-tight text-ink sm:text-4xl">
          The case is framed around the decision the research needed to support.
        </h2>
        <div className="mt-6 flex flex-wrap gap-2">
          {lens.methods.map((method) => (
            <span key={method} className="rounded-full border px-3 py-1 text-xs font-semibold" style={methodStyle}>
              {method}
            </span>
          ))}
        </div>
      </div>

      <div className="grid gap-px bg-line md:grid-cols-2">
        {cards.map((card) => {
          const Icon = card.icon;

          return (
            <div key={card.label} className="bg-white p-6 sm:p-7">
              <div className="flex items-center gap-3">
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-2xl"
                  style={{ backgroundColor: `${project.theme.accent}14`, color: project.theme.accent }}
                >
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate">{card.label}</p>
              </div>
              <p className="mt-4 text-sm leading-7 text-ink">{card.value}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function numericStrength(value: string, index: number, total: number) {
  const numeric = Number.parseFloat(value.replace(/[^0-9.]/g, ""));
  if (Number.isFinite(numeric)) {
    if (value.includes("%")) return Math.max(12, Math.min(100, numeric));
    const max = value.length <= 3 ? 120 : numeric;
    return Math.max(20, Math.min(100, (numeric / max) * 100));
  }

  return total > 1 ? ((index + 1) / total) * 84 + 12 : 72;
}

export function EvidenceChartCard({ chart, accent, soft }: EvidenceChartProps) {
  return (
    <div
      className="motion-fade-up rounded-[32px] border p-6 shadow-subtle sm:p-7"
      style={{
        borderColor: translucentBorder(accent),
        backgroundImage: `radial-gradient(circle at top left, ${accent}14 0%, ${soft} 38%, #ffffff 100%)`,
      }}
    >
      <div className="max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate">Evidence chart</p>
        <h3 className="mt-3 text-2xl font-semibold leading-tight text-ink">{chart.title}</h3>
        <p className="mt-3 text-sm leading-7 text-slate">{chart.note}</p>
      </div>

      <div className={`mt-7 grid gap-4 ${chart.type === "bars" ? "" : "sm:grid-cols-3"}`}>
        {chart.items.map((item, index) => {
          const strength = numericStrength(item.value, index, chart.items.length);

          if (chart.type === "bars") {
            return (
              <div key={`${item.value}-${item.label}`} className="rounded-[22px] border border-black/5 bg-white/82 p-4">
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold text-ink">{item.label}</p>
                    {item.note ? <p className="mt-1 text-xs leading-5 text-slate">{item.note}</p> : null}
                  </div>
                  <p className="text-2xl font-semibold" style={{ color: accent }}>{item.value}</p>
                </div>
                <div className="mt-4 h-2 overflow-hidden rounded-full bg-black/5">
                  <div className="h-full rounded-full motion-reveal-bar" style={{ width: `${strength}%`, backgroundColor: accent }} />
                </div>
              </div>
            );
          }

          return (
            <div key={`${item.value}-${item.label}`} className="rounded-[24px] border border-black/5 bg-white/84 p-5">
              <div
                className="flex h-12 w-12 items-center justify-center rounded-2xl text-sm font-semibold"
                style={{ backgroundColor: `${accent}16`, color: accent }}
              >
                {chart.type === "steps" ? index + 1 : item.value}
              </div>
              <p className="mt-4 text-lg font-semibold text-ink">{item.label}</p>
              {chart.type === "steps" ? <p className="mt-1 text-2xl font-semibold" style={{ color: accent }}>{item.value}</p> : null}
              {item.note ? <p className="mt-3 text-sm leading-6 text-slate">{item.note}</p> : null}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function DecisionMedia({ block, project }: { block: DecisionBlock; project: Project }) {
  if (block.mediaItems?.length) {
    return <MediaCluster items={block.mediaItems} project={project} />;
  }

  if (block.chart) {
    return <EvidenceChartCard chart={block.chart} accent={project.theme.accent} soft={project.theme.soft} />;
  }

  if (block.media) {
    return <MediaItem item={block.media} fit={block.media.fit ?? "cover"} />;
  }

  return null;
}

export function DecisionBlockRow({ block, project, index }: { block: DecisionBlock; project: Project; index: number }) {
  const reversed = index % 2 === 1;

  return (
    <section className="scroll-reveal border-t border-line bg-paper">
      <ContentShell className="py-20">
        <div className={`grid gap-10 lg:grid-cols-[0.92fr,1.08fr] lg:items-center ${reversed ? "lg:[&>*:first-child]:order-2" : ""}`}>
          <div className={`motion-fade-up ${reversed ? "lg:pl-8" : "lg:pr-8"}`}>
            <div
              className="inline-flex items-center gap-2 rounded-full border bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em]"
              style={{ borderColor: translucentBorder(project.theme.accent), color: project.theme.accent }}
            >
              <Lightbulb className="h-3.5 w-3.5" aria-hidden="true" />
              {block.eyebrow}
            </div>
            <h2 className="mt-5 text-3xl font-semibold leading-tight text-ink sm:text-[2.45rem]">{block.title}</h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-slate">{block.body}</p>
            <div className="mt-7 space-y-3">
              {block.bullets.map((bullet) => (
                <div key={bullet} className="flex gap-3 rounded-[18px] border border-line bg-white p-4 shadow-subtle">
                  <div className="mt-2 h-2 w-2 shrink-0 rounded-full" style={{ backgroundColor: project.theme.accent }} />
                  <p className="text-sm leading-6 text-ink">{bullet}</p>
                </div>
              ))}
            </div>
          </div>
          <DecisionMedia block={block} project={project} />
        </div>
      </ContentShell>
    </section>
  );
}

export function DecisionTrail({ project }: DecisionTrailProps) {
  return (
    <>
      {project.decisionBlocks.map((block, index) => (
        <DecisionBlockRow key={`${project.slug}-${block.eyebrow}-${block.title}`} block={block} project={project} index={index} />
      ))}
    </>
  );
}

export function StepList({ steps, accent }: StepListProps) {
  return (
    <div className="space-y-4">
      {steps.map((step, index) => (
        <div
          key={step.title}
          className={`premium-card motion-fade-up rounded-[24px] border border-black/5 bg-white p-5 shadow-subtle ${
            index === 1 ? "motion-delay-1" : index === 2 ? "motion-delay-2" : ""
          }`}
        >
          <div className="flex items-start gap-4">
            <div
              className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-semibold"
              style={{ backgroundColor: accent, color: "#ffffff" }}
            >
              {index + 1}
            </div>
            <div>
              <h3 className="text-lg font-semibold text-ink">{step.title}</h3>
              <p className="mt-2 text-sm leading-7 text-slate">{step.body}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export function OutcomeStrip({ items, accent }: StatStripProps) {
  const cardStyle: CSSProperties = {
    backgroundColor: accent,
    color: "#ffffff",
  };

  return (
    <div className="grid gap-4 md:grid-cols-3">
      {items.map((item, index) => (
        <div
          key={`${item.value}-${item.label}`}
          className={`motion-fade-up rounded-[28px] p-6 ${index === 1 ? "motion-delay-1" : index === 2 ? "motion-delay-2" : ""}`}
          style={cardStyle}
        >
          <p className="text-2xl font-semibold">{item.value}</p>
          <p className="mt-3 text-sm leading-6 text-white/85">{item.label}</p>
        </div>
      ))}
    </div>
  );
}

function gallerySpan(index: number, presentation: Project["presentation"]) {
  if (presentation === "editorial") {
    return index === 0 ? "lg:col-span-12" : index === 1 ? "lg:col-span-5" : "lg:col-span-7";
  }

  if (presentation === "system") {
    return index === 0 ? "lg:col-span-12" : "lg:col-span-6";
  }

  return index === 0 ? "lg:col-span-7" : index === 1 ? "lg:col-span-5" : "lg:col-span-12";
}

export function MediaGallery({
  items,
  accent,
  soft,
  presentation,
}: {
  items: ProjectMedia[];
  accent: string;
  soft: string;
  presentation: Project["presentation"];
}) {
  const cardStyle: CSSProperties = {
    backgroundImage: `radial-gradient(circle at top left, ${accent}1A 0%, ${soft} 34%, rgba(255,255,255,0.96) 100%)`,
  };

  return (
    <div className="grid gap-4 lg:grid-cols-12">
      {items.map((item, index) => (
        <MediaItem
          key={item.src}
          item={item}
          className={gallerySpan(index, presentation)}
          surfaceStyle={cardStyle}
          fit={index === 2 ? item.fit ?? "contain" : item.fit ?? "contain"}
          surfaceClassName={index === 0 || presentation === "editorial" ? "p-5 sm:p-6" : ""}
        />
      ))}
    </div>
  );
}

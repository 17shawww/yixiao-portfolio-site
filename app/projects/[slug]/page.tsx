import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { CapsoCaseStudy } from "@/components/CapsoCaseStudy";
import { LexFlowCaseStudy } from "@/components/LexFlowCaseStudy";
import { ModularNavigationShoeCaseStudy } from "@/components/ModularNavigationShoeCaseStudy";
import { SensoryGardenLabyrinthCaseStudy } from "@/components/SensoryGardenLabyrinthCaseStudy";
import { getProjectBySlug } from "@/data/portfolio";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return [
    { slug: "lexflow" },
    { slug: "capso" },
    { slug: "modular-navigation-shoe" },
    { slug: "sensory-garden-labyrinth" },
  ];
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;

  if (slug === "modular-navigation-shoe") {
    return {
      title: "Modular Navigation Shoe",
      description:
        "An outdoor footwear concept exploring how modular components and subtle navigation cues can reduce cognitive and physical load during outdoor exploration.",
    };
  }

  if (slug === "sensory-garden-labyrinth") {
    return {
      title: "Sensory Garden Labyrinth",
      description:
        "A multisensory spatial experience concept exploring how plants, tactile cues, color, scent, and path rhythm can support embodied environmental attention.",
    };
  }

  const project = getProjectBySlug(slug);

  if (!project || (project.slug !== "lexflow" && project.slug !== "capso")) {
    return {
      title: "Project not found",
    };
  }

  return {
    title: project.title,
    description: project.summary,
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;

  if (slug === "modular-navigation-shoe") {
    return <ModularNavigationShoeCaseStudy />;
  }

  if (slug === "sensory-garden-labyrinth") {
    return <SensoryGardenLabyrinthCaseStudy />;
  }

  const project = getProjectBySlug(slug);

  if (!project || (project.slug !== "lexflow" && project.slug !== "capso")) {
    notFound();
  }

  if (project.slug === "capso") {
    return <CapsoCaseStudy project={project} />;
  }

  return <LexFlowCaseStudy project={project} />;
}

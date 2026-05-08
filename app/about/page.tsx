import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { SectionHeading } from "@/components/SectionHeading";
import { site } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "About",
  description: "About Yixiao Peng, including product interests, user research practice, education, and selected publications.",
};

export default function AboutPage() {
  return (
    <main className="bg-paper">
      <section className="border-b border-line bg-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 lg:grid-cols-[1.1fr,1fr] lg:px-8">
          <SectionHeading
            label="About"
            title="I use research to clarify what a product should do next."
            description="My background in industrial design gave me a sensitivity to systems and human behavior. My current focus is PM and user research: finding the right problem, making tradeoffs explicit, and communicating direction clearly."
          />
          <div className="space-y-5 text-base leading-8 text-slate">
            <p>{site.about}</p>
            <p>{site.aboutExtended}</p>
            <p>
              Right now, I am especially interested in AI-assisted workflows, service products, and consumer experiences where user evidence needs to shape product strategy.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-[1fr,1fr]">
          <div>
            <h2 className="text-2xl font-semibold text-ink">Education</h2>
            <div className="mt-8 space-y-6">
              {site.education.map((item) => (
                <div key={item.school} className="border-t border-line pt-6">
                  <h3 className="text-lg font-semibold text-ink">{item.school}</h3>
                  <p className="mt-2 text-base leading-7 text-slate">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-ink">Expertise</h2>
            <div className="mt-8 space-y-6">
              {site.expertise.map((item) => (
                <div key={item.label} className="border-t border-line pt-6">
                  <h3 className="text-lg font-semibold text-ink">{item.label}</h3>
                  <p className="mt-2 text-base leading-7 text-slate">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
          <h2 className="text-2xl font-semibold text-ink">Selected Publications</h2>
          <div className="mt-8 grid gap-6">
            {site.publications.map((publication) => (
              <div key={publication.title} className="rounded-lg border border-line bg-paper p-6">
                <p className="text-lg font-semibold text-ink">{publication.title}</p>
                <p className="mt-2 text-sm text-slate">{publication.meta}</p>
                {"href" in publication && publication.href ? (
                  <Link
                    href={publication.href}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-ink transition hover:text-teal"
                  >
                    View source
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

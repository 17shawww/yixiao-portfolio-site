import Image from "next/image";

import type { OtherWork } from "@/data/portfolio";
import { withBasePath } from "@/lib/paths";

type OtherWorkCardProps = {
  item: OtherWork;
};

export function OtherWorkCard({ item }: OtherWorkCardProps) {
  return (
    <article className="premium-card group overflow-hidden rounded-[28px] border border-line bg-white shadow-subtle">
      <div className="relative aspect-[16/11] overflow-hidden bg-sand">
        <Image
          src={withBasePath(item.image)}
          alt={item.alt}
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="media-lift object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
      </div>
      <div className="space-y-3 p-5">
        <div className="flex flex-wrap gap-2 text-xs font-medium text-slate">
          <span>{item.year}</span>
          <span>/</span>
          <span>{item.category}</span>
        </div>
        <h3 className="text-2xl font-semibold text-ink">{item.title}</h3>
        <p className="text-sm leading-7 text-slate">{item.description}</p>
      </div>
    </article>
  );
}

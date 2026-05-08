type SectionHeadingProps = {
  label: string;
  title: string;
  description?: string;
};

export function SectionHeading({ label, title, description }: SectionHeadingProps) {
  return (
    <div className="motion-fade-up max-w-3xl">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate">{label}</p>
      <h2 className="mt-3 text-3xl font-semibold leading-tight text-ink sm:text-4xl">{title}</h2>
      {description ? <p className="mt-4 max-w-2xl text-base leading-7 text-slate sm:text-lg">{description}</p> : null}
    </div>
  );
}

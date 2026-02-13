type Props = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function SectionHeader({ eyebrow, title, description }: Props) {
  return (
    <div className="space-y-1">
      <p className="text-xs uppercase tracking-[0.4em] text-white/50">{eyebrow}</p>
      <h1 className="text-3xl font-semibold tracking-tight text-white">{title}</h1>
      {description ? <p className="text-sm text-white/70">{description}</p> : null}
    </div>
  );
}

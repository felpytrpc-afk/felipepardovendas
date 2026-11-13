export function Marquee({ items }: { items: string[] }) {
  const row = [...items, ...items];
  return (
    <div className="overflow-hidden border-y-[3px] border-ink bg-ink py-3 text-ink-foreground">
      <div className="flex w-max animate-marquee gap-10 whitespace-nowrap">
        {[...row, ...row].map((t, i) => (
          <span key={i} className="flex items-center gap-10 font-display text-3xl">
            {t} <span className="text-primary">★</span>
          </span>
        ))}
      </div>
    </div>
  );
}

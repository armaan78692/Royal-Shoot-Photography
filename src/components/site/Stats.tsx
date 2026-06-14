const STATS = [
  { value: "500+", label: "Happy Clients" },
  { value: "300+", label: "Events Covered" },
  { value: "8+", label: "Years of Craft" },
  { value: "100%", label: "Client Satisfaction" },
];

export function Stats() {
  return (
    <section className="border-y border-border/60 bg-ink py-20 md:py-24">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid grid-cols-2 gap-y-12 md:grid-cols-4 md:divide-x md:divide-border/60">
          {STATS.map((s) => (
            <div key={s.label} className="px-4 text-center md:px-8">
              <div className="font-display text-5xl leading-none text-gold md:text-6xl">
                {s.value}
              </div>
              <div className="mt-4 text-[10px] uppercase tracking-[0.35em] text-muted-foreground">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

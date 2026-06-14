import { Star, Quote } from "lucide-react";
import { SectionHeader } from "./SiteShell";

const REVIEWS = [
  {
    name: "Shrikhala & Kushal",
    event: "Premium Wedding • Patna",
    rating: 5,
    text: "A beautifully crafted wedding story filled with emotions, elegance, and timeless memories. Every page reflects love captured perfectly.",
  },
  {
    name: "Suraj & Sulekha",
    event: "Pre-Wedding",
    rating: 5,
    text: "“A romantic pre-wedding journey of Suraj & Sulekha, filled with heartfelt moments and beautifully captured memories.",
  },
  {
    name: "Gautam Singhania",
    event: "Raymond MD",
    rating: 5,
    text: "An exclusive event at Hotel Maurya, Patna, featuring Gautam Singhania — professionally captured with elegance and attention to every moment.",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-ink py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <SectionHeader
          eyebrow="Kind Words"
          title={<>From the people we've had the <em className="gold-gradient-text not-italic">honour</em> to photograph.</>}
        />

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {REVIEWS.map((r) => (
            <figure
              key={r.name}
              className="group relative flex flex-col border border-border/60 bg-card/40 p-8 transition-all duration-500 hover:border-gold/60 lg:p-10"
            >
              <Quote className="absolute right-6 top-6 text-gold/30" size={42} />
              <div className="flex gap-1 text-gold">
                {Array.from({ length: r.rating }).map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <blockquote className="mt-6 flex-1 font-display text-xl leading-relaxed text-foreground/90 lg:text-2xl">
                "{r.text}"
              </blockquote>
              <figcaption className="mt-8 border-t border-border/60 pt-5">
                <div className="font-display text-lg text-foreground">{r.name}</div>
                <div className="mt-1 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                  {r.event}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

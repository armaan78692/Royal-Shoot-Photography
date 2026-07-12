import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import wedding1Asset from "@/assets/portfolio-wedding.jpg";
import prewedding from "@/assets/portfolio-prewedding.jpg";
import event from "@/assets/event1.jpg";
import fashion from "@/assets/model5.jpg";
import birthday1 from "@/assets/Birthday-1.jpg";
import award from "@/assets/award1.jpg";
import { SectionHeader } from "./SiteShell";

type Card = {
  src: string;
  category: string;
  title: string;
  to: string;
};

const HERO: Card = {
  src: wedding1Asset,
  category: "Wedding",
  title: "Shrikhala & Kushal",
  to: "/wedding-gallery",
};

const TOP_SUPPORTING: Card[] = [
  { src: prewedding, category: "Pre-Wedding", title: "Suraj & Sulekha", to: "/pre-wedding-gallery" },
  { src: fashion, category: "Model Shoot", title: "Style Portraits", to: "/fashion-gallery" },
];

const BOTTOM_ROW: Card[] = [
  { src: event, category: "Event", title: "Beautifully Captured", to: "/event-gallery" },
  { src: birthday1, category: "Birthday", title: "Little Celebrations", to: "/portrait-gallery" },
  { src: award, category: "Awards & Recognition", title: "Royal Shoot Photography", to: "/cinematic-gallery" },
];

function PortfolioCard({
  item,
  className = "",
  aspect = "aspect-[4/5]",
}: {
  item: Card;
  className?: string;
  aspect?: string;
}) {
  return (
    <Link
      to={item.to}
      className={`group relative block overflow-hidden ${aspect} ${className}`}
    >
      <img
        src={item.src}
        alt={`${item.title} — ${item.category} photography`}
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-[1600ms] ease-out group-hover:scale-110"
      />
      {/* Luxury overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent opacity-80 transition-opacity duration-700 group-hover:opacity-95" />
      {/* Subtle gold border on hover */}
      <div className="pointer-events-none absolute inset-3 border border-gold/0 transition-all duration-700 group-hover:inset-4 group-hover:border-gold/40" />

      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6 lg:p-8">
        <div className="translate-y-2 transition-transform duration-700 group-hover:translate-y-0">
          <div className="flex items-center gap-2">
            <span className="h-px w-6 bg-gold/80" />
            <span className="text-[10px] uppercase tracking-[0.35em] text-gold">{item.category}</span>
          </div>
          <h3 className="mt-3 font-display text-xl leading-tight text-cream md:text-2xl">
            {item.title}
          </h3>
        </div>
        <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-cream/30 text-cream opacity-0 transition-all duration-700 group-hover:border-gold group-hover:text-gold group-hover:opacity-100">
          <ArrowUpRight size={18} />
        </div>
      </div>
    </Link>
  );
}

export function Portfolio() {
  return (
    <section id="gallery" className="bg-ink py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <SectionHeader
          eyebrow="Featured Portfolio"
          title={<>Frames that <em className="gold-gradient-text not-italic">linger</em>.</>}
          description="Six chapters from our most cherished assignments. Step into each world for the full story."
        />

        {/* Top row: 1 large hero + 2 stacked supporting */}
        <div className="mt-16 grid grid-cols-1 gap-5 md:gap-6 lg:grid-cols-3 lg:gap-7">
          <div className="lg:col-span-2">
            <PortfolioCard item={HERO} aspect="aspect-[4/5] lg:aspect-[5/6]" />
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6 lg:grid-cols-1 lg:gap-7">
            {TOP_SUPPORTING.map((item) => (
              <PortfolioCard key={item.title} item={item} aspect="aspect-[4/5] lg:aspect-auto lg:h-full" />
            ))}
          </div>
        </div>

        {/* Bottom row: 3 evenly aligned premium cards */}
        <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 md:mt-6 md:gap-6 lg:grid-cols-3 lg:mt-7 lg:gap-7">
          {BOTTOM_ROW.map((item) => (
            <PortfolioCard key={item.title} item={item} aspect="aspect-[4/5]" />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 flex flex-col items-center gap-6 text-center">
          <div className="flex items-center gap-3">
            <span className="hairline" />
            <span className="eyebrow">Explore the archive</span>
            <span className="hairline" />
          </div>
          <a
            href="https://drive.google.com/file/d/1TpNK7FAmQ8E0OGqU3iiiR4yZFyMWpTNf/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 border border-gold/60 px-10 py-4 text-xs uppercase tracking-[0.3em] text-gold transition-all hover:bg-gold hover:text-ink hover:shadow-[0_0_28px_rgba(212,175,55,0.35)]"
          >
            View Full Portfolio <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}

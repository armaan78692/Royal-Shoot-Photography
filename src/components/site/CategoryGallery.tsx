import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { X, ChevronLeft, ChevronRight, ArrowRight, ArrowLeft, ChevronRight as Chevron } from "lucide-react";
import { SiteShell } from "./SiteShell";

export type GalleryImage = { src: string; alt: string };

type Props = {
  eyebrow: string;
  title: string;
  highlight: string;
  description: string;
  images: GalleryImage[];
};

export function CategoryGallery({ eyebrow, title, highlight, description, images }: Props) {
  const [active, setActive] = useState<number | null>(null);

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
      if (e.key === "ArrowRight") setActive((i) => (i === null ? null : (i + 1) % images.length));
      if (e.key === "ArrowLeft")
        setActive((i) => (i === null ? null : (i - 1 + images.length) % images.length));
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active, images.length]);

  return (
    <SiteShell>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-ink pt-40 pb-20 md:pt-48 md:pb-28">
        <div className="absolute inset-0">
          <img
            src={images[0]?.src}
            alt=""
            aria-hidden
            className="h-full w-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/80 via-ink/85 to-ink" />
        </div>
        <div className="relative z-10 mx-auto max-w-3xl px-6 text-center lg:px-10">
          <div className="flex items-center justify-center gap-3">
            <span className="hairline" />
            <span className="eyebrow">{eyebrow}</span>
            <span className="hairline" />
          </div>
          <h1 className="mt-6 font-display text-5xl leading-[1.05] md:text-6xl lg:text-7xl">
            {title} <em className="gold-gradient-text not-italic">{highlight}</em>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
            {description}
          </p>
        </div>
      </section>

      {/* Breadcrumb + Back to Home */}
      <section className="bg-ink border-t border-gold/10">
        <div className="mx-auto flex max-w-[1500px] flex-col gap-4 px-6 py-6 sm:flex-row sm:items-center sm:justify-between lg:px-10">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
            <Link to="/" className="transition-colors hover:text-gold">Home</Link>
            <Chevron size={12} className="text-gold/60" />
            <span className="text-cream/80">{eyebrow}</span>
          </nav>
          <Link
            to="/"
            className="group inline-flex items-center gap-3 self-start border border-gold/40 px-5 py-2.5 text-[11px] uppercase tracking-[0.3em] text-gold transition-all hover:bg-gold hover:text-ink hover:shadow-[0_0_24px_rgba(212,175,55,0.35)] sm:self-auto"
          >
            <ArrowLeft size={14} className="transition-transform group-hover:-translate-x-1" />
            Back to Home
          </Link>
        </div>
      </section>


      {/* Masonry Gallery */}
      <section className="bg-ink pb-24 md:pb-32">
        <div className="mx-auto max-w-[1500px] px-6 lg:px-10">
          <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 xl:columns-4 [column-fill:_balance]">
            {images.map((img, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className="group relative mb-4 block w-full overflow-hidden break-inside-avoid focus:outline-none"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="h-auto w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink pb-28">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <div className="flex items-center justify-center gap-3">
            <span className="hairline" />
            <span className="eyebrow">Ready when you are</span>
            <span className="hairline" />
          </div>
          <h2 className="mt-6 font-display text-4xl leading-[1.05] md:text-5xl">
            Book your <em className="gold-gradient-text not-italic">shoot</em>.
          </h2>
          <p className="mt-6 text-muted-foreground">
            Limited dates each season — reach out and let's craft something timeless.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-3 bg-gold px-8 py-4 text-xs uppercase tracking-[0.3em] text-ink transition-all hover:bg-cream"
          >
            Book Your Shoot <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* Lightbox */}
      {active !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/95 backdrop-blur-md animate-fade-in-slow"
          onClick={() => setActive(null)}
        >
          <button
            className="absolute right-6 top-6 text-cream/80 hover:text-gold"
            onClick={(e) => {
              e.stopPropagation();
              setActive(null);
            }}
            aria-label="Close"
          >
            <X size={28} />
          </button>
          <button
            className="absolute left-4 md:left-8 text-cream/80 hover:text-gold"
            onClick={(e) => {
              e.stopPropagation();
              setActive((i) => (i === null ? null : (i - 1 + images.length) % images.length));
            }}
            aria-label="Previous"
          >
            <ChevronLeft size={40} />
          </button>
          <button
            className="absolute right-4 md:right-8 text-cream/80 hover:text-gold"
            onClick={(e) => {
              e.stopPropagation();
              setActive((i) => (i === null ? null : (i + 1) % images.length));
            }}
            aria-label="Next"
          >
            <ChevronRight size={40} />
          </button>
          <img
            src={images[active].src}
            alt={images[active].alt}
            className="max-h-[88vh] max-w-[92vw] object-contain shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </SiteShell>
  );
}

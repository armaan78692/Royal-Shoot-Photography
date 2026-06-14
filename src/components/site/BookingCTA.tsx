import { Link } from "@tanstack/react-router";
import hero from "@/assets/hero-main.jpg";

export function BookingCTA() {
  return (
    <section className="relative isolate overflow-hidden bg-ink py-32 md:py-40">
      <div className="absolute inset-0">
        <img
          src={hero}
          alt=""
          aria-hidden
          loading="lazy"
          className="h-full w-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/85 to-ink" />
      </div>

      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center lg:px-10">
        <div className="flex items-center justify-center gap-3">
          <span className="hairline" />
          <span className="eyebrow">Let's begin</span>
          <span className="hairline" />
        </div>
        <h2 className="mt-6 font-display text-5xl leading-[1.05] md:text-6xl lg:text-7xl">
          Let's capture your
          <br />
          <em className="gold-gradient-text not-italic">beautiful story</em>.
        </h2>
        <p className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-muted-foreground">
          We take on a limited number of weddings each year so every story gets the
          care it deserves. Reach out — we'd love to hear about yours.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 bg-gold px-8 py-4 text-xs uppercase tracking-[0.3em] text-ink transition-all hover:bg-cream"
          >
            Book Consultation
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 border border-cream/40 px-8 py-4 text-xs uppercase tracking-[0.3em] text-cream transition-all hover:border-gold hover:text-gold"
          >
            Get a Quote
          </Link>
        </div>
      </div>
    </section>
  );
}

import { Link } from "@tanstack/react-router";
import { ArrowRight, ChevronDown, MessageCircle } from "lucide-react";
import heroAsset from "@/assets/hero-main.jpg";
import { WHATSAPP_URL } from "@/lib/social";

export function Hero() {
  return (
    <section className="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-ink">
      {/* Image */}
      <div className="absolute inset-0">
        <img
          src={heroAsset}
          alt="Bride at golden hour — cinematic wedding photography"
          width={1920}
          height={1280}
          className="h-full w-full object-cover animate-ken-burns"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/50 via-ink/30 to-ink" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/70 via-transparent to-ink/40" />
      </div>

      {/* Decorative corner marks */}
      <div className="pointer-events-none absolute inset-6 hidden border border-cream/15 md:block" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-[1400px] flex-col justify-end px-6 pb-24 pt-32 lg:px-10 lg:pb-32">
        <div className="max-w-3xl animate-fade-up">
          <div className="flex items-center gap-3">
            <span className="hairline" />
            <span className="eyebrow">Est. 2017 • Cinematic Studio</span>
          </div>

          <h1 className="mt-8 font-display text-5xl leading-[0.95] text-cream md:text-7xl lg:text-[5.5rem]">
            Capturing <em className="not-italic gold-gradient-text">timeless</em> stories
            <br />
            through lens.
          </h1>

          <p className="mt-8 max-w-xl text-sm uppercase tracking-[0.35em] text-cream/80">
            Wedding &nbsp;•&nbsp; Pre-Wedding &nbsp;•&nbsp; Events &nbsp;•&nbsp; Cinematic Films
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/portfolio"
              className="group inline-flex items-center gap-3 bg-gold px-7 py-4 text-xs uppercase tracking-[0.3em] text-ink transition-all hover:bg-cream"
            >
              View Portfolio
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 border border-cream/40 px-7 py-4 text-xs uppercase tracking-[0.3em] text-cream transition-all hover:border-gold hover:text-gold"
            >
              Book a Shoot
            </Link>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-3 border border-gold/60 bg-transparent px-7 py-4 text-xs uppercase tracking-[0.3em] text-gold transition-all hover:bg-gold hover:text-ink"
            >
              <MessageCircle size={16} />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-cream/60">
        <div className="flex flex-col items-center gap-2 animate-scroll-hint">
          <span className="text-[10px] uppercase tracking-[0.4em]">Scroll</span>
          <ChevronDown size={16} />
        </div>
      </div>
    </section>
  );
}

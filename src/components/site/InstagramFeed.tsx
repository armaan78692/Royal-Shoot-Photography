import { Instagram, ArrowRight } from "lucide-react";
import wedding1Asset from "@/assets/wedding-couple2.jpg";
import wedding2Asset from "@/assets/wedding-couple3.jpg";
import heroCoupleAsset from "@/assets/couple-pic.jpg";
import heroBrideAsset from "@/assets/model.jpg";
import signatureAsset from "@/assets/model2.jpg";
import wedding from "@/assets/portfolio-wedding.jpg";
import prewedding from "@/assets/portfolio-prewedding.jpg";
import event from "@/assets/event1.jpg";
import fashion from "@/assets/portfolio-fashion.jpg";
import portrait from "@/assets/model4.jpg";
import cinematic from "@/assets/model3.jpg";
import birthday from "@/assets/Birthday-1.jpg"
import event1 from "@/assets/Event-14.jpg"
import { INSTAGRAM_HANDLE, INSTAGRAM_URL } from "@/lib/social";

const ROW_TOP = [
  wedding1Asset,
  prewedding,
  fashion,
  heroCoupleAsset,
  cinematic,
  birthday,
];

const ROW_BOTTOM = [
  portrait,
  event,
  heroBrideAsset,
  wedding,
  signatureAsset,
  prewedding,
  event1,
];

function Tile({ src }: { src: string }) {
  return (
    <a
      href={INSTAGRAM_URL}
      target="_blank"
      rel="noreferrer"
      className="group relative block aspect-square w-[42vw] shrink-0 overflow-hidden sm:w-[28vw] md:w-[22vw] lg:w-[18vw] xl:w-[15vw]"
    >
      <img
        src={src}
        alt="Royal Shoot Photography on Instagram"
        loading="lazy"
        draggable={false}
        className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-ink/0 transition-colors duration-500 group-hover:bg-ink/70" />
      <div className="pointer-events-none absolute inset-3 border border-gold/0 transition-all duration-500 group-hover:inset-4 group-hover:border-gold/40" />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <Instagram size={28} className="text-gold" />
        <span className="text-[10px] uppercase tracking-[0.3em] text-cream">View on Instagram</span>
      </div>
    </a>
  );
}

function MarqueeRow({
  images,
  direction = "left",
}: {
  images: string[];
  direction?: "left" | "right";
}) {
  // Duplicate the list so the -50% translation loops seamlessly
  const loop = [...images, ...images];
  return (
    <div className="group/marquee relative overflow-hidden">
      {/* Edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-ink to-transparent md:w-32" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-ink to-transparent md:w-32" />
      <div
        className={`flex w-max gap-4 md:gap-5 ${
          direction === "left" ? "animate-marquee-left" : "animate-marquee-right"
        } [animation-play-state:running] group-hover/marquee:[animation-play-state:paused]`}
      >
        {loop.map((src, i) => (
          <Tile key={`${direction}-${i}`} src={src} />
        ))}
      </div>
    </div>
  );
}

export function InstagramFeed() {
  return (
    <section className="bg-ink py-24 md:py-32">
      <div className="mx-auto max-w-[1500px] px-6 lg:px-10">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center gap-3">
            <span className="hairline" />
            <span className="eyebrow">Behind the scenes</span>
            <span className="hairline" />
          </div>
          <h2 className="mt-6 font-display text-4xl md:text-5xl">
            Follow along on <em className="gold-gradient-text not-italic">Instagram</em>
          </h2>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex items-center gap-2 text-sm text-gold transition-opacity hover:opacity-80"
          >
            <Instagram size={16} /> @{INSTAGRAM_HANDLE}
          </a>
        </div>
      </div>

      {/* Full-bleed marquee rows */}
      <div className="mt-14 flex flex-col gap-4 md:gap-5">
        <MarqueeRow images={ROW_TOP} direction="left" />
        <MarqueeRow images={ROW_BOTTOM} direction="right" />
      </div>

      <div className="mx-auto mt-14 flex max-w-[1500px] justify-center px-6 lg:px-10">
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noreferrer"
          className="group inline-flex items-center gap-3 border border-gold/50 px-7 py-4 text-xs uppercase tracking-[0.3em] text-gold transition-all hover:bg-gold hover:text-ink hover:shadow-[0_0_28px_rgba(212,175,55,0.35)]"
        >
          <Instagram size={16} />
          Follow Our Journey on Instagram
          <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
        </a>
      </div>
    </section>
  );
}

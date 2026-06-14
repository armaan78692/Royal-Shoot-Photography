import signatureCoupleAsset from "@/assets/portfolio-wedding.jpg";
import prewedding from "@/assets/portfolio-prewedding.jpg";
import event from "@/assets/event1.jpg";
import { SectionHeader } from "./SiteShell";
import { ArrowUpRight } from "lucide-react";

const STORIES = [
  {
    img: signatureCoupleAsset,
    title: "Shrikhala & Kushal — An IPS Family",
    overview:
      "Three days of laughter, ritual, and reverence in the heart of Udaipur. A wedding scored to candlelight.",
    location: "Patna, Bihar",
    
  },
  {
    img: prewedding,
    title: "Suraj & Sulekha - An Income Tax Family",
    overview:
      "A sunrise pre-wedding above the clouds; quiet, intimate, painterly.",
    location: "Patna",

  },
  {
    img: event,
    title: "Raymonds Shop Event",
    overview:
      "An exclusive corporate gathering at Hotel Maurya, Patna, featuring the esteemed presence of Gautam Singhania, MD of Raymond.",
    location: "Patna, Bihar",
    
  },
];

export function Signature() {
  return (
    <section className="bg-charcoal/40 py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <SectionHeader
          eyebrow="Signature Stories"
          title={<>Editorial chapters, <em className="gold-gradient-text not-italic">told slowly</em>.</>}
        />

        <div className="mt-16 space-y-24">
          {STORIES.map((s, i) => (
            <article
              key={s.title}
              className={`grid items-center gap-10 lg:grid-cols-12 lg:gap-16 ${
                i % 2 === 1 ? "lg:[&>figure]:order-2" : ""
              }`}
            >
              <figure className="relative overflow-hidden lg:col-span-7">
                <img
                  src={s.img}
                  alt={s.title}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-[1400ms] hover:scale-105"
                />
              </figure>
              <div className="lg:col-span-5">
                <div className="eyebrow">Chapter {String(i + 1).padStart(2, "0")}</div>
                <h3 className="mt-4 font-display text-4xl leading-tight text-foreground md:text-5xl">
                  {s.title}
                </h3>
                <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                  {s.overview}
                </p>
                <dl className="mt-8 grid grid-cols-2 gap-6 border-t border-border/60 pt-6 text-xs">
                  <div>
                    <dt className="eyebrow">Location</dt>
                    <dd className="mt-2 text-foreground/90">{s.location}</dd>
                  </div>
                  <div>
                    <dt className="eyebrow">Delivered</dt>
                    {/* <dd className="mt-2 text-foreground/90">{s.frames}</dd> */}
                  </div>
                </dl>
                <a
                  href="#"
                  className="group mt-8 inline-flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-gold"
                >
                  Read the Story
                  <ArrowUpRight
                    size={16}
                    className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

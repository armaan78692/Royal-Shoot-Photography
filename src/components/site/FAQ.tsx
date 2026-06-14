import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { SectionHeader } from "./SiteShell";

const FAQS = [
  {
    q: "How early should we book?",
    a: "For weddings, 6–9 months ahead is ideal — peak dates (Nov–Feb) often book out a year in advance. For portrait or editorial sessions, 2–4 weeks is usually enough.",
  },
  {
    q: "What is your delivery timeline?",
    a: "Sneak peeks within 48 hours. A fully edited gallery in 3–4 weeks for portraits, 6–8 weeks for weddings. Cinematic films are delivered within 10–12 weeks.",
  },
  {
    q: "Do you travel for destination weddings?",
    a: "Absolutely. We've shot across India, Europe, the UAE, and Southeast Asia. Travel and stay are added at actuals on the Luxury Signature package.",
  },
  {
    q: "Is editing included?",
    a: "Yes — every delivered frame is hand-edited by our in-house team. We grade for skin tone, mood, and cinematic consistency, never over-processed.",
  },
  {
    q: "Do you offer drone coverage?",
    a: "Yes, on Premium and Luxury packages. We work with DGCA-licensed pilots and carry our own gimbals and FPV drones.",
  },
  {
    q: "Can we customise a package?",
    a: "Always. The packages are a starting point — tell us about your day and we'll build a quote that fits.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="bg-ink py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-6 lg:px-10">
        <SectionHeader
          eyebrow="Frequently asked"
          title={<>Everything you'd like to <em className="gold-gradient-text not-italic">know</em>.</>}
        />

        <div className="mt-14 divide-y divide-border/60 border-y border-border/60">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-6 py-6 text-left"
                >
                  <span className="font-display text-xl text-foreground lg:text-2xl">
                    {f.q}
                  </span>
                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center border transition-all ${
                      isOpen ? "border-gold bg-gold text-ink" : "border-border/60 text-gold"
                    }`}
                  >
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                  </span>
                </button>
                <div
                  className={`grid overflow-hidden transition-all duration-500 ${
                    isOpen ? "grid-rows-[1fr] pb-6" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">
                      {f.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

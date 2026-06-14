import { Check } from "lucide-react";
import { SectionHeader } from "./SiteShell";
import { Link } from "@tanstack/react-router";

const PACKAGES = [
  {
    name: "Basic Wedding",
    price: "₹65,000",
    tag: "Intimate ceremonies",
    features: [
      "8 hours coverage",
      "1 lead photographer",
      "300+ edited photos",
      "Online gallery",
      "Delivered in 4 weeks",
    ],
  },
  {
    name: "Standard Wedding",
    price: "₹1,35,000",
    tag: "Most loved",
    featured: true,
    features: [
      "Full-day coverage (12 hrs)",
      "2 photographers + cinematographer",
      "600+ edited photos",
      "5–7 min cinematic film",
      "Pre-wedding session included",
      "Custom hardbound album",
    ],
  },
  {
    name: "Premium Wedding",
    price: "₹2,10,000",
    tag: "Multi-day destination",
    features: [
      "Multi-day coverage",
      "Full creative team + drone",
      "Unlimited edited photos",
      "Feature-length film + teaser",
      "Heirloom album + prints",
      "Travel & stay included",
    ],
  },
];

export function Pricing() {
  return (
    <section className="bg-charcoal/40 py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <SectionHeader
          eyebrow="Investment"
          title={<>Crafted packages, <em className="gold-gradient-text not-italic">no surprises</em>.</>}
          description="Every story is unique — these are starting points. We'll happily tailor a package to your day."
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {PACKAGES.map((p) => (
            <div
              key={p.name}
              className={`relative flex flex-col border p-8 transition-all duration-500 lg:p-10 ${
                p.featured
                  ? "border-gold bg-gradient-to-b from-gold/10 to-transparent"
                  : "border-border/60 bg-ink hover:border-gold/50"
              }`}
            >
              {p.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold px-4 py-1 text-[10px] uppercase tracking-[0.3em] text-ink">
                  Most Loved
                </div>
              )}
              <div className="eyebrow">{p.tag}</div>
              <h3 className="mt-4 font-display text-3xl text-foreground lg:text-4xl">
                {p.name}
              </h3>
              <div className="mt-6 font-display text-4xl text-gold">{p.price}</div>
              <ul className="mt-8 flex-1 space-y-3 text-sm text-foreground/85">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <Check size={16} className="mt-0.5 shrink-0 text-gold" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className={`mt-10 inline-flex items-center justify-center px-6 py-4 text-xs uppercase tracking-[0.3em] transition-all ${
                  p.featured
                    ? "bg-gold text-ink hover:bg-cream"
                    : "border border-cream/40 text-cream hover:border-gold hover:text-gold"
                }`}
              >
                Enquire Now
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

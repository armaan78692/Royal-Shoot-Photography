import {
  Camera,
  Heart,
  Film,
  Sparkles,
  PartyPopper,
  Package,
  Plane,
  Baby,
  Cake,
} from "lucide-react";
import { SectionHeader } from "./SiteShell";

const SERVICES = [
  {
    icon: Heart,
    title: "Wedding Photography",
    desc: "Full-day editorial coverage of every ritual, glance, and stolen moment.",
  },
  {
    icon: Sparkles,
    title: "Pre-Wedding Shoots",
    desc: "Romantic, location-led sessions designed around your story and style.",
  },
  {
    icon: Film,
    title: "Cinematic Videography",
    desc: "Color-graded short films, scored and edited like a feature.",
  },
  {
    icon: PartyPopper,
    title: "Event Coverage",
    desc: "Galas, launches, concerts — multi-camera, fast turnaround, no compromise.",
  },
  {
    icon: Camera,
    title: "Fashion Photography",
    desc: "Editorial and lookbook work for designers, models, and luxury brands.",
  },
  {
    icon: Package,
    title: "Product Photography",
    desc: "Studio-perfect campaigns and e-commerce imagery for premium brands.",
  },
  {
    icon: Plane,
    title: "Drone & Aerial",
    desc: "Licensed aerial cinematography for venues, properties, and films.",
  },
  {
    icon: Baby,
    title: "Maternity Shoot",
    desc: "Tender, luminous portraits celebrating the glow and anticipation of motherhood.",
  },
  {
    icon: Cake,
    title: "Birthday",
    desc: "Joyful milestone celebrations captured with candid energy and elegant detail.",
  },
];

export function Services() {
  return (
    <section id="services" className="bg-charcoal/40 py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <SectionHeader
          eyebrow="Services"
          title={<>The studio, <em className="gold-gradient-text not-italic">at your service</em>.</>}
          description="A complete creative production house — from quiet portrait sessions to multi-day destination weddings."
        />

        <div className="mt-16 grid gap-px bg-border/60 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                className="group relative bg-ink p-8 transition-all duration-500 hover:bg-card lg:p-10"
              >
                <div className="flex h-12 w-12 items-center justify-center border border-gold/40 text-gold transition-all duration-500 group-hover:bg-gold group-hover:text-ink">
                  <Icon size={20} strokeWidth={1.4} />
                </div>
                <h3 className="mt-6 font-display text-2xl text-foreground lg:text-3xl">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {s.desc}
                </p>
                <div className="mt-8 h-px w-10 bg-gold/60 transition-all duration-500 group-hover:w-20" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

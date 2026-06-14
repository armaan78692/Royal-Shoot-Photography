import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { Hero } from "@/components/site/Hero";
import { Stats } from "@/components/site/Stats";
import { Portfolio } from "@/components/site/Portfolio";
import { Signature } from "@/components/site/Signature";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { Testimonials } from "@/components/site/Testimonials";
import { InstagramFeed } from "@/components/site/InstagramFeed";
import { Pricing } from "@/components/site/Pricing";
import { FAQ } from "@/components/site/FAQ";
import { BookingCTA } from "@/components/site/BookingCTA";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Royal Shoot Photography — Cinematic Wedding & Portrait Photography" },
      {
        name: "description",
        content:
          "Award-winning cinematic photography & film studio. Wedding, pre-wedding, fashion, portrait & event coverage — crafted slowly, told beautifully.",
      },
      { property: "og:title", content: "Royal Shoot Photography — Cinematic Photography" },
      {
        property: "og:description",
        content: "Timeless stories told through lens. Weddings, films, fashion & portraits.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <SiteShell>
      <Hero />
      <Stats />
      <Portfolio />
      <Signature />
      <About />
      <Services />
      <Testimonials />
      <InstagramFeed />
      <Pricing />
      <FAQ />
      <BookingCTA />
    </SiteShell>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { Contact } from "@/components/site/Contact";
import { FAQ } from "@/components/site/FAQ";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Royal Shoot Photography" },
      {
        name: "description",
        content:
          "Enquire about your wedding, pre-wedding shoot, fashion editorial or cinematic film. We respond within 24 hours.",
      },
      { property: "og:title", content: "Contact — Royal Shoot Photography" },
      {
        property: "og:description",
        content: "Begin your enquiry. Studio in Mumbai. Available worldwide.",
      },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <SiteShell>
      <div className="bg-ink pt-40 pb-8 text-center">
        <div className="mx-auto max-w-3xl px-6">
          <div className="flex items-center justify-center gap-3">
            <span className="hairline" />
            <span className="eyebrow">Say Hello</span>
            <span className="hairline" />
          </div>
          <h1 className="mt-6 font-display text-5xl leading-[1.05] md:text-7xl">
            Let's <em className="gold-gradient-text not-italic">talk</em>.
          </h1>
        </div>
      </div>
      <Contact />
      <FAQ />
    </SiteShell>
  );
}

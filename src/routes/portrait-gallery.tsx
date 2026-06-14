import { createFileRoute } from "@tanstack/react-router";
import { CategoryGallery } from "@/components/site/CategoryGallery";
import { portraitImages } from "@/lib/gallery-data";

export const Route = createFileRoute("/portrait-gallery")({
  head: () => ({
    meta: [
      { title: "Portrait Gallery — Royal Shoot Photography" },
      { name: "description", content: "Quiet, considered portraiture — studio and natural-light sessions for individuals and families." },
      { property: "og:title", content: "Portrait Gallery — Royal Shoot Photography" },
      { property: "og:description", content: "Quiet, considered portraiture in studio and natural light." },
    ],
    links: [{ rel: "canonical", href: "/portrait-gallery" }],
  }),
  component: () => (
    <CategoryGallery
      eyebrow="Birthday"
      title="Quiet light,"
      highlight="honest frames."
      description="Portrait sessions designed around you — soft daylight, classic studio and editorial finishes."
      images={portraitImages}
    />
  ),
});

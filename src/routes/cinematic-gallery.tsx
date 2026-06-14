import { createFileRoute } from "@tanstack/react-router";
import { CategoryGallery } from "@/components/site/CategoryGallery";
import { cinematicImages } from "@/lib/gallery-data";

export const Route = createFileRoute("/cinematic-gallery")({
  head: () => ({
    meta: [
      { title: "Cinematic Gallery — Royal Shoot Photography" },
      { name: "description", content: "Cinematic stills and film frames — moments suspended like cinema." },
      { property: "og:title", content: "Cinematic Gallery — Royal Shoot Photography" },
      { property: "og:description", content: "Cinematic stills and film frames." },
    ],
    links: [{ rel: "canonical", href: "/cinematic-gallery" }],
  }),
  component: () => (
    <CategoryGallery
      eyebrow="Award & Recognition"
      title="Moments,"
      highlight="like cinema."
      description="Anamorphic frames, slow-motion stories and film-grain stills from our cinematic chapters."
      images={cinematicImages}
    />
  ),
});

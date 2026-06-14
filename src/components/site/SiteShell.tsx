import type { ReactNode } from "react";
import { Nav } from "./Nav";
import { Footer } from "./Footer";
import { WhatsAppFab } from "./WhatsAppFab";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>{children}</main>
      <Footer />
      <WhatsAppFab />
    </div>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <div
      className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : "text-left"}`}
    >
      {eyebrow && (
        <div className={`flex items-center gap-3 ${align === "center" ? "justify-center" : ""}`}>
          <span className="hairline" />
          <span className="eyebrow">{eyebrow}</span>
          <span className="hairline" />
        </div>
      )}
      <h2 className="mt-6 font-display text-4xl leading-[1.05] text-foreground md:text-5xl lg:text-6xl">
        {title}
      </h2>
      {description && (
        <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}

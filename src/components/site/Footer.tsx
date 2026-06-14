import { Link } from "@tanstack/react-router";
import { Instagram, Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import logo from "@/assets/rsicon.png";
import {
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  PHONE_TEL,
  WHATSAPP_DISPLAY,
  WHATSAPP_URL,
} from "@/lib/social";

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-ink">
      <div className="mx-auto max-w-[1400px] px-6 py-20 lg:px-10">
        <div className="grid gap-14 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <img
              src={logo}
              alt="Royal Shoot Photography"
              className="h-20 w-auto"
            />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted-foreground">
              A cinematic photography & film studio crafting timeless visual stories
              for life's most luminous moments.
            </p>
          </div>

          <div>
            <h4 className="eyebrow">Explore</h4>
            <ul className="mt-5 space-y-3 text-sm">
              {[
                { label: "Portfolio", to: "/portfolio" },
                { label: "About", to: "/about" },
                { label: "Contact", to: "/contact" },
              ].map((l) => (
                <li key={l.label}>
                  <Link
                    to={l.to}
                    className="text-foreground/70 transition-colors hover:text-gold"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="eyebrow">Contact</h4>
            <ul className="mt-5 space-y-3 text-sm text-foreground/70">
              <li className="flex items-start gap-3">
                <Mail size={14} className="mt-1 text-gold" />
                <a href="mailto:rahulkr30398@gmail.com" className="hover:text-gold">
                  rahulkr30398@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={14} className="mt-1 text-gold" />
                <a href={PHONE_TEL} className="hover:text-gold">{WHATSAPP_DISPLAY}</a>
              </li>
              <li className="flex items-start gap-3">
                <MessageCircle size={14} className="mt-1 text-gold" />
                <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="hover:text-gold">
                  WhatsApp Chat
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={14} className="mt-1 text-gold" />
                Tejpartap Nager&nbsp; ,Anishabad ,{"\n"}Patna- 800002 ,Bihar ,India
              </li>
            </ul>
          </div>

          <div>
            <h4 className="eyebrow">Follow</h4>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-center gap-2 text-sm text-foreground/70 transition-colors hover:text-gold"
            >
              <Instagram size={16} /> @{INSTAGRAM_HANDLE}
            </a>
            <div className="mt-5 flex items-center gap-3">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center border border-border/60 text-foreground/70 transition-all hover:border-gold hover:text-gold"
              >
                <Instagram size={16} />
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="flex h-10 w-10 items-center justify-center border border-border/60 text-foreground/70 transition-all hover:border-gold hover:text-gold"
              >
                <MessageCircle size={16} />
              </a>
            </div>
            <p className="mt-6 text-xs text-muted-foreground">
              Available worldwide • Based in India
            </p>
          </div>
        </div>

        <div className="mt-16 border-t border-border/60 pt-8 text-center text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Royal Shoot Photography. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}


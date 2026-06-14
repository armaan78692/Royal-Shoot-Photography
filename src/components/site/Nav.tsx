import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import logo from "@/assets/rsicon.png";

type NavItem =
  | { label: string; to: string; hash?: string }
  | { label: string; hash: string };

const NAV: readonly NavItem[] = [
  { label: "Home", to: "/" },
  { label: "Portfolio", to: "/portfolio" },
  { label: "Services", to: "/", hash: "services" },
  { label: "About", to: "/about" },
  { label: "Gallery", to: "/", hash: "gallery" },
  { label: "Testimonials", to: "/", hash: "testimonials" },
  { label: "Contact", to: "/contact" },
] as const;

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/85 backdrop-blur-xl border-b border-border/60 py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 lg:px-10">
        <Link to="/" className="group flex items-center gap-3">
          <img
            src={logo}
            alt="Royal Shoot Photography"
            className="h-11 w-auto md:h-12"
          />
          <span className="hidden flex-col leading-tight sm:flex">
            <span className="font-display text-base tracking-tight text-foreground">
              Royal <span className="text-gold">Shoot</span>
            </span>
            <span className="text-[9px] uppercase tracking-[0.45em] text-muted-foreground">
              Photography
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-9 lg:flex">
          {NAV.map((item) => (
            <Link
              key={item.label}
              to={"to" in item ? item.to : "/"}
              hash={item.hash}
              className="group relative text-xs uppercase tracking-[0.25em] text-foreground/80 transition-colors hover:text-gold"
              activeProps={item.hash ? undefined : { className: "text-gold" }}
              activeOptions={{ exact: true }}
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-gold transition-all duration-500 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <Link
            to="/contact"
            className="border border-gold/50 px-5 py-2.5 text-[11px] uppercase tracking-[0.25em] text-gold transition-all hover:bg-gold hover:text-ink"
          >
            Book a Shoot
          </Link>
        </div>

        <button
          className="lg:hidden text-foreground"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden animate-fade-in-slow border-t border-border/60 bg-background/95 backdrop-blur-xl">
          <nav className="flex flex-col gap-1 px-6 py-6">
            {NAV.map((item) => (
              <Link
                key={item.label}
                to={"to" in item ? item.to : "/"}
                hash={item.hash}
                onClick={() => setOpen(false)}
                className="py-3 text-sm uppercase tracking-[0.25em] text-foreground/80"
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-4 border border-gold/60 px-5 py-3 text-center text-[11px] uppercase tracking-[0.25em] text-gold"
            >
              Book a Shoot
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

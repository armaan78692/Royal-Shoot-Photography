import { WHATSAPP_URL } from "@/lib/social";

export function WhatsAppFab() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="group fixed bottom-6 right-6 z-40 flex items-center gap-3 rounded-full border border-gold/40 bg-ink/90 px-4 py-3 text-sm text-foreground shadow-luxe backdrop-blur-xl transition-all hover:border-gold hover:scale-105"
    >
      <span className="relative flex h-9 w-9 items-center justify-center rounded-full bg-gold">
        <span className="absolute inset-0 animate-ping rounded-full bg-gold/50" />
        <svg viewBox="0 0 32 32" className="relative h-5 w-5 fill-ink" aria-hidden="true">
          <path d="M19.11 17.27c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.14-1.14-.42-2.17-1.34-.8-.71-1.34-1.59-1.5-1.86-.16-.27-.02-.42.12-.55.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.02-.22-.53-.45-.46-.61-.47-.16-.01-.34-.01-.52-.01-.18 0-.48.07-.73.34-.25.27-.95.93-.95 2.27 0 1.34.98 2.63 1.11 2.81.14.18 1.92 2.93 4.65 4.11.65.28 1.16.45 1.55.58.65.21 1.25.18 1.72.11.52-.08 1.6-.65 1.83-1.28.22-.63.22-1.18.16-1.28-.07-.11-.25-.18-.52-.32zM16.02 5.33h-.01C10.13 5.33 5.34 10.12 5.34 16c0 2.33.74 4.49 1.99 6.26L6.04 26.67l4.55-1.45c1.71.94 3.66 1.47 5.43 1.47h.01c5.88 0 10.67-4.79 10.67-10.67S21.91 5.33 16.02 5.33zm0 19.55h-.01c-1.58 0-3.13-.43-4.49-1.23l-.32-.19-3.34 1.06 1.07-3.25-.21-.33C7.86 19.55 7.34 17.8 7.34 16c0-4.78 3.89-8.67 8.68-8.67 2.32 0 4.5.9 6.14 2.54 1.64 1.64 2.54 3.82 2.54 6.14 0 4.78-3.89 8.67-8.68 8.67z" />
        </svg>
      </span>
      <span className="hidden pr-1 text-[11px] uppercase tracking-[0.25em] sm:inline">
        Chat for Booking
      </span>
    </a>
  );
}

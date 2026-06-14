import { useState } from "react";
import { Mail, Phone, MapPin, MessageCircle, Send, Instagram, CalendarCheck } from "lucide-react";
import { z } from "zod";
import { SectionHeader } from "./SiteShell";
import {
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  PHONE_TEL,
  WHATSAPP_DISPLAY,
  WHATSAPP_URL,
} from "@/lib/social";

const FORMSUBMIT_ENDPOINT = "https://formsubmit.co/ajax/rahulkr30398@gmail.com";

const WHATSAPP_POST_SUBMIT_URL = `https://wa.me/916287902444?text=${encodeURIComponent(
  "Hello, I submitted an enquiry through your website and would like to discuss photography services.",
)}`;

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  phone: z.string().trim().min(6, "Please enter a valid phone").max(20),
  type: z.string().trim().min(1, "Please enter an event type").max(60),
  message: z.string().trim().min(10, "Please share a few details").max(1000),
});

export function Contact() {
  const [status, setStatus] = useState<null | "ok" | "error">(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const values = {
      name: String(fd.get("name") ?? ""),
      email: String(fd.get("email") ?? ""),
      phone: String(fd.get("phone") ?? ""),
      type: String(fd.get("type") ?? ""),
      message: String(fd.get("message") ?? ""),
    };
    const result = schema.safeParse(values);
    if (!result.success) {
      const errs: Record<string, string> = {};
      result.error.issues.forEach((i) => (errs[i.path[0] as string] = i.message));
      setErrors(errs);
      setStatus("error");
      return;
    }
    setErrors({});
    setSubmitting(true);
    try {
      const res = await fetch(FORMSUBMIT_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          ...values,
          _subject: "New Photography Booking Inquiry",
          _captcha: "false",
          _template: "table",
        }),
      });
      if (!res.ok) throw new Error("Submission failed");
      setStatus("ok");
      form.reset();
    } catch {
      setStatus("error");
      setErrors({ form: "Something went wrong. Please try again or WhatsApp us." });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section id="contact" className="bg-ink py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <SectionHeader
          eyebrow="Get in touch"
          title={<>Begin your <em className="gold-gradient-text not-italic">enquiry</em>.</>}
          description="Tell us about your day, your vision, and the moments you'd like remembered. We respond within 24 hours."
        />

        <div className="mt-16 grid gap-12 lg:grid-cols-12 lg:gap-16">
          <form onSubmit={onSubmit} className="lg:col-span-7 space-y-5" noValidate>
            <input type="hidden" name="_subject" value="New Photography Booking Inquiry" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            <div className="grid gap-5 md:grid-cols-2">
              <Field label="Full Name" name="name" required error={errors.name} />
              <Field label="Email Address" name="email" type="email" required error={errors.email} />
              <Field label="Phone / WhatsApp Number" name="phone" type="tel" required error={errors.phone} />
              <Field label="Event Type" name="type" placeholder="Wedding, Pre-Wedding…" required error={errors.type} />
            </div>
            <div>
              <label className="eyebrow">Message / Event Details</label>
              <textarea
                name="message"
                rows={5}
                required
                placeholder="Date, venue, dreams, references…"
                className="mt-3 w-full border border-border/60 bg-card/30 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-gold focus:outline-none"
              />
              {errors.message && (
                <p className="mt-2 text-xs text-destructive">{errors.message}</p>
              )}
            </div>
            <button
              type="submit"
              disabled={submitting}
              className="group inline-flex items-center gap-3 bg-gold px-8 py-4 text-xs uppercase tracking-[0.3em] text-ink transition-all hover:bg-cream disabled:cursor-not-allowed disabled:opacity-70"
            >
              {submitting ? "Sending..." : "Send Enquiry"}
              {!submitting && <Send size={14} className="transition-transform group-hover:translate-x-1" />}
            </button>
            {status === "ok" && (
              <div className="space-y-4 border border-gold/40 bg-gold/5 p-5">
                <p className="text-sm text-gold">
                  Thank you! Your enquiry has been received. We will contact you shortly.
                </p>
                <a
                  href={WHATSAPP_POST_SUBMIT_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-3 bg-gold px-6 py-3 text-[11px] uppercase tracking-[0.3em] text-ink transition-all hover:bg-cream"
                >
                  <MessageCircle size={14} /> Chat on WhatsApp
                </a>
              </div>
            )}
            {status === "error" && errors.form && (
              <p className="text-sm text-destructive">{errors.form}</p>
            )}
          </form>

          <aside className="lg:col-span-5">
            <div className="border border-border/60 bg-card/30 p-8 lg:p-10">
              <h3 className="font-display text-2xl text-foreground">Studio</h3>
              <ul className="mt-6 space-y-5 text-sm text-foreground/80">
                <li className="flex items-start gap-4">
                  <MapPin className="mt-0.5 text-gold" size={18} />
                  <span>Tejpartap Nager&nbsp; ,Anishabad ,<br />Patna- 800002 ,Bihar ,India</span>
                </li>
                <li className="flex items-start gap-4">
                  <Phone className="mt-0.5 text-gold" size={18} />
                  <a href={PHONE_TEL} className="hover:text-gold">{WHATSAPP_DISPLAY}</a>
                </li>
                <li className="flex items-start gap-4">
                  <Mail className="mt-0.5 text-gold" size={18} />
                  <a href="mailto:rahulkr30398@gmail.com" className="hover:text-gold">rahulkr30398@gmail.com</a>
                </li>
                <li className="flex items-start gap-4">
                  <MessageCircle className="mt-0.5 text-gold" size={18} />
                  <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="hover:text-gold">
                    WhatsApp: {WHATSAPP_DISPLAY}
                  </a>
                </li>
                <li className="flex items-start gap-4">
                  <Instagram className="mt-0.5 text-gold" size={18} />
                  <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="hover:text-gold">
                    @{INSTAGRAM_HANDLE}
                  </a>
                </li>
              </ul>

              <div className="mt-8 grid gap-3">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center justify-center gap-3 bg-gold px-6 py-3.5 text-[11px] uppercase tracking-[0.3em] text-ink transition-all hover:bg-cream"
                >
                  <MessageCircle size={15} /> Chat for Booking
                </a>
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={PHONE_TEL}
                    className="inline-flex items-center justify-center gap-2 border border-gold/50 px-4 py-3 text-[11px] uppercase tracking-[0.25em] text-gold transition-all hover:bg-gold hover:text-ink"
                  >
                    <Phone size={14} /> Call
                  </a>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 border border-cream/30 px-4 py-3 text-[11px] uppercase tracking-[0.25em] text-foreground transition-all hover:border-gold hover:text-gold"
                  >
                    <CalendarCheck size={14} /> Book Now
                  </a>
                </div>
              </div>

              <div className="mt-8 aspect-[4/3] w-full overflow-hidden border border-border/60">
                <iframe
                  title="Studio location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3598.7736264554323!2d85.10745775000001!3d25.579197099999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f2a7ffd5b55d3d%3A0xc833de153401754d!2sTej%20Pratap%20Nagar%2C%20Patna%2C%20Bihar!5e0!3m2!1sen!2sin!4v1781421087152!5m2!1sen!2sin" 
                  className="h-full w-full grayscale"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  error,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  error?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="eyebrow">{label}</label>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        inputMode={name === "phone" ? "numeric" : undefined}
        pattern={name === "phone" ? "[0-9]*" : undefined}
        maxLength={name === "phone" ? 10 : undefined}
        onInput={(e) => {
          if (name === "phone") {
            e.currentTarget.value = e.currentTarget.value.replace(/\D/g, "");
          }
        }}
        className="mt-3 w-full border border-border/60 bg-card/30 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-gold focus:outline-none"
      />
      {error && <p className="mt-2 text-xs text-destructive">{error}</p>}
    </div>
  );
}

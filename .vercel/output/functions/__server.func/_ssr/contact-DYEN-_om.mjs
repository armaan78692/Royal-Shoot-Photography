import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { c as Phone, f as MessageCircle, g as Instagram, h as Mail, i as Send, m as MapPin, w as CalendarCheck } from "../_libs/lucide-react.mjs";
import { a as SiteShell, i as SectionHeader, n as INSTAGRAM_URL, o as WHATSAPP_DISPLAY, r as PHONE_TEL, s as WHATSAPP_URL, t as INSTAGRAM_HANDLE } from "./SiteShell-C7IkVgkG.mjs";
import { t as FAQ } from "./FAQ-B3wgWBAl.mjs";
import { n as stringType, t as objectType } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-DYEN-_om.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var FORMSUBMIT_ENDPOINT = "https://formsubmit.co/ajax/rahulkr30398@gmail.com";
var WHATSAPP_POST_SUBMIT_URL = `https://wa.me/916287902444?text=${encodeURIComponent("Hello, I submitted an enquiry through your website and would like to discuss photography services.")}`;
var schema = objectType({
	name: stringType().trim().min(2, "Please enter your name").max(100),
	email: stringType().trim().email("Please enter a valid email").max(255),
	phone: stringType().trim().min(6, "Please enter a valid phone").max(20),
	type: stringType().trim().min(1, "Please enter an event type").max(60),
	message: stringType().trim().min(10, "Please share a few details").max(1e3)
});
function Contact() {
	const [status, setStatus] = (0, import_react.useState)(null);
	const [errors, setErrors] = (0, import_react.useState)({});
	const [submitting, setSubmitting] = (0, import_react.useState)(false);
	async function onSubmit(e) {
		e.preventDefault();
		const form = e.currentTarget;
		const fd = new FormData(form);
		const values = {
			name: String(fd.get("name") ?? ""),
			email: String(fd.get("email") ?? ""),
			phone: String(fd.get("phone") ?? ""),
			type: String(fd.get("type") ?? ""),
			message: String(fd.get("message") ?? "")
		};
		const result = schema.safeParse(values);
		if (!result.success) {
			const errs = {};
			result.error.issues.forEach((i) => errs[i.path[0]] = i.message);
			setErrors(errs);
			setStatus("error");
			return;
		}
		setErrors({});
		setSubmitting(true);
		try {
			if (!(await fetch(FORMSUBMIT_ENDPOINT, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Accept: "application/json"
				},
				body: JSON.stringify({
					...values,
					_subject: "New Photography Booking Inquiry",
					_captcha: "false",
					_template: "table"
				})
			})).ok) throw new Error("Submission failed");
			setStatus("ok");
			form.reset();
		} catch {
			setStatus("error");
			setErrors({ form: "Something went wrong. Please try again or WhatsApp us." });
		} finally {
			setSubmitting(false);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "contact",
		className: "bg-ink py-24 md:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-[1400px] px-6 lg:px-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
				eyebrow: "Get in touch",
				title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					"Begin your ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
						className: "gold-gradient-text not-italic",
						children: "enquiry"
					}),
					"."
				] }),
				description: "Tell us about your day, your vision, and the moments you'd like remembered. We respond within 24 hours."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-16 grid gap-12 lg:grid-cols-12 lg:gap-16",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit,
					className: "lg:col-span-7 space-y-5",
					noValidate: true,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "hidden",
							name: "_subject",
							value: "New Photography Booking Inquiry"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "hidden",
							name: "_captcha",
							value: "false"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "hidden",
							name: "_template",
							value: "table"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-5 md:grid-cols-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Full Name",
									name: "name",
									required: true,
									error: errors.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Email Address",
									name: "email",
									type: "email",
									required: true,
									error: errors.email
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Phone / WhatsApp Number",
									name: "phone",
									type: "tel",
									required: true,
									error: errors.phone
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Event Type",
									name: "type",
									placeholder: "Wedding, Pre-Wedding…",
									required: true,
									error: errors.type
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "eyebrow",
								children: "Message / Event Details"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
								name: "message",
								rows: 5,
								required: true,
								placeholder: "Date, venue, dreams, references…",
								className: "mt-3 w-full border border-border/60 bg-card/30 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-gold focus:outline-none"
							}),
							errors.message && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-xs text-destructive",
								children: errors.message
							})
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "submit",
							disabled: submitting,
							className: "group inline-flex items-center gap-3 bg-gold px-8 py-4 text-xs uppercase tracking-[0.3em] text-ink transition-all hover:bg-cream disabled:cursor-not-allowed disabled:opacity-70",
							children: [submitting ? "Sending..." : "Send Enquiry", !submitting && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, {
								size: 14,
								className: "transition-transform group-hover:translate-x-1"
							})]
						}),
						status === "ok" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-4 border border-gold/40 bg-gold/5 p-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-gold",
								children: "Thank you! Your enquiry has been received. We will contact you shortly."
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: WHATSAPP_POST_SUBMIT_URL,
								target: "_blank",
								rel: "noreferrer",
								className: "inline-flex items-center gap-3 bg-gold px-6 py-3 text-[11px] uppercase tracking-[0.3em] text-ink transition-all hover:bg-cream",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { size: 14 }), " Chat on WhatsApp"]
							})]
						}),
						status === "error" && errors.form && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-destructive",
							children: errors.form
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
					className: "lg:col-span-5",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "border border-border/60 bg-card/30 p-8 lg:p-10",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-2xl text-foreground",
								children: "Studio"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
								className: "mt-6 space-y-5 text-sm text-foreground/80",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex items-start gap-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
											className: "mt-0.5 text-gold",
											size: 18
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
											"Tejpartap Nager\xA0 ,Anishabad ,",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
											"Patna- 800002 ,Bihar ,India"
										] })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex items-start gap-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {
											className: "mt-0.5 text-gold",
											size: 18
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: PHONE_TEL,
											className: "hover:text-gold",
											children: WHATSAPP_DISPLAY
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex items-start gap-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, {
											className: "mt-0.5 text-gold",
											size: 18
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: "mailto:rahulkr30398@gmail.com",
											className: "hover:text-gold",
											children: "rahulkr30398@gmail.com"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex items-start gap-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, {
											className: "mt-0.5 text-gold",
											size: 18
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
											href: WHATSAPP_URL,
											target: "_blank",
											rel: "noreferrer",
											className: "hover:text-gold",
											children: ["WhatsApp: ", WHATSAPP_DISPLAY]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex items-start gap-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Instagram, {
											className: "mt-0.5 text-gold",
											size: 18
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
											href: INSTAGRAM_URL,
											target: "_blank",
											rel: "noreferrer",
											className: "hover:text-gold",
											children: ["@", INSTAGRAM_HANDLE]
										})]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-8 grid gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: WHATSAPP_URL,
									target: "_blank",
									rel: "noreferrer",
									className: "group inline-flex items-center justify-center gap-3 bg-gold px-6 py-3.5 text-[11px] uppercase tracking-[0.3em] text-ink transition-all hover:bg-cream",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { size: 15 }), " Chat for Booking"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid grid-cols-2 gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: PHONE_TEL,
										className: "inline-flex items-center justify-center gap-2 border border-gold/50 px-4 py-3 text-[11px] uppercase tracking-[0.25em] text-gold transition-all hover:bg-gold hover:text-ink",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { size: 14 }), " Call"]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: WHATSAPP_URL,
										target: "_blank",
										rel: "noreferrer",
										className: "inline-flex items-center justify-center gap-2 border border-cream/30 px-4 py-3 text-[11px] uppercase tracking-[0.25em] text-foreground transition-all hover:border-gold hover:text-gold",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarCheck, { size: 14 }), " Book Now"]
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-8 aspect-[4/3] w-full overflow-hidden border border-border/60",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
									title: "Studio location",
									src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3598.7736264554323!2d85.10745775000001!3d25.579197099999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f2a7ffd5b55d3d%3A0xc833de153401754d!2sTej%20Pratap%20Nagar%2C%20Patna%2C%20Bihar!5e0!3m2!1sen!2sin!4v1781421087152!5m2!1sen!2sin",
									className: "h-full w-full grayscale",
									loading: "lazy",
									referrerPolicy: "no-referrer-when-downgrade"
								})
							})
						]
					})
				})]
			})]
		})
	});
}
function Field({ label, name, type = "text", placeholder, error, required }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
			className: "eyebrow",
			children: label
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			name,
			type,
			required,
			placeholder,
			inputMode: name === "phone" ? "numeric" : void 0,
			pattern: name === "phone" ? "[0-9]*" : void 0,
			maxLength: name === "phone" ? 10 : void 0,
			onInput: (e) => {
				if (name === "phone") e.currentTarget.value = e.currentTarget.value.replace(/\D/g, "");
			},
			className: "mt-3 w-full border border-border/60 bg-card/30 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-gold focus:outline-none"
		}),
		error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-2 text-xs text-destructive",
			children: error
		})
	] });
}
function ContactPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "bg-ink pt-40 pb-8 text-center",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-3xl px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-center gap-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "hairline" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "eyebrow",
							children: "Say Hello"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "hairline" })
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
					className: "mt-6 font-display text-5xl leading-[1.05] md:text-7xl",
					children: [
						"Let's ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
							className: "gold-gradient-text not-italic",
							children: "talk"
						}),
						"."
					]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Contact, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FAQ, {})
	] });
}
//#endregion
export { ContactPage as component };

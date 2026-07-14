import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { d as Minus, o as Plus } from "../_libs/lucide-react.mjs";
import { i as SectionHeader } from "./SiteShell-C7IkVgkG.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/FAQ-B3wgWBAl.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var FAQS = [
	{
		q: "How early should we book?",
		a: "For weddings, 6–9 months ahead is ideal — peak dates (Nov–Feb) often book out a year in advance. For portrait or editorial sessions, 2–4 weeks is usually enough."
	},
	{
		q: "What is your delivery timeline?",
		a: "Sneak peeks within 48 hours. A fully edited gallery in 3–4 weeks for portraits, 6–8 weeks for weddings. Cinematic films are delivered within 10–12 weeks."
	},
	{
		q: "Do you travel for destination weddings?",
		a: "Absolutely. We've shot across India, Europe, the UAE, and Southeast Asia. Travel and stay are added at actuals on the Luxury Signature package."
	},
	{
		q: "Is editing included?",
		a: "Yes — every delivered frame is hand-edited by our in-house team. We grade for skin tone, mood, and cinematic consistency, never over-processed."
	},
	{
		q: "Do you offer drone coverage?",
		a: "Yes, on Premium and Luxury packages. We work with DGCA-licensed pilots and carry our own gimbals and FPV drones."
	},
	{
		q: "Can we customise a package?",
		a: "Always. The packages are a starting point — tell us about your day and we'll build a quote that fits."
	}
];
function FAQ() {
	const [open, setOpen] = (0, import_react.useState)(0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-ink py-24 md:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-4xl px-6 lg:px-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
				eyebrow: "Frequently asked",
				title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					"Everything you'd like to ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
						className: "gold-gradient-text not-italic",
						children: "know"
					}),
					"."
				] })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-14 divide-y divide-border/60 border-y border-border/60",
				children: FAQS.map((f, i) => {
					const isOpen = open === i;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => setOpen(isOpen ? null : i),
						className: "flex w-full items-center justify-between gap-6 py-6 text-left",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-xl text-foreground lg:text-2xl",
							children: f.q
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: `flex h-9 w-9 shrink-0 items-center justify-center border transition-all ${isOpen ? "border-gold bg-gold text-ink" : "border-border/60 text-gold"}`,
							children: isOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, { size: 16 }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { size: 16 })
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: `grid overflow-hidden transition-all duration-500 ${isOpen ? "grid-rows-[1fr] pb-6" : "grid-rows-[0fr]"}`,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "overflow-hidden",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "max-w-2xl text-base leading-relaxed text-muted-foreground",
								children: f.a
							})
						})
					})] }, f.q);
				})
			})]
		})
	});
}
//#endregion
export { FAQ as t };

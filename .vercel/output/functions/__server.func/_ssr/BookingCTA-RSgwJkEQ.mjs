import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as hero_main_default } from "./hero-main-BRuMj-L1.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/BookingCTA-RSgwJkEQ.js
var import_jsx_runtime = require_jsx_runtime();
function BookingCTA() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative isolate overflow-hidden bg-ink py-32 md:py-40",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "absolute inset-0",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: hero_main_default,
				alt: "",
				"aria-hidden": true,
				loading: "lazy",
				className: "h-full w-full object-cover opacity-30"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-b from-ink via-ink/85 to-ink" })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative z-10 mx-auto max-w-3xl px-6 text-center lg:px-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-center gap-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "hairline" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "eyebrow",
							children: "Let's begin"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "hairline" })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "mt-6 font-display text-5xl leading-[1.05] md:text-6xl lg:text-7xl",
					children: [
						"Let's capture your",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
							className: "gold-gradient-text not-italic",
							children: "beautiful story"
						}),
						"."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mx-auto mt-8 max-w-xl text-base leading-relaxed text-muted-foreground",
					children: "We take on a limited number of weddings each year so every story gets the care it deserves. Reach out — we'd love to hear about yours."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-10 flex flex-wrap justify-center gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/contact",
						className: "inline-flex items-center gap-3 bg-gold px-8 py-4 text-xs uppercase tracking-[0.3em] text-ink transition-all hover:bg-cream",
						children: "Book Consultation"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/contact",
						className: "inline-flex items-center gap-3 border border-cream/40 px-8 py-4 text-xs uppercase tracking-[0.3em] text-cream transition-all hover:border-gold hover:text-gold",
						children: "Get a Quote"
					})]
				})
			]
		})]
	});
}
//#endregion
export { BookingCTA as t };

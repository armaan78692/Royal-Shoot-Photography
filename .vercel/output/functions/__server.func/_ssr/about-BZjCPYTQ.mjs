import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { a as SiteShell } from "./SiteShell-C7IkVgkG.mjs";
import { n as Stats, r as Testimonials, t as About } from "./Stats-DWKirXzH.mjs";
import { t as BookingCTA } from "./BookingCTA-RSgwJkEQ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-BZjCPYTQ.js
var import_jsx_runtime = require_jsx_runtime();
function AboutPage() {
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
							children: "The Studio"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "hairline" })
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
					className: "mt-6 font-display text-5xl leading-[1.05] md:text-7xl",
					children: [
						"A studio built on ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
							className: "gold-gradient-text not-italic",
							children: "light"
						}),
						"."
					]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(About, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stats, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Testimonials, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookingCTA, {})
	] });
}
//#endregion
export { AboutPage as component };

import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { a as SiteShell } from "./SiteShell-C7IkVgkG.mjs";
import { t as BookingCTA } from "./BookingCTA-RSgwJkEQ.mjs";
import { n as Signature, t as Portfolio } from "./Signature-BgjuoSf_.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/portfolio-CkJ-pod0.js
var import_jsx_runtime = require_jsx_runtime();
function PortfolioPage() {
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
							children: "The Work"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "hairline" })
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
					className: "mt-6 font-display text-5xl leading-[1.05] md:text-7xl",
					children: [
						"A decade in ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
							className: "gold-gradient-text not-italic",
							children: "frames"
						}),
						"."
					]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Portfolio, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Signature, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookingCTA, {})
	] });
}
//#endregion
export { PortfolioPage as component };

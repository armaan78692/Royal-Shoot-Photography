import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Quote, n as Star } from "../_libs/lucide-react.mjs";
import { i as SectionHeader } from "./SiteShell-C7IkVgkG.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/Stats-DWKirXzH.js
var import_jsx_runtime = require_jsx_runtime();
var about_photographer_default = "/assets/about-photographer-CYZrTnx_.jpg";
function About() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-ink py-24 md:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-[1400px] gap-14 px-6 lg:grid-cols-12 lg:gap-20 lg:px-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative lg:col-span-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -left-3 -top-3 hidden h-24 w-24 border border-gold/50 md:block" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: about_photographer_default,
						alt: "Behind the scenes — the photographer at work",
						loading: "lazy",
						className: "relative aspect-[4/5] w-full object-cover"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -bottom-3 -right-3 hidden h-24 w-24 border border-gold/50 md:block" })
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "lg:col-span-6 lg:pt-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "hairline" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "eyebrow",
							children: "About the Studio"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "mt-6 font-display text-4xl leading-[1.05] md:text-5xl lg:text-6xl",
						children: [
							"Turning moments into",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
								className: "gold-gradient-text not-italic",
								children: "timeless memories"
							}),
							"."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 space-y-5 text-base leading-relaxed text-muted-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "I am Rahul Roy Professional Cinematographer. Photography was a hobby for me earlier but now it has become a career. That is why I do this work with al my heart. I have been doing photography for 1 years and I have gained a lot of experience." }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
							"I have also shot for INDUSTRIAL(Reality Shows) Serials like Balika Vadhu, Doli Armaan, actress Neha Marda and actress of Nimki Mukhiya serial. I have shot for many Bhojpuri stars like Pawan Singh, Khesari Lal and many more. ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"Presently I am the Professional and Personal photographer of IG Vikas Vaibhav Sir Founder of (LETS INSPIRE BIHAR) and Neha Marda. I do not consider clients as clients but as family"
						] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
						className: "mt-10 grid grid-cols-3 gap-6 border-y border-border/60 py-6",
						children: [
							{
								k: "Editorial",
								v: "Bihar Expo"
							},
							{
								k: "Featured in",
								v: "WedMeGood"
							},
							{
								k: "Awards",
								v: "Rising Celebrity Photographer of Bihar"
							}
						].map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "eyebrow",
							children: i.k
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: "mt-2 font-display text-lg text-foreground",
							children: i.v
						})] }, i.k))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/contact",
						className: "mt-10 inline-flex items-center gap-3 bg-gold px-7 py-4 text-xs uppercase tracking-[0.3em] text-ink transition-all hover:bg-cream",
						children: "Let's Work Together"
					})
				]
			})]
		})
	});
}
var REVIEWS = [
	{
		name: "Shrikhala & Kushal",
		event: "Premium Wedding • Patna",
		rating: 5,
		text: "A beautifully crafted wedding story filled with emotions, elegance, and timeless memories. Every page reflects love captured perfectly."
	},
	{
		name: "Suraj & Sulekha",
		event: "Pre-Wedding",
		rating: 5,
		text: "“A romantic pre-wedding journey of Suraj & Sulekha, filled with heartfelt moments and beautifully captured memories."
	},
	{
		name: "Gautam Singhania",
		event: "Raymond MD",
		rating: 5,
		text: "An exclusive event at Hotel Maurya, Patna, featuring Gautam Singhania — professionally captured with elegance and attention to every moment."
	}
];
function Testimonials() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "testimonials",
		className: "bg-ink py-24 md:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-[1400px] px-6 lg:px-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
				eyebrow: "Kind Words",
				title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					"From the people we've had the ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
						className: "gold-gradient-text not-italic",
						children: "honour"
					}),
					" to photograph."
				] })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-16 grid gap-6 md:grid-cols-3",
				children: REVIEWS.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
					className: "group relative flex flex-col border border-border/60 bg-card/40 p-8 transition-all duration-500 hover:border-gold/60 lg:p-10",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Quote, {
							className: "absolute right-6 top-6 text-gold/30",
							size: 42
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex gap-1 text-gold",
							children: Array.from({ length: r.rating }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, {
								size: 14,
								fill: "currentColor",
								strokeWidth: 0
							}, i))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
							className: "mt-6 flex-1 font-display text-xl leading-relaxed text-foreground/90 lg:text-2xl",
							children: [
								"\"",
								r.text,
								"\""
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
							className: "mt-8 border-t border-border/60 pt-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-display text-lg text-foreground",
								children: r.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-1 text-[10px] uppercase tracking-[0.3em] text-muted-foreground",
								children: r.event
							})]
						})
					]
				}, r.name))
			})]
		})
	});
}
var STATS = [
	{
		value: "500+",
		label: "Happy Clients"
	},
	{
		value: "300+",
		label: "Events Covered"
	},
	{
		value: "8+",
		label: "Years of Craft"
	},
	{
		value: "100%",
		label: "Client Satisfaction"
	}
];
function Stats() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "border-y border-border/60 bg-ink py-20 md:py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-[1400px] px-6 lg:px-10",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-2 gap-y-12 md:grid-cols-4 md:divide-x md:divide-border/60",
				children: STATS.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "px-4 text-center md:px-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-display text-5xl leading-none text-gold md:text-6xl",
						children: s.value
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 text-[10px] uppercase tracking-[0.35em] text-muted-foreground",
						children: s.label
					})]
				}, s.label))
			})
		})
	});
}
//#endregion
export { Stats as n, Testimonials as r, About as t };

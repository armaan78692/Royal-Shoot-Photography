import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { D as ArrowUpRight } from "../_libs/lucide-react.mjs";
import { i as SectionHeader } from "./SiteShell-C7IkVgkG.mjs";
import { a as portfolio_prewedding_default, i as model5_default, n as award1_default, o as portfolio_wedding_default, r as event1_default, t as Birthday_1_default } from "./Birthday-1-BlXTb6AU.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/Signature-BgjuoSf_.js
var import_jsx_runtime = require_jsx_runtime();
var HERO = {
	src: portfolio_wedding_default,
	category: "Wedding",
	title: "Shrikhala & Kushal",
	to: "/wedding-gallery"
};
var TOP_SUPPORTING = [{
	src: portfolio_prewedding_default,
	category: "Pre-Wedding",
	title: "Suraj & Sulekha",
	to: "/pre-wedding-gallery"
}, {
	src: model5_default,
	category: "Model Shoot",
	title: "Style Portraits",
	to: "/fashion-gallery"
}];
var BOTTOM_ROW = [
	{
		src: event1_default,
		category: "Event",
		title: "Beautifully Captured",
		to: "/event-gallery"
	},
	{
		src: Birthday_1_default,
		category: "Birthday",
		title: "Little Celebrations",
		to: "/portrait-gallery"
	},
	{
		src: award1_default,
		category: "Awards & Recognition",
		title: "Royal Shoot Photography",
		to: "/cinematic-gallery"
	}
];
function PortfolioCard({ item, className = "", aspect = "aspect-[4/5]" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: item.to,
		className: `group relative block overflow-hidden ${aspect} ${className}`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: item.src,
				alt: `${item.title} — ${item.category} photography`,
				loading: "lazy",
				className: "h-full w-full object-cover transition-transform duration-[1600ms] ease-out group-hover:scale-110"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent opacity-80 transition-opacity duration-700 group-hover:opacity-95" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-3 border border-gold/0 transition-all duration-700 group-hover:inset-4 group-hover:border-gold/40" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6 lg:p-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "translate-y-2 transition-transform duration-700 group-hover:translate-y-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-6 bg-gold/80" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[10px] uppercase tracking-[0.35em] text-gold",
							children: item.category
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-3 font-display text-xl leading-tight text-cream md:text-2xl",
						children: item.title
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex h-11 w-11 shrink-0 items-center justify-center border border-cream/30 text-cream opacity-0 transition-all duration-700 group-hover:border-gold group-hover:text-gold group-hover:opacity-100",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { size: 18 })
				})]
			})
		]
	});
}
function Portfolio() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "gallery",
		className: "bg-ink py-24 md:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-[1400px] px-6 lg:px-12",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
					eyebrow: "Featured Portfolio",
					title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						"Frames that ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
							className: "gold-gradient-text not-italic",
							children: "linger"
						}),
						"."
					] }),
					description: "Six chapters from our most cherished assignments. Step into each world for the full story."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-16 grid grid-cols-1 gap-5 md:gap-6 lg:grid-cols-3 lg:gap-7",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "lg:col-span-2",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PortfolioCard, {
							item: HERO,
							aspect: "aspect-[4/5] lg:aspect-[5/6]"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6 lg:grid-cols-1 lg:gap-7",
						children: TOP_SUPPORTING.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PortfolioCard, {
							item,
							aspect: "aspect-[4/5] lg:aspect-auto lg:h-full"
						}, item.title))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 md:mt-6 md:gap-6 lg:grid-cols-3 lg:mt-7 lg:gap-7",
					children: BOTTOM_ROW.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PortfolioCard, {
						item,
						aspect: "aspect-[4/5]"
					}, item.title))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-20 flex flex-col items-center gap-6 text-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "hairline" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "eyebrow",
								children: "Explore the archive"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "hairline" })
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/portfolio",
						className: "inline-flex items-center gap-3 border border-gold/60 px-10 py-4 text-xs uppercase tracking-[0.3em] text-gold transition-all hover:bg-gold hover:text-ink hover:shadow-[0_0_28px_rgba(212,175,55,0.35)]",
						children: ["View Full Portfolio ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { size: 16 })]
					})]
				})
			]
		})
	});
}
var STORIES = [
	{
		img: portfolio_wedding_default,
		title: "Shrikhala & Kushal — An IPS Family",
		overview: "Three days of laughter, ritual, and reverence in the heart of Udaipur. A wedding scored to candlelight.",
		location: "Patna, Bihar"
	},
	{
		img: portfolio_prewedding_default,
		title: "Suraj & Sulekha - An Income Tax Family",
		overview: "A sunrise pre-wedding above the clouds; quiet, intimate, painterly.",
		location: "Patna"
	},
	{
		img: event1_default,
		title: "Raymonds Shop Event",
		overview: "An exclusive corporate gathering at Hotel Maurya, Patna, featuring the esteemed presence of Gautam Singhania, MD of Raymond.",
		location: "Patna, Bihar"
	}
];
function Signature() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-charcoal/40 py-24 md:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-[1400px] px-6 lg:px-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
				eyebrow: "Signature Stories",
				title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					"Editorial chapters, ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
						className: "gold-gradient-text not-italic",
						children: "told slowly"
					}),
					"."
				] })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-16 space-y-24",
				children: STORIES.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: `grid items-center gap-10 lg:grid-cols-12 lg:gap-16 ${i % 2 === 1 ? "lg:[&>figure]:order-2" : ""}`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("figure", {
						className: "relative overflow-hidden lg:col-span-7",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: s.img,
							alt: s.title,
							loading: "lazy",
							className: "aspect-[4/3] w-full object-cover transition-transform duration-[1400ms] hover:scale-105"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "lg:col-span-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "eyebrow",
								children: ["Chapter ", String(i + 1).padStart(2, "0")]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-4 font-display text-4xl leading-tight text-foreground md:text-5xl",
								children: s.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-6 text-base leading-relaxed text-muted-foreground",
								children: s.overview
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
								className: "mt-8 grid grid-cols-2 gap-6 border-t border-border/60 pt-6 text-xs",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "eyebrow",
									children: "Location"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
									className: "mt-2 text-foreground/90",
									children: s.location
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "eyebrow",
									children: "Delivered"
								}) })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "#",
								className: "group mt-8 inline-flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-gold",
								children: ["Read the Story", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {
									size: 16,
									className: "transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
								})]
							})
						]
					})]
				}, s.title))
			})]
		})
	});
}
//#endregion
export { Signature as n, Portfolio as t };

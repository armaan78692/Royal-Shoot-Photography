import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { O as ArrowRight, b as ChevronLeft, k as ArrowLeft, t as X, y as ChevronRight } from "../_libs/lucide-react.mjs";
import { a as SiteShell } from "./SiteShell-C7IkVgkG.mjs";
import { t as hero_main_default } from "./hero-main-BRuMj-L1.mjs";
import { a as portfolio_prewedding_default, i as model5_default, n as award1_default, o as portfolio_wedding_default, r as event1_default, t as Birthday_1_default } from "./Birthday-1-BlXTb6AU.mjs";
import { a as model_default, i as model4_default, n as model2_default, o as portfolio_fashion_default, r as model3_default, s as wedding_couple2_default, t as Event_14_default } from "./Event-14-D1TtKAJ_.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/gallery-data-BqqVyQ9Q.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function CategoryGallery({ eyebrow, title, highlight, description, images }) {
	const [active, setActive] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		if (active === null) return;
		const onKey = (e) => {
			if (e.key === "Escape") setActive(null);
			if (e.key === "ArrowRight") setActive((i) => i === null ? null : (i + 1) % images.length);
			if (e.key === "ArrowLeft") setActive((i) => i === null ? null : (i - 1 + images.length) % images.length);
		};
		window.addEventListener("keydown", onKey);
		document.body.style.overflow = "hidden";
		return () => {
			window.removeEventListener("keydown", onKey);
			document.body.style.overflow = "";
		};
	}, [active, images.length]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative isolate overflow-hidden bg-ink pt-40 pb-20 md:pt-48 md:pb-28",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute inset-0",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: images[0]?.src,
					alt: "",
					"aria-hidden": true,
					className: "h-full w-full object-cover opacity-25"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-b from-ink/80 via-ink/85 to-ink" })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 mx-auto max-w-3xl px-6 text-center lg:px-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-center gap-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "hairline" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "eyebrow",
								children: eyebrow
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "hairline" })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "mt-6 font-display text-5xl leading-[1.05] md:text-6xl lg:text-7xl",
						children: [
							title,
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
								className: "gold-gradient-text not-italic",
								children: highlight
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground",
						children: description
					})
				]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-ink border-t border-gold/10",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex max-w-[1500px] flex-col gap-4 px-6 py-6 sm:flex-row sm:items-center sm:justify-between lg:px-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					"aria-label": "Breadcrumb",
					className: "flex items-center gap-2 text-[11px] uppercase tracking-[0.3em] text-muted-foreground",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/",
							className: "transition-colors hover:text-gold",
							children: "Home"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, {
							size: 12,
							className: "text-gold/60"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-cream/80",
							children: eyebrow
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					className: "group inline-flex items-center gap-3 self-start border border-gold/40 px-5 py-2.5 text-[11px] uppercase tracking-[0.3em] text-gold transition-all hover:bg-gold hover:text-ink hover:shadow-[0_0_24px_rgba(212,175,55,0.35)] sm:self-auto",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, {
						size: 14,
						className: "transition-transform group-hover:-translate-x-1"
					}), "Back to Home"]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-ink pb-24 md:pb-32",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto max-w-[1500px] px-6 lg:px-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "columns-1 gap-4 sm:columns-2 lg:columns-3 xl:columns-4 [column-fill:_balance]",
					children: images.map((img, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => setActive(i),
						className: "group relative mb-4 block w-full overflow-hidden break-inside-avoid focus:outline-none",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: img.src,
							alt: img.alt,
							loading: "lazy",
							className: "h-auto w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" })]
					}, i))
				})
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-ink pb-28",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-2xl px-6 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-center gap-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "hairline" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "eyebrow",
								children: "Ready when you are"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "hairline" })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "mt-6 font-display text-4xl leading-[1.05] md:text-5xl",
						children: [
							"Book your ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
								className: "gold-gradient-text not-italic",
								children: "shoot"
							}),
							"."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 text-muted-foreground",
						children: "Limited dates each season — reach out and let's craft something timeless."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/contact",
						className: "mt-8 inline-flex items-center gap-3 bg-gold px-8 py-4 text-xs uppercase tracking-[0.3em] text-ink transition-all hover:bg-cream",
						children: ["Book Your Shoot ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 16 })]
					})
				]
			})
		}),
		active !== null && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "fixed inset-0 z-[100] flex items-center justify-center bg-ink/95 backdrop-blur-md animate-fade-in-slow",
			onClick: () => setActive(null),
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: "absolute right-6 top-6 text-cream/80 hover:text-gold",
					onClick: (e) => {
						e.stopPropagation();
						setActive(null);
					},
					"aria-label": "Close",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { size: 28 })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: "absolute left-4 md:left-8 text-cream/80 hover:text-gold",
					onClick: (e) => {
						e.stopPropagation();
						setActive((i) => i === null ? null : (i - 1 + images.length) % images.length);
					},
					"aria-label": "Previous",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { size: 40 })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: "absolute right-4 md:right-8 text-cream/80 hover:text-gold",
					onClick: (e) => {
						e.stopPropagation();
						setActive((i) => i === null ? null : (i + 1) % images.length);
					},
					"aria-label": "Next",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { size: 40 })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: images[active].src,
					alt: images[active].alt,
					className: "max-h-[88vh] max-w-[92vw] object-contain shadow-2xl",
					onClick: (e) => e.stopPropagation()
				})
			]
		})
	] });
}
var wedding_entry_default = "/assets/wedding-entry-AdSG0quo.jpg";
var wedding_couple3_default = "/assets/wedding-couple3-BprsliUc.jpg";
var couple_pic2_default = "/assets/couple-pic2-BgVuJhgf.jpg";
var Wedding_4_default = "/assets/Wedding-4-BVglZe0f.jpg";
var Wedding_6_default = "/assets/Wedding-6-BavRzVop.jpg";
var Wedding_7_default = "/assets/Wedding-7-ClC0o67k.jpg";
var model8_default = "/assets/model8-CSlyHBDP.jpg";
var model6_default = "/assets/model6-Cr75hT2E.jpg";
var model9_default = "/assets/model9-l3t54TZi.jpg";
var model10_default = "/assets/model10-DGqzWiY0.jpg";
var model11_default = "/assets/model11-Ca5eIl1O.jpeg";
var pre_wedding2_default = "/assets/pre-wedding2-DKXjU7Jr.jpeg";
var Pre_Wedding_3_default = "/assets/Pre-Wedding-3-BOcyJ0Dq.jpg";
var pre_wedding4_default = "/assets/pre-wedding4-Cg4o-imo.jpeg";
var pre_wedding5_default = "/assets/pre-wedding5-DKNHMuIo.jpeg";
var preWedding3_default = "/assets/preWedding3-N-hDXPEo.jpg";
var birthday_event_default = "/assets/birthday-event-Ce528yIg.jpg";
var event3_default = "/assets/event3-CRnBLjQb.jpg";
var event5_default = "/assets/event5-C1BEW_om.jpg";
var event6_default = "/assets/event6-CZpe26gQ.jpg";
var event7_default = "/assets/event7-dsBTAjqh.jpg";
var event8_default = "/assets/event8-CbkS0n1h.jpg";
var Event_9_default = "/assets/Event-9-BXSiG1eu.jpg";
var Event_10_default = "/assets/Event-10-BAyVp5r4.jpg";
var Event_12_default = "/assets/Event-12-DvNVu1k-.jpg";
var Event_13_default = "/assets/Event-13-Dv8YRn9S.jpg";
var weddingGroom_default = "/assets/weddingGroom-C6sEl_eV.jpg";
var award2_default = "/assets/award2-CZZAbwsC.jpg";
var award3_default = "/assets/award3-B8ANYkx3.jpg";
var award4_default = "/assets/award4-DYJSo3pr.jpg";
var award5_default = "/assets/award5-BzWcBefs.jpg";
var award6_default = "/assets/award6-CDwGpTND.jpg";
var Awards_1_default = "/assets/Awards-1-mArIFdPp.jpg";
var Awards_2_default = "/assets/Awards-2-BUtuucUm.jpg";
var Birthday_2_default = "/assets/Birthday-2-D2ltwXGT.jpg";
var Birthday_3_default = "/assets/Birthday-3-pEDgvE17.jpg";
var Birthday_4_default = "/assets/Birthday-4-CvjQkUou.jpg";
var Birthday_5_default = "/assets/Birthday-5-CFSo-Cbu.jpg";
var Birthday_6_default = "/assets/Birthday-6-Bp9DNYc6.jpg";
var Birthday_7_default = "/assets/Birthday-7-vzxKPFS1.jpg";
var Birthday_8_default = "/assets/Birthday-8-x7A4og3L.jpg";
var Birthday_9_default = "/assets/Birthday-9-BLWyRV0Y.jpg";
var Birthday_10_default = "/assets/Birthday-10-BQoFVaIp.jpg";
var WED_default = "/assets/WED-BLWS3u_M.jpg";
var WED1_default = "/assets/WED1-RWUfRHTc.jpg";
var WED2_default = "/assets/WED2-zDnd-Dgm.jpg";
var WED3_default = "/assets/WED3-BVDHSPGY.jpg";
var WED4_default = "/assets/WED4-DgjOQ1P2.jpg";
var WED5_default = "/assets/WED5-D6ZE4tJ-.jpg";
var WED6_default = "/assets/WED6-BgUNYpFd.jpg";
var WED7_default = "/assets/WED7-C2iTT_O-.jpg";
var WED8_default = "/assets/WED8-BaVrh8BS.jpg";
var WED9_default = "/assets/WED9-BoSPu6rI.jpg";
var WED10_default = "/assets/WED10-Cb5EB2RP.jpg";
var WED11_default = "/assets/WED11-Dbqd5s-U.jpg";
var BDAY1_default = "/assets/BDAY1-DL6XnjzK.jpg";
var BDAY2_default = "/assets/BDAY2-Ds9AXjwB.jpg";
var BDAY3_default = "/assets/BDAY3-SdUWiCfd.jpg";
var BDAY4_default = "/assets/BDAY4-CWx7XeNt.jpg";
var BDAY5_default = "/assets/BDAY5-DOLSBdiz.jpg";
var BDAY6_default = "/assets/BDAY6-BHZJii-v.jpg";
var EVE1_default = "/assets/EVE1-DsGiA4y_.jpg";
var EVE2_default = "/assets/EVE2-CmBf5BK-.jpg";
var EVE3_default = "/assets/EVE3-og7Y2YLe.jpg";
var EVE4_default = "/assets/EVE4-DClFQ4F4.jpg";
var EVE5_default = "/assets/EVE5-CpENg13U.jpg";
var EVE6_default = "/assets/EVE6-Dd53fG2s.jpg";
var EVE7_default = "/assets/EVE7-DPsp8xco.jpg";
var EVE8_default = "/assets/EVE8-Dv37DuYw.jpg";
var EVE9_default = "/assets/EVE9-4U1h3Qp0.jpg";
var EVE10_default = "/assets/EVE10-AEgldeyp.jpg";
var EVE11_default = "/assets/EVE11-BRQvt_eN.jpg";
var HOSPITAL_EVENT_default = "/assets/HOSPITAL-EVENT-27qpaPrt.jpg";
var w1 = portfolio_wedding_default;
var w2 = wedding_couple2_default;
var hc = hero_main_default;
var hb = wedding_entry_default;
var sc = wedding_couple3_default;
var make = (src, alt) => ({
	src,
	alt
});
var weddingImages = [
	make(w1, "Sanaya & Arjun — Wedding"),
	make(hb, "Bridal portrait"),
	make(hc, "Couple portrait"),
	make(preWedding3_default, "Bridal portrait"),
	make(weddingGroom_default, "Vows exchanged"),
	make(event7_default, "Mandap ceremony"),
	make(sc, "Signature couple frame"),
	make(w2, "Reception moments"),
	make(couple_pic2_default, "Traditional rituals"),
	make(Wedding_4_default, "Golden hour couple"),
	make(Wedding_6_default, "Bride's quiet moment"),
	make(Wedding_7_default, "Bride's quiet moment"),
	make(WED_default, "Bride's quiet moment"),
	make(WED1_default, "Bride's quiet moment"),
	make(WED2_default, "Bride's quiet moment"),
	make(WED3_default, "Bride's quiet moment"),
	make(WED4_default, "Bride's quiet moment"),
	make(WED5_default, "Bride's quiet moment"),
	make(WED6_default, "Bride's quiet moment"),
	make(WED7_default, "Bride's quiet moment"),
	make(WED8_default, "Bride's quiet moment"),
	make(WED9_default, "Bride's quiet moment"),
	make(WED10_default, "Bride's quiet moment"),
	make(WED11_default, "Bride's quiet moment")
];
var preWeddingImages = [
	make(pre_wedding4_default, "Editorial pre-wedding"),
	make(pre_wedding5_default, "Romance unposed"),
	make(portfolio_prewedding_default, "Misty Hills — Coorg"),
	make(Pre_Wedding_3_default, "Couple in golden light"),
	make(pre_wedding2_default, "Sunset embrace")
];
var eventImages = [
	make(event1_default, "Reception lights"),
	make(event5_default, "Taj Palace Gala"),
	make(Event_9_default, "Stage lighting"),
	make(event8_default, "Taj Palace Gala"),
	make(Event_10_default, "Crowd moments"),
	make(event6_default, "Taj Palace Gala"),
	make(event3_default, "Taj Palace Gala"),
	make(Event_12_default, "Taj Palace Gala"),
	make(Event_13_default, "Taj Palace Gala"),
	make(Event_14_default, "Taj Palace Gala"),
	make(EVE1_default, "Taj Palace Gala"),
	make(EVE2_default, "Taj Palace Gala"),
	make(EVE3_default, "Taj Palace Gala"),
	make(EVE4_default, "Taj Palace Gala"),
	make(EVE5_default, "Taj Palace Gala"),
	make(EVE6_default, "Taj Palace Gala"),
	make(EVE7_default, "Taj Palace Gala"),
	make(EVE8_default, "Taj Palace Gala"),
	make(EVE9_default, "Taj Palace Gala"),
	make(EVE10_default, "Taj Palace Gala"),
	make(EVE11_default, "Taj Palace Gala"),
	make(HOSPITAL_EVENT_default, "Taj Palace Gala")
];
var fashionImages = [
	make(portfolio_fashion_default, "Editorial — Noir"),
	make(model4_default, "Studio fashion"),
	make(model_default, "Designer wear"),
	make(model3_default, "High fashion"),
	make(model5_default, "Couture portrait"),
	make(model8_default, "Avant-garde"),
	make(model9_default, "Lookbook frame"),
	make(model10_default, "Glow editorial"),
	make(model11_default, "Campaign shot"),
	make(model6_default, "Moody silhouette"),
	make(model2_default, "Bridal couture")
];
var portraitImages = [
	make(Birthday_1_default, "Window Light Study"),
	make(Birthday_2_default, "Couple portrait"),
	make(Birthday_6_default, "Outdoor portrait"),
	make(BDAY1_default, "Headshot session"),
	make(Birthday_3_default, "Quiet portrait"),
	make(Birthday_4_default, "Soft daylight"),
	make(Birthday_7_default, "Family frame"),
	make(Birthday_5_default, "Studio close-up"),
	make(Birthday_8_default, "Bridal beauty"),
	make(Birthday_9_default, "Quiet portrait"),
	make(birthday_event_default, "Black & white study"),
	make(Birthday_10_default, "Headshot session"),
	make(BDAY2_default, "Headshot session"),
	make(BDAY3_default, "Headshot session"),
	make(BDAY4_default, "Headshot session"),
	make(BDAY5_default, "Headshot session"),
	make(BDAY6_default, "Headshot session")
];
var cinematicImages = [
	make(award1_default, "Behind the Frame"),
	make(award2_default, "Cinematic still"),
	make(award3_default, "Film grain love"),
	make(award4_default, "Anamorphic frame"),
	make(Awards_1_default, "Romantic cut"),
	make(award5_default, "Slow motion moment"),
	make(Awards_2_default, "Romantic cut"),
	make(award6_default, "Romantic cut")
];
//#endregion
export { portraitImages as a, fashionImages as i, cinematicImages as n, preWeddingImages as o, eventImages as r, weddingImages as s, CategoryGallery as t };

import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as Phone, f as MessageCircle, g as Instagram, h as Mail, m as MapPin, p as Menu, t as X } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/SiteShell-C7IkVgkG.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var rsicon_default = "/assets/rsicon-D_Ol6phw.png";
var NAV = [
	{
		label: "Home",
		to: "/"
	},
	{
		label: "Portfolio",
		to: "/portfolio"
	},
	{
		label: "Services",
		to: "/",
		hash: "services"
	},
	{
		label: "About",
		to: "/about"
	},
	{
		label: "Gallery",
		to: "/",
		hash: "gallery"
	},
	{
		label: "Testimonials",
		to: "/",
		hash: "testimonials"
	},
	{
		label: "Contact",
		to: "/contact"
	}
];
function Nav() {
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [open, setOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 24);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: `fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? "bg-background/85 backdrop-blur-xl border-b border-border/60 py-3" : "bg-transparent py-6"}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-[1400px] items-center justify-between px-6 lg:px-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					className: "group flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: rsicon_default,
						alt: "Royal Shoot Photography",
						className: "h-11 w-auto md:h-12"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "hidden flex-col leading-tight sm:flex",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "font-display text-base tracking-tight text-foreground",
							children: ["Royal ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-gold",
								children: "Shoot"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[9px] uppercase tracking-[0.45em] text-muted-foreground",
							children: "Photography"
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden items-center gap-9 lg:flex",
					children: NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "to" in item ? item.to : "/",
						hash: item.hash,
						className: "group relative text-xs uppercase tracking-[0.25em] text-foreground/80 transition-colors hover:text-gold",
						activeProps: item.hash ? void 0 : { className: "text-gold" },
						activeOptions: { exact: true },
						children: [item.label, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute -bottom-1 left-0 h-px w-0 bg-gold transition-all duration-500 group-hover:w-full" })]
					}, item.label))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "hidden items-center gap-4 lg:flex",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/contact",
						className: "border border-gold/50 px-5 py-2.5 text-[11px] uppercase tracking-[0.25em] text-gold transition-all hover:bg-gold hover:text-ink",
						children: "Book a Shoot"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: "lg:hidden text-foreground",
					onClick: () => setOpen((o) => !o),
					"aria-label": "Toggle menu",
					children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { size: 22 }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { size: 22 })
				})
			]
		}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "lg:hidden animate-fade-in-slow border-t border-border/60 bg-background/95 backdrop-blur-xl",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "flex flex-col gap-1 px-6 py-6",
				children: [NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "to" in item ? item.to : "/",
					hash: item.hash,
					onClick: () => setOpen(false),
					className: "py-3 text-sm uppercase tracking-[0.25em] text-foreground/80",
					children: item.label
				}, item.label)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/contact",
					onClick: () => setOpen(false),
					className: "mt-4 border border-gold/60 px-5 py-3 text-center text-[11px] uppercase tracking-[0.25em] text-gold",
					children: "Book a Shoot"
				})]
			})
		})]
	});
}
var WHATSAPP_NUMBER = "916287902444";
var WHATSAPP_DISPLAY = "+91 6287902444";
var WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hello, I visited your website and I want to inquire about photography services.")}`;
var INSTAGRAM_HANDLE = "royalshoot80";
var INSTAGRAM_URL = "https://www.instagram.com/royalshoot80";
var PHONE_TEL = "tel:+916287902444";
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "border-t border-border/60 bg-ink",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-[1400px] px-6 py-20 lg:px-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-14 md:grid-cols-2 lg:grid-cols-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: rsicon_default,
						alt: "Royal Shoot Photography",
						className: "h-20 w-auto"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 max-w-xs text-sm leading-relaxed text-muted-foreground",
						children: "A cinematic photography & film studio crafting timeless visual stories for life's most luminous moments."
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
						className: "eyebrow",
						children: "Explore"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-5 space-y-3 text-sm",
						children: [
							{
								label: "Portfolio",
								to: "/portfolio"
							},
							{
								label: "About",
								to: "/about"
							},
							{
								label: "Contact",
								to: "/contact"
							}
						].map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: l.to,
							className: "text-foreground/70 transition-colors hover:text-gold",
							children: l.label
						}) }, l.label))
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
						className: "eyebrow",
						children: "Contact"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "mt-5 space-y-3 text-sm text-foreground/70",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-start gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, {
									size: 14,
									className: "mt-1 text-gold"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "mailto:rahulkr30398@gmail.com",
									className: "hover:text-gold",
									children: "rahulkr30398@gmail.com"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-start gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {
									size: 14,
									className: "mt-1 text-gold"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: PHONE_TEL,
									className: "hover:text-gold",
									children: WHATSAPP_DISPLAY
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-start gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, {
									size: 14,
									className: "mt-1 text-gold"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: WHATSAPP_URL,
									target: "_blank",
									rel: "noreferrer",
									className: "hover:text-gold",
									children: "WhatsApp Chat"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-start gap-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
										size: 14,
										className: "mt-1 text-gold"
									}),
									"Tejpartap Nager\xA0 ,Anishabad ,",
									"\n",
									"Patna- 800002 ,Bihar ,India"
								]
							})
						]
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
							className: "eyebrow",
							children: "Follow"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: INSTAGRAM_URL,
							target: "_blank",
							rel: "noreferrer",
							className: "mt-5 inline-flex items-center gap-2 text-sm text-foreground/70 transition-colors hover:text-gold",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Instagram, { size: 16 }),
								" @",
								INSTAGRAM_HANDLE
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-5 flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: INSTAGRAM_URL,
								target: "_blank",
								rel: "noreferrer",
								"aria-label": "Instagram",
								className: "flex h-10 w-10 items-center justify-center border border-border/60 text-foreground/70 transition-all hover:border-gold hover:text-gold",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Instagram, { size: 16 })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: WHATSAPP_URL,
								target: "_blank",
								rel: "noreferrer",
								"aria-label": "WhatsApp",
								className: "flex h-10 w-10 items-center justify-center border border-border/60 text-foreground/70 transition-all hover:border-gold hover:text-gold",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { size: 16 })
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 text-xs text-muted-foreground",
							children: "Available worldwide • Based in India"
						})
					] })
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-16 border-t border-border/60 pt-8 text-center text-xs text-muted-foreground",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" Royal Shoot Photography. All rights reserved."
				] })
			})]
		})
	});
}
function WhatsAppFab() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
		href: WHATSAPP_URL,
		target: "_blank",
		rel: "noreferrer",
		"aria-label": "Chat on WhatsApp",
		className: "group fixed bottom-6 right-6 z-40 flex items-center gap-3 rounded-full border border-gold/40 bg-ink/90 px-4 py-3 text-sm text-foreground shadow-luxe backdrop-blur-xl transition-all hover:border-gold hover:scale-105",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "relative flex h-9 w-9 items-center justify-center rounded-full bg-gold",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inset-0 animate-ping rounded-full bg-gold/50" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
				viewBox: "0 0 32 32",
				className: "relative h-5 w-5 fill-ink",
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M19.11 17.27c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.14-1.14-.42-2.17-1.34-.8-.71-1.34-1.59-1.5-1.86-.16-.27-.02-.42.12-.55.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.02-.22-.53-.45-.46-.61-.47-.16-.01-.34-.01-.52-.01-.18 0-.48.07-.73.34-.25.27-.95.93-.95 2.27 0 1.34.98 2.63 1.11 2.81.14.18 1.92 2.93 4.65 4.11.65.28 1.16.45 1.55.58.65.21 1.25.18 1.72.11.52-.08 1.6-.65 1.83-1.28.22-.63.22-1.18.16-1.28-.07-.11-.25-.18-.52-.32zM16.02 5.33h-.01C10.13 5.33 5.34 10.12 5.34 16c0 2.33.74 4.49 1.99 6.26L6.04 26.67l4.55-1.45c1.71.94 3.66 1.47 5.43 1.47h.01c5.88 0 10.67-4.79 10.67-10.67S21.91 5.33 16.02 5.33zm0 19.55h-.01c-1.58 0-3.13-.43-4.49-1.23l-.32-.19-3.34 1.06 1.07-3.25-.21-.33C7.86 19.55 7.34 17.8 7.34 16c0-4.78 3.89-8.67 8.68-8.67 2.32 0 4.5.9 6.14 2.54 1.64 1.64 2.54 3.82 2.54 6.14 0 4.78-3.89 8.67-8.68 8.67z" })
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "hidden pr-1 text-[11px] uppercase tracking-[0.25em] sm:inline",
			children: "Chat for Booking"
		})]
	});
}
function SiteShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", { children }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppFab, {})
		]
	});
}
function SectionHeader({ eyebrow, title, description, align = "center" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `max-w-3xl ${align === "center" ? "mx-auto text-center" : "text-left"}`,
		children: [
			eyebrow && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: `flex items-center gap-3 ${align === "center" ? "justify-center" : ""}`,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "hairline" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "eyebrow",
						children: eyebrow
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "hairline" })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-6 font-display text-4xl leading-[1.05] text-foreground md:text-5xl lg:text-6xl",
				children: title
			}),
			description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-6 text-base leading-relaxed text-muted-foreground md:text-lg",
				children: description
			})
		]
	});
}
//#endregion
export { SiteShell as a, SectionHeader as i, INSTAGRAM_URL as n, WHATSAPP_DISPLAY as o, PHONE_TEL as r, WHATSAPP_URL as s, INSTAGRAM_HANDLE as t };

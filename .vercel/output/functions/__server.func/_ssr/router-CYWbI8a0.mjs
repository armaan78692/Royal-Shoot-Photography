import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { c as HeadContent, d as Outlet, f as lazyRouteComponent, g as useRouter, h as Link, m as createRootRouteWithContext, p as createFileRoute, s as Scripts, u as createRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-CYWbI8a0.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-PVWwTBG7.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$11 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Royal Shoot Photography — Cinematic Wedding & Portrait Photography" },
			{
				name: "description",
				content: "Royal Shoot Photography crafts cinematic wedding, pre-wedding, fashion and event photography. Timeless stories, told beautifully."
			},
			{
				name: "author",
				content: "Royal Shoot Photography"
			},
			{
				property: "og:title",
				content: "Royal Shoot Photography — Cinematic Photography & Film"
			},
			{
				property: "og:description",
				content: "Wedding • Pre-Wedding • Events • Cinematic Films. Timeless stories told through lens."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:site_name",
				content: "Royal Shoot Photography"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "icon",
				type: "image/png",
				href: "/favicon.png"
			},
			{
				rel: "apple-touch-icon",
				href: "/apple-touch-icon.png"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$11.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
	});
}
var $$splitComponentImporter$9 = () => import("./wedding-gallery-Dv11HGME.mjs");
var Route$10 = createFileRoute("/wedding-gallery")({
	head: () => ({
		meta: [
			{ title: "Wedding Gallery — Royal Shoot Photography" },
			{
				name: "description",
				content: "Cinematic wedding photography — sacred vows, candid joy, and timeless frames captured with care."
			},
			{
				property: "og:title",
				content: "Wedding Gallery — Royal Shoot Photography"
			},
			{
				property: "og:description",
				content: "Cinematic wedding photography — sacred vows, candid joy, and timeless frames."
			}
		],
		links: [{
			rel: "canonical",
			href: "/wedding-gallery"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
var BASE_URL = "";
var Route$9 = createFileRoute("/sitemap.xml")({ server: { handlers: { GET: async () => {
	const xml = [
		`<?xml version="1.0" encoding="UTF-8"?>`,
		`<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
		...[
			"/",
			"/portfolio",
			"/about",
			"/contact"
		].map((p) => `  <url><loc>${BASE_URL}${p}</loc><changefreq>weekly</changefreq><priority>${p === "/" ? "1.0" : "0.8"}</priority></url>`),
		`</urlset>`
	].join("\n");
	return new Response(xml, { headers: {
		"Content-Type": "application/xml",
		"Cache-Control": "public, max-age=3600"
	} });
} } } });
var $$splitComponentImporter$8 = () => import("./pre-wedding-gallery-DTRD3650.mjs");
var Route$8 = createFileRoute("/pre-wedding-gallery")({
	head: () => ({
		meta: [
			{ title: "Pre-Wedding Gallery — Royal Shoot Photography" },
			{
				name: "description",
				content: "Romantic pre-wedding shoots across breathtaking locations — captured with cinematic intimacy."
			},
			{
				property: "og:title",
				content: "Pre-Wedding Gallery — Royal Shoot Photography"
			},
			{
				property: "og:description",
				content: "Romantic pre-wedding shoots across breathtaking locations."
			}
		],
		links: [{
			rel: "canonical",
			href: "/pre-wedding-gallery"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
var $$splitComponentImporter$7 = () => import("./portrait-gallery-CGi84SCS.mjs");
var Route$7 = createFileRoute("/portrait-gallery")({
	head: () => ({
		meta: [
			{ title: "Portrait Gallery — Royal Shoot Photography" },
			{
				name: "description",
				content: "Quiet, considered portraiture — studio and natural-light sessions for individuals and families."
			},
			{
				property: "og:title",
				content: "Portrait Gallery — Royal Shoot Photography"
			},
			{
				property: "og:description",
				content: "Quiet, considered portraiture in studio and natural light."
			}
		],
		links: [{
			rel: "canonical",
			href: "/portrait-gallery"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var $$splitComponentImporter$6 = () => import("./portfolio-BfvfV35w.mjs");
var Route$6 = createFileRoute("/portfolio")({
	head: () => ({
		meta: [
			{ title: "Portfolio — Royal Shoot Photography" },
			{
				name: "description",
				content: "A curated portfolio of weddings, pre-wedding shoots, fashion editorials, portraits and cinematic films by Royal Shoot Photography."
			},
			{
				property: "og:title",
				content: "Portfolio — Royal Shoot Photography"
			},
			{
				property: "og:description",
				content: "Editorial chapters from weddings, fashion and cinematic films."
			},
			{
				property: "og:url",
				content: "/portfolio"
			}
		],
		links: [{
			rel: "canonical",
			href: "/portfolio"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./fashion-gallery-039CNXKS.mjs");
var Route$5 = createFileRoute("/fashion-gallery")({
	head: () => ({
		meta: [
			{ title: "Fashion Gallery — Royal Shoot Photography" },
			{
				name: "description",
				content: "High-fashion editorials, lookbooks and campaign work crafted with cinematic light."
			},
			{
				property: "og:title",
				content: "Fashion Gallery — Royal Shoot Photography"
			},
			{
				property: "og:description",
				content: "High-fashion editorials and campaign work."
			}
		],
		links: [{
			rel: "canonical",
			href: "/fashion-gallery"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./event-gallery-CT-MLO9s.mjs");
var Route$4 = createFileRoute("/event-gallery")({
	head: () => ({
		meta: [
			{ title: "Event Gallery — Royal Shoot Photography" },
			{
				name: "description",
				content: "Elegant event coverage — galas, soirées, corporate evenings and private celebrations."
			},
			{
				property: "og:title",
				content: "Event Gallery — Royal Shoot Photography"
			},
			{
				property: "og:description",
				content: "Elegant event coverage — galas, soirées and private celebrations."
			}
		],
		links: [{
			rel: "canonical",
			href: "/event-gallery"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./contact-DYEN-_om.mjs");
var Route$3 = createFileRoute("/contact")({
	head: () => ({
		meta: [
			{ title: "Contact — Royal Shoot Photography" },
			{
				name: "description",
				content: "Enquire about your wedding, pre-wedding shoot, fashion editorial or cinematic film. We respond within 24 hours."
			},
			{
				property: "og:title",
				content: "Contact — Royal Shoot Photography"
			},
			{
				property: "og:description",
				content: "Begin your enquiry. Studio in Mumbai. Available worldwide."
			},
			{
				property: "og:url",
				content: "/contact"
			}
		],
		links: [{
			rel: "canonical",
			href: "/contact"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./cinematic-gallery-CCHQn17F.mjs");
var Route$2 = createFileRoute("/cinematic-gallery")({
	head: () => ({
		meta: [
			{ title: "Cinematic Gallery — Royal Shoot Photography" },
			{
				name: "description",
				content: "Cinematic stills and film frames — moments suspended like cinema."
			},
			{
				property: "og:title",
				content: "Cinematic Gallery — Royal Shoot Photography"
			},
			{
				property: "og:description",
				content: "Cinematic stills and film frames."
			}
		],
		links: [{
			rel: "canonical",
			href: "/cinematic-gallery"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./about-BZjCPYTQ.mjs");
var Route$1 = createFileRoute("/about")({
	head: () => ({
		meta: [
			{ title: "About — Royal Shoot Photography" },
			{
				name: "description",
				content: "Meet Aarav Mehta and the Royal Shoot Photography team — a small, devoted crew turning moments into timeless memories."
			},
			{
				property: "og:title",
				content: "About — Royal Shoot Photography"
			},
			{
				property: "og:description",
				content: "Photographer & filmmaker Aarav Mehta on craft, light, and storytelling."
			},
			{
				property: "og:url",
				content: "/about"
			}
		],
		links: [{
			rel: "canonical",
			href: "/about"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./routes-B1PAFJzi.mjs");
var Route = createFileRoute("/")({
	head: () => ({
		meta: [
			{ title: "Royal Shoot Photography — Cinematic Wedding & Portrait Photography" },
			{
				name: "description",
				content: "Award-winning cinematic photography & film studio. Wedding, pre-wedding, fashion, portrait & event coverage — crafted slowly, told beautifully."
			},
			{
				property: "og:title",
				content: "Royal Shoot Photography — Cinematic Photography"
			},
			{
				property: "og:description",
				content: "Timeless stories told through lens. Weddings, films, fashion & portraits."
			},
			{
				property: "og:url",
				content: "/"
			}
		],
		links: [{
			rel: "canonical",
			href: "/"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var WeddingGalleryRoute = Route$10.update({
	id: "/wedding-gallery",
	path: "/wedding-gallery",
	getParentRoute: () => Route$11
});
var SitemapDotxmlRoute = Route$9.update({
	id: "/sitemap.xml",
	path: "/sitemap.xml",
	getParentRoute: () => Route$11
});
var PreWeddingGalleryRoute = Route$8.update({
	id: "/pre-wedding-gallery",
	path: "/pre-wedding-gallery",
	getParentRoute: () => Route$11
});
var PortraitGalleryRoute = Route$7.update({
	id: "/portrait-gallery",
	path: "/portrait-gallery",
	getParentRoute: () => Route$11
});
var PortfolioRoute = Route$6.update({
	id: "/portfolio",
	path: "/portfolio",
	getParentRoute: () => Route$11
});
var FashionGalleryRoute = Route$5.update({
	id: "/fashion-gallery",
	path: "/fashion-gallery",
	getParentRoute: () => Route$11
});
var EventGalleryRoute = Route$4.update({
	id: "/event-gallery",
	path: "/event-gallery",
	getParentRoute: () => Route$11
});
var ContactRoute = Route$3.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$11
});
var CinematicGalleryRoute = Route$2.update({
	id: "/cinematic-gallery",
	path: "/cinematic-gallery",
	getParentRoute: () => Route$11
});
var AboutRoute = Route$1.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$11
});
var rootRouteChildren = {
	IndexRoute: Route.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$11
	}),
	AboutRoute,
	CinematicGalleryRoute,
	ContactRoute,
	EventGalleryRoute,
	FashionGalleryRoute,
	PortfolioRoute,
	PortraitGalleryRoute,
	PreWeddingGalleryRoute,
	SitemapDotxmlRoute,
	WeddingGalleryRoute
};
var routeTree = Route$11._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };

import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// // src/pages/WhyAIDocNest.tsx
// export default function WhyAIDocNest() {
//   // content blocks for the “departments” section
//   const departments: {
//     title: string;
//     intro?: string;
//     bullets: string[];
//   }[] = [
//     {
//       title: "Human Resources",
//       intro:
//         "HR teams use document management to streamline hiring, onboarding, and employee management. With OCR and structured capture, records are easy to find, audit, and share with the right people.",
//       bullets: [
//         "Automated capture of employee files (IDs, contracts, certificates)",
//         "Fast retrieval for talent acquisition and compliance reviews",
//         "Smooth onboarding: checklists, policies, and orientation packs",
//       ],
//     },
//     {
//       title: "Finance & Accounting",
//       intro:
//         "Speed up AP/AR with accurate capture, routing, and approvals. Reduce manual entry and keep a clean, auditable trail of every transaction.",
//       bullets: [
//         "Capture invoices, purchase orders, and receipts with OCR",
//         "Route documents for approval to reduce errors and delays",
//         "Link supporting docs to orders to accelerate collections",
//         "Maintain a complete audit history with version control",
//       ],
//     },
//     {
//       title: "Sales & Marketing",
//       intro:
//         "Centralize collateral, proposals, and contracts—then search them contextually. Share the right materials with the right stakeholders in seconds.",
//       bullets: [
//         "Store and tag creative assets, decks, and campaigns",
//         "Secure sharing with clients and partners",
//         "Faster retrieval improves response times and relationships",
//       ],
//     },
//   ];
//   return (
//     <section className="px-6">
//       {/* HERO */}
//       <div className="mx-auto max-w-5xl text-center">
//         <span className="inline-flex items-center rounded-full bg-white/10 px-4 py-2 ring-1 ring-white/15 backdrop-blur">
//           💡 Why AI Docs Nest
//         </span>
//         <h1 className="mt-6 text-4xl md:text-6xl font-extrabold leading-tight text-white/90">
//           Built for speed, scale & clarity
//         </h1>
//         <p className="mt-4 text-white/70 max-w-3xl mx-auto">
//           AI-first. OCR-native. A single place to store, search, automate, and
//           collaborate on your documents.
//         </p>
//       </div>
//       {/* ORIGINAL SPLIT BLOCK */}
//       <div className="mx-auto mt-12 grid max-w-6xl items-center gap-10 md:grid-cols-2">
//         <div className="order-2 md:order-1 space-y-5">
//           {[
//             {
//               t: "Contextual search",
//               d: "Find anything with natural language and filters—OCR included.",
//             },
//             {
//               t: "Secure by default",
//               d: "Granular roles, audit trails, SSO; compliance-ready.",
//             },
//             {
//               t: "Automations",
//               d: "Kick off workflows on upload, tags, or approvals. Integrate easily.",
//             },
//             {
//               t: "Scales to millions",
//               d: "Blazing performance with versioning and metadata.",
//             },
//           ].map((b) => (
//             <div
//               key={b.t}
//               className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-5"
//             >
//               <div className="text-lg font-semibold">{b.t}</div>
//               <div className="text-white/70 mt-1">{b.d}</div>
//             </div>
//           ))}
//         </div>
//         <div className="order-1 md:order-2 relative">
//           <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-fuchsia-500/30 via-purple-400/30 to-emerald-400/30 blur-2xl" />
//           <img
//             className="relative block w-full h-[340px] md:h-[420px] rounded-3xl object-cover border border-white/10 bg-white/5 ring-1 ring-black/30 shadow-2xl"
//             src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1600&auto=format&fit=crop"
//             alt="Why AI Docs Nest"
//           />
//         </div>
//       </div>
//       {/* Why Doculance-style block with sticky reading panel */}
//       <div className="mx-auto mt-14 max-w-6xl grid gap-8 md:grid-cols-12">
//         {/* LEFT: stacked images */}
//         <div className="md:col-span-5 space-y-4 order-2 md:order-1">
//           <img
//             src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1400&auto=format&fit=crop"
//             alt="Human resources board"
//             className="w-full h-56 object-cover rounded-2xl border border-white/10 bg-white/5 ring-1 ring-black/30"
//           />
//           <div className="grid grid-cols-2 gap-4">
//             <img
//               src="https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1200&auto=format&fit=crop"
//               alt="Marketing assets"
//               className="h-40 w-full object-cover rounded-2xl border border-white/10 bg-white/5 ring-1 ring-black/30"
//             />
//             <img
//               src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1200&auto=format&fit=crop"
//               alt="Finance analytics"
//               className="h-40 w-full object-cover rounded-2xl border border-white/10 bg-white/5 ring-1 ring-black/30"
//             />
//           </div>
//         </div>
//         {/* RIGHT: sticky article (parallax-like read-through) */}
//         <article className="md:col-span-7 order-1 md:order-2 relative">
//           {/* Adjust top-24 if your header height differs */}
//           <div className="sticky top-24">
//             <div
//               className="
//                 relative rounded-3xl bg-white/5 ring-1 ring-white/10 p-6 md:p-7
//                 max-h-[calc(100vh-8rem)] overflow-auto scroll-smooth
//                 [mask-image:linear-gradient(to_bottom,transparent,white_6%,white_94%,transparent)]
//                 [mask-size:100%_100%] [mask-repeat:no-repeat]
//               "
//             >
//               {/* top/bottom fade helpers */}
//               <div className="pointer-events-none absolute inset-x-0 top-0 h-8 bg-gradient-to-b from-[#0b0813] to-transparent" />
//               <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-[#0b0813] to-transparent" />
//               <h2 className="text-2xl md:text-[26px] font-bold">
//                 What we understand about your document management
//               </h2>
//               <div className="mt-4 space-y-4 text-white/80 leading-7">
//                 <p>
//                   Regardless of industry, organizations handle an enormous flow
//                   of paper and digital documents. Multiply a typical workload by
//                   dozens or hundreds of employees and it’s clear why information
//                   gets scattered, duplicated, or trapped in hard-to-find places.
//                 </p>
//                 <p>
//                   Teams work best when they can rely on consistent, automated
//                   processes—without clunky workflows or missing files. AI Docs
//                   Nest brings structure to the chaos with OCR, contextual
//                   search, and automation so your information stays accurate,
//                   secure, and accessible.
//                 </p>
//                 <p>
//                   We often see the same bottlenecks: manual data entry, siloed
//                   storage, and slow retrieval. By centralizing documents and
//                   adding AI, you can improve productivity and make confident,
//                   data-driven decisions.
//                 </p>
//               </div>
//               <hr className="my-6 border-white/10" />
//               <h3 className="text-lg md:text-xl font-semibold">
//                 Departments that benefit the most
//               </h3>
//               <div className="mt-4 space-y-7">
//                 {departments.map((sec) => (
//                   <section key={sec.title}>
//                     <h4 className="font-semibold text-white">{sec.title}</h4>
//                     {sec.intro && (
//                       <p className="mt-1 text-white/80 leading-7">
//                         {sec.intro}
//                       </p>
//                     )}
//                     <ul className="mt-2 list-disc list-inside space-y-1.5 text-white/75">
//                       {sec.bullets.map((b, i) => (
//                         <li key={i}>{b}</li>
//                       ))}
//                     </ul>
//                   </section>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </article>
//       </div>
//     </section>
//   );
// }
// src/pages/WhyAIDocNest.tsx
import { useEffect, useRef, useState } from "react";
/** Captures wheel/touch scroll while the panel is in view.
 *  It scrolls the inner content and prevents page scroll until the content
 *  reaches its top/bottom edge, then lets the page continue.
 */
function CapturedPanel({ className, children, topOffsetRem = 8, // match your sticky offset (top-24 => 6rem; you used 8rem space for max height)
 }) {
    const wrapperRef = useRef(null);
    const scrollerRef = useRef(null);
    const [active, setActive] = useState(false);
    // Detect when this block is on screen so we only intercept then.
    useEffect(() => {
        const el = wrapperRef.current;
        if (!el)
            return;
        const io = new IntersectionObserver(([entry]) => setActive(entry.isIntersecting), { threshold: 0.6 });
        io.observe(el);
        return () => io.disconnect();
    }, []);
    // Wheel handler – consume scroll while not at top/bottom.
    useEffect(() => {
        if (!active)
            return;
        const onWheel = (e) => {
            const s = scrollerRef.current;
            if (!s)
                return;
            const delta = e.deltaY;
            const atTop = s.scrollTop <= 0;
            const atBottom = s.scrollTop + s.clientHeight >= s.scrollHeight - 1;
            // If we can scroll inside, prevent page scroll and apply delta.
            if ((delta > 0 && !atBottom) || (delta < 0 && !atTop)) {
                e.preventDefault();
                s.scrollTop += delta;
            }
            // else: let it bubble so the page can move
        };
        window.addEventListener("wheel", onWheel, { passive: false });
        return () => window.removeEventListener("wheel", onWheel);
    }, [active]);
    // Touch (mobile) – same idea as wheel.
    useEffect(() => {
        if (!active)
            return;
        let startY = 0;
        const onTouchStart = (e) => {
            startY = e.touches[0].clientY;
        };
        const onTouchMove = (e) => {
            const s = scrollerRef.current;
            if (!s)
                return;
            const dy = startY - e.touches[0].clientY; // positive => swipe up
            const atTop = s.scrollTop <= 0;
            const atBottom = s.scrollTop + s.clientHeight >= s.scrollHeight - 1;
            if ((dy > 0 && !atBottom) || (dy < 0 && !atTop)) {
                e.preventDefault();
                s.scrollTop += dy;
                startY = e.touches[0].clientY; // incremental scroll
            }
        };
        const target = wrapperRef.current;
        target.addEventListener("touchstart", onTouchStart, { passive: false });
        target.addEventListener("touchmove", onTouchMove, { passive: false });
        return () => {
            target.removeEventListener("touchstart", onTouchStart);
            target.removeEventListener("touchmove", onTouchMove);
        };
    }, [active]);
    return (_jsx("div", { ref: wrapperRef, className: "relative", children: _jsx("div", { ref: scrollerRef, className: [
                // your previous styles + internal scroller
                "max-h-[calc(100vh-8rem)] overflow-auto scroll-smooth",
                "[mask-image:linear-gradient(to_bottom,transparent,white_6%,white_94%,transparent)]",
                "[mask-size:100%_100%] [mask-repeat:no-repeat]",
                className || "",
            ].join(" "), 
            // keep this in sync with max-h calc above if you change offsets
            style: {}, children: children }) }));
}
export default function WhyAIDocNest() {
    // content blocks for the “departments” section
    const departments = [
        {
            title: "Human Resources",
            intro: "HR teams use document management to streamline hiring, onboarding, and employee management. With OCR and structured capture, records are easy to find, audit, and share with the right people.",
            bullets: [
                "Automated capture of employee files (IDs, contracts, certificates)",
                "Fast retrieval for talent acquisition and compliance reviews",
                "Smooth onboarding: checklists, policies, and orientation packs",
            ],
        },
        {
            title: "Finance & Accounting",
            intro: "Speed up AP/AR with accurate capture, routing, and approvals. Reduce manual entry and keep a clean, auditable trail of every transaction.",
            bullets: [
                "Capture invoices, purchase orders, and receipts with OCR",
                "Route documents for approval to reduce errors and delays",
                "Link supporting docs to orders to accelerate collections",
                "Maintain a complete audit history with version control",
            ],
        },
        {
            title: "Sales & Marketing",
            intro: "Centralize collateral, proposals, and contracts—then search them contextually. Share the right materials with the right stakeholders in seconds.",
            bullets: [
                "Store and tag creative assets, decks, and campaigns",
                "Secure sharing with clients and partners",
                "Faster retrieval improves response times and relationships",
            ],
        },
    ];
    return (_jsxs("section", { className: "px-6", children: [_jsxs("div", { className: "mx-auto max-w-5xl text-center", children: [_jsx("span", { className: "inline-flex items-center rounded-full bg-white/10 px-4 py-2 ring-1 ring-white/15 backdrop-blur", children: "\uD83D\uDCA1 Why AI Docs Nest" }), _jsx("h1", { className: "mt-6 text-4xl md:text-6xl font-extrabold leading-tight text-white/90", children: "Built for speed, scale & clarity" }), _jsx("p", { className: "mt-4 text-white/70 max-w-3xl mx-auto", children: "AI-first. OCR-native. A single place to store, search, automate, and collaborate on your documents." })] }), _jsxs("div", { className: "mx-auto mt-12 grid max-w-6xl items-center gap-10 md:grid-cols-2", children: [_jsx("div", { className: "order-2 md:order-1 space-y-5", children: [
                            {
                                t: "Contextual search",
                                d: "Find anything with natural language and filters—OCR included.",
                            },
                            {
                                t: "Secure by default",
                                d: "Granular roles, audit trails, SSO; compliance-ready.",
                            },
                            {
                                t: "Automations",
                                d: "Kick off workflows on upload, tags, or approvals. Integrate easily.",
                            },
                            {
                                t: "Scales to millions",
                                d: "Blazing performance with versioning and metadata.",
                            },
                        ].map((b) => (_jsxs("div", { className: "rounded-2xl bg-white/5 ring-1 ring-white/10 p-5", children: [_jsx("div", { className: "text-lg font-semibold", children: b.t }), _jsx("div", { className: "text-white/70 mt-1", children: b.d })] }, b.t))) }), _jsxs("div", { className: "order-1 md:order-2 relative", children: [_jsx("div", { className: "absolute -inset-1 rounded-3xl bg-gradient-to-r from-fuchsia-500/30 via-purple-400/30 to-emerald-400/30 blur-2xl" }), _jsx("img", { className: "relative block w-full h-[340px] md:h-[420px] rounded-3xl object-cover border border-white/10 bg-white/5 ring-1 ring-black/30 shadow-2xl", src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1600&auto=format&fit=crop", alt: "Why AI Docs Nest" })] })] }), _jsxs("div", { className: "mx-auto mt-14 max-w-6xl grid gap-8 md:grid-cols-12", children: [_jsxs("div", { className: "md:col-span-5 space-y-4 order-2 md:order-1", children: [_jsx("img", { src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1400&auto=format&fit=crop", alt: "Human resources board", className: "w-full h-56 object-cover rounded-2xl border border-white/10 bg-white/5 ring-1 ring-black/30" }), _jsxs("div", { className: "grid grid-cols-2 gap-4", children: [_jsx("img", { src: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1200&auto=format&fit=crop", alt: "Marketing assets", className: "h-40 w-full object-cover rounded-2xl border border-white/10 bg-white/5 ring-1 ring-black/30" }), _jsx("img", { src: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1200&auto=format&fit=crop", alt: "Finance analytics", className: "h-40 w-full object-cover rounded-2xl border border-white/10 bg-white/5 ring-1 ring-black/30" })] })] }), _jsx("article", { className: "md:col-span-7 order-1 md:order-2 relative", children: _jsx("div", { className: "sticky top-24", children: _jsxs(CapturedPanel, { className: "relative rounded-3xl bg-white/5 ring-1 ring-white/10 p-6 md:p-7", children: [_jsx("div", { className: "pointer-events-none absolute inset-x-0 top-0 h-8 bg-gradient-to-b from-[#0b0813] to-transparent" }), _jsx("div", { className: "pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-[#0b0813] to-transparent" }), _jsx("h2", { className: "text-2xl md:text-[26px] font-bold", children: "What we understand about your document management" }), _jsxs("div", { className: "mt-4 space-y-4 text-white/80 leading-7", children: [_jsx("p", { children: "Regardless of industry, organizations handle an enormous flow of paper and digital documents. Multiply a typical workload by dozens or hundreds of employees and it\u2019s clear why information gets scattered, duplicated, or trapped in hard-to-find places." }), _jsx("p", { children: "Teams work best when they can rely on consistent, automated processes\u2014without clunky workflows or missing files. AI Docs Nest brings structure to the chaos with OCR, contextual search, and automation so your information stays accurate, secure, and accessible." }), _jsx("p", { children: "We often see the same bottlenecks: manual data entry, siloed storage, and slow retrieval. By centralizing documents and adding AI, you can improve productivity and make confident, data-driven decisions." })] }), _jsx("hr", { className: "my-6 border-white/10" }), _jsx("h3", { className: "text-lg md:text-xl font-semibold", children: "Departments that benefit the most" }), _jsx("div", { className: "mt-4 space-y-7", children: departments.map((sec) => (_jsxs("section", { children: [_jsx("h4", { className: "font-semibold text-white", children: sec.title }), sec.intro && (_jsx("p", { className: "mt-1 text-white/80 leading-7", children: sec.intro })), _jsx("ul", { className: "mt-2 list-disc list-inside space-y-1.5 text-white/75", children: sec.bullets.map((b, i) => (_jsx("li", { children: b }, i))) })] }, sec.title))) })] }) }) })] })] }));
}

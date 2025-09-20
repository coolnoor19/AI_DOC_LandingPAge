import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
const CASES = [
    {
        id: "1",
        tag: "SaaS",
        title: "Scaling support with AI routing",
        blurb: "Automated triage cut response times while boosting CSAT.",
        metric: "↓ 42% avg. resolution time",
        img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1600&auto=format&fit=crop",
    },
    {
        id: "2",
        tag: "Fintech",
        title: "Eliminating manual compliance checks",
        blurb: "Document rules baked in; audits are now a click away.",
        metric: "↑ 3x review throughput",
        img: "https://images.unsplash.com/photo-1559526324-593bc073d938?q=80&w=1600&auto=format&fit=crop",
    },
    {
        id: "3",
        tag: "Healthcare",
        title: "HIPAA-safe knowledge for clinicians",
        blurb: "Search protected insights without exposing patient data.",
        metric: "↑ 50% faster case prep",
        img: "https://images.unsplash.com/photo-1587351021764-1a6314f585ba?q=80&w=1600&auto=format&fit=crop",
    },
];
const TAGS = ["All", "SaaS", "Fintech", "Healthcare"];
export default function CaseStudies() {
    const [active, setActive] = useState("All");
    const list = active === "All" ? CASES : CASES.filter((c) => c.tag === active);
    return (_jsxs("section", { className: "px-6", children: [_jsxs("div", { className: "mx-auto max-w-5xl text-center", children: [_jsx("span", { className: "inline-flex items-center rounded-full bg-white/10 px-4 py-2 ring-1 ring-white/15 backdrop-blur", children: "\uD83D\uDCC8 Case Studies" }), _jsx("h1", { className: "mt-6 text-4xl md:text-6xl font-extrabold leading-tight text-white/90", children: "Real teams, measurable impact" }), _jsx("p", { className: "mt-4 text-white/70 max-w-3xl mx-auto", children: "See how companies ship faster, stay secure, and delight customers." })] }), _jsx("div", { className: "mx-auto max-w-6xl mt-8 flex flex-wrap gap-2 justify-center", children: TAGS.map((t) => {
                    const activeCls = "bg-teal-500 text-white border-teal-500";
                    return (_jsx("button", { onClick: () => setActive(t), className: `px-3 py-1.5 rounded-full border text-sm transition ${active === t
                            ? activeCls
                            : "bg-white/10 text-white border-white/20 hover:bg-white/15"}`, children: t }, t));
                }) }), _jsx("div", { className: "mx-auto mt-10 grid max-w-6xl grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6", children: list.map((c) => (_jsxs("article", { className: "group overflow-hidden rounded-2xl bg-white/5 ring-1 ring-white/10", children: [_jsxs("div", { className: "relative", children: [_jsx("img", { src: c.img, alt: c.title, className: "h-52 w-full object-cover transition group-hover:scale-[1.03]" }), _jsx("span", { className: "absolute left-3 top-3 rounded-full bg-black/50 px-3 py-1 text-xs ring-1 ring-white/20", children: c.tag })] }), _jsxs("div", { className: "p-5", children: [_jsx("h3", { className: "text-lg font-semibold", children: c.title }), _jsx("p", { className: "mt-2 text-white/70", children: c.blurb }), _jsx("div", { className: "mt-4 inline-flex rounded-full bg-white/10 px-3 py-1 text-sm ring-1 ring-white/15", children: c.metric }), _jsx("div", { className: "mt-5", children: _jsx("a", { href: "#", className: "text-teal-300 hover:text-teal-200 underline decoration-teal-500/40", children: "Read story \u2192" }) })] })] }, c.id))) }), _jsx("div", { className: "mx-auto max-w-5xl text-center mt-14", children: _jsx("a", { href: "/features", className: "inline-flex rounded-full bg-white px-6 py-3 text-gray-900 hover:opacity-90 transition", children: "Try the features they used" }) })] }));
}

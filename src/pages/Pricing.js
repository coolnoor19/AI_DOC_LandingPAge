import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useMemo, useState } from "react";
const plans = [
    {
        name: "Basic",
        tagline: "For individuals and quick prototypes",
        monthly: 0,
        cta: "Get Started",
        features: [
            "Unlimited uploads (<= 10MB/file)",
            "OCR on PDFs & images",
            "Basic AI search",
            "Community support",
        ],
        limitations: ["No SSO", "No custom roles", "Rate-limited API"],
    },
    {
        name: "Pro",
        tagline: "For growing teams who need speed & control",
        monthly: 29,
        cta: "Start Pro",
        features: [
            "Everything in Basic",
            "Advanced AI search & Chat",
            "Custom roles & permissions",
            "Automations & webhooks",
            "Priority support",
        ],
        popular: true,
        badge: "Most Popular",
    },
    {
        name: "Enterprise",
        tagline: "Security, scale & custom workflows",
        monthly: 99,
        cta: "Contact Sales",
        features: [
            "Everything in Pro",
            "SSO / SAML",
            "On-prem or VPC options",
            "Custom SLAs & onboarding",
            "Dedicated success manager",
        ],
    },
];
export default function Pricing() {
    const [billing, setBilling] = useState("monthly");
    const priceFor = (p) => {
        if (p.monthly === 0)
            return { label: "Free", sub: "" };
        if (billing === "monthly") {
            return { label: `$${p.monthly}`, sub: "/month" };
        }
        // Yearly = 20% off, shown as per-month billed yearly
        const perMonth = Math.round(p.monthly * 0.8);
        return { label: `$${perMonth}`, sub: "/month · billed yearly" };
    };
    const saveText = useMemo(() => (billing === "yearly" ? "Save 20%" : undefined), [billing]);
    return (_jsxs("section", { className: "relative overflow-hidden -mt-46 text-white", children: [_jsxs("div", { className: "pointer-events-none absolute inset-0 -z-10", children: [_jsx("div", { className: "absolute inset-0 bg-[radial-gradient(1000px_500px_at_50%_-10%,rgba(255,255,255,0.06),transparent_60%)]" }), _jsx("div", { className: "absolute -right-1/3 -top-1/3 h-[80vh] w-[80vw] rounded-full bg-[conic-gradient(at_70%_30%,#a78bfa22_0deg,#22d3ee22_120deg,#10b98122_260deg,#a78bfa22_360deg)] blur-3xl" })] }), _jsxs("div", { className: "mx-auto max-w-6xl px-6 py-16 md:py-24", children: [_jsxs("div", { className: "text-center", children: [_jsx("span", { className: "inline-flex items-center rounded-full bg-white/10 px-4 py-2 ring-1 ring-white/15 backdrop-blur", children: "\uD83D\uDC8E Pricing" }), _jsx("h1", { className: "mt-6 text-4xl md:text-6xl font-extrabold leading-tight text-white/90", children: "Simple, transparent pricing" }), _jsx("p", { className: "mt-4 text-white/70 max-w-2xl mx-auto", children: "Choose a plan that fits your stage. Upgrade anytime as your team grows." })] }), _jsxs("div", { className: "mt-8 flex items-center justify-center gap-4", children: [_jsxs("div", { className: "inline-flex items-center rounded-full bg-white/5 ring-1 ring-white/10 p-1", children: [_jsx("button", { onClick: () => setBilling("monthly"), className: `px-4 py-2 rounded-full text-sm transition ${billing === "monthly"
                                            ? "bg-white text-gray-900"
                                            : "text-white/80 hover:text-white"}`, children: "Monthly" }), _jsx("button", { onClick: () => setBilling("yearly"), className: `px-4 py-2 rounded-full text-sm transition ${billing === "yearly"
                                            ? "bg-white text-gray-900"
                                            : "text-white/80 hover:text-white"}`, children: "Yearly" })] }), saveText && (_jsx("span", { className: "text-teal-300 text-sm rounded-full border border-teal-400/30 px-3 py-1 bg-white/5", children: saveText }))] }), _jsx("div", { className: "mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3", children: plans.map((p) => {
                            const price = priceFor(p);
                            const isPopular = p.popular;
                            return (_jsxs("div", { className: `relative rounded-2xl bg-white/5 ring-1 ring-white/10 p-6 transition hover:bg-white/10 ${isPopular ? "lg:-mt-2 lg:mb-2" : ""}`, children: [isPopular && (_jsx("div", { className: "pointer-events-none absolute -inset-[1px] -z-10 rounded-2xl bg-gradient-to-r from-fuchsia-500/30 via-purple-400/30 to-emerald-400/30 blur-xl" })), p.badge && (_jsx("span", { className: "inline-flex items-center rounded-full bg-gradient-to-r from-fuchsia-500/30 to-teal-400/30 px-3 py-1 text-xs font-semibold ring-1 ring-white/20", children: p.badge })), _jsxs("div", { className: "mt-3 flex items-baseline gap-2", children: [_jsx("h3", { className: "text-xl font-bold", children: p.name }), _jsx("span", { className: "text-white/60 text-sm", children: p.tagline })] }), _jsxs("div", { className: "mt-5 flex items-end gap-1", children: [_jsx("span", { className: "text-4xl font-extrabold", children: price.label }), price.sub && (_jsx("span", { className: "text-sm text-white/60", children: price.sub }))] }), _jsx("div", { className: "mt-5", children: _jsx("button", { className: `w-full rounded-xl px-4 py-3 text-sm font-semibold transition ${isPopular
                                                ? "bg-white text-gray-900 hover:opacity-90"
                                                : "bg-white/10 ring-1 ring-white/20 hover:bg-white/15"}`, children: p.cta }) }), _jsx("ul", { className: "mt-6 space-y-3 text-sm", children: p.features.map((f) => (_jsxs("li", { className: "flex items-start gap-2", children: [_jsx("svg", { viewBox: "0 0 24 24", className: "mt-0.5 h-5 w-5 text-teal-300", fill: "none", stroke: "currentColor", strokeWidth: "1.8", children: _jsx("path", { d: "M20 6L9 17l-5-5" }) }), _jsx("span", { className: "text-white/90", children: f })] }, f))) }), p.limitations && (_jsx("ul", { className: "mt-4 space-y-2 text-xs text-white/50", children: p.limitations.map((l) => (_jsxs("li", { className: "flex items-start gap-2", children: [_jsx("svg", { viewBox: "0 0 24 24", className: "mt-0.5 h-4 w-4", fill: "none", stroke: "currentColor", strokeWidth: "1.8", children: _jsx("path", { d: "M18 6L6 18M6 6l12 12" }) }), l] }, l))) }))] }, p.name));
                        }) }), _jsxs("div", { className: "mt-12 rounded-2xl bg-white/5 ring-1 ring-white/10 p-6", children: [_jsx("h4", { className: "text-lg font-semibold", children: "What\u2019s included?" }), _jsxs("div", { className: "mt-4 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm", children: [_jsxs("div", { className: "rounded-xl bg-white/5 ring-1 ring-white/10 p-4", children: [_jsxs("div", { className: "flex items-center gap-2 text-white/90", children: [_jsx("span", { className: "inline-grid h-8 w-8 place-items-center rounded-lg bg-white/10 ring-1 ring-white/10", children: "\uD83D\uDD0D" }), _jsx("strong", { children: "AI Search & OCR" })] }), _jsx("p", { className: "mt-2 text-white/70", children: "Fast semantic search, OCR for scanned PDFs & images, and rich filters." })] }), _jsxs("div", { className: "rounded-xl bg-white/5 ring-1 ring-white/10 p-4", children: [_jsxs("div", { className: "flex items-center gap-2 text-white/90", children: [_jsx("span", { className: "inline-grid h-8 w-8 place-items-center rounded-lg bg-white/10 ring-1 ring-white/10", children: "\uD83D\uDEE1\uFE0F" }), _jsx("strong", { children: "Security & Access" })] }), _jsx("p", { className: "mt-2 text-white/70", children: "Custom roles/permissions, audit logs, SSO (Enterprise), and encryption." })] }), _jsxs("div", { className: "rounded-xl bg-white/5 ring-1 ring-white/10 p-4", children: [_jsxs("div", { className: "flex items-center gap-2 text-white/90", children: [_jsx("span", { className: "inline-grid h-8 w-8 place-items-center rounded-lg bg-white/10 ring-1 ring-white/10", children: "\u2699\uFE0F" }), _jsx("strong", { children: "Automations" })] }), _jsx("p", { className: "mt-2 text-white/70", children: "Triggers on upload, tags, approvals; webhooks & integrations." })] })] })] }), _jsxs("div", { className: "mx-auto max-w-5xl text-center mt-12", children: [_jsx("p", { className: "text-white/70", children: "Need a custom plan, on-prem, or compliance add-ons?" }), _jsx("a", { href: "/contact", className: "mt-4 inline-flex rounded-full bg-white px-6 py-3 text-gray-900 hover:opacity-90 transition", children: "Talk to sales" })] })] })] }));
}

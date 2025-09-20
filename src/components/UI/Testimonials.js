import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
/** A single star icon */
const Star = ({ className = "" }) => (_jsx("svg", { viewBox: "0 0 24 24", className: className, fill: "currentColor", "aria-hidden": true, children: _jsx("path", { d: "M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.62L12 2 9.19 8.62 2 9.24l5.46 4.73L5.82 21z" }) }));
const TESTIMONIALS = [
    {
        quote: "This UI kit saved us weeks. The dark theme blends beautifully across our app, and the components feel premium.",
        name: "Mason Carter",
        role: "Design Lead",
        company: "Orbit Labs",
        avatar: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=160&h=160&fit=crop&auto=format",
        rating: 5,
    },
    {
        quote: "Setup took minutes with Tailwind & TypeScript. Our dashboard looks modern without pulling in a huge library.",
        name: "Alicia Gomez",
        role: "Frontend Engineer",
        company: "NeoStack",
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=160&h=160&fit=crop&auto=format",
        rating: 5,
    },
    {
        quote: "We shipped faster and our users noticed the polish. Animations are subtle and performance-friendly.",
        name: "Jun Park",
        role: "Product Manager",
        company: "Hikari",
        avatar: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=160&h=160&fit=crop&auto=format",
        rating: 4,
    },
    {
        quote: "Docs were clear and the sections are composable. The glass/gradient look really stands out.",
        name: "Rhea Sharma",
        role: "UX Engineer",
        company: "Nimbus",
        avatar: "https://images.unsplash.com/photo-1544006659-f0b21884ce1d?w=160&h=160&fit=crop&auto=format",
        rating: 5,
    },
    {
        quote: "It’s rare to find components that look this good and remain accessible. Big fan of the details.",
        name: "Oliver Grant",
        role: "Accessibility Advocate",
        company: "ClearView",
        avatar: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=160&h=160&fit=crop&auto=format",
        rating: 5,
    },
    {
        quote: "Our marketing site went from decent to delightful. The dark gradient background ties everything together.",
        name: "Sofia Rossi",
        role: "Head of Marketing",
        company: "Aurora AI",
        avatar: "https://images.unsplash.com/photo-1545996124-0501ebae84d0?w=160&h=160&fit=crop&auto=format",
        rating: 5,
    },
];
const Testimonials = () => {
    return (_jsxs("section", { className: "relative overflow-hidden bg-[#0b0813] py-16 md:py-24", children: [_jsx("div", { className: "pointer-events-none absolute inset-0", children: _jsx("div", { className: "absolute inset-0 bg-[radial-gradient(1200px_500px_at_50%_-15%,rgba(255,255,255,0.06),transparent_65%)]" }) }), _jsxs("div", { className: "mx-auto max-w-6xl px-6", children: [_jsxs("header", { className: "mx-auto max-w-2xl text-center", children: [_jsx("span", { className: "inline-flex items-center rounded-full bg-white/10 px-4 py-1.5 text-xs font-medium tracking-wider text-white/90 ring-1 ring-white/15 backdrop-blur", children: "WHAT PEOPLE SAY" }), _jsx("h2", { className: "mt-4 text-3xl font-extrabold tracking-tight text-white md:text-5xl", children: "Loved by teams of all sizes" }), _jsx("p", { className: "mt-4 text-white/70", children: "Real stories from designers, engineers, and product leaders using this modern, minimalist system." })] }), _jsx("div", { className: "mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3", children: TESTIMONIALS.map((t, i) => (_jsxs("article", { className: "\r\n                group relative overflow-hidden rounded-2xl bg-white/5 p-6\r\n                ring-1 ring-white/10 backdrop-blur shadow\r\n                transition hover:-translate-y-0.5 hover:bg-white/[0.055]\r\n              ", children: [_jsx("div", { className: "pointer-events-none absolute inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition bg-[linear-gradient(180deg,rgba(255,255,255,0.10),rgba(255,255,255,0.03))]" }), _jsxs("div", { className: "relative flex items-center gap-4", children: [_jsx("img", { src: t.avatar, alt: t.name, className: "h-12 w-12 shrink-0 rounded-full object-cover ring-2 ring-white/10" }), _jsxs("div", { children: [_jsx("div", { className: "text-white font-semibold", children: t.name }), _jsxs("div", { className: "text-sm text-white/60", children: [t.role, " \u2022 ", t.company] })] }), t.rating ? (_jsx("div", { className: "ml-auto flex items-center gap-0.5 text-amber-300", children: Array.from({ length: 5 }).map((_, s) => (_jsx(Star, { className: `h-4 w-4 ${s < (t.rating ?? 0) ? "opacity-100" : "opacity-30"}` }, s))) })) : null] }), _jsxs("p", { className: "relative mt-4 text-white/85", children: [_jsx("span", { className: "mr-1 text-white/50", children: "\u201C" }), t.quote, _jsx("span", { className: "ml-1 text-white/50", children: "\u201D" })] })] }, i))) })] })] }));
};
export default Testimonials;

import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export default function UserGuide() {
    const steps = [
        { n: "1", t: "Create a workspace", d: "Invite teammates, set roles and permissions." },
        { n: "2", t: "Import & tag", d: "Upload files or connect drives. Add tags and custom fields." },
        { n: "3", t: "Search & automate", d: "Use NL search. Trigger approvals and notifications." },
        { n: "4", t: "Collaborate", d: "Comments, mentions, versions—keep everyone aligned." },
    ];
    return (_jsxs("section", { className: "px-6", children: [_jsxs("div", { className: "mx-auto max-w-5xl text-center", children: [_jsx("span", { className: "inline-flex items-center rounded-full bg-white/10 px-4 py-2 ring-1 ring-white/15 backdrop-blur", children: "\uD83D\uDCD8 User Guide" }), _jsx("h1", { className: "mt-6 text-4xl md:text-6xl font-extrabold leading-tight text-white/90", children: "Get productive in minutes" }), _jsx("p", { className: "mt-4 text-white/70 max-w-3xl mx-auto", children: "A quick start to your first workspace\u2014best practices included." })] }), _jsx("div", { className: "mx-auto mt-12 grid max-w-5xl gap-5 md:grid-cols-2", children: steps.map((s) => (_jsxs("div", { className: "rounded-2xl bg-white/5 ring-1 ring-white/10 p-6", children: [_jsx("div", { className: "text-3xl font-extrabold", children: s.n }), _jsx("div", { className: "mt-2 text-lg font-semibold", children: s.t }), _jsx("div", { className: "mt-1 text-white/70", children: s.d })] }, s.n))) }), _jsx("div", { className: "mx-auto max-w-5xl text-center mt-12", children: _jsx("a", { href: "/signup", className: "inline-flex rounded-full bg-white px-6 py-3 text-gray-900 hover:opacity-90 transition", children: "Start for free" }) })] }));
}

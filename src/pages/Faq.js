import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
const faqs = [
    {
        q: "What is AI Docs Nest?",
        a: "A modern, AI-powered document platform with OCR search, secure workspaces, and automations.",
    },
    {
        q: "How is my data secured?",
        a: "We use encryption in transit and at rest, granular roles, audit trails, and fine-grained sharing.",
    },
    {
        q: "Do you support large archives?",
        a: "Yes—millions of files, versioning, tags, and blazing contextual search at scale.",
    },
];
export default function Faq() {
    const [open, setOpen] = useState(0);
    return (_jsxs("section", { className: "px-6", children: [_jsxs("div", { className: "mx-auto max-w-5xl text-center", children: [_jsx("span", { className: "inline-flex items-center rounded-full bg-white/10 px-4 py-2 ring-1 ring-white/15 backdrop-blur", children: "\u2753 FAQ" }), _jsx("h1", { className: "mt-6 text-4xl md:text-6xl font-extrabold leading-tight text-white/90", children: "All your questions, answered" }), _jsx("p", { className: "mt-4 text-white/70 max-w-3xl mx-auto", children: "Can\u2019t find what you\u2019re looking for? Reach out to support any time." })] }), _jsx("div", { className: "mx-auto mt-10 max-w-3xl space-y-3", children: faqs.map((item, idx) => {
                    const isOpen = open === idx;
                    return (_jsxs("div", { className: "group rounded-2xl bg-white/5 ring-1 ring-white/10 p-4 hover:bg-white/10 transition", children: [_jsxs("button", { className: "flex w-full items-center justify-between gap-4 text-left", onClick: () => setOpen(isOpen ? null : idx), children: [_jsx("span", { className: "text-lg font-semibold", children: item.q }), _jsx("span", { className: "grid h-8 w-8 place-items-center rounded-xl bg-white/10 ring-1 ring-white/15", children: isOpen ? "–" : "+" })] }), isOpen && (_jsx("p", { className: "mt-3 text-white/75 leading-7", children: item.a }))] }, idx));
                }) })] }));
}

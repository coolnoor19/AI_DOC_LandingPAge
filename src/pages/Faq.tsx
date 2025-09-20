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
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="px-6">
      <div className="mx-auto max-w-5xl text-center">
        <span className="inline-flex items-center rounded-full bg-white/10 px-4 py-2 ring-1 ring-white/15 backdrop-blur">
          ❓ FAQ
        </span>
        <h1 className="mt-6 text-4xl md:text-6xl font-extrabold leading-tight text-white/90">
          All your questions, answered
        </h1>
        <p className="mt-4 text-white/70 max-w-3xl mx-auto">
          Can’t find what you’re looking for? Reach out to support any time.
        </p>
      </div>

      <div className="mx-auto mt-10 max-w-3xl space-y-3">
        {faqs.map((item, idx) => {
          const isOpen = open === idx;
          return (
            <div
              key={idx}
              className="group rounded-2xl bg-white/5 ring-1 ring-white/10 p-4 hover:bg-white/10 transition"
            >
              <button
                className="flex w-full items-center justify-between gap-4 text-left"
                onClick={() => setOpen(isOpen ? null : idx)}
              >
                <span className="text-lg font-semibold">{item.q}</span>
                <span className="grid h-8 w-8 place-items-center rounded-xl bg-white/10 ring-1 ring-white/15">
                  {isOpen ? "–" : "+"}
                </span>
              </button>
              {isOpen && (
                <p className="mt-3 text-white/75 leading-7">{item.a}</p>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

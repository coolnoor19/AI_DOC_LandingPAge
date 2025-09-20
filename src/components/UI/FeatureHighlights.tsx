import React from "react";

type Feature = {
  title: string;
  body: string;
  icon: React.ReactNode;
};

const defaults: Feature[] = [
  {
    title: "OCR-Powered Seamless\nDocument Search",
    body:
      "No more struggling with scanned documents and PDFs. Like searching within a text file, you can search inside them with unmatched accuracy using our advanced OCR technology.",
    icon: (
      // Rocket
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M5 19c2 0 3-1 4-2l8-8a5 5 0 0 0-7-7l-8 8c-1 1-2 2-2 4v3a1 1 0 0 0 1 1h4z" />
        <path d="M14 6l4 4" />
        <path d="M9.5 14.5L8 16c-1 1-3 2-5 2" />
      </svg>
    ),
  },
  {
    title: "Build your own AI chatbot",
    body:
      "Your own AI assistant for your world of documents & files. Once you upload, ask any relevant question and your chatbot will answer with context.",
    icon: (
      // Check
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M20 6L9 17l-5-5" />
      </svg>
    ),
  },
  {
    title: "Design your own search result\nformat by category",
    body:
      "Each department can tailor how results appear—by category, wings, or departments—so teams find the right document in seconds.",
    icon: (
      // Tag
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12.99V4h8.99l8.17 8.17a2 2 0 0 1 0 2.83z" />
        <circle cx="7.5" cy="7.5" r="1.5" />
      </svg>
    ),
  },
];

interface Props {
  features?: Feature[];
  className?: string;
}

/**
 * FeatureHighlights
 * - Responsive 1/2/3 column grid
 * - Floating gradient badge, glass card, gradient border & hover lift
 * - Works on dark backgrounds; keep section transparent so it blends in
 */
const FeatureHighlights: React.FC<Props> = ({ features = defaults, className }) => {
  return (
    <section
      className={`relative px-4 sm:px-6 lg:px-8 py-14 lg:py-20 ${className ?? ""}`}
    >
      {/* subtle dotted backdrop (optional) */}
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.07]">
        <div className="h-full w-full [background-image:radial-gradient(#ffffff_1px,transparent_1px)] [background-size:18px_18px]" />
      </div>

      <div className="mx-auto max-w-7xl grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
        {features.map((f, idx) => (
          <article
            key={idx}
            className="group relative rounded-2xl bg-white/5 backdrop-blur-sm text-white
                       ring-1 ring-white/10 shadow-xl overflow-hidden
                       transition-transform duration-300 ease-out hover:-translate-y-1"
          >
            {/* gradient border halo */}
            <div className="pointer-events-none absolute inset-0 -z-10 rounded-2xl
                            bg-[conic-gradient(from_140deg_at_50%_-10%,#a78bfa33,transparent_35%,#22d3ee33_65%,transparent_85%)]
                            opacity-60" />

            {/* floating gradient badge */}
            <div className="absolute -top-8 left-1/2 -translate-x-1/2">
              <div
                className="grid h-16 w-16 place-items-center rounded-full
                           bg-gradient-to-br from-indigo-500 via-sky-500 to-emerald-400
                           text-white shadow-2xl ring-4 ring-[#0b0813] group-hover:scale-[1.03] transition"
                aria-hidden
              >
                {f.icon}
              </div>
            </div>

            {/* content */}
            <div className="px-6 sm:px-8 pt-14 pb-8">
              <h3 className="text-center text-xl font-extrabold tracking-tight text-white/90 whitespace-pre-line">
                {f.title}
              </h3>

              <p className="mt-5 text-center text-[15px] leading-7 text-white/70">
                {f.body}
              </p>
            </div>

            {/* bottom accent line */}
            <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          </article>
        ))}
      </div>
    </section>
  );
};

export default FeatureHighlights;

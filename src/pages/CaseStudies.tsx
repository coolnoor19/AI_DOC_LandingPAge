import { useState } from "react";

type Study = {
  id: string;
  tag: "SaaS" | "Fintech" | "Healthcare";
  title: string;
  blurb: string;
  metric: string;
  img: string;
};

const CASES: Study[] = [
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

const TAGS = ["All", "SaaS", "Fintech", "Healthcare"] as const;
type Tag = typeof TAGS[number];

export default function CaseStudies() {
  const [active, setActive] = useState<Tag>("All");
  const list =
    active === "All" ? CASES : CASES.filter((c) => c.tag === active);

  return (
    <section className="px-6">
      {/* Hero */}
      <div className="mx-auto max-w-5xl text-center">
        <span className="inline-flex items-center rounded-full bg-white/10 px-4 py-2 ring-1 ring-white/15 backdrop-blur">
          📈 Case Studies
        </span>
        <h1 className="mt-6 text-4xl md:text-6xl font-extrabold leading-tight text-white/90">
          Real teams, measurable impact
        </h1>
        <p className="mt-4 text-white/70 max-w-3xl mx-auto">
          See how companies ship faster, stay secure, and delight customers.
        </p>
      </div>

      {/* Filters */}
      <div className="mx-auto max-w-6xl mt-8 flex flex-wrap gap-2 justify-center">
        {TAGS.map((t) => {
          const activeCls =
            "bg-teal-500 text-white border-teal-500";
        return (
          <button
            key={t}
            onClick={() => setActive(t)}
            className={`px-3 py-1.5 rounded-full border text-sm transition ${
              active === t
                ? activeCls
                : "bg-white/10 text-white border-white/20 hover:bg-white/15"
            }`}
          >
            {t}
          </button>
        );
        })}
      </div>

      {/* Grid */}
      <div className="mx-auto mt-10 grid max-w-6xl grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {list.map((c) => (
          <article
            key={c.id}
            className="group overflow-hidden rounded-2xl bg-white/5 ring-1 ring-white/10"
          >
            <div className="relative">
              <img
                src={c.img}
                alt={c.title}
                className="h-52 w-full object-cover transition group-hover:scale-[1.03]"
              />
              <span className="absolute left-3 top-3 rounded-full bg-black/50 px-3 py-1 text-xs ring-1 ring-white/20">
                {c.tag}
              </span>
            </div>
            <div className="p-5">
              <h3 className="text-lg font-semibold">{c.title}</h3>
              <p className="mt-2 text-white/70">{c.blurb}</p>
              <div className="mt-4 inline-flex rounded-full bg-white/10 px-3 py-1 text-sm ring-1 ring-white/15">
                {c.metric}
              </div>
              <div className="mt-5">
                <a
                  href="#"
                  className="text-teal-300 hover:text-teal-200 underline decoration-teal-500/40"
                >
                  Read story →
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* CTA */}
      <div className="mx-auto max-w-5xl text-center mt-14">
        <a
          href="/features"
          className="inline-flex rounded-full bg-white px-6 py-3 text-gray-900 hover:opacity-90 transition"
        >
          Try the features they used
        </a>
      </div>
    </section>
  );
}

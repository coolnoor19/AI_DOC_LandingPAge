// src/components/Testimonials.tsx
import React from "react";

/** A single star icon */
const Star = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    fill="currentColor"
    aria-hidden
  >
    <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.62L12 2 9.19 8.62 2 9.24l5.46 4.73L5.82 21z" />
  </svg>
);

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  rating?: number; // 0 - 5
};

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "This UI kit saved us weeks. The dark theme blends beautifully across our app, and the components feel premium.",
    name: "Mason Carter",
    role: "Design Lead",
    company: "Orbit Labs",
    avatar:
      "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=160&h=160&fit=crop&auto=format",
    rating: 5,
  },
  {
    quote:
      "Setup took minutes with Tailwind & TypeScript. Our dashboard looks modern without pulling in a huge library.",
    name: "Alicia Gomez",
    role: "Frontend Engineer",
    company: "NeoStack",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=160&h=160&fit=crop&auto=format",
    rating: 5,
  },
  {
    quote:
      "We shipped faster and our users noticed the polish. Animations are subtle and performance-friendly.",
    name: "Jun Park",
    role: "Product Manager",
    company: "Hikari",
    avatar:
      "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=160&h=160&fit=crop&auto=format",
    rating: 4,
  },
  {
    quote:
      "Docs were clear and the sections are composable. The glass/gradient look really stands out.",
    name: "Rhea Sharma",
    role: "UX Engineer",
    company: "Nimbus",
    avatar:
      "https://images.unsplash.com/photo-1544006659-f0b21884ce1d?w=160&h=160&fit=crop&auto=format",
    rating: 5,
  },
  {
    quote:
      "It’s rare to find components that look this good and remain accessible. Big fan of the details.",
    name: "Oliver Grant",
    role: "Accessibility Advocate",
    company: "ClearView",
    avatar:
      "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=160&h=160&fit=crop&auto=format",
    rating: 5,
  },
  {
    quote:
      "Our marketing site went from decent to delightful. The dark gradient background ties everything together.",
    name: "Sofia Rossi",
    role: "Head of Marketing",
    company: "Aurora AI",
    avatar:
      "https://images.unsplash.com/photo-1545996124-0501ebae84d0?w=160&h=160&fit=crop&auto=format",
    rating: 5,
  },
];

const Testimonials: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-[#0b0813] py-16 md:py-24">
      {/* soft vignette/spotlight to match the rest of the site */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(1200px_500px_at_50%_-15%,rgba(255,255,255,0.06),transparent_65%)]" />
      </div>

      <div className="mx-auto max-w-6xl px-6">
        <header className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center rounded-full bg-white/10 px-4 py-1.5 text-xs font-medium tracking-wider text-white/90 ring-1 ring-white/15 backdrop-blur">
            WHAT PEOPLE SAY
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white md:text-5xl">
            Loved by teams of all sizes
          </h2>
          <p className="mt-4 text-white/70">
            Real stories from designers, engineers, and product leaders using
            this modern, minimalist system.
          </p>
        </header>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <article
              key={i}
              className="
                group relative overflow-hidden rounded-2xl bg-white/5 p-6
                ring-1 ring-white/10 backdrop-blur shadow
                transition hover:-translate-y-0.5 hover:bg-white/[0.055]
              "
            >
              {/* faint gradient border on hover */}
              <div className="pointer-events-none absolute inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition bg-[linear-gradient(180deg,rgba(255,255,255,0.10),rgba(255,255,255,0.03))]" />

              <div className="relative flex items-center gap-4">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="h-12 w-12 shrink-0 rounded-full object-cover ring-2 ring-white/10"
                />
                <div>
                  <div className="text-white font-semibold">{t.name}</div>
                  <div className="text-sm text-white/60">
                    {t.role} • {t.company}
                  </div>
                </div>
                {t.rating ? (
                  <div className="ml-auto flex items-center gap-0.5 text-amber-300">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Star
                        key={s}
                        className={`h-4 w-4 ${
                          s < (t.rating ?? 0) ? "opacity-100" : "opacity-30"
                        }`}
                      />
                    ))}
                  </div>
                ) : null}
              </div>

              <p className="relative mt-4 text-white/85">
                <span className="mr-1 text-white/50">“</span>
                {t.quote}
                <span className="ml-1 text-white/50">”</span>
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;


import React, { useMemo, useState } from "react";

type Billing = "monthly" | "yearly";

type Plan = {
  name: string;
  tagline: string;
  monthly: number; // base monthly price
  cta: string;
  features: string[];
  limitations?: string[];
  popular?: boolean;
  badge?: string;
};

const plans: Plan[] = [
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
  const [billing, setBilling] = useState<Billing>("monthly");

  const priceFor = (p: Plan) => {
    if (p.monthly === 0) return { label: "Free", sub: "" };
    if (billing === "monthly") {
      return { label: `$${p.monthly}`, sub: "/month" };
    }
    // Yearly = 20% off, shown as per-month billed yearly
    const perMonth = Math.round(p.monthly * 0.8);
    return { label: `$${perMonth}`, sub: "/month · billed yearly" };
  };

  const saveText = useMemo(
    () => (billing === "yearly" ? "Save 20%" : undefined),
    [billing]
  );

  return (
    <section className="relative overflow-hidden -mt-46 text-white">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(1000px_500px_at_50%_-10%,rgba(255,255,255,0.06),transparent_60%)]" />
        <div className="absolute -right-1/3 -top-1/3 h-[80vh] w-[80vw] rounded-full bg-[conic-gradient(at_70%_30%,#a78bfa22_0deg,#22d3ee22_120deg,#10b98122_260deg,#a78bfa22_360deg)] blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        {/* Header */}
        <div className="text-center">
          <span className="inline-flex items-center rounded-full bg-white/10 px-4 py-2 ring-1 ring-white/15 backdrop-blur">
            💎 Pricing
          </span>
          <h1 className="mt-6 text-4xl md:text-6xl font-extrabold leading-tight text-white/90">
            Simple, transparent pricing
          </h1>
          <p className="mt-4 text-white/70 max-w-2xl mx-auto">
            Choose a plan that fits your stage. Upgrade anytime as your team grows.
          </p>
        </div>

        {/* Billing toggle */}
        <div className="mt-8 flex items-center justify-center gap-4">
          <div className="inline-flex items-center rounded-full bg-white/5 ring-1 ring-white/10 p-1">
            <button
              onClick={() => setBilling("monthly")}
              className={`px-4 py-2 rounded-full text-sm transition ${
                billing === "monthly"
                  ? "bg-white text-gray-900"
                  : "text-white/80 hover:text-white"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBilling("yearly")}
              className={`px-4 py-2 rounded-full text-sm transition ${
                billing === "yearly"
                  ? "bg-white text-gray-900"
                  : "text-white/80 hover:text-white"
              }`}
            >
              Yearly
            </button>
          </div>
          {saveText && (
            <span className="text-teal-300 text-sm rounded-full border border-teal-400/30 px-3 py-1 bg-white/5">
              {saveText}
            </span>
          )}
        </div>

        {/* Plans */}
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {plans.map((p) => {
            const price = priceFor(p);
            const isPopular = p.popular;

            return (
              <div
                key={p.name}
                className={`relative rounded-2xl bg-white/5 ring-1 ring-white/10 p-6 transition hover:bg-white/10 ${
                  isPopular ? "lg:-mt-2 lg:mb-2" : ""
                }`}
              >
                {/* Glow for popular */}
                {isPopular && (
                  <div className="pointer-events-none absolute -inset-[1px] -z-10 rounded-2xl bg-gradient-to-r from-fuchsia-500/30 via-purple-400/30 to-emerald-400/30 blur-xl" />
                )}

                {/* Badge */}
                {p.badge && (
                  <span className="inline-flex items-center rounded-full bg-gradient-to-r from-fuchsia-500/30 to-teal-400/30 px-3 py-1 text-xs font-semibold ring-1 ring-white/20">
                    {p.badge}
                  </span>
                )}

                <div className="mt-3 flex items-baseline gap-2">
                  <h3 className="text-xl font-bold">{p.name}</h3>
                  <span className="text-white/60 text-sm">{p.tagline}</span>
                </div>

                {/* Price */}
                <div className="mt-5 flex items-end gap-1">
                  <span className="text-4xl font-extrabold">
                    {price.label}
                  </span>
                  {price.sub && (
                    <span className="text-sm text-white/60">{price.sub}</span>
                  )}
                </div>

                {/* CTA */}
                <div className="mt-5">
                  <button
                    className={`w-full rounded-xl px-4 py-3 text-sm font-semibold transition ${
                      isPopular
                        ? "bg-white text-gray-900 hover:opacity-90"
                        : "bg-white/10 ring-1 ring-white/20 hover:bg-white/15"
                    }`}
                  >
                    {p.cta}
                  </button>
                </div>

                {/* Features */}
                <ul className="mt-6 space-y-3 text-sm">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <svg
                        viewBox="0 0 24 24"
                        className="mt-0.5 h-5 w-5 text-teal-300"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                      >
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                      <span className="text-white/90">{f}</span>
                    </li>
                  ))}
                </ul>

                {/* Limitations (muted) */}
                {p.limitations && (
                  <ul className="mt-4 space-y-2 text-xs text-white/50">
                    {p.limitations.map((l) => (
                      <li key={l} className="flex items-start gap-2">
                        <svg
                          viewBox="0 0 24 24"
                          className="mt-0.5 h-4 w-4"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.8"
                        >
                          <path d="M18 6L6 18M6 6l12 12" />
                        </svg>
                        {l}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            );
          })}
        </div>

        {/* Mini comparison strip */}
        <div className="mt-12 rounded-2xl bg-white/5 ring-1 ring-white/10 p-6">
          <h4 className="text-lg font-semibold">What’s included?</h4>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div className="rounded-xl bg-white/5 ring-1 ring-white/10 p-4">
              <div className="flex items-center gap-2 text-white/90">
                <span className="inline-grid h-8 w-8 place-items-center rounded-lg bg-white/10 ring-1 ring-white/10">
                  🔍
                </span>
                <strong>AI Search & OCR</strong>
              </div>
              <p className="mt-2 text-white/70">
                Fast semantic search, OCR for scanned PDFs & images, and
                rich filters.
              </p>
            </div>
            <div className="rounded-xl bg-white/5 ring-1 ring-white/10 p-4">
              <div className="flex items-center gap-2 text-white/90">
                <span className="inline-grid h-8 w-8 place-items-center rounded-lg bg-white/10 ring-1 ring-white/10">
                  🛡️
                </span>
                <strong>Security & Access</strong>
              </div>
              <p className="mt-2 text-white/70">
                Custom roles/permissions, audit logs, SSO (Enterprise), and encryption.
              </p>
            </div>
            <div className="rounded-xl bg-white/5 ring-1 ring-white/10 p-4">
              <div className="flex items-center gap-2 text-white/90">
                <span className="inline-grid h-8 w-8 place-items-center rounded-lg bg-white/10 ring-1 ring-white/10">
                  ⚙️
                </span>
                <strong>Automations</strong>
              </div>
              <p className="mt-2 text-white/70">
                Triggers on upload, tags, approvals; webhooks & integrations.
              </p>
            </div>
          </div>
        </div>

        {/* FAQ / CTA */}
        <div className="mx-auto max-w-5xl text-center mt-12">
          <p className="text-white/70">
            Need a custom plan, on-prem, or compliance add-ons?
          </p>
          <a
            href="/contact"
            className="mt-4 inline-flex rounded-full bg-white px-6 py-3 text-gray-900 hover:opacity-90 transition"
          >
            Talk to sales
          </a>
        </div>
      </div>
    </section>
  );
}


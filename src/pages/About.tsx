// src/pages/About.tsx
import React from "react";

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full bg-white/10 px-4 py-2 ring-1 ring-white/15 backdrop-blur">
      {children}
    </span>
  );
}

function SectionTitle({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mx-auto max-w-5xl text-center ">
      {eyebrow && <Badge>{eyebrow}</Badge>}
      <h1 className="mt-6 leading-[1.05] font-extrabold tracking-tight text-4xl sm:text-5xl md:text-6xl">
        <span className="bg-[linear-gradient(90deg,#a78bfa_0%,#f472b6_18%,#f59e0b_40%,#facc15_55%,#84cc16_70%,#22d3ee_85%,#a78bfa_100%)] bg-clip-text text-transparent">
          {title}
        </span>
      </h1>
      {subtitle && (
        <p className="mt-4 text-white/70 max-w-3xl mx-auto">{subtitle}</p>
      )}
    </div>
  );
}

function CheckIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <path
        d="M20 6L9 17l-5-5"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function FeatureCard({
  title,
  desc,
}: {
  title: string;
  desc: React.ReactNode;
}) {
  return (
    <div className="relative rounded-2xl bg-white/5 ring-1 ring-white/10 p-6">
      <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-white/10 via-transparent to-transparent pointer-events-none" />
      <div className="flex items-start gap-3">
        <div className="grid h-9 w-9 place-items-center rounded-lg bg-white/10 text-white/90">
          <CheckIcon className="h-5 w-5" />
        </div>
        <div>
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="mt-1 text-white/70">{desc}</p>
        </div>
      </div>
    </div>
  );
}

export default function About() {
  return (
    <section className="px-6 py-16 md:py-20">
      {/* Hero */}
      <SectionTitle
        eyebrow="🧭 About AI Doc Nest"
        title="AI-Powered & OCR-Enabled Document Management System"
        subtitle="AI Doc Nest is an advanced tool that uses artificial intelligence to automate and improve document management, allowing businesses to work smarter, faster, and more securely."
      />

      {/* Intro split */}
      <div className="mx-auto mt-12 grid max-w-6xl items-center gap-8 md:grid-cols-2">
        <div className="order-2 md:order-1">
          <div className="space-y-4 text-white/80">
            <h2 className="text-2xl font-semibold">What is AI Doc Nest?</h2>
            <p>
              It’s designed to intelligently handle the creation, organization,
              storage, retrieval, and management of documents within an
              organization. AI Doc Nest uses powerful AI to automate and optimize
              every step of the process—boosting efficiency, security, and user
              experience.
            </p>
            <p>
              Imagine a world where your documents work for you. A system that
              seamlessly integrates the power of Artificial Intelligence (AI)
              and Optical Character Recognition (OCR) to revolutionize your
              document management experience. This is not a futuristic vision,
              but the reality we bring you with our cutting-edge platform.
            </p>
          </div>
        </div>

        {/* Right visual */}
        <div className="order-1 md:order-2 relative">
          <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-fuchsia-500/30 via-purple-400/30 to-emerald-400/30 blur-2xl" />
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 ring-1 ring-black/30 shadow-2xl p-6">
            <div className="text-center">
              <h3 className="text-xl font-semibold">
                “From paper to insight—instantly.”
              </h3>
              <p className="mt-2 text-white/70">
                AI + OCR means faster intake, richer search, and confident,
                secure access everywhere.
              </p>
              <div className="mt-6 grid grid-cols-3 gap-3 text-sm text-white/80">
                <div className="rounded-xl bg-white/5 p-3 ring-1 ring-white/10">
                  Smart Capture
                </div>
                <div className="rounded-xl bg-white/5 p-3 ring-1 ring-white/10">
                  Context Search
                </div>
                <div className="rounded-xl bg-white/5 p-3 ring-1 ring-white/10">
                  Secure Cloud
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Unleash the power of AI */}
      <div className="mx-auto mt-16 max-w-6xl">
        <h2 className="text-2xl font-semibold">Unleash the Power of AI</h2>
        <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <FeatureCard
            title="Intelligent Data Capture"
            desc={
              <>
                Say goodbye to manual data entry. Our AI scans documents and
                automatically extracts & organizes key information—names,
                dates, numbers, even complex fields. Invoices, contracts, and
                reports are processed in seconds with unmatched accuracy.
              </>
            }
          />
          <FeatureCard
            title="Advanced Search & Retrieval"
            desc={
              <>
                No more endless hunts. AI Doc Nest understands the{" "}
                <em>context</em> of your documents, so you find what you need
                instantly—even with fuzzy or obscure queries.
              </>
            }
          />
        </div>
      </div>

      {/* OCR */}
      <div className="mx-auto mt-12 max-w-6xl">
        <h2 className="text-2xl font-semibold">
          OCR: The Bridge Between Paper and Digital
        </h2>
        <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <FeatureCard
            title="Effortless Digitization"
            desc={
              <>
                Give your paper archives a second life. Our advanced OCR
                flawlessly converts scans and images into editable, searchable
                digital formats—instantly accessible and usable.
              </>
            }
          />
        </div>
      </div>

      {/* Benefits */}
      <div className="mx-auto mt-12 max-w-6xl">
        <h2 className="text-2xl font-semibold">Benefits Beyond Compare</h2>
        <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <FeatureCard
            title="Reduced Costs"
            desc={
              <>
                Save time and money on storage, retrieval, and processing. Our
                cloud-based solution eliminates the need for physical
                infrastructure and manual labor.
              </>
            }
          />
          <FeatureCard
            title="Improved Decision-Making"
            desc={
              <>
                Unlock deeper insights with AI-powered analytics. Extract
                valuable data and generate reports that inform better business
                decisions.
              </>
            }
          />
        </div>
      </div>

      {/* Stats */}
      <div className="mx-auto mt-14 grid max-w-6xl grid-cols-1 sm:grid-cols-3 gap-4">
        {[
          { k: "3M+", v: "Documents processed" },
          { k: "99.99%", v: "Uptime this year" },
          { k: "120+", v: "Companies onboarded" },
        ].map((s) => (
          <div
            key={s.k}
            className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6 text-center"
          >
            <div className="text-3xl font-bold">{s.k}</div>
            <div className="text-white/70 mt-1">{s.v}</div>
          </div>
        ))}
      </div>

      {/* Closing CTA */}
      <div className="mx-auto max-w-5xl text-center mt-14">
        <p className="text-white/80">
          This is not just a document management system—it’s a game-changer.
          Experience the power of AI and OCR working together to transform the
          way you manage documents.
        </p>
        <div className="mt-6 flex items-center justify-center gap-3">
          <a
            href="/features"
            className="rounded-full bg-white px-6 py-3 text-gray-900 hover:opacity-90 transition"
          >
            Explore Features
          </a>
          <a
            href="/contact"
            className="rounded-full bg-white/10 px-6 py-3 ring-1 ring-white/20 hover:bg-white/15 transition"
          >
            Contact Sales
          </a>
        </div>
      </div>
    </section>
  );
}

//hhjlk

import React from "react";

/** Simple icon button used in the features row (no extra deps). */
function IconBtn({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <button
      aria-label={title}
      title={title}
      className="inline-grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5 text-white/80 shadow-sm ring-1 ring-black/10 hover:bg-white/10 hover:text-white transition"
    >
      {children}
    </button>
  );
}

export default function DocTeamSection() {
  return (
    <section
      className="
        relative isolate overflow-hidden
        bg-[#0c0a11]
        [--pad:clamp(1rem,6vw,3.5rem)]
        px-[var(--pad)] py-16 md:py-24
      "
    >
      {/* soft vignette + warm corner glow (matches the screenshot mood) */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        {/* vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(1200px_500px_at_50%_-10%,rgba(255,255,255,0.06),transparent_60%)]" />
        {/* top-right warm gradient */}
        <div className="absolute -right-1/3 -top-1/3 h-[80vh] w-[80vw] rounded-full bg-[conic-gradient(at_70%_30%,#ff7a3d22_0deg,#7c3aed22_120deg,#0ea5e922_260deg,#ff7a3d22_360deg)] blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2 lg:gap-14">

        {/* RIGHT: Text  (swapped: md:order-2) */}
        <div className="order-1 md:order-2">
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold tracking-tight text-white">
            Create Your AI Team
          </h2>

          <div className="mt-4 space-y-3 text-[15px] leading-7 text-white/80">
            <p>
              Build, train, and deploy AI agents to automate tasks, research,
              and collaborate in real-time.
            </p>
            <p>
              Equip them with your favorite tools and dynamic knowledge for
              timeless productivity. Your AI agents learn, adapt, and help turn
              ideas into action—fast.
            </p>
          </div>

          {/* small icon row */}
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <IconBtn title="Security">
              {/* lock */}
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
                <rect x="4" y="10" width="16" height="10" rx="2" />
                <path d="M8 10V7a4 4 0 1 1 8 0v3" />
              </svg>
            </IconBtn>
            <IconBtn title="Media">
              {/* camera */}
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3l2-3h8l2 3h3a2 2 0 0 1 2 2z" />
                <circle cx="12" cy="13" r="4" />
              </svg>
            </IconBtn>
            <IconBtn title="Board">
              {/* grid */}
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M3 3h7v7H3zM14 3h7v7h-7zM14 14h7v7h-7zM3 14h7v7H3z" />
              </svg>
            </IconBtn>
            <IconBtn title="Notes">
              {/* pen nib */}
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M12 19l7-7 3 3-7 7-4 1z" />
                <path d="M18 13l-7-7 3-3 7 7z" />
                <path d="M2 22l6-2-4-4-2 6z" />
              </svg>
            </IconBtn>
            <IconBtn title="Links">
              {/* link */}
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M10 13a5 5 0 0 0 7.07 0l2.83-2.83a5 5 0 1 0-7.07-7.07L10 4" />
                <path d="M14 11a5 5 0 0 0-7.07 0L4.1 13.83a5 5 0 0 0 7.07 7.07L14 20" />
              </svg>
            </IconBtn>
            <IconBtn title="Global">
              {/* globe */}
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
                <circle cx="12" cy="12" r="9" />
                <path d="M2 12h20M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18" />
              </svg>
            </IconBtn>
            <IconBtn title="Automation">
              {/* sparkles/bot */}
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M12 3v4M5 10h14M7 14h10M9 18h6" />
                <rect x="6" y="7" width="12" height="12" rx="3" />
              </svg>
            </IconBtn>
          </div>
        </div>

        {/* LEFT: App mock  (swapped: md:order-1) */}
        <div className="order-2 md:order-1 relative mx-auto w-full max-w-2xl">
          {/* outer glow */}
          <div className="absolute -inset-1 rounded-[28px] bg-gradient-to-r from-fuchsia-500/40 via-purple-400/40 to-emerald-400/40 blur-2xl" />
          {/* device/frame */}
          <div className="relative overflow-hidden rounded-[26px] border border-white/10 bg-white/5 shadow-2xl ring-1 ring-black/30">
            {/* top bar */}
            <div className="flex items-center gap-2 px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-red-400/70" />
              <span className="h-3 w-3 rounded-full bg-yellow-300/70" />
              <span className="h-3 w-3 rounded-full bg-green-400/70" />
              <div className="ml-auto h-5 w-24 rounded-md bg-white/5" />
            </div>

            {/* screenshot area */}
            <div className="relative">
              <img
                className="block h-[360px] w-full object-cover md:h-[420px] lg:h-[460px]"
                src="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1600&auto=format&fit=crop"
                alt="App preview"
              />
              {/* subtle edges + vignette for depth */}
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(0,0,0,0.25)_70%)]" />
              {/* wavy baseline */}
              <svg
                className="pointer-events-none absolute -bottom-2 left-0 w-full"
                viewBox="0 0 1440 120"
                fill="none"
              >
                <defs>
                  <linearGradient id="grad" x1="0" x2="1" y1="0" y2="0">
                    <stop offset="0%" stopColor="#a78bfa" />
                    <stop offset="50%" stopColor="#f472b6" />
                    <stop offset="100%" stopColor="#22d3ee" />
                  </linearGradient>
                </defs>
                <path
                  d="M0,70 C180,140 360,0 540,60 C720,120 900,20 1080,70 C1260,120 1440,50 1440,50"
                  stroke="url(#grad)"
                  strokeWidth="3"
                  opacity="0.7"
                  fill="none"
                />
              </svg>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

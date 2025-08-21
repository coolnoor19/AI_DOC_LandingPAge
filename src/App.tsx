{ /* component with LightRays and Particles */}

import LightRays from "./components/backgrounds/LightRays/LightRays";
import Particles from "./components/backgrounds/Particles/Particles";

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#0b0813] text-white overflow-hidden">
      {/* Decorative frame */}
      <div className="pointer-events-none absolute inset-2 rounded-3xl ring-1 ring-white/10 -z-10" />

      {/* BACKGROUND LAYERS */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* 1) base dark gradient (lowest) */}
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent via-[#0b0813]/20 to-[#0b0813]/60" />

        {/* 2) particles (middle) */}
        <div className="absolute inset-0 z-20 pointer-events-none">
          <Particles
            particleColors={["#ffffff", "#ffffff"]}
            particleCount={200}
            particleSpread={10}
            speed={0.1}
            particleBaseSize={100}
            moveParticlesOnHover
            alphaParticles={false}
            disableRotation={false}
          />
        </div>

        {/* 3) LIGHT RAYS (TOP) */}
        {/* Wrap to control stacking and blending – many builds of LightRays use negative z
           internally, so the wrapper guarantees it sits above the others. */}
        <div className="absolute inset-0 z-30 pointer-events-none mix-blend-screen">
          <LightRays
            // If your generated component exposes slightly different props,
            // keep the ones it supports; these are safe defaults:
            opacity={0.95}
            rayColor="#ffffff"
            beams={6}
            spread={0.7}
            speed={0.22}
            blurAmount={0.8}
          />
        </div>
      </div>

      {/* TOP NAV */}
      <header className="relative z-40 mx-auto mt-8 max-w-6xl">
        <div className="flex items-center justify-between rounded-full bg-white/5 px-6 py-3 backdrop-blur ring-1 ring-white/10">
          <div className="flex items-center gap-3">
            <div className="grid h-8 w-8 place-items-center rounded-full bg-white/10 text-white/90">
              ✴
            </div>
            <span className="font-semibold tracking-wide">AI Doc Nest</span>
          </div>
          <nav className="text-sm">
            <ul className="flex items-center gap-6 text-white/80">
              <li className="cursor-pointer hover:text-white">Home</li>
              <li className="cursor-pointer hover:text-white">Docs</li>
            </ul>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <main className="relative z-40 mx-auto max-w-3xl px-6 pt-24 md:pt-28 text-center">
        <span className="inline-flex items-center rounded-full bg-white/10 px-4 py-2 backdrop-blur ring-1 ring-white/15">
          ⚡ New Background
        </span>

        <h1 className="mt-6 text-4xl font-extrabold leading-tight text-white/90 md:text-6xl">
          May these lights guide you
          <br />
          on your path
        </h1>

        <div className="mt-8 flex items-center justify-center gap-4">
          <button className="rounded-full bg-white px-6 py-3 text-gray-900 transition hover:opacity-90">
            Get Started
          </button>
          <button className="rounded-full bg-white/10 px-6 py-3 ring-1 ring-white/20 transition hover:bg-white/15">
            Learn More
          </button>
        </div>
      </main>
    </div>
  );
}


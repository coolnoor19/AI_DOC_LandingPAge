import React from "react";
import dots from "../../../public/downloaddots.png"
import semi from "../../../public/semicircles.png";

/* ---------- tiny SVG icons (no external deps) ---------- */
const Sq = ({ className = "" }: { className?: string }) => (
  <rect x="3" y="3" width="18" height="18" rx="4" className={className} />
);

const AndroidIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6">
    <path d="M8 6l-1-2M16 6l1-2" />
    <path d="M7 10h10v7a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v-7Z" />
    <circle cx="9" cy="8" r="0.8" fill="currentColor" />
    <circle cx="15" cy="8" r="0.8" fill="currentColor" />
    <path d="M7 11H5v5h2M19 11h-2v5h2" />
  </svg>
);

const AppStoreIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6">
    <path d="M11 5l-6 10m8-10l6 10M7 13h10M6 18h12" />
  </svg>
);

const AppleIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
    <path d="M17.7 13.4c-.1-2.4 2-3.6 2.1-3.7-1.1-1.6-2.9-1.8-3.5-1.9-1.5-.2-3 .9-3.8.9-.8 0-2-.9-3.3-.9-1.7 0-3.3 1-4.2 2.5-1.8 3.2-.5 7.9 1.3 10.5.9 1.3 2 2.7 3.5 2.6 1.4 0 1.9-.8 3.6-.8 1.7 0 2.1.8 3.6.7 1.5 0 2.4-1.3 3.3-2.6 1-1.5 1.4-3 1.4-3.1-.1 0-2.6-1-2.7-4.2zM14.8 4.4c.7-.8 1.2-2 1.1-3.1-1.1.1-2.3.7-3 1.5-.7.8-1.3 2-1.1 3.2 1.2.1 2.4-.6 3-1.6z"/>
  </svg>
);

const WindowsIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
    <path d="M3 5l8-1v8H3V5zm9-1l9-1v9h-9V4zM3 13h8v8l-8-1v-7zm9 0h9v9l-9-1v-8z" />
  </svg>
);

const BagIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6">
    <path d="M4 9h16l-1 11H5L4 9z" />
    <path d="M9 9V7a3 3 0 0 1 6 0v2" />
    <rect x="9.6" y="12" width="4.8" height="4.8" fill="currentColor" rx="0.8" />
  </svg>
);

const ChromeIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6">
    <circle cx="12" cy="12" r="4" fill="currentColor" />
    <circle cx="12" cy="12" r="9" />
    <path d="M12 3a9 9 0 0 1 7.8 4.5H12" />
    <path d="M2.7 9l4.5 7.8" />
  </svg>
);

const FirefoxIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6">
    <path d="M20 12a8 8 0 0 1-14.2 5.1 7.5 7.5 0 0 1 7.6-12.6c-1 1.2-1.4 2.1-1 3 2-1 4.3-.4 5.6 1.2z" />
  </svg>
);

const EdgeIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6">
    <path d="M20 16.5A8 8 0 0 0 8 4c3 0 6 2 6 5-3-1-6 1-6 4a5 5 0 0 0 8.5 3.5H20z" />
  </svg>
);

/* ---------- tile ---------- */
type Tile = {
  label: string;
  icon: React.ReactNode;
};

const tiles: Tile[] = [
  { label: "Android",        icon: <AndroidIcon /> },
  { label: "iOS",            icon: <AppStoreIcon /> },
  { label: "Mac",            icon: <AppleIcon /> },
  { label: "Mac App\nStore", icon: <AppStoreIcon /> },
  { label: "Windows",        icon: <WindowsIcon /> },
  { label: "Microsoft\nStore", icon: <BagIcon /> },
  { label: "Chrome",         icon: <ChromeIcon /> },
  { label: "Firefox",        icon: <FirefoxIcon /> },
  { label: "Edge",           icon: <EdgeIcon /> },
];

const TileCard: React.FC<Tile> = ({ label, icon }) => (
  <div className="group inline-flex flex-col items-center gap-3">
    <div className="
      relative grid h-16 w-16 place-items-center rounded-2xl
      bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))]
      ring-1 ring-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]
      transition-transform duration-200 group-hover:scale-105
      ">
      <svg viewBox="0 0 24 24" className="absolute inset-0 h-full w-full" aria-hidden>
        <Sq className="fill-black/10" />
      </svg>
      <span className="text-white/90">{icon}</span>
      <div className="pointer-events-none absolute -bottom-3 left-1/2 h-5 w-10 -translate-x-1/2 rounded-full bg-white/10 blur-md opacity-0 group-hover:opacity-100 transition" />
    </div>
    <div className="text-center text-sm leading-4 text-white/85 whitespace-pre-line">
      {label}
    </div>
  </div>
);

/* ---------- main component ---------- */
const DownloadDevices: React.FC = () => {
  return (
    <section className="relative bg-[#0b0813] py-14 md:py-20 overflow-hidden">
      {/* soft background that matches neighbors */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(1200px_500px_at_50%_-10%,rgba(255,255,255,0.06),transparent_60%)]" />
      </div>

      {/* decorative images */}
      <img
        src={dots}
        alt=""
        className="pointer-events-none absolute right-6 top-6 w-24 opacity-30 md:right-28 md:top-10 md:w-28"
      />
      <img
        src={semi}
        alt=""
        className="pointer-events-none absolute bottom-18 left-28 w-24 opacity-80 md:w-28"
      />

      <div className="mx-auto max-w-6xl px-4">
        <div className="
          rounded-3xl bg-white/[0.05] ring-1 ring-white/10
          shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]
          px-6 py-10 md:px-12 md:py-12
        ">
          <h3 className="text-center text-[15px] md:text-lg font-semibold tracking-wider text-white/90">
            GET TASKADE ON ALL YOUR DEVICES TODAY
          </h3>

          <div
            className="
              mt-10 grid place-items-center gap-x-8 gap-y-8
              [grid-template-columns:repeat(3,minmax(0,1fr))]
              sm:[grid-template-columns:repeat(4,minmax(0,1fr))]
              lg:[grid-template-columns:repeat(9,minmax(0,1fr))]
            "
          >
            {tiles.map((t) => (
              <TileCard key={t.label} {...t} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadDevices;

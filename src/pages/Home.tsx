import LogoLoop from "../components/backgrounds/LogoLoop/LogoLoop";
import MagicBento from "../components/backgrounds/MagicBento/MagicBento";
import AiTeamSection from "../components/UI/AiTeamSection";
import DocTeamSection from "../components/UI/DocTeamSection";
import DownloadDevices from "../components/UI/DownloadDevices";
import FeatureHighlights from "../components/UI/FeatureHighlights";
import Testimonials from "../components/UI/Testimonials";

type LogoItem = { src: string; alt: string; href?: string };

const techLogos: LogoItem[] = [
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    alt: "React",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    alt: "TypeScript",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg",
    alt: "Vite",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
    alt: "Tailwind",
  },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="mx-auto max-w-7xl px-6 text-center">
        <span className="inline-flex items-center rounded-full bg-white/10 px-4 py-2 backdrop-blur ring-1 ring-white/15">
          ⚡ New Background
        </span>

        <h1 className="leading-[0.95] font-extrabold tracking-tight text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mt-6">
          <span className="bg-[linear-gradient(90deg,#a78bfa_0%,#f472b6_18%,#f59e0b_40%,#facc15_55%,#84cc16_70%,#22d3ee_85%,#a78bfa_100%)] bg-clip-text text-transparent">
            Train Your AI Agents to
          </span>
          <br />
          <span className="bg-[linear-gradient(90deg,#a78bfa_0%,#f472b6_18%,#f59e0b_40%,#facc15_55%,#84cc16_70%,#22d3ee_85%,#a78bfa_100%)] bg-clip-text text-transparent">
            Think, Learn, and Act.
          </span>
        </h1>

        <div className="mt-8 flex items-center justify-center gap-4">
          <button className="rounded-full bg-white px-6 py-3 text-gray-900 transition hover:opacity-90">
            Get Started
          </button>
          <button className="rounded-full bg-white/10 px-6 py-3 ring-1 ring-white/20 transition hover:bg-white/15">
            Learn More
          </button>
        </div>
      </section>

      {/* Logos scroller */}
      <div
        style={{
          height: "200px",
          position: "relative",
          overflow: "hidden",
          marginTop: "120px",
        }}
      >
        <LogoLoop
          logos={techLogos}
          speed={120}
          direction="left"
          logoHeight={48}
          gap={40}
          pauseOnHover
          scaleOnHover
          fadeOut
          fadeOutColor=""
          ariaLabel="Technology partners"
        />
      </div>

      {/* Magic Bento */}
      <div className="max-w-7xl mx-auto px-6 pt-24">
        <MagicBento
          textAutoHide
          enableStars
          enableSpotlight
          enableBorderGlow
          enableTilt
          enableMagnetism
          clickEffect
          spotlightRadius={300}
          particleCount={12}
          glowColor="132, 0, 255"
        />
      </div>

      {/* Sections */}
      <AiTeamSection />
      <DocTeamSection />
      <DownloadDevices />
      <FeatureHighlights />
      <Testimonials />
    </>
  );
}

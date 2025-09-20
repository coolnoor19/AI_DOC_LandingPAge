import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import LogoLoop from "../components/backgrounds/LogoLoop/LogoLoop";
import MagicBento from "../components/backgrounds/MagicBento/MagicBento";
import AiTeamSection from "../components/UI/AiTeamSection";
import DocTeamSection from "../components/UI/DocTeamSection";
import DownloadDevices from "../components/UI/DownloadDevices";
import FeatureHighlights from "../components/UI/FeatureHighlights";
import Testimonials from "../components/UI/Testimonials";
const techLogos = [
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
    return (_jsxs(_Fragment, { children: [_jsxs("section", { className: "mx-auto max-w-7xl px-6 text-center", children: [_jsx("span", { className: "inline-flex items-center rounded-full bg-white/10 px-4 py-2 backdrop-blur ring-1 ring-white/15", children: "\u26A1 New Background" }), _jsxs("h1", { className: "leading-[0.95] font-extrabold tracking-tight text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mt-6", children: [_jsx("span", { className: "bg-[linear-gradient(90deg,#a78bfa_0%,#f472b6_18%,#f59e0b_40%,#facc15_55%,#84cc16_70%,#22d3ee_85%,#a78bfa_100%)] bg-clip-text text-transparent", children: "Train Your AI Agents to" }), _jsx("br", {}), _jsx("span", { className: "bg-[linear-gradient(90deg,#a78bfa_0%,#f472b6_18%,#f59e0b_40%,#facc15_55%,#84cc16_70%,#22d3ee_85%,#a78bfa_100%)] bg-clip-text text-transparent", children: "Think, Learn, and Act." })] }), _jsxs("div", { className: "mt-8 flex items-center justify-center gap-4", children: [_jsx("button", { className: "rounded-full bg-white px-6 py-3 text-gray-900 transition hover:opacity-90", children: "Get Started" }), _jsx("button", { className: "rounded-full bg-white/10 px-6 py-3 ring-1 ring-white/20 transition hover:bg-white/15", children: "Learn More" })] })] }), _jsx("div", { style: {
                    height: "200px",
                    position: "relative",
                    overflow: "hidden",
                    marginTop: "120px",
                }, children: _jsx(LogoLoop, { logos: techLogos, speed: 120, direction: "left", logoHeight: 48, gap: 40, pauseOnHover: true, scaleOnHover: true, fadeOut: true, fadeOutColor: "", ariaLabel: "Technology partners" }) }), _jsx("div", { className: "max-w-7xl mx-auto px-6 pt-24", children: _jsx(MagicBento, { textAutoHide: true, enableStars: true, enableSpotlight: true, enableBorderGlow: true, enableTilt: true, enableMagnetism: true, clickEffect: true, spotlightRadius: 300, particleCount: 12, glowColor: "132, 0, 255" }) }), _jsx(AiTeamSection, {}), _jsx(DocTeamSection, {}), _jsx(DownloadDevices, {}), _jsx(FeatureHighlights, {}), _jsx(Testimonials, {})] }));
}

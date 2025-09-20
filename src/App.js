import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// { /* component with LightRays and Particles */ }
// import LightRays from "./components/backgrounds/LightRays/LightRays";
// import LogoLoop from "./components/backgrounds/LogoLoop/LogoLoop";
// import MagicBento from "./components/backgrounds/MagicBento/MagicBento";
// import Particles from "./components/backgrounds/Particles/Particles";
// import AiTeamSection from "./components/UI/AiTeamSection";
// import DocTeamSection from "./components/UI/DocTeamSection";
// import DownloadDevices from "./components/UI/DownloadDevices";
// import FeatureHighlights from "./components/UI/FeatureHighlights";
// import Header from "./components/UI/Header";
// import SiteFooter from "./components/UI/SiteFooter";
// import Testimonials from "./components/UI/Testimonials";
// type LogoItem = { src: string; alt: string; href?: string };
// const techLogos: LogoItem[] = [
//   {
//     src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
//     alt: "React",
//   },
//   {
//     src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
//     alt: "TypeScript",
//   },
//   {
//     src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg",
//     alt: "Vite",
//   },
//   {
//     src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
//     alt: "Tailwind",
//   },
// ];
// export default function App() {
//   return (
//     <div className="relative min-h-screen bg-[#0b0813] text-white overflow-hidden">
//       {/* Decorative frame */}
//       <div className="pointer-events-none absolute inset-2 rounded-3xl ring-1 ring-white/10 -z-10" />
//       {/* BACKGROUND LAYERS */}
//       <div className="fixed inset-0 z-0 pointer-events-none">
//         {/* 1) base dark gradient (lowest) */}
//         <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent via-[#0b0813]/20 to-[#0b0813]/60" />
//         {/* 2) particles (middle) */}
//         <div className="absolute inset-0 z-20 pointer-events-none">
//           <Particles
//             particleColors={["#ffffff", "#ffffff"]}
//             particleCount={200}
//             particleSpread={10}
//             speed={0.1}
//             particleBaseSize={100}
//             moveParticlesOnHover
//             alphaParticles={false}
//             disableRotation={false}
//           />
//         </div>
//         {/* 3) LIGHT RAYS (TOP) */}
//         {/* Wrap to control stacking and blending – many builds of LightRays use negative z
//            internally, so the wrapper guarantees it sits above the others. */}
//         <div className="absolute inset-0 z-30 pointer-events-none mix-blend-screen">
//           <LightRays
//           />
//           {/* opacity={0.95}
//             rayColor="#ffffff"
//             beams={6}
//             spread={0.7}
//             speed={0.22}
//             blurAmount={0.8} this is going to add in the LightRays component */}
//         </div>
//       </div>
//       {/* TOP NAV */}
//       {/* <header className="relative z-40 mx-auto mt-8 max-w-6xl">
//         <div className="flex items-center justify-between rounded-full bg-white/5 px-6 py-3 backdrop-blur ring-1 ring-white/10">
//           <div className="flex items-center gap-3">
//             <div className="grid h-8 w-8 place-items-center rounded-full bg-white/10 text-white/90">
//               ✴
//             </div>
//             <span className="font-semibold tracking-wide">AI Doc Nest</span>
//           </div>
//           <nav className="text-sm">
//             <ul className="flex items-center gap-6 text-white/80">
//               <li className="cursor-pointer hover:text-white">Home</li>
//               <li className="cursor-pointer hover:text-white">Docs</li>
//             </ul>
//           </nav>
//         </div>
//       </header> */}
//       <Header />
//       {/* HERO */}
//       <main className="relative z-40 mx-auto max-w-7xl px-6 pt-24 md:pt-28 text-center">
//         <span className="inline-flex items-center rounded-full bg-white/10 px-4 py-2 backdrop-blur ring-1 ring-white/15">
//           ⚡ New Background
//         </span>
//         {/* <h1 className="mt-6 text-4xl font-extrabold leading-tight text-white/90 md:text-7xl">
//           May these lights guide you
//           <br />
//           on your path
//         </h1> */}
//         <h1 className="leading-[0.95] font-extrabold tracking-tight text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
//           <span className="bg-[linear-gradient(90deg,#a78bfa_0%,#f472b6_18%,#f59e0b_40%,#facc15_55%,#84cc16_70%,#22d3ee_85%,#a78bfa_100%)] bg-clip-text text-transparent">
//             Train Your AI Agents to
//           </span>
//           <br />
//           <span className="bg-[linear-gradient(90deg,#a78bfa_0%,#f472b6_18%,#f59e0b_40%,#facc15_55%,#84cc16_70%,#22d3ee_85%,#a78bfa_100%)] bg-clip-text text-transparent">
//             Think, Learn, and Act.
//           </span>
//         </h1>
//         <div className="mt-8 flex items-center justify-center gap-4">
//           <button className="rounded-full bg-white px-6 py-3 text-gray-900 transition hover:opacity-90">
//             Get Started
//           </button>
//           <button className="rounded-full bg-white/10 px-6 py-3 ring-1 ring-white/20 transition hover:bg-white/15">
//             Learn More
//           </button>
//         </div>
//       </main>
//       <div style={{ height: '200px', position: 'relative', overflow: 'hidden', marginTop: '120px' }}>
//         <LogoLoop
//           logos={techLogos}
//           speed={120}
//           direction="left"
//           logoHeight={48}
//           gap={40}
//           pauseOnHover
//           scaleOnHover
//           fadeOut
//           fadeOutColor=""
//           ariaLabel="Technology partners"
//         />
//       </div>
//       <div className="max-w-7xl mx-auto px-6 pt-24">
//         <MagicBento
//           textAutoHide={true}
//           enableStars={true}
//           enableSpotlight={true}
//           enableBorderGlow={true}
//           enableTilt={true}
//           enableMagnetism={true}
//           clickEffect={true}
//           spotlightRadius={300}
//           particleCount={12}
//           glowColor="132, 0, 255"
//         />
//       </div>
//       {/* AI Team Section */}
//       <AiTeamSection />
//       <DocTeamSection />
//       <DownloadDevices />
//       <FeatureHighlights />
//       <Testimonials />
//       <SiteFooter />
//     </div>
//   );
// }
import { Routes, Route } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
// pages
import Home from "./pages/Home";
import About from "./pages/About";
import Features from "./pages/Features";
import CaseStudies from "./pages/CaseStudies";
import Pricing from "./pages/Pricing";
import Faq from "./pages/Faq";
import WhyAIDocNest from "./pages/WhyAIDocNest";
import UserGuide from "./pages/UserGuide";
function NotFound() {
    return (_jsxs("div", { className: "px-6 py-24 text-center", children: [_jsx("h1", { className: "text-3xl md:text-5xl font-bold", children: "404 \u2014 Page not found" }), _jsx("p", { className: "mt-3 text-white/70", children: "The page you\u2019re looking for doesn\u2019t exist." }), _jsx("a", { href: "/", className: "mt-6 inline-flex rounded-full bg-white px-6 py-3 text-gray-900", children: "Back to Home" })] }));
}
export default function App() {
    return (_jsx(Routes, { children: _jsxs(Route, { element: _jsx(RootLayout, {}), children: [_jsx(Route, { index: true, element: _jsx(Home, {}) }), _jsx(Route, { path: "/about", element: _jsx(About, {}) }), _jsx(Route, { path: "/features", element: _jsx(Features, {}) }), _jsx(Route, { path: "/case-studies", element: _jsx(CaseStudies, {}) }), _jsx(Route, { path: "*", element: _jsx(NotFound, {}) }), _jsx(Route, { path: "/pricing", element: _jsx(Pricing, {}) }), _jsx(Route, { path: "/resources/faq", element: _jsx(Faq, {}) }), _jsx(Route, { path: "/resources/why-ai-doc-nest", element: _jsx(WhyAIDocNest, {}) }), _jsx(Route, { path: "/resources/user-guide", element: _jsx(UserGuide, {}) })] }) }));
}

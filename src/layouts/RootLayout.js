import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// // src/layouts/RootLayout.tsx
// import React from "react";
// import { Outlet } from "react-router-dom";
// import Header from "@/components/Header";
// import Footer from "@/components/Footer";
// const RootLayout: React.FC = () => {
//   return (
//     <div className="min-h-screen bg-[#0b0813] text-white flex flex-col">
//       <Header />
//       {/* page content */}
//       <main className="flex-1">
//         <Outlet />
//       </main>
//       <Footer />
//     </div>
//   );
// };
// export default RootLayout;
import { Outlet } from "react-router-dom";
import Header from "../components/UI/Header";
import SiteFooter from "../components/UI/SiteFooter";
import LightRays from "../components/backgrounds/LightRays/LightRays";
import Particles from "../components/backgrounds/Particles/Particles";
export default function RootLayout() {
    return (_jsxs("div", { className: "relative min-h-screen bg-[#0b0813] text-white overflow-hidden", children: [_jsx("div", { className: "pointer-events-none absolute inset-2 rounded-3xl ring-1 ring-white/10 -z-10" }), _jsxs("div", { className: "fixed inset-0 z-0 pointer-events-none", children: [_jsx("div", { className: "absolute inset-0 z-10 bg-gradient-to-b from-transparent via-[#0b0813]/20 to-[#0b0813]/60" }), _jsx("div", { className: "absolute inset-0 z-20 pointer-events-none", children: _jsx(Particles, { particleColors: ["#ffffff", "#ffffff"], particleCount: 200, particleSpread: 10, speed: 0.1, particleBaseSize: 100, moveParticlesOnHover: true, alphaParticles: false, disableRotation: false }) }), _jsx("div", { className: "absolute inset-0 z-30 pointer-events-none mix-blend-screen", children: _jsx(LightRays, {}) })] }), _jsx("div", { className: "relative z-40", children: _jsx(Header, {}) }), _jsx("main", { className: "relative z-30 pt-24 md:pt-28", children: _jsx(Outlet, {}) }), _jsx("div", { className: "relative z-30", children: _jsx(SiteFooter, {}) })] }));
}

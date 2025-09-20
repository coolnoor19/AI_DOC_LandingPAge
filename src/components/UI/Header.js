import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// // src/components/Header.tsx
// import React, { useState } from "react";
// type NavItem = { label: string; href: string; hasDropdown?: boolean };
// const navLeft: NavItem[] = [
//   { label: "Product", href: "#", hasDropdown: true },
//   { label: "Solutions", href: "#", hasDropdown: true },
//   { label: "Learn", href: "#", hasDropdown: true },
//   { label: "Tools", href: "#", hasDropdown: true },
//   { label: "Pricing", href: "#" },
// ];
// const Caret = ({ className = "" }: { className?: string }) => (
//   <svg viewBox="0 0 24 24" className={className} width="16" height="16">
//     <path
//       d="M6 9l6 6 6-6"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="1.8"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     />
//   </svg>
// );
// const MenuIcon = ({ open }: { open: boolean }) => (
//   <svg viewBox="0 0 24 24" width="24" height="24" className="text-white">
//     {open ? (
//       <path
//         d="M6 6l12 12M6 18L18 6"
//         stroke="currentColor"
//         strokeWidth="1.8"
//         strokeLinecap="round"
//       />
//     ) : (
//       <path
//         d="M4 6h16M4 12h16M4 18h16"
//         stroke="currentColor"
//         strokeWidth="1.8"
//         strokeLinecap="round"
//       />
//     )}
//   </svg>
// );
// /** Rainbow pill border (conic gradient) */
// const RainbowButton = ({
//   children,
//   href = "#",
//   className = "",
// }: {
//   children: React.ReactNode;
//   href?: string;
//   className?: string;
// }) => (
//   <a
//     href={href}
//     className={`relative inline-flex items-center justify-center rounded-full p-[2px] 
//       bg-[conic-gradient(at_50%_50%,#f472b6,#f59e0b,#84cc16,#22d3ee,#a78bfa,#f472b6)]
//       shadow-sm transition hover:brightness-110 focus:outline-none focus-visible:ring-2 
//       focus-visible:ring-teal-400/60 ${className}`}
//   >
//     <span
//       className="rounded-full px-4 py-2 text-[15px] font-semibold 
//                  bg-[#0b0813] text-white"
//     >
//       {children}
//     </span>
//   </a>
// );
// const Header: React.FC = () => {
//   const [open, setOpen] = useState(false);
//   return (
//     <header
//       className="
//         sticky top-0 z-50 w-full
//         bg-[#0b0813]/80 backdrop-blur
//         border-b border-white/5
//       "
//     >
//       <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 md:px-6">
//         {/* Left: Logo + Nav */}
//         <div className="flex items-center gap-6">
//           {/* Logo */}
//           <a href="#" className="flex items-center gap-2">
//             <span className="grid h-8 w-8 place-items-center rounded-full bg-white/10">
//               <span className="text-xl">🦊</span>
//             </span>
//             <span className="text-lg font-semibold tracking-tight text-white">
//               AI Doc Nest
//             </span>
//           </a>
//           {/* Desktop nav */}
//           <nav className="hidden md:block">
//             <ul className="flex items-center gap-6 text-white/90">
//               {navLeft.map((item) => (
//                 <li key={item.label}>
//                   <a
//                     href={item.href}
//                     className="group inline-flex items-center gap-1 text-[15px] hover:text-white"
//                   >
//                     {item.label}
//                     {item.hasDropdown && (
//                       <Caret className="h-4 w-4 text-white/70 group-hover:text-white" />
//                     )}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </nav>
//         </div>
//         {/* Right actions */}
//         <div className="hidden items-center gap-6 md:flex">
//           <a href="#" className="text-[15px] text-white/90 hover:text-white">
//             Contact sales
//           </a>
//           <a href="#" className="text-[15px] text-white/90 hover:text-white">
//             Log in
//           </a>
//           <RainbowButton>Sign up for free</RainbowButton>
//         </div>
//         {/* Mobile hamburger */}
//         <button
//           className="inline-flex items-center justify-center rounded-lg p-2 text-white md:hidden"
//           aria-label="Toggle menu"
//           onClick={() => setOpen((o) => !o)}
//         >
//           <MenuIcon open={open} />
//         </button>
//       </div>
//       {/* Mobile panel */}
//       <div
//         className={`md:hidden origin-top transform transition-all duration-200 ${
//           open
//             ? "scale-y-100 opacity-100"
//             : "pointer-events-none scale-y-95 opacity-0"
//         }`}
//       >
//         <div className="mx-2 mb-3 rounded-2xl border border-white/10 bg-[#0b0813] p-4">
//           <nav>
//             <ul className="space-y-2">
//               {navLeft.map((item) => (
//                 <li key={item.label}>
//                   <a
//                     href={item.href}
//                     className="flex items-center justify-between rounded-xl px-3 py-2 text-white/90 hover:bg-white/5 hover:text-white"
//                   >
//                     <span>{item.label}</span>
//                     {item.hasDropdown && (
//                       <Caret className="h-4 w-4 text-white/70" />
//                     )}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </nav>
//           <div className="mt-3 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
//           <div className="mt-3 flex flex-col gap-3">
//             <a href="#" className="text-white/90 hover:text-white">
//               Contact sales
//             </a>
//             <a href="#" className="text-white/90 hover:text-white">
//               Log in
//             </a>
//             <RainbowButton className="w-full text-center">
//               Sign up for free
//             </RainbowButton>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };
// export default Header;
// import { Link, NavLink } from "react-router-dom";
// const navItem =
//   "text-sm text-white/80 hover:text-white transition px-2 py-1 rounded-md";
// const active =
//   "text-white bg-white/10 ring-1 ring-white/15";
// export default function Header() {
//   return (
//     <header className="mx-auto mt-8 max-w-6xl px-4">
//       <div className="flex items-center justify-between rounded-full bg-white/5 px-6 py-3 backdrop-blur ring-1 ring-white/10">
//         <Link to="/" className="flex items-center gap-3">
//           <div className="grid h-8 w-8 place-items-center rounded-full bg-white/10 text-white/90">
//             ✴
//           </div>
//           <span className="font-semibold tracking-wide">AI Docs Nest</span>
//         </Link>
//         <nav className="text-sm">
//           <ul className="flex items-center gap-2">
//             <li>
//               <NavLink
//                 to="/"
//                 end
//                 className={({ isActive }) =>
//                   `${navItem} ${isActive ? active : ""}`
//                 }
//               >
//                 Home
//               </NavLink>
//             </li>
//             <li>
//               <NavLink
//                 to="/about"
//                 className={({ isActive }) =>
//                   `${navItem} ${isActive ? active : ""}`
//                 }
//               >
//                 About
//               </NavLink>
//             </li>
//             <li>
//               <NavLink
//                 to="/features"
//                 className={({ isActive }) =>
//                   `${navItem} ${isActive ? active : ""}`
//                 }
//               >
//                 Features
//               </NavLink>
//             </li>
//             <li>
//               <NavLink
//                 to="/case-studies"
//                 className={({ isActive }) =>
//                   `${navItem} ${isActive ? active : ""}`
//                 }
//               >
//                 Case Studies
//               </NavLink>
//             </li>
//             <li>
//               <NavLink
//                 to="/pricing"
//                 className={({ isActive }) =>
//                   `${navItem} ${isActive ? active : ""}`
//                 }
//               >
//                 Pricing
//               </NavLink>
//             </li>
//           </ul>
//         </nav>
//         <div className="hidden sm:block">
//           <a
//             href="#"
//             className="rounded-full px-5 py-2 font-medium text-white
//               ring-1 ring-white/20 bg-[radial-gradient(120%_120%_at_0%_0%,#a78bfa_0%,transparent_30%),radial-gradient(120%_120%_at_100%_0%,#f59e0b_0%,transparent_30%),radial-gradient(120%_120%_at_100%_100%,#22d3ee_0%,transparent_30%),radial-gradient(120%_120%_at_0%_100%,#84cc16_0%,transparent_30%)]
//               hover:opacity-90 transition"
//           >
//             Sign up for free
//           </a>
//         </div>
//       </div>
//     </header>
//   );
// }
import { Link, NavLink, useLocation } from "react-router-dom";
const navItem = "text-sm text-white/80 hover:text-white transition px-2 py-1 rounded-md";
const active = "text-white bg-white/10 ring-1 ring-white/15";
export default function Header() {
    const location = useLocation();
    const isResources = location.pathname.startsWith("/resources");
    return (_jsx("header", { className: "mx-auto mt-8 max-w-6xl px-4", children: _jsxs("div", { className: "flex items-center justify-between rounded-full bg-white/5 px-6 py-3 backdrop-blur ring-1 ring-white/10", children: [_jsxs(Link, { to: "/", className: "flex items-center gap-3", children: [_jsx("div", { className: "grid h-8 w-8 place-items-center rounded-full bg-white/10 text-white/90", children: "\u2734" }), _jsx("span", { className: "font-semibold tracking-wide", children: "AIDoc Nest" })] }), _jsx("nav", { className: "text-sm", children: _jsxs("ul", { className: "flex items-center gap-2", children: [_jsx("li", { children: _jsx(NavLink, { to: "/", end: true, className: ({ isActive }) => `${navItem} ${isActive ? active : ""}`, children: "Home" }) }), _jsx("li", { children: _jsx(NavLink, { to: "/about", className: ({ isActive }) => `${navItem} ${isActive ? active : ""}`, children: "About" }) }), _jsx("li", { children: _jsx(NavLink, { to: "/features", className: ({ isActive }) => `${navItem} ${isActive ? active : ""}`, children: "Features" }) }), _jsx("li", { children: _jsx(NavLink, { to: "/case-studies", className: ({ isActive }) => `${navItem} ${isActive ? active : ""}`, children: "Case Studies" }) }), _jsx("li", { children: _jsx(NavLink, { to: "/pricing", className: ({ isActive }) => `${navItem} ${isActive ? active : ""}`, children: "Pricing" }) }), _jsxs("li", { className: "relative group", children: [_jsx("button", { className: `${navItem} ${isResources ? active : ""}`, "aria-haspopup": "menu", "aria-expanded": isResources, children: "Resources \u25BE" }), _jsxs("div", { className: "invisible absolute left-1/2 top-9 z-50 w-72 -translate-x-1/2\r\n                           rounded-2xl bg-white/8 backdrop-blur ring-1 ring-white/15 p-2\r\n                           opacity-0 transition group-hover:visible group-hover:opacity-100\r\n                           focus-within:visible focus-within:opacity-100", role: "menu", children: [_jsx("div", { className: "pointer-events-none absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-fuchsia-500/20 via-purple-400/20 to-emerald-400/20 blur-xl" }), _jsxs("ul", { className: "relative space-y-1", children: [_jsx("li", { children: _jsxs(NavLink, { to: "/resources/faq", className: ({ isActive }) => `block rounded-xl px-3 py-2.5 hover:bg-white/10 transition ${isActive ? "bg-white/10 ring-1 ring-white/15" : ""}`, role: "menuitem", children: [_jsx("div", { className: "text-sm font-medium", children: "FAQ" }), _jsx("div", { className: "text-[12px] text-white/70", children: "Answers to common questions" })] }) }), _jsx("li", { children: _jsxs(NavLink, { to: "/resources/why-ai-doc-nest", className: ({ isActive }) => `block rounded-xl px-3 py-2.5 hover:bg-white/10 transition ${isActive ? "bg-white/10 ring-1 ring-white/15" : ""}`, role: "menuitem", children: [_jsx("div", { className: "text-sm font-medium", children: "Why AIDoc Nest" }), _jsx("div", { className: "text-[12px] text-white/70", children: "What makes us different" })] }) }), _jsx("li", { children: _jsxs(NavLink, { to: "/resources/user-guide", className: ({ isActive }) => `block rounded-xl px-3 py-2.5 hover:bg-white/10 transition ${isActive ? "bg-white/10 ring-1 ring-white/15" : ""}`, role: "menuitem", children: [_jsx("div", { className: "text-sm font-medium", children: "User Guide" }), _jsx("div", { className: "text-[12px] text-white/70", children: "Quick start & best practices" })] }) })] })] })] })] }) }), _jsx("div", { className: "hidden sm:block", children: _jsx("a", { href: "#", className: "rounded-full px-5 py-2 font-medium text-white\r\n              ring-1 ring-white/20 bg-[radial-gradient(120%_120%_at_0%_0%,#a78bfa_0%,transparent_30%),radial-gradient(120%_120%_at_100%_0%,#f59e0b_0%,transparent_30%),radial-gradient(120%_120%_at_100%_100%,#22d3ee_0%,transparent_30%),radial-gradient(120%_120%_at_0%_100%,#84cc16_0%,transparent_30%)]\r\n              hover:opacity-90 transition", children: "Sign up for free" }) })] }) }));
}

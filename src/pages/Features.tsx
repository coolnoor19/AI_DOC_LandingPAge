// type Feature = {
//   title: string;
//   desc: string;
//   icon: JSX.Element;
// };

// const features: Feature[] = [
//   {
//     title: "AI-Powered Search",
//     desc: "Find anything—instantly. Natural language, smart filters, and context awareness.",
//     icon: (
//       <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
//         <circle cx="11" cy="11" r="7" />
//         <path d="M21 21l-4.3-4.3" />
//       </svg>
//     ),
//   },
//   {
//     title: "Secure Workspaces",
//     desc: "Granular roles, audit trails, SSO, and encryption—security by default.",
//     icon: (
//       <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
//         <rect x="4" y="10" width="16" height="10" rx="2" />
//         <path d="M8 10V7a4 4 0 1 1 8 0v3" />
//       </svg>
//     ),
//   },
//   {
//     title: "Automations",
//     desc: "Trigger flows on upload, tags, or approvals. Connect your tools with webhooks.",
//     icon: (
//       <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
//         <path d="M12 3v4M5 10h14M7 14h10M9 18h6" />
//         <rect x="6" y="7" width="12" height="12" rx="3" />
//       </svg>
//     ),
//   },
//   {
//     title: "Collaboration",
//     desc: "Comments, mentions, and live presence keep everyone aligned in real time.",
//     icon: (
//       <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
//         <path d="M7 20l-4 1 1-4" />
//         <circle cx="17" cy="7" r="3" />
//         <circle cx="7" cy="12" r="3" />
//         <path d="M14 15a3 3 0 0 1 6 0" />
//         <path d="M4 15a3 3 0 0 1 6 0" />
//       </svg>
//     ),
//   },
//   {
//     title: "Versioning",
//     desc: "Keep history, compare changes, and restore instantly without losing context.",
//     icon: (
//       <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
//         <path d="M3 12a9 9 0 1 0 3-6.7" />
//         <path d="M3 3v6h6" />
//       </svg>
//     ),
//   },
//   {
//     title: "Integrations",
//     desc: "Works with the tools you already love—Slack, Drive, Zapier and more.",
//     icon: (
//       <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
//         <path d="M8 6h8M6 12h12M8 18h8" />
//       </svg>
//     ),
//   },
// ];

// export default function Features() {
//   return (
//     <section className="px-6">
//       {/* Hero */}
//       <div className="mx-auto max-w-5xl text-center">
//         <span className="inline-flex items-center rounded-full bg-white/10 px-4 py-2 ring-1 ring-white/15 backdrop-blur">
//           🚀 Features
//         </span>
//         <h1 className="mt-6 text-4xl md:text-6xl font-extrabold leading-tight text-white/90">
//           Everything you need to move faster
//         </h1>
//         <p className="mt-4 text-white/70 max-w-3xl mx-auto">
//           Modern building blocks with delightful details—fast, secure, and easy.
//         </p>
//       </div>

//       {/* Grid */}
//       <div className="mx-auto mt-12 grid max-w-6xl grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
//         {features.map((f) => (
//           <div
//             key={f.title}
//             className="group rounded-2xl bg-white/5 ring-1 ring-white/10 p-6 hover:bg-white/10 transition"
//           >
//             <div className="inline-grid h-11 w-11 place-items-center rounded-xl bg-white/10 ring-1 ring-white/15 text-white/90">
//               {f.icon}
//             </div>
//             <h3 className="mt-4 text-lg font-semibold">{f.title}</h3>
//             <p className="mt-2 text-white/70">{f.desc}</p>
//             <div className="mt-4">
//               <a
//                 href="#"
//                 className="text-teal-300 hover:text-teal-200 underline decoration-teal-500/40"
//               >
//                 Learn more →
//               </a>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* How it works */}
//       <div className="mx-auto max-w-6xl mt-14 grid gap-5 md:grid-cols-3">
//         {[
//           { n: "1", t: "Connect", d: "Import docs or link your drives." },
//           { n: "2", t: "Organize", d: "Tag, group, and set access rules." },
//           { n: "3", t: "Automate", d: "Kick off approvals and alerts." },
//         ].map((s) => (
//           <div
//             key={s.n}
//             className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6"
//           >
//             <div className="text-3xl font-extrabold">{s.n}</div>
//             <div className="mt-2 text-lg font-semibold">{s.t}</div>
//             <div className="mt-1 text-white/70">{s.d}</div>
//           </div>
//         ))}
//       </div>

//       {/* CTA */}
//       <div className="mx-auto max-w-5xl text-center mt-14">
//         <a
//           href="/case-studies"
//           className="inline-flex rounded-full bg-white px-6 py-3 text-gray-900 hover:opacity-90 transition"
//         >
//           See real results
//         </a>
//       </div>
//     </section>
//   );
// }



// src/pages/Features.tsx
import React from "react";
import { ReactNode } from "react";


type Feature = {
  title: string;
  desc: string;
  // icon: JSX.Element;
  icon: ReactNode;

};

const IconWrap: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="inline-grid h-11 w-11 place-items-center rounded-xl bg-white/10 ring-1 ring-white/15 text-white/90">
    {children}
  </div>
);

/* Tiny, lightweight inline icons (no extra deps) */
const I = {
  search: (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="11" cy="11" r="7" />
      <path d="M21 21l-4.3-4.3" />
    </svg>
  ),
  layout: (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M3 3h8v8H3zM13 3h8v5h-8zM13 10h8v11h-8zM3 13h8v8H3z" />
    </svg>
  ),
  bot: (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="4" y="8" width="16" height="10" rx="3" />
      <path d="M12 3v3M8 18v2M16 18v2" />
      <circle cx="9" cy="13" r="1" />
      <circle cx="15" cy="13" r="1" />
    </svg>
  ),
  stack: (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M12 3l9 5-9 5-9-5 9-5z" />
      <path d="M3 12l9 5 9-5" />
    </svg>
  ),
  globe: (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="12" cy="12" r="9" />
      <path d="M2 12h20M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18" />
    </svg>
  ),
  plug: (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M9 7V3M15 7V3M7 11h10a4 4 0 0 1-4 4v4" />
      <path d="M13 19H7a4 4 0 0 1 0-8h10" />
    </svg>
  ),
  lock: (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="4" y="10" width="16" height="10" rx="2" />
      <path d="M8 10V7a4 4 0 1 1 8 0v3" />
    </svg>
  ),
  cloud: (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M7 18h10a4 4 0 0 0 0-8 5 5 0 0 0-9.6-1.2A4 4 0 0 0 7 18z" />
    </svg>
  ),
  phone: (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="7" y="2" width="10" height="20" rx="2" />
      <path d="M11 18h2" />
    </svg>
  ),
  ui: (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3" y="4" width="18" height="6" rx="1" />
      <rect x="3" y="14" width="8" height="6" rx="1" />
      <rect x="13" y="14" width="8" height="6" rx="1" />
    </svg>
  ),
  shield: (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M12 3l7 4v6c0 4-3 7-7 8-4-1-7-4-7-8V7l7-4z" />
    </svg>
  ),
  dollar: (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M12 1v22M17 5a4 4 0 0 0-4-2H9a3 3 0 0 0 0 6h6a3 3 0 1 1 0 6H9a4 4 0 0 1-4-2" />
    </svg>
  ),
  tag: (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M20 10l-6-6H5v9l6 6 9-9z" />
      <circle cx="7.5" cy="7.5" r="1.5" />
    </svg>
  ),
  spark: (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M12 2v6M12 16v6M2 12h6M16 12h6M5 5l4 4M15 15l4 4M5 19l4-4M15 9l4-4" />
    </svg>
  ),
  message: (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M21 15a4 4 0 0 1-4 4H8l-5 3V6a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z" />
    </svg>
  ),
  filter: (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M3 6h18M6 12h12M10 18h4" />
    </svg>
  ),
  history: (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M3 12a9 9 0 1 0 3-6.7" />
      <path d="M3 3v6h6" />
      <path d="M12 8v5l3 2" />
    </svg>
  ),
  rocket: (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M14 4l6 6-8 8-6-6 8-8z" />
      <path d="M5 19l3-3" />
    </svg>
  ),
};

const groups: { heading: string; items: Feature[] }[] = [
  {
    heading: "Search & Intelligence",
    items: [
      {
        title: "AI-Powered OCR Search",
        desc:
          "Search inside scanned PDFs and images—fast and accurately—so previously inaccessible content becomes fully searchable.",
        icon: <IconWrap>{I.search}</IconWrap>,
      },
      {
        title: "Natural Language Search",
        desc:
          "Find documents by typing questions or phrases. Our engine understands context—not just keywords.",
        icon: <IconWrap>{I.message}</IconWrap>,
      },
      {
        title: "Powerful Search",
        desc:
          "Use advanced filters and conditions to pinpoint exactly what you need across massive repositories.",
        icon: <IconWrap>{I.filter}</IconWrap>,
      },
      {
        title: "Context-Based Understanding",
        desc:
          "AI reads document content, applies relevant tags automatically, and boosts search accuracy.",
        icon: <IconWrap>{I.spark}</IconWrap>,
      },
      {
        title: "Customizable Search Formats",
        desc:
          "Design how results appear and group them by department or team for a tailored experience.",
        icon: <IconWrap>{I.layout}</IconWrap>,
      },
    ],
  },
  {
    heading: "Automation & Scale",
    items: [
      {
        title: "Customized AI Chatbot",
        desc:
          "Build a chatbot powered by your documents to answer team questions with precise, instant context.",
        icon: <IconWrap>{I.bot}</IconWrap>,
      },
      {
        title: "Handling Large Documents",
        desc:
          "Scale to millions of records—bills, customer docs, archives—with logical, future-proof organization.",
        icon: <IconWrap>{I.stack}</IconWrap>,
      },
      {
        title: "Global Data Fields",
        desc:
          "Define system-wide fields (e.g., Project, Department) that power consistent filtering and smarter search.",
        icon: <IconWrap>{I.globe}</IconWrap>,
      },
      {
        title: "Integrations",
        desc:
          "Seamlessly connect to legacy systems and modern tools to enhance workflows without disruption.",
        icon: <IconWrap>{I.plug}</IconWrap>,
      },
      {
        title: "Version Control",
        desc:
          "Track and compare versions. Roll back in seconds when needed—without losing context.",
        icon: <IconWrap>{I.history}</IconWrap>,
      },
    ],
  },
  {
    heading: "Security & Access",
    items: [
      {
        title: "Access Control",
        desc:
          "Granular permissions for viewing, editing, and sharing—mapped to your org’s structure.",
        icon: <IconWrap>{I.lock}</IconWrap>,
      },
      {
        title: "Data Privacy & Security",
        desc:
          "End-to-end protection with robust encryption, auditability, and privacy-first design.",
        icon: <IconWrap>{I.shield}</IconWrap>,
      },
      {
        title: "Secure Storage (Cloud)",
        desc:
          "Enterprise-grade cloud storage that’s scalable, resilient, and available anywhere.",
        icon: <IconWrap>{I.cloud}</IconWrap>,
      },
      {
        title: "Mobile Access",
        desc:
          "Work on the go. Browse, search, and collaborate securely from your phone.",
        icon: <IconWrap>{I.phone}</IconWrap>,
      },
    ],
  },
  {
    heading: "Experience & Productivity",
    items: [
      {
        title: "User-Friendly Interface",
        desc:
          "Clean navigation, multiple file formats, and thoughtful UX make everyone productive from day one.",
        icon: <IconWrap>{I.ui}</IconWrap>,
      },
      {
        title: "Reduced Storage Costs",
        desc:
          "Optimize digital storage, minimize physical archives, and reclaim budget and space.",
        icon: <IconWrap>{I.dollar}</IconWrap>,
      },
      {
        title: "Customizable Organization",
        desc:
          "Create categories, folders, and labels to mirror your business processes.",
        icon: <IconWrap>{I.tag}</IconWrap>,
      },
      {
        title: "Custom Tags",
        desc:
          "Let teams create their own tags to categorize documents the way they work.",
        icon: <IconWrap>{I.tag}</IconWrap>,
      },
      {
        title: "Increased Productivity",
        desc:
          "Faster retrieval, smoother workflows, and happier customers across every department.",
        icon: <IconWrap>{I.rocket}</IconWrap>,
      },
    ],
  },
];

export default function Features() {
  return (
    <section className="px-6">
      {/* Hero */}
      <div className="mx-auto max-w-5xl text-center">
        <span className="inline-flex items-center rounded-full bg-white/10 px-4 py-2 ring-1 ring-white/15 backdrop-blur">
          🚀 Features
        </span>
        <h1 className="mt-6 leading-[1.05] font-extrabold tracking-tight text-4xl sm:text-5xl md:text-6xl">
          <span className="bg-[linear-gradient(90deg,#a78bfa_0%,#f472b6_18%,#f59e0b_40%,#facc15_55%,#84cc16_70%,#22d3ee_85%,#a78bfa_100%)] bg-clip-text text-transparent">
            Everything you need to move faster
          </span>
        </h1>
        <p className="mt-4 text-white/70 max-w-3xl mx-auto">
          Search that understands context, security that scales, and an interface your team will love.
        </p>
      </div>

      {/* Groups */}
      <div className="mx-auto mt-12 max-w-6xl space-y-12">
        {groups.map((g) => (
          <div key={g.heading}>
            <h2 className="mb-5 text-lg font-semibold text-white/90">{g.heading}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {g.items.map((f) => (
                <div
                  key={f.title}
                  className="group rounded-2xl bg-white/5 ring-1 ring-white/10 p-6 hover:bg-white/10 transition"
                >
                  {f.icon}
                  <h3 className="mt-4 text-lg font-semibold">{f.title}</h3>
                  <p className="mt-2 text-white/70">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* How it works */}
      <div className="mx-auto max-w-6xl mt-14 grid gap-5 md:grid-cols-3">
        {[
          { n: "1", t: "Connect", d: "Import docs or link your drives & legacy systems." },
          { n: "2", t: "Organize", d: "Tags, global fields, and access rules keep things tidy." },
          { n: "3", t: "Automate", d: "Chatbots, OCR search, and alerts boost every workflow." },
        ].map((s) => (
          <div key={s.n} className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6">
            <div className="text-3xl font-extrabold">{s.n}</div>
            <div className="mt-2 text-lg font-semibold">{s.t}</div>
            <div className="mt-1 text-white/70">{s.d}</div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="mx-auto max-w-5xl text-center mt-14">
        <a
          href="/case-studies"
          className="inline-flex rounded-full bg-white px-6 py-3 text-gray-900 hover:opacity-90 transition"
        >
          See real results
        </a>
      </div>
    </section>
  );
}


// src/components/SiteFooter.tsx
import React from "react";

const SocialIcon = ({
  title,
  children,
  href,
}: {
  title: string;
  href: string;
  children: React.ReactNode;
}) => (
  <a
    href={href}
    aria-label={title}
    className="
      inline-grid h-10 w-10 place-items-center rounded-xl
      bg-white/5 ring-1 ring-white/10 text-white/80
      transition hover:bg-white/10 hover:text-white
    "
  >
    {children}
  </a>
);

const SiteFooter: React.FC = () => {
  return (
    <footer className="relative overflow-hidden bg-[#0b0813] pt-16 md:pt-24">
      {/* soft background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(1200px_500px_at_50%_-10%,rgba(255,255,255,0.06),transparent_60%)]" />
      </div>

      <div className="mx-auto max-w-6xl px-6">
        {/* top band: newsletter */}
        <div
          className="
            grid gap-6 rounded-2xl bg-white/5 p-6 ring-1 ring-white/10
            md:grid-cols-[1.2fr,1fr] md:p-8
          "
        >
          <div>
            <h3 className="text-2xl font-bold text-white">
              Join our newsletter
            </h3>
            <p className="mt-2 text-white/70">
              Product updates, tips, and new components—straight to your inbox.
            </p>
          </div>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex w-full items-center gap-3"
          >
            <input
              type="email"
              required
              placeholder="you@company.com"
              className="
                w-full rounded-xl border-0 bg-white/10 px-4 py-3 text-white
                placeholder-white/60 ring-1 ring-white/15 outline-none
                focus:ring-2 focus:ring-teal-400
              "
            />
            <button
              className="
                rounded-xl bg-teal-600 px-5 py-3 font-medium text-white
                shadow hover:bg-teal-700 transition
              "
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* link columns */}
        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <div className="grid h-9 w-9 place-items-center rounded-lg bg-white/10">
                ✴
              </div>
              <span className="text-lg font-semibold text-white">
                AI Docs Nest
              </span>
            </div>
            <p className="mt-3 max-w-xs text-white/70">
              Minimal, modern components for fast product teams—built with
              React, TypeScript, and Tailwind.
            </p>

            <div className="mt-4 flex items-center gap-3">
              <SocialIcon title="Twitter" href="#">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                  <path d="M22 5.8c-.7.3-1.5.6-2.3.7.8-.5 1.4-1.2 1.7-2-.7.4-1.6.8-2.4 1A3.8 3.8 0 0 0 12 8.3c0 .3 0 .6.1.9A10.8 10.8 0 0 1 3 5.2a3.8 3.8 0 0 0 1.2 5 3.6 3.6 0 0 1-1.7-.4v.1c0 1.9 1.4 3.5 3.2 3.9-.4.1-.8.2-1.2.2-.3 0-.6 0-.9-.1.6 1.6 2.1 2.7 3.8 2.7A7.7 7.7 0 0 1 2 19.4 10.8 10.8 0 0 0 7.8 21c7 0 10.9-5.8 10.9-10.9v-.5c.8-.5 1.4-1.2 1.9-1.9z" />
                </svg>
              </SocialIcon>
              <SocialIcon title="GitHub" href="#">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                  <path d="M12 2a10 10 0 0 0-3.2 19.5c.5.1.7-.2.7-.5v-1.8c-3 .6-3.6-1.4-3.6-1.4-.4-1-1-1.2-1-1.2-.8-.6.1-.6.1-.6.9.1 1.3 1 1.3 1 .8 1.3 2.1.9 2.6.7.1-.6.3-1 .6-1.3-2.4-.3-5-1.2-5-5.3 0-1.2.4-2.1 1-2.9 0-.3-.4-1.4.1-2.8 0 0 .9-.3 2.9 1a10 10 0 0 1 5.3 0c2-1.3 2.9-1 2.9-1 .5 1.4.1 2.5.1 2.8.7.8 1 1.7 1 2.9 0 4.1-2.6 5-5 5.2.3.2.7.8.7 1.7v2.6c0 .3.2.6.7.5A10 10 0 0 0 12 2z" />
                </svg>
              </SocialIcon>
              <SocialIcon title="LinkedIn" href="#">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                  <path d="M4.98 3.5c0 1-.8 1.8-1.8 1.8A1.8 1.8 0 1 1 4.98 3.5zM3.2 8.3h3.5V21H3.2zM9.4 8.3h3.3v1.7h.1c.4-.8 1.5-1.7 3.1-1.7 3.3 0 3.9 2.1 3.9 4.9V21h-3.6v-5.6c0-1.3 0-3-1.9-3s-2.2 1.4-2.2 2.9V21H9.4z" />
                </svg>
              </SocialIcon>
              <SocialIcon title="Dribbble" href="#">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                  <path d="M12 2a10 10 0 1 0 .001 20.001A10 10 0 0 0 12 2zm6.8 6.2a8.3 8.3 0 0 1 1.1 4.1c-2.1-.4-3.9-.3-5.3.1-.2-.4-.3-.8-.6-1.3 2-1 3.7-2.3 4.8-2.9zM12 3.7c1.5 1.8 2.6 3.6 3.3 5.1-1.9.9-3.9 1.6-6 1.8-.2-.5-.4-1-.7-1.5 1.3-2.8 2.8-4.6 3.4-5.4zm-5.8 2.7c.7.5 2 1.3 3.1 2.3-.3.7-.6 1.4-.8 2.1-1.9.1-3.8-.1-5.6-.7a8.3 8.3 0 0 1 3.3-3.7zM3.6 12c2 .6 4 .8 6 .6.2.6.3 1.1.5 1.8-1.5.5-3.3 1-5.3 1.1A8.3 8.3 0 0 1 3.6 12zm2.2 5.6c1.8-.2 3.6-.6 5.2-1.1.5 1.7.9 3.5 1.1 5.1a8.3 8.3 0 0 1-6.3-4zm7.9 4c-.3-1.7-.7-3.5-1.2-5.3 1.3-.4 2.8-.6 4.6-.3a8.3 8.3 0 0 1-3.4 5.6z" />
                </svg>
              </SocialIcon>
            </div>
          </div>

          {/* link columns */}
          <div>
            <p className="text-sm font-semibold tracking-wide text-white/90">
              Product
            </p>
            <ul className="mt-3 space-y-2 text-white/70">
              <li><a className="hover:text-white" href="#">Overview</a></li>
              <li><a className="hover:text-white" href="#">Components</a></li>
              <li><a className="hover:text-white" href="#">Pricing</a></li>
              <li><a className="hover:text-white" href="#">Changelog</a></li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold tracking-wide text-white/90">
              Resources
            </p>
            <ul className="mt-3 space-y-2 text-white/70">
              <li><a className="hover:text-white" href="#">Docs</a></li>
              <li><a className="hover:text-white" href="#">Guides</a></li>
              <li><a className="hover:text-white" href="#">Templates</a></li>
              <li><a className="hover:text-white" href="#">Community</a></li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold tracking-wide text-white/90">
              Company
            </p>
            <ul className="mt-3 space-y-2 text-white/70">
              <li><a className="hover:text-white" href="#">About</a></li>
              <li><a className="hover:text-white" href="#">Careers</a></li>
              <li><a className="hover:text-white" href="#">Contact</a></li>
              <li><a className="hover:text-white" href="#">Press</a></li>
            </ul>
          </div>
        </div>

        {/* bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 py-6 text-sm text-white/60 sm:flex-row">
          <p>© {new Date().getFullYear()} AI Docs Nest. All rights reserved.</p>
          <ul className="flex items-center gap-5">
            <li><a className="hover:text-white" href="#">Terms</a></li>
            <li><a className="hover:text-white" href="#">Privacy</a></li>
            <li><a className="hover:text-white" href="#">Cookies</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;

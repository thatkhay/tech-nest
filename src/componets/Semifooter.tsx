import React from "react";

// Simple inline SVG check icon
const Check = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M20 6L9 17l-5-5" />
  </svg>
);

export default function Semifooter() {
  return (
    <section className="relative isolate overflow-hidden bg-[#082554] text-white">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-12 px-6 py-20 md:grid-cols-2 md:gap-8 lg:px-8 lg:py-28">
        {/* Left: Copy + Features + Badges */}
        <div className="flex flex-col justify-center">
          <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            Take <span className="text-white">TechNest</span> Everywhere
          </h2>
          <p className="mt-6 max-w-2xl text-lg/8 text-slate-200">
            Download our mobile app for the ultimate tech marketplace
            experience. Buy, sell, and swap on the go with enhanced features and
            real-time notifications.
          </p>

          <ul className="mt-8 space-y-5">
            {[
              "Push notifications for new deals",
              "Camera-based price scanner",
              "Offline browsing capabilities",
              "Enhanced security features",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-pink-500/15 text-pink-400 ring-1 ring-pink-500/30">
                  <Check className="h-3.5 w-3.5" />
                </span>
                <span className="text-base text-slate-100">{item}</span>
              </li>
            ))}
          </ul>

          {/* Store Badges */}
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#"
              className="group inline-flex items-center gap-3 rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10"
            >
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-slate-900/20">
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4"
                  fill="currentColor"
                >
                  <circle cx="12" cy="12" r="10" />
                </svg>
              </span>
              App Store
            </a>
            <a
              href="#"
              className="group inline-flex items-center gap-3 rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10"
            >
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-slate-900/20">
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4"
                  fill="currentColor"
                >
                  <path d="M8 5v14l11-7-11-7z" />
                </svg>
              </span>
              Google Play
            </a>
          </div>
        </div>

        {/* Right: Phone Mockups */}
        <div className="relative mx-auto flex w-full items-center justify-center">
          {/* Glow */}
          <div className="absolute inset-0 -z-10 m-auto h-72 w-72 rounded-full bg-fuchsia-500/10 blur-3xl" />

          {/* Phone Left */}
          <PhoneMockup
            className="-mr-10 hidden scale-100 drop-shadow-2xl md:block floatUp"
            primary
          />

          {/* Phone Right */}
          <PhoneMockup
            className="z-10 scale-95 drop-shadow-2xl floatDown"
            accentOnly
          />
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes floatUp {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        @keyframes floatDown {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(20px);
          }
        }
        .floatUp {
          animation: floatUp 6s ease-in-out infinite;
        }
        .floatDown {
          animation: floatDown 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}

function PhoneMockup({
  className = "",
  primary = false,
  accentOnly = false,
}: {
  className?: string;
  primary?: boolean;
  accentOnly?: boolean;
}) {
  return (
    <div
      className={`relative h-[520px] w-[280px] rounded-[2.2rem] border border-white/10 bg-white p-3 shadow-2xl ${className}`}
    >
      <div className="h-full w-full rounded-[1.8rem] bg-slate-50 p-3">
        {/* Top bar / gradient pill */}
        <div className="rounded-xl bg-gradient-to-r from-pink-500 to-violet-500 px-4 py-3 text-center text-sm font-semibold text-white">
          TechNest
        </div>

        {/* Cards */}
        <div className="mt-4 space-y-4">
          <div className="h-16 rounded-xl bg-white shadow-sm ring-1 ring-black/5" />
          <div className="h-16 rounded-xl bg-white shadow-sm ring-1 ring-black/5" />
          <div className="h-20 rounded-xl bg-white shadow-sm ring-1 ring-black/5" />
        </div>

        {/* Large card */}
        <div className="mt-4 h-28 rounded-2xl bg-white shadow-sm ring-1 ring-black/5" />

        {/* Bottom spacer */}
        <div className="mt-4 h-10 rounded-xl bg-slate-100" />

        {/* Accent pill for the right phone */}
        {accentOnly && (
          <div className="absolute left-1/2 top-1/2 w-[78%] -translate-x-1/2 -translate-y-1/2 rounded-xl bg-gradient-to-r from-pink-500 to-violet-500 px-4 py-5 text-center text-white" />
        )}
      </div>

      {/* Bezel detail */}
      {primary && (
        <div className="pointer-events-none absolute inset-0 rounded-[2.2rem] ring-1 ring-black/10" />
      )}
    </div>
  );
}

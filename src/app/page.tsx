"use client";
import NavBar from "@/componets/Navbar";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      <NavBar />

      <section className="relative isolate overflow-hidden bg-gradient-to-br from-[#0b1e4a] to-[#0e2d66] text-white">
        {/* subtle grid background */}
        <div
          className="absolute inset-0 -z-10 opacity-25
          [background-image:linear-gradient(to_right,rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.12)_1px,transparent_1px)]
          [background-size:60px_60px]"
        />

        <div className="mx-auto max-w-7xl px-6 py-20 lg:py-28 grid lg:grid-cols-2 items-center gap-12">
          {/* LEFT */}
          <div>
            <h1 className="max-w-3xl text-5xl leading-tight font-extrabold sm:text-6xl">
              Buy, Swap & Sell{" "}
              <span className="bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-500 bg-clip-text text-transparent">
                Tech Gadgets
              </span>{" "}
              with Confidence
            </h1>

            <p className="mt-6 max-w-2xl text-[1rem] leading-7 text-blue-100 font-bold">
              <span className="rounded-md py-1">
                The ultimate marketplace for smartphones, tablets, laptops, and
                all your favorite tech accessories.
              </span>{" "}
              <span className="rounded-md py-1">
                Get the best deals and trade with verified sellers worldwide.
              </span>
            </p>

            {/* Search */}
            <div className="mt-8 max-w-2xl">
              <div className="relative flex items-center rounded-full bg-white/95 ring-4 ring-white/80 shadow-xl">
                <input
                  type="text"
                  placeholder="Search for iPhone, Samsung, MacBook..."
                  className="w-full flex-1 rounded-full bg-transparent py-4 pl-6 pr-36 text-gray-900 placeholder-gray-500 focus:outline-none"
                />
                <Link
                  href="/search"
                  className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full px-6 py-3 font-semibold text-white bg-gradient-to-r from-pink-500 to-purple-500 hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-white/60"
                >
                  Search
                </Link>
              </div>
            </div>

            {/* Stats */}
            <div className="mt-10 flex flex-wrap gap-10 sm:gap-14">
              <div>
                <div className="text-3xl font-extrabold text-pink-400">
                  250K+
                </div>
                <div className="text-sm text-blue-100">Active Users</div>
              </div>
              <div>
                <div className="text-3xl font-extrabold text-pink-400">1M+</div>
                <div className="text-sm text-blue-100">Products Listed</div>
              </div>
              <div>
                <div className="text-3xl font-extrabold text-pink-400">98%</div>
                <div className="text-sm text-blue-100">Success Rate</div>
              </div>
            </div>
          </div>

          {/* RIGHT: phone with soft bounce (no styled-jsx needed) */}
          <div className="flex justify-center lg:justify-end">
            {/* Reserve layout space for the tall phone */}
            <div className="relative min-h-[600px] w-full lg:w-auto">
              {/* Position the animated wrapper at the bottom-right (or center on small screens) */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 lg:left-auto lg:right-0 lg:translate-x-0">
                {/* This tiny wrapper controls bounce amplitude */}
                <div className="relative h-[30px] will-change-transform motion-safe:animate-[bounce_3.2s_ease-in-out_infinite]">
                  {/* The actual phone is anchored to the bottom of the wrapper */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
                    <div className="h-[560px] w-[300px] rounded-[36px] bg-white/95 p-5 shadow-2xl ring-1 ring-white/50">
                      <div className="mx-auto mb-5 h-12 rounded-xl bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold flex items-center justify-center">
                        TechNest App
                      </div>
                      <div className="space-y-4">
                        <div className="h-20 rounded-xl bg-gray-200 shadow-inner" />
                        <div className="h-20 rounded-xl bg-gray-200 shadow-inner" />
                        <div className="h-20 rounded-xl bg-gray-200 shadow-inner" />
                      </div>
                    </div>

                    {/* soft ellipse shadow */}
                    <div
                      aria-hidden
                      className="absolute -bottom-6 left-1/2 h-10 w-[70%] -translate-x-1/2 rounded-full bg-black/40 blur-2xl opacity-40"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

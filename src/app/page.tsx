import NavBar from "@/componets/Navbar";
import Link from "next/link";

export default function Home() {
  return (
    <div className=" min-h-screen">
      <NavBar />
      <section className="relative isolate bg-gradient-to-br from-[#0b1e4a] to-[#0e2d66] text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
          {/* Headline */}
          <h1 className="max-w-3xl text-5xl leading-tight font-extrabold sm:text-6xl">
            Buy, Swap & Sell{" "}
            <span className="bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-500 bg-clip-text text-transparent">
              Tech Gadgets
            </span>{" "}
            with Confidence
          </h1>

          {/* Subheading with soft highlight */}
          <p className="mt-6 max-w-2xl text-lg text-[1rem] leading-7 text-blue-100 font-bold">
            <span className="rounded-md  py-1">
              The ultimate marketplace for smartphones, tablets, laptops, and
              all your favorite tech accesories.
            </span>{" "}
            <span className="rounded-md py-1">
              Get the best deals and trade with verified sellers worldwide.
            </span>
          </p>

          {/* Search bar */}
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
              <div className="text-3xl font-extrabold text-pink-400">250K+</div>
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
      </section>
    </div>
  );
}

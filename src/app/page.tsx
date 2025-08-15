"use client";
import { JSX, MouseEvent } from "react";
import NavBar from "@/componets/ui/Navbar";
import Button from "@/componets/ui/Button";
import PhonePreview from "@/componets/PhonePreview";
import Layout from "@/componets/ui/Layout";

export default function Home(): JSX.Element {
  const handleSearch = (event: MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault();
    window.location.href = "/search";
  };

  return (
    <Layout className="min-h-screen">
      <NavBar />

      <section className="relative isolate overflow-hidden bg-gradient-to-br from-[#0b1e4a] to-[#0e2d66] text-white">
        <div
          className="absolute inset-0 -z-10 opacity-25
          [background-image:linear-gradient(to_right,rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.12)_1px,transparent_1px)]
          [background-size:60px_60px]"
        />

        <div className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 items-center gap-12">
            <div className="order-2 lg:order-1">
              <h1 className="max-w-3xl text-5xl leading-tight font-extrabold sm:text-6xl">
                Buy, Swap & Sell{" "}
                <span className="bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-500 bg-clip-text text-transparent">
                  Tech Gadgets
                </span>{" "}
                with Confidence
              </h1>

              <p className="mt-6 max-w-2xl text-[1rem] leading-7 text-blue-100 font-bold">
                <span className="rounded-md py-1">
                  The ultimate marketplace for smartphones, tablets, laptops,
                  and all your favorite tech accessories.
                </span>{" "}
                <span className="rounded-md py-1">
                  Get the best deals and trade with verified sellers worldwide.
                </span>
              </p>

              <div className="mt-8 max-w-2xl">
                <div className="relative flex items-center rounded-full bg-white/95 ring-4 ring-white/80 shadow-xl">
                  <input
                    type="text"
                    placeholder="Search for iPhone, Samsung, MacBook..."
                    className="w-full flex-1 rounded-full bg-transparent py-4 pl-6 pr-36 text-gray-900 placeholder-gray-500 focus:outline-none"
                  />
                  <Button
                    variant="primary"
                    size="md"
                    className="absolute right-2 top-1/2 -translate-y-1/2"
                    onClick={handleSearch}
                  >
                    Search
                  </Button>
                </div>
              </div>

              <div className="mt-10 flex flex-wrap gap-10 sm:gap-14">
                <div>
                  <div className="text-3xl font-extrabold text-pink-400">
                    250K+
                  </div>
                  <div className="text-sm text-blue-100">Active Users</div>
                </div>
                <div>
                  <div className="text-3xl font-extrabold text-pink-400">
                    1M+
                  </div>
                  <div className="text-sm text-blue-100">Products Listed</div>
                </div>
                <div>
                  <div className="text-3xl font-extrabold text-pink-400">
                    98%
                  </div>
                  <div className="text-sm text-blue-100">Success Rate</div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
              <div className="w-full max-w-[350px] lg:max-w-none lg:w-auto">
                <PhonePreview />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

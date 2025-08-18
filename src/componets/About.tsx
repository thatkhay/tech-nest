// src/components/About.tsx
import React from "react";

type Feature = {
  title: string;
  desc: string;
  emoji: string; // swap for SVGs later if you like
};

const features: Feature[] = [
  {
    title: "Secure Transactions",
    desc: "End-to-end encryption and buyer protection ensure your transactions are always safe and secure.",
    emoji: "🔒",
  },
  {
    title: "Verified Sellers",
    desc: "All sellers go through our rigorous verification process to ensure authenticity and reliability.",
    emoji: "✅",
  },
  {
    title: "Fast Shipping",
    desc: "Get your gadgets delivered quickly with our network of trusted shipping partners worldwide.",
    emoji: "🚚",
  },
  {
    title: "Best Prices",
    desc: "Our smart pricing algorithm ensures you get the best deals on both buying and selling.",
    emoji: "💰",
  },
  {
    title: "Easy Swapping",
    desc: "Trade your old devices for new ones with our innovative swap feature and intelligent matching.",
    emoji: "🔄",
  },
  {
    title: "24/7 Support",
    desc: "Our dedicated support team is always here to help you with any questions or concerns.",
    emoji: "📞",
  },
];

const About = () => {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0b1e4a]">
            Why Choose TechNest?
          </h2>
          <p className="mt-3 text-slate-600">
            We make buying, selling, and swapping tech simple and secure
          </p>
        </div>

        {/* Features */}
        <div className="mt-12 grid gap-x-12 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="flex items-start gap-4
            "
            >
              {/* Gradient icon tile */}
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-500 to-purple-500 text-white">
                <span className="text-2xl leading-none">{f.emoji}</span>
              </div>

              {/* Text */}
              <div>
                <h3 className="text-lg font-extrabold text-[#0b1e4a]">
                  {f.title}
                </h3>
                <p className="mt-1 text-slate-600">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;

import Link from "next/link";

type Cat = { name: string; desc: string; emoji: string; href: string };

const categories: Cat[] = [
  {
    name: "Smartphones",
    desc: "Latest iPhones, Samsung Galaxy, Google Pixel and more",
    emoji: "📱",
    href: "/categories/smartphones",
  },
  {
    name: "Laptops",
    desc: "MacBooks, Gaming laptops, Business notebooks",
    emoji: "💻",
    href: "/categories/laptops",
  },
  {
    name: "Tablets",
    desc: "iPads, Android tablets, E-readers",
    emoji: "📗",
    href: "/categories/tablets",
  },
  {
    name: "Wearables",
    desc: "Smart watches, Fitness trackers, Earbuds",
    emoji: "⌚",
    href: "/categories/wearables",
  },
  {
    name: "Gaming",
    desc: "Consoles, Gaming accessories, VR headsets",
    emoji: "🎮",
    href: "/categories/gaming",
  },
  {
    name: "Cameras",
    desc: "DSLRs, Action cameras, Drones",
    emoji: "📷",
    href: "/categories/cameras",
  },
];

export default function Category() {
  return (
    <section className="bg-slate-50 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0b1e4a]">
            Shop by Category
          </h2>
          <p className="mt-2 text-slate-600">
            Find exactly what you&apos;re looking for in our curated categories
          </p>
        </div>

        {/* Grid */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((c) => (
            <Link
              key={c.name}
              href={c.href}
              className="group rounded-3xl bg-white p-8 shadow-lg shadow-slate-200 ring-1 ring-slate-100
                         transition-transform duration-200 hover:-translate-y-1"
            >
              {/* Icon bubble */}
              <div
                className="mx-auto flex h-16 w-16 items-center justify-center rounded-full
                              bg-gradient-to-br from-pink-500 to-purple-500 text-white"
              >
                <span className="text-2xl leading-none">{c.emoji}</span>
              </div>

              {/* Title */}
              <h3 className="mt-6 text-center text-xl font-extrabold text-[#0b1e4a] group-hover:text-[#0b1e4a]">
                {c.name}
              </h3>

              {/* Description */}
              <p className="mt-2 text-center text-sm text-slate-500">
                {c.desc}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

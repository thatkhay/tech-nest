import Link from "next/link";

type Cat = {
  name: string;
  desc: string;
  emoji: string;
  href: string;
  count: number;
};

const categories: Cat[] = [
  {
    name: "Smartphones",
    desc: "Latest iPhones, Samsung, Google Pixel",
    emoji: "📱",
    href: "/categories/smartphones",
    count: 15432,
  },
  {
    name: "Laptops",
    desc: "MacBooks, Gaming laptops, Ultrabooks",
    emoji: "💻",
    href: "/categories/laptops",
    count: 8921,
  },
  {
    name: "Tablets",
    desc: "iPads, Android tablets, E-readers",
    emoji: "📗",
    href: "/categories/tablets",
    count: 3456,
  },
  {
    name: "Wearables",
    desc: "Smart watches, Fitness trackers",
    emoji: "⌚",
    href: "/categories/wearables",
    count: 2187,
  },
  {
    name: "Gaming",
    desc: "Consoles, Accessories, VR headsets",
    emoji: "🎮",
    href: "/categories/gaming",
    count: 6124,
  },
  {
    name: "Audio",
    desc: "Headphones, Speakers, Earbuds",
    emoji: "🎧",
    href: "/categories/audio",
    count: 4879,
  },
];

export default function Category() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* (Optional) simple breadcrumb like in the screenshot */}
        <nav
          aria-label="Breadcrumb"
          className="mb-10 hidden justify-between text-sm text-slate-500 sm:flex"
        >
          <div className="space-x-2">
            <span>Home</span>
            <span>›</span>
            <span>Electronics</span>
          </div>
          <span className="font-medium text-[#0b1e4a]">Smartphones</span>
        </nav>

        {/* Heading */}
        <div className="text-center">
          <h2 className="text-4xl font-extrabold tracking-tight text-[#0b1e4a]">
            Browse Categories
          </h2>
          <p className="mt-3 text-slate-600">
            Find exactly what you&apos;re looking for in our verified
            marketplace
          </p>
        </div>

        {/* Grid */}
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {categories.map((c) => (
            <Link
              key={c.name}
              href={c.href}
              className="group rounded-3xl bg-white p-8 shadow-lg shadow-slate-200 ring-1 ring-slate-100 transition-transform duration-200 hover:-translate-y-1"
            >
              {/* Icon bubble */}
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-pink-500 to-purple-500 text-white">
                <span className="text-2xl leading-none">{c.emoji}</span>
              </div>

              {/* Title */}
              <h3 className="mt-6 text-center text-xl font-extrabold text-[#0b1e4a]">
                {c.name}
              </h3>

              {/* Description */}
              <p className="mt-2 text-center text-sm leading-6 text-slate-500">
                {c.desc}
              </p>

              {/* Items pill */}
              <div className="mt-4 flex justify-center">
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-[#0b1e4a] ring-1 ring-slate-200">
                  {c.count.toLocaleString()} items
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

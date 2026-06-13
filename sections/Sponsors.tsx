

"use client";

import Image from "next/image";

const sponsors = [
  {
    name: "Strike Tennis Academy",
    role: "Training Partner",
    logo: "/images/sponsors/strike-tennis-academy.webp",
  },
  {
    name: "Lumy Sport",
    role: "Equipment Partner",
    logo: "/images/sponsors/lumy-sport.webp",
  },
  {
    name: "Target",
    role: "Official Sponsor",
    logo: "/images/sponsors/target.webp",
  },
];

export default function Sponsors() {
  return (
    <section
      id="sponsors"
      className="relative overflow-hidden bg-black py-12"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-red-950/5 to-black" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-12 text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-red-500">
            OFFICIAL SPONSORS
          </span>

          <h2 className="mt-4 text-5xl font-black text-white md:text-7xl">
            الرعاة الرسميون
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
            الجهات الداعمة لمسيرة أمنية أحمد سمرة الرياضية.
          </p>

          <div className="mx-auto mt-8 h-px w-40 bg-gradient-to-r from-transparent via-red-500/40 to-transparent" />
        </div>

        {/* Mobile Horizontal Scroll + Desktop Grid */}
        <div className="flex gap-4 overflow-x-auto pb-4 md:grid md:grid-cols-3 md:gap-6">
          {sponsors.map((sponsor) => (
            <div
              key={sponsor.name}
              className="
                group
                min-w-[280px]
                md:min-w-0
                rounded-3xl
                border
                border-red-900/20
                bg-white/[0.03]
                p-6
                text-center
                backdrop-blur-md
                transition-all
                duration-300
                hover:-translate-y-2
                hover:border-red-500/40
                hover:bg-white/[0.05]
              "
            >
              <div className="mb-6 flex h-28 items-center justify-center">
                <Image
                  src={sponsor.logo}
                  alt={sponsor.name}
                  width={220}
                  height={120}
                  className="h-auto max-h-24 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              <h3 className="text-xl font-bold text-white">
                {sponsor.name}
              </h3>

              <p className="mt-2 text-sm text-gray-400">
                {sponsor.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
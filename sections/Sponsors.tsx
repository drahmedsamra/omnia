"use client";

import Image from "next/image";

const sponsors = [
  {
    name: "GSM",
    role: "Official Sponsor",
    logo: "/images/sponsors/gsm.webp",
  },
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
      <div className="absolute inset-0 bg-gradient-to-b from-black via-red-950/5 to-black" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-10 text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-red-500">
            OFFICIAL SPONSORS
          </span>

          <h2 className="mt-4 text-4xl font-black text-white md:text-7xl">
            الرعاة الرسميون
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-gray-400 md:text-lg">
            الجهات الداعمة لمسيرة أمنية أحمد سمرة الرياضية.
          </p>

          <div className="mx-auto mt-6 h-px w-40 bg-gradient-to-r from-transparent via-red-500/40 to-transparent" />
        </div>

        {/* Sponsors Grid */}
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
          {sponsors.map((sponsor) => (
            <div
              key={sponsor.name}
              className="
                group
                rounded-3xl
                border
                border-red-900/20
                bg-white/[0.03]
                p-4
                text-center
                backdrop-blur-md
                transition-all
                duration-300
                hover:-translate-y-2
                hover:border-red-500/40
                hover:bg-white/[0.05]
                lg:p-5
              "
            >
              <div className="flex h-20 items-center justify-center lg:h-24">
                <Image
                  src={sponsor.logo}
                  alt={sponsor.name}
                  width={120}
                  height={80}
                  className="
                    h-auto
                    max-h-16
                    w-auto
                    object-contain
                    transition-transform
                    duration-300
                    group-hover:scale-105
                    lg:max-h-20
                  "
                />
              </div>

              {/* Desktop Only */}
              <h3 className="mt-4 hidden text-lg font-bold text-white lg:block">
                {sponsor.name}
              </h3>

              <p className="mt-3 text-xs text-gray-400 lg:text-sm">
                {sponsor.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
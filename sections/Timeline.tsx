"use client";

import { useState } from "react";

const timelineData = [
  {
    year: "2018",
    title: "بداية الرحلة",
    description: "بداية مشوار أمنية مع رياضة التنس.",
  },
  {
    year: "2020",
    title: "بداية المنافسة",
    description: "المشاركة في بطولات تحت ١٠ سنوات.",
  },
  {
    year: "2023",
    title: "مستوى متقدم",
    description: "تطوير الفنيات والمهارات المتقدمة.",
  },
  {
    year: "2024",
    title: "أولى البطولات",
    description: "تحقيق ٨ بطولات جمهورية تحت ١٢ سنة.",
  },
  {
    year: "2025",
    title: "النادي الأهلي",
    description: "الانضمام للنادي الأهلي وتحقيق درع الدوري.",
  },
  {
    year: "2026",
    title: "منتخب مصر",
    description: "تمثيل مصر ضمن منتخب مصر للتنس.",
  },
];

export default function Timeline() {
  const [showAll, setShowAll] = useState(false);

  const visibleItems = showAll
    ? timelineData
    : timelineData.slice(0, 4);

  return (
    <section
      id="timeline"
      className="relative overflow-hidden bg-black py-16"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black via-red-950/5 to-black" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-16 text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-red-500">
            CAREER JOURNEY
          </span>

          <h2 className="mt-4 text-5xl font-black text-white md:text-7xl">
            المسيرة الرياضية
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
            رحلة أمنية أحمد سمرة في عالم التنس منذ البداية وحتى تمثيل منتخب مصر.
          </p>

          <div className="mx-auto mt-8 h-px w-40 bg-gradient-to-r from-transparent via-red-500/40 to-transparent" />
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute right-5 top-0 h-full w-px bg-red-500/30 md:right-1/2 md:translate-x-1/2" />

          <div className="space-y-6">
            {visibleItems.map((item, index) => (
              <div
                key={item.year}
                className={`relative flex w-full ${
                  index % 2 === 0
                    ? "md:justify-start"
                    : "md:justify-end"
                }`}
              >
                {/* Dot */}
                <div className="absolute right-[13px] top-7 z-20 h-4 w-4 rounded-full border-4 border-black bg-red-500 md:right-1/2 md:translate-x-1/2" />

                {/* Card */}
                <div
                  className={`
                    mr-12 w-full
                    rounded-3xl
                    border border-red-900/20
                    bg-white/[0.03]
                    p-4
                    backdrop-blur-md
                    transition-all
                    duration-300
                    hover:border-red-500/40
                    hover:bg-white/[0.05]

                    md:mr-0
                    md:w-[46%]
                  `}
                >
                  <div className="text-3xl font-black text-red-500 md:text-4xl">
                    {item.year}
                  </div>

                  <div className="mt-2 h-px w-16 bg-red-500/50" />

                  <h3 className="mt-3 text-xl font-bold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-gray-400">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Button */}
          <div className="mt-10 text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="rounded-full border border-red-500/30 px-6 py-3 text-sm font-bold text-red-400 transition-all hover:border-red-500 hover:bg-red-500 hover:text-white"
            >
              {showAll ? "عرض أقل" : "عرض باقي المسيرة"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
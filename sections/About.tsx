

"use client";

import { useState } from "react";
import Image from "next/image";

export default function About() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-black py-16"
    >
      {/* Background Glow */}
      <div className="absolute left-1/2 top-20 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-red-900/10 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mb-20 text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.35em] text-red-500">
            ABOUT OMNIA
          </span>

          <h2 className="mt-5 text-5xl font-black leading-[1.25] text-white md:text-7xl md:leading-[1.1]">
            نبذة عن أمنية أحمد سمرة
          </h2>
        </div>

        {/* Content */}
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Image */}
          <div className="relative flex justify-center">
            <div className="absolute h-[400px] w-[400px] rounded-full bg-red-600/20 blur-[130px]" />

            <div className="relative">
              <Image
                src="/images/about/about2.webp"
                alt="أمنية أحمد سمرة"
                width={700}
                height={900}
                priority
                className="
                  h-auto
                  w-full
                  max-w-[500px]
                  object-contain
                  drop-shadow-[0_0_60px_rgba(220,38,38,0.25)]
                "
              />
            </div>
          </div>

          {/* Text */}
          <div className="text-center lg:text-right">
            <h3 className="text-4xl font-black leading-tight text-white md:text-6xl">
              رحلة بطلة مصرية واعدة
            </h3>

            <p className="mt-8 text-lg leading-9 text-gray-400 md:text-xl">
              أمنية سمرة لاعبة منتخب مصر للتنس ولاعبة النادي الأهلي،
              استطاعت خلال سنوات قليلة أن تحقق العديد من البطولات والإنجازات
              في منافسات الفردي والزوجي على مستوى الجمهورية.
            </p>

            {/* Hidden Text */}
            <div
              className={`overflow-hidden transition-all duration-500 ${
                expanded
                  ? "max-h-[500px] opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <p className="mt-8 text-lg leading-9 text-gray-400 md:text-xl">
                تواصل تطوير مستواها الفني من خلال المشاركة المستمرة في البطولات
                المحلية والإقليمية، وتسعى إلى تمثيل مصر في أكبر البطولات الدولية
                وتحقيق المزيد من النجاحات خلال السنوات القادمة.
              </p>

              {/* Quote */}
              <div className="mt-12 border-r-4 border-red-500 pr-6">
                <p className="text-xl font-semibold italic text-white md:text-2xl">
                  "كل بطولة هي خطوة جديدة نحو حلم أكبر."
                </p>

                <p className="mt-3 text-sm text-gray-500">
                  Omnia Ahmed Samra
                </p>
              </div>
            </div>

            {/* Read More Button */}
            <button
              onClick={() => setExpanded(!expanded)}
              className="mt-8 rounded-full border border-red-500/30 px-6 py-3 text-sm font-bold text-red-400 transition-all hover:border-red-500 hover:bg-red-500 hover:text-white"
            >
              {expanded ? "عرض أقل" : "اقرأ المزيد"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
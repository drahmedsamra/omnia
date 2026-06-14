"use client";

const timelineData = [
  {
    year: "2018",
    title: "بداية الرحلة",
    description:
      "بداية رحلة أمنية أحمد سمرة مع رياضة التنس وتطوير المهارات الأساسية.",
  },
  {
    year: "2020",
    title: "بداية المنافسة",
    description:
      "المشاركة في البطولات تحت ١٠ سنوات وتحقيق مراكز أولى.",
  },
  {
    year: "2023",
    title: "مستوى متقدم",
    description:
      "بداية العمل على الفنيات واكتساب المهارات المتقدمة.",
  },
  {
    year: "2024",
    title: "أولى البطولات",
    description:
      "المشاركة في أولى البطولات الرسمية تحت ١٢ سنة وتحقيق ٨ بطولات جمهورية.",
  },
  {
    year: "2025",
    title: "النادي الأهلي",
    description:
      "الانضمام لفريق النادي الأهلي تحت ١٢ سنة والمشاركة في تحقيق درع الدوري العام.",
  },
  {
    year: "2026",
    title: "منتخب مصر",
    description:
      "الانضمام إلى منتخب مصر تحت ١٢ سنة وتمثيل مصر في المنافسات الرسمية.",
  },
];

export default function Timeline() {
  return (
    <section
      id="timeline"
      className="relative overflow-hidden bg-black py-20"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black via-red-950/5 to-black" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-20 text-center">
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
          {/* Center Line */}
          <div className="absolute right-5 top-0 h-full w-px bg-red-500/30 md:right-1/2 md:translate-x-1/2" />

          <div className="space-y-10">
            {timelineData.map((item, index) => (
              <div
                key={item.year}
                className={`relative flex w-full ${
                  index % 2 === 0
                    ? "md:justify-start"
                    : "md:justify-end"
                }`}
              >
                {/* Dot */}
                <div className="absolute right-[13px] top-8 z-20 h-4 w-4 rounded-full border-4 border-black bg-red-500 md:right-1/2 md:translate-x-1/2" />

                {/* Card */}
                <div
                  className={`
                    mr-12 w-full
                    rounded-3xl
                    border border-red-900/20
                    bg-white/[0.03]
                    p-6
                    backdrop-blur-md
                    transition-all
                    duration-300
                    hover:border-red-500/40
                    hover:bg-white/[0.05]

                    md:mr-0
                    md:w-[46%]
                  `}
                >
                  <div className="text-4xl font-black text-red-500">
                    {item.year}
                  </div>

                  <div className="mt-3 h-px w-20 bg-red-500/50" />

                  <h3 className="mt-4 text-2xl font-bold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-3 leading-7 text-gray-400">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
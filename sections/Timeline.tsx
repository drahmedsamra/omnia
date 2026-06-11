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
      "بداية العمل على الفنيات واكتساب المهارات.",
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
      className="relative overflow-hidden bg-black py-32"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-red-950/5 to-black" />

      <div className="relative mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="mb-24 text-center">
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
          <div className="absolute right-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-red-500/40 to-transparent md:block" />

          <div className="space-y-16">
            {timelineData.map((item, index) => (
              <div
                key={item.year}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "md:justify-start" : "md:justify-end"
                }`}
              >
                {/* Dot */}
                <div className="absolute right-1/2 hidden h-5 w-5 translate-x-1/2 rounded-full border-4 border-black bg-red-500 shadow-[0_0_25px_rgba(239,68,68,0.7)] md:block" />

                {/* Card */}
                <div
                  className="
                    w-full
                    md:w-[45%]
                    rounded-3xl
                    border
                    border-red-900/20
                    bg-white/[0.03]
                    p-8
                    backdrop-blur-md
                    transition-all
                    duration-300
                    hover:border-red-500/40
                    hover:-translate-y-1
                  "
                >
                  <div className="text-5xl font-black text-red-500">
                    {item.year}
                  </div>

                  <div className="mt-4 h-px w-20 bg-red-500/50" />

                  <h3 className="mt-6 text-3xl font-bold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-4 leading-8 text-gray-400">
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
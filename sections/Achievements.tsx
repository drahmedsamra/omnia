export default function Achievements() {
  const achievements = [
    {
      icon: "🏆",
      number: "+30",
      title: "بطولة جمهورية",
      description: "في منافسات الفردي والزوجي",
    },
    {
      icon: "🇪🇬",
      number: "U12",
      title: "منتخب مصر",
      description: "تمثيل مصر في البطولات",
    },
    {
      icon: "🔴",
      number: "الأهلي",
      title: "النادي الحالي",
      description: "لاعبة النادي الأهلي",
    },
    {
      icon: "🥇",
      number: "+10",
      title: "مراكز أولى",
      description: "في بطولات محلية وإقليمية",
    },
  ];

  return (
    <section
      id="achievements"
      className="relative overflow-hidden bg-black py-32"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black via-red-950/5 to-black" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Header */}
        <div className="mb-20 text-center">

          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-red-500">
            ACHIEVEMENTS
          </span>

          <h2 className="mt-4 text-5xl font-black text-white md:text-7xl">
            الإنجازات
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
            أبرز الإنجازات والمحطات المهمة في رحلة أمنية أحمد سمرة داخل الملاعب المصرية.
          </p>

          <div className="mx-auto mt-8 h-px w-40 bg-gradient-to-r from-transparent via-red-500/40 to-transparent" />

        </div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

          {achievements.map((item, index) => (
            <div
              key={index}
              className="
                group
                rounded-3xl
                border
                border-red-900/20
                bg-white/[0.03]
                p-8
                text-center
                backdrop-blur-md
                transition-all
                duration-300
                hover:-translate-y-2
                hover:border-red-500/40
                hover:bg-white/[0.05]
              "
            >
              <div className="mb-6 text-5xl transition-transform duration-300 group-hover:scale-110">
                {item.icon}
              </div>

              <div className="text-5xl font-black text-red-500 md:text-6xl">
                {item.number}
              </div>

              <h3 className="mt-5 text-2xl font-bold text-white">
                {item.title}
              </h3>

              <p className="mt-3 leading-7 text-gray-400">
                {item.description}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
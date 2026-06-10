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
    <section className="relative py-32 bg-black overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-red-950/5 to-black" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Header */}
        <div className="text-center mb-20">

          <span className="text-red-500 text-sm font-semibold tracking-[0.25em] uppercase">
            ACHIEVEMENTS
          </span>

          <h2 className="mt-4 text-5xl md:text-7xl font-black text-white">
            الإنجازات
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-gray-400 text-lg leading-8">
            أبرز الإنجازات والمحطات المهمة في رحلة أمنية سمرة داخل الملاعب المصرية.
          </p>

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
              <div className="text-5xl mb-6">
                {item.icon}
              </div>

              <div className="text-5xl md:text-6xl font-black text-red-500">
                {item.number}
              </div>

              <h3 className="mt-5 text-2xl font-bold text-white">
                {item.title}
              </h3>

              <p className="mt-3 text-gray-400 leading-7">
                {item.description}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
import Image from "next/image";

export default function Achievements() {
  const achievements = [
    {
      icon: "🏆",
      number: "+20",
      title: "مراكز أولي",
      description: "في منافسات الجمهوريه الفردي",
    },

    {
      icon: "🥇",
      number: "+20",
      title: "مراكز أولى",
      description: "في منافسات الجمهوريه الزوجي",
    },

    {
      icon: "🇪🇬",
      number: "U12",
      title: "منتخب مصر",
      description: "تمثيل مصر في البطولات",
    },
    {
      icon: "ahly",
      number: "1",
      title: "الدوري المصري",
      description: "مع النادي الأهلي",
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
            أبرز الإنجازات والمحطات المهمة في رحلة أمنية أحمد سمرة داخل الملاعب
            المصرية.
          </p>

          <div className="mx-auto mt-8 h-px w-40 bg-gradient-to-r from-transparent via-red-500/40 to-transparent" />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {achievements.map((item, index) => (
            <div
              key={index}
              className="
                group
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
              <div className="mb-5 flex justify-center transition-transform duration-300 group-hover:scale-110">
                {item.icon === "ahly" ? (
                  <Image
                    src="/images/logos/ahly-logo.webp"
                    alt="النادي الأهلي"
                    width={60}
                    height={60}
                    className="object-contain"
                  />
                ) : (
                  <span className="text-5xl">{item.icon}</span>
                )}
              </div>

              {item.number && (
                <div className="text-4xl font-black text-red-500 md:text-5xl">
                  {item.number}
                </div>
              )}

              <h3
                className={`font-bold text-white ${
                  item.number
                    ? "mt-4 text-xl md:text-2xl"
                    : "text-xl md:text-2xl"
                }`}
              >
                {item.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-400 md:text-base">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
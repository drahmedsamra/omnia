import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-black py-12"
    >
      {/* Background Glow */}
      <div className="absolute left-1/2 top-20 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-red-900/10 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Heading */}
        <div className="mb-20 text-center">

          <span className="text-sm font-semibold uppercase tracking-[0.35em] text-red-500">
            ABOUT OMNIA
          </span>

          <h2 className="mt-5 text-5xl font-black text-white md:text-7xl">
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
              أمنية أحمد سمرة لاعبة منتخب مصر للتنس ولاعبة النادي الأهلي،
              استطاعت خلال سنوات قليلة أن تحقق العديد من البطولات والإنجازات
              في منافسات الفردي والزوجي على مستوى الجمهورية.
            </p>

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

        </div>

      </div>
    </section>
  );
}
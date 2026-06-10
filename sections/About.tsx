import Image from "next/image";

export default function About() {
  return (
    <section className="relative overflow-hidden bg-black py-32">
      {/* Background Glow */}
      <div className="absolute left-1/2 top-20 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-red-900/10 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Heading */}
        <div className="mb-20 text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.35em] text-red-500">
            ABOUT OMNIA
          </span>

          <h2 className="mt-5 text-5xl font-black text-white md:text-7xl">
            نبذة عن أمنية
          </h2>
        </div>

        {/* Content */}
        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* Image */}
          <div className="relative flex justify-center">

            <div className="absolute h-[350px] w-[350px] rounded-full bg-red-600/20 blur-[120px]" />

            <div className="relative overflow-hidden rounded-[32px] border border-red-900/30 bg-zinc-950">
              <Image
                src="/images/about/about.webp"
                alt="أمنية سمرة"
                width={700}
                height={300}
                className="h-auto w-full object-contain"
              />
            </div>
          </div>

          {/* Text */}
          <div className="text-center lg:text-right">

            <h3 className="text-4xl font-black leading-tight text-white md:text-6xl">
              رحلة بطلة مصرية واعدة
            </h3>

            <p className="mt-8 text-lg leading-9 text-gray-400 md:text-xl">
              أمنية سمرة لاعبة تنس مصرية تمثل النادي الأهلي ومنتخب مصر،
              استطاعت خلال سنوات قليلة أن تحقق العديد من الإنجازات
              والبطولات المحلية في منافسات الفردي والزوجي.
            </p>

            <p className="mt-8 text-lg leading-9 text-gray-400 md:text-xl">
              تواصل تطوير مستواها الفني من خلال المشاركة المستمرة في
              البطولات المحلية والإقليمية، وتسعى إلى تمثيل مصر في أكبر
              البطولات الدولية خلال السنوات القادمة.
            </p>

            {/* Quote */}
            <div className="mt-10 border-r-4 border-red-500 pr-6">
              <p className="text-xl font-semibold italic text-white">
                "الحلم الكبير يبدأ بخطوة صغيرة داخل الملعب."
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
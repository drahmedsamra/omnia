import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-black pt-16 text-white"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-red-950/40 via-black to-black" />

      {/* Main Glow */}
      <div className="absolute left-1/2 top-0 h-[800px] w-[800px] -translate-x-1/2 rounded-full bg-red-700/10 blur-[180px]" />

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col-reverse items-center justify-center gap-16 px-6 py-20 lg:flex-row">

        {/* Content */}
        <div className="flex-1 text-center lg:text-right">

          {/* Badge */}
          <div className="mb-8 inline-flex items-center rounded-full border border-red-800/40 bg-red-950/20 px-6 py-3 text-sm font-medium text-red-400 backdrop-blur">
            🎾 منتخب مصر للتنس • النادي الأهلي
          </div>

          {/* Title */}
          <h1 className="text-5xl font-black leading-[0.9] md:text-7xl lg:text-8xl">
            أمنية
            <br />
            أحمد سمرة
          </h1>
          
          {/* Subtitle */}
          <h2 className="mt-6 text-2xl font-medium text-gray-300 md:text-4xl">
            لاعبة منتخب مصر للتنس والنادي الأهلي
          </h2>

          {/* Description */}
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-9 text-gray-400 lg:mx-0">
            لاعبة منتخب مصر للتنس ولاعبة النادي الأهلي، حققت العديد من بطولات
            الجمهورية في منافسات الفردي والزوجي، وتمثل مصر في البطولات المحلية
            والإقليمية وتسعى للوصول إلى أعلى المستويات الدولية في رياضة التنس.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap justify-center gap-4 lg:justify-start">

            <a
              href="#achievements"
              className="rounded-full bg-red-600 px-10 py-4 font-bold text-white transition-all duration-300 hover:scale-105 hover:bg-red-500"
            >
              الإنجازات
            </a>

            <a
              href="#gallery"
              className="rounded-full border border-white/20 px-10 py-4 font-bold text-white transition-all duration-300 hover:border-white hover:bg-white hover:text-black"
            >
              معرض الصور
            </a>

          </div>

          {/* Divider */}
          <div className="mt-14 h-px w-full max-w-xl bg-gradient-to-l from-transparent via-red-900/40 to-transparent" />

          {/* Stats */}
          <div className="mt-8 grid grid-cols-3 gap-4">

            <div className="rounded-3xl border border-red-900/30 bg-white/[0.04] p-6 backdrop-blur-md transition hover:border-red-500/30 hover:bg-white/[0.06]">
              <div className="text-4xl font-black text-red-500">
                +30
              </div>
              <div className="mt-2 text-sm text-gray-400">
                بطولة جمهورية
              </div>
            </div>

            <div className="rounded-3xl border border-red-900/30 bg-white/[0.04] p-6 backdrop-blur-md transition hover:border-red-500/30 hover:bg-white/[0.06]">
              <div className="text-4xl">
                🇪🇬
              </div>
              <div className="mt-2 text-sm text-gray-400">
                منتخب مصر للتنس
              </div>
            </div>

            <div className="rounded-3xl border border-red-900/30 bg-white/[0.04] p-6 backdrop-blur-md transition hover:border-red-500/30 hover:bg-white/[0.06]">
              <div className="text-4xl">
                🔴
              </div>
              <div className="mt-2 text-sm text-gray-400">
                النادي الأهلي
              </div>
            </div>

          </div>

        </div>

        {/* Player Image */}
        <div className="flex flex-1 justify-center">

          <div className="relative">

            <div className="absolute bottom-10 left-1/2 h-[550px] w-[550px] -translate-x-1/2 rounded-full bg-red-600/20 blur-[140px]" />

            <Image
              src="/images/hero/omnia-cutout.webp"
              alt="أمنية أحمد سمرة"
              width={900}
              height={1200}
              priority
              sizes="(max-width:768px) 90vw, 45vw"
              className="relative z-10 max-h-[820px] w-auto object-contain drop-shadow-[0_0_100px_rgba(220,38,38,0.35)]"
            />

          </div>

        </div>

      </div>
    </section>
  );
}
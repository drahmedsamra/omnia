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

      <div className="relative mx-auto flex max-w-7xl flex-col-reverse items-center justify-center gap-8 px-6 py-8 lg:min-h-screen lg:flex-row">

        {/* Content */}
        <div className="flex-1 text-center lg:text-right">

          <div className="mb-8 inline-flex items-center rounded-full border border-red-800/40 bg-red-950/20 px-6 py-3 text-sm font-medium text-red-400 backdrop-blur">
            🎾 منتخب مصر للتنس • النادي الأهلي
          </div>

          <h1 className="text-5xl font-black md:text-7xl lg:text-8xl">
            <span className="block">أمنية أحمد</span>
            <span className="mt-4 block">سمرة</span>
          </h1>

          <div className="mt-6 h-1 w-32 rounded-full bg-red-500" />

          <h2 className="mt-6 text-2xl font-medium text-gray-300 md:text-4xl">
            لاعبة منتخب مصر للتنس والنادي الأهلي
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-9 text-gray-400 lg:mx-0">
            لاعبة منتخب مصر للتنس ولاعبة النادي الأهلي، حققت العديد من بطولات
            الجمهورية في منافسات الفردي والزوجي، وحققت درع الدوري مع النادي
            الأهلي وتمثل مصر في البطولات المحلية والإقليمية وتسعى للوصول إلى
            أعلى المستويات الدولية.
          </p>

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

          <div className="mt-14 h-px w-full max-w-xl bg-gradient-to-l from-transparent via-red-900/40 to-transparent" />

          <div className="mt-10 grid grid-cols-3 gap-5">

            <div className="group rounded-3xl border border-red-900/30 bg-white/[0.04] p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:border-red-500/40 hover:bg-white/[0.06]">
              <div className="flex flex-col items-center justify-center text-center">
                <div className="text-5xl font-black text-red-500">+30</div>
                <div className="mt-4 text-base font-semibold text-white">
                  بطولة جمهورية
                </div>
              </div>
            </div>

            <div className="group rounded-3xl border border-red-900/30 bg-white/[0.04] p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:border-red-500/40 hover:bg-white/[0.06]">
              <div className="flex flex-col items-center justify-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full border border-red-500/20 bg-white/5">
                  <span className="text-3xl">🇪🇬</span>
                </div>

                <div className="mt-4 text-base font-semibold text-white">
                  منتخب مصر للتنس
                </div>
              </div>
            </div>

            <div className="group rounded-3xl border border-red-900/30 bg-white/[0.04] p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:border-red-500/40 hover:bg-white/[0.06]">
              <div className="flex flex-col items-center justify-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full border border-red-500/20 bg-white/5">
                  <Image
                    src="/images/logos/ahly-logo.webp"
                    alt="النادي الأهلي"
                    width={42}
                    height={42}
                    className="h-auto w-auto object-contain"
                  />
                </div>

                <div className="mt-4 text-base font-semibold text-white">
                  النادي الأهلي
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Player Image */}
        <div className="flex flex-[1.3] justify-center">

          <div className="relative">

            <div className="absolute bottom-10 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-red-600/20 blur-[140px] md:h-[650px] md:w-[650px]" />

            <Image
              src="/images/hero/logo5.webp"
              alt="أمنية أحمد سمرة"
              width={1000}
              height={1500}
              priority
              sizes="(max-width:768px) 85vw, 60vw"
              className="relative z-10 h-[520px] w-auto object-contain md:h-[650px] lg:h-[850px] drop-shadow-[0_0_120px_rgba(220,38,38,0.4)]"
            />

          </div>

        </div>

      </div>
    </section>
  );
}
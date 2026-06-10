import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-black text-white">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-red-950/40 via-black to-black" />

      {/* Red Glow */}
      <div className="absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-red-700/10 blur-[180px]" />

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col-reverse items-center justify-center gap-16 px-6 py-20 lg:flex-row">

        {/* Content */}
        <div className="flex-1 text-center lg:text-right">

          <div className="mb-6 inline-flex items-center rounded-full border border-red-900/40 bg-red-950/20 px-5 py-2 text-sm font-medium text-red-400">
            منتخب مصر للتنس • النادي الأهلي
          </div>

          <h1 className="text-6xl font-black leading-none md:text-8xl lg:text-9xl">
            أمنية سمرة
          </h1>

          <h2 className="mt-5 text-2xl font-medium text-gray-300 md:text-4xl">
            لاعبة منتخب مصر والنادي الأهلي
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-9 text-gray-400 lg:mx-0">
            لاعبة منتخب مصر للتنس ولاعبة النادي الأهلي، حققت العديد من
            بطولات الجمهورية في منافسات الفردي والزوجي، وتمثل مصر في
            البطولات المحلية والإقليمية وتسعى للوصول إلى أعلى المستويات
            الدولية في رياضة التنس.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap justify-center gap-4 lg:justify-start">

            <button className="rounded-full bg-red-600 px-10 py-4 font-bold text-white transition-all hover:bg-red-500 hover:scale-105">
              الإنجازات
            </button>

            <button className="rounded-full border border-white/30 px-10 py-4 font-bold text-white transition-all hover:border-white hover:bg-white hover:text-black">
              معرض الصور
            </button>

          </div>

          {/* Stats */}
          <div className="mt-14 grid grid-cols-3 gap-4">

            <div className="rounded-3xl border border-red-900/30 bg-white/5 p-6 backdrop-blur-md">
              <div className="text-4xl font-black text-red-500">
                +30
              </div>
              <div className="mt-2 text-sm text-gray-400">
                بطولة
              </div>
            </div>

            <div className="rounded-3xl border border-red-900/30 bg-white/5 p-6 backdrop-blur-md">
              <div className="text-4xl">
                🇪🇬
              </div>
              <div className="mt-2 text-sm text-gray-400">
                منتخب مصر
              </div>
            </div>

            <div className="rounded-3xl border border-red-900/30 bg-white/5 p-6 backdrop-blur-md">
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

            <div className="absolute bottom-10 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-red-600/20 blur-[120px]" />

            <Image
              src="/images/hero/omnia-cutout.webp"
              alt="أمنية سمرة"
              width={900}
              height={1200}
              priority
              sizes="(max-width:768px) 90vw, 45vw"
              className="relative z-10 max-h-[850px] w-auto object-contain drop-shadow-[0_0_80px_rgba(220,38,38,0.35)]"
            />

          </div>

        </div>

      </div>
    </section>
  );
}
"use client";

import Image from "next/image";

export default function Coach() {
  const stats = [
    "🎾 مدرب معتمد ITF",
    "🇪🇬 التصنيف الرابع رواد مصر",
    "🏆 بطولات رسمية وودية",
    "🎾لاعب تنس بالفريق الأول نادي الزمالك",
    "🎓 ماجستير وباحث دكتوراه",
  ];

  return (
    <section
      id="coach"
      className="relative overflow-hidden bg-black py-32"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black via-red-950/5 to-black" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-20 text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-red-500">
            COACHING
          </span>

          <h2 className="mt-4 text-5xl font-black text-white md:text-7xl">
            التدريب
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
            الإشراف الفني والتدريبي للاعبة أمنية أحمد سمرة.
          </p>

          <div className="mx-auto mt-8 h-px w-40 bg-gradient-to-r from-transparent via-red-500/40 to-transparent" />
        </div>

        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Image */}
          <div className="order-1 flex justify-center lg:order-1">
            <div className="text-center">
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-red-600/20 blur-3xl" />

                <div className="relative h-[320px] w-[320px] overflow-hidden rounded-full border-4 border-red-500/30">
                <Image
  src="/images/coach/ahmed-samra-itf-tennis-coach.webp"
  alt="المهندس أحمد سمرة مدرب تنس معتمد من الاتحاد الدولي للتنس ITF ومدرب اللاعبة أمنية أحمد سمرة"
  title="المهندس أحمد سمرة - مدرب تنس معتمد ITF"
  fill
  className="object-cover"
/>
                </div>
              </div>

              <p className="mt-6 text-sm text-gray-500">
                أحمد سمرة والد ومدرب أمنيه
              </p>

              <p className="mt-1 text-xs tracking-widest text-red-500 uppercase">
                Coach & Player
              </p>
            </div>
          </div>

          {/* Content */}
          <div className="order-2 text-center lg:text-right">
            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-red-500">
               COACH
            </span>

            <h3 className="mt-4 text-4xl font-black text-white md:text-5xl">
              المهندس أحمد سمرة
            </h3>

            <p className="mt-4 text-xl text-gray-300">
              مدرب تنس معتمد من الاتحاد الدولي للتنس (ITF)
            </p>

            {/* Stats */}
            <div className="mt-10 flex flex-wrap justify-center gap-3 lg:justify-start">
              {stats.map((item, index) => (
                <div
                  key={index}
                  className="rounded-full border border-red-900/30 bg-white/[0.03] px-5 py-3 text-sm text-white backdrop-blur-md"
                >
                  {item}
                </div>
              ))}
            </div>

            {/* Bio */}
            <p className="mt-10 text-lg leading-9 text-gray-400">
              لاعب تنس حاليا بفريق الرجال بنادي الزمالك ومدرب تنس معتمد من الاتحاد الدولي للتنس (ITF)، حاصل على
              العديد من الدورات التدريبية المتخصصة في التدريب والإعداد الرياضي.
              وصل إلى المركز الرابع على مستوى الجمهورية في تصنيف الرواد بمصر،
              وحقق العديد من الإنجازات في البطولات الرسمية والودية، كما يمتلك
              خلفية رياضية متنوعة كلاعب كرة قدم سابق.
            </p>

            <p className="mt-6 text-lg leading-9 text-gray-400">
              يحمل درجة الماجستير في هندسة الاتصالات ويواصل أبحاثه العلمية
              كباحث دكتوراه، ويشرف على البرنامج التدريبي للاعبة أمنية أحمد
              سمرة من خلال خطة تدريبية متكاملة تهدف إلى تطوير الأداء الفني
              والبدني والذهني والوصول إلى أعلى مستويات المنافسة المحلية
              والدولية.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
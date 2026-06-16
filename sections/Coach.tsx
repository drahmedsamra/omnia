"use client";

import { useState } from "react";
import Image from "next/image";

export default function Coach() {
  const [expanded, setExpanded] = useState(false);

  const stats = [
    "🎾 مدرب معتمد ITF",
    "🇪🇬 التصنيف الرابع رواد مصر",
    "🏆 بطولات رسمية وودية",
    "🎾 لاعب تنس بالفريق الأول نادي الزمالك",
    "🎓 ماجستير وباحث دكتوراه",
  ];

  return (
    <section
      id="coach"
      className="relative overflow-hidden bg-black py-12"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black via-red-950/5 to-black" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-12 text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-red-500">
            COACHING
          </span>

          <h2 className="mt-4 text-5xl font-black text-white md:text-7xl">
            التدريب
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-gray-400">
            الإشراف الفني والتدريبي للاعبة أمنية أحمد سمرة.
          </p>

          <div className="mx-auto mt-6 h-px w-40 bg-gradient-to-r from-transparent via-red-500/40 to-transparent" />
        </div>

        <div className="grid items-center gap-8 lg:grid-cols-2">
          {/* Image */}
          <div className="order-1 flex justify-center lg:order-1">
            <div className="text-center">
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-red-600/20 blur-3xl" />

                <div className="relative h-[250px] w-[250px] overflow-hidden rounded-full border-4 border-red-500/30 md:h-[320px] md:w-[320px]">
                  <Image
                    src="/images/coach/ahmed-samra-itf-tennis-coach1.webp"
                    alt="المهندس أحمد سمرة مدرب تنس معتمد من الاتحاد الدولي للتنس ITF ومدرب اللاعبة أمنية أحمد سمرة"
                    title="المهندس أحمد سمرة - مدرب تنس معتمد ITF"
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-cover"
                  />
                </div>
              </div>

              <p className="mt-4 text-sm text-gray-500">
                أحمد سمرة والد ومدرب أمنية
              </p>

              <p className="mt-1 text-xs uppercase tracking-widest text-red-500">
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
               أحمد سمرة
            </h3>

            <p className="mt-3 text-lg text-gray-300 md:text-xl">
              مدرب تنس معتمد من الاتحاد الدولي للتنس (ITF)
            </p>

            {/* Stats */}
            <div className="mt-6 flex flex-wrap justify-center gap-2 lg:justify-start">
              {stats.map((item, index) => (
                <div
                  key={index}
                  className="rounded-full border border-red-900/30 bg-white/[0.03] px-4 py-2 text-xs text-white backdrop-blur-md md:text-sm"
                >
                  {item}
                </div>
              ))}
            </div>

            {/* First Paragraph */}
            <p className="mt-8 text-lg leading-8 text-gray-400">
              لاعب تنس بالفريق الأول بنادي الزمالك ومدرب تنس معتمد من الاتحاد
              الدولي للتنس (ITF)، حاصل على العديد من الدورات التدريبية
              المتخصصة، وتصنيفه الحالي ضمن ال٥ الأوائل على مستوى الجمهورية في تصنيف الرواد مرحلة ٣٥ سنه
              بمصر.
            </p>

            {/* Expanded Content */}
            <div
              className={`overflow-hidden transition-all duration-500 ${
                expanded
                  ? "max-h-[500px] opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <p className="mt-6 text-lg leading-8 text-gray-400">
                حقق العديد من الإنجازات في البطولات الرسمية وحصل علي المركز الأول ٣ مرات في بطولة نادي وادي دجله السنويه ٢٠٢٣ و٢٠٢٤ و٢٠٢٥ والمركز الأول في بطولة الزمالك ٢٠٢٥ والمركز الأول في بطولة الأهلي ٢٠٢٦ ، كما يمتلك
                خلفية رياضية متنوعة كلاعب تنس ومن قبلها لاعب كرة قدم سابق. يحمل درجة الماجستير في
                هندسة الاتصالات ويواصل أبحاثه العلمية كباحث دكتوراه، ويشرف على
                البرنامج التدريبي للاعبة أمنية أحمد سمرة من خلال خطة تدريبية
                متكاملة تهدف إلى تطوير الأداء الفني والبدني والذهني والوصول إلى
                أعلى مستويات المنافسة المحلية والدولية.
              </p>
            </div>

            {/* Read More */}
            <button
              onClick={() => setExpanded(!expanded)}
              className="mt-6 rounded-full border border-red-500/30 px-6 py-3 text-sm font-bold text-red-400 transition-all hover:border-red-500 hover:bg-red-500 hover:text-white"
            >
              {expanded ? "عرض أقل" : "اقرأ المزيد"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
"use client";

const tennisCoaches = [
  "أحمد سعيد",
  "محمد جمال",
  "سامح الحوت",
  "أنس أسامة",
  "محمد صلاح",
  "محمد أبو الفتوح",
  "سيد أبو تريكه",
  "سيد بركات",
  "زياد سمره ",
];

const fitnessCoaches = [
  "أسامة حمدي",
  "حماده حمدان",
];

export default function Contributors() {
  return (
    <section
      id="contributors"
      className="relative overflow-hidden bg-black py-16"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-red-950/5 to-black" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-16 text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-red-500">
            CONTRIBUTORS
          </span>

          <h2 className="mt-4 text-5xl font-black text-white md:text-7xl">
            المساهمون في النجاح
          </h2>

          <p className="mx-auto mt-6 max-w-4xl text-lg leading-8 text-gray-400">
            لكل إنجاز قصة، ووراء كل خطوة ناجحة أشخاص آمنوا بالموهبة وقدموا
            الدعم والتوجيه والمساندة في مختلف مراحل الرحلة الرياضية.
          </p>

          <div className="mx-auto mt-8 h-px w-40 bg-gradient-to-r from-transparent via-red-500/40 to-transparent" />
        </div>

       {/* Main Contributors */}
<div className="grid gap-6 md:grid-cols-2">

{/* Mother */}
<div className="rounded-3xl border border-red-900/20 bg-white/[0.03] p-8 backdrop-blur-md">
  <div className="mb-4 text-5xl">❤️</div>

  <h3 className="text-3xl font-black text-white">
    والدة أمنية
  </h3>

  <p className="mt-2 text-red-500">
    الداعم الأكبر في الرحلة
  </p>

  <p className="mt-6 leading-8 text-gray-400">
    كانت ولا تزال الداعم الأكبر في رحلة أمنية الرياضية، من خلال
    الاهتمام اليومي بالتفاصيل، والحرص على التغذية السليمة والراحة
    والانضباط، وتوفير البيئة المناسبة التي تساعد على الاستمرار
    والتطور وتحقيق النجاحات داخل وخارج الملعب.
  </p>
</div>

{/* Ziad */}
<div className="rounded-3xl border border-red-900/20 bg-white/[0.03] p-8 backdrop-blur-md">
  <div className="mb-4 text-5xl">👨‍👧</div>

  <h3 className="text-3xl font-black text-white">
    زياد سمرة
  </h3>

  <p className="mt-2 text-red-500">
    الأخ والداعم الدائم
  </p>

  <p className="mt-6 leading-8 text-gray-400">
    كان له دور كبير في مسيرة أمنية من خلال المتابعة اليومية والمساندة
    المستمرة داخل وخارج الملعب. يشارك في تنظيم المباريات التدريبية
    والاهتمام بالتفاصيل الرياضية المختلفة، ويتحمل مسؤولية كبيرة في دعمها
    وتطوير مستواها ولعب ماتشات مستمره معها.
  </p>
</div>

{/* Jimmy */}
<div className="rounded-3xl border border-red-900/20 bg-white/[0.03] p-8 backdrop-blur-md">
  <div className="mb-4 text-5xl">🎾</div>

  <h3 className="text-3xl font-black text-white">
    محمد جمال 
  </h3>

  <p className="mt-2 text-red-500">
    مدرب التأسيس والتكنيك
  </p>

  <p className="mt-6 leading-8 text-gray-400">
    يُعد الكابتن محمد جمال أحد أهم الأسماء في بداية رحلة أمنية
    الرياضية، حيث تولى مرحلة التأسيس الأولى ووضع الأساس الفني والمهاري
    للاعبة منذ سنواتها الأولى. كما كان مسؤولًا عن تطوير التكنيك الصحيح
    وبناء المهارات الأساسية التي ساهمت في تكوين شخصيتها داخل الملعب
    وإعدادها للمراحل المتقدمة والمنافسات الرسمية .
  </p>
</div>

{/* Ahmed Tarek */}
<div className="rounded-3xl border border-red-900/20 bg-white/[0.03] p-8 backdrop-blur-md">
  <div className="mb-4 text-5xl">🏆</div>

  <h3 className="text-3xl font-black text-white">
    الكابتن أحمد طارق
  </h3>

  <p className="mt-2 text-red-500">
    مدير نشاط التنس بالنادي الأهلي
  </p>

  <p className="mt-6 leading-8 text-gray-400">
    كان من أوائل من آمنوا بموهبة أمنية ورأوا إمكاناتها الرياضية،
    وكان له دور مهم في انضمامها إلى منظومة النادي الأهلي. كما قدم
    لها الدعم والتحفيز المستمر وساهم في تطوير مسيرتها داخل النادي،
    وكان دائمًا مصدر ثقة وتشجيع خلال مراحل مهمة من رحلتها الرياضية.
  </p>
</div>

</div>

        {/* Tennis Coaches */}
        <div className="mt-16">
          <h3 className="text-center text-3xl font-black text-white">
            مدربو التنس
          </h3>

          <p className="mx-auto mt-4 max-w-3xl text-center text-gray-400">
            تتقدم أمنية بخالص الشكر والتقدير لجميع المدربين الذين ساهموا في
            تطوير مستواها الفني والمهاري خلال مراحل مختلفة من رحلتها الرياضية.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
            {tennisCoaches.map((coach) => (
              <div
                key={coach}
                className="rounded-2xl border border-red-900/20 bg-white/[0.03] p-4 text-center backdrop-blur-md"
              >
                <div className="text-lg font-bold text-white">
                  {coach}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Fitness Coaches */}
        <div className="mt-16">
          <h3 className="text-center text-3xl font-black text-white">
            مدربو الإعداد البدني
          </h3>

          <p className="mx-auto mt-4 max-w-3xl text-center text-gray-400">
            ساهموا في تطوير الجوانب البدنية واللياقية اللازمة للمنافسة الرياضية
            على أعلى مستوى.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
            {fitnessCoaches.map((coach) => (
              <div
                key={coach}
                className="rounded-2xl border border-red-900/20 bg-white/[0.03] p-5 text-center backdrop-blur-md"
              >
                <div className="text-lg font-bold text-white">
                  {coach}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Closing Message */}
        <div className="mt-16 rounded-3xl border border-red-900/20 bg-gradient-to-r from-red-950/20 via-black to-red-950/20 p-8 text-center">
          <p className="text-xl leading-9 text-gray-300">
            تتقدم أمنية أحمد سمرة بخالص الشكر والامتنان لكل من دعمها وشجعها
            وساندها طوال رحلتها الرياضية، فكل كلمة دعم وكل جهد صادق كان له
            أثر في الوصول إلى ما تحقق حتى اليوم.
          </p>
        </div>
      </div>
    </section>
  );
}
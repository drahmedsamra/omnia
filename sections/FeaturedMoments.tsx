"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const slides = [
  {
    image: "/images/gallery/omnia-samra-egypt-tennis-team17.webp",
    title: "البطولة العربية",
    description: "أمنية أحمد سمرة مع منتخب مصر في البطولة العربية للمنتخبات.",
    alt: "أمنية أحمد سمرة مع منتخب مصر في البطولة العربية للمنتخبات",
    imageTitle: "أمنية أحمد سمرة - البطولة العربية للمنتخبات",
  },
  {
    image: "/images/gallery/omnia-ahmed-samra-tennis.webp",
    title: "بطولات الجمهورية",
    description: "لقطات من البطولات المحلية.",
    alt: "أمنية أحمد سمرة خلال منافسات بطولة الجمهورية للتنس",
    imageTitle: "أمنية أحمد سمرة - بطولة الجمهورية للتنس",
  },
  {
    image: "/images/gallery/omnia-samra-egypt-tennis-team4.webp",
    title: "منتخب مصر",
    description: "لقطات من منافسات البطولة العربية.",
    alt: "أمنية أحمد سمرة خلال البطولة العربية للتنس",
    imageTitle: "أمنية أحمد سمرة - منتخب مصر",
  },
  {
    image: "/images/gallery/omnia-ahmed-samra-tennis-ahly-champion.webp",
    title: "كأس البطولة",
    description: "إحدى لحظات التتويج.",
    alt: "أمنية أحمد سمرة أثناء التتويج بإحدى بطولات التنس",
    imageTitle: "أمنية أحمد سمرة - كأس البطولة",
  },

  {
    image: "/images/gallery/omnia-samra-egypt-tennis-team21.webp",
    title: "روح الفريق",
    description: "ذكريات مع زميلات منتخب مصر.",
    alt: "أمنية أحمد سمرة مع زميلاتها في منتخب مصر",
    imageTitle: "أمنية أحمد سمرة - روح الفريق",
  },
  {
    image: "/images/gallery/omnia-ahmed-samra-tennis-ahly-team.webp.webp",
    title: "فريق الأهلي",
    description: "مع فريق النادي الأهلي.",
    alt: "أمنية أحمد سمرة مع فريق النادي الأهلي للتنس",
    imageTitle: "أمنية أحمد سمرة - النادي الأهلي",
  },


  {
    image: "/images/gallery/omnia-samra-egypt-tennis-team8.webp",
    title: "البطولة العربية",
    description: "لحظات مميزة داخل البطولة.",
    alt: "أمنية أحمد سمرة في البطولة العربية للمنتخبات",
    imageTitle: "أمنية أحمد سمرة - البطولة العربية",
  },
  {
    image: "/images/gallery/omnia-samra-tennis-friends.webp",
    title: "منتخب مصر",
    description: "رحلة المنافسة والإنجاز.",
    alt: "أمنية أحمد سمرة لاعبة منتخب مصر للتنس",
    imageTitle: "أمنية أحمد سمرة - منتخب مصر",
  },


  {
    image: "/images/gallery/omnia-samra-egypt-tennis-team13.webp",
    title: "منتخب مصر",
    description: "مشاركات قوية مع المنتخب الوطني.",
    alt: "أمنية أحمد سمرة تمثل منتخب مصر",
    imageTitle: "أمنية أحمد سمرة - منتخب مصر",
  },
  {
    image: "/images/gallery/omnia-samra-with-tennis-coach.webp",
    title: "بطولات النادي",
    description: "مشاركات قوية داخل النادي.",
    alt: "أمنية أحمد سمرة خلال إحدى بطولات النادي",
    imageTitle: "أمنية أحمد سمرة - بطولات النادي",
  },


  {
    image: "/images/gallery/omnia-samra-egypt-tennis-team2.webp",
    title: "لحظات البطولة",
    description: "أجواء المنافسة العربية.",
    alt: "أمنية أحمد سمرة خلال البطولة العربية",
    imageTitle: "أمنية أحمد سمرة - البطولة",
  },
  {
    image: "/images/gallery/omnia-samra-ahly-team-competitions.webp",
    title: "اللاعبات",
    description: "ذكريات جميلة مع الفريق.",
    alt: "أمنية أحمد سمرة مع زميلاتها في فريق التنس",
    imageTitle: "أمنية أحمد سمرة - فريق اللاعبات",
  },


  {
    image: "/images/gallery/omnia-samra-egypt-tennis-team24.webp",
    title: "إنجاز جديد",
    description: "من أجمل ذكريات البطولة العربية.",
    alt: "أمنية أحمد سمرة في البطولة العربية للتنس",
    imageTitle: "أمنية أحمد سمرة - إنجاز جديد",
  },
  {
    image: "/images/gallery/omnia-samra-tennis-1st-egypt.webp",
    title: "المركز الأول",
    description: "لحظة فخر وإنجاز.",
    alt: "أمنية أحمد سمرة بعد تحقيق المركز الأول في بطولة تنس",
    imageTitle: "أمنية أحمد سمرة - المركز الأول",
  },


  {
    image: "/images/gallery/omnia-samra-egypt-tennis-team10.webp",
    title: "الفريق المصري",
    description: "رحلة مليئة بالتحديات والإنجازات.",
    alt: "أمنية أحمد سمرة مع لاعبات منتخب مصر",
    imageTitle: "أمنية أحمد سمرة - الفريق المصري",
  },
  {
    image: "/images/gallery/omnia-samra-double-tennis-1st.webp",
    title: "بطولات الزوجي",
    description: "منافسات قوية ومميزة.",
    alt: "أمنية أحمد سمرة خلال منافسات الزوجي في بطولة تنس",
    imageTitle: "أمنية أحمد سمرة - بطولات الزوجي",
  },


  {
    image: "/images/gallery/omnia-samra-egypt-tennis-team6.webp",
    title: "بطولة المنتخبات",
    description: "مشاركة عربية مميزة.",
    alt: "أمنية أحمد سمرة في بطولة المنتخبات العربية",
    imageTitle: "أمنية أحمد سمرة - بطولة المنتخبات",
  },
  {
    image: "/images/gallery/omnia-ahmed-samra-after-winning-tennis-double-tournament.webp",
    title: "التتويج",
    description: "من أجمل لحظات الفوز.",
    alt: "أمنية أحمد سمرة أثناء مراسم التتويج",
    imageTitle: "أمنية أحمد سمرة - التتويج",
  },

  {
    image: "/images/gallery/omnia-samra-egypt-tennis-team19.webp",
    title: "منتخب مصر",
    description: "تمثيل مصر بكل فخر.",
    alt: "أمنية أحمد سمرة تمثل مصر في البطولة العربية",
    imageTitle: "أمنية أحمد سمرة - تمثيل مصر",
  },
  {
    image: "/images/gallery/omnia-samra-with-tennis-partner-retal-saber.webp",
    title: "رحلة التنس",
    description: "ذكريات من الملاعب.",
    alt: "أمنية أحمد سمرة وصديقتها ريتال صابر لاعبة الأهلي",
    imageTitle: "أمنية أحمد سمرة - رحلة التنس",
  },


  {
    image: "/images/gallery/omnia-samra-egypt-tennis-team1.webp",
    title: "رحلة النجاح",
    description: "لقطات لا تُنسى مع المنتخب.",
    alt: "أمنية أحمد سمرة مع منتخب مصر للتنس",
    imageTitle: "أمنية أحمد سمرة - رحلة النجاح",
  },
  {
    image: "/images/gallery/omnia-samra-with-lyla-abdelrazek.webp",
    title: "منافسات قوية",
    description: "بطولات الجمهورية للتنس.",
    alt: "أمنية أحمد سمرة مع صديقتها ليلي عبد الرازق لاعبة النادي الأهلي للتنس",
    imageTitle: "أمنية أحمد سمرة - منافسات قوية",
  },


  {
    image: "/images/gallery/omnia-samra-egypt-tennis-team15.webp",
    title: "أجواء البطولة",
    description: "من قلب المنافسات العربية.",
    alt: "أمنية أحمد سمرة في منافسات البطولة العربية",
    imageTitle: "أمنية أحمد سمرة - أجواء البطولة",
  },
  {
    image: "/images/gallery/omnia-samra-1st-tennis-champion-egypt.webp",
    title: "بطلة مصر",
    description: "لقطة من إحدى البطولات.",
    alt: "أمنية أحمد سمرة بطلة مصر في إحدى بطولات التنس",
    imageTitle: "أمنية أحمد سمرة - بطلة مصر",
  },

  
  {
    image: "/images/gallery/omnia-samra-egypt-tennis-team22.webp",
    title: "منتخب مصر",
    description: "لقطات مميزة مع زميلات المنتخب.",
    alt: "أمنية أحمد سمرة مع منتخب مصر",
    imageTitle: "أمنية أحمد سمرة - منتخب مصر",
  },
  {
    image: "/images/gallery/omnia-samra-egypt-tennis-team5.webp",
    title: "ذكريات رائعة",
    description: "لحظات ستظل خالدة.",
    alt: "أمنية أحمد سمرة خلال البطولة العربية",
    imageTitle: "أمنية أحمد سمرة - ذكريات رائعة",
  },
  {
    image: "/images/gallery/omnia-samra-egypt-tennis-team12.webp",
    title: "بطولة عربية",
    description: "منافسات قوية وتمثيل مشرف.",
    alt: "أمنية أحمد سمرة في البطولة العربية للمنتخبات",
    imageTitle: "أمنية أحمد سمرة - بطولة عربية",
  },
  {
    image: "/images/gallery/omnia-samra-egypt-tennis-team9.webp",
    title: "منتخب مصر",
    description: "رحلة مليئة بالفخر.",
    alt: "أمنية أحمد سمرة لاعبة منتخب مصر",
    imageTitle: "أمنية أحمد سمرة - لاعبة منتخب مصر",
  },
  {
    image: "/images/gallery/omnia-samra-egypt-tennis-team20.webp",
    title: "لحظات مميزة",
    description: "أثناء البطولة العربية.",
    alt: "أمنية أحمد سمرة في البطولة العربية للتنس",
    imageTitle: "أمنية أحمد سمرة - لحظات مميزة",
  },
  {
    image: "/images/gallery/omnia-samra-egypt-tennis-team7.webp",
    title: "البطولة العربية",
    description: "منافسات على أعلى مستوى.",
    alt: "أمنية أحمد سمرة في البطولة العربية",
    imageTitle: "أمنية أحمد سمرة - البطولة العربية",
  },
  {
    image: "/images/gallery/omnia-samra-egypt-tennis-team16.webp",
    title: "فخر مصر",
    description: "تمثيل منتخب مصر في البطولة.",
    alt: "أمنية أحمد سمرة تمثل منتخب مصر",
    imageTitle: "أمنية أحمد سمرة - فخر مصر",
  },
  {
    image: "/images/gallery/omnia-samra-egypt-tennis-team23.webp",
    title: "رحلة المنتخب",
    description: "ذكريات جميلة مع الفريق.",
    alt: "أمنية أحمد سمرة مع منتخب مصر للتنس",
    imageTitle: "أمنية أحمد سمرة - رحلة المنتخب",
  },
  {
    image: "/images/gallery/omnia-samra-egypt-tennis-team3.webp",
    title: "منافسات قوية",
    description: "أجواء البطولة العربية.",
    alt: "أمنية أحمد سمرة خلال المنافسات",
    imageTitle: "أمنية أحمد سمرة - منافسات قوية",
  },
  {
    image: "/images/gallery/omnia-samra-egypt-tennis-team14.webp",
    title: "منتخب مصر",
    description: "لقطات من رحلة البطولة.",
    alt: "أمنية أحمد سمرة مع المنتخب الوطني",
    imageTitle: "أمنية أحمد سمرة - المنتخب الوطني",
  },
  {
    image: "/images/gallery/omnia-samra-egypt-tennis-team11.webp",
    title: "إنجاز المنتخب",
    description: "أحد أجمل أيام البطولة العربية.",
    alt: "أمنية أحمد سمرة في البطولة العربية للمنتخبات",
    imageTitle: "أمنية أحمد سمرة - إنجاز المنتخب",
  },
  {
    image: "/images/gallery/omnia-samra-egypt-tennis-team18.webp",
    title: "ذكريات البطولة",
    description: "رحلة لا تُنسى مع منتخب مصر.",
    alt: "أمنية أحمد سمرة مع منتخب مصر في البطولة العربية",
    imageTitle: "أمنية أحمد سمرة - ذكريات البطولة",
  },
];

export default function FeaturedMoments() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="gallery"
      className="relative overflow-hidden bg-black py-16"
    >
      <div className="absolute left-1/2 top-0 h-[400px] w-[400px] -translate-x-1/2 bg-red-900/10 blur-[150px]" />

      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-16 text-center">

          <span className="text-sm uppercase tracking-[0.4em] text-red-500">
            FEATURED MOMENTS
          </span>

          <h2 className="mt-4 text-5xl font-black text-white">
            أبرز اللحظات
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-gray-400">
            مجموعة من أهم البطولات والإنجازات في مسيرة أمنية أحمد سمرة.
          </p>

        </div>

        <div className="relative mx-auto max-w-6xl">

          <div className="relative h-[420px] overflow-hidden rounded-3xl border border-red-900/30 bg-zinc-950 md:h-[650px]">



<Image
src={slides[currentSlide].image}
alt={slides[currentSlide].alt}
title={slides[currentSlide].imageTitle}
fill
priority={currentSlide === 0}
quality={80}
sizes="(max-width:768px) 100vw, 1200px"
className="object-contain"
/>


            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">

              <h3 className="text-2xl font-black text-white md:text-5xl">
                {slides[currentSlide].title}
              </h3>

              <p className="mt-3 text-sm text-gray-300 md:text-lg">
                {slides[currentSlide].description}
              </p>

            </div>

            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 z-20 -translate-y-1/2 text-5xl text-white/60 transition hover:text-white"
            >
              ❮
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 z-20 -translate-y-1/2 text-5xl text-white/60 transition hover:text-white"
            >
              ❯
            </button>

          </div>

          <div className="mt-8 flex justify-center gap-3">

            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                aria-label={`slide-${index + 1}`}
                className={`h-3 rounded-full transition ${
                  currentSlide === index
                    ? "w-8 bg-red-500"
                    : "w-3 bg-zinc-700"
                }`}
              />
            ))}

          </div>

          <div className="mt-10 hidden grid-cols-6 gap-4 md:grid">

            {slides.map((slide, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`relative h-24 overflow-hidden rounded-xl border transition ${
                  currentSlide === index
                    ? "scale-105 border-red-500"
                    : "border-zinc-800"
                }`}
              >
                <Image
  src={slide.image}
  alt={slide.alt}
  title={slide.imageTitle}
  fill
  loading="lazy"
  quality={60}
  sizes="120px"
  className="object-cover"
/>
              </button>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}
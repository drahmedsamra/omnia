"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const slides = [
  {
    image: "/images/gallery/gallery-1.webp",
    title: "بطولات الجمهورية",
    description: "لقطات من البطولات المحلية.",
  },
  {
    image: "/images/gallery/gallery-2.webp",
    title: "كأس البطولة",
    description: "إحدى لحظات التتويج.",
  },
  {
    image: "/images/gallery/gallery-3.webp",
    title: "فريق الأهلي",
    description: "مع فريق النادي الأهلي.",
  },
  {
    image: "/images/gallery/gallery-4.webp",
    title: "منتخب مصر",
    description: "رحلة المنافسة والإنجاز.",
  },
  {
    image: "/images/gallery/gallery-5.webp",
    title: "بطولات النادي",
    description: "مشاركات قوية داخل النادي.",
  },
  {
    image: "/images/gallery/gallery-6.webp",
    title: "اللاعبات",
    description: "ذكريات جميلة مع الفريق.",
  },
  {
    image: "/images/gallery/gallery-7.webp",
    title: "المركز الأول",
    description: "لحظة فخر وإنجاز.",
  },
  {
    image: "/images/gallery/gallery-8.webp",
    title: "بطولات الزوجي",
    description: "منافسات قوية ومميزة.",
  },
  {
    image: "/images/gallery/gallery-9.webp",
    title: "التتويج",
    description: "من أجمل لحظات الفوز.",
  },
  {
    image: "/images/gallery/gallery-10.webp",
    title: "رحلة التنس",
    description: "ذكريات من الملاعب.",
  },
  {
    image: "/images/gallery/gallery-11.webp",
    title: "منافسات قوية",
    description: "بطولات الجمهورية للتنس.",
  },
  {
    image: "/images/gallery/gallery-12.webp",
    title: "إنجاز جديد",
    description: "استمرار النجاح والتطور.",
  },
  {
    image: "/images/gallery/gallery-13.webp",
    title: "بطلة مصر",
    description: "لقطة من إحدى البطولات.",
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
      className="relative overflow-hidden bg-black py-32"
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
              alt={slides[currentSlide].title}
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
                  alt={slide.title}
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
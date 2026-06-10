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
    title: "منتخب الأهلي",
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

export default function GallerySection() {
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
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative py-32 bg-black overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[400px] w-[400px] bg-red-900/10 blur-[150px]" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <span className="text-red-500 uppercase tracking-[0.4em] text-sm">
            Featured Moments
          </span>

          <h2 className="mt-4 text-5xl font-black text-white">
            أبرز اللحظات
          </h2>

          <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
            أهم البطولات والإنجازات في مسيرة أمنية.
          </p>
        </div>

        {/* Slider */}
        <div className="relative max-w-6xl mx-auto">
          <div className="relative h-[420px] md:h-[650px] bg-zinc-950 rounded-3xl overflow-hidden border border-red-900/30">

            <Image
              src={slides[currentSlide].image}
              alt={slides[currentSlide].title}
              fill
              priority
              className="object-contain"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
              <h3 className="text-2xl md:text-5xl font-black text-white">
                {slides[currentSlide].title}
              </h3>

              <p className="mt-3 text-gray-300 text-sm md:text-lg">
                {slides[currentSlide].description}
              </p>
            </div>

            {/* Left */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 text-5xl text-white/60 hover:text-white transition"
            >
              ❮
            </button>

            {/* Right */}
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 text-5xl text-white/60 hover:text-white transition"
            >
              ❯
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-3 mt-8">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-3 w-3 rounded-full transition ${
                  currentSlide === index
                    ? "bg-red-500 w-8"
                    : "bg-zinc-700"
                }`}
              />
            ))}
          </div>

          {/* Thumbnails */}
          <div className="hidden md:grid grid-cols-6 gap-4 mt-10">
            {slides.map((slide, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`relative h-24 rounded-xl overflow-hidden border transition ${
                  currentSlide === index
                    ? "border-red-500 scale-105"
                    : "border-zinc-800"
                }`}
              >
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
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
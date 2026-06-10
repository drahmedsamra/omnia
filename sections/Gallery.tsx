import Image from "next/image";

const featuredImages = [
  "/images/gallery/gallery-1.jpg",
  "/images/gallery/gallery-2.jpg",
  "/images/gallery/gallery-3.jpg",
];

const galleryImages = [
  "/images/gallery/gallery-4.jpg",
  "/images/gallery/gallery-5.jpg",
  "/images/gallery/gallery-6.jpg",
  "/images/gallery/gallery-7.jpg",
  "/images/gallery/gallery-8.jpg",
];

export default function Gallery() {
  return (
    <section className="bg-black py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">

        {/* Header */}
        <div className="mb-16 text-center">
          <p className="text-sm tracking-[0.35em] text-red-500">
            PHOTO GALLERY
          </p>

          <h2 className="mt-4 text-4xl font-black md:text-6xl">
            لحظات من رحلة أمنية
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-gray-400">
            أبرز البطولات والإنجازات والمشاركات مع النادي الأهلي ومنتخب مصر.
          </p>
        </div>

        {/* Featured Images */}
        <div className="mb-20 grid gap-6 lg:grid-cols-3">

          {featuredImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl border border-red-900/30"
            >
              <Image
                src={image}
                alt=""
                width={1000}
                height={1200}
                className="h-[520px] w-full object-cover transition duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

              <div className="absolute bottom-0 right-0 p-6">
                <div className="text-sm tracking-widest text-red-500">
                  HIGHLIGHT
                </div>

                <h3 className="mt-2 text-2xl font-bold">
                  {index === 0 && "بطولات الجمهورية"}
                  {index === 1 && "منتخب مصر"}
                  {index === 2 && "النادي الأهلي"}
                </h3>
              </div>
            </div>
          ))}

        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">

          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-2xl"
            >
              <Image
                src={image}
                alt=""
                width={800}
                height={1000}
                className="aspect-[3/4] w-full object-cover transition duration-500 group-hover:scale-105"
              />
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
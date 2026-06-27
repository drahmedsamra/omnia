import Link from "next/link";

type Props = {
  news: {
    title: string;
    excerpt: string;
    slug: string;
  };
};

export default function FeaturedNews({ news }: Props) {
  return (
    <section className="relative mb-14 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-zinc-900 via-black to-black p-12">

      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(220,38,38,.25),transparent_40%)]" />

      <div className="relative z-10 max-w-3xl">

        <span className="inline-flex rounded-full bg-red-600/20 px-4 py-2 text-sm font-semibold text-red-400">
          أحدث الأخبار
        </span>

        <h1 className="mt-6 text-5xl font-black leading-tight text-white">
          {news.title}
        </h1>

        <p className="mt-6 text-lg leading-8 text-gray-300">
          {news.excerpt}
        </p>

        <Link
          href={`/news/${news.slug}`}
          className="mt-8 inline-flex rounded-xl bg-red-600 px-6 py-3 font-bold text-white transition hover:bg-red-500"
        >
          اقرأ الخبر
        </Link>

      </div>
    </section>
  );
}
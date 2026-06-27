import Image from "next/image";
import { urlFor } from "@/lib/sanity/image";
import Link from "next/link";

type Props = {
  news: any;
};

export default function NewsCard({ news }: Props) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] transition-all duration-300 hover:-translate-y-2 hover:border-red-500/60 hover:bg-white/[0.05]">

      {/* Image */}
      <div className="relative aspect-[16/10] overflow-hidden">

  <Image
    src={urlFor(news.featuredImage).width(900).height(560).url()}
    alt={news.title}
    fill
    className="object-cover transition duration-500 group-hover:scale-105"
  />

</div>

      {/* Content */}
      <div className="p-6">

        <p className="mb-3 text-sm text-gray-500">
          {new Date(news.publishedDate).toLocaleDateString("ar-EG")}
        </p>

        <Link href={`/news/${news.slug}`}>
          <h2 className="line-clamp-2 text-2xl font-bold text-white transition group-hover:text-red-500">
            {news.title}
          </h2>
        </Link>

        <p className="mt-4 line-clamp-3 text-gray-400">
          {news.excerpt}
        </p>

        <Link
          href={`/news/${news.slug}`}
          className="mt-6 inline-flex items-center gap-2 font-semibold text-red-500 transition hover:text-red-400"
        >
          اقرأ الخبر
          <span>←</span>
        </Link>

      </div>
    </article>
  );
}
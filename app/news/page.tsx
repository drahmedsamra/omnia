import { client } from "@/lib/sanity/client";
import { newsQuery } from "@/lib/sanity/queries";

import FeaturedNews from "@/components/news/FeaturedNews";
import NewsGrid from "@/components/news/NewsGrid";

export default async function NewsPage() {
  const news = await client.fetch(newsQuery);

  if (!news?.length) {
    return (
      <main className="mx-auto max-w-7xl px-6 py-24 text-center">
        <h1 className="text-4xl font-bold text-white">
          لا توجد أخبار حالياً
        </h1>
      </main>
    );
  }

  const featured = news[0];
  const rest = news.slice(1);

  return (
    <main className="mx-auto max-w-7xl px-6 py-24">

      <FeaturedNews news={featured} />

      {rest.length > 0 && (
        <NewsGrid news={rest} />
      )}

    </main>
  );
}
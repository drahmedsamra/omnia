import { client } from "@/lib/sanity/client";
import { newsQuery } from "@/lib/sanity/queries";

export default async function NewsPage() {
  const news = await client.fetch(newsQuery);

  return (
    <main className="max-w-5xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">
        News
      </h1>

      <div className="space-y-6">
        {news.map((item: any) => (
          <div
            key={item._id}
            className="border rounded-xl p-6"
          >
            <h2 className="text-2xl font-bold">
              {item.title}
            </h2>

            <p>{item.excerpt}</p>

            <p>{item.publishedDate}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
import { client } from "@/lib/sanity/client";
import { newsBySlugQuery } from "@/lib/sanity/queries";
import imageUrlBuilder from "@sanity/image-url";
import { PortableText } from "@portabletext/react";
import { notFound } from "next/navigation";

const builder = imageUrlBuilder(client);

function urlFor(source: any) {
  return builder.image(source);
}

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function NewsDetailsPage({ params }: Props) {
  const { slug } = await params;

  const article = await client.fetch(newsBySlugQuery, {
    slug,
  });

  if (!article) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-4xl px-6 py-24">

      <h1 className="mb-4 text-5xl font-black">
        {article.title}
      </h1>

      <p className="mb-8 text-gray-400">
        {article.publishedDate}
      </p>

      {article.featuredImage && (
        <img
          src={urlFor(article.featuredImage).width(1400).url()}
          alt={article.title}
          className="mb-10 w-full rounded-2xl"
        />
      )}

      <article className="prose prose-invert prose-lg max-w-none">

        <PortableText value={article.content} />

      </article>

    </main>
  );
}
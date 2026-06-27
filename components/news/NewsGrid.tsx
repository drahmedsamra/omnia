import NewsCard from "./NewsCard";

type Props = {
  news: any[];
};

export default function NewsGrid({ news }: Props) {
  return (
    <section className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {news.map((item) => (
        <NewsCard key={item._id} news={item} />
      ))}
    </section>
  );
}
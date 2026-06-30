export default function PersonSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "أمنية سمرة",
    alternateName: "Omnia Samra",
    url: "https://omnia.ahmedsamra.com",
    image: "https://omnia.ahmedsamra.com/og-image.webp",
    nationality: {
      "@type": "Country",
      name: "Egypt",
    },
    gender: "Female",
    jobTitle: "Tennis Player",
    description:
      "لاعبة منتخب مصر للتنس ولاعبة النادي الأهلي.",
    memberOf: [
      {
        "@type": "SportsOrganization",
        name: "الاتحاد المصري للتنس",
      },
      {
        "@type": "SportsOrganization",
        name: "النادي الأهلي",
      },
    ],
    sport: "Tennis",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}
export default function PersonSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",

    name: "أمنية أحمد سمرة",
    alternateName: "Omnia Ahmed Samra",

    url: "https://omnia.ahmedsamra.com",

    image: "https://omnia.ahmedsamra.com/og-image.webp",

    description:
      "لاعبة منتخب مصر للتنس ولاعبة النادي الأهلي.",

    gender: "Female",

    nationality: {
      "@type": "Country",
      name: "Egypt",
    },

    jobTitle: "Tennis Player",

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
import { groq } from "next-sanity";

export const newsQuery = groq`
  *[_type == "news"] | order(publishedDate desc){
    _id,
    title,
    slug,
    excerpt,
    featuredImage,
    publishedDate
  }
`;
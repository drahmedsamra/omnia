import { groq } from "next-sanity";

export const newsQuery = groq`
  *[_type == "news"] | order(publishedDate desc){
    _id,
    title,
    "slug": slug.current,
    excerpt,
    featuredImage,
    publishedDate
  }
`;

export const newsBySlugQuery = groq`
  *[_type == "news" && slug.current == $slug][0]{
    _id,
    title,
    "slug": slug.current,
    excerpt,
    featuredImage,
    content,
    publishedDate
  }
`;
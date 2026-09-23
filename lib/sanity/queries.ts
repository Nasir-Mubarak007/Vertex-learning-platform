import { defineQuery } from "next-sanity";

export const COURSES_QUERY = defineQuery(
  `*[_type == "course" && defined(slug.current)] | order(_createdAt desc){_id, title, "slug": slug.current, summary, level, studentCount, popular}`
);
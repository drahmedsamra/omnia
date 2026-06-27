import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "flajunq1",
  dataset: "production",
  apiVersion: "2026-06-27",
  useCdn: false,
});
import { draftMode } from "next/headers";
import { client } from "./client";

const DEFAULT_PARAMS = {};
const DEFAULT_TAGS = [];

export const token = process.env.SANITY_API_READ_TOKEN || "";

export async function sanityFetch({
  query,
  params = DEFAULT_PARAMS,
  tags = DEFAULT_TAGS,
}) {
  const { isEnabled: isDraftMode } = await draftMode();
  if (isDraftMode && !token) {
    throw new Error(
      "The `SANITY_API_READ_TOKEN` environment variable is required."
    );
  }

  const isDevelopment = process.env.NODE_ENV === "development";

  return client
    .withConfig({
      // useCdn: !isDraftMode && !isDevelopment, // using CDN in production unless in draft mode
      useCdn: false, // disable CDN to always fetch fresh data
      ...(isDraftMode && { token, perspective: "previewDrafts" }),
    })
    .fetch(query, params, {
      cache: "no-store", // disabling caching
      next: { revalidate: 0 }, // forcing revalidation on each request
    });
}

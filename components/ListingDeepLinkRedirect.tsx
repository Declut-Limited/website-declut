"use client";

import { useEffect } from "react";

export default function ListingDeepLinkRedirect({ slug }: { slug: string }) {
  useEffect(() => {
    window.location.href = `declut://listing/${slug}`;
  }, [slug]);

  return null;
}

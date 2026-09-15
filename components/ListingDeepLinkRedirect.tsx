"use client";

import { useEffect } from "react";

export default function ListingDeepLinkRedirect({ slug }: { slug: string }) {
  useEffect(() => {
    // window.location.href = `declut://listing/${slug}`;
    window.location.href = `/`;
  }, [slug]);

  return null;
}

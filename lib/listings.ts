const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export type PublicListing = {
  _id: string;
  title: string;
  description: string;
  mainImageUrl: string;
};

export async function getPublicListingBySlug(
  slug: string
): Promise<PublicListing | null> {
  if (!API_BASE_URL || !slug) return null;

  try {
    const response = await fetch(
      `${API_BASE_URL}/listings/public/${encodeURIComponent(slug)}`,
      { cache: "no-store" }
    );

    if (!response.ok) return null;

    const payload = await response.json();
    const listing = payload?.data ?? payload;

    if (!listing || typeof listing !== "object" || !listing.title) {
      return null;
    }

    return listing as PublicListing;
  } catch {
    return null;
  }
}
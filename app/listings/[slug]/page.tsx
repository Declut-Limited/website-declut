import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ListingDeepLinkRedirect from "@/components/ListingDeepLinkRedirect";
import { getPublicListingBySlug } from "@/lib/listings";

const siteUrl = "https://declut.com.ng";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
	try {
    const { slug } = await params;
    const listing = await getPublicListingBySlug(slug);

    if (!listing) return {
      title: "Listing Not Found",
      description: "This listing doesn't exist",
    };

    const url = `${siteUrl}/listings/${slug}`;
    const { title, description, mainImageUrl } = listing;

    return {
      title,
      description,
      alternates: { canonical: url },
      openGraph: {
        type: "website",
        url,
        siteName: "Declut",
        title,
        description,
        images: [{ url: mainImageUrl, width: 1200, height: 630, alt: title }],
      }
    };
  } catch(err) {
		return {
			title: "Listing Not Found",
      description: "This listing doesn't exist",
		}
	}
}

export default async function ListingPage({ params }: PageProps) {
  const { slug } = await params;
  const listing = await getPublicListingBySlug(slug);

  if (!listing) notFound();

  return <ListingDeepLinkRedirect slug={slug} />;
}

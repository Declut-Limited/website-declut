import type { Metadata } from "next";
import LegalPageContent from "@/components/ui/LegalPageContent";

export const metadata: Metadata = {
  title: "Refund Policy",
};

const sections = [
  {
    heading: "Overview",
    body: "This policy explains when and how refunds are handled for transactions made through Declut.",
  },
  {
    heading: "Eligibility for Refunds",
    body: "Refunds may be available if an item is significantly different from its listing, was not delivered, or if both buyer and seller agree to cancel a transaction.",
  },
  {
    heading: "Requesting a Refund",
    body: "To request a refund, report the issue through the app or contact our support team with details of the transaction as soon as possible.",
  },
  {
    heading: "Processing Time",
    body: "Approved refunds are typically processed within a few business days, though timing may vary depending on your payment provider.",
  },
  {
    heading: "Non-Refundable Situations",
    body: "Refunds are not available for items accurately described and accepted at handoff, or for change-of-mind requests made after a transaction is complete.",
  },
  {
    heading: "Contact Us",
    body: "Questions about a refund can be sent to mydeclutapp@gmail.com.",
  },
];

export default function RefundPolicyPage() {
  return (
    <LegalPageContent
      title="Refund Policy"
      lastUpdated="September 4, 2026"
      sections={sections}
    />
  );
}

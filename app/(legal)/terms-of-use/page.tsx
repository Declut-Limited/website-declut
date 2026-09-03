import type { Metadata } from "next";
import LegalPageContent from "@/components/ui/LegalPageContent";

export const metadata: Metadata = {
  title: "Terms of Use",
};

const sections = [
  {
    heading: "Acceptance of Terms",
    body: "By accessing or using Declut, you agree to be bound by these Terms of Use. If you do not agree, please do not use the platform.",
  },
  {
    heading: "Using Declut",
    body: "Declut connects buyers and sellers of pre-loved household items. You agree to use the platform only for lawful purposes and to provide accurate information in your listings and account.",
  },
  {
    heading: "Listings and Transactions",
    body: "Sellers are responsible for the accuracy of their listings. Declut facilitates connections between buyers and sellers but is not a party to the transactions that result from them.",
  },
  {
    heading: "Account Responsibilities",
    body: "You are responsible for keeping your account credentials secure and for all activity that happens under your account.",
  },
  {
    heading: "Limitation of Liability",
    body: "Declut is provided on an \"as is\" basis. To the fullest extent permitted by law, Declut is not liable for indirect or consequential damages arising from your use of the platform.",
  },
  {
    heading: "Changes to These Terms",
    body: "We may update these Terms of Use from time to time. Continued use of Declut after changes take effect constitutes acceptance of the revised terms.",
  },
  {
    heading: "Contact Us",
    body: "Questions about these terms can be sent to mydeclutapp@gmail.com.",
  },
];

export default function TermsOfUsePage() {
  return (
    <LegalPageContent
      title="Terms of Use"
      lastUpdated="September 4, 2026"
      sections={sections}
    />
  );
}

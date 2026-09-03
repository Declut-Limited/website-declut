import type { Metadata } from "next";
import LegalPageContent from "@/components/ui/LegalPageContent";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

const sections = [
  {
    heading: "Information We Collect",
    body: "We collect information you provide directly, such as your name, email, phone number, and listing details, as well as basic usage data needed to operate the platform.",
  },
  {
    heading: "How We Use Your Information",
    body: "Your information is used to operate Declut, facilitate transactions between buyers and sellers, send launch and account updates, and improve the platform.",
  },
  {
    heading: "Sharing Your Information",
    body: "We do not sell your personal information. Information is shared only where necessary to complete a transaction, comply with the law, or with service providers who help us run Declut.",
  },
  {
    heading: "Data Security",
    body: "We take reasonable technical and organizational measures to protect your information, though no method of transmission or storage is completely secure.",
  },
  {
    heading: "Your Choices",
    body: "You can request access to, correction of, or deletion of your personal information at any time by contacting us.",
  },
  {
    heading: "Changes to This Policy",
    body: "We may update this Privacy Policy from time to time. We will note the date of the most recent revision at the top of this page.",
  },
  {
    heading: "Contact Us",
    body: "Questions about this policy can be sent to mydeclutapp@gmail.com.",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <LegalPageContent
      title="Privacy Policy"
      lastUpdated="September 4, 2026"
      sections={sections}
    />
  );
}

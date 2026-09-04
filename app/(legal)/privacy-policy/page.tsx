import type { Metadata } from "next";
import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

type Block =
  | { type: "p"; text: string }
  | { type: "list"; items: string[] }
  | { type: "subheading"; text: string }
  | { type: "contact" };

type Section = {
  heading: string;
  blocks: Block[];
};

const intro = [
  `Declut ("Declut", "we", "us", or "our") respects your privacy and is committed to protecting the personal information you provide when you visit the Declut website, join our waitlist, use the Declut mobile application, or use our related services (collectively, the "Platform").`,
  `This Privacy Policy explains what information we collect, why we collect it, how we use and protect it, and the choices available to you.`,
  `By accessing or using Declut or providing your information through the Platform, you acknowledge the practices described in this Privacy Policy.`,
];

const sections: Section[] = [
  {
    heading: "1. Information We Collect",
    blocks: [
      { type: "subheading", text: "Information You Provide" },
      {
        type: "p",
        text: "When you interact with Declut, join our waitlist, create an account, or use our services, we may collect information such as:",
      },
      {
        type: "list",
        items: [
          "Full name",
          "Email address",
          "Phone number",
          "Profile information",
          "Account credentials",
          "Location or address information",
          "Payment-related information",
          "Bank or payout information",
          "Identity verification information, where required",
          "Listings and product information",
          "Photographs and descriptions of items",
          "Messages or communications relating to transactions",
          "Customer support requests",
          "Dispute and refund information",
        ],
      },
      { type: "subheading", text: "Waitlist and Pre-Launch Information" },
      {
        type: "p",
        text: "If you join the Declut waitlist or register your interest before the Platform becomes generally available, we may collect:",
      },
      {
        type: "list",
        items: [
          "Your email address;",
          "Your stated interest in using Declut as a buyer, seller, or both;",
          "The date and time you joined the waitlist;",
          "Referral or acquisition information indicating how you discovered Declut, where available; and",
          "Information relating to your interaction with our pre-launch website or communications.",
        ],
      },
      {
        type: "p",
        text: "We use this information to manage the waitlist, understand interest in Declut, prepare for launch, provide early-access opportunities where applicable, and communicate important information about the availability and launch of Declut.",
      },
      {
        type: "p",
        text: "Joining the waitlist does not create a Declut account and does not guarantee access to any particular feature, promotion, or launch date.",
      },
      { type: "subheading", text: "Transaction Information" },
      {
        type: "p",
        text: "When you buy or sell through Declut, we may collect information relating to the transaction, including:",
      },
      {
        type: "list",
        items: [
          "Items purchased or sold",
          "Transaction amount",
          "Payment status",
          "Payment method",
          "Refund information",
          "Inspection status",
          "Dispute information",
          "Transaction dates and timestamps",
        ],
      },
      {
        type: "p",
        text: "Payment information may be processed by third-party payment service providers. Declut may not directly store complete debit or credit card details.",
      },
      { type: "subheading", text: "Device and Usage Information" },
      {
        type: "p",
        text: "We may automatically collect technical information when you visit our website or use Declut, including:",
      },
      {
        type: "list",
        items: [
          "Device type",
          "Operating system",
          "IP address",
          "Browser information",
          "App version",
          "Device identifiers",
          "Pages or screens viewed",
          "Features used",
          "Crash and diagnostic information",
          "Login activity",
          "Referral or traffic source, where available",
        ],
      },
      {
        type: "p",
        text: "This information helps us understand how people discover and interact with Declut and allows us to maintain, secure, and improve the Platform.",
      },
      { type: "subheading", text: "Location Information" },
      {
        type: "p",
        text: "Where you provide permission, Declut may use your location to provide location-based functionality, including helping users discover relevant listings or facilitating transactions.",
      },
      {
        type: "p",
        text: "You may control location permissions through your browser or device settings.",
      },
    ],
  },
  {
    heading: "2. How We Use Your Information",
    blocks: [
      { type: "p", text: "We may use your information to:" },
      {
        type: "list",
        items: [
          "Manage the Declut pre-launch waitlist;",
          "Confirm that you have successfully joined the waitlist;",
          "Notify waitlist members when Declut launches or becomes available;",
          "Provide information about early access, where offered;",
          "Send relevant Declut product, launch, and service updates in accordance with applicable law and your communication preferences;",
          "Understand whether prospective users are interested in buying, selling, or both;",
          "Measure and understand pre-launch demand and the effectiveness of our marketing and referral channels;",
          "Create and manage your account;",
          "Provide Declut's marketplace services;",
          "Display and manage product listings;",
          "Facilitate transactions between buyers and sellers;",
          "Process payments, payouts, refunds, and related financial activities;",
          "Facilitate item inspection and transaction completion;",
          "Prevent fraud and unauthorised activity;",
          "Investigate disputes;",
          "Provide customer support;",
          "Verify users where necessary;",
          "Send transaction and account notifications;",
          "Improve the Platform and develop new features;",
          "Monitor Platform performance;",
          "Enforce our Terms of Use;",
          "Comply with applicable legal and regulatory requirements; and",
          "Protect Declut, our users, and third parties.",
        ],
      },
      {
        type: "p",
        text: "Where communications are optional, you may unsubscribe using the unsubscribe option provided in our communications or by contacting us.",
      },
      {
        type: "p",
        text: "Unsubscribing from promotional or pre-launch communications does not necessarily prevent us from sending communications that are required to provide a service you have requested or for other legitimate administrative, security, or legal purposes.",
      },
    ],
  },
  {
    heading: "3. How We Share Information",
    blocks: [
      { type: "p", text: "We do not sell your personal information." },
      { type: "p", text: "We may share information where reasonably necessary with:" },
      { type: "subheading", text: "Other Declut Users" },
      {
        type: "p",
        text: "Certain information may be shared between buyers and sellers where necessary to facilitate a transaction.",
      },
      {
        type: "p",
        text: "We aim to limit the information disclosed to what is reasonably required for the relevant transaction.",
      },
      {
        type: "p",
        text: "Waitlist information is not made publicly available to other Declut users merely because you have joined the waitlist.",
      },
      { type: "subheading", text: "Service Providers" },
      { type: "p", text: "We may work with third-party providers that assist us with:" },
      {
        type: "list",
        items: [
          "Payment processing",
          "Identity verification",
          "Hosting and cloud infrastructure",
          "Waitlist management",
          "Email and customer communication",
          "Analytics",
          "Customer support",
          "Fraud detection",
          "Security",
          "Logistics or related services where applicable",
        ],
      },
      {
        type: "p",
        text: "These providers may process information only as necessary to provide their services to Declut, subject to applicable agreements and law.",
      },
      { type: "subheading", text: "Legal and Regulatory Authorities" },
      {
        type: "p",
        text: "We may disclose information where required by law, court order, regulatory obligation, or lawful government request.",
      },
      {
        type: "p",
        text: "We may also disclose information where reasonably necessary to investigate fraud, protect users, enforce our agreements, or protect the rights and safety of Declut or others.",
      },
    ],
  },
  {
    heading: "4. Payments and Financial Information",
    blocks: [
      {
        type: "p",
        text: "Payments made through Declut may be processed by authorised third-party payment providers.",
      },
      {
        type: "p",
        text: "Your payment information is subject to the privacy and security practices of the relevant payment provider.",
      },
      {
        type: "p",
        text: "Where Declut facilitates the holding of transaction funds pending completion of a transaction, such arrangements may be provided through appropriately authorised payment partners.",
      },
    ],
  },
  {
    heading: "5. Data Security",
    blocks: [
      {
        type: "p",
        text: "We implement reasonable administrative, organisational, and technical measures designed to protect personal information against unauthorised access, disclosure, alteration, loss, or misuse.",
      },
      {
        type: "p",
        text: "However, no electronic system or method of transmission is completely secure, and we cannot guarantee absolute security.",
      },
      {
        type: "p",
        text: "If you create a Declut account, you are responsible for keeping your password, verification codes, and other account credentials confidential.",
      },
    ],
  },
  {
    heading: "6. Data Retention",
    blocks: [
      {
        type: "p",
        text: "We retain personal information for as long as reasonably necessary for the purposes for which it was collected, including to:",
      },
      {
        type: "list",
        items: [
          "Manage our pre-launch waitlist;",
          "Provide launch and early-access communications;",
          "Provide our services;",
          "Maintain transaction records;",
          "Resolve disputes;",
          "Prevent fraud;",
          "Meet accounting, tax, legal, and regulatory obligations; and",
          "Enforce our agreements.",
        ],
      },
      {
        type: "p",
        text: "Waitlist information may be retained through the launch of Declut where reasonably necessary to notify you about availability and facilitate your transition to the Platform.",
      },
      {
        type: "p",
        text: "Joining the waitlist does not automatically create a Declut account. Where you subsequently create an account, information associated with your waitlist registration may be linked to your account where appropriate.",
      },
      {
        type: "p",
        text: "If you unsubscribe from waitlist or marketing communications, we may retain limited information necessary to record and respect your communication preference and comply with applicable legal obligations.",
      },
      {
        type: "p",
        text: "Information may otherwise be deleted, anonymised, or securely retained when it is no longer required, subject to applicable legal obligations.",
      },
    ],
  },
  {
    heading: "7. Your Rights",
    blocks: [
      { type: "p", text: "Subject to applicable data protection laws, you may have the right to:" },
      {
        type: "list",
        items: [
          "Request access to your personal information;",
          "Request correction of inaccurate information;",
          "Request deletion of certain information;",
          "Object to or restrict certain processing;",
          "Withdraw consent where processing is based on consent;",
          "Unsubscribe from optional marketing or pre-launch communications; and",
          "Request information about how your personal data is processed.",
        ],
      },
      {
        type: "p",
        text: "Certain information may need to be retained where required for legal, security, fraud-prevention, accounting, or regulatory purposes.",
      },
      {
        type: "p",
        text: "Requests may be submitted to mydeclutapp@gmail.com.",
      },
    ],
  },
  {
    heading: "8. Cookies and Similar Technologies",
    blocks: [
      {
        type: "p",
        text: "Our website and Platform may use cookies, SDKs, analytics tools, and similar technologies to remember preferences, understand usage, measure the effectiveness of marketing or referral campaigns, improve performance, and maintain security.",
      },
      {
        type: "p",
        text: "These technologies may also help us understand how visitors discover and interact with our pre-launch website and waitlist.",
      },
      {
        type: "p",
        text: "Where required, you may manage certain tracking preferences through your browser, device, cookie controls, or Platform settings.",
      },
    ],
  },
  {
    heading: "9. Children's Privacy",
    blocks: [
      {
        type: "p",
        text: "Declut is not intended for children under the minimum age permitted to independently enter into transactions under applicable law.",
      },
      {
        type: "p",
        text: "We do not knowingly collect personal information from children in violation of applicable law.",
      },
    ],
  },
  {
    heading: "10. Third-Party Services",
    blocks: [
      { type: "p", text: "Declut may contain links to or integrate with third-party websites and services." },
      {
        type: "p",
        text: "Their privacy practices are governed by their respective privacy policies. Declut is not responsible for the privacy practices of independent third parties.",
      },
    ],
  },
  {
    heading: "11. Changes to This Privacy Policy",
    blocks: [
      {
        type: "p",
        text: "We may update this Privacy Policy periodically to reflect changes to our services, launch status, legal requirements, or business practices.",
      },
      {
        type: "p",
        text: "Where changes are material, we may notify users through the Platform, email, or another appropriate method.",
      },
      {
        type: "p",
        text: 'The "Last Updated" date will indicate when the Policy was most recently revised.',
      },
    ],
  },
  {
    heading: "12. Contact Us",
    blocks: [
      {
        type: "p",
        text: "For questions, complaints, or requests relating to this Privacy Policy or your personal information, contact:",
      },
      { type: "contact" },
    ],
  },
];

function renderBlock(block: Block, index: number) {
  switch (block.type) {
    case "subheading":
      return (
        <h3 key={index} className="mt-6 text-base font-bold text-ink">
          {block.text}
        </h3>
      );
    case "p":
      return (
        <p key={index} className="mt-3 text-sm leading-relaxed text-ink/70 sm:text-base">
          {block.text}
        </p>
      );
    case "list":
      return (
        <ul
          key={index}
          className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-ink/70 sm:text-base"
        >
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      );
    case "contact":
      return (
        <div key={index} className="mt-4 flex flex-col gap-1 text-sm leading-relaxed text-ink/70 sm:text-base">
          <p className="font-bold text-ink">Declut</p>
          <p>
            Email:{" "}
            <a href="mailto:mydeclutapp@gmail.com" className="text-primary hover:underline">
              mydeclutapp@gmail.com
            </a>
          </p>
          <p>Address: 5 Ogunsiji Close, Allen, Ikeja, Lagos State, Nigeria</p>
          <p>
            Website:{" "}
            <a href="https://declut.com.ng" className="text-primary hover:underline">
              declut.com.ng
            </a>
          </p>
        </div>
      );
  }
}

export default function PrivacyPolicyPage() {
  return (
    <article>
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm font-medium text-ink/70 transition-colors hover:text-primary"
      >
        <FiArrowLeft size={16} aria-hidden="true" />
        Back
      </Link>

      <div
        className="relative mt-6 overflow-hidden rounded-[2.5rem] px-6 py-10 text-center before:pointer-events-none before:absolute before:-bottom-30 before:right-4 before:h-100 before:w-20 before:rotate-45 before:rounded-full before:bg-white/10 before:content-[''] after:pointer-events-none after:absolute after:-bottom-44 after:right-50 after:h-100 after:w-20 after:rotate-45 after:rounded-full after:bg-white/[0.07] after:content-[''] sm:px-12 lg:py-14"
        style={{
          background: "linear-gradient(135deg, #000000 0%, #000000 50%, #101828 100%)",
        }}
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-0 top-1/2 size-175 -translate-x-1/3 -translate-y-1/2 rounded-full blur-2xl"
          style={{
            background:
              "radial-gradient(circle, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0.18) 25%, rgba(148,163,184,0.10) 45%, rgba(100,116,139,0.05) 62%, transparent 78%)",
          }}
        />

        <div className="relative z-10 mx-auto max-w-2xl">
          <h1 className="text-3xl font-extrabold leading-tight text-white sm:text-4xl">
            Privacy Policy
          </h1>
          <p className="mx-auto mt-4 max-w-md text-sm text-white/80 sm:text-base">
            Learn how we collect, use, store, and protect your personal
            information when you use Declut.
          </p>
        </div>
      </div>

      <div className="mt-8 flex flex-col gap-1 text-sm text-ink/50">
        <p>Effective Date: 11 August, 2026</p>
        <p>Last Updated: 12 August, 2026</p>
      </div>

      <div className="mt-6 flex flex-col gap-3">
        {intro.map((paragraph) => (
          <p key={paragraph} className="text-sm leading-relaxed text-ink/70 sm:text-base">
            {paragraph}
          </p>
        ))}
      </div>

      <div className="mt-10 flex flex-col gap-8">
        {sections.map((section) => (
          <div key={section.heading}>
            <h2 className="text-lg font-bold text-ink sm:text-xl">{section.heading}</h2>
            {section.blocks.map((block, index) => renderBlock(block, index))}
          </div>
        ))}
      </div>
    </article>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";

export const metadata: Metadata = {
  title: "Terms of Use",
};

type Block =
  | { type: "p"; text: string }
  | { type: "list"; items: string[] }
  | { type: "contact" };

type Section = {
  heading: string;
  blocks: Block[];
};

const intro = [
  "Welcome to Declut.",
  `These Terms of Use ("Terms") govern your access to and use of the Declut mobile application, website, marketplace, and related services ("Declut" or the "Platform").`,
  "By creating an account, accessing, or using Declut, you agree to these Terms.",
];

const sections: Section[] = [
  {
    heading: "1. About Declut",
    blocks: [
      {
        type: "p",
        text: "Declut is a marketplace that enables users to list, discover, buy, and sell items, including pre-owned household and personal items.",
      },
      {
        type: "p",
        text: "Declut provides technology and related services that facilitate transactions between buyers and sellers.",
      },
      {
        type: "p",
        text: "Unless expressly stated otherwise, Declut is not the owner, manufacturer, or seller of items listed by independent sellers on the Platform.",
      },
    ],
  },
  {
    heading: "2. Eligibility",
    blocks: [
      {
        type: "p",
        text: "You must have the legal capacity required under applicable law to enter into transactions through Declut.",
      },
      { type: "p", text: "By creating an account, you represent that:" },
      {
        type: "list",
        items: [
          "The information you provide is accurate;",
          "You are legally permitted to use the Platform;",
          "You will comply with these Terms; and",
          "You will not use Declut for unlawful or fraudulent purposes.",
        ],
      },
    ],
  },
  {
    heading: "3. Accounts",
    blocks: [
      {
        type: "p",
        text: "You are responsible for maintaining the confidentiality and security of your account.",
      },
      {
        type: "p",
        text: "You are responsible for activities performed through your account unless caused by circumstances for which Declut is legally responsible.",
      },
      { type: "p", text: "Notify Declut immediately if you believe your account has been compromised." },
      {
        type: "p",
        text: "Declut may suspend or restrict accounts reasonably suspected of fraud, abuse, prohibited activity, or serious violations of these Terms.",
      },
    ],
  },
  {
    heading: "4. Selling on Declut",
    blocks: [
      { type: "p", text: "Sellers are responsible for ensuring that their listings are accurate and truthful." },
      {
        type: "p",
        text: "When listing an item, sellers must accurately disclose relevant information including:",
      },
      {
        type: "list",
        items: [
          "Item condition;",
          "Known defects or damage;",
          "Appropriate photographs;",
          "Product description;",
          "Price; and",
          "Other material information that may reasonably influence a buyer's decision.",
        ],
      },
      {
        type: "p",
        text: "Sellers must not intentionally misrepresent an item's condition, authenticity, ownership, or characteristics.",
      },
    ],
  },
  {
    heading: "5. Prohibited Items",
    blocks: [
      {
        type: "p",
        text: "Users must not list, sell, purchase, or attempt to transact in items prohibited by applicable law or Declut's policies.",
      },
      { type: "p", text: "This may include:" },
      {
        type: "list",
        items: [
          "Illegal goods;",
          "Stolen property;",
          "Counterfeit products;",
          "Weapons or other restricted items;",
          "Illegal drugs or controlled substances;",
          "Hazardous materials;",
          "Fraudulent products;",
          "Items that infringe intellectual property rights; and",
          "Any other items Declut determines cannot lawfully or safely be traded through the Platform.",
        ],
      },
      { type: "p", text: "Declut may remove prohibited listings and restrict or suspend associated accounts." },
    ],
  },
  {
    heading: "6. Buying on Declut",
    blocks: [
      { type: "p", text: "Buyers are responsible for reviewing listing information before purchasing an item." },
      {
        type: "p",
        text: "Where the transaction includes physical inspection, buyers should inspect the item carefully before confirming that the transaction has been successfully completed.",
      },
      { type: "p", text: "Buyers should verify, where applicable:" },
      {
        type: "list",
        items: [
          "The physical condition of the item;",
          "Whether it matches the listing;",
          "Significant defects;",
          "Basic functionality; and",
          "Other material characteristics reasonably capable of being inspected.",
        ],
      },
    ],
  },
  {
    heading: "7. Payments and Transaction Protection",
    blocks: [
      { type: "p", text: "Eligible transactions may use Declut's transaction protection process." },
      {
        type: "p",
        text: "When a buyer makes payment, funds may be held through Declut's authorised payment infrastructure or payment partners until the relevant conditions for releasing the funds are satisfied.",
      },
      {
        type: "p",
        text: "Funds are not necessarily immediately available to the seller after payment by the buyer.",
      },
      {
        type: "p",
        text: "Where inspection applies, the buyer may be required to inspect and confirm acceptance of the item before funds are released to the seller.",
      },
    ],
  },
  {
    heading: "8. Inspection and Confirmation",
    blocks: [
      {
        type: "p",
        text: "Declut's marketplace is designed to encourage buyers to inspect eligible items before final transaction completion.",
      },
      {
        type: "p",
        text: "Once a buyer confirms that an item is acceptable and the transaction is completed, funds may be released to the seller.",
      },
      {
        type: "p",
        text: "Buyers should therefore avoid confirming acceptance before they are reasonably satisfied with the item.",
      },
      {
        type: "p",
        text: "Where a buyer identifies a material issue before confirming acceptance, the buyer should initiate the applicable rejection or dispute process through Declut.",
      },
    ],
  },
  {
    heading: "9. Disputes",
    blocks: [
      {
        type: "p",
        text: "A buyer may raise a dispute where an item materially differs from its listing, including situations involving:",
      },
      {
        type: "list",
        items: [
          "Undisclosed significant damage;",
          "Materially inaccurate descriptions;",
          "Incorrect items;",
          "Suspected counterfeit goods; or",
          "Other significant misrepresentation.",
        ],
      },
      {
        type: "p",
        text: "Declut may request information from both parties, including photographs, listing information, communications, receipts, or other evidence.",
      },
      { type: "p", text: "Declut may restrict the transaction while the dispute is being reviewed." },
      { type: "p", text: "Users agree to cooperate reasonably with dispute investigations." },
      {
        type: "p",
        text: "Declut may make determinations regarding Platform-level transaction handling based on available evidence, applicable policies, and legal requirements. Nothing in these Terms removes rights that cannot legally be excluded.",
      },
    ],
  },
  {
    heading: "10. Refunds",
    blocks: [
      {
        type: "p",
        text: "Refund eligibility is governed by the Declut Refund Policy, which forms part of these Terms.",
      },
      {
        type: "p",
        text: "A refund of the item's purchase price does not necessarily mean that every Platform, processing, or service charge is refundable.",
      },
      {
        type: "p",
        text: "Any applicable non-refundable charges will be disclosed in accordance with the Refund Policy and applicable law.",
      },
    ],
  },
  {
    heading: "11. Fees",
    blocks: [
      { type: "p", text: "Declut may charge service, transaction, processing, listing, seller, buyer, or other fees." },
      { type: "p", text: "Applicable fees will be communicated before users complete transactions where required." },
      {
        type: "p",
        text: "Declut may change its fee structure from time to time, subject to applicable notice requirements.",
      },
    ],
  },
  {
    heading: "12. User Conduct",
    blocks: [
      { type: "p", text: "You must not:" },
      {
        type: "list",
        items: [
          "Commit or attempt fraud;",
          "Manipulate transactions or reviews;",
          "Harass, threaten, or abuse another user;",
          "Provide deliberately misleading information;",
          "Interfere with the Platform's operation;",
          "Attempt unauthorised access to another account;",
          "Upload malicious software;",
          "Use Declut for unlawful purposes;",
          "Create transactions intended to exploit refunds or promotions; or",
          "Circumvent Declut's payment or safety systems in violation of applicable Platform policies.",
        ],
      },
    ],
  },
  {
    heading: "13. Marketplace Transactions",
    blocks: [
      { type: "p", text: "Declut facilitates transactions between independent users." },
      {
        type: "p",
        text: "Except where expressly stated otherwise, the sales contract for an item is between the buyer and seller.",
      },
      {
        type: "p",
        text: "Sellers remain responsible for the items they list and for complying with applicable obligations relating to their sales.",
      },
      {
        type: "p",
        text: "Declut does not guarantee that every item listed will sell or that every buyer or seller will complete a proposed transaction.",
      },
    ],
  },
  {
    heading: "14. Intellectual Property",
    blocks: [
      {
        type: "p",
        text: "The Declut name, logo, interface, software, branding, graphics, and other proprietary Platform materials are owned by or licensed to Declut and are protected by applicable intellectual property laws.",
      },
      {
        type: "p",
        text: "Users retain ownership of content they submit but grant Declut the permissions reasonably necessary to host, display, reproduce, process, and distribute that content for operating and promoting the Platform.",
      },
    ],
  },
  {
    heading: "15. Suspension and Termination",
    blocks: [
      {
        type: "p",
        text: "Declut may suspend, restrict, or terminate access where reasonably necessary because of:",
      },
      {
        type: "list",
        items: [
          "Fraud or suspected fraud;",
          "Serious or repeated violations of these Terms;",
          "Illegal activity;",
          "Abuse of other users;",
          "Payment-related misconduct;",
          "Security risks; or",
          "Legal or regulatory requirements.",
        ],
      },
      {
        type: "p",
        text: "Where appropriate and legally required, users may be given notice or an opportunity to appeal.",
      },
    ],
  },
  {
    heading: "16. Limitation of Liability",
    blocks: [
      {
        type: "p",
        text: "To the maximum extent permitted by applicable law, Declut will not be responsible for indirect or consequential losses arising solely from transactions between independent buyers and sellers.",
      },
      {
        type: "p",
        text: "Nothing in these Terms excludes or limits liability that cannot legally be excluded or restricted.",
      },
    ],
  },
  {
    heading: "17. Privacy",
    blocks: [
      { type: "p", text: "Our collection and use of personal information is governed by the Declut Privacy Policy." },
    ],
  },
  {
    heading: "18. Changes to These Terms",
    blocks: [
      {
        type: "p",
        text: "We may update these Terms as Declut develops or where required by changes in law, regulation, technology, or our services.",
      },
      {
        type: "p",
        text: "Material changes may be communicated through the Platform, email, or another appropriate method.",
      },
      {
        type: "p",
        text: "Continued use after the effective date of updated Terms constitutes acceptance where permitted by law.",
      },
    ],
  },
  {
    heading: "19. Governing Law",
    blocks: [
      { type: "p", text: "These Terms are governed by the laws of the Federal Republic of Nigeria." },
      {
        type: "p",
        text: "Any dispute relating to these Terms will be handled in accordance with applicable Nigerian law and any dispute-resolution process specified by Declut or required by law.",
      },
    ],
  },
  {
    heading: "20. Contact",
    blocks: [
      { type: "p", text: "Questions regarding these Terms may be sent to:" },
      { type: "contact" },
    ],
  },
];

function renderBlock(block: Block, index: number) {
  switch (block.type) {
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
          <p>Address: 5 Ogunsiji close, Allen, Ikeja, Lagos state.</p>
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

export default function TermsOfUsePage() {
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
            Terms of Use
          </h1>
          <p className="mx-auto mt-4 max-w-md text-sm text-white/80 sm:text-base">
            Understand the rules, responsibilities, and conditions that apply
            when buying, selling, or using Declut.
          </p>
        </div>
      </div>

      <div className="mt-8 flex flex-col gap-1 text-sm text-ink/50">
        <p>Effective Date: 11 August, 2026</p>
        <p>Last Updated: 11 August, 2026</p>
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

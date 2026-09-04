import type { Metadata } from "next";
import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";

export const metadata: Metadata = {
  title: "Refund Policy",
};

type Block =
  | { type: "p"; text: string }
  | { type: "list"; items: string[] }
  | { type: "support" };

type Section = {
  heading: string;
  blocks: Block[];
};

const intro = [
  "Declut is designed to make buying and selling pre-owned items safer and more transparent.",
  "Because many products sold through Declut are pre-owned and sold by independent sellers, buyers are encouraged to inspect eligible items carefully before confirming a transaction.",
  "This Refund Policy explains when refunds may be available and how refund and dispute requests are handled.",
];

const sections: Section[] = [
  {
    heading: "1. Transaction Protection",
    blocks: [
      {
        type: "p",
        text: "For eligible transactions, a buyer's payment may be held through Declut's payment infrastructure or authorised payment partners while the transaction is being completed.",
      },
      { type: "p", text: "The seller may not receive the funds immediately after the buyer makes payment." },
      { type: "p", text: "Funds may remain held until the applicable transaction requirements are satisfied." },
    ],
  },
  {
    heading: "2. Inspect Before You Accept",
    blocks: [
      {
        type: "p",
        text: "Where physical inspection applies, buyers should inspect the item before confirming acceptance.",
      },
      { type: "p", text: "The buyer should check that:" },
      {
        type: "list",
        items: [
          "The item matches the listing;",
          "Its condition is reasonably consistent with the description and photographs;",
          "Significant defects have been disclosed;",
          "The correct item has been provided; and",
          "Where reasonably possible, the item's basic functionality is as represented.",
        ],
      },
      { type: "p", text: "If the buyer is satisfied, the buyer may confirm acceptance and complete the transaction." },
    ],
  },
  {
    heading: "3. When a Buyer Rejects an Item",
    blocks: [
      {
        type: "p",
        text: "If the buyer inspects an item and determines that it materially differs from the listing, the buyer should select the appropriate option within Declut indicating that there is a problem with the item.",
      },
      { type: "p", text: "The buyer may be asked to provide:" },
      {
        type: "list",
        items: [
          "A reason for rejection;",
          "A written explanation;",
          "Photographs or videos;",
          "Details of the discrepancy; and",
          "Other evidence reasonably required to review the issue.",
        ],
      },
      { type: "p", text: "The seller may be notified and given an opportunity to respond." },
    ],
  },
  {
    heading: "4. Eligible Refund Reasons",
    blocks: [
      { type: "p", text: "A buyer may be eligible for a refund where:" },
      {
        type: "list",
        items: [
          "The item is materially different from its description;",
          "Significant damage was not disclosed;",
          "The wrong item was provided;",
          "The item is materially defective contrary to the listing;",
          "The item is suspected to be counterfeit or otherwise unlawfully represented;",
          "The seller cannot complete the transaction; or",
          "Declut determines that a refund is appropriate under applicable law or Platform policies.",
        ],
      },
    ],
  },
  {
    heading: "5. Change-of-Mind Refunds",
    blocks: [
      {
        type: "p",
        text: "Where permitted by applicable law and Declut's applicable transaction rules, a buyer who changes their mind for reasons unrelated to seller misrepresentation may be permitted to cancel or receive a refund before the transaction is completed.",
      },
      { type: "p", text: "Examples may include:" },
      {
        type: "list",
        items: [
          "The buyer no longer wants the item;",
          "The buyer changes their purchasing decision;",
          "Distance or collection arrangements become inconvenient; or",
          "The buyer experiences a personal logistics issue.",
        ],
      },
      {
        type: "p",
        text: "Where such a refund is permitted, applicable service, transaction, or processing charges may be non-refundable to the extent permitted by law and disclosed to the buyer.",
      },
      {
        type: "p",
        text: "Any applicable deduction will be communicated before or during the relevant transaction process.",
      },
    ],
  },
  {
    heading: "6. Seller Misrepresentation",
    blocks: [
      {
        type: "p",
        text: "Where a refund results from material seller misrepresentation, Declut may treat the transaction differently from an ordinary change-of-mind cancellation.",
      },
      { type: "p", text: "Depending on the circumstances and applicable law:" },
      {
        type: "list",
        items: [
          "The buyer may receive an eligible refund;",
          "Applicable buyer charges may also be refunded where appropriate;",
          "The seller's account may receive a warning or restriction;",
          "The listing may be removed; and",
          "Repeated or serious violations may result in account suspension or termination.",
        ],
      },
    ],
  },
  {
    heading: "7. Completed Transactions",
    blocks: [
      { type: "p", text: "Buyers should not confirm acceptance until they have inspected the item where inspection is available." },
      {
        type: "p",
        text: "Once a buyer confirms that an item is satisfactory and the transaction has been completed, refund availability may be limited.",
      },
      {
        type: "p",
        text: "However, this does not prevent a user from reporting fraud, latent issues that could not reasonably have been discovered during inspection, unlawful goods, or other matters for which rights or remedies exist under applicable law.",
      },
    ],
  },
  {
    heading: "8. Disputed Transactions",
    blocks: [
      {
        type: "p",
        text: "If the buyer and seller disagree about the condition of an item or responsibility for a failed transaction, the matter may be escalated to Declut.",
      },
      { type: "p", text: "Declut may temporarily restrict the release of funds while reviewing the dispute." },
      { type: "p", text: "We may consider:" },
      {
        type: "list",
        items: [
          "Original listing information;",
          "Listing photographs;",
          "Buyer evidence;",
          "Seller evidence;",
          "Communications relating to the transaction;",
          "Inspection information; and",
          "Other relevant evidence.",
        ],
      },
      {
        type: "p",
        text: "Declut may determine the appropriate Platform-level handling of the transaction in accordance with this Policy, our Terms of Use, and applicable law.",
      },
    ],
  },
  {
    heading: "9. Refund Processing",
    blocks: [
      { type: "p", text: "Approved refunds will generally be returned through an available supported payment method." },
      {
        type: "p",
        text: "Processing times may vary depending on the payment provider, financial institution, payment method, and circumstances of the transaction.",
      },
      {
        type: "p",
        text: "Declut cannot guarantee how quickly a bank or third-party payment provider will make refunded funds available after the refund has been processed by the relevant payment system.",
      },
    ],
  },
  {
    heading: "10. Non-Refundable Charges",
    blocks: [
      {
        type: "p",
        text: "Certain service, transaction, payment-processing, or other disclosed charges may be non-refundable where permitted by applicable law.",
      },
      { type: "p", text: "Whether a charge is refundable may depend on:" },
      {
        type: "list",
        items: [
          "Why the transaction was cancelled;",
          "Whether the seller was responsible for the issue;",
          "Whether Declut or a payment provider has already incurred transaction costs; and",
          "Applicable consumer-protection requirements.",
        ],
      },
      {
        type: "p",
        text: "Any non-refundable charge applicable to a transaction should be disclosed to the user before the relevant payment or cancellation decision where required.",
      },
    ],
  },
  {
    heading: "11. Abuse of the Refund System",
    blocks: [
      {
        type: "p",
        text: "Declut may investigate users who repeatedly or fraudulently attempt to misuse the refund or dispute process.",
      },
      { type: "p", text: "Examples include:" },
      {
        type: "list",
        items: [
          "Making false claims about an item's condition;",
          "Submitting manipulated evidence;",
          "Attempting to retain both an item and refunded funds;",
          "Coordinating fraudulent transactions;",
          "Repeatedly purchasing items with no genuine intention of completing transactions; or",
          "Otherwise exploiting Declut's transaction protection system.",
        ],
      },
      { type: "p", text: "Accounts involved in refund abuse may be restricted or suspended, subject to applicable law." },
    ],
  },
  {
    heading: "12. Reporting a Problem",
    blocks: [
      {
        type: "p",
        text: "If there is a problem with a transaction, users should report it through the applicable transaction or dispute functionality within Declut as soon as reasonably possible.",
      },
      { type: "p", text: "For additional assistance, contact:" },
      { type: "support" },
      {
        type: "p",
        text: "When contacting support, include the transaction ID and relevant information about the issue.",
      },
    ],
  },
  {
    heading: "13. Changes to This Policy",
    blocks: [
      { type: "p", text: "Declut may update this Refund Policy as the Platform and its transaction processes evolve." },
      { type: "p", text: "Material changes may be communicated through the Platform or another appropriate method." },
      {
        type: "p",
        text: "The version applicable to a transaction will be determined in accordance with applicable law and the terms presented to the user at the relevant time.",
      },
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
    case "support":
      return (
        <div key={index} className="mt-4 flex flex-col gap-1 text-sm leading-relaxed text-ink/70 sm:text-base">
          <p className="font-bold text-ink">Declut Support</p>
          <p>
            Email:{" "}
            <a href="mailto:mydeclutapp@gmail.com" className="text-primary hover:underline">
              mydeclutapp@gmail.com
            </a>
          </p>
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

export default function RefundPolicyPage() {
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
            Refund Policy
          </h1>
          <p className="mx-auto mt-4 max-w-md text-sm text-white/80 sm:text-base">
            Learn when refunds apply, how disputes are handled, and what to
            expect when a transaction doesn&apos;t go as planned.
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

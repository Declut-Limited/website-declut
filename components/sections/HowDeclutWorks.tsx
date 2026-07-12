"use client";

import { motion } from "framer-motion";
import FadeIn from "@/components/ui/FadeIn";

const sellerSteps = [
  {
    title: "Sign up",
    description: "Register an account on Declut and list your items for sale.",
  },
  {
    title: "Wait for Interest",
    description: "Await potential buyers to show interest in your listings.",
  },
  {
    title: "Secure Payment Process",
    description:
      "Buyers commit to purchasing items through a secure payment process managed by Declut.",
  },
  {
    title: "Arrange Meeting",
    description:
      "Coordinate with buyer to arrange for inspection and pickup of the item.",
  },
  {
    title: "Meet the Buyer",
    description:
      "Arrange to meet the buyer at a mutually agreed location for the transaction",
  },
  {
    title: "Transaction Completion",
    description:
      "Upon buyer satisfaction, finalize the transaction securely through Declut.",
  },
];

const buyerSteps = [
  {
    title: "Sign up",
    description:
      "Register an account on Declut, browse through the listings to find items of interest.",
  },
  {
    title: "Express Interest",
    description: "Express interest in an item and initiate the purchase process.",
  },
  {
    title: "Secure Payment",
    description: "Complete the payment securely through Declut's platform.",
  },
  {
    title: "Arrange Inspection",
    description:
      "Coordinate with the seller to arrange for inspection and collection.",
  },
  {
    title: "Meet the Seller",
    description:
      "Meet the seller at a designated location to inspect and collect the item.",
  },
  {
    title: "Transaction Completion",
    description: "Upon satisfaction, finalize the transaction securely through Declut",
  },
];

const listVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as const },
  },
};

function StepList({
  label,
  steps,
  badgeBg,
  badgeText,
}: {
  label: string;
  steps: { title: string; description: string }[];
  badgeBg: string;
  badgeText: string;
}) {
  return (
    <div>
      <p className="text-sm font-semibold uppercase tracking-wide text-ink/50">
        {label}
      </p>
      <motion.ol
        variants={listVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="mt-6 flex flex-col gap-8"
      >
        {steps.map((step, index) => (
          <motion.li key={step.title} variants={itemVariants} className="flex gap-5">
            <span
              className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-bold ${badgeBg} ${badgeText}`}
              aria-hidden="true"
            >
              {index + 1}
            </span>
            <div>
              <h4 className="font-bold text-ink">{step.title}</h4>
              <p className="mt-1.5 text-ink/60">{step.description}</p>
            </div>
          </motion.li>
        ))}
      </motion.ol>
    </div>
  );
}

export default function HowDeclutWorks() {
  return (
    <section
      id="how-it-works"
      className="scroll-mt-24 bg-background py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold text-primary sm:text-4xl">
            How Declut Works
          </h2>
          <p className="mt-4 text-base text-ink/50 sm:text-lg">
            Unlock the simplicity of decluttering with our step-by-step guide
          </p>
        </FadeIn>

        <div className="mt-16 grid gap-16 lg:grid-cols-2 lg:gap-12">
          <StepList
            label="For Sellers"
            steps={sellerSteps}
            badgeBg="bg-primary-50"
            badgeText="text-primary"
          />
          <StepList
            label="For Buyers"
            steps={buyerSteps}
            badgeBg="bg-accent-50"
            badgeText="text-accent-primary"
          />
        </div>
      </div>
    </section>
  );
}

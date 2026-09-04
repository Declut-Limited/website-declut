import type { Metadata } from "next";
import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";

export const metadata: Metadata = {
  title: "Refund Policy",
};

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
        className="relative mt-6 overflow-hidden rounded-[2.5rem] px-6 py-10 text-center before:pointer-events-none before:absolute before:-bottom-30 before:right-4 before:h-100 before:w-20 before:rotate-45 before:rounded-full before:bg-white/10 before:content-[''] after:pointer-events-none after:absolute after:-bottom-34 after:right-40 after:h-100 after:w-20 after:rotate-45 after:rounded-full after:bg-white/[0.07] after:content-[''] sm:px-12 lg:py-14"
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
    </article>
  );
}

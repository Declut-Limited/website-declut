"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import { getAppStage } from "@/lib/app-stage";
import WaitlistModal from "@/components/ui/WaitlistModal";
import AppDownloadModal from "@/components/ui/AppDownloadModal";

const navLinks = [
  { href: "/#home", label: "Home" },
  { href: "/#how-it-works", label: "How Declut Works" },
  { href: "/#about", label: "About Us" },
];

const stage = getAppStage();
const ctaLabel = stage === "waitlist" ? "Join Waitlist" : "Get the App";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("/#home");
  const [isCtaModalOpen, setIsCtaModalOpen] = useState(false);

  const handleNavClick = (href: string) => {
    setActive(href);
    setIsOpen(false);
  };

  const openCtaModal = () => {
    setIsOpen(false);
    setIsCtaModalOpen(true);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-background-light/90 backdrop-blur-sm">
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-300 items-center justify-between px-6 py-3 lg:px-10"
      >
        <Link
          href="/#home"
          onClick={() => handleNavClick("/#home")}
          className="flex items-center gap-2 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        >
          <Image
            src="/svg/logo.svg"
            alt=""
            width={30}
            height={30}
            priority
            className="rounded-full"
          />
          <span className="text-base font-extrabold text-ink">Declut</span>
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => handleNavClick(link.href)}
                aria-current={active === link.href ? "page" : undefined}
                className={`relative text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm ${
                  active === link.href
                    ? "text-primary"
                    : "text-ink/80 hover:text-primary"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={openCtaModal}
          className="hidden rounded-full bg-primary-50 px-6 py-2.5 text-sm font-semibold text-primary shadow-sm transition-colors hover:bg-primary-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 md:block"
        >
          {ctaLabel}
        </button>

        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          className="rounded-md p-2 text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary md:hidden"
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-t border-ink/10 bg-background-light md:hidden"
          >
            <ul className="flex flex-col gap-1 px-6 py-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className={`block rounded-md px-2 py-2 text-base font-medium ${
                      active === link.href ? "text-primary" : "text-ink/80"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <button
                  type="button"
                  onClick={openCtaModal}
                  className="inline-block w-full rounded-full bg-primary-50 px-5 py-2.5 text-center text-base font-semibold text-primary transition-colors hover:bg-primary-100"
                >
                  {ctaLabel}
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      {stage === "waitlist" ? (
        <WaitlistModal open={isCtaModalOpen} onOpenChange={setIsCtaModalOpen} />
      ) : (
        <AppDownloadModal open={isCtaModalOpen} onOpenChange={setIsCtaModalOpen} />
      )}
    </header>
  );
}

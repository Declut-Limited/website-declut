"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#how-it-works", label: "How Declut Works" },
  { href: "#about", label: "About Us" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("#home");

  const handleNavClick = (href: string) => {
    setActive(href);
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-primary-100/60 bg-background-light/90 backdrop-blur-sm">
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10"
      >
        <Link href="#home" onClick={() => handleNavClick("#home")} className="flex items-center gap-2 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">
          <Image src="/images/logo.svg" alt="Declut" width={44} height={44} priority />
        </Link>

        <ul className="hidden items-center gap-9 md:flex">
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

        <motion.a
          href="#contact"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
          className="hidden rounded-full bg-gold-primary px-6 py-2.5 text-sm font-semibold text-ink shadow-sm transition-colors hover:bg-gold-primary-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 md:block"
        >
          Contact Us
        </motion.a>

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
            className="overflow-hidden border-t border-primary-100/60 bg-background-light md:hidden"
          >
            <ul className="flex flex-col gap-1 px-6 py-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className={`block rounded-md px-2 py-2.5 text-base font-medium ${
                      active === link.href ? "text-primary" : "text-ink/80"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="inline-block w-full rounded-full bg-gold-primary px-6 py-2.5 text-center text-sm font-semibold text-ink transition-colors hover:bg-gold-primary-dark"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

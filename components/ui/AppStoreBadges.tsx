"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type Badge = {
  href: string;
  icon: string;
  iconDark?: string;
  iconWidth: number;
  iconHeight: number;
  eyebrow: string;
  label: string;
  alt: string;
};

const badges: Badge[] = [
  {
    href: "#",
    icon: "/svg/GooglePlay.svg",
    iconWidth: 24,
    iconHeight: 26,
    eyebrow: "GET IT ON",
    label: "Google Play",
    alt: "Get Declut on Google Play",
  },
  {
    href: "#",
    icon: "/svg/AppleIcon.svg",
    iconDark: "/svg/AppleIconWhite.svg",
    iconWidth: 19,
    iconHeight: 23,
    eyebrow: "Download on the",
    label: "App Store",
    alt: "Download Declut on the App Store",
  },
];

export default function AppStoreBadges({
  className = "",
  variant = "dark",
}: {
  className?: string;
  variant?: "dark" | "light";
}) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {badges.map((badge) => (
        <motion.a
          key={badge.label}
          href={badge.href}
          aria-label={badge.alt}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
          className={`flex items-center gap-2 rounded-full px-4 py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
            variant === "dark"
              ? "bg-black text-white focus-visible:ring-primary focus-visible:ring-offset-background"
              : "bg-white text-ink focus-visible:ring-white focus-visible:ring-offset-primary"
          }`}
        >
          <Image
            src={variant === "dark" ? (badge.iconDark ?? badge.icon) : badge.icon}
            alt=""
            width={badge.iconWidth}
            height={badge.iconHeight}
            className="h-5 w-auto"
          />
          <span className="flex flex-col items-start leading-none">
            <span className={`text-[9px] ${variant === "light" ? "text-ink/50" : ""}`}>
              {badge.eyebrow}
            </span>
            <span className="text-sm font-semibold">{badge.label}</span>
          </span>
        </motion.a>
      ))}
    </div>
  );
}

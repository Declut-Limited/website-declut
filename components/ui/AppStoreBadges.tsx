"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const badges = [
  {
    href: "#",
    src: "/images/playstore.png",
    alt: "Get Declut on Google Play",
  },
  {
    href: "#",
    src: "/images/appstore.png",
    alt: "Download Declut on the App Store",
  },
];

export default function AppStoreBadges({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {badges.map((badge) => (
        <motion.a
          key={badge.src}
          href={badge.href}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
          className="block rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          <Image
            src={badge.src}
            alt={badge.alt}
            width={150}
            height={44}
            className="h-11 w-auto rounded-lg"
          />
        </motion.a>
      ))}
    </div>
  );
}

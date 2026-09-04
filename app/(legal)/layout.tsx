import type { ReactNode } from "react";
import Navbar from "@/components/sections/Navbar";
import AnnouncementBanner from "@/components/ui/AnnouncementBanner";
import Footer from "@/components/Footer";

export default function LegalLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      <AnnouncementBanner />
      <main className="mx-auto max-w-300 px-6 py-16 lg:px-10 lg:py-20">
        {children}
      </main>
      <Footer />
    </>
  );
}

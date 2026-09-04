import type { ReactNode } from "react";
import Navbar from "@/components/sections/Navbar";
import AnnouncementBanner from "@/components/ui/AnnouncementBanner";
import Footer from "@/components/Footer";

export default function LegalLayout({ children }: { children: ReactNode }) {
  return (
    <div className="bg-white">
      <Navbar />
      <AnnouncementBanner />
      <main className="mx-auto max-w-275 px-6 py-16 lg:px-10 lg:py-12">
        {children}
      </main>
      <Footer />
    </div>
  );
}

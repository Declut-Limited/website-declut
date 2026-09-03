import Navbar from "@/components/sections/Navbar";
import AnnouncementBanner from "@/components/ui/AnnouncementBanner";
import Hero from "@/components/sections/Hero";
import SocialProofBand from "@/components/sections/SocialProofBand";
import FeaturedItems from "@/components/sections/FeaturedItems";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import BenefitsForSellers from "@/components/sections/BenefitsForSellers";
import BenefitsForBuyers from "@/components/sections/BenefitsForBuyers";
import HowDeclutWorks from "@/components/sections/HowDeclutWorks";
import FAQs from "@/components/sections/FAQs";
import AboutUs from "@/components/sections/AboutUs";
import Testimonials from "@/components/sections/Testimonials";
import ClosingCTA from "@/components/sections/ClosingCTA";
import Footer from "@/components/Footer";
import React from "react";

export default function Home() {
  return (
    <React.Fragment>
      <Navbar />
      <AnnouncementBanner />
      <main>
        <Hero />
        <SocialProofBand />
        <FeaturedItems />
        <WhyChooseUs />
        <BenefitsForSellers />
        <BenefitsForBuyers />
        <HowDeclutWorks />
        <FAQs />
        <AboutUs />
        <Testimonials />
        <ClosingCTA />
      </main>
      <Footer />
    </React.Fragment>
  );
}

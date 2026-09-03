import Navbar from "@/components/sections/Navbar";
import AnnouncementBanner from "@/components/ui/AnnouncementBanner";
import Hero from "@/components/sections/Hero";
import SocialProofBand from "@/components/sections/SocialProofBand";
import FeaturedItems from "@/components/sections/FeaturedItems";
// import WhyChooseUs from "@/components/sections/WhyChooseUs";
import WhyDeclut from "@/components/sections/WhyDeclut";
import HowDeclutWorks from "@/components/sections/HowDeclutWorks";
import FAQs from "@/components/sections/FAQs";
import AboutUs from "@/components/sections/AboutUs";
import Testimonials from "@/components/sections/Testimonials";
import GetInTouch from "@/components/sections/GetInTouch";
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
        <WhyDeclut />
        <HowDeclutWorks />
        <FAQs />
        <AboutUs />
        <ClosingCTA />
        <Testimonials />
        <GetInTouch />
      </main>
      <Footer />
    </React.Fragment>
  );
}

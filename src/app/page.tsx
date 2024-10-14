import Solution from "@/components/About/Solution";
import Delivery from "@/components/About/Delivery";
import Support from "@/components/About/Support";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import Choice from "@/components/Choice";
import Offers from "@/components/Offers";
import Services from "@/components/Services";
import Choose from "@/components/Choose";
import { Metadata } from "next";

/* export const metadata: Metadata = {
  title: "Laundry and Dry Cleaning in LonDon",
  description: "Laundry and Dry Cleaning in LonDon",
  // other metadata
}; */

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Features />
      <Services />
      <Offers />
      <Choose/>
      <Video />
      <Choice />
      <Solution />
      <Delivery />
      <Support />
      {/* <Video />
      <Brands />
      <AboutSectionOne />
      <AboutSectionTwo /> */}
      <Testimonials />
      {/* <Pricing />
      <Blog />
      <Contact /> */}
    </>
  );
}

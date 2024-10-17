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
import Products from "@/components/Products";
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
      <Products />
      <Offers />
      <Choose/>
      <Video />
      <Choice />
      <Contact />
      {/*
      <Brands />
      <AboutSectionOne />
      <AboutSectionTwo /> 
      <Testimonials />
      <Pricing />
      <Blog />
      <Contact /> */}
    </>
  );
}

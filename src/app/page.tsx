import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact/Contact";
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
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

export const metadata: Metadata = {
  title: "Technical Wallet | Architectural Digital Products & Service",
  description: "Technical Wallet | Architectural Digital Products & Service",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ToastContainer />
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

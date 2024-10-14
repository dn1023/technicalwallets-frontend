import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Laundry and Dry Cleaning in LonDon",
  description: "Laundry and Dry Cleaning in LonDon",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <div className="pt-[80px]"></div>
      <Contact />
    </>
  );
};

export default ContactPage;

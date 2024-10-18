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
      <Breadcrumb
        pageName="Contact"
        description="We&apos;d love to hear from you! Whether you have questions about our digital architectural products, need support, or want to discuss a potential project, our team is here to help."
      />
      <Contact />
    </>
  );
};

export default ContactPage;

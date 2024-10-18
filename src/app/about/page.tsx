import Breadcrumb from "@/components/Common/Breadcrumb";
import About from "@/components/About/About";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Technical Wallet | Architectural Digital Products & Service",
  description: "Technical Wallet | Architectural Digital Products & Service",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About"
        description="Technical Wallet provides a variety of design services that cater to different styles and needs, ensuring visually appealing and functional solutions for both residential and commercial spaces."
      />
      <About />
    </>
  );
};

export default ContactPage;
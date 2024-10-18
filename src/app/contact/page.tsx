import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";
import ContactDescription from "@/components/Contact/ContactDescription";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Technical Wallet",
  description: "Technical Wallet | Architectural Digital Products & Service",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact"
        description="Welcome to Technical Wallet! Whether you have questions about our architectural designs, need assistance with an order, or are interested in custom services, we&apos;re here to help."
      />
      <ContactDescription />
      <Contact />
    </>
  );
};

export default ContactPage;

import Breadcrumb from "@/components/Common/Breadcrumb";
import ContactOfPage from "@/components/Contact/ContactOfPage";
import ContactDescription from "@/components/Contact/ContactDescription";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Technical Wallet | Architectural Digital Products & Service",
  description: "Technical Wallet | Architectural Digital Products & Service",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <div className="min-h-[300px] bg-[url('/images/background/helmet-drafting-tools_23-2147785530.jpg')] bg-cover bg-left-top bg-no-repeat">
        <Breadcrumb
          pageName="Contact"
          description="Welcome to Technical Wallet! Whether you have questions about our architectural designs, need assistance with an order, or are interested in custom services, we&apos;re here to help."
        />
      </div>
      <ContactDescription />
      <ContactOfPage />
    </>
  );
};

export default ContactPage;

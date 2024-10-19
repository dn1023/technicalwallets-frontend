import Breadcrumb from "@/components/Common/Breadcrumb";
import Stamp from "@/components/Stamp";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Technical Wallet | Architectural Digital Products & Service",
  description: "Technical Wallet | Architectural Digital Products & Service",
  // other metadata
};

const StampPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Get Stamp"
        description="At Technical Wallet, we believe that every architectural design deserves recognition. Our digital stamp feature allows you to showcase your work with pride and professionalism."
      />
      <Stamp />
    </>
  );
};

export default StampPage;
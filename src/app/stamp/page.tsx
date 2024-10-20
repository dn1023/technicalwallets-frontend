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
        description="We provide official stamps on drawings, affirming their adherence to professional and regulatory standards."
      />
      <Stamp />
    </>
  );
};

export default StampPage;
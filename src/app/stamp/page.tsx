import Breadcrumb from "@/components/Common/Breadcrumb";
import Stamp from "@/components/Stamp";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Stamp | Technical Wallet | Architectural Digital Products & Service",
  description: "Technical Wallet | Architectural Digital Products & Service",
  // other metadata
};

const StampPage = () => {
  return (
    <>
      <div className="min-h-[300px] bg-[url('/images/background/16.png')] bg-cover bg-left-center bg-no-repeat">
        <Breadcrumb
          pageName="Get Stamp"
          description="We provide official stamps on drawings, affirming their adherence to professional and regulatory standards."
        />
      </div>
      <Stamp />
    </>
  );
};

export default StampPage;
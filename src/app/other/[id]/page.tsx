import Breadcrumb from "@/components/Common/Breadcrumb";
import Other from "@/components/Other/Other";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Convert & Prepare | Technical Wallet | Architectural Digital Products & Service",
  description: "Technical Wallet | Architectural Digital Products & Service",
  // other metadata
};

//const ProductDetailsPage = () => {
const OtherPage = ({ params }) => {
  return (
    <Other params={params.id} />
  );
};

export default OtherPage;
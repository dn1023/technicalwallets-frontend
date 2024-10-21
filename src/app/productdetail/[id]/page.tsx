import Breadcrumb from "@/components/Common/Breadcrumb";
import Product from "@/components/Product/Product";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Product Detail | Technical Wallet | Architectural Digital Products & Service",
  description: "Technical Wallet | Architectural Digital Products & Service",
  // other metadata
};

//const ProductDetailsPage = () => {
const ProductDetailsPage = ({ params }) => {
  return (
    <>
      <div className="min-h-[300px] bg-[url('/images/background/helmet-drafting-tools_23-2147785530.jpg')] bg-cover bg-left-top bg-no-repeat">
        <Breadcrumb
          pageName="Product Detail"
          description="We offer a range of innovative digital architectural products designed to enhance your design process and improve project outcomes."
        />
      </div>
      <Product params={params.id} />
    </>
  );
};

export default ProductDetailsPage;

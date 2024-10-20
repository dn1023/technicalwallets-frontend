import { useSearchParams } from 'next/navigation';
import SectionTitle from "@/components/Common/SectionTitle";
import SingleProduct from "@/components/Products/SingleProduct";
import productsData from "@/components/Products/productsData";
import { Suspense } from 'react'
import Breadcrumb from "@/components/Common/Breadcrumb";
import ProductsOfPage from "@/components/Products/ProductsOfPage";
import { Metadata } from "next";

/* function Search() {
  const searchParams = useSearchParams();
  const format = searchParams.get('format');
  const page = searchParams.get('page');
  return format;
} */
export const metadata: Metadata = {
  title: "Products | Technical Wallet | Architectural Digital Products & Service",
  description: "Technical Wallet | Architectural Digital Products & Service",
  // other metadata
};

const Products = ({ params }) => {
  return (
    <>
      <Breadcrumb
        pageName="Products"
        description="We offer a range of innovative digital architectural products designed to enhance your design process and improve project outcomes."
      />
      {/* <div className="w-full max-w-[800px] mb-[50px]">
        <p className="text-base !leading-relaxed text-body-color md:text-lg uppercase">
          /HOME/CATEGORY/
          <Suspense>
            <Search />
          </Suspense>
        </p>
        <h2 className="mb-4 text-3xl uppercase font-bold !leading-tight text-amber-500 dark:text-body-color-dark sm:text-4xl md:text-[45px]">
          Products
        </h2>
      </div> */}
      <ProductsOfPage params={params.id} />
      {/* <section id="products" className="dark:bg-gray-dark py-16 md:py-20 lg:py-28">
        <div className="container">
          <div className="grid grid-cols-1 md:gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {productsData.map((product) => (
              <SingleProduct key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section> */}
    </>
  );
};

export default Products;
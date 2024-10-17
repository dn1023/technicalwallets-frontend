import Link from "next/link";
import SectionTitle from "../Common/SectionTitle";
import SingleProduct from "./SingleProduct";
import productsData from "./productsData";
import wave from './../../../public/images/offers/wave-white-gray.svg'

const Products = () => {
  return (
    <>
      <section id="products" className="dark:bg-gray-dark py-16 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle
            title="Here are our some digital produts"
            paragraph="Featured Products"
            center
          />
          <div className="grid grid-cols-1 md:gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {productsData.map((product) => (
              <SingleProduct key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;

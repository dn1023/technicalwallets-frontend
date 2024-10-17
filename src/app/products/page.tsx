'use client';
import { useEffect, useState } from "react";
import { useSearchParams  } from 'next/navigation';
import SectionTitle from "@/components/Common/SectionTitle";
import SingleProduct from "@/components/Products/SingleProduct";
import productsData from "@/components/Products/productsData";

const Products = () => {
  const searchParams = useSearchParams()
  const [hash, setHash] = useState('');

  useEffect(() => {
    // Access the hash fragment
    setHash(window.location.hash);
  }, []);

  const format = searchParams.get('format');
  const page = searchParams.get('page');

  return (
    <section id="products" className="dark:bg-gray-dark py-16 md:py-20 lg:py-28">
        <div className="container">
          <div className="w-full max-w-[800px] mb-[50px]">
            <p className="text-base !leading-relaxed text-body-color md:text-lg uppercase">
              /HOME/CATEGORY/SUBCATEGORy
            </p>
            <h2 className="mb-4 text-3xl uppercase font-bold !leading-tight text-amber-500 dark:text-body-color-dark sm:text-4xl md:text-[45px]">
              Products
            </h2>
          </div>
          <div className="grid grid-cols-1 md:gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {productsData.map((product) => (
              <SingleProduct key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
  );
};

export default Products;
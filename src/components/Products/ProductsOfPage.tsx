'use client';
import { useEffect, useState } from "react";
import { useSearchParams } from 'next/navigation';
import SectionTitle from "@/components/Common/SectionTitle";
import SingleProduct from "@/components/Products/SingleProduct";
import productsData from "@/components/Products/productsData";
import { Suspense } from 'react'
import Breadcrumb from "@/components/Common/Breadcrumb";
import ProductService from "@/api/product.service";
import { Empty, Image as ImageAnd, Modal } from 'antd';

/* function Search() {
  const searchParams = useSearchParams();
  const format = searchParams.get('format');
  const page = searchParams.get('page');
  return format;
} */

interface Props {
  params: string;
}

const ProductsOfPage = (props: Props) => {

  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    //toast.success("Saved successfully!")
    const catalogs = props.params.replace(/_/g, " ").split("%3D");;
    setProducts([]);
    setLoading(false);
    const fetchProducts = async () => {
      const res = await ProductService.getAllByCategory(catalogs[0], catalogs[1], catalogs[2]);
      if (res !== undefined) {
        if (res?.length > 0) {
          setProducts(res);
          setLoading(res?.length > 0);
          // Navigate on success
          // Example: router.push('/'); // Assuming you have a router instance available
        }
      }
    };
    fetchProducts().catch(error => console.error('Failed to fetch products:', error));
  }, []);

  return (
    <>
      <section id="products" className="dark:bg-gray-dark py-16 md:py-20 lg:py-28">
        <div className="container mb-[50px] md:mb-[150px] ">
          <div className="grid grid-cols-1 md:gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {products.map((product) => (
              <SingleProduct key={product.id} product={product} />
            ))}
          </div>
          {
            !loading &&
            <div className="min-h-[300px] flex items-center justify-center"><Empty /></div>
          }
        </div>
      </section>
    </>
  );
};

export default ProductsOfPage;
'use client';
import Link from "next/link";
import SectionTitle from "../Common/SectionTitle";
import SingleProduct from "./SingleProduct";
import productsData from "./productsData";
import wave from './../../../public/images/offers/wave-white-gray.svg'
import { useState, useEffect } from 'react';
import ProductService from "@/api/product.service";
import { Empty, Image as ImageAnd } from 'antd';

//This component is for first page.
const Products = () => {

  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts([]);
    setLoading(false);
    const fetchProducts = async () => {
      const res = await ProductService.getSome();
      if (res !== undefined) {
        if (res?.length > 0) {
          setProducts(res);
          setLoading(res?.length > 0);
        }
      }
    };
    fetchProducts().catch(error => console.error('Failed to fetch products:', error));
  }, []);

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

export default Products;

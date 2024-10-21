'use client';
import Link from "next/link";
import SectionTitle from "../Common/SectionTitle";
import SingleProduct from "./SingleProduct";
import { useState, useEffect } from 'react';
import ProductService from "@/api/product.service";
import { Empty, Image as ImageAnd } from 'antd';
import Image from "next/image";

//This component is for first page.
const HeroProducts = () => {
  const API = process.env.NEXT_PUBLIC_BACKEND_API;
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
      <section id="heroproducts" className="dark:bg-gray-dark pt-2 pb-16 md:pb-20 lg:pb-28">
        <div className="w-full grid grid-flow-row-dense grid-cols-1 md:grid-cols-3 gap-2">
          {products.map((product) => (
            <SingleProduct key={product.id} product={product} />
          ))}
          {
            !loading &&
            <div className="w-full min-h-[300px] flex items-center justify-center"><Empty /></div>
          }
        </div>
        {/* <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {products.map((src, index) => (
            <div key={index} className="relative w-full h-48 overflow-hidden rounded-lg">
              <Image src={API + "products/" + src.coverimage} alt={`Image ${index + 1}`} layout="fill" objectFit="cover" />
            </div>
          ))}
        </div> */}
      </section>
    </>
  );
};

export default HeroProducts;

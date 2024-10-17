'use client';
import SharePost from "@/components/Blog/SharePost";
import TagButton from "@/components/Blog/TagButton";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from 'react';
import { Metadata } from "next";
import { Image as ImageAnd } from 'antd';
import { useRouter  } from 'next/navigation';

import SingleProduct from "@/components/Products/SingleProduct";
import productsData from "@/components/Products/productsData";
/* export const metadata: Metadata = {
  title: "Product Details Page | ETA-USA",
  description: "This is Product Details Page for ETA-USA",
  // other metadata
}; */

//const ProductDetailsPage = () => {
function ProductDetailsPage({ params }) {
  const router = useRouter();
  console.log(params.id);
  const [products, setProducts] = useState([]);
  const [show, setShow] = useState(false);
  useEffect(() => {
    fetch(process.env.dbHost + '/api/product/individual', {
      method: 'POST',
      body: JSON.stringify({ category: params.id }),
      headers: { 'Content-Type': 'application/json' },
      credentials: 'same-origin',
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.length > 0) {
          setShow(true);
          setProducts(data);
        }
        else {
          setShow(false);
        }

        //setIsAdmin(data == "Admin Content." ? true : false);
        //console.log(data);
      })
  }, []);

  return (
    <>
      <section id="product" className="pb-[100px] pt-[100px]">
        <div className="container">
          {/* <div className="flex flex-wrap justify-between">
            <button
              onClick={()=> router.back()}
              className="inline-flex items-center justify-center rounded-lg bg-amber-500 px-7 py-3 text-sm font-semibold text-white"
            >
              Back
            </button>
            <button
              onClick={()=> router.forward()}
              className="inline-flex items-center justify-center rounded-lg bg-amber-500 px-7 py-3 text-sm font-semibold text-white"
            >
              Next
            </button>
          </div> */}
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4 lg:w-8/12 pb-[20px]">
              <div className="mx-auto w-full flex flex-wrap items-center justify-center">
                {/* <Image 
                  src="/images/product/3d-rendering-wooden-house_23-2151264480.jpg" 
                  alt="Picture of the product" 
                  style={{objectFit: "cover"}} 
                  width={600} 
                  height={600}
                /> */}
                <ImageAnd.PreviewGroup
                  items={[
                    '/images/product/luxurious-villa-with-modern-architectural-design_23-2151694040.jpg',
                    '/images/product/photorealistic-house-with-wooden-architecture-timber-structure_23-2151302598.jpg',
                    '/images/product/3d-rendering-wooden-house_23-2151264400.jpg',
                  ]}
                >
                  <ImageAnd
                    width={600}
                    src="/images/product/3d-rendering-wooden-house_23-2151264480.jpg"
                  />
                </ImageAnd.PreviewGroup>
                {/* className="object-cover object-center" <Image src="/images/services/trans.png" alt="offer image" className="absolute" width={300} height={450} /> */}
              </div>
            </div>
            <div className="w-full px-4 lg:w-4/12 max-w-[600px] pt-[20px] lg:pt-0">
              <div>
                <p className="text-sm !leading-relaxed text-body-color uppercase">A Harmony of Nature and Comfort</p>
                <div className="mb-8 text-xl font-bold leading-tight text-black dark:text-white sm:text-xl sm:leading-tight">
                  Arafed Wooden Deck with Couch Table Garden
                </div>
                <div className="mb-10 flex flex-wrap items-center justify-between border-b border-body-color border-opacity-10 pb-4 dark:border-white dark:border-opacity-10">
                  <div className="flex flex-wrap items-center">
                    <div className="mb-5 flex items-center">
                      <div className="flex text-base font-medium text-body-color">
                        <p className="line-through">$56222USD</p>
                        &nbsp;&nbsp;&nbsp;<p>$458525USD</p>
                      </div>
                    </div>
                  </div>
                  <div className="mb-5">
                    <div
                      className="inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white"
                    >
                      Design
                    </div>
                  </div>
                </div>
                <div>
                  <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:leading-relaxed lg:leading-relaxed xl:leading-relaxed">
                    The **Arafed Wooden Deck with Couch Table Garden** is the ultimate solution for enhancing your outdoor living space. Crafted from sustainably sourced wood, this deck combines durability with natural beauty, ensuring it withstands the elements while adding elegance to your garden. Its innovative design features a spacious layout that seamlessly integrates a comfortable couch and a functional table, creating an inviting atmosphere for relaxation and social gatherings. 
                  </p>
                  <p className="text-base font-medium leading-relaxed text-body-color sm:leading-relaxed lg:leading-relaxed xl:leading-relaxed">
                    Size: Adjustable
                  </p>
                  <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:leading-relaxed lg:leading-relaxed xl:leading-relaxed">
                    Finish: As per Client request
                  </p>
                </div>
                <div className="flex flex-wrap justify-between">
                  <button
                    onClick={()=> {}}
                    className="bg-amber-500 px-7 py-3 text-base font-semibold text-white transition delay-150 duration-300 ease-in-out hover:bg-amber-500/80 rounded-lg"
                  >
                    Add to cart
                  </button>
                  <button
                    onClick={()=> {}}
                    className="bg-amber-500 px-7 py-3 text-base font-semibold text-white transition delay-150 duration-300 ease-in-out hover:bg-amber-500/80 rounded-lg"
                  >
                    Buy it now
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full max-w-[800px] mb-[50px] pt-[20px] pt-[100px]">
            <h2 className="mb-4 text-3xl font-bold !leading-tight text-amber-500 dark:text-body-color-dark sm:text-4xl md:text-[45px]">
              You may also like:
            </h2>
          </div>
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

export default ProductDetailsPage;

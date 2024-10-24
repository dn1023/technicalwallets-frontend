'use client';
import SharePost from "@/components/Blog/SharePost";
import TagButton from "@/components/Blog/TagButton";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from 'react';
import { Metadata } from "next";
import { Empty, Image as ImageAnd } from 'antd';
import { useRouter } from 'next/navigation';
import ProductService from "@/api/product.service";
import SingleProduct from "@/components/Products/SingleProduct";
import productsData from "@/components/Products/productsData";
import CartService from "@/api/cart.service";
import AuthService from "@/api/auth.service";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

interface Props {
  params: string;
}

const Product = (props: Props) => {

  const API = process.env.NEXT_PUBLIC_BACKEND_API;
  const [product, setProduct] = useState({ title: '', content: '', coverimage: '', oldprice: '', newprice: '', param1: '', param2: '', look: 0, handshake: 0 });
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProduct({ title: '', content: '', coverimage: '', oldprice: '', newprice: '', param1: '', param2: '', look: 0, handshake: 0 });
    setLoading(false);
    const fetchProduct = async () => {
      const res = await ProductService.getById(props.params);
      if (res !== undefined) {
        console.log(res);
        setProduct(res);
      }
    };
    fetchProduct().catch(error => console.error('Failed to fetch products:', error));

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

  const onCart = async () => {
    const userid = AuthService.getCurrentUser() == null ? '0' : AuthService.getCurrentUser().id;
    if (userid == '0') { toast.warn("Please sign in."); return; }
    try {
      //userid, productid, category, subcategory, subsubcategory, name, email, message, phone
      const response = await CartService.register(userid, props.params, '', '', '', '', '', '', '');
      if (response !== undefined) {
        if (response?.message == "Cart registered successfully!") {
          toast.success("Registered successfully!");
        }
        else
          toast.warn(response?.message);
      }
    } catch (error) {
      const resMessage = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
      toast.error("Server connection failed!");
      toast.warning("Please try later.");
    }
  }

  const onBuy = () => {

  }

  return (
    <>
      <ToastContainer />
      <section id="productdetail" className="pb-[100px] pt-[100px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center mb-[50px] md:mb-[150px]">
            <div className="w-full px-4 lg:w-8/12 pb-[20px]">
              <div className="mx-auto w-full rounded-lg flex flex-wrap items-center justify-center">
                {/* <Image 
                  src="/images/product/3d-rendering-wooden-house_23-2151264480.jpg" 
                  alt="Picture of the product" 
                  style={{objectFit: "cover"}} 
                  width={600} 
                  height={600}
                /> */}
                <ImageAnd
                  width={800}
                  src={API + "products/" + product.coverimage}
                  className="rounded-lg"
                />
                {/* <ImageAnd.PreviewGroup
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
                </ImageAnd.PreviewGroup> */}
                {/* className="object-cover object-center" <Image src="/images/services/trans.png" alt="offer image" className="absolute" width={300} height={450} /> */}
              </div>
            </div>
            <div className="w-full px-4 lg:w-4/12 max-w-[600px] pt-[20px] lg:pt-0">
              <div>
                <p className="text-sm !leading-relaxed text-body-color uppercase">Technical Wallet</p>
                <div className="mb-8 text-xl font-bold leading-tight text-black dark:text-white sm:text-xl sm:leading-tight">
                  {product.title}
                </div>
                <div className="mb-10 flex flex-wrap items-center justify-between border-b border-body-color border-opacity-10 pb-4 dark:border-white dark:border-opacity-10">
                  <div className="flex flex-wrap items-center">
                    <div className="mb-5 flex items-center">
                      <div className="flex text-base font-medium text-body-color">
                        <p className="line-through">{Number(product.oldprice) > 0 && `${product.oldprice}USD`}</p>
                        &nbsp;&nbsp;&nbsp;<p>{Number(product.newprice) > 0 && `${product.newprice}USD`}</p>
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
                  <pre className="text-wrap mb-10 text-base font-medium leading-relaxed text-body-color sm:leading-relaxed lg:leading-relaxed xl:leading-relaxed">
                    {product.content}
                  </pre>
                  <p className="text-base font-medium leading-relaxed text-body-color sm:leading-relaxed lg:leading-relaxed xl:leading-relaxed">
                    Size:&nbsp;{product.param1}
                  </p>
                  <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:leading-relaxed lg:leading-relaxed xl:leading-relaxed">
                    Finish:&nbsp;{product.param2}
                  </p>
                </div>
                <div className="flex flex-wrap justify-end">
                  <button
                    onClick={onCart}
                    className="bg-amber-500 px-7 py-3 text-base font-semibold text-white transition delay-150 duration-300 ease-in-out hover:bg-amber-500/80 rounded-lg"
                  >
                    Order
                  </button>
                  {/* <button
                    onClick={() => onBuy}
                    className="bg-amber-500 px-7 py-3 text-base font-semibold text-white transition delay-150 duration-300 ease-in-out hover:bg-amber-500/80 rounded-lg"
                  >
                    Buy it now
                  </button> */}
                </div>
              </div>
            </div>
          </div>
          <div className="w-full max-w-[800px] mb-[50px] pt-[20px] pt-[100px]">
            <h2 className="mb-4 text-2xl font-bold text-black dark:text-white sm:text-3xl">
              You may also like:
            </h2>
          </div>
          <div className="mb-[50px] md:mb-[150px] grid grid-cols-1 md:gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {products.map((product) => (
              <SingleProduct key={product.id} product={product} />
            ))}
            {
              !loading &&
              <div className="min-h-[300px] flex items-center justify-center"><Empty /></div>
            }
          </div>
        </div>
      </section>
    </>
  );
};

export default Product;

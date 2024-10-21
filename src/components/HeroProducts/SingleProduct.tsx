import Image from "next/image";
import { Image as AntdImage } from 'antd';
import { Product } from "@/types/product";
import Link from "next/link";
import { truncateSync } from "fs";
import { useState } from "react";

const SingleProduct = ({ product }: { product: Product }) => {

  const API = process.env.NEXT_PUBLIC_BACKEND_API;
  const { id, icon, coverimage, title, oldprice, newprice } = product;
  const [isShow, onIsShow] = useState(false);

  const onShow = () => {

  }

  return (
    <>
      <div onMouseEnter={() => onIsShow(true)} onMouseLeave={() => onIsShow(false)} className="relative w-full min-h-[800px] overflow-hidden rounded-lg">
        <Image
          src={API + "products/" + coverimage}
          alt="Picture of the product"
          className="object-contain"
          fill={true}
          style={{ objectFit: "cover" }}
        />

        {
          isShow &&
          <>
            <div className="absolute inset-0 text-center">
              <div className="w-full p-10 bg-black/80 text-white flex items-center justify-center">
                {title}
              </div>
            </div>
            <div className="absolute bottom-0 w-full">
              <div className="px-5 h-[100px] bg-black/80 text-white flex items-center justify-between">
                <div className="flex"><p className="line-through">${oldprice}USD</p>&nbsp;&nbsp;&nbsp;<p>${newprice}USD</p></div>
                <div className="flex"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffffff"><path d="M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z" /></svg>&nbsp;230</div>
              </div>
            </div>
          </>
        }

        <div className="absolute inset-0 w-full min-h-[800px] flex items-center justify-center  transition duration-200 hover:bg-black/30">
          <Link
            href={"/productdetail/" + id}
            className="w-full h-full"
          >
          </Link>
        </div>
      </div>

    </>
  );
};

export default SingleProduct;

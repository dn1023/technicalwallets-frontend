import Image from "next/image";
import { Product } from "@/types/product";
import Link from "next/link";

const SingleProduct = ({ product }: { product: Product }) => {
  const { id, icon, image, title, oldprice, newprice } = product;
  return (
    <>
      <div className="w-full flex items-center justify-center">
        <div className="relative h-[450px] transition duration-200 hover:-translate-y-2">
          <div className="wow fadeInUp flex justify-center items-center text-center saturate-50 hover:filter-none shadow-2xl" data-wow-delay=".15s">
            <div className="mx-auto w-full md:w-[300px] flex flex-wrap items-center justify-center">
              <Image src={image} alt="Picture of the product" style={{objectFit: "cover"}} width={300} height={450} />
              {/* <Image src="/images/services/trans.png" alt="offer image" className="absolute" width={300} height={450} /> */}
            </div>
            <div className="absolute inset-0 text-center">
              <div className=" w-full md:w-[300px] p-3 bg-black/80 text-white flex items-center justify-center">
                {title}
              </div>
            </div>
            <div className="absolute bottom-0 w-full md:w-[300px]">
              <div className="px-5 h-[60px] bg-black/80 text-white flex items-center justify-between">
                <div className="flex"><p className="line-through">{oldprice}$</p>&nbsp;&nbsp;&nbsp;<p>{newprice}$</p></div>
                <div className="flex"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffffff"><path d="M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z"/></svg>&nbsp;230</div>
              </div>
            </div>
            <div className="absolute inset-0 w-full md:w-[300px] h-[450px] flex items-center justify-center">
              <div className="p-bg-black/80 text-white flex items-center justify-center">
                <Link
                  href="/order"
                  className="bg-black/80 px-8 py-4 text-base font-semibold text-white transition delay-150 duration-300 ease-in-out hover:bg-black rounded-md"
                >
                  Detail
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;

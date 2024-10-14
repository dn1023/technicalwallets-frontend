"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Coupon = ({ updateCoupon }) => {

  const [code, setcode] = useState('');

  useEffect(() => {
    updateCoupon(code);
  }, [code])


  return (
    <>
      <div className="p-8 rounded-lg shadow-three bg-white dark:bg-gray-dark">
        <h1 className="mb-8 text-2xl font-bold leading-tight text-black dark:text-body-color-dark sm:text-4xl sm:leading-tight">
          Coopen Code
        </h1>
        <div className="w-full">
          <div className="mb-5 flex flex-wrap items-center justify-between dark:border-white dark:border-opacity-10">
            {/* <h3 className="pb-2 font-bold leading-tight text-black dark:text-body-color-dark">
              FIRST NAME
            </h3> */}
            <input
              type="text"
              value={code}
              onChange={(e) => setcode(e.target.value)}
              placeholder="Enter coupon code"
              className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Coupon;

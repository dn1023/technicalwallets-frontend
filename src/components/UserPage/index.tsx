'use client';
import RelatedPost from "@/components/Blog/RelatedPost";
import SharePost from "@/components/Blog/SharePost";
import TagButton from "@/components/Blog/TagButton";
import NewsLatterBox from "@/components/Contact/NewsLatterBox";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { useEffect, useState, useCallback } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import Profile from "@/components/Admin/Profile"
import MyOrder from "@/components/Cart/MyOrder"
import { useWindowSize } from "@/hooks/useWindowSize";

const UserPage = () => {
  const size = useWindowSize();
  const [pageIndex, setPageIndex] = useState(0);
  return (
    <>
      <ToastContainer />
      <section className="overflow-hidden">
        <div className="">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 lg:w-3/12 bg-gray-dark">
              <div className="flex items-center justify-left px-8 py-4 pt-8 text-body-color hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="none"><path fill="currentColor" d="M400-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM80-160v-112q0-33 17-62t47-44q51-26 115-44t141-18h14q6 0 12 2-8 18-13.5 37.5T404-360h-4q-71 0-127.5 18T180-306q-9 5-14.5 14t-5.5 20v32h252q6 21 16 41.5t22 38.5H80Zm560 40-12-60q-12-5-22.5-10.5T584-204l-58 18-40-68 46-40q-2-14-2-26t2-26l-46-40 40-68 58 18q11-8 21.5-13.5T628-460l12-60h80l12 60q12 5 22.5 11t21.5 15l58-20 40 70-46 40q2 12 2 25t-2 25l46 40-40 68-58-18q-11 8-21.5 13.5T732-180l-12 60h-80Zm40-120q33 0 56.5-23.5T760-320q0-33-23.5-56.5T680-400q-33 0-56.5 23.5T600-320q0 33 23.5 56.5T680-240ZM400-560q33 0 56.5-23.5T480-640q0-33-23.5-56.5T400-720q-33 0-56.5 23.5T320-640q0 33 23.5 56.5T400-560Zm0-80Zm12 400Z" /></svg>
                <button
                  onClick={() => setPageIndex(0)}
                  className="flex text-base lg:mr-0 lg:inline-flex lg:px-0"
                >
                  &nbsp;&nbsp;My Profile
                </button>
              </div>
              <div className="flex items-center justify-left px-8 py-4 pb-8 text-body-color hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="none"><path fill="currentColor" d="m480-560-56-56 63-64H320v-80h167l-64-64 57-56 160 160-160 160ZM280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM40-800v-80h131l170 360h280l156-280h91L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68.5-39t-1.5-79l54-98-144-304H40Z" /></svg>
                <button
                  onClick={() => setPageIndex(1)}
                  className="flex text-base lg:mr-0 lg:inline-flex lg:px-0"
                >
                  &nbsp;&nbsp;My Cart
                </button>
              </div>
            </div>
            <div className="w-full px-10 lg:w-9/12"
              style={{
                minHeight: `${`${(size.height ?? 600) - 93}px`}`,
              }}
            >
              <div className={`${pageIndex === 0 ? "block" : "hidden"}`}><Profile /></div>
              <div className={`${pageIndex === 1 ? "block" : "hidden"}`}><MyOrder /></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default UserPage;
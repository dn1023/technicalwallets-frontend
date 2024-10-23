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
import UserManagement from "@/components/Admin/UserManagement"
import SubscribeManagement from "@/components/Admin/SubscribeManagement"
import MessageManagement from "@/components/Admin/MessageManagement"
import ScheduleManagement from "@/components/Admin/Setting"
import PaymentManagement from "@/components/Admin/PaymentManagement"
import TimeSlotManagement from "@/components/Admin/TimeSlotManagement"
import ProductManagement from "@/components/Admin/ProductManagement"
/* export const metadata: Metadata = {
  title: "Laundry and Dry Cleaning in LonDon",
  description: "Laundry and Dry Cleaning in LonDon",
  // other metadata
}; */
import { useWindowSize } from "@/hooks/useWindowSize";

const Admin = () => {
  const size = useWindowSize();
  const [pageIndex, setPageIndex] = useState(0);
  return (
    <>
      <ToastContainer />
      <section className="overflow-hidden">
        <div className="">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 pt-[50px] lg:w-3/12 bg-dark">
              <div className="mb-10">
                <div className="flex items-center justify-left border-b border-body-color border-opacity-10 px-8 py-8 text-body-color hover:text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="none"><path fill="currentColor" d="M400-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM80-160v-112q0-33 17-62t47-44q51-26 115-44t141-18h14q6 0 12 2-8 18-13.5 37.5T404-360h-4q-71 0-127.5 18T180-306q-9 5-14.5 14t-5.5 20v32h252q6 21 16 41.5t22 38.5H80Zm560 40-12-60q-12-5-22.5-10.5T584-204l-58 18-40-68 46-40q-2-14-2-26t2-26l-46-40 40-68 58 18q11-8 21.5-13.5T628-460l12-60h80l12 60q12 5 22.5 11t21.5 15l58-20 40 70-46 40q2 12 2 25t-2 25l46 40-40 68-58-18q-11 8-21.5 13.5T732-180l-12 60h-80Zm40-120q33 0 56.5-23.5T760-320q0-33-23.5-56.5T680-400q-33 0-56.5 23.5T600-320q0 33 23.5 56.5T680-240ZM400-560q33 0 56.5-23.5T480-640q0-33-23.5-56.5T400-720q-33 0-56.5 23.5T320-640q0 33 23.5 56.5T400-560Zm0-80Zm12 400Z" /></svg>
                  <button
                    onClick={() => setPageIndex(0)}
                    className="flex text-base lg:mr-0 lg:inline-flex lg:px-0"
                  >
                    &nbsp;&nbsp;Profile
                  </button>
                </div>
                <ul className="p-8 text-body-color">
                  <li className="mb-6 pb-6 flex items-center justify-left hover:text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="none"><path fill="currentColor" d="M40-160v-112q0-34 17.5-62.5T104-378q62-31 126-46.5T360-440q66 0 130 15.5T616-378q29 15 46.5 43.5T680-272v112H40Zm720 0v-120q0-44-24.5-84.5T666-434q51 6 96 20.5t84 35.5q36 20 55 44.5t19 53.5v120H760ZM360-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Zm400-160q0 66-47 113t-113 47q-11 0-28-2.5t-28-5.5q27-32 41.5-71t14.5-81q0-42-14.5-81T544-792q14-5 28-6.5t28-1.5q66 0 113 47t47 113ZM120-240h480v-32q0-11-5.5-20T580-306q-54-27-109-40.5T360-360q-56 0-111 13.5T140-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T440-640q0-33-23.5-56.5T360-720q-33 0-56.5 23.5T280-640q0 33 23.5 56.5T360-560Zm0 320Zm0-400Z" /></svg>
                    <button
                      onClick={() => setPageIndex(1)}
                      className="text-nowrap flex text-base lg:mr-0 lg:inline-flex lg:px-0"
                    >
                      &nbsp;&nbsp;User Mangement
                    </button>
                  </li>
                  <li className="mb-6 pb-6 flex items-center justify-left hover:text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="none"><path fill="currentColor" d="M560-680v-80h320v80H560Zm0 160v-80h320v80H560Zm0 160v-80h320v80H560Zm-240-40q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35ZM80-160v-76q0-21 10-40t28-30q45-27 95.5-40.5T320-360q56 0 106.5 13.5T522-306q18 11 28 30t10 40v76H80Zm86-80h308q-35-20-74-30t-80-10q-41 0-80 10t-74 30Zm154-240q17 0 28.5-11.5T360-520q0-17-11.5-28.5T320-560q-17 0-28.5 11.5T280-520q0 17 11.5 28.5T320-480Zm0-40Zm0 280Z" /></svg>
                    <button
                      onClick={() => setPageIndex(2)}
                      className="text-nowrap flex text-base lg:mr-0 lg:inline-flex lg:px-0"
                    >
                      &nbsp;&nbsp;Subscribe Mangement
                    </button>
                  </li>
                  <li className="mb-6 pb-6 flex items-center justify-left hover:text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="none"><path fill="currentColor" d="m480-560-56-56 63-64H320v-80h167l-64-64 57-56 160 160-160 160ZM280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM40-800v-80h131l170 360h280l156-280h91L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68.5-39t-1.5-79l54-98-144-304H40Z" /></svg>
                    <button
                      onClick={() => setPageIndex(3)}
                      className="text-nowrap flex text-base lg:mr-0 lg:inline-flex lg:px-0"
                    >
                      &nbsp;&nbsp;Message Mangement
                    </button>
                  </li>
                  <li className="mb-6 pb-6 flex items-center justify-left hover:text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="none"><path fill="currentColor" d="M200-640h560v-80H200v80Zm0 0v-80 80Zm0 560q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v227q-19-9-39-15t-41-9v-43H200v400h252q7 22 16.5 42T491-80H200Zm520 40q-83 0-141.5-58.5T520-240q0-83 58.5-141.5T720-440q83 0 141.5 58.5T920-240q0 83-58.5 141.5T720-40Zm67-105 28-28-75-75v-112h-40v128l87 87Z" /></svg>
                    <button
                      onClick={() => setPageIndex(4)}
                      className="text-nowrap flex text-base lg:mr-0 lg:inline-flex lg:px-0"
                    >
                      &nbsp;&nbsp;Setting
                    </button>
                  </li>
                  <li className="mb-6 pb-6 flex items-center justify-left hover:text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="none"><path fill="currentColor" d="M160-240v-320 13-173 480Zm0-400h640v-80H160v80Zm303 480H160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v213q-35-25-76.5-39T716-560q-57 0-107.5 21.5T520-480H160v240h279q3 21 9 41t15 39Zm213 80-12-60q-12-5-22.5-10.5T620-164l-58 18-40-68 46-40q-2-13-2-26t2-26l-46-40 40-68 58 18q11-8 21.5-13.5T664-420l12-60h80l12 60q12 5 22.5 10.5T812-396l58-18 40 68-46 40q2 13 2 26t-2 26l46 40-40 68-58-18q-11 8-21.5 13.5T768-140l-12 60h-80Zm40-120q33 0 56.5-23.5T796-280q0-33-23.5-56.5T716-360q-33 0-56.5 23.5T636-280q0 33 23.5 56.5T716-200Z" /></svg>
                    <button
                      onClick={() => setPageIndex(5)}
                      className="text-nowrap flex text-base lg:mr-0 lg:inline-flex lg:px-0"
                    >
                      &nbsp;&nbsp;Payment Mangement
                    </button>
                  </li>
                  <li className="mb-6 pb-6 flex items-center justify-left hover:text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="none"><path fill="currentColor" d="m746-584 30-30-76-74v-112h-40v128l86 88ZM178-720h234-234Zm62 280h-80 480-400ZM160-80q-17 0-28.5-11.5T120-120v-82q-20-21-30-46.5T80-300v-380q0-89 82.5-124.5T451-840q-13 18-22.5 38T412-761q-102 2-157.5 12T178-720h225q-3 20-3 40t3 40H160v120h291q17 24 38 44.5t47 35.5H160v120q0 33 23.5 56.5T240-240h320q33 0 56.5-23.5T640-320v-83q20 3 40 3t40-3v103q0 26-10 51.5T680-202v82q0 17-11.5 28.5T640-80h-40q-17 0-28.5-11.5T560-120v-40H240v40q0 17-11.5 28.5T200-80h-40Zm520-400q-83 0-141.5-58.5T480-680q0-82 58-141t142-59q83 0 141.5 58.5T880-680q0 83-58.5 141.5T680-480ZM260-280q25 0 42.5-17.5T320-340q0-25-17.5-42.5T260-400q-25 0-42.5 17.5T200-340q0 25 17.5 42.5T260-280Zm280 0q25 0 42.5-17.5T600-340q0-25-17.5-42.5T540-400q-25 0-42.5 17.5T480-340q0 25 17.5 42.5T540-280Z"/></svg>
                    <button
                      onClick={() => setPageIndex(6)}
                      className="text-nowrap flex text-base lg:mr-0 lg:inline-flex lg:px-0"
                    >
                      &nbsp;&nbsp;TimeSlots Management
                    </button>
                  </li>
                  <li className="flex items-center justify-left hover:text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="none"><path fill="currentColor" d="M620-163 450-333l56-56 114 114 226-226 56 56-282 282Zm220-397h-80v-200h-80v120H280v-120h-80v560h240v80H200q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h167q11-35 43-57.5t70-22.5q40 0 71.5 22.5T594-840h166q33 0 56.5 23.5T840-760v200ZM480-760q17 0 28.5-11.5T520-800q0-17-11.5-28.5T480-840q-17 0-28.5 11.5T440-800q0 17 11.5 28.5T480-760Z"/></svg>
                    <button
                      onClick={() => setPageIndex(7)}
                      className="text-nowrap flex text-base lg:mr-0 lg:inline-flex lg:px-0"
                    >
                      &nbsp;&nbsp;Products Management
                    </button>
                  </li>
                </ul>
              </div>
              {/* <div className="shadow-three dark:bg-gray-dark mb-10 rounded-md bg-white dark:shadow-none">
                <h3 className="border-b border-body-color border-opacity-10 px-8 py-4 text-lg font-semibold text-dark dark:border-white dark:border-opacity-10 dark:text-body-color-dark">
                  Popular Category
                </h3>
                <ul className="px-8 py-6">
                  <li>
                    <a
                      href="#0"
                      className="mb-3 inline-block text-base font-medium text-body-color hover:text-primary"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="#0"
                      className="mb-3 inline-block text-base font-medium text-body-color hover:text-primary"
                    >
                      Feature
                    </a>
                  </li>
                  <li>
                    <a
                      href="#0"
                      className="mb-3 inline-block text-base font-medium text-body-color hover:text-primary"
                    >
                      Offer
                    </a>
                  </li>
                  <li>
                    <a
                      href="#0"
                      className="mb-3 inline-block text-base font-medium text-body-color hover:text-primary"
                    >
                      About
                    </a>
                  </li>
                </ul>
              </div> */}
            </div>
            <div 
              className="w-full px-10 pt-[50px] lg:w-9/12"
              style={{
                minHeight: `${`${(size.height ?? 850) - 90}px`}`,
              }}
            >
              <div className={`${pageIndex === 0 ? "block" : "hidden"}`}><Profile /></div>
              <div className={`${pageIndex === 1 ? "block" : "hidden"}`}><UserManagement /></div>
              <div className={`${pageIndex === 2 ? "block" : "hidden"}`}><SubscribeManagement /></div>
              <div className={`${pageIndex === 3 ? "block" : "hidden"}`}><MessageManagement /></div>
              <div className={`${pageIndex === 4 ? "block" : "hidden"}`}><ScheduleManagement /></div>
              <div className={`${pageIndex === 5 ? "block" : "hidden"}`}><PaymentManagement /></div>
              <div className={`${pageIndex === 6 ? "block" : "hidden"}`}><TimeSlotManagement /></div>
              <div className={`${pageIndex === 7 ? "block" : "hidden"}`}><ProductManagement /></div>
              {/* <div className="shadow-three dark:bg-gray-dark mb-10 mt-12 rounded-md bg-white p-6 dark:shadow-none lg:mt-0">
                <h1 className="mb-8 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight">
                  My Page
                </h1>
                <div className="mb-10 flex flex-wrap items-center justify-between border-b border-body-color border-opacity-10 pb-4 dark:border-white dark:border-opacity-10">

                </div>
                <div>

                </div>
              </div> */}
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Admin;

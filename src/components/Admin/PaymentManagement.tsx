"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

const PaymentManagement = () => {

  const [token, setToken] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {

  }, [])

  return (
    <>
      <div className="p-8 rounded-lg shadow-three bg-white dark:bg-gray-dark">
        <h1 className="mb-8 text-3xl font-bold leading-tight text-dark dark:text-body-color-dark sm:text-4xl sm:leading-tight">
          Payment Management
        </h1>
        <div className="w-full mb-5 flex flex-wrap items-center justify-between dark:border-white dark:border-opacity-10">
          <h3 className="pb-2 font-bold leading-tight text-dark dark:text-body-color-dark">
            Token
          </h3>
          <input
            type="text"
            value={token}
            onChange={(e) => setToken(e.target.value)}
            placeholder="Enter token"
            className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
          />
        </div>
      </div>
    </>
  );
};

export default PaymentManagement;

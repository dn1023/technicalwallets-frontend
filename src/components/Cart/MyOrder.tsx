"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import AuthService from "@/api/auth.service";
import CartService from "@/api/cart.service";
import { Empty } from 'antd';

const MyOrder = () => {

  const [carts, setCarts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [orderId, setOrderId] = useState(0);

  useEffect(() => {
    const user = AuthService.getCurrentUser();
    const fetchData = async () => {
      const res = await CartService.getByUserId(user.id);
      if (res !== undefined) {
        if (res?.length > 0) {
          setCarts(res);
          setLoading(res?.length > 0);
        }
        else {
          toast.warn(res);
        }
      }
    };
    fetchData().catch(error => console.error('Failed to fetch data:', error));
  }, [])

  const onReload = async () => {
    setCarts([]);
    setLoading(false);
    const user = AuthService.getCurrentUser();
    const res = await CartService.getByUserId(user.id);
    if (res !== undefined) {
      if (res?.length > 0) {
        console.log(res);
        setCarts(res);
        setLoading(res?.length > 0);
        toast.success("Reloaded successfully!")
        // Navigate on success
        // Example: router.push('/'); // Assuming you have a router instance available
      }
      else {
        toast.warn(res);
      }
    }
  }

  const onUpdate = (id: string) => {

  }

  return (
    <>
      <div className="p-8 dark:bg-gray-dark">
        <h1 className="mb-8 text-3xl font-bold leading-tight text-dark dark:text-body-color-dark sm:text-4xl sm:leading-tight">
          My Cart
        </h1>
        <div className="w-full mb-5">
          {
            loading ? (
              <table className="w-full border-collapse border border-slate-400 table-auto text-dark dark:text-body-color-dark">
                <thead className="bg-slate-100 dark:bg-gray-dark">
                  <tr>
                    <th className="border border-slate-300 p-3">ProductID</th>
                    <th className="border border-slate-300 p-3">Category</th>
                    <th className="border border-slate-300 p-3">SubCategory</th>
                    <th className="border border-slate-300 p-3">SubSubCategory</th>
                    <th className="border border-slate-300 p-3">Message</th>
                    <th className="border border-slate-300 p-3">Update</th>
                  </tr>
                </thead>
                <tbody>
                  {carts.map((item, index) =>
                    <tr key={index} className="hover:bg-slate-100 dark:hover:bg-black">
                      <td className="border border-slate-300 p-2">{item.productid}</td>
                      <td className="border border-slate-300 p-2">{item.category}</td>
                      <td className="border border-slate-300 p-2">{item.subcategory}</td>
                      <td className="border border-slate-300 p-2">{item.subsubcategory}</td>
                      <td className="border border-slate-300 p-2">{item.message}</td>
                      <td className="border border-slate-300 text-center p-2 hover:text-body-color/70">
                        <button
                          onClick={() => { setIsModalOpen(true); onUpdate(item.id); }}
                        >
                          Update
                        </button>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            ) :
              (
                <div className="min-h-[300px] flex items-center justify-center"><Empty /></div>
              )
          }
        </div>
        <div className="flex flex-row items-center justify-end">
          <button
            onClick={onReload}
            className="rounded-lg bg-amber-500 px-7 py-3 text-base flex items-center justify-center font-semibold text-white duration-300 ease-in-out hover:bg-amber-500/60"
          >
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffffff"><path d="M480-160q-134 0-227-93t-93-227q0-134 93-227t227-93q69 0 132 28.5T720-690v-110h80v280H520v-80h168q-32-56-87.5-88T480-720q-100 0-170 70t-70 170q0 100 70 170t170 70q77 0 139-44t87-116h84q-28 106-114 173t-196 67Z" /></svg>
            &nbsp;Reload&nbsp;&nbsp;
          </button>
        </div>
      </div>
    </>
  );
};

export default MyOrder;

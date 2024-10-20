"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import OrderService from "@/api/order.service";
import Modal from '@/components/Admin/Modal';
import AuthService from "@/api/auth.service";

const MyOrder = () => {

  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [orderId, setOrderId] = useState(0);

  useEffect(() => {
    const fetchOrders = async () => {
      const res = await OrderService.getOrderByUserId(Number(AuthService.getCurrentUser().id));
      if (res !== undefined) {
        //console.log(res);
        if (res?.length > 0) {
          setOrders(res);
          setLoading(res?.length > 0);
          // Navigate on success
          // Example: router.push('/'); // Assuming you have a router instance available
        }
      }
    };
    fetchOrders().catch(error => console.error('Failed to fetch orders:', error));
  }, [])

  const onReload = async () => {
    //toast.success("Saved successfully!")
    setOrders([]);
    setLoading(false);
    const res = await OrderService.getOrderByUserId(Number(AuthService.getCurrentUser().id));
    if (res !== undefined) {
      //console.log(res);
      if (res?.length > 0) {
        setOrders(res);
        setLoading(res?.length > 0);
        // Navigate on success
        // Example: router.push('/'); // Assuming you have a router instance available
      }
      /* else {
        toast.warn(res?.message);
      } */
    }
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
                    <th className="border border-slate-300 p-3">OrderID</th>
                    <th className="border border-slate-300 p-3">CollectionDate</th>
                    <th className="border border-slate-300 p-3 ">CollectionTime</th>
                    <th className="border border-slate-300 p-3">DeliveryDate</th>
                    <th className="border border-slate-300 p-3">DeliveryTime</th>
                    <th className="border border-slate-300 p-3">Detail</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((item, index) =>
                    <tr key={index}>
                      <td className="border border-slate-300 p-2">{item.id}</td>
                      <td className="border border-slate-300 p-2">
                        {
                          new Date(Number(item.collectiondate)).toLocaleDateString('en-US', {
                            weekday: 'short',
                            day: 'numeric',
                            month: 'short'
                          })
                        }
                      </td>
                      <td className="border border-slate-300 p-2">{item.collectiontime}</td>
                      <td className="border border-slate-300 p-2">
                        {
                          new Date(Number(item.deliverydate)).toLocaleDateString('en-US', {
                            weekday: 'short',
                            day: 'numeric',
                            month: 'short'
                          })
                        }
                      </td>
                      <td className="border border-slate-300 p-2">{item.deliverytime}</td>
                      <td className="border border-slate-300 text-center p-2 hover:text-body-color/70">
                        <button
                          onClick={() => { setIsModalOpen(true); setOrderId(item.id); }}
                        >
                          Detail
                        </button>
                      </td>
                    </tr>
                  )}

                </tbody>
              </table>
            ) :
              (
                <span className="w-full text-red">Loading</span>
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
        {isModalOpen &&
          <Modal isOpen={isModalOpen} Id={orderId} onClose={() => setIsModalOpen(false)}>
            <></>
          </Modal>
        }
      </div>
    </>
  );
};

export default MyOrder;

"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import OrderService from "@/api/order.service";
import Modal from '@/components/Admin/Modal';

const ScheduleManagement = () => {

  const [collectionOrders, setCollectionOrders] = useState([]);
  const [deliveryOrders, setDeliveryOrders] = useState([]);

  const [collectionLoading, setCollectionLoading] = useState(false);
  const [deliveryLoading, setDeliveryLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [orderId, setOrderId] = useState(0);

  const [collectionDate, setCollectionDate] = useState(new Date().toISOString().slice(0, 10));
  const [deliveryDate, setDeliveryDate] = useState(new Date().toISOString().slice(0, 10));

  useEffect(() => {
    const fetchCollectionOrders = async () => {
      const res = await OrderService.getAllOrdersByCollectionDate(new Date(collectionDate).getTime());
      if (res !== undefined) {
        if (res?.length > 0) {
          setCollectionOrders(res);
          setCollectionLoading(res?.length > 0);
          // Navigate on success
          // Example: router.push('/'); // Assuming you have a router instance available
        }
      }
    };
    const fetchDeliveryOrders = async () => {
      const res = await OrderService.getAllOrdersByDeliveryDate(new Date(deliveryDate).getTime());
      if (res !== undefined) {
        if (res?.length > 0) {
          setDeliveryOrders(res);
          setDeliveryLoading(res?.length > 0);
          // Navigate on success
          // Example: router.push('/'); // Assuming you have a router instance available
        }
      }
    };
    fetchCollectionOrders().catch(error => console.error('Failed to fetch orders:', error));
    fetchDeliveryOrders().catch(error => console.error('Failed to fetch orders:', error));
  }, [])

  const collectionDateSelectChange = (event) => {
    setCollectionDate(event.target.value);
  }

  const deliveryDateSelectChange = (event) => {
    setDeliveryDate(event.target.value);
  }

  const onCollectionReload = async () => {
    //toast.success("Saved successfully!")
    setCollectionOrders([]);
    setCollectionLoading(false);
    const temp = new Date(collectionDate).getTime();
    const res = await OrderService.getAllOrdersByCollectionDate(temp);
    if (res !== undefined) {
      if (res?.length > 0) {
        setCollectionOrders(res);
        setCollectionLoading(res?.length > 0);
        toast.success("Reloaded successfully!")
        // Navigate on success
        // Example: router.push('/'); // Assuming you have a router instance available
      }
      else {
        toast.warn(res);
      }
    }
  }

  const onDeliveryReload = async () => {
    //toast.success("Saved successfully!")
    setDeliveryOrders([]);
    setDeliveryLoading(false);
    const temp = new Date(deliveryDate).getTime();
    const res = await OrderService.getAllOrdersByDeliveryDate(temp);
    if (res !== undefined) {
      if (res?.length > 0) {
        setDeliveryOrders(res);
        setDeliveryLoading(res?.length > 0);
        toast.success("Reloaded successfully!")
        // Navigate on success
        // Example: router.push('/'); // Assuming you have a router instance available
      }
      else {
        toast.warn(res);
      }
    }
  }

  return (
    <>
      <div className="p-8 rounded-lg shadow-three bg-white dark:bg-gray-dark">
        <h1 className="mb-8 text-3xl font-bold leading-tight text-dark dark:text-body-color-dark sm:text-4xl sm:leading-tight">
          Schedule Management
        </h1>
        <div className="mb-5 flex w-full md:w-[300px] flex-wrap items-center justify-between dark:border-white dark:border-opacity-10">
          <h3 className="pb-2 font-bold leading-tight text-dark dark:text-body-color-dark">
            COLLECTION DATE
          </h3>
          <input
            type="date"
            id="date-input"
            onChange={(e) => collectionDateSelectChange(e)}
            value={collectionDate}
            className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
            name="date"
          />
        </div>
        <div className="w-full mb-5">
          {
            collectionLoading ? (
              <table className="w-full border-collapse border border-slate-400 table-auto dark:text-body-color-dark">
                <thead className="bg-slate-100 dark:bg-black">
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
                  {collectionOrders.map((item, index) =>
                    <tr key={index} className="hover:bg-slate-100 dark:hover:bg-black">
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
        <div className="flex flex-row items-center justify-end mb-10">
          <button
            onClick={onCollectionReload}
            className="rounded-lg bg-amber-500 px-7 py-3 text-base flex items-center justify-center font-semibold text-white duration-300 ease-in-out hover:bg-amber-500/60"
          >
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffffff"><path d="M480-160q-134 0-227-93t-93-227q0-134 93-227t227-93q69 0 132 28.5T720-690v-110h80v280H520v-80h168q-32-56-87.5-88T480-720q-100 0-170 70t-70 170q0 100 70 170t170 70q77 0 139-44t87-116h84q-28 106-114 173t-196 67Z" /></svg>
            &nbsp;Reload&nbsp;&nbsp;
          </button>
        </div>

        <div className="mb-5 flex w-full md:w-[300px] flex-wrap items-center justify-between dark:border-white dark:border-opacity-10">
          <h3 className="pb-2 font-bold leading-tight text-dark dark:text-body-color-dark">
            DELIVERY DATE
          </h3>
          <input
            type="date"
            id="date-input"
            onChange={(e) => deliveryDateSelectChange(e)}
            value={deliveryDate}
            className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
            name="date"
          />
        </div>
        <div className="w-full mb-5">
          {
            deliveryLoading ? (
              <table className="w-full border-collapse border border-slate-400 table-auto dark:text-body-color-dark">
                <thead className="bg-slate-100 dark:bg-black">
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
                  {deliveryOrders.map((item, index) =>
                    <tr key={index} className="hover:bg-slate-100 dark:hover:bg-black">
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
            onClick={onDeliveryReload}
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

export default ScheduleManagement;

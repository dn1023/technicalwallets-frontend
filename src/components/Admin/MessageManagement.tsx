"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import HelpService from "@/api/help.service";
import { Empty } from 'antd';

const MessageManagement = () => {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [orderId, setOrderId] = useState(0);
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));

  useEffect(() => {
    const fetchOrders = async () => {
      const res = await HelpService.getAllByDate(date);
      if (res !== undefined) {
        if (res?.length > 0) {
          setData(res);
          setLoading(res?.length > 0);
          toast.success("Reloaded successfully!")
          // Navigate on success
          // Example: router.push('/'); // Assuming you have a router instance available
        }
        else {
          toast.warn(res);
        }
      }
    };
    fetchOrders().catch(error => console.error('Failed to fetch orders:', error));
  }, [])

  const onReload = async () => {
    //toast.success("Saved successfully!")
    setData([]);
    setLoading(false);
    const res = await HelpService.getAllByDate(date);
    if (res !== undefined) {
      if (res?.length > 0) {
        setData(res);
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

  const onDateSelectChange = async (event) => {
    setDate(event.target.value);
    setLoading(false);
    setData([]);
    const res = await HelpService.getAllByDate(event.target.value);
    if (res !== undefined) {
      if (res?.length > 0) {
        setData(res);
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

  const onDelete = async (id: number) => {
    //toast.success("Saved successfully!")
    const res = await HelpService.delete(id);
    if (res !== undefined) {
      if (res?.message == "Help deleted successfully!") {
        toast.success("Message deleted successfully!")
        onReload();
      }
      else
        toast.warn(res?.message)
    }
  }

  return (
    <>
      <div className="p-8">
        <h1 className="mb-8 text-3xl font-bold leading-tight text-dark dark:text-body-color-dark sm:text-4xl sm:leading-tight">
          Message Management
        </h1>
        <div className="mb-5 flex w-full md:w-[300px] flex-wrap items-center justify-between dark:border-white dark:border-opacity-10">
          <h3 className="pb-2 font-bold leading-tight text-dark dark:text-body-color-dark">
            DATE
          </h3>
          <input
            type="date"
            id="date-input"
            onChange={(e) => onDateSelectChange(e)}
            value={date}
            className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
            name="date"
          />
        </div>
        <div className="w-full mb-5">
          {
            loading ? (
              <table className="w-full border-collapse border border-slate-400 table-auto dark:text-body-color-dark">
                <thead className="bg-slate-100 dark:bg-black">
                  <tr>
                    <th className="border border-slate-300 p-3">UserID</th>
                    <th className="border border-slate-300 p-3">Name</th>
                    <th className="border border-slate-300 p-3">Email</th>
                    <th className="border border-slate-300 p-3">Telephone</th>
                    <th className="border border-slate-300 p-3">Message</th>
                    <th className="border border-slate-300 p-3">Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item, index) =>
                    <tr key={index} className="hover:bg-slate-100 dark:hover:bg-black">
                      <td className="border border-slate-300 p-2">{item.userid}</td>
                      <td className="border border-slate-300 p-2">{item.name}</td>
                      <td className="border border-slate-300 p-2">{item.email}</td>
                      <td className="border border-slate-300 p-2">{item.phone}</td>
                      <td className="border border-slate-300 p-2">{item.message}</td>
                      <td className="border border-slate-300 p-2 text-nowrap">
                        <button
                          onClick={() => onDelete(item.id)}
                        >
                          Delete
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

export default MessageManagement;

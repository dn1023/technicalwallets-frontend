"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import SlotService from "@/api/slot.service";

const TimeSlotManagement = () => {

  const [slots, setSlots] = useState([]);
  const [loading, setLoading] = useState(false);
  const [slot, setSlot] = useState('');

  useEffect(() => {
    const fetchSlots = async () => {
      const res = await SlotService.getAllSlots();
      if (res !== undefined) {
        if (res?.length > 0) {
          setSlots(res);
          setLoading(res?.length > 0);
          // Navigate on success
          // Example: router.push('/'); // Assuming you have a router instance available
        }
      }
    };
    fetchSlots().catch(error => console.error('Failed to fetch slots:', error));
  }, [])

  const onReload = async () => {
    //toast.success("Saved successfully!")
    setSlots([]);
    setLoading(false);
    const res = await SlotService.getAllSlots();
    if (res !== undefined) {
      if (res?.length > 0) {
        setSlots(res);
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

  const onAdd = async () => {
    //toast.success("Saved successfully!")
    setLoading(false);
    try{
      const res = await SlotService.register(slot);
      if (res !== undefined) {
        if (res?.message) {
          onReload();
          toast.success(res?.message);
          setSlot('');
          // Navigate on success
          // Example: router.push('/'); // Assuming you have a router instance available
        }
        else {
          toast.warn(res?.message);
        }
      }
    } catch (error) {
      const resMessage =
        (error.response && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString();
      toast.error("Server connection failed!");
      toast.warning("Please try later.");
    } finally {
      setLoading(false);
    }
  }

  const onDelete = async (id:number) => {
    const res = await SlotService.deleteById(id);
    if (res !== undefined) {
      if (res?.message == "Slot deleted successfully!") {
        toast.success(res?.message);
        onReload();
      }
      else
        toast.warn(res?.message)
    }
  }

  return (
    <>
      <div className="p-8 rounded-lg shadow-three bg-white dark:bg-gray-dark">
        <h1 className="mb-8 text-3xl font-bold leading-tight text-black dark:text-body-color-dark sm:text-4xl sm:leading-tight">
          TimeSlots Management
        </h1>
        <div className="flex flex-row items-justify mb-5 space-x-5">
          <input
            type="text"
            value={slot}
            onChange={(e) => setSlot(e.target.value)}
            placeholder="Enter slot: 19:00-21:00, 08:00"
            className="w-full border-stroke dark:text-body-color-dark dark:shadow-two rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
          />
          <button
            onClick={onAdd}
            className="rounded-lg bg-amber-500 px-7 py-3 text-base flex items-center justify-center font-semibold text-white duration-300 ease-in-out hover:bg-amber-500/60"
          >
            Add
          </button>
        </div>
        <div className="w-full mb-5">
          {
            loading ? (
              <table className="w-full border-collapse border border-slate-400 table-auto">
                <thead className="bg-slate-100 dark:bg-black dark:text-body-color-dark">
                  <tr>
                    <th className="border border-slate-300 p-3">ID</th>
                    <th className="border border-slate-300 p-3">TimeSlot</th>
                    <th className="border border-slate-300 p-3">Operation</th>
                  </tr>
                </thead>
                <tbody className="text-dark dark:text-body-color-dark">
                  {slots.map((item, index) =>
                    <tr key={index} className="hover:bg-slate-100 dark:hover:bg-black">
                      <td className="border border-slate-300 p-2">{item.id}</td>
                      <td className="border border-slate-300 p-2">
                        {item.name}
                      </td>
                      <td className="border border-slate-300 text-center p-2 hover:text-black dark:hover:text-white">
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
      </div>
    </>
  );
};

export default TimeSlotManagement;

import React, { useEffect, useState } from 'react';
import OrderService from "@/api/order.service";

interface ModalProps {
  isOpen: boolean;
  Id: number;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, Id, onClose, children }) => {
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchOrder = async () => {
    const res = await OrderService.getOrderById(Id);
    if (res !== undefined) {
      if (res) {
        setOrder(res);
        setLoading(true);
        // Navigate on success
        // Example: router.push('/'); // Assuming you have a router instance available
      }
    }
  };

  useEffect(() => {
    fetchOrder().catch(error => console.error('Failed to fetch orders:', error));
    //fetchOrder().catch(error => console.error('Failed to fetch orders:', error));
  }, []);

  /* if (!isOpen) return null; */

  return (
    <div className="fixed z-[99999] inset-0 overflow-y-auto">
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 duration-300 ease-in-out bg-gray-200 dark:bg-gray-dark opacity-75"></div>
        </div>
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div className="bg-white dark:bg-black px-4 pt-5 pb-4 sm:p-6 sm:pb-4 text-dark dark:text-body-color-dark">
            {children}
            <div className="text-3xl leading-6 font-medium mb-3 mt-3 text-center">OrderID:  {order?.order?.id}</div>
            <div className="font-bold">Address:</div>
            <div className="mt-2 space-y-2">
              {
                order?.order?.postcode != '' &&
                <p className="">Post Code: {order?.order?.postcode}</p>
              }
              {
                order?.order?.address != '' &&
                <p className="">Address: {order?.order?.address}</p>
              }
              {
                order?.order?.manual != '' &&
                <p className="">Address: {order?.order?.manual}</p>
              }
              {
                order?.order?.detail != '' &&
                <p className="">Address: {order?.order?.detail}</p>
              }
              <p className="">Type: {order?.order?.type}</p>
              {
                order?.order?.hotelname != '' &&
                <p className="">Hotel Name: {order?.order?.hotelname}</p>
              }
              {
                order?.order?.hotelnumber != '' &&
                <p className="">Hotel Number: {order?.order?.hotelnumber}</p>
              }
              {
                order?.order?.positionchecked &&
                <>
                  <p className="">Lat: {order?.order?.lat}</p>
                  <p className="">Lng: {order?.order?.lng}</p>
                </>
              }
              <div className="font-bold">Preferences:</div>
              <p className="">Wash Mode: {order?.order?.washmode}</p>
              <p className="">Detergent: {order?.order?.detergent}</p>
              <p className="">Fabric Softener: {order?.order?.fabricsoftener}</p>
              <p className="">White: {order?.order?.white}</p>
              <p className="">Color & Dirt Collector: {order?.order?.coloranddirtcollector}</p>
              <p className="">Number Of Loads: {order?.order?.numberofloads}</p>
              <p className="">Tumble Dryer: {order?.order?.tumbledryer}</p>
              <p className="">Finishing {order?.order?.finishing}</p>
              <p className="">Starch On Shirts: {order?.order?.starchonshirts}</p>
              <div className="font-bold">Collection & Delivery:</div>
              <p className="">Collection Date: {
                new Date(Number(order?.order?.collectiondate)).toLocaleDateString('en-US', {
                  weekday: 'short',
                  day: 'numeric',
                  month: 'short'
                })
              }
              </p>
              <p className="">Collection Time: {order?.order?.collectiontime}</p>
              <p className="">Delivery Date: {
                new Date(Number(order?.order?.deliverydate)).toLocaleDateString('en-US', {
                  weekday: 'short',
                  day: 'numeric',
                  month: 'short'
                })
              }
              </p>
              <p className="">Delivery Time: {order?.order?.deliverytime}</p>
              <p className="">Frequencies: {order?.order?.frequencies}</p>
              {
                order?.order?.orderinstructions &&
                <>
                  <p className="">Order Instructions: {order?.order?.orderinstructions}</p>
                </>
              }
              <div className="font-bold">Coupon Information:</div>
              <p className="">Coupon Code: {order?.order?.coupon}</p>

              <div className="font-bold">Order Items:</div>
              {order?.items?.map((item, index) =>
                <div key={index} className="flex flex-row">
                  <p className="grow ">{item.name}</p>
                  <p className="w-[25px] self-end ">{item.count}</p>
                  <p className="w-[70px] self-end ">£{Number(item.count * item.price).toFixed(2)}</p>
                </div>
              )}
            </div>
          </div>
          <div className="bg-white dark:bg-black px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button type="button" className="mt-3 w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-7 py-3 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm" onClick={onClose}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
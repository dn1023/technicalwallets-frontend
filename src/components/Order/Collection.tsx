"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import SlotService from "@/api/slot.service";

const getDateList = (length: number, startDate: number) => {
  const currentDate = new Date();
  const options: Intl.DateTimeFormatOptions = {
    weekday: 'short',
    day: 'numeric',
    month: 'short'
  };

  const dateList = [];
  let i = 0;
  if (length == 15 || startDate != 0) {
    length++;
    i++;
  }
  for (i; i < length; i++) {
    const newDate = new Date((startDate == 0 ? currentDate.getTime() : Number(startDate)) + i * 24 * 60 * 60 * 1000);
    dateList.push({
      value: (startDate == 0 ? currentDate.getTime() : Number(startDate)) + i * 24 * 60 * 60 * 1000,
      expression: newDate.toLocaleDateString('en-US', options)
    });
  }
  return dateList;
}

const Collection = ({ updateCollectionDelivery }) => {
  const [slots, setSlots] = useState([]);

  const [collectionDateList, setCollectionDateList] = useState(getDateList(7, 0));
  const [deliveryDateList, setDeliveryDateList] = useState(getDateList(15, 0));

  const [frequencyType, setFrequencyType] = useState('just once');
  const [collectionTime, setCollectionTime] = useState('');
  const [deliveryTime, setDeliveryTime] = useState('');
  const [orderInstructions, setOrderInstructions] = useState('');
  const [collectionDate, setCollectionDate] = useState(new Date().getTime());
  const [deliveryDate, setDeliveryDate] = useState(new Date().getTime() + 24 * 60 * 60 * 1000);

  useEffect(()=>{
    const fetchSlots = async () => {
      const res = await SlotService.getAllSlots();
      if (res !== undefined) {
        if (res?.length > 0) {
          setSlots(res);
          if(slots.length > 0)
          {
            setCollectionTime(slots[0]);
            setDeliveryTime(slots[0]);
          }
          
          //setLoading(res?.length > 0);
          // Navigate on success
          // Example: router.push('/'); // Assuming you have a router instance available
        }
      }
    };
    fetchSlots().catch(error => console.error('Failed to fetch slots:', error));
  },[])

  useEffect(() => {
    const currentValue = {
      collectiondate: collectionDate,
      collectiontime: collectionTime,
      deliverydate: deliveryDate,
      deliverytime: deliveryTime,
      frequencies: frequencyType,
      orderinstructions: orderInstructions,
    }
    updateCollectionDelivery(currentValue);
  }, [collectionDate, collectionTime, deliveryDate, deliveryTime, frequencyType, orderInstructions])

  const frequencyTypeChange = (value) => {
    setFrequencyType(value);
  }

  const collectionTimeSelectChange = (event) => {
    setDeliveryDateList(getDateList(15, event.target.value));
    setCollectionDate(Number(event.target.value));
    setDeliveryDate(Number(event.target.value) + 24 * 60 * 60 * 1000);
  }

  return (
    <>
      <div className="p-8 rounded-lg shadow-three bg-white dark:bg-gray-dark">
        <h1 className="mb-8 text-2xl font-bold leading-tight text-black dark:text-body-color-dark sm:text-4xl sm:leading-tight">
          Collection time
        </h1>
        <div className="w-full grid grid-cols-1 md:grid-cols-3 sm:gap-4 mb-8">
          <div className="items-center justify-center mx-auto flex dark:invert-[0.75]">
            <Image src="/images/order/collection.svg" alt="hero image" width={305} height={115} />
          </div>
          <div className="mb-5 flex flex-wrap items-center justify-between dark:border-white dark:border-opacity-10">
            <h3 className="pb-2 font-bold leading-tight text-black dark:text-body-color-dark">
              DATE
            </h3>
            <select
              onChange={collectionTimeSelectChange}
              className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
            >
              {
                collectionDateList.map((item, index) => (
                  <option key={index} value={item.value}>{item.expression}</option>
                ))
              }
            </select>
          </div>
          <div className="mb-5 flex flex-wrap items-center justify-between dark:border-white dark:border-opacity-10">
            <h3 className="pb-2 font-bold leading-tight text-black dark:text-body-color-dark">
              TIME
            </h3>
            <select
              onChange={(e) => setCollectionTime(e.target.value)}
              className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
            >
              {
                slots.length == 0 &&
                  <option value=""></option>
              }
              {
                slots.map((item, index) => (
                  <option key={index} value={item.name}>{item.name}</option>
                ))
              }
              {/* <option value="16:00-19:00">16:00-19:00</option>
              <option value="19:00-22:00">19:00-22:00</option>
              <option value="17:00-20:00">17:00-20:00</option>
              <option value="20:00-23:00">20:00-23:00</option>
              <option value="18:00-21:00">18:00-21:00</option>
              <option value="19:00-23:00">19:00-23:00</option> */}
            </select>
          </div>
        </div>
        <h1 className="mb-8 text-2xl font-bold leading-tight text-black dark:text-body-color-dark sm:text-4xl sm:leading-tight">
          Delivery time
        </h1>
        <div className="w-full grid grid-cols-1 md:grid-cols-3 sm:gap-4 mb-8">
          <div className="items-center justify-center mx-auto flex dark:invert-[0.75]">
            <Image src="/images/order/delivery.svg" alt="hero image" width={305} height={115} />
          </div>
          <div className="mb-5 flex flex-wrap items-center justify-between dark:border-white dark:border-opacity-10">
            <h3 className="pb-2 font-bold leading-tight text-black dark:text-body-color-dark">
              DATE
            </h3>
            <select
              onChange={(e) => setDeliveryDate(Number(e.target.value))}
              className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
            >
              {
                deliveryDateList.map((item, index) => (
                  <option key={index} value={item.value}>{item.expression}</option>
                ))
              }
            </select>
          </div>
          <div className="mb-5 flex flex-wrap items-center justify-between dark:border-white dark:border-opacity-10">
            <h3 className="pb-2 font-bold leading-tight text-black dark:text-body-color-dark">
              TIME
            </h3>
            <select
              onChange={(e) => setDeliveryTime(e.target.value)}
              className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
            >
              {
                slots.length == 0 &&
                  <option value=""></option>
              }
              {
                slots.map((item, index) => (
                  <option key={index} value={item.name}>{item.name}</option>
                ))
              }
              {/* <option value="16:00-19:00">16:00-19:00</option>
              <option value="19:00-22:00">19:00-22:00</option>
              <option value="17:00-20:00">17:00-20:00</option>
              <option value="20:00-23:00">20:00-23:00</option>
              <option value="18:00-21:00">18:00-21:00</option>
              <option value="19:00-23:00">19:00-23:00</option> */}
            </select>
          </div>
        </div>
        <h1 className="mb-8 text-2xl font-bold leading-tight text-black dark:text-body-color-dark sm:text-4xl sm:leading-tight">
          Frequencies
        </h1>
        <div className="flex md:flex-row flex-col w-full">
          <button
            /* className={`navbar absolute right-0 z-30 w-[250px] rounded border-[.5px] border-body-color/50 bg-white px-6 py-4 duration-300 dark:border-body-color/20 dark:bg-dark lg:visible lg:static lg:w-auto lg:border-none lg:!bg-transparent lg:p-0 lg:opacity-100 ${addressType == "home" &&
              "hover:border-primary hover:bg-primary/5 hover:text-primary dark:border-primary dark:bg-primary/5 dark:text-primary dark:shadow-none"
              }`} */
              className={`border ${frequencyType == "just once" &&
              "border-primary bg-primary/5 text-primary dark:border-primary dark:bg-primary/5 dark:text-primary dark:shadow-none"}
                flex flex-row items-center justify-center md:basis-1/3 border-stroke dark:text-body-color-dark dark:shadow-two mb-6 rounded-sm bg-[#f8f8f8] text-base text-body-color outline-none transition-all duration-300 hover:border-primary hover:bg-primary/5 hover:text-primary dark:bg-[#2C303B] dark:hover:border-primary dark:hover:bg-primary/5 dark:hover:text-primary dark:hover:shadow-none`}
            onClick={() => frequencyTypeChange('just once')}
          >
            JUST ONCE
          </button>
          <button
            className={`border ${frequencyType == "weekly" &&
              "border-primary bg-primary/5 text-primary dark:border-primary dark:bg-primary/5 dark:text-primary dark:shadow-none"}
                flex flex-row items-center justify-center md:basis-1/3 border-stroke dark:text-body-color-dark dark:shadow-two mb-6 rounded-sm bg-[#f8f8f8] text-base text-body-color outline-none transition-all duration-300 hover:border-primary hover:bg-primary/5 hover:text-primary dark:bg-[#2C303B] dark:hover:border-primary dark:hover:bg-primary/5 dark:hover:text-primary dark:hover:shadow-none`}
            onClick={() => frequencyTypeChange('weekly')}
          >
            WEEEKLY
          </button>
          <button
            className={`border ${frequencyType == "every two weeks" &&
              "border-primary bg-primary/5 text-primary dark:border-primary dark:bg-primary/5 dark:text-primary dark:shadow-none"}
                flex flex-row items-center justify-center md:basis-1/3 border-stroke dark:text-body-color-dark dark:shadow-two mb-6 rounded-sm bg-[#f8f8f8] text-base text-body-color outline-none transition-all duration-300 hover:border-primary hover:bg-primary/5 hover:text-primary dark:bg-[#2C303B] dark:hover:border-primary dark:hover:bg-primary/5 dark:hover:text-primary dark:hover:shadow-none`}
            onClick={() => frequencyTypeChange('every two weeks')}
          >
            EVERY TWO WEEKS
          </button>
          <button
            className={`border ${frequencyType == "every four weeks" &&
              "border-primary bg-primary/5 text-primary dark:border-primary dark:bg-primary/5 dark:text-primary dark:shadow-none"}
                flex flex-row items-center justify-center md:basis-1/3 border-stroke dark:text-body-color-dark dark:shadow-two mb-6 rounded-sm bg-[#f8f8f8] text-base text-body-color outline-none transition-all duration-300 hover:border-primary hover:bg-primary/5 hover:text-primary dark:bg-[#2C303B] dark:hover:border-primary dark:hover:bg-primary/5 dark:hover:text-primary dark:hover:shadow-none`}
            onClick={() => frequencyTypeChange('every four weeks')}
          >
            EVERY FOUR WEEKS
          </button>
        </div>

        <h1 className="mb-8 px-4 py-4 text-base rounded-md bg-cyan-400/50 dark:bg-cyan-500 font-bold leading-tight text-black dark:text-black">
          {
            frequencyType === "just once" ?
              (
                "You're booking a single order"
              ) :
              frequencyType === "weekly" ?
                (
                  "We'll collect your bags every Tuesday 16:00-19:00. You can cancel any time."
                ) :
                frequencyType === "every two weeks" ?
                  (
                    "We'll collect your bags every second Tuesday 16:00-19:00. You can cancel any time."
                  ) :
                  frequencyType === "every four weeks" ?
                    (
                      "We'll collect your bags every fourth Tuesday 16:00-19:00. You can cancel any time."
                    ) : null
          }
        </h1>
        <h1 className="mb-8 text-2xl font-bold leading-tight text-black dark:text-body-color-dark sm:text-4xl sm:leading-tight">
          Order instructions(optional)
        </h1>
        <div className="w-full min-h-[100px] mb-8">
          <textarea
            id="text-area"
            value={orderInstructions}
            onChange={(e) => setOrderInstructions(e.target.value)}
            placeholder="Add any special instructions for the driver / cleaning team"
            rows={5}
            className="w-full border border-stroke text-base text-body-color bg-[#f8f8f8] dark:bg-gray-dark dark:border-slate-500 p-4"
          />
        </div>
      </div>
    </>
  );
};

export default Collection;

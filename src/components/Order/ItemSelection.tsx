"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import ItemData from "./ItemData";
import ProductService from "@/api/product.service";

const ItemSelection = ({ updateOrder }) => {
  const API=process.env.NEXT_PUBLIC_BACKEND_API;
  const [sortType, setSortType] = useState(['laundry', 1]);
  /* const [entry, setEntry] = useState([]); */
  const [selectedItems, setSelectedItems] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    updateOrder(selectedItems);
  }, [sortType, selectedItems])

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await ProductService.getAllProducts();
      if (res !== undefined) {
        if (res?.length > 0) {
          setProducts(res);
          //setLoading(res?.length > 0);
          // Navigate on success
          // Example: router.push('/'); // Assuming you have a router instance available
        }
      }
    };
    fetchProducts().catch(error => console.error('Failed to fetch products:', error));
  }, [])
  /* {ItemData.filter((item) => item.sort == sortType).map((item) => (
  ))} */
  /* let temp = [];
    ItemData.filter((item) => item.sort == sortType).map((item) => (
      temp.push(item)
    ))
    setEntry(temp); */

  const countUp = (id, title, price) => {
    let temp = [];
    let flag = false;
    selectedItems.map((item) => {
      if (item.id == id) {
        temp.push({ id: item.id, title: item.title, price: item.price, count: item.count + 1 })
        flag = true;
      }
      else
        temp.push(item);
    });
    if (!flag)
      temp.push({ id: id, title: title, price: price, count: 1 })
    setSelectedItems(temp);
  }

  const countDown = (id) => {
    let temp = [];
    selectedItems.map((item) => {
      if (item.id == id) {
        if (item.count > 1)
          temp.push({ id: id, title: item.title, price: item.price, count: item.count - 1 })
      }
      else
        temp.push(item);
    });
    setSelectedItems(temp);
  }

  const getCount = (id) => {
    const count = selectedItems.filter(data => data.id == id).map(item => item.count);
    return count.length > 0 ? count : 0;
  }

  return (
    <>
      <div className="p-8 rounded-lg shadow-three bg-white dark:bg-gray-dark dark:text-body-color-dark">
        <h1 className="mb-8 text-2xl font-bold leading-tight sm:text-4xl sm:leading-tight">
          Item Selection
        </h1>
        <div className="mb-5 flex flex-wrap items-center justify-between pb-4 dark:border-white dark:border-opacity-10">
          <h3 className="pb-2 font-bold leading-tight">
            SELECT YOUR ITEMS
          </h3>
          <div className="overflow-auto flex flex-row scroll-auto snap-x space-x-4 w-full">
            <button
              className="snap-end flex flex-col items-center justify-center dark:text-body-color-dark mb-6 rounded-sm px-6 py-3 text-base text-body-color outline-none transition-all duration-300"
              onClick={() => setSortType(['laundry', 1])}
            >
              <div className={`${sortType[0] == "laundry" &&
                "border border-primary bg-primary/5 text-primary dark:border-primary dark:bg-primary/5 dark:text-primary dark:shadow-none"}
                flex items-center justify-center w-[50px] h-[50px] mb-2 rounded-md`}
              >
                {/* <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M165-480 45-688l264-152h51q16 48 38 84t82 36q60 0 82-36t38-84h51l263 153-119 207-75-41v192l-63 55q-3 2-8 5t-9 5v-393l125 69 40-70-153-89q-24 49-70.5 78T480-640q-55 0-101.5-29T308-747l-154 89 41 70 125-69v237q-21 2-41 6.5T240-401v-120l-75 41Zm21 295-52-61 87-74q23-20 52.5-30.5T335-361q32 0 61 10.5t52 30.5l116 99q12 10 28.5 15.5T626-200q18 0 33.5-5t27.5-16l87-75 52 62-87 74q-23 20-52 30t-61 10q-32 0-61.5-10T512-160l-116-99q-12-10-27.5-15.5T335-280q-17 0-33.5 5.5T273-259l-87 74Zm294-455Z" /></svg> */}
                <Image src="/images/ordercomponent/items/clean-cloth.png" className="" alt="hero image" width={32} height={32} />
              </div>
              Laundry
            </button>
            <button
              className="snap-end flex flex-col items-center justify-center dark:text-body-color-dark mb-6 rounded-sm px-6 py-3 text-base text-body-color outline-none transition-all duration-300"
              onClick={() => setSortType(['iron', 2])}
            >
              <div className={`${sortType[0] == "iron" &&
                "border border-primary bg-primary/5 text-primary dark:border-primary dark:bg-primary/5 dark:text-primary dark:shadow-none"}
                flex items-center justify-center w-[50px] h-[50px] mb-2 rounded-md`}
              >
                {/* <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M80-240v-120q0-66 47-113t113-47h360v-40q0-17-11.5-28.5T560-600H400q-17 0-28.5 11.5T360-560h-80q0-50 35-85t85-35h160q50 0 85 35t35 85v160q17 0 28.5-11.5T720-440v-160q0-50 35-85t85-35h40v80h-40q-17 0-28.5 11.5T800-600v160q0 50-35 85t-85 35v80H80Zm80-80h440v-120H240q-33 0-56.5 23.5T160-360v40Zm440 0v-120 120Z" /></svg> */}
                <Image src="/images/ordercomponent/items/iron.png" className="" alt="hero image" width={32} height={32} />
              </div>
              <div className="text-nowrap">Iron Only</div>
            </button>
            <button
              className="snap-end flex flex-col items-center justify-center dark:text-body-color-dark mb-6 rounded-sm px-6 py-3 text-base text-body-color outline-none transition-all duration-300"
              onClick={() => setSortType(['home', 3])}
            >
              <div className={`${sortType[0] == "home" &&
                "border border-primary bg-primary/5 text-primary dark:border-primary dark:bg-primary/5 dark:text-primary dark:shadow-none"}
                flex items-center justify-center w-[50px] h-[50px] mb-2 rounded-md`}
              >
                {/* <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M80-200v-240q0-27 11-49t29-39v-112q0-50 35-85t85-35h160q23 0 43 8.5t37 23.5q17-15 37-23.5t43-8.5h160q50 0 85 35t35 85v112q18 17 29 39t11 49v240h-80v-80H160v80H80Zm440-360h240v-80q0-17-11.5-28.5T720-680H560q-17 0-28.5 11.5T520-640v80Zm-320 0h240v-80q0-17-11.5-28.5T400-680H240q-17 0-28.5 11.5T200-640v80Zm-40 200h640v-80q0-17-11.5-28.5T760-480H200q-17 0-28.5 11.5T160-440v80Zm640 0H160h640Z" /></svg> */}
                <Image src="/images/ordercomponent/items/bed.png" className="" alt="hero image" width={32} height={32} />
              </div>
              Home
            </button>
            <button
              className="snap-end flex flex-col items-center justify-center dark:text-body-color-dark mb-6 rounded-sm px-6 py-3 text-base text-body-color outline-none transition-all duration-300"
              onClick={() => setSortType(['shirts', 4])}
            >
              <div className={`${sortType[0] == "shirts" &&
                "border border-primary bg-primary/5 text-primary dark:border-primary dark:bg-primary/5 dark:text-primary dark:shadow-none"}
                flex items-center justify-center w-[50px] h-[50px] mb-2 rounded-md`}
              >
                {/* <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="m240-522-40 22q-14 8-30 4t-24-18L66-654q-8-14-4-30t18-24l230-132h70q9 0 14.5 5.5T400-820v20q0 33 23.5 56.5T480-720q33 0 56.5-23.5T560-800v-20q0-9 5.5-14.5T580-840h70l230 132q14 8 18 24t-4 30l-80 140q-8 14-23.5 17.5T760-501l-40-20v361q0 17-11.5 28.5T680-120H280q-17 0-28.5-11.5T240-160v-362Zm80-134v456h320v-456l124 68 42-70-172-100q-15 51-56.5 84.5T480-640q-56 0-97.5-33.5T326-758L154-658l42 70 124-68Zm160 177Z" /></svg> */}
                <Image src="/images/ordercomponent/items/shirt.png" className="" alt="hero image" width={32} height={32} />
              </div>
              Shirts/Tops
            </button>
            <button
              className="snap-end flex flex-col items-center justify-center dark:text-body-color-dark mb-6 rounded-sm px-6 py-3 text-base text-body-color outline-none transition-all duration-300"
              onClick={() => setSortType(['suits',5])}
            >
              <div className={`${sortType[0] == "suits" &&
                "border border-primary bg-primary/5 text-primary dark:border-primary dark:bg-primary/5 dark:text-primary dark:shadow-none"}
                flex items-center justify-center w-[50px] h-[50px] mb-2 rounded-md`}
              >
                {/* <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="m240-522-40 22q-14 8-30 4t-24-18L66-654q-8-14-4-30t18-24l230-132h70q9 0 14.5 5.5T400-820v20q0 33 23.5 56.5T480-720q33 0 56.5-23.5T560-800v-20q0-9 5.5-14.5T580-840h70l230 132q14 8 18 24t-4 30l-80 140q-8 14-23.5 17.5T760-501l-40-20v361q0 17-11.5 28.5T680-120H280q-17 0-28.5-11.5T240-160v-362Zm80-134v456h320v-456l124 68 42-70-172-100q-15 51-56.5 84.5T480-640q-56 0-97.5-33.5T326-758L154-658l42 70 124-68Zm160 177Z" /></svg> */}
                <Image src="/images/ordercomponent/items/suits.png" className="" alt="hero image" width={32} height={32} />
              </div>
              Suits
            </button>
            <button
              className="snap-end flex flex-col items-center justify-center dark:text-body-color-dark mb-6 rounded-sm px-6 py-3 text-base text-body-color outline-none transition-all duration-300"
              onClick={() => setSortType(['dress', 6])}
            >
              <div className={`${sortType[0] == "dress" &&
                "border border-primary bg-primary/5 text-primary dark:border-primary dark:bg-primary/5 dark:text-primary dark:shadow-none"}
                flex items-center justify-center w-[50px] h-[50px] mb-2 rounded-md`}
              >
                {/* <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="m240-522-40 22q-14 8-30 4t-24-18L66-654q-8-14-4-30t18-24l230-132h70q9 0 14.5 5.5T400-820v20q0 33 23.5 56.5T480-720q33 0 56.5-23.5T560-800v-20q0-9 5.5-14.5T580-840h70l230 132q14 8 18 24t-4 30l-80 140q-8 14-23.5 17.5T760-501l-40-20v361q0 17-11.5 28.5T680-120H280q-17 0-28.5-11.5T240-160v-362Zm80-134v456h320v-456l124 68 42-70-172-100q-15 51-56.5 84.5T480-640q-56 0-97.5-33.5T326-758L154-658l42 70 124-68Zm160 177Z" /></svg> */}
                <Image src="/images/ordercomponent/items/dress.png" className="" alt="hero image" width={32} height={32} />
              </div>
              Dress/Skirt
            </button>
            <button
              className="snap-end flex flex-col items-center justify-center dark:text-body-color-dark mb-6 rounded-sm px-6 py-3 text-base text-body-color outline-none transition-all duration-300"
              onClick={() => setSortType(['trousers', 7])}
            >
              <div className={`${sortType[0] == "trousers" &&
                "border border-primary bg-primary/5 text-primary dark:border-primary dark:bg-primary/5 dark:text-primary dark:shadow-none"}
                flex items-center justify-center w-[50px] h-[50px] mb-2 rounded-md`}
              >
                {/* <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="m240-522-40 22q-14 8-30 4t-24-18L66-654q-8-14-4-30t18-24l230-132h70q9 0 14.5 5.5T400-820v20q0 33 23.5 56.5T480-720q33 0 56.5-23.5T560-800v-20q0-9 5.5-14.5T580-840h70l230 132q14 8 18 24t-4 30l-80 140q-8 14-23.5 17.5T760-501l-40-20v361q0 17-11.5 28.5T680-120H280q-17 0-28.5-11.5T240-160v-362Zm80-134v456h320v-456l124 68 42-70-172-100q-15 51-56.5 84.5T480-640q-56 0-97.5-33.5T326-758L154-658l42 70 124-68Zm160 177Z" /></svg> */}
                <Image src="/images/ordercomponent/items/trousers.png" className="" alt="hero image" width={32} height={32} />
              </div>
              Trousers
            </button>
            <button
              className="snap-end flex flex-col items-center justify-center dark:text-body-color-dark mb-6 rounded-sm px-6 py-3 text-base text-body-color outline-none transition-all duration-300"
              onClick={() => setSortType(['outdoor', 8])}
            >
              <div className={`${sortType[0] == "outdoor" &&
                "border border-primary bg-primary/5 text-primary dark:border-primary dark:bg-primary/5 dark:text-primary dark:shadow-none"}
                flex items-center justify-center w-[50px] h-[50px] mb-2 rounded-md`}
              >
                {/* <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="m240-522-40 22q-14 8-30 4t-24-18L66-654q-8-14-4-30t18-24l230-132h70q9 0 14.5 5.5T400-820v20q0 33 23.5 56.5T480-720q33 0 56.5-23.5T560-800v-20q0-9 5.5-14.5T580-840h70l230 132q14 8 18 24t-4 30l-80 140q-8 14-23.5 17.5T760-501l-40-20v361q0 17-11.5 28.5T680-120H280q-17 0-28.5-11.5T240-160v-362Zm80-134v456h320v-456l124 68 42-70-172-100q-15 51-56.5 84.5T480-640q-56 0-97.5-33.5T326-758L154-658l42 70 124-68Zm160 177Z" /></svg> */}
                <Image src="/images/ordercomponent/items/male-clothes.png" className="" alt="hero image" width={32} height={32} />
              </div>
              Outdoor
            </button>
            <button
              className="snap-end flex flex-col items-center justify-center dark:text-body-color-dark mb-6 rounded-sm px-6 py-3 text-base text-body-color outline-none transition-all duration-300"
              onClick={() => setSortType(['alterations', 9])}
            >
              <div className={`${sortType[0] == "alterations" &&
                "border border-primary bg-primary/5 text-primary dark:border-primary dark:bg-primary/5 dark:text-primary dark:shadow-none"}
                flex items-center justify-center w-[50px] h-[50px] mb-2 rounded-md`}
              >
                {/* <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="m240-522-40 22q-14 8-30 4t-24-18L66-654q-8-14-4-30t18-24l230-132h70q9 0 14.5 5.5T400-820v20q0 33 23.5 56.5T480-720q33 0 56.5-23.5T560-800v-20q0-9 5.5-14.5T580-840h70l230 132q14 8 18 24t-4 30l-80 140q-8 14-23.5 17.5T760-501l-40-20v361q0 17-11.5 28.5T680-120H280q-17 0-28.5-11.5T240-160v-362Zm80-134v456h320v-456l124 68 42-70-172-100q-15 51-56.5 84.5T480-640q-56 0-97.5-33.5T326-758L154-658l42 70 124-68Zm160 177Z" /></svg> */}
                <Image src="/images/ordercomponent/items/clothing.png" className="" alt="hero image" width={32} height={32} />
              </div>
              Alterations
            </button>
            <button
              className="snap-end flex flex-col items-center justify-center dark:text-body-color-dark mb-6 rounded-sm px-6 py-3 text-base text-body-color outline-none transition-all duration-300"
              onClick={() => setSortType(['shoe', 10])}
            >
              <div className={`${sortType[0] == "shoe" &&
                "border border-primary bg-primary/5 text-primary dark:border-primary dark:bg-primary/5 dark:text-primary dark:shadow-none"}
                flex items-center justify-center w-[50px] h-[50px] mb-2 rounded-md`}
              >
                {/* <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="m684-389 179-179 57 57-180 179-56-57ZM40-160v-106q0-24 13.5-44T90-339q21-8 40-19t38-25l58 58q5 7 13.5 6.5T254-325q5-5 5-13.5t-5-15.5l-55-55 15.5-15.5Q222-432 230-441l54 55q5 7 13.5 7t15.5-7q5-5 5-13.5t-5-15.5l-55-54q5-10 10.5-20.5T278-512l65 65q5 7 13.5 7t15.5-7q5-5 5-13t-5-15l-77-77 41-114 216-214 282 283-414 437H40Zm345-80 337-355-337 355Zm-265 0h265l337-355-171-171-146 145-29 81 30 30q23 24 23 57.5T406-396L293-283q-24 24-57 24t-56-24l-8-8q-13 8-26 14t-26 11v26Z" /></svg> */}
                <Image src="/images/ordercomponent/items/repair.png" className="" alt="hero image" width={32} height={32} />
              </div>
              <div className="text-nowrap">Shoe Repair</div>
            </button>
            <button
              className="snap-end flex flex-col items-center justify-center dark:text-body-color-dark mb-6 rounded-sm px-6 py-3 text-base text-body-color outline-none transition-all duration-300"
              onClick={() => setSortType(['custom', 11])}
            >
              <div className={`${sortType[0] == "custom" &&
                "border border-primary bg-primary/5 text-primary dark:border-primary dark:bg-primary/5 dark:text-primary dark:shadow-none"}
                flex items-center justify-center w-[50px] h-[50px] mb-2 rounded-md`}
              >
                {/* <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="m684-389 179-179 57 57-180 179-56-57ZM40-160v-106q0-24 13.5-44T90-339q21-8 40-19t38-25l58 58q5 7 13.5 6.5T254-325q5-5 5-13.5t-5-15.5l-55-55 15.5-15.5Q222-432 230-441l54 55q5 7 13.5 7t15.5-7q5-5 5-13.5t-5-15.5l-55-54q5-10 10.5-20.5T278-512l65 65q5 7 13.5 7t15.5-7q5-5 5-13t-5-15l-77-77 41-114 216-214 282 283-414 437H40Zm345-80 337-355-337 355Zm-265 0h265l337-355-171-171-146 145-29 81 30 30q23 24 23 57.5T406-396L293-283q-24 24-57 24t-56-24l-8-8q-13 8-26 14t-26 11v26Z" /></svg> */}
                <Image src="/images/ordercomponent/items/custom.png" className="" alt="hero image" width={32} height={32} />
              </div>
              <div className="text-nowrap">Custom</div>
            </button>
          </div>
          {/* <input
            type="text"
            placeholder="E.G. E12 PE"
            value={postcode}
            onChange={(e) => {
              setPostcode(e.target.value);
              searchAddress(e.target.value);
            }}
            className="border-stroke dark:text-body-color-dark w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
          /> */}
        </div>
        {/* <div className="mb-5 flex flex-wrap items-center justify-between pb-4 dark:border-white dark:border-opacity-10">
          <h3 className="pb-2 font-bold leading-tight text-black">
            SEARCH
          </h3>
          <input
            type="text"
            placeholder="SEARCH..."
            className="border-stroke dark:text-body-color-dark w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
          />
        </div> */}
        <div className="mb-5 flex flex-wrap items-center justify-between">
          <h3 className="pb-2 font-bold leading-tight">
            ITEMS
          </h3>
          <div className="w-full grid grid-cols-1 sm:gap-4">
            {
              ItemData.filter((item) => item.sort == sortType[0]).map((item) => (
                <div key={item.id} className="rounded-lg shadow-lg min-h-[200px] flex flex-wrap justify-center duration-300 ease-in-out hover:bg-slate-300/30 hover:dark:bg-slate-700">
                  <div className="mx-auto w-1/4 flex items-center justify-center">
                    <div className="mx-auto flex rounded-full border-2 border-amber-500 w-[120px] h-[120px] items-center justify-center">
                      <Image src={item.icon} alt="hero image" width={120} height={120} />
                    </div>
                  </div>
                  <div className="mx-auto p-2 w-3/4 flex flex-col justify-center p-1 pt-2">
                    <div className="font-bold leading-tight">
                      {item.title}
                    </div>
                    <div className="pb-2 mr-1 text-[12px] text-left text-neutral-600 dark:text-body-color-dark">
                      {item.paragraph}
                    </div>
                    <div className="pb-2 leading-tight flex flex-row items-center">
                      <p className="line-through">{item.oldprice != 0 && "£" + item.oldprice}</p>
                      <p className="text-[22px] font-bold">
                      {item.oldprice != 0 && <>&nbsp;&nbsp;</>}£{item.newprice}
                      </p>
                      {item.oldprice != 0 && <>&nbsp;&nbsp;</>}
                      {
                        item.oldprice != 0 &&
                        <div className="flex text-[14px] rounded-xl text-white bg-orange-400 w-[60px] h-[20px] items-center justify-center">
                          {item.oldprice != 0 && Number((item.newprice / item.oldprice - 1) * 100).toFixed(2)}%
                        </div>
                      }
                    </div>
                    <div className="flex flex-row space-x-1 items-center" >
                      <button
                        onClick={() => countUp(item.id, item.title, item.newprice)}
                        className="rounded-lg bg-slate-300 w-[30px] h-[30px] text-base text-center font-semibold text-black duration-300 ease-in-out hover:bg-slate-300/60"
                      >
                        +
                      </button>
                      <button
                        onClick={() => countDown(item.id)}
                        className="rounded-lg w-[30px] h-[30px] bg-orange-400 text-base text-center font-semibold text-black duration-300 ease-in-out hover:bg-orange-400/60"
                      >
                        -
                      </button>
                      &nbsp;
                      <div className="mx-auto flex rounded-full border-2 border-black w-[30px] h-[30px] items-center justify-center">
                        {
                          getCount(item.id)
                        }
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            {
              products.filter((item) => item.categoryid == sortType[1]).map((item, index) => (
                <div key={index} className="rounded-lg shadow-lg min-h-[200px] flex flex-wrap justify-center duration-300 ease-in-out hover:bg-slate-300/30 hover:dark:bg-slate-700">
                  <div className="mx-auto w-1/4 flex items-center justify-center">
                    <div className="mx-auto flex rounded-full border-2 border-amber-500 w-[120px] h-[120px] items-center justify-center">
                      <Image src={API+item.icon} className="rounded-full" alt="hero image" width={120} height={120} />
                    </div>
                  </div>
                  <div className="mx-auto p-2 w-3/4 flex flex-col justify-center p-1 pt-2">
                    <div className="font-bold leading-tight">
                      {item.title}
                    </div>
                    <div className="pb-2 mr-1 text-[12px] text-left text-neutral-600 dark:text-body-color-dark">
                      {item.paragraph}
                    </div>
                    <div className="pb-2 leading-tight flex flex-row items-center">
                      <p className="line-through">{item.oldprice != 0 && "£" + item.oldprice}</p>
                      <p className="text-[22px] font-bold">
                      {item.oldprice != 0 && <>&nbsp;&nbsp;</>}£{item.newprice}
                      </p>
                      {item.oldprice != 0 && <>&nbsp;&nbsp;</>}
                      {
                        item.oldprice != 0 &&
                        <div className="flex text-[14px] rounded-xl text-white bg-orange-400 w-[60px] h-[20px] items-center justify-center">
                          {item.oldprice != 0 && Number((item.newprice / item.oldprice - 1) * 100).toFixed(2)}%
                        </div>
                      }
                    </div>
                    <div className="flex flex-row space-x-1 items-center" >
                      <button
                        onClick={() => countUp(item.id, item.title, item.newprice)}
                        className="rounded-lg bg-slate-300 w-[30px] h-[30px] text-base text-center font-semibold text-black duration-300 ease-in-out hover:bg-slate-300/60"
                      >
                        +
                      </button>
                      <button
                        onClick={() => countDown(item.id)}
                        className="rounded-lg w-[30px] h-[30px] bg-orange-400 text-base text-center font-semibold text-black duration-300 ease-in-out hover:bg-orange-400/60"
                      >
                        -
                      </button>
                      &nbsp;
                      <div className="mx-auto flex rounded-full border-2 border-black w-[30px] h-[30px] items-center justify-center">
                        {
                          getCount(item.id)
                        }
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemSelection;

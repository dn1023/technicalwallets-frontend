"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Preference = ({ updatePreference }) => {
  const [washMode, setWashMode] = useState('Hot Wash 30-90 C');
  const [detergent, setDetergent] = useState('Keep Bio');
  const [fabric, setFabric] = useState('Yes');
  const [white, setWhite] = useState('30 degrees');
  const [color, setColor] = useState('Yes');
  const [loads, setLoads] = useState('Standard (1 load)');
  const [tumble, setTumble] = useState('HOT');
  const [finishing, setFinishing] = useState('Wash, Dry & Fold');
  const [starch, setStarch] = useState('Light (default)');
  /* {
    washmode: '',
      detergent: '',
        fabricsoftener: '',
          white: '',
            coloranddirtcollector: '',
              numberofloads: '',
                tumbledryer: '',
                  finishing: '',
                    searchonshirts: '',
    } */
  useEffect(() => {
    const currentValue = {
      washmode: washMode,
      detergent: detergent,
      fabricsoftener: fabric,
      white: white,
      coloranddirtcollector: color,
      numberofloads: loads,
      tumbledryer: tumble,
      finishing: finishing,
      starchonshirts: starch,
    }
    updatePreference(currentValue);
  }, [washMode, detergent, fabric, white, color, loads, tumble, finishing, starch])

  return (
    <>
      <div className="p-8 rounded-lg shadow-three bg-white dark:bg-gray-dark">
        <h1 className="mb-8 text-2xl font-bold leading-tight text-black dark:text-body-color-dark sm:text-4xl sm:leading-tight">
          Wash and Fold Preferences
        </h1>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 sm:gap-4">
          <div className="mb-5 flex flex-wrap items-center justify-between dark:border-white dark:border-opacity-10">
            <h3 className="pb-2 font-bold leading-tight text-black dark:text-body-color-dark">
              WASH MODE
            </h3>
            <select
              onChange={(e) => setWashMode(e.target.value)}
              className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
            >
              <option value="Hot Wash 30-90 C">Hot Wash 30-90 C</option>
              <option value="Color Wash 30-60 C">Color Wash 30-60 C</option>
              <option value="Synthetic 30-40 C">Synthetic 30-40 C</option>
              <option value="Nylon 30 C">Nylon 30 C</option>
              <option value="Delicates 20 C">Delicates 20 C</option>
            </select>
          </div>
          <div className="mb-5 flex flex-wrap items-center justify-between dark:border-white dark:border-opacity-10">
            <h3 className="pb-2 font-bold leading-tight text-black dark:text-body-color-dark">
              DETERGENT
            </h3>
            <select
              onChange={(e) => setDetergent(e.target.value)}
              className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
            >
              {/* <option value="Lynx BioT-3 Professional Laundry detergent">Lynx BioT-3 Professional Laundry detergent</option>
              <option value="Default">Default</option>
              <option value="Lynx Colour Protection Bleach £0.30(£0.30)">Lynx Colour Protection Bleach £0.30(£0.30)</option>
              <option value="Persil Powder Bio(+£0.80 / 8Kg)(£0.80)">Persil Powder Bio(+£0.80 / 8Kg)(£0.80)</option>
              <option value="Persil Powder Non Bio(+£0.80 / 8Kgs)(£0.80)">Persil Powder Non Bio(+£0.80 / 8Kgs)(£0.80)</option>
              <option value="Ariel ACTILIFT Powder Bio(+£0.80 / 8Kgs)(£0.80)">Ariel ACTILIFT Powder Bio(+£0.80 / 8Kgs)(£0.80)</option>
              <option value="Vanish Oxi Gold £0.20(£1.00)">Vanish Oxi Gold £0.20(£1.00)</option>
              <option value="Eco Flower(£1.00)">Eco Flower(£1.00)</option> */}
              <option value="Keep Bio">Keep Bio</option>
              <option value="No Bio">No Bio</option>
            </select>
          </div>
          <div className="mb-5 flex flex-wrap items-center justify-between dark:border-white dark:border-opacity-10">
            <h3 className="pb-2 font-bold leading-tight text-black dark:text-body-color-dark">
              FABRIC SOFTENER
            </h3>
            <select
              onChange={(e) => setFabric(e.target.value)}
              className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
            >
              <option value="Yes">Yes</option>
              <option value="No">No</option>
              {/* <option value="Lynx Big Blue Professional">Lynx Big Blue Professional</option>
              <option value="None">None</option>
              <option value="Lenor Midnight shadows(+£0.50 / 8Kg)(£0.50)">Lenor Midnight shadows(+£0.50 / 8Kg)(£0.50)</option>
              <option value="ECOVER flower(+£0.80 / 8Kg)(£0.80)">ECOVER flower(+£0.80 / 8Kg)(£0.80)</option> */}
            </select>
          </div>
          <div className="mb-5 flex flex-wrap items-center justify-between dark:border-white dark:border-opacity-10">
            <h3 className="pb-2 font-bold leading-tight text-black dark:text-body-color-dark">
              WHITE
            </h3>
            <select
              onChange={(e) => setWhite(e.target.value)}
              className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
            >
              <option value="30 degrees">30 degrees</option>
              <option value="40 degrees">40 degrees</option>
              <option value="60 degrees">60 degrees</option>
              <option value="90 degrees">90 degrees</option>
            </select>
          </div>
          <div className="mb-5 flex flex-wrap items-center justify-between dark:border-white dark:border-opacity-10">
            <h3 className="pb-2 font-bold leading-tight text-black dark:text-body-color-dark">
              COLOR & DIRT COLLECTOR
            </h3>
            <select
              onChange={(e) => setColor(e.target.value)}
              className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
            >
              <option value="Yes">Yes</option>
              <option value="No">No</option>
              {/* <option value="none">none</option>
              <option value="(Dr. Beckmann) £0.15p each(£0.15)">(Dr. Beckmann) £0.15p each(£0.15)</option> */}
            </select>
          </div>
          <div className="mb-5 flex flex-wrap items-center justify-between dark:border-white dark:border-opacity-10">
            <h3 className="pb-2 font-bold leading-tight text-black dark:text-body-color-dark">
              NUMBER OF LOADS
            </h3>
            <select
              onChange={(e) => setLoads(e.target.value)}
              className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
            >
              <option value="Standard (1 load)">Standard (1 load)</option>
              <option value="Lights & Darks (2 loads/bags)(+£9.99/order)(£9.99)">Lights & Darks (2 loads/bags)(+£9.99/order)(£9.99)</option>
            </select>
          </div>
          <div className="mb-5 flex flex-wrap items-center justify-between dark:border-white dark:border-opacity-10">
            <h3 className="pb-2 font-bold leading-tight text-black dark:text-body-color-dark">
              TUMBLE DRYER
            </h3>
            <select
              onChange={(e) => setTumble(e.target.value)}
              className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
            >
              <option value="HOT">HOT</option>
              <option value="MEDIUM">MEDIUM</option>
              <option value="LIGHT(£3.00)">LIGHT(£3.00)</option>
            </select>
          </div>
          <div className="mb-5 flex flex-wrap items-center justify-between dark:border-white dark:border-opacity-10">
            <h3 className="pb-2 font-bold leading-tight text-black dark:text-body-color-dark">
              FINISHING
            </h3>
            <select
              onChange={(e) => setFinishing(e.target.value)}
              className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
            >
              <option value="Wash, Dry & Fold">Wash, Dry & Fold</option>
              <option value="Oven Cleaning(£10.00)">Oven Cleaning(£10.00)</option>
            </select>
          </div>
        </div>
        <h1 className="pt-8 mb-8 text-2xl font-bold leading-tight text-black dark:text-body-color-dark sm:text-4xl sm:leading-tight">
          Dry Cleaning and Laundered Shirt Options
        </h1>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 sm:gap-4">
          <div className="mb-5 flex flex-wrap items-center justify-between dark:border-white dark:border-opacity-10">
            <h3 className="pb-2 font-bold leading-tight text-black dark:text-body-color-dark">
              STARCH ON SHIRTS
            </h3>
            <select
              onChange={(e) => setStarch(e.target.value)}
              className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
            >
              <option value="Light (default)">Light (default)</option>
              <option value="None">None</option>
              <option value="Heavy">Heavy</option>
              <option value="Medium(£0.00)">Medium(£0.00)</option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
};

export default Preference;

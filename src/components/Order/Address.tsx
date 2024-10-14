"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Map from "@/components/Order/Map"

const Address = ({ updateAddress }) => {
  const [postcode, setPostcode] = useState('');
  const [selectedAddress, setSelectedAddress] = useState('');
  const [manualAddress, setManualAddress] = useState('');
  const [detailedAddress, setDetailedAddress] = useState('');
  const [hotelNumber, setHotelNumber] = useState('');
  const [addressType, setAddressType] = useState('home');
  const [positionChecked, setPositionChecked] = useState(false);
  const [manualShow, setManualShow] = useState(false);
  const [address, setAddress] = useState([]);
  const [initialPositionFromPostCode, setInitialPositionFromPostCode] = useState({
    lat: 51.5072,
    lng: 0.1276
  });
  const [mapShow, setMapShow] = useState(false);
  const [position, setPostion] = useState({ lat: 51.5072, lng: 0.1276 })

  useEffect(() => {
    const currentValue = {
      postcode: postcode,
      address: selectedAddress,
      manual: manualAddress,
      detail: detailedAddress,
      type: addressType,
      hotelnumber: hotelNumber,
      hotelname: '',
      position: position,
      positionchecked: positionChecked,
    }
    updateAddress(currentValue);
  }, [postcode, selectedAddress, manualAddress, detailedAddress, hotelNumber, addressType, position, positionChecked])

  /* const dataUpdate = () => {
    const currentValue = {
      postcode: postcode,
      address: selectedAddress,
      manual: manualAddress,
      detail: detailedAddress,
      type: addressType,
      hotelnumber: hotelNumber
    }
    updateAddress(currentValue);
  } */
  //AIzaSyC-NyZbxHv2o8wQMF5lzNqH7pevCakZbuo
  //E63LQ
  const searchAddress = async (value) => {
    const responseAddress = await fetch(`https://www.love2laundry.com/api/getaddresses?postcode=${value}&_=1721037114614`);
    //const response = await fetch(`https://nominatim.openstreetmap.org/search?q=${postcode}&format=json`);
    const adr = await responseAddress.json();
    if (adr["addresses"]) {
      setAddress(adr["addresses"]);
    }
    else {
      setAddress([]);
    }
    if (adr["addresses"]?.[0]?.["address"] !== null) {
      const addressTemp = adr["addresses"]?.[0]?.["address"];
      const responsePosition = await fetch(`https://nominatim.openstreetmap.org/search?q=${addressTemp}&format=json`);
      const pos = await responsePosition.json();
      if (pos[0]) {
        setInitialPositionFromPostCode({ lat: parseFloat(pos[0].lat), lng: parseFloat(pos[0].lon) });
        setMapShow(true);
      }
      else {
        setInitialPositionFromPostCode({ lat: 51.5072, lng: 0.1276 });
      }
    }
  };

  const addressSelectChange = (event) => {
    setSelectedAddress(event.target.value);
    updateMap(event.target.value);
    setManualShow(event.target.value == "Not on the list?")
  };

  const updateMap = async (value) => {
    const responsePosition = await fetch(`https://nominatim.openstreetmap.org/search?q=${value}&format=json`);
      const pos = await responsePosition.json();
      if (pos[0]) {
        setInitialPositionFromPostCode({ lat: parseFloat(pos[0].lat), lng: parseFloat(pos[0].lon) });
        setMapShow(true);
      }
  }

  const addressTypeChange = (value) => {
    setAddressType(value);
  }

  const positionChange = (value) => {
    setPostion(value);
  }

  const checkPosition = () => {
    setPositionChecked(true);
  }

  return (
    <>
      <div className="p-8 rounded-lg shadow-three dark:bg-gray-dark">
        <h1 className="mb-8 text-2xl font-bold leading-tight text-black dark:text-body-color-dark sm:text-4xl sm:leading-tight">
          Find your address
        </h1>
        <div className="mb-5 flex flex-wrap items-center justify-between pb-4 dark:border-white dark:border-opacity-10">
          <h3 className="pb-2 font-bold leading-tight text-black dark:text-body-color-dark">
            POST CODE
          </h3>
          <input
            type="text"
            placeholder="E.G. E12 PE"
            value={postcode}
            onChange={(e) => {
              setPostcode(e.target.value);
              searchAddress(e.target.value);

            }}
            className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
          />
        </div>
        <div className="mb-5 flex flex-wrap items-center justify-between pb-4 dark:border-white dark:border-opacity-10">
          <h3 className="pb-2 font-bold leading-tight text-black dark:text-body-color-dark">
            SELECT YOUR ADDRESS
          </h3>
          <select
            onChange={addressSelectChange}
            className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
          >
            {address.length == 0 &&
              <option value="">Please select your address</option>
            }
            {address && address.map((item, index) => (
              <option key={index} value={item.address}>
                {item.address}
              </option>
            ))}
            {address.length > 0 &&
              <option value="Not on the list?">Not on the list?</option>
            }
          </select>
          {/* E65LQ <input
            type="text"
            placeholder="Please select your address"
            className="border-stroke dark:text-body-color-dark dark:shadow-two mr-4 w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
          /> */}
        </div>
        {
          manualShow && (
            <div className="mb-5 flex flex-wrap items-center justify-between pb-4 dark:border-white dark:border-opacity-10">
              <h3 className="pb-2 font-bold leading-tight text-black dark:text-body-color-dark">
                ENTER YOUR ADDRESS
              </h3>
              <input
                type="text"
                value={manualAddress}
                onChange={(e) =>
                  setManualAddress(e.target.value)
                }
                placeholder="Please enter your address"
                className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
              />
            </div>
          )
        }
        {
          addressType != "hotel" && (
            <div className="mb-5 flex flex-wrap items-center justify-between pb-4 dark:border-white dark:border-opacity-10">
              <h3 className="pb-2 font-bold leading-tight text-black dark:text-body-color-dark">
                ADDRESS DETAILS
              </h3>
              <input
                type="text"
                value={detailedAddress}
                onChange={(e) =>
                  setDetailedAddress(e.target.value)
                }
                placeholder="Please specify any extra address details"
                className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
              />
            </div>
          )
        }
        {
          addressType == "hotel" && (
            <div className="mb-5 flex flex-wrap items-center justify-between pb-4 dark:border-white dark:border-opacity-10">
              <h3 className="pb-2 font-bold leading-tight text-black dark:text-body-color-dark">
                HOTEL ROOM NUMBER
              </h3>
              <input
                type="text"
                value={hotelNumber}
                onChange={(e) =>
                  setHotelNumber(e.target.value)
                }
                placeholder="Enter your hotel room number"
                className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
              />
            </div>
          )
        }
        <div className="mb-5 flex flex-wrap items-center justify-between pb-4 dark:border-white dark:border-opacity-10">
          <h3 className="pb-2 font-bold leading-tight text-black dark:text-body-color-dark">
            CHOOSE YOUR ADDRESS TYPE
          </h3>
          <div className="flex md:flex-row flex-col w-full">
            <button
              /* className={`navbar absolute right-0 z-30 w-[250px] rounded border-[.5px] border-body-color/50 bg-white px-6 py-4 duration-300 dark:border-body-color/20 dark:bg-dark lg:visible lg:static lg:w-auto lg:border-none lg:!bg-transparent lg:p-0 lg:opacity-100 ${addressType == "home" &&
                "hover:border-primary hover:bg-primary/5 hover:text-primary dark:border-primary dark:bg-primary/5 dark:text-primary dark:shadow-none"
                }`} */
              className={`border ${addressType == "home" &&
                "border-primary bg-primary/5 text-primary dark:border-primary dark:bg-primary/5 dark:text-primary dark:shadow-none"}
                flex flex-row items-center justify-center md:basis-1/3 border-stroke dark:text-body-color-dark dark:shadow-two mb-6 rounded-sm bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 hover:border-primary hover:bg-primary/5 hover:text-primary dark:bg-[#2C303B] dark:hover:border-primary dark:hover:bg-primary/5 dark:hover:text-primary dark:hover:shadow-none`}
              onClick={() => addressTypeChange('home')}
            >
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z" /></svg>
              &ensp;&ensp;HOME
            </button>
            <button
              className={`border ${addressType == "office" &&
                "border-primary bg-primary/5 text-primary dark:border-primary dark:bg-primary/5 dark:text-primary dark:shadow-none"}
                flex flex-row items-center justify-center md:basis-1/3 border-stroke dark:text-body-color-dark dark:shadow-two mb-6 rounded-sm bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 hover:border-primary hover:bg-primary/5 hover:text-primary dark:bg-[#2C303B] dark:hover:border-primary dark:hover:bg-primary/5 dark:hover:text-primary dark:hover:shadow-none`}
              onClick={() => addressTypeChange('office')}
            >
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M120-120v-560h160v-160h400v320h160v400H520v-160h-80v160H120Zm80-80h80v-80h-80v80Zm0-160h80v-80h-80v80Zm0-160h80v-80h-80v80Zm160 160h80v-80h-80v80Zm0-160h80v-80h-80v80Zm0-160h80v-80h-80v80Zm160 320h80v-80h-80v80Zm0-160h80v-80h-80v80Zm0-160h80v-80h-80v80Zm160 480h80v-80h-80v80Zm0-160h80v-80h-80v80Z" /></svg>
              &ensp;&ensp;OFFICE
            </button>
            <button
              className={`border ${addressType == "hotel" &&
                "border-primary bg-primary/5 text-primary dark:border-primary dark:bg-primary/5 dark:text-primary dark:shadow-none"}
                flex flex-row items-center justify-center md:basis-1/3 border-stroke dark:text-body-color-dark dark:shadow-two mb-6 rounded-sm bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 hover:border-primary hover:bg-primary/5 hover:text-primary dark:bg-[#2C303B] dark:hover:border-primary dark:hover:bg-primary/5 dark:hover:text-primary dark:hover:shadow-none`}
              onClick={() => addressTypeChange('hotel')}
            >
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M40-200v-600h80v400h320v-320h320q66 0 113 47t47 113v360h-80v-120H120v120H40Zm240-240q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35Zm240 40h320v-160q0-33-23.5-56.5T760-640H520v240ZM280-520q17 0 28.5-11.5T320-560q0-17-11.5-28.5T280-600q-17 0-28.5 11.5T240-560q0 17 11.5 28.5T280-520Zm0-40Zm240-80v240-240Z" /></svg>
              &ensp;&ensp;HOTEL
            </button>
          </div>
        </div>
        <div className="mb-5 flex flex-wrap items-center justify-between pb-4 dark:border-white dark:border-opacity-10">

          <h3 className="pb-2 font-bold leading-tight text-black dark:text-body-color-dark">
            GOOGLE MAP
          </h3>
          <div className="w-full min-h-[400px] flex">
            <Map positionFromPostCode={initialPositionFromPostCode} positionChange={positionChange} />
            {/* <div className="absolute flex self-center object-center z-999">
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z" /></svg>
            </div> */}
          </div>
        </div>
        <div className="flex items-center justify-center mb-5">
          <button
            onClick={checkPosition}
            className="rounded-lg bg-amber-500 px-8 py-4 text-base text-center font-semibold text-white duration-300 ease-in-out hover:bg-amber-500/60"
          >
            Position Verification
          </button>
        </div>
      </div>
    </>
  );
};

export default Address;

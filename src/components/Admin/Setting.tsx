"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import SettingService from "@/api/setting.service";

const Setting = () => {

  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [paymenttoken, setPaymentToken] = useState('');
  const [smtpemail, setSmtpEmail] = useState('');
  const [smtppass, setSmtpPass] = useState('');
  const [receiveremail1, setReceiverEmail1] = useState('');
  const [receiveremail2, setReceiverEmail2] = useState('');

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const response = await SettingService.getAll();
      if (response !== undefined) {
        setAddress(response.address);
        setPhone(response.phone);
        setEmail(response.email);
        setPaymentToken(response.paymenttoken);
        setSmtpEmail(response.smtpemail);
        setSmtpPass(response.smtppass);
        setReceiverEmail1(response.receiveremail1);
        setReceiverEmail2(response.receiveremail2);
      }
    };
    fetchData().catch(error => console.error('Failed to fetch data:', error));
  }, [])

  const onSave = async () => {
    //userid, username, firstname, lastname, email, phone, password
    setLoading(true);
    try {
      const response = await SettingService.update(
        address, 
        phone, 
        email, 
        paymenttoken, 
        smtpemail, 
        smtppass, 
        receiveremail1, 
        receiveremail2
      );
      if (response !== undefined) {
        if (response?.message == "Setting updated successfully!") {
          //router.push('/'); // Navigate on success
          toast.success("Setting updated successfully!");
        }
        else
          toast.warn("Please try again.");
        //toast.warn(response?.message);
      }
      //router.push('/profile'); // Navigate to profile page upon successful login
      //window.location.reload(); // Reload the page
    } catch (error) {
      const resMessage =
        (error.response && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString();
      setMessage(resMessage);
    } finally {
      setLoading(false);
    }
    //toast.success("Saved successfully!")
  }

  return (
    <>
      <div className="p-8">
        <h1 className="mb-8 text-3xl font-bold leading-tight text-black dark:text-body-color-dark sm:text-4xl sm:leading-tight">
          Setting
        </h1>
        <div className="w-full mb-5 grid grid-cols-1 md:grid-cols-2 sm:gap-4">
          <div className="w-full mb-5 flex flex-wrap items-center justify-between dark:border-white dark:border-opacity-10">
            <h3 className="pb-2 font-bold leading-tight text-black dark:text-body-color-dark">
              ADDRESS
            </h3>
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Enter your address for site footer"
              className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
            />
          </div>
          <div className="w-full mb-5 flex flex-wrap items-center justify-between dark:border-white dark:border-opacity-10">
            <h3 className="pb-2 font-bold leading-tight text-black dark:text-body-color-dark">
              TELEPHONE
            </h3>
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Enter your telephone number for site footer"
              className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
            />
          </div>
        </div>
        <div className="w-full mb-5 grid grid-cols-1 md:grid-cols-2 sm:gap-4">
          <div className="mb-5 flex flex-wrap items-center justify-between dark:border-white dark:border-opacity-10">
            <h3 className="pb-2 font-bold leading-tight text-black dark:text-body-color-dark">
              EMAIL
            </h3>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address for site footer"
              className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
            />
          </div>
          <div className="mb-5 flex flex-wrap items-center justify-between dark:border-white dark:border-opacity-10">
            <h3 className="pb-2 font-bold leading-tight text-black dark:text-body-color-dark">
              PAYMENT TOKEN
            </h3>
            <input
              type="text"
              value={paymenttoken}
              onChange={(e) => setPaymentToken(e.target.value)}
              placeholder="Enter your token for payment"
              className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
            />
          </div>
          <div className="mb-5 flex flex-wrap items-center justify-between dark:border-white dark:border-opacity-10">
            <h3 className="pb-2 font-bold leading-tight text-black dark:text-body-color-dark">
              SMTP EMAIL
            </h3>
            <input
              type="email"
              value={smtpemail}
              onChange={(e) => setSmtpEmail(e.target.value)}
              placeholder="Enter your email address for alert"
              className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
            />
          </div>
          <div className="mb-5 flex flex-wrap items-center justify-between dark:border-white dark:border-opacity-10">
            <h3 className="pb-2 font-bold leading-tight text-black dark:text-body-color-dark">
              SMTP PASSWORD
            </h3>
            <input
              type="password"
              value={smtppass}
              onChange={(e) => setSmtpPass(e.target.value)}
              placeholder="Enter your email password for alert"
              className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
            />
          </div>
          <div className="mb-5 flex flex-wrap items-center justify-between dark:border-white dark:border-opacity-10">
            <h3 className="pb-2 font-bold leading-tight text-black dark:text-body-color-dark">
              RECEIVER EMAIL 1
            </h3>
            <input
              type="text"
              value={receiveremail1}
              onChange={(e) => setReceiverEmail1(e.target.value)}
              placeholder="Enter your receiver email address for email alert"
              className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
            />
          </div>
          <div className="mb-5 flex flex-wrap items-center justify-between dark:border-white dark:border-opacity-10">
            <h3 className="pb-2 font-bold leading-tight text-black dark:text-body-color-dark">
              RECEIVER EMAIL 2
            </h3>
            <input
              type="text"
              value={receiveremail2}
              onChange={(e) => setReceiverEmail2(e.target.value)}
              placeholder="Enter your receiver email address for email alert"
              className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
            />
          </div>
        </div>
        <div className="flex flex-row items-center justify-end space-x-2">
          <button
            onClick={onSave}
            className="rounded-lg bg-amber-500 px-7 py-3 text-base text-center font-semibold text-white duration-300 ease-in-out hover:bg-amber-500/60"
          >
            &nbsp;&nbsp;Save&nbsp;&nbsp;
          </button>
        </div>
      </div>
    </>
  );
};

export default Setting;

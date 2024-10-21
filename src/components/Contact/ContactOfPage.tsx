"use client";
import NewsLatterBox from "./NewsLatterBox";
import Image from "next/image";
import React from 'react';
import { useEffect, useState, useCallback } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import HelpService from "@/api/help.service";
import AuthService from "@/api/auth.service";

const ContactOfPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [userId, setUserId] = useState('');

  useEffect(() => {
    /* const fetchUser = async () => {
      const response = await AuthService.getCurrentUser();
      if (response !== null) {
        setName(response.username);
        setEmail(response.email);
        setPhone(response.phone);
        setUserId(response.id);
      }
    };
    fetchUser().catch(error => console.error('Failed to fetch users:', error)); */
  }, [])

  const onSend = async () =>
  {
    if (email.trim() == '' || name.trim() == '' || phone.trim() == '' || message.trim() == '') {
      toast.warn("Please input correctly.")
      return;
    }
    try {
      const response = await HelpService.register(userId, name, email, phone, message);
      if (response !== undefined) {
        if (response?.message == "Help registered successfully!") {
          toast.success(response?.message);
          setName('');
          setEmail('');
          setPhone('');
          setMessage('');
        }
        else
          toast.warn(response?.message);
      }
    } catch (error) {
      const resMessage = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
      toast.error("Server connection failed!");
      toast.warning("Please try later.");
    }
  }

  return (
    <>
      <ToastContainer />
      <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
        <div className="container">
          <div className="-mx-4 flex flex-wrap shadow-xl">
            <div className="w-full px-4">
              <div
                className="mb-12 rounded-sm px-8 py-11 dark:bg-gray-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
                data-wow-delay=".15s
                "
              >
                <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                  Need Help?
                </h2>
                <p className="mb-12 text-base font-medium text-body-color">
                  Our support team will get back to you ASAP via email.
                </p>
                <form>
                  <div className="-mx-4 flex flex-wrap">
                    <div className="w-full px-4 md:w-1/2">
                      <div className="mb-8">
                        <label
                          htmlFor="name"
                          className="mb-3 block text-sm font-medium text-dark dark:text-white"
                        >
                          User Name
                        </label>
                        <input
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Enter your User Name"
                          className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                        />
                      </div>
                    </div>
                    <div className="w-full px-4 md:w-1/2">
                      <div className="mb-8">
                        <label
                          htmlFor="email"
                          className="mb-3 block text-sm font-medium text-dark dark:text-white"
                        >
                          Your Email
                        </label>
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Enter your Email"
                          className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                        />
                      </div>
                    </div>
                    <div className="w-full px-4">
                      <div className="mb-8">
                        <label
                          htmlFor="telephone"
                          className="mb-3 block text-sm font-medium text-dark dark:text-white"
                        >
                          Your Telephone
                        </label>
                        <input
                          type="telephone"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="Enter your Telephone"
                          className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                        />
                      </div>
                    </div>
                    <div className="w-full px-4">
                      <div className="mb-8">
                        <label
                          htmlFor="message"
                          className="mb-3 block text-sm font-medium text-dark dark:text-white"
                        >
                          Your Message
                        </label>
                        <textarea
                          name="message"
                          rows={5}
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          placeholder="Enter your Message"
                          className="border-stroke w-full resize-none rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                        ></textarea>
                      </div>
                    </div>
                    <div className="w-full px-4">
                      <button onClick={onSend} className="text-nowrap rounded-lg bg-primary px-7 py-3 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90 dark:shadow-submit-dark">
                        SUBMIT MESSAGE
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            {/* <div className="w-full px-4 lg:w-5/12 xl:w-4/12 bg-[url('/images/contact/01.jpg')] bg-cover bg-no-repeat">
              <Image src="/images/contact/01.jpg" alt="hero image" width={358} height={500} />
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactOfPage;

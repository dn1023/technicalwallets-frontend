'use client'
import Image from "next/image";
import { Steps } from 'antd';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import CartService from "@/api/cart.service";
import AuthService from "@/api/auth.service";
import { useState, useEffect } from 'react';

const Stamp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [userId, setUserId] = useState('');

  const onSend = async () => {
    if (email.trim() == '' || name.trim() == '' || phone.trim() == '' || message.trim() == '') {
      toast.warn("Please input correctly.")
      return;
    }
    try {
      const userid = AuthService.getCurrentUser() == null ? '0' : AuthService.getCurrentUser().id;
      //userid, productid, category, subcategory, subsubcategory, name, email, message, phone
      const response = await CartService.register(userid, '', 'Stamp', '', '', name, email, phone, message);
      if (response !== undefined) {
        if (response?.message == "Cart registered successfully!") {
          toast.success("Registered successfully!");
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
      <section id="contactdesription" className="overflow-hidden py-16 md:py-20 lg:py-28">
        <div className="container">
          <div className="">
            <div className="-mx-4 flex flex-wrap items-center">
              <div className="w-full px-4">
                {/* <h3 className="mb-4 text-2xl font-bold leading-tight text-dark dark:text-body-color-dark">
                What is a Digital Stamp?
              </h3> */}
                <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                  My team is highly qualified and experienced in architectural, structural, and MEP design and concepturalization of ideas.
                </p>
                <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                  We can design and review any kind of Architecture, Structural or CIVIL and MEP design and give you PE STAMP from licensed engineers USA, Canada, Australia and UK.
                </p>
                <h3 className="mb-4 text-2xl font-bold leading-tight text-dark dark:text-body-color-dark">
                  Licensed & Registered Professional Engineer(P.E.) and Architect in team at:
                </h3>
                <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                  AL, AR, AZ, CA, CO, CT,DC, DE, FL, GA, HI, ID, IN, IO, IL, KS, KY, LA, MA, MD, ME, MI, MN, MO, MS, MT, NC, ND, NE, NH, NJ, NM, NV, NY, OH, OK, OR, PA, RI, SC, TN, TX, UT, VA, VT, WA, WI, WV, WY on USA and AB, BC, NB, NS, PEI in addition to on Canada.
                </p>
                <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                  Please attach your files as links in the message box below.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-wrap pt-16 md:pt-20 lg:pt-28">
            <div
              className="w-full mb-12 rounded-lg"
              data-wow-delay=".15s
                "
            >
              <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                Need Help?
              </h2>
              <p className="mb-12 text-base font-medium text-body-color">
                Our support team will get back to you ASAP via email.
              </p>
              <div className="w-full grid grid-cols-1 md:grid-cols-3 md:space-x-2">
                <div className="">
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
                <div className="">
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
                <div className="">
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
              </div>
              <div className="w-full mb-8">
                <label
                  htmlFor="message"
                  className="mb-3 block text-sm font-medium text-dark dark:text-white"
                >
                  Your Message
                </label>
                <textarea
                  name="message"
                  rows={10}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Enter your Message"
                  className="border-stroke w-full resize-none rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                ></textarea>
              </div>
              <div className="w-full">
                <button onClick={onSend} className="text-nowrap rounded-lg bg-primary px-7 py-3 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90 dark:shadow-submit-dark">
                  SUBMIT MESSAGE
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>

  );
};

export default Stamp;

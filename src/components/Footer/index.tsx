import Image from "next/image";
import Link from "next/link";
import React from 'react';
import { useEffect, useState, useCallback } from "react";
import SubscribeService from "@/api/subscribe.service";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import SettingService from "@/api/setting.service";
import { usePathname } from "next/navigation";

const Footer = () => {
  const path = usePathname();

  const currentYear = new Date().getFullYear();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [location, setLocation] = useState('');
  const [contactAddress, setContactAddress] = useState('Address');
  const [contactPhone, setContactPhone] = useState('Telephone');
  const [contactEmail, setContactEmail] = useState('Email');

  useEffect(() => {
    const fetchData = async () => {
      const response = await SettingService.getAll();
      if (response !== undefined) {
        setContactAddress(response.address);
        setContactPhone(response.phone);
        setContactEmail(response.email);
      }
    };
    fetchData().catch(error => console.error('Failed to fetch data:', error));
  }, [])

  useEffect(() => {
    setLocation(path);
  }, [path]);

  const onSubscribe = async () => {
    if (name.trim() == '' || email.trim() == '') {
      toast.warn("Please check email adress and password.")
      return;
    }
    try {
      const response = await SubscribeService.register(name, email);
      if (response !== undefined) {
        if (response?.message == "Subscribe registered successfully!") {
          toast.success(response?.message);
        }
        else
          toast.warn(response?.message);
        setName('');
        setEmail('');
      }
    } catch (error) {
      const resMessage = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
      toast.error("Server connection failed!");
      toast.warning("Please try later.");
    } finally {

    }
  }

  return (
    <>
      {location == "/message" || location == "/profile" || location == "/admin" ? (<></>) : (
        <footer className="relative z-10 bg-white dark:bg-gray-dark bg-[url('/images/footer/01.jpg')] bg-cover bg-center bg-no-repeat">
          <div className="backdrop-blur-lg bg-white/60 dark:bg-gray-dark pt-16 md:pt-20 lg:pt-24">
            <div className="container">
              <div className="-mx-4 flex flex-wrap">
                <div className="w-full px-4 md:w-1/2 flex items-center justify-center md:justify-left">
                  <div className="mb-12 max-w-[450px] lg:mb-16">
                    <Link href="/" className="mb-8 inline-block">
                      {/* <Image
                    src="/images/logo/logo-2.png"
                    alt="logo"
                    className="w-full dark:hidden"
                    width={140}
                    height={30}
                  /> */}
                      <Image
                        src="/images/logo/logo.png"
                        alt="logo"
                        className="w-full"
                        width={140}
                        height={30}
                      />
                    </Link>{/* 
                <p className="mb-9 text-base leading-relaxed text-body-color dark:text-body-color-dark">
                  My information
                </p> */}
                    <ul className="mb-9 text-base leading-relaxed text-black dark:text-body-color-dark">
                      <li>
                        <Link
                          href="https://www.google.com/maps/place/Dry+Cleaning+White+And+Bright/@51.530682,0.03955,17z/data=!4m16!1m9!3m8!1s0x47d8a7ceca0e8d3f:0xacff1cc17f0c3824!2sDry+Cleaning+White+And+Bright!8m2!3d51.5306879!4d0.0395535!9m1!1b1!16s%2Fg%2F11c2phb6w4!3m5!1s0x47d8a7ceca0e8d3f:0xacff1cc17f0c3824!8m2!3d51.5306879!4d0.0395535!16s%2Fg%2F11c2phb6w4?entry=ttu"
                          className="flex flex-row items-center mb-4 inline-block text-black dark:text-body-color-dark duration-300 hover:text-amber-500"
                        >
                          <Image alt="Social Link" src="/images/footer/location.png" width={16} height={16}></Image>
                          &ensp;&ensp;{contactAddress}
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="https://www.google.com/maps/place/Dry+Cleaning+White+And+Bright/@51.530682,0.03955,17z/data=!4m16!1m9!3m8!1s0x47d8a7ceca0e8d3f:0xacff1cc17f0c3824!2sDry+Cleaning+White+And+Bright!8m2!3d51.5306879!4d0.0395535!9m1!1b1!16s%2Fg%2F11c2phb6w4!3m5!1s0x47d8a7ceca0e8d3f:0xacff1cc17f0c3824!8m2!3d51.5306879!4d0.0395535!16s%2Fg%2F11c2phb6w4?entry=ttu"
                          className="flex flex-row items-center mb-4 inline-block text-black dark:text-body-color-dark duration-300 hover:text-amber-500"
                        >
                          <Image alt="Social Link" src="/images/footer/mail.png" width={16} height={16}></Image>
                          &ensp;&ensp;{contactEmail}
                        </Link>
                      </li>
                    </ul>
                    {/* <>facebook twitter youtube linkedin instagram tiktok</> */}
                    <div className="flex items-center">
                      <a
                        href="/"
                        aria-label="social-link"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mr-6 text-black dark:text-body-color-dark duration-300 hover:text-amber-500"
                      >
                        <Image alt="Social Link" src="/images/footer/facebook.png" width={16} height={16}></Image>
                      </a>
                      <a
                        href="/"
                        aria-label="social-link"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mr-6 text-black dark:text-body-color-dark duration-300 hover:text-amber-500"
                      >
                        <Image alt="Social Link" src="/images/footer/twitter.png" width={16} height={16}></Image>
                      </a>
                      <a
                        href="/"
                        aria-label="social-link"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mr-6 text-black dark:text-body-color-dark duration-300 hover:text-amber-500"
                      >
                        <Image alt="Social Link" src="/images/footer/youtube.png" width={16} height={16}></Image>
                      </a>
                      <a
                        href="/"
                        aria-label="social-link"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mr-6 text-black dark:text-body-color-dark duration-300 hover:text-amber-500"
                      >
                        <Image alt="Social Link" src="/images/footer/linkedin.png" width={16} height={16}></Image>
                      </a>
                      <a
                        href="/"
                        aria-label="social-link"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mr-6 text-black dark:text-body-color-dark duration-300 hover:text-amber-500"
                      >
                        <Image alt="Social Link" src="/images/footer/instagram.png" width={16} height={16}></Image>
                      </a>
                      <a
                        href="/"
                        aria-label="social-link"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mr-6 text-black dark:text-body-color-dark duration-300 hover:text-amber-500"
                      >
                        <Image alt="Social Link" src="/images/footer/tiktok.png" width={16} height={16}></Image>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="w-full px-4 md:w-1/2 flex items-center justify-center">
                  {/* <div className="w-full flex flex-nowrap justify-between">
                <div className="px-4">
                  <div className="mb-12 lg:mb-16">
                    <h2 className="mb-10 text-xl font-bold text-black dark:text-body-color-dark">
                      Useful Links
                    </h2>
                    <ul>
                      <li>
                        <Link
                          href="/"
                          className="mb-4 inline-block text-base text-black dark:text-body-color-dark duration-300 hover:text-amber-500"
                        >
                          Feature
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/"
                          className="mb-4 inline-block text-base text-black dark:text-body-color-dark duration-300 hover:text-amber-500"
                        >
                          Offer
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/"
                          className="mb-4 inline-block text-base text-black dark:text-body-color-dark duration-300 hover:text-amber-500"
                        >
                          About
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="px-4">
                  <div className="mb-12 lg:mb-16">
                    <h2 className="mb-10 text-xl font-bold text-black dark:text-body-color-dark">
                      Terms
                    </h2>
                    <ul>
                      <li>
                        <Link
                          href="/"
                          className="mb-4 inline-block text-base text-black dark:text-body-color-dark duration-300 hover:text-amber-500"
                        >
                          TOS
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/"
                          className="mb-4 inline-block text-base text-black dark:text-body-color-dark duration-300 hover:text-amber-500"
                        >
                          Privacy Policy
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/"
                          className="mb-4 inline-block text-base text-black dark:text-body-color-dark duration-300 hover:text-amber-500"
                        >
                          Refund Policy
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="px-4">
                  <div className="mb-12 lg:mb-16">
                    <h2 className="mb-10 text-xl font-bold text-black dark:text-body-color-dark">
                      Support & Help
                    </h2>
                    <ul>
                      <li>
                        <Link
                          href="/contact"
                          className="mb-4 inline-block text-base text-black dark:text-body-color-dark duration-300 hover:text-amber-500"
                        >
                          Open Support Ticket
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/"
                          className="mb-4 inline-block text-base text-black dark:text-body-color-dark duration-300 hover:text-amber-500"
                        >
                          Terms of Use
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/"
                          className="mb-4 inline-block text-base text-black dark:text-body-color-dark duration-300 hover:text-amber-500"
                        >
                          About
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div> */}
                  <div className="max-w-[300px]">
                    <h3 className="mb-4 text-2xl font-bold leading-tight text-black dark:text-white">
                      Subscribe to receive future updates
                    </h3>
                    <div>
                      <input
                        type="text"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter your Name"
                        className="border-stroke mb-4 w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      />
                      <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your Email"
                        className="border-stroke mb-4 w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      />
                      <button
                        onClick={onSubscribe}
                        className="mb-5 flex w-full cursor-pointer items-center justify-center rounded-lg bg-amber-500 px-7 py-3 text-base font-medium text-white shadow-submit duration-300 hover:bg-amber-500/90 dark:shadow-submit-dark"
                      >
                        Subscribe
                      </button>
                      <p className="text-center text-base leading-relaxed text-body-color dark:text-body-color-dark">
                        No spam guaranteed, So please don&apos;t send any spam mail.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-px w-full bg-gradient-to-r from-transparent via-[#D2D8E183] to-transparent dark:via-[#959CB183]"></div>
              <div className="py-8">
                <p className="text-center text-base text-black dark:text-body-color-dark">
                  Copyright {" "}
                  <a
                    href="/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-amber-500"
                  >
                    © {currentYear}
                  </a>{" "}
                  <a
                    href="/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-amber-500"
                  >
                    Technical Wallet
                  </a>
                </p>
              </div>
            </div>
          </div>
        </footer>
      )}

    </>
  );
};

export default Footer;

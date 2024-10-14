"use client";

import Link from "next/link";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Hero = () => {
  return (
    <>
      <div className="w-full flex flex-wrap items-center">
        <div
          className="mx-auto overflow-hidden"
          data-wow-delay=".15s"
        >
          <div className="relative aspect-[90/40] items-center justify-center">
            <Carousel
              showArrows={true}
              showIndicators={true}
              infiniteLoop={true}
              dynamicHeight={false}
              showThumbs={false}
              autoPlay={true}
              showStatus={false}
            >
              <div>
                <img src="/images/hero/slider-1.jpg" alt="slides" />
              </div>
              <div>
                <img src="/images/hero/slider-2.jpg" alt="slides" />
              </div>
              <div>
                <img src="/images/hero/slider-3.jpg" alt="slides" />
              </div>
            </Carousel>
          </div>
        </div>
        {/* <div className="absolute">
          <div className="hidden lg:block aspect-[90/40]">
            <Image src="/images/hero/back.png" alt="hero image" width={700} height={900} />
          </div>
        </div> */}
        {/* bg-[url('/images/hero/back.png')] bg-contain bg-left-top bg-no-repeat */}
        <div className="md:absolute container">
          <div className="-mx-4 flex flex-wrap items-center justify-center">
            <div className="w-full px-4 lg:w-6/12 sm:pt-[30px] md:pb-[30px] sm:pb-[30px] xs:pb-[30px]">
              <div className="flex flex-col items-center justify-center mx-[40px] max-w-[800px]">
                <div className="text-lime-800 font-bold text-[28px]">
                  BEST LAUNDRY SOLUTION
                </div>
                <div className="mb-5 font-bold leading-tight text-black dark:text-white md:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                  Laundry & Dry Cleaning<br />
                  with 24h Service for you <br />
                  in LonDon
                </div>
                <p className="mb-12 !leading-relaxed dark:text-body-color-dark text-black md:text-white sm:text-lg md:text-xl">
                  At Dry Cleaning White and Bright, we take pride in delivering high-quality laundry and dry cleaning solutions in London, ensuring your garments receive the care and attention they deserve.
                </p>
                <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                  <Link
                    href="/order"
                    className="rounded-xl bg-amber-500 px-8 py-4 text-base font-semibold text-white transition delay-150 duration-300 ease-in-out hover:bg-amber-500/80"
                  >
                    SCHEDULE YOUR PICKUP<br />
                    IN NEXT 30 MINUTES
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-full px-4 lg:w-6/12">
            </div>
          </div>
        </div>
        
      </div>
      <section
        id="home"
        className="relative z-10 overflow-hidden pt-[120px] dark:bg-gray-dark md:pt-[150px] xl:pt-[80px] 2xl:pt-[100px]"
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap items-center justify-center">
            <div className="w-full px-4 sm:w-6/12 md:w-3/12 md:pb-[30px] sm:pb-[30px] xs:pb-[30px] hover:animate-tada">
              <div className="mx-auto max-w-[800px] h-[300px] bg-lime-500 rounded-md flex flex-col items-center justify-center">
                <Image src="/images/hero/washing.png" alt="hero image" width={65} height={65} />
                <p className="text-white font-bold sm:text-lg md:text-xl p-2">Quality Service</p>
                <p className="text-white text-base text-center mx-4">Quality service is the cornerstone of customer satisfaction.</p>
              </div>
            </div>
            <div className="w-full px-4 sm:w-6/12 md:w-3/12 pb-[30px] md:pb-0 hover:animate-tada">
              <div className="mx-auto max-w-[800px] h-[300px] bg-blue-950 rounded-md flex flex-col items-center justify-center">
                <Image src="/images/hero/cargo.png" alt="hero image" width={65} height={65} />
                <p className="text-white font-bold sm:text-lg md:text-xl p-2">Order & Pay Online</p>
                <p className="text-white text-base text-center mx-4">Our system enable customers to place orders and make payments via websites or mobile apps.</p>
              </div>
            </div>
            <div className="w-full px-4 sm:w-6/12 md:w-3/12 md:pb-[30px] sm:pb-[30px] xs:pb-[30px] hover:animate-tada">
              <div className="mx-auto max-w-[800px] h-[300px] bg-lime-500 rounded-md flex flex-col items-center justify-center">
                <Image src="/images/hero/delivery.png" alt="hero image" width={65} height={65} />
                <p className="text-white font-bold sm:text-lg md:text-xl p-2">Fast Delivery</p>
                <p className="text-white text-base text-center mx-4">Experience the convenience of our fast delivery laundry service, ensuring your clothes are cleaned and returned to you swiftly without compromising on quality.</p>
              </div>
            </div>
            <div className="w-full px-4 sm:w-6/12 md:w-3/12 pb-[30px] md:pb-0 hover:animate-tada">
              <div className="mx-auto max-w-[800px] h-[300px] bg-blue-950 rounded-md flex flex-col items-center justify-center">
                <Image src="/images/hero/hand.png" alt="hero image" width={65} height={65} />
                <p className="text-white font-bold sm:text-lg md:text-xl p-2">Affordable Pricing</p>
                <p className="text-white text-base text-center mx-4">Our laundry service offers affordable pricing, ensuring that you can enjoy fresh, clean clothes without breaking the bank.</p>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="container">
          <div className="-mx-4 flex flex-wrap items-center justify-center">
            <div className="w-full px-4 lg:w-6/12 md:pb-[30px] sm:pb-[30px] xs:pb-[30px]">
              <div className="mx-auto max-w-[800px] text-center">
                <h1 className="mb-5 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                  Laundry & Dry Cleaning<br />
                  with 24h Service in<br />
                  LonDon
                </h1>
                <p className="mb-12 text-base !leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg md:text-xl">
                  ---Dry Cleaning White and Bright---
                </p>
                <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                  <Link
                    href="/order"
                    className="rounded-xl bg-amber-500 px-8 py-4 text-base font-semibold text-white transition delay-150 duration-300 ease-in-out hover:bg-amber-500/80"
                  >
                    SCHEDULE YOUR PICKUP<br />
                    IN NEXT 30 MINUTES
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-full px-4 lg:w-6/12">
              <div className="mx-auto max-w-[800px] text-center hidden lg:block">
                <Image src="/images/hero/laundry.png" alt="hero image" width={750} height={600} />
              </div>
            </div>
          </div>
        </div> */}
      </section>
    </>
  );
};

export default Hero;

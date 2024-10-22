"use client";

import Link from "next/link";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Carousel as AntdCarousel } from 'antd';

const Hero = () => {
  return (
    <>
      <div className="hidden">
        <div className="w-full h-[900px] flex flex-wrap items-center bg-[url('/images/hero/ant4.jpg')] bg-cover bg-left-top bg-no-repeat">
          <div className="container">
            <div className="-mx-4 flex flex-wrap items-center justify-center">
              <div className="w-full md:w-1/2 px-4">
                <div className="flex flex-col items-center justify-center">
                  <Image src="/images/favicon_large.png" alt="Picture of the hero" className="" width={500} height={500} />
                  {/* <div className="w-full text-center text-black uppercase font-bold text-[28px] backdrop-blur-sm bg-white/70 p-3">
                    Architectural Digital Products
                  </div>
                  <div className="w-full text-center px-5 py-10 font-bold leading-tight backdrop-blur-sm text-black dark:text-white md:text-amber-500 sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                    LET&apos;S BUILD YOUR DREAM<br/>
                    OF HAVING A HOME
                  </div>
                  <p className="w-full mb-12 !leading-relaxed dark:text-body-color-dark text-black md:text-black sm:text-lg md:text-xl">
                    Our architectural design products and services offer a comprehensive approach to transforming your vision into reality. We specialize in creating cutting-edge architectural solutions that blend functionality with aesthetic appeal.
                  </p>
                  <div className="flex flex-col pt-[10px] items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                    <Link
                      href="/order"
                      className="bg-amber-500 px-7 py-3 text-base font-semibold text-white transition delay-150 duration-300 ease-in-out hover:bg-amber-500/80 rounded-lg"
                    >
                      SHOW PRODUCTS
                    </Link>
                  </div> */}
                </div>
              </div>
              {/* <div className="w-1/2 px-4 flex flex-wrap">
                <div className="ml-[200px] mt-[-250px] z-[2]">
                  <Image src="/images/hero/hero1.jpg" alt="hero image" width={500} height={500} />
                </div>
                <div className="mt-[-350px]">
                  <Image src="/images/hero/hero2.jpg" alt="hero image" width={500} height={500} />
                </div>
              </div> */}
              <div className="hidden 2xl:block md:relative w-full md:w-1/2 flex flex-wrap">
                <div className="absolute inset-0 flex flex-col justify-center items-center -left-32 -translate-y-40 z-[1] rotate-6 drop-shadow-xl rounded-lg">
                  <Image src="/images/hero/hero1.png" alt="Picture of the hero" className="rounded-lg border-solid border-2 border-white shadow-2xl max-w-xs transition duration-300 ease-in-out hover:scale-110" width={400} height={400} />
                </div>
                <div className="absolute flex flex-col justify-center items-center drop-shadow-xl right-0 -bottom-16 rounded-lg">
                  <Image src="/images/hero/hero2.png" className="rounded-lg border-solid border-2 border-white shadow-2xl max-w-xs transition duration-300 ease-in-out hover:scale-110" alt="Picture of the hero" width={400} height={400} />
                </div>
                <div className="absolute inset-0 flex flex-col justify-center items-center left-12 -rotate-12 translate-y-40 z-[2] drop-shadow-xl rounded-lg">
                  <Image src="/images/hero/hero3.png" className="rounded-lg border-solid border-2 border-white shadow-2xl max-w-xs transition duration-300 ease-in-out hover:scale-110" alt="Picture of the hero" width={400} height={400} />
                </div>
              </div>
              {/* <div className="w-full px-4 lg:w-6/12">
              </div> */}
            </div>
          </div>
        </div>
      </div>
      <div className="relative aspect-video w-full hidden md:block">
        <video
          className="w-full object-cover"
          src="/images/video/back.mp4"
          controls
          autoPlay
          loop
        >
          <source src="/images/video/back1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 items-center flex justify-center bg-black/50">
          {/* <h2 className="text-white text-2xl font-bold">"Our 3D Animation"</h2> */}
          {/* <Image src="/images/favicon_large.png" alt="Picture of the hero" className="" width={500} height={500} /> */}
          <div>
            <div className="w-full text-center text-black uppercase font-bold text-[28px] backdrop-blur-sm bg-white/70 p-3">
              Architectural Digital Products
            </div>
            <div className="w-full text-center px-5 py-10 font-bold leading-tight backdrop-blur-sm text-black dark:text-white md:text-amber-500 sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
              LET&apos;S BUILD YOUR DREAM<br />
              OF HAVING A HOME
            </div>
            <div className="w-full text-center text-black uppercase font-bold text-[28px] backdrop-blur-sm bg-white/70 p-3">
              Welcome to Our Service!
            </div>
          </div>
        </div>
      </div>
      {/* relative z-10 overflow-hidden bg-[url('/images/choice/slider-2.jpg')] bg-center bg-no-repeat */}
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
    </>
  );
};

export default Hero;

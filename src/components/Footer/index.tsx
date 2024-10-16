"use client";
import Image from "next/image";
import Link from "next/link";
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <footer className="relative z-10 bg-white dark:bg-gray-dark bg-[url('/images/footer/01.jpg')] bg-cover bg-center bg-no-repeat">
        <div className="backdrop-blur-lg dark:bg-gray-dark pt-16 md:pt-20 lg:pt-24">
          <div className="container">
            <div className="-mx-4 flex flex-wrap">
              <div className="w-full px-4 md:w-1/2 lg:w-4/12 xl:w-5/12">
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
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z" /></svg>
                        &ensp;&ensp;United Arab Emirates
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://www.google.com/maps/place/Dry+Cleaning+White+And+Bright/@51.530682,0.03955,17z/data=!4m16!1m9!3m8!1s0x47d8a7ceca0e8d3f:0xacff1cc17f0c3824!2sDry+Cleaning+White+And+Bright!8m2!3d51.5306879!4d0.0395535!9m1!1b1!16s%2Fg%2F11c2phb6w4!3m5!1s0x47d8a7ceca0e8d3f:0xacff1cc17f0c3824!8m2!3d51.5306879!4d0.0395535!16s%2Fg%2F11c2phb6w4?entry=ttu"
                        className="flex flex-row items-center mb-4 inline-block text-black dark:text-body-color-dark duration-300 hover:text-amber-500"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z" />
                        </svg>
                        &ensp;&ensp;+123&ensp;4567890
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://www.google.com/maps/place/Dry+Cleaning+White+And+Bright/@51.530682,0.03955,17z/data=!4m16!1m9!3m8!1s0x47d8a7ceca0e8d3f:0xacff1cc17f0c3824!2sDry+Cleaning+White+And+Bright!8m2!3d51.5306879!4d0.0395535!9m1!1b1!16s%2Fg%2F11c2phb6w4!3m5!1s0x47d8a7ceca0e8d3f:0xacff1cc17f0c3824!8m2!3d51.5306879!4d0.0395535!16s%2Fg%2F11c2phb6w4?entry=ttu"
                        className="flex flex-row items-center mb-4 inline-block text-black dark:text-body-color-dark duration-300 hover:text-amber-500"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M480-400q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm-40-240v-200h80v200h-80Zm0 520v-200h80v200h-80Zm200-320v-80h200v80H640Zm-520 0v-80h200v80H120Z" /></svg>
                        &ensp;&ensp;United Arab Emirates
                      </Link>
                    </li>
                  </ul>
                  <div className="flex items-center">
                    <a
                      href="/"
                      aria-label="social-link"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mr-6 text-black dark:text-body-color-dark duration-300 hover:text-amber-500"
                    >
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.1 10.4939V7.42705C12.1 6.23984 13.085 5.27741 14.3 5.27741H16.5V2.05296L13.5135 1.84452C10.9664 1.66676 8.8 3.63781 8.8 6.13287V10.4939H5.5V13.7183H8.8V20.1667H12.1V13.7183H15.4L16.5 10.4939H12.1Z"
                          fill="currentColor"
                        />
                      </svg>
                    </a>
                    <a
                      href="/"
                      aria-label="social-link"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mr-6 text-black dark:text-body-color-dark duration-300 hover:text-amber-500"
                    >
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M13.9831 19.25L9.82094 13.3176L4.61058 19.25H2.40625L8.843 11.9233L2.40625 2.75H8.06572L11.9884 8.34127L16.9034 2.75H19.1077L12.9697 9.73737L19.6425 19.25H13.9831ZM16.4378 17.5775H14.9538L5.56249 4.42252H7.04674L10.808 9.6899L11.4584 10.6039L16.4378 17.5775Z"
                          fill="currentColor"
                        />
                      </svg>
                    </a>
                    <a
                      href="/"
                      aria-label="social-link"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mr-6 text-black dark:text-body-color-dark duration-300 hover:text-amber-500"
                    >
                      <svg
                        width="18"
                        height="14"
                        viewBox="0 0 18 14"
                        className="fill-current"
                      >
                        <path d="M17.5058 2.07119C17.3068 1.2488 16.7099 0.609173 15.9423 0.395963C14.5778 7.26191e-08 9.0627 0 9.0627 0C9.0627 0 3.54766 7.26191e-08 2.18311 0.395963C1.41555 0.609173 0.818561 1.2488 0.619565 2.07119C0.25 3.56366 0.25 6.60953 0.25 6.60953C0.25 6.60953 0.25 9.68585 0.619565 11.1479C0.818561 11.9703 1.41555 12.6099 2.18311 12.8231C3.54766 13.2191 9.0627 13.2191 9.0627 13.2191C9.0627 13.2191 14.5778 13.2191 15.9423 12.8231C16.7099 12.6099 17.3068 11.9703 17.5058 11.1479C17.8754 9.68585 17.8754 6.60953 17.8754 6.60953C17.8754 6.60953 17.8754 3.56366 17.5058 2.07119ZM7.30016 9.44218V3.77687L11.8771 6.60953L7.30016 9.44218Z" />
                      </svg>
                    </a>
                    <a
                      href="/"
                      aria-label="social-link"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mr-6 text-black dark:text-body-color-dark duration-300 hover:text-amber-500"
                    >
                      <svg
                        width="17"
                        height="16"
                        viewBox="0 0 17 16"
                        className="fill-current"
                      >
                        <path d="M15.2196 0H1.99991C1.37516 0 0.875366 0.497491 0.875366 1.11936V14.3029C0.875366 14.8999 1.37516 15.4222 1.99991 15.4222H15.1696C15.7943 15.4222 16.2941 14.9247 16.2941 14.3029V1.09448C16.3441 0.497491 15.8443 0 15.2196 0ZM5.44852 13.1089H3.17444V5.7709H5.44852V13.1089ZM4.29899 4.75104C3.54929 4.75104 2.97452 4.15405 2.97452 3.43269C2.97452 2.71133 3.57428 2.11434 4.29899 2.11434C5.02369 2.11434 5.62345 2.71133 5.62345 3.43269C5.62345 4.15405 5.07367 4.75104 4.29899 4.75104ZM14.07 13.1089H11.796V9.55183C11.796 8.7061 11.771 7.58674 10.5964 7.58674C9.39693 7.58674 9.222 8.53198 9.222 9.47721V13.1089H6.94792V5.7709H9.17202V6.79076H9.19701C9.52188 6.19377 10.2466 5.59678 11.3711 5.59678C13.6952 5.59678 14.12 7.08925 14.12 9.12897V13.1089H14.07Z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
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

              <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
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

              <div className="w-full px-4 md:w-1/2 lg:w-4/12 xl:w-3/12">
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
    </>
  );
};

export default Footer;

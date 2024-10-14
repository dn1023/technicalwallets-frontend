"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';
import AuthService from "@/api/auth.service";
import ThemeToggler from "./ThemeToggler";
import menuData from "./menuData";
import { Tourney } from "next/font/google";
import { useStyleRegistry } from "styled-jsx";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

const Header = () => {
  // Navbar toggle
  const router = useRouter();
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [logined, setLogined] = useState(false);
  const [admin, setAdmin] = useState(false);

  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  // Sticky Navbar
  const [sticky, setSticky] = useState(false);
  const handleStickyNavbar = () => {
    if (window.scrollY > 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
  }, []);

  useEffect(() => {
    const user = AuthService.getCurrentUser();
    if (user !== null) {
      console.log(user);
      setLogined(true);
      if (user.roles.includes("ROLE_ADMIN")) {
        setAdmin(true);
      }
    }
  }, [])

  // submenu handler
  const [openIndex, setOpenIndex] = useState(-1);
  const handleSubmenu = (index) => {
    if (openIndex === index) {
      setOpenIndex(-1);
    } else {
      setOpenIndex(index);
    }
  };

  const logOut = () => {
    AuthService.logout();
    setLogined(false);
    setAdmin(false);
    router.push('/');
  }

  /* const handleOrder = () => {
    const currentUser = AuthService.getCurrentUser();
    if(currentUser == null)
    {
      toast.warning("Please sign in.");
    }
    else
      router.push('/order');
  } */

  return (
    <>
      <div className="bg-[#00c6ff] dark:bg-gray-dark hidden lg:block">
        <div className="w-full flex items-center justify-between py-[10px] container">
          <div className="flex items-center justify-start space-x-2">
            <div className="w-[40px] h-[40px] flex items-center justify-center bg-lime-500 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffffff"><path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z" /></svg>
            </div>
            <div className="flex flex-col">
              <div className="text-lime-700 text-lg">
                &ensp;Address
              </div>
              <div className="dark:text-body-color-dark">
                &ensp;31 Barking Rd, London E6 1PW
              </div>
            </div>
            <div className="w-[40px] h-[40px] flex items-center justify-center bg-lime-500 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffffff"><path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z"/></svg>
            </div>
            <div className="flex flex-col">
              <div className="text-lime-700 text-lg">
                &ensp;Mail Us
              </div>
              <div className="dark:text-body-color-dark">
              &ensp;iftikhar.bhalli@gmail.com
              </div>
            </div>
            <div className="w-[40px] h-[40px] flex items-center justify-center bg-lime-500 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffffff"><path d="M480-80q-75 0-140.5-28.5t-114-77q-48.5-48.5-77-114T120-440q0-75 28.5-140.5t77-114q48.5-48.5 114-77T480-800q75 0 140.5 28.5t114 77q48.5 48.5 77 114T840-440q0 75-28.5 140.5t-77 114q-48.5 48.5-114 77T480-80Zm0-360Zm112 168 56-56-128-128v-184h-80v216l152 152ZM224-866l56 56-170 170-56-56 170-170Zm512 0 170 170-56 56-170-170 56-56ZM480-160q117 0 198.5-81.5T760-440q0-117-81.5-198.5T480-720q-117 0-198.5 81.5T200-440q0 117 81.5 198.5T480-160Z"/></svg>
            </div>
            <div className="flex flex-col">
              <div className="text-lime-700 text-lg">
                &ensp;Opening
              </div>
              <div  className="dark:text-body-color-dark">
                &ensp;08:00 ~ 20:00
              </div>
            </div>
          </div>
          <div className="flex items-center justify-end space-x-2">
            <Link
              href="/"
              className="w-[40px] h-[40px] flex items-center justify-center hover:bg-lime-600 bg-lime-500 rounded-full">
              <Image
                  src="/images/header/facebook.png"
                  alt="logo"
                  width={24}
                  height={24}
              />
            </Link>
            <Link
              href="/"
              className="w-[40px] h-[40px] flex items-center justify-center hover:bg-lime-600 bg-lime-500 rounded-full">
              <Image
                  src="/images/header/twitter.png"
                  alt="logo"
                  width={24}
                  height={24}
              />
            </Link>
            <Link
              href="/"
              className="w-[40px] h-[40px] flex items-center justify-center hover:bg-lime-600 bg-lime-500 rounded-full">
              <Image
                  src="/images/header/instagram.png"
                  alt="logo"
                  width={24}
                  height={24}
              />
            </Link>
            <Link
              href="/"
              className="w-[40px] h-[40px] flex items-center justify-center hover:bg-lime-600 bg-lime-500 rounded-full">
              <Image
                  src="/images/header/linkedin.png"
                  alt="logo"
                  width={24}
                  height={24}
              />
            </Link>
          </div>
        </div>      
      </div>
      <div className={`${sticky ? "h-[60px]" : ""}`}>

      </div>
      <header
        className={`header left-0 z-40 flex flex-col w-full items-center ${sticky
          ? "top-0 dark:bg-gray-dark dark:shadow-sticky-dark fixed z-[9999] bg-white !bg-opacity-80 shadow-sticky backdrop-blur-sm transition"
          : "bg-transparent top-[60px]"
          }`}
      >
        {/*I removed absolute*/}
        <div className="container">
          <div className="relative -mx-4 flex items-center justify-between">
            <div className="w-80 max-w-full px-4 xl:mr-12">
              <Link
                href="/"
                className={`header-logo block w-full ${sticky ? "py-5 lg:py-2" : "py-8"
                  } `}
              >
                <Image
                  src="/images/logo/logo-2.png"
                  alt="logo"
                  width={140}
                  height={30}
                  className="w-full dark:hidden"
                />
                <Image
                  src="/images/logo/logo.png"
                  alt="logo"
                  width={140}
                  height={30}
                  className="hidden w-full dark:block"
                />
              </Link>
            </div>
            <div className="flex w-full items-center justify-between px-4">
              <div>
                <button
                  onClick={navbarToggleHandler}
                  id="navbarToggler"
                  aria-label="Mobile Menu"
                  className="absolute right-4 top-1/2 block translate-y-[-50%] rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden"
                >
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${navbarOpen ? " top-[7px] rotate-45" : " "
                      }`}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${navbarOpen ? "opacity-0 " : " "
                      }`}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${navbarOpen ? " top-[-8px] -rotate-45" : " "
                      }`}
                  />
                </button>
                <nav
                  id="navbarCollapse"
                  className={`navbar absolute right-0 z-30 w-[250px] rounded border-[.5px] border-body-color/50 bg-white px-6 py-4 duration-300 dark:border-body-color/20 dark:bg-dark lg:visible lg:static lg:w-auto lg:border-none lg:!bg-transparent lg:p-0 lg:opacity-100 ${navbarOpen
                    ? "visibility top-full opacity-100"
                    : "invisible top-[120%] opacity-0"
                    }`}
                >
                  <ul className="block lg:flex lg:space-x-10">
                    <li className="group relative">
                      <Link
                        href="/#hero"
                        className="flex py-2 text-base lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
                      >
                        Home
                      </Link>

                    </li>
                    <li className="group relative">
                      <Link
                        href="/#features"
                        className="flex py-2 text-base lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
                      >
                        Feature
                      </Link>
                    </li>
                    <li className="group relative">
                      <Link
                        href="/#offers"
                        className="flex py-2 text-base lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
                      >
                        Offer
                      </Link>
                    </li>
                    <li className="group relative">
                      <Link
                        href="/#services"
                        className="flex py-2 text-base lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
                      >
                        Service
                      </Link>
                    </li>
                    <li className="group relative">
                      <Link
                        href="/#solution"
                        className="flex py-2 text-base lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
                      >
                        About
                      </Link>
                    </li>
                    {menuData.map((menuItem, index) => (
                      <li key={index} className="group relative">
                        {menuItem.path ? (
                          <>
                            {/* <Link
                            href={"menuItem.path"}
                            className={`flex py-2 text-base lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 ${usePathName === menuItem.path
                              ? "text-primary dark:text-white"
                              : "text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
                              }`}
                          >
                            {menuItem.title}
                          </Link> */}
                          </>
                        ) : (
                          <>
                            {/* <p
                              onClick={() => handleSubmenu(index)}
                              className="flex cursor-pointer items-center justify-between py-2 text-base text-dark group-hover:text-primary dark:text-white/70 dark:group-hover:text-white lg:mr-0 lg:inline-flex lg:px-0 lg:py-6"
                            >
                              {menuItem.title}
                              <span className="pl-3">
                                <svg width="25" height="24" viewBox="0 0 25 24">
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M6.29289 8.8427C6.68342 8.45217 7.31658 8.45217 7.70711 8.8427L12 13.1356L16.2929 8.8427C16.6834 8.45217 17.3166 8.45217 17.7071 8.8427C18.0976 9.23322 18.0976 9.86639 17.7071 10.2569L12 15.964L6.29289 10.2569C5.90237 9.86639 5.90237 9.23322 6.29289 8.8427Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </span>
                            </p>
                            <div
                              className={`submenu relative left-0 top-full rounded-sm bg-white transition-[top] duration-300 group-hover:opacity-100 dark:bg-dark lg:invisible lg:absolute lg:top-[110%] lg:block lg:w-[250px] lg:p-4 lg:opacity-0 lg:shadow-lg lg:group-hover:visible lg:group-hover:top-full ${openIndex === index ? "block" : "hidden"
                                }`}
                            >
                              {menuItem.submenu.map((submenuItem, index) => (
                                <Link
                                  href={submenuItem.path}
                                  key={index}
                                  className="block rounded py-2.5 text-sm text-dark hover:text-primary dark:text-white/70 dark:hover:text-white lg:px-3"
                                >
                                  {submenuItem.title}
                                </Link>
                              ))}
                            </div> */}
                          </>
                        )}
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
              <div className="flex items-center justify-end pr-16 lg:pr-0">
                <Link
                  href="/order"
                  className="hidden rounded-xl bg-amber-500 px-7 py-3 text-nowrap text-base font-medium text-white hover:opacity-70 dark:text-white md:block"
                >
                  Book Now
                </Link>
                {
                  admin &&
                  <Link
                    href="/admin"
                    className="hidden py-3 text-base font-medium text-dark hover:opacity-70 dark:text-white md:block"
                  >
                    &nbsp;&nbsp;&nbsp;Admin
                  </Link>
                }
                {
                  !logined &&
                  <>
                    <Link
                      href="/signin"
                      className="hidden py-3 text-nowrap text-base font-medium text-dark hover:opacity-70 dark:text-white md:block"
                    >
                      &nbsp;&nbsp;&nbsp;Sign In
                    </Link>
                    <Link
                      href="/signup"
                      className="hidden py-3 text-nowrap text-base font-medium text-dark hover:opacity-70 dark:text-white md:block"
                    >
                      &nbsp;&nbsp;&nbsp;Sign Up
                    </Link>
                  </>
                }
                {
                  logined && !admin &&
                  <Link
                    href="/profile"
                    className="hidden text-nowrap py-3 text-base font-medium text-dark hover:opacity-70 dark:text-white md:block"
                  >
                    &nbsp;&nbsp;&nbsp;My Page
                  </Link>
                }
                {
                  logined &&
                  <button
                    onClick={logOut}
                    className="hidden py-3 text-nowrap text-base font-medium text-dark hover:opacity-70 dark:text-white md:block"
                  >
                    &nbsp;&nbsp;&nbsp;Sign Out
                  </button>
                }

                {/* <Link
                  href="/signin"
                  className="hidden px-7 py-3 text-base font-medium text-dark hover:opacity-70 dark:text-white md:block"
                >
                  Sign In
                </Link>
                <Link
                  href="/signup"
                  className="ease-in-up shadow-btn hover:shadow-btn-hover hidden rounded-sm bg-primary px-8 py-3 text-base font-medium text-white transition duration-300 hover:bg-opacity-90 md:block md:px-9 lg:px-6 xl:px-9"
                >
                  Sign Up
                </Link> */}
                <div>
                  <ThemeToggler />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;

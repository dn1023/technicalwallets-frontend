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
  const [status, setStatus] = useState([false, false, false]);
  const [catalog, setCatalog] = useState([false, false, false, false, false, false]);
  const [convert, setConvert] = useState([false, false, false]);
  const [Prepare, setPrepare] = useState([false, false, false]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (status && !event.target.closest('#navbarCollapse')) {
        setStatus([false, false, false]);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [status]);


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
/*   const onChangeStatue = (index: number) => {
    index == 2 && setStatus([false, false, !status[2], false, false, false, false]);
    index == 3 && setStatus([false, false, false, !status[3], false, false, false]);
    index == 4 && setStatus([false, false, false, false, !status[4], false, false]);
  } */

  return (
    <>
      {/* <div className="bg-[#00c6ff] dark:bg-gray-dark hidden lg:block">
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
      </div> */}
      <header
        className={`header left-0 z-40 flex flex-col w-full items-center ${sticky
          ? "top-0 dark:bg-gray-dark dark:shadow-sticky-dark fixed z-[99] bg-white !bg-opacity-80 shadow-sticky backdrop-blur-sm transition"
          : "bg-transparent top-[60px]"
          }`}
      > 
        {/*I removed absolute*/}
        <div className="container">
          <div className="relative -mx-4 flex items-center justify-left">
            <div className="w-50 max-w-full px-4 xl:mr-12">
              <Link
                href="/"
                className={`header-logo block w-full ${sticky ? "py-5 lg:py-2" : "py-8"
                  } `}
              >
                {/* <Image
                  src="/images/logo/logo-2.png"
                  alt="logo"
                  width={122}
                  height={96}
                  className="w-full dark:hidden"
                /> */}
                <Image
                  src="/images/logo/logo.png"
                  alt="logo"
                  width={40}
                  height={32}
                  className=""
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
                  <ul className="block lg:flex lg:space-x-7">
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
                        href="/products?format=tree&page=2#upload=2"
                        className="flex py-2 text-base lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
                      >
                        About
                      </Link>
                    </li>
                    {/* {menuData.map((menuItem, index) => (
                      <li key={index} className="group relative">
                        <button
                          onClick={() => onChangeStatue(menuItem.index)}
                          className="text-nowrap flex py-2 text-base lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
                        >
                          {menuItem.title}&nbsp;&nbsp;
                          {
                            status[menuItem.index] ? 
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M480-528 296-344l-56-56 240-240 240 240-56 56-184-184Z"/></svg>:
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/></svg>
                          }
                        </button>
                        <div className={`${status[menuItem.index] ? "block" : "hidden" } absolute bg-white shadow-lg backdrop-blur-sm z-[888] flex flex-col`}>
                          {menuItem.submenu.map((menuSubItem, index) => (
                            <button
                              onClick={() => setCatalog([!catalog[0], false, false, false, false, false])}
                              className="flex justify-between text-base text-nowrap lg:mr-0 lg:inline-flex lg:px-4 lg:py-4 text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
                            >
                              <p>{menuSubItem.title}</p>&nbsp;&nbsp;
                              {
                              catalog[0] ? 
                              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M480-528 296-344l-56-56 240-240 240 240-56 56-184-184Z"/></svg>:
                              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/></svg>
                              }
                              {
                                catalog[0] &&
                                <>
                                  {menuSubItem.submenu.map((menuSubSubItem, index) => (
                                    <Link
                                      key={index}
                                      href="/#offers"
                                      className="text-nowrap bg-slate-200 flex text-base lg:mr-0 lg:inline-flex lg:px-4 lg:py-4 text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
                                    >
                                      {menuSubSubItem.title}
                                    </Link>
                                  ))}
                                </>
                              }
                            </button>
                          ))}
                          
                        </div>
                      </li>
                    ))} */}
                    <li className="group relative">
                      <button
                        onClick={() => setStatus([!status[0], false, false])}
                        className="text-nowrap flex py-2 text-base lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
                      >
                        Design Catalog&nbsp;&nbsp;
                        {
                          status[0] ? 
                          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M480-528 296-344l-56-56 240-240 240 240-56 56-184-184Z"/></svg>:
                          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/></svg>
                        }
                        </button>
                        <div className={`${status[0] ? "block" : "hidden" } absolute bg-white shadow-lg backdrop-blur-sm z-[888] flex flex-col max-h-[500px] overflow-auto`}>
                          <button
                            onClick={() => setCatalog([!catalog[0], false, false, false, false, false])}
                            className="flex justify-between text-base text-nowrap lg:mr-0 lg:inline-flex lg:px-4 lg:py-4 text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
                          >
                            <p>Architecture Design</p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            {
                            catalog[0] ? 
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M480-528 296-344l-56-56 240-240 240 240-56 56-184-184Z"/></svg>:
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/></svg>
                            }
                          </button>
                          {
                            catalog[0] &&
                            <>
                              <Link
                                href="/#offers"
                                className="text-nowrap bg-slate-200 flex text-base lg:mr-0 lg:inline-flex lg:px-4 lg:py-4 text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
                              >
                                House
                              </Link>
                              <Link
                                href="/#offers"
                                className="text-nowrap bg-slate-200 flex text-base lg:mr-0 lg:inline-flex lg:px-4 lg:py-4 text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
                              >
                                Villa
                              </Link>
                              <Link
                                href="/#offers"
                                className="text-nowrap bg-slate-200 flex text-base lg:mr-0 lg:inline-flex lg:px-4 lg:py-4 text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
                              >
                                Palace
                              </Link>
                              <Link
                                href="/#offers"
                                className="text-nowrap bg-slate-200 flex text-base lg:mr-0 lg:inline-flex lg:px-4 lg:py-4 text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
                              >
                                Comm./Resid. Towers
                              </Link>
                              <Link
                                href="/#offers"
                                className="text-nowrap bg-slate-200 flex text-base lg:mr-0 lg:inline-flex lg:px-4 lg:py-4 text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
                              >
                                Residential Buildings
                              </Link>
                              <Link
                                href="/#offers"
                                className="text-nowrap bg-slate-200 flex text-base lg:mr-0 lg:inline-flex lg:px-4 lg:py-4 text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
                              >
                                Commercial Buildings
                              </Link>
                              <Link
                                href="/#offers"
                                className="text-nowrap bg-slate-200 flex text-base lg:mr-0 lg:inline-flex lg:px-4 lg:py-4 text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
                              >
                                Hotels
                              </Link>
                              <Link
                                href="/#offers"
                                className="text-nowrap bg-slate-200 flex text-base lg:mr-0 lg:inline-flex lg:px-4 lg:py-4 text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
                              >
                                GYM & SPA
                              </Link>
                            </>
                          }
                          <button
                            onClick={() => setCatalog([false, !catalog[1], false, false, false, false])}
                            className="flex justify-between text-base text-nowrap lg:mr-0 lg:inline-flex lg:px-4 lg:py-4 text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
                          >
                            Landscape Design&nbsp;&nbsp;
                            {
                            catalog[1] ? 
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M480-528 296-344l-56-56 240-240 240 240-56 56-184-184Z"/></svg>:
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/></svg>
                            }
                          </button>
                          {
                          catalog[1] &&
                          <>
                            <Link
                              href="/#offers"
                              className="text-nowrap bg-slate-200 flex text-base lg:mr-0 lg:inline-flex lg:px-4 lg:py-4 text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
                            >
                              Parks
                            </Link>
                            <Link
                              href="/#offers"
                              className="text-nowrap bg-slate-200 flex text-base lg:mr-0 lg:inline-flex lg:px-4 lg:py-4 text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
                            >
                              Streetscape
                            </Link>
                          </>
                          }
                          <button
                            onClick={() => setCatalog([false, false, !catalog[2], false, false, false])}
                            className="flex justify-between text-base text-nowrap lg:mr-0 lg:inline-flex lg:px-4 lg:py-4 text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
                          >
                            Industrial Design&nbsp;&nbsp;
                            {
                            catalog[2] ? 
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M480-528 296-344l-56-56 240-240 240 240-56 56-184-184Z"/></svg>:
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/></svg>
                            }
                          </button>
                          {
                          catalog[2] &&
                          <>
                            <Link
                              href="/#offers"
                              className="text-nowrap bg-slate-200 flex text-base lg:mr-0 lg:inline-flex lg:px-4 lg:py-4 text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
                            >
                              Tiny Houses
                            </Link>
                            <Link
                              href="/#offers"
                              className="text-nowrap bg-slate-200 flex text-base lg:mr-0 lg:inline-flex lg:px-4 lg:py-4 text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
                            >
                              Portable Houses
                            </Link>
                            <Link
                              href="/#offers"
                              className="text-nowrap bg-slate-200 flex text-base lg:mr-0 lg:inline-flex lg:px-4 lg:py-4 text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
                            >
                              RV / Camper
                            </Link>
                            <Link
                              href="/#offers"
                              className="text-nowrap bg-slate-200 flex text-base lg:mr-0 lg:inline-flex lg:px-4 lg:py-4 text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
                            >
                              Tent
                            </Link>
                            <Link
                              href="/#offers"
                              className="text-nowrap bg-slate-200 flex text-base lg:mr-0 lg:inline-flex lg:px-4 lg:py-4 text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
                            >
                              Tiny Restaurant/Cafe
                            </Link>
                            <Link
                              href="/#offers"
                              className="text-nowrap bg-slate-200 flex text-base lg:mr-0 lg:inline-flex lg:px-4 lg:py-4 text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
                            >
                              Portable Truck Food/Cafe
                            </Link>
                            <Link
                              href="/#offers"
                              className="text-nowrap bg-slate-200 flex text-base lg:mr-0 lg:inline-flex lg:px-4 lg:py-4 text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
                            >
                              Portable Ice Cream
                            </Link>
                            <Link
                              href="/#offers"
                              className="text-nowrap bg-slate-200 flex text-base lg:mr-0 lg:inline-flex lg:px-4 lg:py-4 text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
                            >
                              Kiosks/Exhibition
                            </Link>
                            <Link
                              href="/#offers"
                              className="text-nowrap bg-slate-200 flex text-base lg:mr-0 lg:inline-flex lg:px-4 lg:py-4 text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
                            >
                              Furniture&lsquo;s
                            </Link>
                            <Link
                              href="/#offers"
                              className="text-nowrap bg-slate-200 flex text-base lg:mr-0 lg:inline-flex lg:px-4 lg:py-4 text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
                            >
                              Lights
                            </Link>
                            <Link
                              href="/#offers"
                              className="text-nowrap bg-slate-200 flex text-base lg:mr-0 lg:inline-flex lg:px-4 lg:py-4 text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
                            >
                              Art/Decoration
                            </Link>
                          </>
                          }
                         
                          <button
                            onClick={() => setCatalog([false, false, false, !catalog[3], false, false])}
                            className="flex justify-between text-base text-nowrap lg:mr-0 lg:inline-flex lg:px-4 lg:py-4 text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
                          >
                            Marine Design&nbsp;&nbsp;
                            {
                            catalog[3] ? 
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M480-528 296-344l-56-56 240-240 240 240-56 56-184-184Z"/></svg>:
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/></svg>
                            }
                          </button>
                          {
                            catalog[3] &&
                            <>
                              <Link
                                href="/#offers"
                                className="text-nowrap bg-slate-200 flex text-base lg:mr-0 lg:inline-flex lg:px-4 lg:py-4 text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
                              >
                                Floating Houses
                              </Link>
                              <Link
                                href="/#offers"
                                className="text-nowrap bg-slate-200 flex text-base lg:mr-0 lg:inline-flex lg:px-4 lg:py-4 text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
                              >
                                Floating Restaurant/Cafe
                              </Link>
                              <Link
                                href="/#offers"
                                className="text-nowrap bg-slate-200 flex text-base lg:mr-0 lg:inline-flex lg:px-4 lg:py-4 text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
                              >
                                Yacht/Boat
                              </Link>
                            </>
                          }
                          <button
                            onClick={() => setCatalog([false, false, false, false, !catalog[4], false])}
                            className="flex justify-between text-base text-nowrap lg:mr-0 lg:inline-flex lg:px-4 lg:py-4 text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
                          >
                            Products Design&nbsp;&nbsp;
                            {
                            catalog[4] ? 
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M480-528 296-344l-56-56 240-240 240 240-56 56-184-184Z"/></svg>:
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/></svg>
                            }
                          </button>
                          {
                            catalog[4] &&
                            <>
                              <Link
                                href="/#offers"
                                className="text-nowrap bg-slate-200 flex text-base lg:mr-0 lg:inline-flex lg:px-4 lg:py-4 text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
                              >
                                Assemblies Toy&apos;s
                              </Link>
                            </>
                          }
                          <button
                            onClick={() => setCatalog([false, false, false, false, false, !catalog[5]])}
                            className="flex justify-between text-base text-nowrap lg:mr-0 lg:inline-flex lg:px-4 lg:py-4 text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
                          >
                            Prototype Design&nbsp;&nbsp;
                            {
                            catalog[5] ? 
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M480-528 296-344l-56-56 240-240 240 240-56 56-184-184Z"/></svg>:
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/></svg>
                            }
                          </button>
                          {
                            catalog[5] &&
                            <>
                              <Link
                                href="/#offers"
                                className="text-nowrap bg-slate-200 flex text-base lg:mr-0 lg:inline-flex lg:px-4 lg:py-4 text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
                              >
                                Equipment&apos;s
                              </Link>
                            </>
                          }
                        </div>
                    </li>
                    <li className="group relative">
                      <button
                        onClick={() => setStatus([false, !status[1], false])}
                        className="text-nowrap flex py-2 text-base lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
                      >
                        Design Convert&nbsp;&nbsp;
                        {
                          status[1] ? 
                          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M480-528 296-344l-56-56 240-240 240 240-56 56-184-184Z"/></svg>:
                          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/></svg>
                        }
                        </button>
                        <div className={`${status[1] ? "block" : "hidden" } absolute bg-white shadow-lg backdrop-blur-sm z-[888] flex flex-col`}>
                          <button
                            onClick={() => setConvert([!convert[0], false, false])}
                            className="flex justify-between text-base text-nowrap lg:mr-0 lg:inline-flex lg:px-4 lg:py-4 text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
                          >
                            <p>Conceptual Design</p>&nbsp;&nbsp;
                            {
                            convert[0] ? 
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M480-528 296-344l-56-56 240-240 240 240-56 56-184-184Z"/></svg>:
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/></svg>
                            }
                          </button>
                          {
                            convert[0] &&
                            <>
                              <Link
                                href="/#offers"
                                className="text-nowrap bg-slate-200 flex text-base lg:mr-0 lg:inline-flex lg:px-4 lg:py-4 text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
                              >
                                Blueprints
                              </Link>
                              <Link
                                href="/#offers"
                                className="text-nowrap bg-slate-200 flex text-base lg:mr-0 lg:inline-flex lg:px-4 lg:py-4 text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
                              >
                                3D Animation
                              </Link>
                            </>
                          }
                          <button
                            onClick={() => setConvert([false, !convert[1],  false])}
                            className="flex justify-between text-base text-nowrap lg:mr-0 lg:inline-flex lg:px-4 lg:py-4 text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
                          >
                            <p>Blueprints</p>&nbsp;&nbsp;
                            {
                            convert[1] ? 
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M480-528 296-344l-56-56 240-240 240 240-56 56-184-184Z"/></svg>:
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/></svg>
                            }
                          </button>
                          {
                            convert[1] &&
                            <>
                              <Link
                                href="/#offers"
                                className="text-nowrap bg-slate-200 flex text-base lg:mr-0 lg:inline-flex lg:px-4 lg:py-4 text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
                              >
                                3D Visualization
                              </Link>
                              <Link
                                href="/#offers"
                                className="text-nowrap bg-slate-200 flex text-base lg:mr-0 lg:inline-flex lg:px-4 lg:py-4 text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
                              >
                                3D Animation
                              </Link>
                            </>
                          }
                          <button
                            onClick={() => setConvert([false, false, !convert[2]])}
                            className="flex justify-between text-base text-nowrap lg:mr-0 lg:inline-flex lg:px-4 lg:py-4 text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
                          >
                            <p>Hand Sketch</p>&nbsp;&nbsp;
                            {
                            convert[2] ? 
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M480-528 296-344l-56-56 240-240 240 240-56 56-184-184Z"/></svg>:
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/></svg>
                            }
                          </button>
                          {
                            convert[2] &&
                            <>
                              <Link
                                href="/#offers"
                                className="text-nowrap bg-slate-200 flex text-base lg:mr-0 lg:inline-flex lg:px-4 lg:py-4 text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
                              >
                                Conceptual Design
                              </Link>
                              <Link
                                href="/#offers"
                                className="text-nowrap bg-slate-200 flex text-base lg:mr-0 lg:inline-flex lg:px-4 lg:py-4 text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
                              >
                                Blueprints
                              </Link>
                              <Link
                                href="/#offers"
                                className="text-nowrap bg-slate-200 flex text-base lg:mr-0 lg:inline-flex lg:px-4 lg:py-4 text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
                              >
                                3D Animation
                              </Link>
                            </>
                          }
                        </div>
                    </li>
                    <li className="group relative">
                      <button
                        onClick={() => setStatus([false, false, !status[2]])}
                        className="text-nowrap flex py-2 text-base lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
                      >
                        Drawing Prepare&nbsp;&nbsp;
                        {
                          status[2] ? 
                          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M480-528 296-344l-56-56 240-240 240 240-56 56-184-184Z"/></svg>:
                          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/></svg>
                        }
                        </button>
                        <div className={`${status[2] ? "block" : "hidden" } absolute bg-white shadow-lg backdrop-blur-sm z-[888] flex flex-col`}>
                          <button
                            onClick={() => {}}
                            className="flex justify-between text-base text-nowrap lg:mr-0 lg:inline-flex lg:px-4 lg:py-4 text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
                          >
                            <p>Shop Drawing</p>&nbsp;&nbsp;
                          </button>
                          <button
                            onClick={() => {}}
                            className="flex justify-between text-base text-nowrap lg:mr-0 lg:inline-flex lg:px-4 lg:py-4 text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
                          >
                            <p>Constructions Drawing</p>&nbsp;&nbsp;
                          </button>
                          <button
                            onClick={() => {}}
                            className="flex justify-between text-base text-nowrap lg:mr-0 lg:inline-flex lg:px-4 lg:py-4 text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
                          >
                            <p>Fabrication Drawing</p>&nbsp;&nbsp;
                          </button>
                        </div>
                    </li>
                    <li className="group relative">
                      <Link
                        href="/#services"
                        className="text-nowrap flex py-2 text-base lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
                      >
                        Get Stamp
                      </Link>
                    </li>
                    <li className="group relative">
                      <Link
                        href="/contact"
                        className="flex py-2 text-base lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
                      >
                        Contact
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="flex items-center justify-end pr-16 lg:pr-0 space-x-2">
                {/* <Link
                  href="/order"
                  className="hidden rounded-xl bg-amber-500 px-7 py-3 text-nowrap text-base font-medium text-white hover:opacity-70 dark:text-white md:block"
                >
                  Book Now
                </Link> */}
                {
                  admin &&
                  <Link
                    href="/admin"
                    className="hidden py-3 text-base font-medium text-dark hover:opacity-70 dark:text-body-color-dark md:block"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="none"><path fill="currentColor" d="M680-280q25 0 42.5-17.5T740-340q0-25-17.5-42.5T680-400q-25 0-42.5 17.5T620-340q0 25 17.5 42.5T680-280Zm0 120q31 0 57-14.5t42-38.5q-22-13-47-20t-52-7q-27 0-52 7t-47 20q16 24 42 38.5t57 14.5ZM480-80q-139-35-229.5-159.5T160-516v-244l320-120 320 120v227q-19-8-39-14.5t-41-9.5v-147l-240-90-240 90v188q0 47 12.5 94t35 89.5Q310-290 342-254t71 60q11 32 29 61t41 52q-1 0-1.5.5t-1.5.5Zm200 0q-83 0-141.5-58.5T480-280q0-83 58.5-141.5T680-480q83 0 141.5 58.5T880-280q0 83-58.5 141.5T680-80ZM480-494Z"/></svg>
                  </Link>
                }
                {
                  !logined &&
                    <Link
                      href="/signin"
                      className="hidden py-3 text-nowrap text-base font-medium text-dark hover:opacity-70 dark:text-body-color-dark md:block"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="none"><path fill="currentColor" d="M480-120v-80h280v-560H480v-80h280q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H480Zm-80-160-55-58 102-102H120v-80h327L345-622l55-58 200 200-200 200Z"/></svg>
                    </Link>
                }
                {
                  logined && !admin &&
                  <Link
                    href="/profile"
                    className="hidden text-nowrap py-3 text-base font-medium text-dark hover:opacity-70 dark:text-body-color-dark md:block"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="none"><path fill="currentColor" d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z"/></svg>
                  </Link>
                }
                {
                  logined &&
                  <button
                    onClick={logOut}
                    className="hidden py-3 text-nowrap text-base font-medium text-dark hover:opacity-70 dark:text-body-color-dark md:block"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="none"><path fill="currentColor" d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h280v80H200Zm440-160-55-58 102-102H360v-80h327L585-622l55-58 200 200-200 200Z"/></svg>
                  </button>
                }
                <Link
                  href="/admin"
                  className="hidden py-3 text-base font-medium text-dark hover:opacity-70 dark:text-body-color-dark md:block"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="none"><path fill="currentColor" d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z"/></svg>
                </Link>
                <ThemeToggler />
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;

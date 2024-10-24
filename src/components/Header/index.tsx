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
import { Modal } from 'antd';

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
  //Signin Modal
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleSignIn = async () => {
    if (email == '' || password == '') {
      toast.warn("Please check email adress and password.")
      return;
    }
    setLoading(true);
    try {
      const response = await AuthService.signin(email, password); // Assuming login returns a promise
      if (response !== undefined) {
        if (!response?.message) {
          //router.push('/'); // Navigate on success
          const user = AuthService.getCurrentUser();
          if (user !== null) {
            console.log(user);
            setLogined(true);
            setIsSignInOpen(false);
            toast.success("Welcome to Technical Wallet!");
            if (user.roles.includes("ROLE_ADMIN")) {
              setAdmin(true);
            }
          }
        }
        else
          toast.warn(response?.message);
      }
      //router.push('/profile'); // Navigate to profile page upon successful login
      //window.location.reload(); // Reload the page
    } catch (error) {
      const resMessage =
        (error.response && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString();
      setMessage(resMessage);
      toast.error("Server connection failed!");
      toast.warning("Please try later.");
    } finally {
      setLoading(false);
    }
  };

  //Signup Modal
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  const [rePassword, setRePassword] = useState("");
  const [name, setName] = useState("");

  const handleSignUp = async () => {
    if (email == '' || password == '') {
      toast.warn("Please check email adress and password.")
      return;
    }
    if (password != rePassword) {
      toast.warn("Please check password.")
      return;
    }
    setLoading(true);
    try {
      const response = await AuthService.signup(name, email, password); // Assuming login returns a promise
      if (response !== undefined) {
        if (response?.message == "User registered successfully!") {
          setIsSignUpOpen(false);
          toast.success("User registered successfully!");
        }
        else
          toast.warning(response.message);
      }
      else {
        toast.error("Server connection failed!");
        toast.warning("Please try later.");
      }
      // Navigate to profile page upon successful login
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
  };

  return (
    <>
      {/* <div className="bg-[#00c6ff] dark:bg-gray-dark hidden lg:block">
        <div className="w-full flex items-center justify-between py-[10px] container">
          <div className="flex items-center">
            Technical Wallet
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
      {/* <ToastContainer /> */}
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
                        href="/"
                        className="flex py-2 text-base lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
                      >
                        Home
                      </Link>
                    </li>
                    <li className="group relative">
                      <Link
                        href="/about"
                        className="flex py-2 text-base lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
                      >
                        About
                      </Link>
                    </li>
                    <li className="group relative">
                      <button
                        onClick={() => setStatus([!status[0], false, false])}
                        className="text-nowrap flex py-2 text-base lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
                      >
                        Designed To Build&nbsp;&nbsp;
                        {
                          status[0] ?
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M480-528 296-344l-56-56 240-240 240 240-56 56-184-184Z" /></svg> :
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" /></svg>
                        }
                      </button>
                      {
                        status[0] &&
                        <div className={`${status[0] ? "block" : "hidden"} absolute bg-white shadow-lg backdrop-blur-sm z-[888] flex flex-col max-h-[500px] overflow-auto`}>
                          <Link
                            href="/products/Design_Catalog=Industrial_Design=Tiny_Houses"
                            className="text-nowrap flex text-base lg:mr-0 lg:inline-flex lg:px-4 lg:py-4 text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
                          >
                            Tiny Houses
                          </Link>
                          <Link
                            href="/products/Design_Catalog=Industrial_Design=Portable_Houses"
                            className="text-nowrap flex text-base lg:mr-0 lg:inline-flex lg:px-4 lg:py-4 text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
                          >
                            Portable Houses
                          </Link>
                          <Link
                            href="/products/Design_Catalog=Industrial_Design=RV_~_Camper"
                            className="text-nowrap flex text-base lg:mr-0 lg:inline-flex lg:px-4 lg:py-4 text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
                          >
                            RV ~ Camper
                          </Link>
                          <Link
                            href="/products/Design_Catalog=Industrial_Design=Shipping_Container_Homes"
                            className="text-nowrap flex text-base lg:mr-0 lg:inline-flex lg:px-4 lg:py-4 text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
                          >
                            Shipping Container Homes
                          </Link>
                          <Link
                            href="/products/Design_Catalog=Industrial_Design=Tiny_Restaurant_~_Cafe"
                            className="text-nowrap flex text-base lg:mr-0 lg:inline-flex lg:px-4 lg:py-4 text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
                          >
                            Tiny Restaurant ~ Cafe
                          </Link>
                          <Link
                            href="/products/Design_Catalog=Industrial_Design=Kiosks"
                            className="text-nowrap flex text-base lg:mr-0 lg:inline-flex lg:px-4 lg:py-4 text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
                          >
                            Kiosks
                          </Link>
                          <Link
                            href="/products/Design_Catalog=Industrial_Design=Wayfinding_~_Exhibition"
                            className="text-nowrap flex text-base lg:mr-0 lg:inline-flex lg:px-4 lg:py-4 text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
                          >
                            Wayfinding ~ Exhibition
                          </Link>
                          <Link
                            href="/products/Design_Catalog=Industrial_Design=Tent"
                            className="text-nowrap flex text-base lg:mr-0 lg:inline-flex lg:px-4 lg:py-4 text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
                          >
                            Tent
                          </Link>
                          <Link
                            href="/products/Design_Catalog=Industrial_Design=Portable_Truck_Food_~_Cafe"
                            className="text-nowrap flex text-base lg:mr-0 lg:inline-flex lg:px-4 lg:py-4 text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
                          >
                            Portable Truck Food ~ Cafe
                          </Link>
                          <Link
                            href="/products/Design_Catalog=Industrial_Design=Hut"
                            className="text-nowrap flex text-base lg:mr-0 lg:inline-flex lg:px-4 lg:py-4 text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
                          >
                            Hut
                          </Link>
                          <Link
                            href="/products/Design_Catalog=Industrial_Design=Furniture"
                            className="text-nowrap flex text-base lg:mr-0 lg:inline-flex lg:px-4 lg:py-4 text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
                          >
                            Furniture
                          </Link>
                          <Link
                            href="/products/Design_Catalog=Industrial_Design=Lights"
                            className="text-nowrap flex text-base lg:mr-0 lg:inline-flex lg:px-4 lg:py-4 text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
                          >
                            Lights
                          </Link>
                        </div>
                      }
                    </li>
                    <li className="group relative">
                      <button
                        onClick={() => setStatus([false, !status[1], false])}
                        className="text-nowrap flex py-2 text-base lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
                      >
                        Design Catalog&nbsp;&nbsp;
                        {
                          status[1] ?
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M480-528 296-344l-56-56 240-240 240 240-56 56-184-184Z" /></svg> :
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" /></svg>
                        }
                      </button>
                      <div className={`${status[1] ? "block" : "hidden"} absolute bg-white shadow-lg backdrop-blur-sm z-[888] flex flex-col max-h-[500px] overflow-auto`}>
                        <button
                          onClick={() => setCatalog([!catalog[0], false, false, false, false, false])}
                          className="flex justify-between text-base text-nowrap lg:mr-0 lg:inline-flex lg:px-4 lg:py-4 text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
                        >
                          <p>Architecture Design</p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          {
                            catalog[0] ?
                              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M480-528 296-344l-56-56 240-240 240 240-56 56-184-184Z" /></svg> :
                              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" /></svg>
                          }
                        </button>
                        {
                          catalog[0] &&
                          <>
                            <Link
                              href="/products/Design_Catalog=Architecture_Design=High_Rise"
                              className="text-nowrap bg-slate-200 flex text-base lg:mr-0 lg:inline-flex lg:px-4 lg:py-4 text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
                            >
                              High Rise
                            </Link>
                            <Link
                              href="/products/Design_Catalog=Architecture_Design=Building"
                              className="text-nowrap bg-slate-200 flex text-base lg:mr-0 lg:inline-flex lg:px-4 lg:py-4 text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
                            >
                              Building
                            </Link>
                            <Link
                              href="/products/Design_Catalog=Architecture_Design=Villa_~_House"
                              className="text-nowrap bg-slate-200 flex text-base lg:mr-0 lg:inline-flex lg:px-4 lg:py-4 text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
                            >
                              Villa ~ House
                            </Link>
                            <Link
                              href="/products/Design_Catalog=Architecture_Design=Royal_~_Palace"
                              className="text-nowrap bg-slate-200 flex text-base lg:mr-0 lg:inline-flex lg:px-4 lg:py-4 text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
                            >
                              Royal ~ Palace
                            </Link>
                          </>
                        }
                        <button
                          onClick={() => setCatalog([false, !catalog[1], false, false, false, false])}
                          className="flex justify-between text-base text-nowrap lg:mr-0 lg:inline-flex lg:px-4 lg:py-4 text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
                        >
                          Interior Design&nbsp;&nbsp;
                          {
                            catalog[1] ?
                              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M480-528 296-344l-56-56 240-240 240 240-56 56-184-184Z" /></svg> :
                              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" /></svg>
                          }
                        </button>
                        {
                          catalog[1] &&
                          <>
                            <Link
                              href="/products/Design_Catalog=Interior_Design=Minimalist"
                              className="text-nowrap bg-slate-200 flex text-base lg:mr-0 lg:inline-flex lg:px-4 lg:py-4 text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
                            >
                              Minimalist
                            </Link>
                            <Link
                              href="/products/Design_Catalog=Interior_Design=Modern"
                              className="text-nowrap bg-slate-200 flex text-base lg:mr-0 lg:inline-flex lg:px-4 lg:py-4 text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
                            >
                              Modern
                            </Link>
                            <Link
                              href="/products/Design_Catalog=Interior_Design=Classical"
                              className="text-nowrap bg-slate-200 flex text-base lg:mr-0 lg:inline-flex lg:px-4 lg:py-4 text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
                            >
                              Classical
                            </Link>
                            <Link
                              href="/products/Design_Catalog=Interior_Design=Modern_Classic"
                              className="text-nowrap bg-slate-200 flex text-base lg:mr-0 lg:inline-flex lg:px-4 lg:py-4 text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
                            >
                              Modern Classic
                            </Link>
                          </>
                        }
                        <button
                          onClick={() => setCatalog([false, false, !catalog[2], false, false, false])}
                          className="flex justify-between text-base text-nowrap lg:mr-0 lg:inline-flex lg:px-4 lg:py-4 text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
                        >
                          Landscape&nbsp;&nbsp;
                          {
                            catalog[2] ?
                              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M480-528 296-344l-56-56 240-240 240 240-56 56-184-184Z" /></svg> :
                              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" /></svg>
                          }
                        </button>
                        {
                          catalog[2] &&
                          <>
                            <Link
                              href="/products/Design_Catalog=Landscape=Streetscape"
                              className="text-nowrap bg-slate-200 flex text-base lg:mr-0 lg:inline-flex lg:px-4 lg:py-4 text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
                            >
                              Streetscape
                            </Link>
                            <Link
                              href="/products/Design_Catalog=Landscape=Parks"
                              className="text-nowrap bg-slate-200 flex text-base lg:mr-0 lg:inline-flex lg:px-4 lg:py-4 text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
                            >
                              Parks
                            </Link>
                            <Link
                              href="/products/Design_Catalog=Landscape=Golf_Course"
                              className="text-nowrap bg-slate-200 flex text-base lg:mr-0 lg:inline-flex lg:px-4 lg:py-4 text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
                            >
                              Golf Course
                            </Link>
                            <Link
                              href="/products/Design_Catalog=Landscape=Garden"
                              className="text-nowrap bg-slate-200 flex text-base lg:mr-0 lg:inline-flex lg:px-4 lg:py-4 text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
                            >
                              Garden
                            </Link>
                          </>
                        }
                        <button
                          onClick={() => setCatalog([false, false, false, !catalog[3], false, false])}
                          className="flex justify-between text-base text-nowrap lg:mr-0 lg:inline-flex lg:px-4 lg:py-4 text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
                        >
                          Industrial Design&nbsp;&nbsp;
                          {
                            catalog[3] ?
                              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M480-528 296-344l-56-56 240-240 240 240-56 56-184-184Z" /></svg> :
                              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" /></svg>
                          }
                        </button>
                        {
                          catalog[3] &&
                          <>
                            <Link
                              href="/products/Design_Catalog=Industrial_Design=Tiny_Houses"
                              className="text-nowrap bg-slate-200 flex text-base lg:mr-0 lg:inline-flex lg:px-4 lg:py-4 text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
                            >
                              Tiny Houses
                            </Link>
                            <Link
                              href="/products/Design_Catalog=Industrial_Design=Portable_Houses"
                              className="text-nowrap bg-slate-200 flex text-base lg:mr-0 lg:inline-flex lg:px-4 lg:py-4 text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
                            >
                              Portable Houses
                            </Link>
                            <Link
                              href="/products/Design_Catalog=Industrial_Design=RV_~_Camper"
                              className="text-nowrap bg-slate-200 flex text-base lg:mr-0 lg:inline-flex lg:px-4 lg:py-4 text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
                            >
                              RV ~ Camper
                            </Link>
                            <Link
                              href="/products/Design_Catalog=Industrial_Design=Shipping_Container_Homes"
                              className="text-nowrap bg-slate-200 flex text-base lg:mr-0 lg:inline-flex lg:px-4 lg:py-4 text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
                            >
                              Shipping Container Homes
                            </Link>
                            <Link
                              href="/products/Design_Catalog=Industrial_Design=Tiny_Restaurant_~_Cafe"
                              className="text-nowrap bg-slate-200 flex text-base lg:mr-0 lg:inline-flex lg:px-4 lg:py-4 text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
                            >
                              Tiny Restaurant ~ Cafe
                            </Link>
                            <Link
                              href="/products/Design_Catalog=Industrial_Design=Kiosks"
                              className="text-nowrap bg-slate-200 flex text-base lg:mr-0 lg:inline-flex lg:px-4 lg:py-4 text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
                            >
                              Kiosks
                            </Link>
                            <Link
                              href="/products/Design_Catalog=Industrial_Design=Wayfinding_~_Exhibition"
                              className="text-nowrap bg-slate-200 flex text-base lg:mr-0 lg:inline-flex lg:px-4 lg:py-4 text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
                            >
                              Wayfinding ~ Exhibition
                            </Link>
                            <Link
                              href="/products/Design_Catalog=Industrial_Design=Tent"
                              className="text-nowrap bg-slate-200 flex text-base lg:mr-0 lg:inline-flex lg:px-4 lg:py-4 text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
                            >
                              Tent
                            </Link>
                            <Link
                              href="/products/Design_Catalog=Industrial_Design=Portable_Truck_Food_~_Cafe"
                              className="text-nowrap bg-slate-200 flex text-base lg:mr-0 lg:inline-flex lg:px-4 lg:py-4 text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
                            >
                              Portable Truck Food ~ Cafe
                            </Link>
                            <Link
                              href="/products/Design_Catalog=Industrial_Design=Hut"
                              className="text-nowrap bg-slate-200 flex text-base lg:mr-0 lg:inline-flex lg:px-4 lg:py-4 text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
                            >
                              Hut
                            </Link>
                            <Link
                              href="/products/Design_Catalog=Industrial_Design=Furniture"
                              className="text-nowrap bg-slate-200 flex text-base lg:mr-0 lg:inline-flex lg:px-4 lg:py-4 text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
                            >
                              Furniture
                            </Link>
                            <Link
                              href="/products/Design_Catalog=Industrial_Design=Lights"
                              className="text-nowrap bg-slate-200 flex text-base lg:mr-0 lg:inline-flex lg:px-4 lg:py-4 text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
                            >
                              Lights
                            </Link>
                          </>
                        }

                        <button
                          onClick={() => setCatalog([false, false, false, false, !catalog[4], false])}
                          className="flex justify-between text-base text-nowrap lg:mr-0 lg:inline-flex lg:px-4 lg:py-4 text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
                        >
                          Marine Design&nbsp;&nbsp;
                          {
                            catalog[4] ?
                              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M480-528 296-344l-56-56 240-240 240 240-56 56-184-184Z" /></svg> :
                              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" /></svg>
                          }
                        </button>
                        {
                          catalog[4] &&
                          <>
                            <Link
                              href="/products/Design_Catalog=Marine_Design=Floating Houses"
                              className="text-nowrap bg-slate-200 flex text-base lg:mr-0 lg:inline-flex lg:px-4 lg:py-4 text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
                            >
                              Floating Houses
                            </Link>
                            <Link
                              href="/products/Design_Catalog=Marine_Design=Floating_Restaurant_~_Cafe"
                              className="text-nowrap bg-slate-200 flex text-base lg:mr-0 lg:inline-flex lg:px-4 lg:py-4 text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
                            >
                              Floating Restaurant ~ Cafe
                            </Link>
                            <Link
                              href="/products/Design_Catalog=Marine_Design=Luxury_~_Boat"
                              className="text-nowrap bg-slate-200 flex text-base lg:mr-0 lg:inline-flex lg:px-4 lg:py-4 text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
                            >
                              Luxury ~ Boat
                            </Link>
                            <Link
                              href="/products/Design_Catalog=Marine_Design=Luxury_~_Yachts"
                              className="text-nowrap bg-slate-200 flex text-base lg:mr-0 lg:inline-flex lg:px-4 lg:py-4 text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
                            >
                              Luxury ~ Yachts
                            </Link>
                          </>
                        }
                      </div>
                    </li>
                    <li className="group relative">
                      <Link
                        href="/other/hireus"
                        className="text-nowrap flex py-2 text-base lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
                      >
                        Hire Us&nbsp;&nbsp;
                      </Link>
                    </li>
                    <li className="group relative">
                      <Link
                        href="/stamp"
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
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="none"><path fill="currentColor" d="M680-280q25 0 42.5-17.5T740-340q0-25-17.5-42.5T680-400q-25 0-42.5 17.5T620-340q0 25 17.5 42.5T680-280Zm0 120q31 0 57-14.5t42-38.5q-22-13-47-20t-52-7q-27 0-52 7t-47 20q16 24 42 38.5t57 14.5ZM480-80q-139-35-229.5-159.5T160-516v-244l320-120 320 120v227q-19-8-39-14.5t-41-9.5v-147l-240-90-240 90v188q0 47 12.5 94t35 89.5Q310-290 342-254t71 60q11 32 29 61t41 52q-1 0-1.5.5t-1.5.5Zm200 0q-83 0-141.5-58.5T480-280q0-83 58.5-141.5T680-480q83 0 141.5 58.5T880-280q0 83-58.5 141.5T680-80ZM480-494Z" /></svg>
                  </Link>
                }
                {
                  !logined &&
                  <>
                    <button
                      onClick={() => setIsSignInOpen(true)}
                      className="hidden py-3 text-nowrap text-base font-medium text-dark hover:opacity-70 dark:text-body-color-dark md:block"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="none"><path fill="currentColor" d="M480-120v-80h280v-560H480v-80h280q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H480Zm-80-160-55-58 102-102H120v-80h327L345-622l55-58 200 200-200 200Z" /></svg>
                    </button>
                    <button
                      onClick={() => setIsSignUpOpen(true)}
                      className="hidden py-3 text-nowrap text-base font-medium text-dark hover:opacity-70 dark:text-body-color-dark md:block"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="none"><path fill="currentColor" d="M400-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM80-160v-112q0-33 17-62t47-44q51-26 115-44t141-18h14q6 0 12 2-8 18-13.5 37.5T404-360h-4q-71 0-127.5 18T180-306q-9 5-14.5 14t-5.5 20v32h252q6 21 16 41.5t22 38.5H80Zm560 40-12-60q-12-5-22.5-10.5T584-204l-58 18-40-68 46-40q-2-14-2-26t2-26l-46-40 40-68 58 18q11-8 21.5-13.5T628-460l12-60h80l12 60q12 5 22.5 11t21.5 15l58-20 40 70-46 40q2 12 2 25t-2 25l46 40-40 68-58-18q-11 8-21.5 13.5T732-180l-12 60h-80Zm40-120q33 0 56.5-23.5T760-320q0-33-23.5-56.5T680-400q-33 0-56.5 23.5T600-320q0 33 23.5 56.5T680-240ZM400-560q33 0 56.5-23.5T480-640q0-33-23.5-56.5T400-720q-33 0-56.5 23.5T320-640q0 33 23.5 56.5T400-560Zm0-80Zm12 400Z" /></svg>
                    </button>
                  </>
                }
                {
                  logined && !admin &&
                  <Link
                    href="/profile"
                    className="hidden text-nowrap py-3 text-base font-medium text-dark hover:opacity-70 dark:text-body-color-dark md:block"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="none"><path fill="currentColor" d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z" /></svg>
                  </Link>
                }
                <Link
                  href="/message"
                  className="hidden py-3 text-base font-medium text-dark hover:opacity-70 dark:text-body-color-dark md:block"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="none"><path fill="currentColor" d="M160-200v-80h80v-280q0-83 50-147.5T420-792v-28q0-25 17.5-42.5T480-880q25 0 42.5 17.5T540-820v28q80 20 130 84.5T720-560v280h80v80H160Zm320-300Zm0 420q-33 0-56.5-23.5T400-160h160q0 33-23.5 56.5T480-80ZM320-280h320v-280q0-66-47-113t-113-47q-66 0-113 47t-47 113v280Z" /></svg>
                  {/* <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="none"><path fill="currentColor" d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z"/></svg> */}
                </Link>
                <ThemeToggler />
                {
                  logined &&
                  <button
                    onClick={logOut}
                    className="hidden py-3 text-nowrap text-base font-medium text-dark hover:opacity-70 dark:text-body-color-dark md:block"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="none"><path fill="currentColor" d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h280v80H200Zm440-160-55-58 102-102H360v-80h327L585-622l55-58 200 200-200 200Z" /></svg>
                  </button>
                }
              </div>
            </div>
          </div>
        </div>
      </header>
      <Modal
        title={
          <h3 className="mt-3 mb-11 text-center text-2xl font-bold text-black dark:text-white sm:text-3xl">
            Sign in to your account
          </h3>
        }
        open={isSignInOpen}
        onCancel={() => setIsSignInOpen(false)}
        footer={
          <>
            <div className="mb-6 px-5">
              <button
                onClick={handleSignIn}
                className="uppercase shadow-submit dark:shadow-submit-dark flex w-full items-center justify-center rounded-lg bg-primary py-3 text-base font-medium text-white duration-300 hover:bg-primary/90"
              >
                Sign in
              </button>
            </div>
            <p className="text-center text-base font-medium text-body-color mb-3">
              Don&apos;t you have an account?{" "} Please sign up.
            </p>
          </>
        }
        width={500}
        centered
      >
        <div className="px-5">
          <div className="mb-8">
            <label
              htmlFor="email"
              className="mb-3 block text-sm text-dark dark:text-white"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your Email"
              className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
            />
          </div>
          <div className="mb-8">
            <label
              htmlFor="password"
              className="mb-3 block text-sm text-dark dark:text-white"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your Password"
              className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
            />
          </div>
          <div className="mb-8 flex flex-col justify-between sm:flex-row sm:items-center">
            <div className="mb-4 sm:mb-0">
              <label
                htmlFor="checkboxLabel"
                className="flex cursor-pointer select-none items-center text-base font-medium text-body-color"
              >
                <div className="relative">
                  <input
                    type="checkbox"
                    id="checkboxLabel"
                    className="sr-only"
                  />
                  <div className="box mr-4 flex h-5 w-5 items-center justify-center rounded border border-body-color border-opacity-20 dark:border-white dark:border-opacity-10">
                    <span className="opacity-0">
                      <svg
                        width="11"
                        height="8"
                        viewBox="0 0 11 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.0915 0.951972L10.0867 0.946075L10.0813 0.940568C9.90076 0.753564 9.61034 0.753146 9.42927 0.939309L4.16201 6.22962L1.58507 3.63469C1.40401 3.44841 1.11351 3.44879 0.932892 3.63584C0.755703 3.81933 0.755703 4.10875 0.932892 4.29224L0.932878 4.29225L0.934851 4.29424L3.58046 6.95832C3.73676 7.11955 3.94983 7.2 4.1473 7.2C4.36196 7.2 4.55963 7.11773 4.71406 6.9584L10.0468 1.60234C10.2436 1.4199 10.2421 1.1339 10.0915 0.951972ZM4.2327 6.30081L4.2317 6.2998C4.23206 6.30015 4.23237 6.30049 4.23269 6.30082L4.2327 6.30081Z"
                          fill="#3056D3"
                          stroke="#3056D3"
                          strokeWidth="0.4"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
                Keep me signed in
              </label>
            </div>
            <div>
              <a
                href="#0"
                className="text-base font-medium text-primary hover:underline"
              >
                Forgot Password?
              </a>
            </div>
          </div>
        </div>

      </Modal>
      <Modal
        title={
          <>
            <h3 className="mb-3 text-center text-2xl font-bold text-black dark:text-white sm:text-3xl">
              Create your account
            </h3>
            <p className="mb-11 text-center text-base font-medium text-body-color">
              It&apos;s totally free and super easy
            </p>
          </>
        }
        open={isSignUpOpen}
        onCancel={() => setIsSignUpOpen(false)}
        footer={
          <>
            <div className="mb-6 px-5">
              <button
                onClick={handleSignUp}
                className="uppercase shadow-submit dark:shadow-submit-dark flex w-full items-center justify-center rounded-lg bg-primary py-3 text-base font-medium text-white duration-300 hover:bg-primary/90"
              >
                Sign Up
              </button>
            </div>
            <p className="text-center text-base font-medium text-body-color mb-3">
              Already using TechnicalWallet?{" "} Please sign in.
            </p>
          </>
        }
        width={500}
      >
        <div className="px-5">
          <div className="mb-8">
            <label
              htmlFor="name"
              className="mb-3 block text-sm text-dark dark:text-white"
            >
              {" "}
              User Name{" "}
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              name="name"
              placeholder="Enter your User Name"
              className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
            />
          </div>
          <div className="mb-8">
            <label
              htmlFor="email"
              className="mb-3 block text-sm text-dark dark:text-white"
            >
              {" "}
              Email{" "}
            </label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your Email"
              className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
            />
          </div>
          <div className="mb-8">
            <label
              htmlFor="password"
              className="mb-3 block text-sm text-dark dark:text-white"
            >
              {" "}
              Password{" "}
            </label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your Password"
              className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
            />
          </div>
          <div className="mb-8">
            <label
              htmlFor="password"
              className="mb-3 block text-sm text-dark dark:text-white"
            >
              {" "}
              Confirm Password{" "}
            </label>
            <input
              type="password"
              name="password"
              value={rePassword}
              onChange={(e) => setRePassword(e.target.value)}
              placeholder="Enter your Password"
              className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
            />
          </div>
          <div className="mb-8 flex">
            <label
              htmlFor="checkboxLabel"
              className="flex cursor-pointer select-none text-base font-medium text-body-color"
            >
              <div className="relative">
                <input
                  type="checkbox"
                  id="checkboxLabel"
                  className="sr-only"
                />
                <div className="box mr-4 mt-1 flex h-5 w-5 items-center justify-center rounded border border-body-color border-opacity-20 dark:border-white dark:border-opacity-10">
                  <span className="opacity-0">
                    <svg
                      width="11"
                      height="8"
                      viewBox="0 0 11 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.0915 0.951972L10.0867 0.946075L10.0813 0.940568C9.90076 0.753564 9.61034 0.753146 9.42927 0.939309L4.16201 6.22962L1.58507 3.63469C1.40401 3.44841 1.11351 3.44879 0.932892 3.63584C0.755703 3.81933 0.755703 4.10875 0.932892 4.29224L0.932878 4.29225L0.934851 4.29424L3.58046 6.95832C3.73676 7.11955 3.94983 7.2 4.1473 7.2C4.36196 7.2 4.55963 7.11773 4.71406 6.9584L10.0468 1.60234C10.2436 1.4199 10.2421 1.1339 10.0915 0.951972ZM4.2327 6.30081L4.2317 6.2998C4.23206 6.30015 4.23237 6.30049 4.23269 6.30082L4.2327 6.30081Z"
                        fill="#3056D3"
                        stroke="#3056D3"
                        strokeWidth="0.4"
                      />
                    </svg>
                  </span>
                </div>
              </div>
              <span>
                By creating account means you agree to the
                <a href="#0" className="text-primary hover:underline">
                  {" "}
                  Terms and Conditions{" "}
                </a>
                , and our
                <a href="#0" className="text-primary hover:underline">
                  {" "}
                  Privacy Policy{" "}
                </a>
              </span>
            </label>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Header;

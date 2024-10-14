"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import AuthService from "@/api/auth.service";

const Profile = () => {

  const [userName, setUserName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const currentUser = AuthService.getCurrentUser();
    setUserName(currentUser.username);
    setFirstName(currentUser.firstname);
    setLastName(currentUser.lastname);
    setEmail(currentUser.email);
    setPhone(currentUser.phone);
  }, [])

  const onSave = async () => {
    //userid, username, firstname, lastname, email, phone, password
    if (userName == '' || firstName == '' || lastName == '' || phone == '' || email == '' || password == '') {
      toast.warn("Please check fields correctly.")
    } else {
      setLoading(true);
      const currentUser = AuthService.getCurrentUser();
      try {
        const response = await AuthService.update(currentUser.id, userName, firstName, lastName, email, phone, password, currentUser.roles, currentUser.accessToken); // Assuming login returns a promise
        if (response !== undefined) {
          if (!response?.message) {
            //router.push('/'); // Navigate on success
            toast.success("User registered successfully!");
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
    }
    //toast.success("Saved successfully!")
  }

  return (
    <>
      <div className="p-8 rounded-lg shadow-three bg-white dark:bg-gray-dark">
        <h1 className="mb-8 text-3xl font-bold leading-tight text-black dark:text-body-color-dark sm:text-4xl sm:leading-tight">
          Profile
        </h1>
        <div className="w-full mb-5 flex flex-wrap items-center justify-between dark:border-white dark:border-opacity-10">
          <h3 className="pb-2 font-bold leading-tight text-black dark:text-body-color-dark">
            USER NAME
          </h3>
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="Enter first name"
            className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
          />
        </div>
        <div className="w-full mb-5 grid grid-cols-1 md:grid-cols-2 sm:gap-4">
          <div className="mb-5 flex flex-wrap items-center justify-between dark:border-white dark:border-opacity-10">
            <h3 className="pb-2 font-bold leading-tight text-black dark:text-body-color-dark">
              FIRST NAME
            </h3>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="Enter first name"
              className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
            />
          </div>
          <div className="mb-5 flex flex-wrap items-center justify-between dark:border-white dark:border-opacity-10">
            <h3 className="pb-2 font-bold leading-tight text-black dark:text-body-color-dark">
              LAST NAME
            </h3>
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Enter last name"
              className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
            />
          </div>
          <div className="mb-5 flex flex-wrap items-center justify-between dark:border-white dark:border-opacity-10">
            <h3 className="pb-2 font-bold leading-tight text-black dark:text-body-color-dark">
              EMAIL ADDRESS
            </h3>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email address"
              className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
            />
          </div>
          <div className="mb-5 flex flex-wrap items-center justify-between dark:border-white dark:border-opacity-10">
            <h3 className="pb-2 font-bold leading-tight text-black dark:text-body-color-dark">
              PHONE
            </h3>
            <input
              type="telephone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="79xxxxxxxx"
              className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
            />
          </div>
          <div className="mb-5 flex flex-wrap items-center justify-between dark:border-white dark:border-opacity-10">
            <h3 className="pb-2 font-bold leading-tight text-black dark:text-body-color-dark">
              PASSWORD
            </h3>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Create your password"
              className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
            />
          </div>
          <div className="mb-5 flex flex-wrap items-center justify-between dark:border-white dark:border-opacity-10">
            <h3 className="pb-2 font-bold leading-tight text-black dark:text-body-color-dark">
              CONFIRM PASSWORD
            </h3>
            <input
              type="password"
              value={rePassword}
              onChange={(e) => setRePassword(e.target.value)}
              placeholder="Re-enter your password"
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

export default Profile;

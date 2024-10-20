"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import UserService from "@/api/user.service";
import AuthService from "@/api/auth.service";
import { Empty, Modal } from 'antd';

const UserManagement = () => {

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      const allUsers = await UserService.getAll();
      if (allUsers !== undefined) {
        if (allUsers?.length > 0) {
          setUsers(allUsers);
          setLoading(allUsers?.length > 0);
          // Navigate on success
          // Example: router.push('/'); // Assuming you have a router instance available
        }
      }
    };
    fetchUsers().catch(error => console.error('Failed to fetch users:', error));
  }, [])

  const onReload = async () => {
    //toast.success("Saved successfully!")
    const allUsers = await UserService.getAll();
    if (allUsers !== undefined) {
      if (allUsers?.length > 1) {
        setUsers(allUsers);
        setLoading(allUsers?.length > 1);
        toast.success("Reloaded successfully!")
        // Navigate on success
        // Example: router.push('/'); // Assuming you have a router instance available
      }
    }
  }

  const onDelete = async (id: number) => {
    //toast.success("Saved successfully!")
    const res = await UserService.delete(id);
    if (res !== undefined) {
      if (res?.message == "User deleted successfully!") {
        toast.success("Deleted successfully!")
      }
      else
        toast.warn(res?.message)
    }
  }

  //Update Modal
  const [isUpdateOpen, setIsUpdateOpen] = useState(false);
  const [userName, setUserName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  const [userId, setUserId] = useState('');

  const onUpdate = async (id: number) => {
    //toast.success("Saved successfully!")
    const res = await UserService.getById(id);
    if (res !== undefined) {
      console.log(res);
      setUserName(res.username == null ? '' : res.username);
      setFirstName(res.firstname == null ? '' : res.firstname);
      setLastName(res.lastname == null ? '' : res.lastname);
      setEmail(res.email == null ? '' : res.email);
      setPhone(res.phone == null ? '' : res.phone);
      setUserId(res.id);
      setIsUpdateOpen(true);
    }
    
  }

  const handleUpdate = async () => {
    if (userId == '' || userName == '' || firstName == '' || lastName == '' || phone == '' || email == '' || password == '' || rePassword =='' || password != rePassword) {
      toast.warn("Please check fields correctly.")
    } else {
      setLoading(true);
      try {
        const response = await UserService.update(userId, userName, firstName, lastName, email, phone, password); // Assuming login returns a promise
        if (response !== undefined) {
          if (response?.message == "User updated successfully!") {
            //router.push('/'); // Navigate on success
            toast.success("User updated successfully!");
            setIsUpdateOpen(false);
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
      } finally {
        setLoading(false);
      }
    }
  }

  return (
    <>
      <div className="p-8">
        <h1 className="mb-8 text-3xl font-bold leading-tight text-dark dark:text-body-color-dark sm:text-4xl sm:leading-tight">
          User Management
        </h1>
        <div className="w-full mb-5">
          {
            loading ? (
              <table className="w-full border-collapse border border-slate-400 table-auto dark:text-body-color-dark">
                <thead className="bg-slate-100 dark:bg-black">
                  <tr>
                    <th className="border border-slate-300 p-3">UserName</th>
                    <th className="border border-slate-300 p-3">FirstName</th>
                    <th className="border border-slate-300 p-3">LastName</th>
                    <th className="border border-slate-300 p-3">Email</th>
                    <th className="border border-slate-300 p-3">Phone</th>
                    <th className="border border-slate-300 p-3">Update</th>
                    <th className="border border-slate-300 p-3">Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {users.filter(user => user.id != 1).map((item, index) =>
                    <tr key={index} className="hover:bg-slate-100 dark:hover:bg-black">
                      <td className="border border-slate-300 p-2">{item.username}</td>
                      <td className="border border-slate-300 p-2">{item.firstname}</td>
                      <td className="border border-slate-300 p-2">{item.lastname}</td>
                      <td className="border border-slate-300 p-2">{item.email}</td>
                      <td className="border border-slate-300 p-2">{item.phone}</td>
                      <td className="border border-slate-300 text-center p-2 hover:text-body-color/70">
                        <button
                          onClick={() => onUpdate(item.id)}
                        >
                          Update
                        </button>
                      </td>
                      <td className="border border-slate-300 text-center p-2 hover:text-body-color/70">
                        <button
                          onClick={() => onDelete(item.id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  )}

                </tbody>
              </table>
            ) :
              (
                <div className="min-h-[300px] flex items-center justify-center"><Empty /></div>
              )
          }
        </div>
        <div className="flex flex-row items-center justify-end">
          <button
            onClick={onReload}
            className="rounded-lg bg-amber-500 px-7 py-3 text-base flex items-center justify-center font-semibold text-white duration-300 ease-in-out hover:bg-amber-500/60"
          >
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffffff"><path d="M480-160q-134 0-227-93t-93-227q0-134 93-227t227-93q69 0 132 28.5T720-690v-110h80v280H520v-80h168q-32-56-87.5-88T480-720q-100 0-170 70t-70 170q0 100 70 170t170 70q77 0 139-44t87-116h84q-28 106-114 173t-196 67Z" /></svg>
            &nbsp;Reload&nbsp;&nbsp;
          </button>
        </div>
      </div>
      <Modal
        title={
          <>
            <h3 className="mb-11 text-center text-2xl font-bold text-black dark:text-white sm:text-3xl">
            User Update
            </h3>
          </>
        } 
        open={isUpdateOpen} 
        onCancel={()=>{
          setIsUpdateOpen(false);
        }}
        footer={
          <>
            <div className="mb-6">
              <button
                onClick={handleUpdate}
                className="uppercase shadow-submit dark:shadow-submit-dark flex w-full items-center justify-center rounded-lg bg-primary py-3 text-base font-medium text-white duration-300 hover:bg-primary/90"
              >
                Update
              </button>
            </div>
          </>
        }
        width={500}
        centered
      >
        <div className="">
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
        </div>
      </Modal>
    </>
  );
};

export default UserManagement;

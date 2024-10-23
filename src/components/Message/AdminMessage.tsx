'use client';
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { io } from "socket.io-client";
import AuthService from "@/api/auth.service";
import UserService from "@/api/user.service";
import { useWindowSize } from "@/hooks/useWindowSize";
import { Empty, Modal } from 'antd';

const socket = io(`${process.env.NEXT_PUBLIC_BACKEND_API}`);

const MessageItem = ({ content, own }) => {
  return (
    <>
      {own ?
        <div className="p-2 flex items-start flex-nowrap">
          <div className="p-2 rounded-md border border-2 bg-white border-dark mr-3">
            <Image
              src="/images/message/account.png"
              alt="author"
              className="rounded-md"
              width={30}
              height={30}
            />
          </div>
          <div className="flex">
            <div className="max-w-[650px] bg-slate-100 text-base px-5 py-3 text-black rounded-lg">{content}</div>
          </div>
        </div>
        :
        <div className="w-full -ml-3">
          <div className="flex justify-end py-2 px-2">
            <div className="max-w-[700px] bg-primary text-base px-5 py-3 text-white rounded-lg">
              {content}
            </div>
          </div>
        </div>
      }
    </>
  )
}

const AdminMessage = () => {
  const size = useWindowSize();
  const [isVisible, setIsVisible] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [userId, setUserId] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [targetId, setTargetId] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    socket.on("to_admin", (msg) => {
      setMessages((prev) => [...prev, msg]);
    })

    const user = AuthService.getCurrentUser();
    if (user != null) {
      setUserId(user.id);
      setUserEmail(user.email);
    }
    socket.emit('register', user.email);

    return () => {
      socket.off("to_admin");
      socket.off("register");
    };
  }, []);

  useEffect(() => {
    const fetchUsers = async () => {
      const allUsers = await UserService.getAll();
      if (allUsers !== undefined) {
        if (allUsers?.length > 0) {
          setUsers(allUsers);
          setLoading(allUsers?.length > 1);
          // Navigate on success
          // Example: router.push('/'); // Assuming you have a router instance available
        }
      }
    };
    fetchUsers().catch(error => console.error('Failed to fetch users:', error));
  }, []);

  const sendMessage = () => {
    if (message.trim() == '' || targetId == '')
      return;
    const msg = { content: message, type: "text", userId: userId, userEmail: userEmail, targetId: targetId }
    setMessages((prev) => [...prev, msg]);
    socket.emit("from_admin", msg);
    setMessage('');
  };

  const chatEndRef = useRef(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]); // Scroll to bottom whenever messages change

  return (
    <>
      <div className="w-full border-t-2">
        {/* <div className="relative h-[50px] bg-black text-base flex items-center justify-center text-white">
          How can I help you today?
          <Link
            href="/"
            className="absolute top-0 right-2 py-3 text-nowrap text-base font-medium text-white hover:opacity-70 dark:text-body-color-dark"
          >
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="none"><path fill="currentColor" d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h280v80H200Zm440-160-55-58 102-102H360v-80h327L585-622l55-58 200 200-200 200Z" /></svg>
          </Link>
        </div> */}
        <div className="flex flex-wrap">
          <div
            className="w-full md:w-4/12 overflow-y-auto"
            style={{
              height: `${`${(size.height ?? 600) - 98}px`}`,
            }}
          >
            {
              users.filter(user => user.id != 1).map((user, index) => (
                <div
                  key={index}
                  className={`px-3 py-1 h-[80px] hover:bg-black/20 flex items-center ${targetId == user.email && 'bg-black/10 border-r-4 border-indigo-500'}`}
                  onClick={() => setTargetId(user.email)}
                >
                  <div className="p-2 rounded-md border border-2 border-dark mr-2">
                    <Image
                      src="/images/message/account.png"
                      alt="author"
                      className="rounded-md"
                      width={33}
                      height={33}
                    />
                  </div>
                  <div className="w-full p-4 m1-2">
                    <p className="mb-1 text-base font-medium text-body-color">
                      {user.username}
                    </p>
                    <p className="mb-1 text-base font-medium text-body-color">
                      {user.email}&nbsp;&nbsp;&nbsp;&nbsp;{user.phone}
                    </p>
                  </div>
                </div>
              ))
            }
            {
              !loading && 
                <div className="w-full min-h-[300px] flex items-center justify-center"><Empty description="No Data"/></div>
            }
          </div>
          <div className="relative w-full md:w-8/12 border-l-2 overflow-y-auto">
            <div className="w-full overflow-y-auto"
              style={{
                height: `${`${(size.height ?? 600) - 158}px`}`,
              }}
            >
              {
                messages.filter(message => ( (message.userEmail == targetId && message.targetId == userEmail) || (message.userEmail == userEmail && message.targetId == targetId))).map((message, index) => (
                  <MessageItem key={index} content={message.content} own={message.userId == 1 ? false : true} />
                ))
              }
              {
                !targetId && 
                  <div className="min-h-[300px] w-full flex items-center justify-center">
                    <Empty 
                      description="No Message. Please Select A User."
                    />
                  </div>
              }
              <div ref={chatEndRef} />
            </div>
            <div className="absolute bottom-0 w-full bg-white border-t-2 flex items-center justify-center">
              <div className="w-full pl-2">
                <input
                  type="text"
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      sendMessage();
                    }
                  }}
                  placeholder="Enter your message"
                  className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                />
              </div>
              <div className="w-[60px] h-[60px] flex items-center justify-center">
                <button onClick={sendMessage} className="w-[40px] h-[40px] rounded-full hover:bg-slate-100 text-black bg-white duration-300 flex items-center justify-center">
                  <svg className="" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="none"><path fill="currentColor" d="M120-160v-640l760 320-760 320Zm80-120 474-200-474-200v140l240 60-240 60v140Zm0 0v-400 400Z" /></svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="h-[50px] bg-black text-base flex items-center justify-center text-white">
            How can I help you today?
          </div>
          <div className="h-full min-h-screen px-3 py-3 bg-white text-base text-white overflow-y-auto space-y-2">
            {
              messages.map((message, index) => (
                <MessageItem content={message.content} own={ message.userId == 1 }/>
              ))
            }
          </div>
          <div className="bottom-0 h-[60px] pb-2 bg-white flex justify-between border border-t border-strike">
            <textarea
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Enter your message"
              className="w-[250px] h-full overflow-auto bg-white px-3 py-3 text-base outline-none text-body-color"
            />
            <div className="h-[60px] grid content-end pb-3 pr-1">
              <button onClick={sendMessage} className="w-[40px] h-[40px] rounded-full hover:bg-slate-100 text-black bg-white duration-300 flex items-center justify-center">
                <svg className="" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="none"><path fill="currentColor" d="M120-160v-640l760 320-760 320Zm80-120 474-200-474-200v140l240 60-240 60v140Zm0 0v-400 400Z" /></svg>
              </button>
            </div>
          </div> */}
      </div>
    </>
  );
}

export default AdminMessage;
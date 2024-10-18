import { useEffect, useState } from "react";
import Image from "next/image";

export default function Message() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    
  }, []);

  return (
    <>
      <div className="fixed bottom-8 left-8 z-[99]">
        <div
          onClick={()=> setIsVisible(!isVisible)}
          aria-label="scroll to top"
          className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-amber-500 text-white shadow-md transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp"
        >
          {
            !isVisible &&
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-500 opacity-75"></span>
          }
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffffff"><path d="M240-400h320v-80H240v80Zm0-120h480v-80H240v80Zm0-120h480v-80H240v80ZM80-80v-720q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H240L80-80Zm126-240h594v-480H160v525l46-45Zm-46 0v-480 480Z"/></svg>
        </div>
      </div>
      {
        isVisible &&
          <div className="fixed bottom-24 left-8 w-full z-[99]">
            <div className="w-[350px] h-[480px] rounded-lg shadow-lg overflow-hidden">
              <div className="h-[50px] bg-black text-base flex items-center justify-center text-white">
                How can I help you today?
              </div>
              <div className="h-[370px] px-3 py-3 bg-white text-base text-white overflow-y-auto space-y-2">
                <div className="w-full flex flex-nowrap">
                  <div className="rounded-full mr-2">
                    <Image
                      src="/images/message/administrator.png"
                      alt="author"
                      className="rounded-full"
                      width={40}
                      height={40}
                    />
                  </div>
                  <div className="w-full bg-slate-100 text-base px-2 py-2 text-black rounded-lg mr-3">
                    123123 465456 798787899 fdgfdsg dfgdsfg fdgsdfgr ertrtrt dfgsd ertwertwet.
                  </div>
                </div>
                <div className="w-full flex flex-nowrap">
                  <div className="w-full bg-primary text-base px-2 py-2 text-white rounded-lg ml-12">
                    123123 465456 798787899 fdgfdsg dfgdsfg fdgsdfgr ertrtrt dfgsd ertwertwet.
                  </div>
                </div>
              </div>
              <div className="h-[60px] pb-2 bg-white flex justify-between border border-t border-strike">
                <textarea
                  type="text"
                  name="message"
                  placeholder="Enter your message"
                  className="w-[250px] h-full overflow-auto bg-white px-3 py-3 text-base outline-none text-body-color"
                />
                <div className="h-[60px] grid content-end pb-3 pr-1">
                  <button className="w-[40px] h-[40px] rounded-full hover:bg-slate-100 text-black bg-white duration-300 flex items-center justify-center">
                    <svg className="" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="none"><path fill="currentColor" d="M120-160v-640l760 320-760 320Zm80-120 474-200-474-200v140l240 60-240 60v140Zm0 0v-400 400Z"/></svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
      }
    </>
  );
}

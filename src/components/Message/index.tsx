import { useEffect, useState } from "react";

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
            <div className="w-[300px] h-[300px] bg-amber-500 rounded-lg shadow-lg">

            </div>
          </div>
      }
    </>
  );
}

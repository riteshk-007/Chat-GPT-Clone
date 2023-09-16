import React, { useContext } from "react";
import { ContextApp } from "../utils/Context";
import { LuPanelLeftOpen } from "react-icons/lu";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
function ChatContainer() {
  const { setShowSlide, showSlide, setMobile, Mobile } = useContext(ContextApp);
  return (
    <div
      className={
        showSlide
          ? "h-screen w-screen bg-gray-700 flex items-start justify-between flex-col"
          : "h-screen w-full lg:w-[calc(100%-300px)] bg-gray-700 flex items-start justify-between flex-col"
      }
    >
      <span
        className="rounded px-3 py-[9px] hidden lg:flex items-center justify-center cursor-pointer text-white m-4 hover:bg-gray-600 duration-200"
        title="Open sidebar"
        onClick={() => setShowSlide(!showSlide)}
      >
        {showSlide && <LuPanelLeftOpen />}
      </span>
      <span
        className="rounded px-3 py-[9px] lg:hidden flex items-center justify-center cursor-pointer text-white m-4 border border-gray-600"
        title="Open sidebar"
        onClick={() => setMobile(!Mobile)}
      >
        <HiOutlineMenuAlt2 fontSize={20} />
      </span>
    </div>
  );
}

export default ChatContainer;

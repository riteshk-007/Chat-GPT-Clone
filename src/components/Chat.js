import React, { useContext } from "react";
import { ContextApp } from "../utils/Context";

function Chat() {
  const { message, msgEnd } = useContext(ContextApp);
  return (
    <div className=" w-full h-[85%] flex items-center justify-center overflow-hidden overflow-y-auto px-2 py-1 scroll">
      <div className="w-full lg:w-4/5 flex flex-col h-full items-start justify-start">
        {message?.map((msg, i) => (
          <span
            key={i}
            className={
              msg.isBot
                ? "flex items-start justify-center gap-2 lg:gap-5 my-2 bg-gray-800/80 p-3 rounded-md "
                : "flex items-start justify-center gap-2 lg:gap-5 my-2 p-3"
            }
          >
            <img
              src={msg.isBot ? "/icon.png" : "/user.jpeg"}
              alt="user"
              className="w-10 h-10 rounded object-cover"
            />
            <p className="text-white text-[15px]">{msg?.text}</p>
          </span>
        ))}
        <div ref={msgEnd} />
      </div>
    </div>
  );
}

export default Chat;

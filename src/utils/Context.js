import { createContext, useEffect, useRef, useState } from "react";
import { sendMsgToAI } from "./OpenAi";
export const ContextApp = createContext();

const AppContext = ({ children }) => {
  const [showSlide, setShowSlide] = useState(false);
  const [Mobile, setMobile] = useState(false);
  const [chatValue, setChatValue] = useState("");
  const [message, setMessage] = useState([
    {
      text: "Hi, I'm ChatGPT, a powerful language model created by OpenAI. My primary function is to assist users in generating human-like text based on the prompts and questions I receive. I have been trained on a diverse range of internet text up until September 2021, so I can provide information, answer questions, engage in conversations, offer suggestions, and more on a wide array of topics. Please feel free to ask me anything or let me know how I can assist you today!",
      isBot: true,
    },
  ]);
  const msgEnd = useRef(null);

  useEffect(() => {
    msgEnd.current.scrollIntoView();
  }, [message]);

  // button Click function
  const handleSend = async () => {
    const text = chatValue;
    setChatValue("");
    setMessage([...message, { text, isBot: false }]);
    const res = await sendMsgToAI(text);
    setMessage([
      ...message,
      { text, isBot: false },
      { text: res, isBot: true },
    ]);
  };

  // Enter Click function
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  // Query Click function
  const handleQuery = async (e) => {
    const text = e.target.innerText;
    setMessage([...message, { text, isBot: false }]);
    const res = await sendMsgToAI(text);
    setMessage([
      ...message,
      { text, isBot: false },
      { text: res, isBot: true },
    ]);
  };
  return (
    <ContextApp.Provider
      value={{
        showSlide,
        setShowSlide,
        Mobile,
        setMobile,
        chatValue,
        setChatValue,
        handleSend,
        message,
        msgEnd,
        handleKeyPress,
        handleQuery,
      }}
    >
      {children}
    </ContextApp.Provider>
  );
};
export default AppContext;

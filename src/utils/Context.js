import { createContext, useState } from "react";

export const ContextApp = createContext();

const AppContext = ({ children }) => {
  const [showSlide, setShowSlide] = useState(false);
  const [Mobile, setMobile] = useState(false);
  return (
    <ContextApp.Provider value={{ showSlide, setShowSlide, Mobile, setMobile }}>
      {children}
    </ContextApp.Provider>
  );
};
export default AppContext;

import React from "react";
import LeftNav from "../components/LeftNav";
import ChatContainer from "../components/ChatContainer";
import Mobile from "../components/Mobile";

function Home() {
  return (
    <div className="flex w-screen relative">
      <LeftNav />
      <ChatContainer />
      <span className="flex lg:hidden">
        <Mobile />
      </span>
    </div>
  );
}

export default Home;

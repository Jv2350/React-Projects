import React from "react";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="mx-auto max-w-[370px]">
      <Navbar />
      <div className="flex">
        <input
          type="text"
          className="h-10 flex-grow rounded-md border border-white bg-transparent"
        />
      </div>
    </div>
  );
};

export default App;

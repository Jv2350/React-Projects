import React from "react";
import { FiSearch } from "react-icons/fi";
import Navbar from "./components/Navbar";
import { AiFillPlusCircle } from "react-icons/ai";

const App = () => {
  return (
    <div className="mx-auto max-w-[370px]">
      <Navbar />
      <div className="flex gap-2">
        <div className="relative flex flex-grow items-center">
          <FiSearch className="absolute ml-1 text-3xl text-white" />

          <input
            type="text"
            className="h-10 flex-grow rounded-md border border-white bg-transparent pl-10 text-white"
          />
        </div>
        <AiFillPlusCircle className="text-5xl text-white cursor-pointer" />
      </div>
    </div>
  );
};

export default App;

import React from "react";

export default function Sidebar() {
  return (
    <div className=" w-[2.375rem]  flex flex-grow flex-col items-center ">
      {/* Sidebar Buttons */}
      <div className="space-y-3 mt-1 flex flex-col flex-1 items-center">
        {/* Section C */}
        <div className="flex flex-row justify-center items-center">
          <div className="w-1 h-2 bg-white rounded-r-full absolute left-0"></div>
          <button className="w-[1.5rem] h-[1.5rem] bg-gradient-to-b from-[#FF9F00] to-[#FDBF00] rounded-lg flex justify-center text-center ">
            <span className="text-[#FFFFFF] text-[1rem] font-medium">C</span>
          </button>
        </div>

        {/* Plus Button */}
        <button className="w-[1.5rem] h-[1.5rem] rounded-lg flex justify-center  items-center pb-1  mt-4 hover:bg-slate-600 hover:border hover:border-gray-400 hover:bg-opacity-40 ">
          <span className="text-[#3f55f9] text-[1.9rem]">+</span>
        </button>

        {/*line break*/}
        <div className="w-6 h-[0.1rem] bg-gray-600"></div>

        {/* Section D */}
        <button className="w-[1.5rem] h-[1.5rem] bg-gradient-to-b from-[#FF4B00] to-[#FF9F00] rounded-lg flex justify-center text-center">
          <span className="text-[#FFFFFF] text-[1rem] font-medium">D</span>
        </button>

        {/* Section L */}
        <button className="w-[1.5rem] h-[1.5rem] bg-gradient-to-b from-[#059669] to-[#15BD6D] rounded-lg flex justify-center text-center">
          <span className="text-[#FFFFFF] text-[1rem] font-medium">L</span>
        </button>

        {/* Plus Button */}
        <button className="w-[1.5rem] h-[1.5rem] rounded-lg flex justify-center  items-center pb-1  mt-4 hover:bg-slate-600 hover:border hover:border-gray-400 hover:bg-opacity-40  ">
          <span className="text-[#3f55f9] text-[1.9rem]">+</span>
        </button>

        {/*line break*/}
        <div className="w-6 h-[0.1rem] bg-gray-600"></div>

        {/* Plus Button */}
        <button className="w-[1.5rem] h-[1.5rem] rounded-lg flex justify-center  items-center pb-1  mt-4 hover:bg-slate-600 hover:border hover:border-gray-400 hover:bg-opacity-40 ">
          <span className="text-[#3f55f9] text-[1.9rem]">+</span>
        </button>
      </div>
      {/*Below Buttons*/}
      <div className="mt-auto mb-4 space-y-3 flex flex-col justify-center items-center">
        {/*Billing*/}
        <button className="w-[1.5rem] h-[1.5rem] rounded-lg flex justify-center text-center items-center border border-gray-300 border-opacity-60 bg-[#4157FE] cursor-pointer ">
          <img src="/assets/billing.svg" className="w-4 h-4"></img>
        </button>

        {/*Bug*/}
        <button className="w-[1.5rem] h-[1.5rem] rounded-lg flex justify-center text-center items-center border border-gray-300 border-opacity-60 bg-[#4157FE] cursor-pointer ">
          <img src="/assets/bug.svg" className="w-4 h-4"></img>
        </button>

        {/*Support*/}
        <button className="w-[1.5rem] h-[1.5rem] rounded-lg flex justify-center text-center items-center border border-gray-300 border-opacity-60 bg-[#4157FE] cursor-pointer ">
          <img src="/assets/support.svg" className="w-4 h-4"></img>
        </button>
      </div>
    </div>
  );
}

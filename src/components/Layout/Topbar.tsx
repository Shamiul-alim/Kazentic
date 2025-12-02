import React from "react";

export default function Topbar() {
  return (
    <div className="flex justify-between h-[2.375rem]  items-center">
      <div className="flex flex-row justify-center items-center w-[60%]">
        {/*Logo*/}
        <img src="/assets/k.svg" className="flex justify-start" />
        {/* Search Bar Section */}
        <div className="flex justify-center items-center h-7 ml-auto  bg-transparent border border-gray-500 rounded-lg w-[40%] max-w-xl pl-4 mr-3 font-medium">
          <img
            src="/assets/topbarSearch.svg"
            alt="Search Icon"
            className="w-5 h-5"
          />
          <input
            type="text"
            placeholder="Search ..."
            className="w-full h- bg-transparent text-[#FFFFFF] placeholder-[#FFFFFF] focus:outline-none ml-2"
          />
          <div className="ml-auto h-7  pr-1 border-l-2 border-gray-500 pl-1 flex justify-center items-center">
            <img className="w-6 h-6" src="/assets/topbarDeco.svg" />
          </div>
        </div>
      </div>

      {/* Right Side Icons Section */}
      <div className="flex items-center space-x-4 ml-auto pr">
        {/* Notification Icon */}
        <button className="text-white">
          <img
            src="/assets/notification.svg" // Replace with your notification icon path
            alt="Notification"
            className="w-5 h-5"
          />
        </button>

        {/* Menu */}
        <button className="text-white">
          <img
            src="/assets/menu.svg" // Replace with your grid icon path
            alt="Menu"
            className="w-4 h-4"
          />
        </button>
      </div>

      <div className=" w-[0.1rem] h-[80%] bg-gray-300 ml-4 mr-4 bg-opacity-30"></div>

      {/* User Profile Icon */}
      <div className="flex items-center space-x-2 pr-4">
        <div className="w-8 h-8 rounded-full">
          <img
            src="/assets/profile.svg"
            alt="Profile"
            className="w-8 h-8 rounded-full"
          />
        </div>
        <div className="leading-3 pt-1 text-[#FFFFFF]">
          <div className="font-bold text-[0.813rem]">Shihab</div>
          <div className="text-[0.75rem] text-opacity-70 ">
            shihab&#64;kazentic.com
          </div>
        </div>
        <img src="/assets/moreB.svg" className="w-5 h-5"></img>
      </div>
    </div>
  );
}

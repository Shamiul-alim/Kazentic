import React from "react";
import Image from "next/image";

export default function Topbar() {
  return (
    <div className="flex justify-between h-[2.375rem]  items-center">
      <div className="flex flex-row justify-center items-center w-[60%]">
        {/*Logo*/}
        <Image
          src="/assets/k.svg"
          className="flex justify-start"
          alt="icon"
          width={50}
          height={50}
        />
        {/* Search Bar Section */}
        <div className="flex justify-center items-center h-7 ml-auto  bg-transparent border border-gray-500 rounded-lg w-[40%] max-w-xl pl-4 mr-3 font-medium">
          <Image
            src="/assets/topbarSearch.svg"
            alt="Search Icon"
            width={20}
            height={20}
          />
          <input
            type="text"
            placeholder="Search ..."
            className="w-full h- bg-transparent text-[#FFFFFF] placeholder-[#FFFFFF] focus:outline-none ml-2"
          />
          <div className="ml-auto h-7  pr-1 border-l-2 border-gray-500 pl-1 flex justify-center items-center">
            <Image
              src="/assets/topbarDeco.svg"
              alt="icon"
              width={24}
              height={24}
            />
          </div>
        </div>
      </div>

      {/* Right Side Icons Section */}
      <div className="flex items-center space-x-4 ml-auto pr">
        {/* Notification Icon */}
        <button className="text-white">
          <Image
            src="/assets/notification.svg"
            alt="Notification"
            width={20}
            height={20}
          />
        </button>

        {/* Menu */}
        <button className="text-white">
          <Image src="/assets/menu.svg" alt="Menu" height={16} width={16} />
        </button>
      </div>

      <div className=" w-[0.1rem] h-[80%] bg-gray-300 ml-4 mr-4 bg-opacity-30"></div>

      {/* User Profile Icon */}
      <div className="flex items-center space-x-2 pr-4">
        <div className="w-8 h-8 rounded-full">
          <Image
            src="/assets/profile.svg"
            alt="Profile"
            width={32}
            height={32}
            className=" rounded-full"
          />
        </div>
        <div className="leading-3 pt-1 text-[#FFFFFF]">
          <div className="font-bold text-[0.813rem]">Shihab</div>
          <div className="text-[0.75rem] text-opacity-70 ">
            shihab&#64;kazentic.com
          </div>
        </div>
        <Image src="/assets/moreB.svg" alt="icon" width={20} height={20} />
      </div>
    </div>
  );
}

"use client";

import * as React from "react";

import { ChevronDown } from "lucide-react";

export default function SideMenu() {
  const [isManageOpen, setIsManageOpen] = React.useState(false);

  const toggleManageDropdown = () => {
    setIsManageOpen(!isManageOpen);
  };

  return (
    <div className="w-[12.5rem] h-full bg-[#FFFFFF] text-[#191F38] border-r border-[#EBEBEB] flex flex-col rounded-tl-md ">
      {/* Carbon Stream Section */}
      <div className="flex items-center mb-2  border-b border-[#EBEBEB] p-3 h-[2.188rem] ">
        <div className="flex items-center gap-2">
          <button className="w-[1.5rem] h-[1.5rem] bg-gradient-to-b from-[#FF9F00] to-[#FDBF00] rounded-lg flex justify-center text-center ">
            <span className="text-[#FFFFFF] text-[1rem] font-medium">C</span>
          </button>
          <span className="font-semibold text-[0.875rem]">Carbon Stream</span>
        </div>
        <img src="/assets/sidemenu.svg" className="flex ml-auto mr-3" />
      </div>

      {/* Sidebar Menu */}
      <div className="space-y-1 pl-2 pr-2">
        {/* Dashboard */}
        <div className="flex flex-row w-full text-left text-[0.875rem] font-medium text-[#191F38]  hover:bg-gray-100 py-2 rounded-md transition duration-200 space-x-2 pl-2">
          <img src="/assets/dashboardIcon.svg"></img>
          <button className="">Dashboard</button>
        </div>

        {/* Manage Dropdown */}
        <div className="relative">
          <button
            onClick={toggleManageDropdown}
            className="flex flex-row w-full text-left text-[0.875rem] font-medium text-[#191F38]  hover:bg-gray-100 py-[0.4rem] rounded-md transition duration-200 gap-2 pl-2 pr-2"
          >
            <img src="/assets/manageIcon.svg"></img>
            <span>Manage</span>
            <ChevronDown
              className={`transition-transform ml-auto duration-300 ${
                isManageOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {isManageOpen && (
            <div className="pl-6 bg-[#F3F4F6] text-black p-2 rounded-md">
              <div className="flex flex-row w-full text-left text-[0.875rem] font-medium text-[#191F38]  hover:bg-gray-100 py-2 rounded-md transition duration-200 space-x-2 pl-2">
                <img src="/assets/timetrackerIcon.svg"></img>
                <button className="">Time Tracker</button>
              </div>
              <div className="flex flex-row w-full text-left text-[0.875rem] font-medium text-[#191F38]  hover:bg-gray-100 py-2 rounded-md transition duration-200 space-x-2 pl-2">
                <img src="/assets/timetrackerIcon.svg"></img>
                <button className="">Time Tracker</button>
              </div>
              <div className="flex flex-row w-full text-left text-[0.875rem] font-medium text-[#191F38]  hover:bg-gray-100 py-2 rounded-md transition duration-200 space-x-2 pl-2">
                <img src="/assets/timetrackerIcon.svg"></img>
                <button className="">Time Tracker</button>
              </div>
              <div className="flex flex-row w-full text-left text-[0.875rem] font-medium text-[#191F38]  hover:bg-gray-100 py-2 rounded-md transition duration-200 space-x-2 pl-2">
                <img src="/assets/timetrackerIcon.svg"></img>
                <button className="">Time Tracker</button>
              </div>
              <div className="flex flex-row w-full text-left text-[0.875rem] font-medium text-[#191F38]  hover:bg-gray-100 py-2 rounded-md transition duration-200 space-x-2 pl-2">
                <img src="/assets/timetrackerIcon.svg"></img>
                <button className="">Time Tracker</button>
              </div>
              <div className="flex flex-row w-full text-left text-[0.875rem] font-medium text-[#191F38]  hover:bg-gray-100 py-2 rounded-md transition duration-200 space-x-2 pl-2">
                <img src="/assets/timetrackerIcon.svg"></img>
                <button className="">Time Tracker</button>
              </div>
              <div className="flex flex-row w-full text-left text-[0.875rem] font-medium text-[#191F38]  hover:bg-gray-100 py-2 rounded-md transition duration-200 space-x-2 pl-2">
                <img src="/assets/timetrackerIcon.svg"></img>
                <button className="">Time Tracker</button>
              </div>
            </div>
          )}
        </div>

        {/* Other Menu Items */}
        <div className="flex flex-row w-full text-left text-[0.875rem] font-medium text-[#191F38]  hover:bg-gray-100 py-2 rounded-md transition duration-200 space-x-2 pl-2">
          <img src="/assets/timetrackerIcon.svg"></img>
          <button className="">Time Tracker</button>
        </div>
        <div className="flex flex-row w-full text-left text-[0.875rem] font-medium text-[#191F38]  hover:bg-gray-100 py-2 rounded-md transition duration-200 space-x-2 pl-2">
          <img src="/assets/taskIcon.svg"></img>
          <button className="">Tasks</button>
        </div>
        <div className="flex flex-row w-full text-left text-[0.875rem] font-medium text-[#191F38]  hover:bg-gray-100 py-2 rounded-md transition duration-200 space-x-2 pl-2">
          <img src="/assets/reportIcon.svg"></img>
          <button className="">Reports</button>
        </div>
        <div className="flex flex-row w-full text-left text-[0.875rem] font-medium text-[#191F38]  hover:bg-gray-100 py-2 rounded-md transition duration-200 space-x-2 pl-2">
          <img src="/assets/reportIcon.svg"></img>
          <button className="">Email</button>
        </div>
        <div className="flex flex-row w-full text-left text-[0.875rem] font-medium text-[#191F38]  hover:bg-gray-100 py-2 rounded-md transition duration-200 space-x-2 pl-2">
          <img src="/assets/reportIcon.svg"></img>
          <button className="">Storage</button>
        </div>
        <div className="flex flex-row w-full text-left text-[0.875rem] font-medium text-[#191F38]  hover:bg-gray-100 py-2 rounded-md transition duration-200 space-x-2 pl-2">
          <img src="/assets/reportIcon.svg"></img>
          <button className="">Calendar</button>
        </div>
        <div className="flex flex-row w-full text-left text-[0.875rem] font-medium text-[#191F38]  hover:bg-gray-100 py-2 rounded-md transition duration-200 space-x-2 pl-2">
          <img src="/assets/reportIcon.svg"></img>
          <button className="">Notes</button>
        </div>
        <div className="flex flex-row w-full text-left text-[0.875rem] font-medium text-[#191F38]  hover:bg-gray-100 py-2 rounded-md transition duration-200 space-x-2 pl-2">
          <img src="/assets/reportIcon.svg"></img>
          <button className="">HRM</button>
        </div>
        <div className="flex flex-row w-full text-left text-[0.875rem] font-medium text-[#191F38]  hover:bg-gray-100 py-2 rounded-md transition duration-200 space-x-2 pl-2">
          <img src="/assets/reportIcon.svg"></img>
          <button className="">CRM</button>
        </div>
        <div className="flex flex-row w-full text-left text-[0.875rem] font-medium text-[#191F38]  hover:bg-gray-100 py-2 rounded-md transition duration-200 space-x-2 pl-2">
          <img src="/assets/reportIcon.svg"></img>
          <button className="">Chat</button>
        </div>
        <div className="flex flex-row w-full text-left text-[0.875rem] font-medium text-[#191F38]  hover:bg-gray-100 py-2 rounded-md transition duration-200 space-x-2 pl-2">
          <img src="/assets/reportIcon.svg"></img>
          <button className="">Forms</button>
        </div>
      </div>
      {/* Upgrade Space */}
      <div className="">
        <img src="/assets/add.svg" className="w-full  mb-10"></img>
      </div>
    </div>
  );
}

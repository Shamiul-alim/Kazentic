"use client";
import React, { useState } from "react";
import tabsData from "@/data/tabsData.json";
import { Button } from "../ui/button";
import Inbox from "./Tab Content/inbox";
import Sent from "./Tab Content/sent";
import Draft from "./Tab Content/Draft";
import Starred from "./Tab Content/Starred";
import Spam from "./Tab Content/Spam";
import Trash from "./Tab Content/Trash";
import AllMail from "./Tab Content/AllMail";

export default function DashboardSection() {
  const [activeTab, setActiveTab] = useState("Inbox");

  const handleTabClick = (tabName: string) => {
    setActiveTab(tabName);
  };
  const renderTabContent = () => {
    switch (activeTab) {
      case "Inbox":
        return <Inbox />;
      case "Sent":
        return <Sent />;
      case "All Mail":
        return <AllMail />;
      case "Draft":
        return <Draft />;
      case "Starred":
        return <Starred />;
      case "Spam":
        return <Spam />;
      case "Trash":
        return <Trash />;
    }
  };

  return (
    <div className="w-full h-full bg-[#FFFFFF] flex flex-col">
      <div className="flex  items-center  mb-2  border-b border-[#EBEBEB] p-3 pl-5 h-[2.188rem]">
        <span className="text-[0.875rem] text-[#8F97A2] font-medium">Menu</span>
        <span className="text-[0.875rem] text-[#8F97A2] font-medium ml-3">
          &#x2022;
        </span>
        <span className="text-[0.875rem] text-[#191F38] font-medium ml-3">
          Inbox
        </span>
        <img
          src="/assets/messageQuestion.svg"
          className=" w-5 h-5 ml-auto mr-[0.4rem]"
        />
      </div>
      <div className="h-[3.25rem] rounded-lg bg-[#FDFDFD] border border-[#EBEBEB] m-[1.25rem] flex flex-row items-center justify-between pl-3 pr-3">
        <div className="flex flex-row  py-[0.688rem]  border-r border-[#EBEBEB] space-x-2  w-fit pr-5  ">
          <div className=" rounded-full bg-[#4157FE] w-[1.875rem] h-[1.875rem] flex justify-center items-center">
            <span className="text-[0.832rem] font-normal text-[#FFFFFF]">
              S
            </span>
          </div>
          <div className="flex flex-col justify-center space-y-1.5">
            <span className="text-[#191F38]  text-[0.875rem] font-medium leading-[0.635rem] tracking-tighter ">
              Shamiul Alim
            </span>
            <span className="text-[#00000080] text-opacity-50 font-medium text-[0.75rem] leading-[0.625rem] tracking-tighter">
              shihab@deepchainlabs.com
            </span>
          </div>
        </div>
        <div className="flex flex-row  space-x-1 ">
          {tabsData.map((tab) => (
            <button
              onClick={() => handleTabClick(tab.name)}
              key={tab.name}
              className={`text-center text-sm  px-2 py-3.5 flex flex-row justify-center items-center gap-1 tracking-tighter font-semibold ${
                activeTab === tab.name
                  ? "text-[#4157FE] border-b-2 border-[#4157FE]"
                  : "text-[#697588]"
              }`}
            >
              <img
                src={activeTab === tab.name ? tab.activeIcon : tab.icon}
                className="w-4  h-4"
              />
              {tab.name}
            </button>
          ))}
        </div>
        <div className="">
          <button className="bg-[#4157FE] text-[#FFFFFF] text-[0.875rem] font-medium flex flex-row justify-center items-center gap-1 py-1.5 px-2 rounded-lg hover:bg-blue-800 ">
            <img src="/assets/plus.svg" className="w-3 h-3" />
            <span>New Message</span>
          </button>
        </div>
      </div>
      <div className="">{renderTabContent()}</div>
    </div>
  );
}

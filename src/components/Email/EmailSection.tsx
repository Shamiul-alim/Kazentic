"use client";
import React, { useState } from "react";
import tabsData from "@/data/tabsData.json";
import InboxData from "@/data/emailData.json";
import Inbox from "./Tab Content/Inbox";
import Sent from "./Tab Content/Sent";
import Draft from "./Tab Content/Draft";
import Starred from "./Tab Content/Starred";
import Spam from "./Tab Content/Spam";
import Trash from "./Tab Content/Trash";
import AllMail from "./Tab Content/AllMail";
import MessageForm from "./MessageForm";

export default function DashboardSection() {
  const [activeTab, setActiveTab] = useState("Inbox");
  const [fadeKey, setFadeKey] = useState(0);
  const [isMessageFormOpen, setMessageFormOpen] = useState(false);
  const handleTabClick = (tabName: string) => {
    setFadeKey((prev) => prev + 1);
    setTimeout(() => {
      setActiveTab(tabName);
    }, 300);
  };

  const filterEmails = () => {
    switch (activeTab) {
      case "Inbox":
      case "All Mail":
        return InboxData;
      case "Starred":
        return InboxData.filter((email) => email.isStarred);
      case "Sent":
        return InboxData.filter((email) => email.isSent);
      case "Draft":
        return InboxData.filter((email) => email.isDraft);
      case "Spam":
        return InboxData.filter((email) => email.isSpam);
      case "Trash":
        return InboxData.filter((email) => email.isTrash);
      default:
        return InboxData;
    }
  };
  const renderTabContent = () => {
    switch (activeTab) {
      case "Inbox":
        return <Inbox emails={filterEmails()} />;
      case "Sent":
        return <Sent emails={filterEmails()} />;
      case "All Mail":
        return <AllMail emails={filterEmails()} />;
      case "Draft":
        return <Draft emails={filterEmails()} />;
      case "Starred":
        return <Starred emails={filterEmails()} />;
      case "Spam":
        return <Spam emails={filterEmails()} />;
      case "Trash":
        return <Trash emails={filterEmails()} />;
    }
  };

  const openMessageForm = () => {
    setMessageFormOpen(true);
  };

  const closeMessageForm = () => {
    setMessageFormOpen(false);
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
          <button
            onClick={openMessageForm}
            className="bg-[#4157FE] text-[#FFFFFF] text-[0.875rem] font-medium flex flex-row justify-center items-center gap-1 py-1.5 px-2 rounded-lg hover:bg-blue-800 "
          >
            <img src="/assets/plus.svg" className="w-3 h-3" />
            <span>New Message</span>
          </button>
        </div>
      </div>
      <div
        key={fadeKey}
        className="transition-all duration-700 ease-out opacity-0 transform scale-95"
        style={{ opacity: 1, transform: "scale(1)" }}
      >
        {renderTabContent()}
      </div>
      {isMessageFormOpen && <MessageForm onClose={closeMessageForm} />}
    </div>
  );
}

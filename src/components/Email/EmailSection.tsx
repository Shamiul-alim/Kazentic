"use client";
import React, { useState, useEffect } from "react";
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
import Image from "next/image";
import { useSidebar } from "@/context/SidebarContext";
type EmailSectionProps = {
  isSidebarOpen: boolean;
};

export default function EmailSection() {
  const [activeTab, setActiveTab] = useState("Inbox");
  const [isMessageFormOpen, setMessageFormOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const { isSidebarOpen } = useSidebar();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1173);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleTabClick = (tabName: string) => {
    setTimeout(() => {
      setActiveTab(tabName);
    }, 300);
  };

  const filterEmails = () => {
    switch (activeTab) {
      case "Inbox":
        return InboxData;
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
    <div
      className={`w-full  bg-[#FFFFFF] flex flex-col ${
        isMobile && isSidebarOpen ? "rounded-tl-lg " : ""
      } `}
    >
      <div
        className={`flex  items-center bg-[#FFFFFF]  border-b border-[#EBEBEB] p-2 sm:pl-3 md:pl-5 h-[2.188rem]  mb-1 ${
          isMobile && isSidebarOpen ? "rounded-tl-lg " : ""
        }`}
      >
        <span className="text-[0.7rem] sm:texxt-[0.875rem] text-[#8F97A2] font-medium ">
          Menu
        </span>
        <span className="text-[0.7rem] sm:text-[0.875rem] text-[#8F97A2] font-medium ml-3">
          &#x2022;
        </span>
        <span className="text-[0.875rem] text-[#191F38] font-medium ml-3 ">
          Inbox
        </span>
        <Image
          src="/assets/messageQuestion.svg"
          alt="icon"
          width={20}
          height={20}
          className="ml-auto mr-[0.4rem] shrink-0"
        />
      </div>
      <div className="h-[3.25rem] rounded-lg bg-[#FDFDFD] border border-[#EBEBEB] m-2.5 md:m-3 lg:mt-4 lg:mx-4 lg:mb-2.5 pr-4 flex flex-row items-center justify-between ">
        <div className="flex flex-row  border-r border-[#EBEBEB] items-center space-x-2  pl-4 h-[3.25rem] w-[13.75rem]">
          <div className=" rounded-full bg-[#4157FE] w-[1.5rem] h-[1.5rem] md:h-[1.875rem] md:w-[1.875rem] flex justify-center items-center">
            <span className="text-[0.8rem] leading-3  font-normal text-[#FFFFFF]">
              A
            </span>
          </div>
          <div className="flex flex-col pb-1 space-y-1 ">
            <span className="text-[#191F38]  text-xs md:text-sm font-medium leading-[0.635rem] tracking-tighter">
              Alif Hassan
            </span>
            <span className="text-[#00000080] text-opacity-50 font-medium text-[0.7rem] md:text-[0.75rem] leading-[0.625rem] tracking-tighter">
              alif@deepchainlabs.com
            </span>
          </div>
        </div>
        {/* For Large Screen */}
        {!isMobile && (
          <div className="flex  flex-row  space-x-1 pl-2 pr-2">
            {tabsData.map((tab) => (
              <button
                onClick={() => handleTabClick(tab.name)}
                key={tab.name}
                className={`text-center text-sm  px-2 py-[0.95rem] flex flex-row justify-center items-center gap-1 tracking-tighter font-semibold ${
                  activeTab === tab.name
                    ? "text-[#4157FE] border-b-2 border-[#4157FE]"
                    : "text-[#697588]"
                }`}
              >
                <Image
                  src={activeTab === tab.name ? tab.activeIcon : tab.icon}
                  alt="icon"
                  width={16}
                  height={16}
                />
                {tab.name}
              </button>
            ))}
          </div>
        )}
        {/* For Large Screen */}
        {!isMobile && (
          <div className="">
            <button
              onClick={openMessageForm}
              className="bg-[#4157FE] text-[#FFFFFF] text-[0.6rem] md:text-[0.875rem] font-medium flex flex-row justify-center items-center gap-1 py-1.5 px-2 rounded-lg hover:bg-blue-800 "
            >
              <Image
                src="/assets/plus.svg"
                alt="icon"
                width={12}
                height={12}
                className=""
              />
              <span>New Message</span>
            </button>
          </div>
        )}
        {/* For Mobile Screen */}
        {isMobile && (
          <div className="">
            <button
              onClick={openMessageForm}
              className="bg-[#4157FE] text-[#FFFFFF] text-[0.7rem]  font-medium justify-center items-center gap-1 py-1.5 px-3 rounded-lg hover:bg-blue-800 "
            >
              New
            </button>
          </div>
        )}
      </div>

      <div className="flex flex-row">
        {/* For Mobile Screen */}
        {isMobile && (
          <div className="flex flex-col ml-2.5 md:ml-3 border border-[#EBEBEB] h-fit rounded-lg w-[3.25rem]">
            {tabsData.map((tab) => (
              <button
                onClick={() => handleTabClick(tab.name)}
                key={tab.name}
                className={`text-center text-[0.6rem] md:text-[0.8rem]  px-1 md:px-2 py-3 flex flex-col justify-center items-center gap-1 tracking-tighter font-semibold ${
                  activeTab === tab.name ? "text-[#4157FE] " : "text-[#697588]"
                }`}
              >
                <Image
                  src={activeTab === tab.name ? tab.activeIcon : tab.icon}
                  alt="icon"
                  width={16}
                  height={16}
                />
                {tab.name}
              </button>
            ))}
          </div>
        )}
        <div
          className={`transition-all duration-500 ease-out w-full h-screen overflow-y-auto  ${
            activeTab ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          {renderTabContent()}
        </div>
      </div>

      {isMessageFormOpen && <MessageForm onClose={closeMessageForm} />}
    </div>
  );
}

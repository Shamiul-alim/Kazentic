import React from "react";
import emailInboxData from "@/data/emailInboxData.json";
import { ChevronDown } from "lucide-react";

type emailInboxData = {
  id: number;
  icon: string;
  sender: string;
  subject: string;
  timestamp: string;
  isStarred: boolean;
};
export default function Draft() {
  const tabs = ["All", "Read", "Unread", "Has Attachments"];
  return (
    <div className="w-full h-full bg-[#FFFFFF]">
      {/* Inbox Title Section */}
      <div className="h-[3.25rem] rounded-lg bg-[#FDFDFD] border border-[#EBEBEB] m-[1.25rem] mt-0 flex flex-row items-center justify-between pl-3 pr-3">
        <div className="flex felx-row items-center space-x-6">
          <button className="flex justify-center items-center gap-1">
            <img src="/assets/vector.svg" className="w-4 h-4" />
            <ChevronDown className="w-5 h-5 text-[#697588] opacity-80" />
          </button>
          <div className="text-[1.25rem] font-semibold text-[#191F38] leading-[2.125rem] ">
            Inbox
          </div>
          <div className="text-[#697588] cursor-pointer">
            &#x2022;&#x2022;&#x2022;
          </div>
        </div>
        <div className="flex justify-center items-center gap-8">
          <div className="space-x-3 text-[0.875rem] font-semibold tracking-tighter text-[#697588]">
            {tabs.map((tab) => (
              <button key={tab} className="p-2 rounded-lg">
                {tab}
              </button>
            ))}
          </div>
          <div className="text-[#697588] space-x-4 font-medium text-[0.75rem] pr-3">
            <span className="font-semibold">&#10229;</span>
            <span>1-5 of 10</span>
            <span className="font-semibold">&#10230;</span>
          </div>
        </div>
      </div>
    </div>
  );
}

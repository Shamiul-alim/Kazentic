import React from "react";
import emailInboxData from "@/data/emailData.json";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

type emailInboxData = {
  id: number;
  icon: string;
  sender: string;
  subject: string;
  timestamp: string;
  isStarred: boolean;
};
type Props = {
  emails: emailInboxData[];
};

export default function Draft({ emails }: Props) {
  const tabs = ["All", "Read", "Unread", "Has Attachments"];
  return (
    <div className="w-full h-full bg-[#FFFFFF]">
      {/* Inbox Title Section */}
      <div className="h-[3.25rem] rounded-lg bg-[#FDFDFD] border border-[#EBEBEB] m-[1.25rem] mt-0 flex flex-row items-center justify-between pl-3 pr-4">
        <div className="flex felx-row items-center space-x-6">
          <button className="flex justify-center items-center gap-1">
            <Image src="/assets/vector.svg" alt="icon" width={16} height={16} />
            <ChevronDown className="w-5 h-5 text-[#697588] opacity-80" />
          </button>
          <div className="text-[1.25rem] font-semibold text-[#191F38] leading-[2.125rem] ">
            Draft
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
      {/* Emails List */}
      <div className="space-y-3">
        {emails.map((email) => (
          <div
            key={email.id}
            className="h-[3.25rem] rounded-lg bg-[#FDFDFD] border border-[#EBEBEB] ml-[1.25rem] mr-[1.25rem] flex flex-row items-center justify-between pl-3 pr-3 cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <Image src={email.icon} alt="icon" width={20} height={20} />
              <button className="w-5 h-5 rounded-full flex items-center justify-center">
                <Image
                  src={`${
                    email.isStarred
                      ? "/assets/starActive.svg"
                      : "/assets/star.svg"
                  }`}
                  alt="icon"
                  width={20}
                  height={20}
                />
              </button>
              <span className="text-[0.875rem] font-medium leading-[1.5rem] tracking-normal text-[#191F38]">
                {email.sender}
              </span>
            </div>

            <div className="flex flex-col items-center space-y-1">
              <span className="text-[0.875rem] font-medium leading-[1.5rem] text-[#191F38]">
                {email.subject}🎉
              </span>
            </div>

            <div>
              <span className="text-[0.875rem] tracking-tighter text-[#697588] font-medium ">
                {email.timestamp}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

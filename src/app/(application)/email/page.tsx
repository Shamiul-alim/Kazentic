import EmailSection from "@/components/Email/EmailSection";
import Image from "next/image";

export default function Page() {
  return (
    <div className="flex">
      <div className="w-full h-auto rounded-tl-lg">
        <div className="flex  items-center bg-[#FFFFFF]  border-b border-[#EBEBEB] p-2 sm:pl-3 md:pl-5 h-[2.188rem] ">
          <span className="text-[0.7rem] sm:texxt-[0.875rem] text-[#8F97A2] font-medium">
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
        <EmailSection isSidebarOpen={false} />
      </div>
    </div>
  );
}

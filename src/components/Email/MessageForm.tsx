import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

export default function MessageForm({ onClose }: { onClose: () => void }) {
  const tabs = [
    "b",
    "Italic",
    "Underline",
    "icon1",
    "icon2",
    "icon3",
    "icon4",
    "icon5",
    "icon6",
    "icon7",
  ];
  return (
    <div className="fixed top-0 right-0 w-full sm:w-[34.375rem] h-full bg-[#FFFFFF] z-50 shadow-lg rounded-l-lg flex flex-col justify-between">
      <div>
        <div className="flex justify-between items-center h-[3.188rem] p-4 border-b border-[rgb(229,233,235)]">
          <h2 className="text-[1.25rem] font-semibold tracking-tight text-[#191F38]">
            New Message
          </h2>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-6 h-6 rounded-full bg-blue-100  text-blue-600 text-[1.5rem] font-normal flex justify-center text-center items-center pb-1"
          >
            &times;
          </button>
        </div>
        <div className="p-4">
          <form>
            <div className="mb-4">
              <Label>From</Label>
              <Input type="email" value="Johndoe@gmail.com" readOnly />
            </div>
            <div className="mb-4">
              <Label className="flex justify-between mr-2">
                <div>To</div>
                <div className="space-x-1">
                  <span>CC </span>
                  <span>BCC</span>
                </div>
              </Label>
              <Input type="email" />
            </div>
            <div className="mb-4">
              <Label>Subject</Label>
              <Input type="text" />
            </div>
            <div className="flex flex-row items-center h-[2.516rem] w-full rounded-lg mt-1  border-[0.063rem] border-input bg-[#FFFFFF] px-2 py-2 space-x-2 sm:space-x-4">
              <div className="flex flex-row gap-1 sm:gap-2 justify-center sm:justify-start">
                <Image
                  src="/assets/FloatingMessageLeftIcon.svg"
                  className="cursor-pointer sm:w-4 sm:h-4 "
                  alt="icon"
                  width={13}
                  height={12}
                />
                <Image
                  src="/assets/FloatingMessageRightIcon.svg"
                  className="cursor-pointer sm:w-4 sm:h-4 "
                  alt="icon"
                  width={13}
                  height={12}
                />
              </div>
              <div className="flex flex-row items-center justify-center sm:justify-start">
                <span className="font-normal cursor-pointer text-[0.875rem] text-[#191F38]">
                  Arial
                </span>
                <ChevronDown className="text-[#191F38] w-4 shrink-0 cursor-pointer" />
              </div>
              <div className="flex flex-row items-center">
                <Image
                  src="/assets/vectorM.svg"
                  className="cursor-pointer sm:w-4 sm:h-4 "
                  alt="icon"
                  width={13}
                  height={12}
                />
                <ChevronDown className="text-[#191F38] w-4 shrink-0 cursor-pointer" />
              </div>
              <div className="flex flex-row items-center gap-2 sm:gap-5">
                {tabs.map((tab) => (
                  <Image
                    key={tab}
                    src={`/assets/${tab}.svg`}
                    className="cursor-pointer sm:w-4 sm:h-4 "
                    alt="icon"
                    width={13}
                    height={12}
                  />
                ))}
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="p-5 mt-auto flex flex-col justify-start space-y-5">
        <div className="flex flex-col gap-2">
          <span className="text-[0.875rem] font-medium tracking-tight text-[#697588]">
            Regards,
          </span>
          <span className="text-[1rem] font-medium tracking-tight text-[#191F38] leading-[1.25rem]">
            John Doe
          </span>
        </div>
        <div className="h-[0.1rem] bg-[#EBEBEB]"></div>
        <div className="flex  flex-row justify-between">
          <div className="flex flex-row gap-3">
            <Image src="/assets/trash.svg" alt="icon" width={16} height={16} />
            <Image src="/assets/lock.svg" alt="icon" width={16} height={16} />
            <Image src="/assets/clock.svg" alt="icon" width={16} height={16} />
          </div>
          <div className="flex flex-row gap-3 justify-center items-center">
            <span className="text-[#697588] text-[0.875rem] font-medium tracking-tight">
              Saved at 4:56 PM
            </span>
            <button className="px-3 py-1 bg-[#4157FE] rounded-md text-[#FFFFFF] cursor-pointer text-[0.875rem]">
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

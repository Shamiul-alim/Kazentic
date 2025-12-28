"use client";
import React from "react";
import emailInboxData from "@/data/emailData.json";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { io, Socket } from "socket.io-client";

type Email = {
  uid: number;
  from: string;
  subject: string;
  date: string;
  textSnippet: string;
  isDraft: boolean;
  isStarred: boolean;
  icon: string;
};

export default function Sent() {
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);
  const [selectedEmails, setSelectedEmails] = React.useState<number[]>([]);
  const [isMoreMenuOpen, setIsMoreMenuOpen] = React.useState(false);
  const [isSortMenuOpen, setIsSortMenuOpen] = React.useState(false);
  const dropdownRef = React.useRef<HTMLDivElement>(null);
  const buttonRef = React.useRef<HTMLButtonElement>(null);
  const tabs = ["All", "Read", "Unread", "Has Attachments"];
  const limitChars = (text: string, limit: number) => {
    if (text.length <= limit) return text;
    return text.substring(0, limit) + " ...";
  };
  const [emails, setEmails] = React.useState<Email[]>([]);
  const socketRef = React.useRef<Socket | null>(null);

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    const fetchEmails = async () => {
      try {
        const response = await fetch("http://localhost:5000/emails/sent");
        const data = await response.json();
        if (data.success) {
          setEmails(data.emails);
        } else {
          console.error("Failed to fetch emails");
        }
      } catch (error) {
        console.error("Error fetching emails:", error);
      }
    };

    fetchEmails();

    socketRef.current = io("http://localhost:5000");

    socketRef.current.on("connect", () => {
      console.log("Connected to Email WebSocket");

      socketRef.current?.emit("join_folder", "sent");
    });

    socketRef.current.on("new_emails", (incoming: Email[]) => {
      console.log("Real-time update received in frontend:", incoming);

      setEmails((current) => {
        const existingUids = new Set(current.map((e) => e.uid));
        const trulyNew = incoming.filter((e) => !existingUids.has(e.uid));

        if (trulyNew.length === 0) return current;

        const newList = [...trulyNew, ...current];
        return newList.sort((a, b) => b.uid - a.uid);
      });
    });

    return () => {
      if (socketRef.current) {
        socketRef.current.disconnect();
      }
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const handleSelectAll = () => {
    setSelectedEmails(emails.map((e) => e.uid));
  };

  return (
    <div className="w-full  bg-[#FFFFFF] flex flex-col">
      {/* Inbox Title Section */}
      <div className="h-[3.25rem] rounded-lg bg-[#FDFDFD] border border-[#EBEBEB] mx-2.5 md:mx-3  lg:mx-4 flex flex-row items-center justify-between pl-4 lg:pl-6 pr-4 relative">
        <div className="flex felx-row items-center space-x-1 sm:space-x-2 md:space-x-4  lg:justify-normal w-full lg:w-auto">
          <button
            className="flex justify-center items-center gap-1"
            ref={buttonRef}
            onClick={() => {
              setIsDropdownOpen(!isDropdownOpen);
              if (selectedEmails.length === emails.length) {
                setSelectedEmails([]);
              }
            }}
          >
            <Image
              src={
                selectedEmails.length === emails.length
                  ? "/assets/checked.svg"
                  : "/assets/Vector.svg"
              }
              alt="icon"
              width={16}
              height={16}
              className="w-4 h-4"
            />
            <ChevronDown className="w-5 h-5 text-[#697588] opacity-80 flex shrink-0" />
          </button>
          <div
            className={`flex-row items-center space-x-4   ${
              selectedEmails.length > 0 ? "flex" : "hidden"
            }`}
          >
            <Image
              src="/assets/all-read2.svg"
              width={20}
              height={21}
              alt="icon"
              className="cursor-pointer"
            />
            <div className="h-5 border border-[#EBEBEB]"></div>
            <Image
              src="/assets/trash.svg"
              width={20}
              height={21}
              alt="icon"
              className="cursor-pointer"
            />
            <Image
              src="/assets/archive.svg"
              width={20}
              height={20}
              alt="icon"
              className="cursor-pointer"
            />
            <Image
              src="/assets/Vector2.svg"
              width={20}
              height={20}
              alt="icon"
              className="cursor-pointer"
            />
            <Image
              src="/assets/info-circle.svg"
              width={18}
              height={18}
              alt="icon"
              className="cursor-pointer"
            />
            <div className="h-5 border border-[#EBEBEB]"></div>

            <Image
              src="/assets/folder-open.svg"
              width={20}
              height={20}
              alt="icon"
              className="cursor-pointer"
            />
          </div>

          <div
            className={`flex flex-row  items-center space-x-3  lg:space-x-6 ${
              selectedEmails.length > 0 ? "hidden" : "flex"
            }`}
          >
            <div className="text-[1rem] sm:text-[1.25rem] font-semibold text-[#191F38] leading-[2.125rem] ">
              Inbox
            </div>
            <div
              className="text-[#697588] cursor-pointer"
              onClick={() => setIsMoreMenuOpen((prev) => !prev)}
            >
              &#x2022;&#x2022;&#x2022;
            </div>
          </div>
        </div>

        <div className="hidden lg:block justify-center items-center gap-8 ml-auto pr-7">
          <div className="space-x-3 text-[0.875rem] font-semibold tracking-tighter text-[#697588]">
            {tabs.map((tab) => (
              <button key={tab} className="p-2 rounded-lg ">
                {tab}
              </button>
            ))}
          </div>
        </div>
        <div
          className="text-[#697588] space-x-4 font-medium text-[0.75rem] hidden lg:block"
          onClick={() => setIsSortMenuOpen((prev) => !prev)}
        >
          <span className="font-semibold">&#10229;</span>
          <span className="cursor-pointer px-1.5 py-0.5 rounded-sm hover:border hover:border-[#EBEBEB]">
            1-5 of 10
          </span>
          <span className="font-semibold">&#10230;</span>
        </div>
        <div
          ref={dropdownRef}
          className={`
            ${isDropdownOpen ? "flex" : "hidden"}
            w-[10.5rem] h-[12.5rem] rounded-md border border-[#EBEBEB] 
            bg-[#FFFFFF]  flex-col absolute top-[2.6rem] left-0  z-50  shadow-md shadow-[#0000000D]
          `}
        >
          <div
            className="h-[2.5rem] w-full flex flex-row pl-[1.125rem] justify-start items-center gap-3 cursor-pointer "
            onClick={handleSelectAll}
          >
            <Image
              src="/assets/tick-circle.svg"
              width={20}
              height={20}
              alt="icon"
            />
            <span className="font-medium text-sm tracking-tight text-[#697588]">
              Select All
            </span>
          </div>
          <div className="h-[2.5rem] w-full flex flex-row pl-[1.25rem] justify-start items-center gap-3">
            <Image
              src="/assets/all-read.svg"
              width={18}
              height={18}
              alt="icon"
            />
            <span className="font-medium text-sm tracking-tight text-[#697588]">
              All Read
            </span>
          </div>
          <div className="h-[2.5rem] w-full flex flex-row pl-[1.2rem] justify-start items-center gap-3 cursor-pointer">
            <Image
              src="/assets/sms-notification2.svg"
              width={19}
              height={19}
              alt="icon"
            />
            <span className="font-medium text-sm tracking-tight text-[#697588]">
              All Unread
            </span>
          </div>
          <div className="h-[2.5rem] w-full flex flex-row pl-[1.125rem] justify-start items-center gap-3 cursor-pointer">
            <Image
              src="/assets/solar_star-bold.svg"
              width={20}
              height={20}
              alt="icon"
            />
            <span className="font-medium text-sm tracking-tight text-[#697588]">
              All Starred
            </span>
          </div>
          <div className="h-[2.5rem] w-full flex flex-row pl-[1.125rem] justify-start items-center gap-3 cursor-pointer">
            <Image
              src="/assets/solar_star-line-duotone.svg"
              width={20}
              height={20}
              alt="icon"
            />
            <span className="font-medium text-sm tracking-tight text-[#697588]">
              All Un Starred
            </span>
          </div>
        </div>
        <div
          className={`w-[11.3rem] h-20 shadow-md bg-[#FFFFFF] rounded-md shadow-[#0000000D] flex-col absolute top-[2.6rem] left-[4rem] sm:left-[8rem] md:left-[10rem] z-50 cursor-pointer border border-[#EBEBEB]
          ${isMoreMenuOpen ? "flex" : "hidden"}`}
        >
          <div className="h-10 w-full flex flex-row pl-[1.25rem] justify-start items-center gap-3">
            <Image
              src="/assets/all-read.svg"
              width={18}
              height={18}
              alt="icon"
            />
            <span className="font-medium text-sm tracking-tight text-[#697588]">
              Mark all as read
            </span>
          </div>
          <div className="h-10 w-full flex flex-row pl-[1.25rem] justify-start items-center gap-3">
            <Image
              src="/assets/trash-red.svg"
              width={18}
              height={18}
              alt="icon"
            />
            <span className="font-medium text-sm tracking-tight text-[#DC2626]">
              Move all to trash
            </span>
          </div>
        </div>
        <div
          className={`
            w-[8.313rem] h-40 bg-[#FFFFFF] shadow-md shadow-[#0000000D] rounded-md  border border-[#EBEBEB]
            absolute top-[2.6rem] right-3 z-50
            ${isSortMenuOpen ? "flex flex-col" : "hidden"}
          `}
        >
          <span className="bg-[#F2F9FE] font-medium h-10 text-sm tracking-tight flex justify-center items-center text-[#4157FE]">
            Newest First
          </span>

          <span className="font-medium h-10  flex justify-center items-center text-sm tracking-tight text-[#697588]">
            Oldest First
          </span>

          <span className="font-medium h-10 flex justify-center items-center text-sm tracking-tight text-[#697588]">
            Largest First
          </span>

          <span className="font-medium h-10 flex justify-center items-center text-sm tracking-tight text-[#697588]">
            Smallest First
          </span>
        </div>
      </div>

      {/* Emails List */}
      <div className=" my-2.5 sm:my-3 lg:my-2.5  mx-2.5 md:mx-3  lg:mx-4">
        {emails.map((email) => (
          <Link href={`/email/${email.uid}`} key={email.uid}>
            <div className="h-[3.25rem] rounded-lg bg-[#FDFDFD] border border-[#EBEBEB] flex flex-row items-center justify-between pl-4 lg:pl-6 pr-4 cursor-pointer mb-2.5 sm:mb-3 lg:mb-2.5">
              <div className="flex items-center gap-4">
                <div className="gap-2  md:gap-4 lg:gap-6 flex flex-row items-center">
                  <div className="flex-shrink-0">
                    <Image
                      src={
                        selectedEmails.includes(email.uid)
                          ? "/assets/checked.svg"
                          : email.icon || "/assets/Kemail.svg"
                      }
                      alt="icon"
                      width={20}
                      height={20}
                      className={`${
                        selectedEmails.includes(email.uid) ? "mr-2" : ""
                      } `}
                    />
                  </div>
                  <div className=" flex flex-row items-center flex-shrink-0 ">
                    <Image
                      src={`${
                        email.isStarred
                          ? "/assets/starActive.svg"
                          : "/assets/star.svg"
                      }`}
                      alt="icon"
                      width={20}
                      height={20}
                      className=""
                    />
                  </div>
                </div>
                <div className="flex flex-col md:flex-row  items-center text-center justify-center mr-2">
                  <span className="text-[0.8rem] sm:text-[0.875rem] font-medium tracking-normal leading-4 flex items-center text-center text-[#191F38]">
                    {email.from}
                  </span>
                  <span className="text-[0.8rem] sm:text-[0.875rem] font-medium text-[#191F38] ml-0 md:ml-10 lg:ml-28 xl:ml-38">
                    {limitChars(email.subject, 20)}
                  </span>
                </div>
              </div>

              <div className="hidden sm:block">
                <span className="text-[0.875rem] tracking-tighter text-[#697588] font-medium ">
                  {new Date(email.date).toLocaleString()}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

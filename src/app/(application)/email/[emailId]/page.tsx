"use client";

import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import emailInboxData from "@/data/emailData.json";
import { EmailAction, emailActions } from "@/lib/3DotMenu";
import React from "react";

export default function EmailDetail() {
  const router = useRouter();
  const { emailId } = useParams();
  const [ismenuVisible, setismenuVisible] = React.useState(false);
  const [isinfoSection, setinfoSection] = React.useState(false);
  const email = emailInboxData.find(
    (email) => email.id === parseInt(emailId as string)
  );

  if (!email) return <div>Email not found!</div>;
  return (
    <div className="w-full h-full bg-[#FFFFFF] flex flex-col space-y-4 space-x-5">
      <div className="flex  items-center bg-[#FFFFFF]  border-b border-[#EBEBEB] p-2 sm:pl-3 md:pl-5 h-[2.188rem]  mb-1">
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
      <div className=" rounded-lg bg-[#FDFDFD] border border-[#EBEBEB]  flex flex-row items-center pl-3 pr-3">
        <div className="flex flex-row h-[3.25rem]  py-[0.688rem]  border-r border-[#EBEBEB] space-x-2  ">
          <div className=" rounded-full bg-[#4157FE] w-[1.5rem] h-[1.5rem] md:h-[1.875rem] md:w-[1.875rem] flex justify-center items-center">
            <span className="text-[0.8rem  font-normal text-[#FFFFFF]">A</span>
          </div>
          <div className="flex flex-col justify-center space-y-1.5 pr-2">
            <span className="text-[#191F38]  text-xs md:text-sm font-medium leading-[0.635rem] tracking-tighter">
              Alif Hassan
            </span>
            <span className="text-[#00000080] text-opacity-50 font-medium text-[0.7rem] md:text-[0.75rem] leading-[0.625rem] tracking-tighter">
              alif@deepchainlabs.com
            </span>
          </div>
        </div>
        <div className="flex flex-row items-center ml-3 p-1.5 space-x-4">
          <Image
            src="/assets/arrow-left.svg"
            width={20}
            height={21}
            alt="icon"
            className="cursor-pointer"
            onClick={() => router.push("/email")}
          />
          <div className="h-5 border border-[#EBEBEB]"></div>
          <Image
            src="/assets/sms-notification.svg"
            width={20}
            height={20}
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
          <div className="h-5 border border-[#EBEBEB]"></div>
          <Image
            src="/assets/info-circle.svg"
            width={18}
            height={18}
            alt="icon"
            className="cursor-pointer"
          />
          <Image
            src="/assets/trash.svg"
            width={18}
            height={18}
            alt="icon"
            className="cursor-pointer"
          />
        </div>
      </div>

      <div className="rounded-lg bg-[#FDFDFD] border border-[#EBEBEB] ">
        <div className="flex items-center h-[4rem] border-b border-[#EBEBEB] pl-5 pr-3">
          <span className="font-semibold tracking-tight text-[1.25rem] text-[#191F38]">
            {email.subject}
          </span>
        </div>

        <div className="flex flex-col pl-5 pr-6 pt-[1rem] pb-[1rem] border-b border-[#EBEBEB] ">
          {/* Email Content */}
          <div className="mb-6 flex flex-row justify-between ">
            <div className=" flex flex-row space-x-3">
              <Image
                src={email.picture as any}
                width={44}
                height={44}
                alt="picture"
              />
              <div className="flex flex-col space-y-2.5">
                <span className="text-[1.13rem] text-[#191F38] font-medium tracking-tight leading-5">
                  {email.sender}
                </span>
                <div className="flex  flex-row space-x-1">
                  <span className="font-medium tracking-tight leading-5 text-[#6F6F6F] text-sm">
                    From:{" "}
                    <span className="text-[#4157FE]">{email.senderEmail}</span>
                  </span>
                  <span className="text-[0.8rem]  text-[#8F97A2] font-normal flex justify-center items-center">
                    &#x2022;
                  </span>
                  <span className="font-medium tracking-tight leading-5 text-[#6F6F6F] text-sm">
                    To: <span className="text-[#4157FE]">alif@hotmail.com</span>
                  </span>
                  <Image
                    onClick={() => setinfoSection((prev) => !prev)}
                    src="/assets/info-circle2.svg"
                    width={16}
                    height={16}
                    alt="icon"
                    className="cursor-pointer"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col space-y-1">
              <span className="font-medium text-xs tracking-tight text-[#191F38]">
                9:45 AM (8 hours ago)
              </span>
              <div className="flex flex-row ml-auto gap-2">
                <div className="w-[4rem] h-[2rem] space-x-1.5 border rounded-md border-[#EBEBEB] flex flex-row justify-center items-center">
                  <Image
                    src="/assets/undo.svg"
                    width={16}
                    height={16}
                    alt="icon"
                  />
                  <div className="h-5 border border-[#EBEBEB]"></div>
                  <Image
                    src="/assets/redo.svg"
                    width={16}
                    height={16}
                    alt="icon"
                  />
                </div>
                <div
                  className="w-8 h-8 rounded-md border border-[#EBEBEB] flex justify-center items-center cursor-pointer"
                  onClick={() => setismenuVisible((prev) => !prev)}
                >
                  <Image
                    src="/assets/3dot.svg"
                    width={20}
                    height={20}
                    alt="icon"
                  />
                </div>
              </div>
            </div>
          </div>
          <div
            className={`h-auto w-[15.25rem] rounded-md bg-[#FFFFFF] shadow-md shadow-[#0000000D] absolute right-5 top-[18.6rem] border border-[#EBEBEB] ${
              ismenuVisible ? "flex flex-col" : "hidden"
            } `}
          >
            {emailActions.map((action: EmailAction, index: number) => (
              <div
                key={index}
                className="h-10 w-full flex flex-row pl-[1.25rem] pr-[1.25rem] justify-start items-center gap-3 cursor-pointer "
                onClick={() => console.log(action.action)}
              >
                <Image
                  src={`/assets/${action.icon}.svg`}
                  width={20}
                  height={20}
                  alt={action.label}
                />
                <span className="font-medium text-sm tracking-tight text-[#697588]">
                  {action.label}
                </span>
              </div>
            ))}
          </div>
          <div
            className={`w-[21.6rem] h-[14rem] rounded-md bg-[#FFFFFF] shadow-md shadow-[#0000000D] absolute right-[12.5rem] top-[18.6rem] border border-[#EBEBEB] ${
              isinfoSection ? "flex flex-row" : "hidden"
            }`}
          >
            <div className="w-[6rem] flex flex-col pl-5 pt-5 font-medium text-sm text-[#697588] tracking-tight gap-5  items-end">
              <span>From : </span>
              <span>Reply to : </span>
              <span>Date : </span>
              <span>Subject : </span>
              <span>Security : </span>
            </div>
            <div className=" flex flex-col justify-start pt-5 pl-4 font-medium text-sm text-[#191F38] tracking-tight gap-5 ">
              {" "}
              <span>{email.senderEmail}</span>
              <span>John Doe [john@hotmail.com]</span>
              <span>{email.timestamp}</span>
              <span>{email.subject}</span>
              <span>Standad Encryption [TLS]</span>
            </div>
          </div>

          {/* Email Description */}
          <div className="text-sm text-[#6F6F6F] font-medium tracking-tight mb-4">
            <p>{email.description}</p>
          </div>

          <div className="flex flex-col">
            <h1 className="font-medium text-sm tracking-tight text-[#191F38]">
              Best Regrads.
            </h1>
            <span className="font-medium text-sm text-[#6F6F6F]">
              {email.sender}
            </span>
          </div>
        </div>

        {/* Attachments */}
        {email.attachments && email.attachments.length > 0 && (
          <div className=" pl-5 pb-5 pt-4">
            <span className="font-medium text-base tracking-tight text-[#191F38]">
              Attachments:
            </span>
            <div className="mt-1 space-x-1 flex flex-row gap-4">
              {email.attachments.map((attachment, index) => (
                <div
                  key={index}
                  className="flex items-center border border-[#EBEBEB] rounded-md w-[15.625rem] h-8 p-1 justify-between"
                >
                  <div className="flex flex-row gap-1">
                    <Image
                      src="/assets/document.svg"
                      alt="attachment icon"
                      width={20}
                      height={20}
                    />
                    <span>{attachment.fileName}</span>
                  </div>
                  <span className="text-gray-500 text-xs">
                    {attachment.fileSize}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

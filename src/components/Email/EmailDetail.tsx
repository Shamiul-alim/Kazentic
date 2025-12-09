"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import emailInboxData from "@/data/emailData.json";
import Image from "next/image";

export default function EmailDetail() {
  const { emailId } = useParams();
  const [email, setEmail] = useState<any>(null);
  useEffect(() => {
    if (emailId) {
      const emailDetails = emailInboxData.find(
        (email) => email.id === parseInt(emailId as string)
      );
      setEmail(emailDetails);
    }
  }, [emailId]);

  if (!email) return <div>Loading...</div>;
  return (
    <div className="w-full h-full bg-[#FFFFFF] flex flex-col">
      <div className=" rounded-lg bg-[#FDFDFD] border border-[#EBEBEB] m-[0.6rem] sm:m-[0.9rem] md:m-[1.25rem] flex flex-row items-center justify-between pl-3 pr-3">
        <div className="flex flex-row h-[2.8rem] md:h-[3.25rem]  py-[0.688rem]  border-r border-[#EBEBEB] space-x-2  ">
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
      </div>
      {/* Email Header */}
      <div className="flex items-center mb-6">
        <span className="font-bold text-[1.25rem] text-[#191F38]">
          {email.subject}
        </span>
      </div>

      {/* Email Content */}
      <div className="text-[0.875rem] text-[#191F38] mb-6">
        <p>
          <strong>From:</strong> {email.sender}
        </p>
        <p>
          <strong>Timestamp:</strong> {email.timestamp}
        </p>
        <p>
          <strong>To:</strong> {email.senderEmail}
        </p>
      </div>

      {/* Email Description */}
      <div className="text-[1rem] text-[#191F38]">
        <p>{email.description}</p>
      </div>

      {/* Attachments */}
      <div className="mt-6">
        <strong>Attachments:</strong>
        <div className="flex space-x-4 mt-2">
          {email.attachments.map(
            (
              attachment: { fileName: string; fileSize: string },
              index: number
            ) => (
              <div key={index} className="flex items-center">
                <Image
                  src="/assets/pdf-icon.svg"
                  alt="PDF Icon"
                  width={24}
                  height={24}
                />
                <span className="ml-2">{attachment.fileName}</span>
                <span className="ml-2 text-gray-500 text-xs">
                  {attachment.fileSize}
                </span>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}

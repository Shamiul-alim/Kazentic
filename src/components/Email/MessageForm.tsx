"use client";
import React, { useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";

export default function MessageForm({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed top-0 right-0 w-[34.375rem] h-full bg-[#FFFFFF] z-50 shadow-lg rounded-l-lg">
      <div className="flex justify-between items-center h-[3.188rem] p-4 border-b border-[#E5E9EB]">
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
          <div className="flex h-[2.516rem] w-full rounded-lg mt-1  border-[0.063rem] border-input bg-[#FFFFFF] px-2 py-2 pb-3"></div>
          <div className="flex justify-between items-center">
            <button
              type="button"
              className="text-[#4157FE] font-medium"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-[#4157FE] text-white p-2 rounded-md"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

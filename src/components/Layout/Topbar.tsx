"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { jwtDecode } from "jwt-decode";
import { useRouter } from "next/navigation";

export default function Topbar() {
  const [userName, setUserName] = useState<string>("");
  const [userEmail, setUserEmail] = useState<string>("");
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  useEffect(() => {
    const token = localStorage.getItem("access_token");
    if (token) {
      try {
        const decoded: any = jwtDecode(token);
        const userId = decoded.user_id;
        const fetchUserDetails = async () => {
          try {
            const response = await fetch(
              `http://localhost:5000/users/${userId}`
            );
            if (response.ok) {
              const userData = await response.json();
              setUserName(userData.lastName || "User");
              setUserEmail(userData.email || "user@example.com");
            } else {
              console.error("Failed to fetch user details");
            }
          } catch (error) {
            console.error("Error fetching user details:", error);
          }
        };

        fetchUserDetails();
      } catch (err) {
        console.error("Invalid token", err);
      }
    }
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  const handleLogout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    localStorage.removeItem("role");
    localStorage.removeItem("isSidebarOpen");
    router.push("/signin");
  };
  return (
    <div className="relative flex w-full justify-between items-center h-[2.375rem] bg-gradient-to-r from-[#111953]  to-[#4157FE] text-[#FFFFFF] pr-3">
      <div className="flex items-center z-10">
        <Image
          src="/assets/K.svg"
          className="flex justify-start"
          alt="icon"
          width={50}
          height={50}
        />
      </div>

      <div className="absolute left-44 sm:left-1/2 transform -translate-x-1/2 w-[28%] max-w-xl bg-[#E7E6E41A] border border-[#FFFFFF33] rounded-md  ">
        <div className="flex justify-center items-center h-7 bg-transparent  pl-2 font-medium backdrop-blur-md rounded-md gap-1">
          <Image
            src="/assets/topbarSearch.svg"
            alt="Search Icon"
            width={20}
            height={20}
          />
          <input
            type="text"
            placeholder="Search ..."
            className="w-full bg-transparent text-[#FFFFFF] placeholder-[#FFFFFF] focus:outline-none ml-2"
          />
          <div className="ml-auto h-6 pr-2 border-l-2 border-[#FFFFFF33] pl-2 flex justify-center items-center">
            <Image
              src="/assets/topbarDeco.svg"
              alt="icon"
              width={24}
              height={24}
            />
          </div>
        </div>
      </div>

      <div className=" absolute right-0 flex items-center space-x-2.5 pr-2 z-10">
        <button className="text-white">
          <Image
            src="/assets/notification.svg"
            alt="Notification"
            width={20}
            height={20}
          />
        </button>

        <button className="text-white">
          <Image src="/assets/menu.svg" alt="Menu" height={16} width={16} />
        </button>
        <div className="w-[1px] h-7 bg-gray-300 bg-opacity-30"></div>

        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-full">
            <Image
              src="/assets/profile.svg"
              alt="Profile"
              width={32}
              height={32}
              className="rounded-full"
            />
          </div>
          <div className="hidden lg:flex lg:flex-col leading-3 gap-0.5 text-[#FFFFFF]">
            <div className="font-bold text-[0.813rem]">
              {userName || "User"}
            </div>
            <div className="text-[0.75rem] text-opacity-70">
              {userEmail || "user@example.com"}
            </div>
          </div>
          <Image
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            src="/assets/moreB.svg"
            alt="icon"
            width={20}
            height={20}
            className="cursor-pointer"
          />
        </div>
        {isDropdownOpen && (
          <div className="absolute top-10 right-1 w-48 bg-white rounded-lg shadow-xl border border-gray-200 text-[#191F38] z-50">
            <div className="px-4 py-2 border-b border-gray-100">
              <p className="text-sm font-semibold text-gray-900 truncate">
                {userName}
              </p>
              <p className="text-xs text-gray-500 truncate">{userEmail}</p>
            </div>

            <button
              onClick={handleLogout}
              className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 hover:rounded-b-lg flex items-center gap-2 transition-colors"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                />
              </svg>
              Log Out
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

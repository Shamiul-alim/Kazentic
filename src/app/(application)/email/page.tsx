"use client";
import { useState, useEffect } from "react";
import SideMenu2 from "@/components/Sidemenu/SideMenu";
import DashboardSection from "@/components/Dashboard/DashboardSection";
import EmailSection from "@/components/Email/EmailSection";
import Image from "next/image";
import sectionsData from "@/data/sectionsData.json";

export default function Page() {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const renderActiveSection = () => {
    switch (activeSection) {
      case "Dashboard":
        return <DashboardSection />;
      case "Email":
        return <EmailSection />;
    }
  };
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1100) {
        setIsSidebarOpen(false);
      } else {
        setIsSidebarOpen(true);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className="flex">
      {isSidebarOpen && (
        <SideMenu2
          setActiveSection={setActiveSection}
          activeSection={activeSection}
          setIsSidebarOpen={setIsSidebarOpen}
        />
      )}
      {/*Mobail section*/}
      {!isSidebarOpen && (
        <div className="w-9 md:w-12 min-w-9 h-screen flex flex-col bg-[#FFFFFF] border-r border-[#EBEBEB] flex-shrink-0">
          <div className="h-[2.188rem] flex items-center justify-center border-b border-[#EBEBEB]">
            <Image
              alt="icon"
              src="/assets/sidemenu.svg"
              width={16}
              height={16}
              className="cursor-pointer"
              onClick={() => setIsSidebarOpen(true)}
            />
          </div>
          <div className="flex flex-col space-y-[21.5px] pt-4">
            {sectionsData.map((section) => (
              <button key={section.name} className="flex justify-center">
                <Image
                  src={section.icon}
                  alt={section.name}
                  width={20}
                  height={20}
                  className="opacity-80 hover:opacity-100 transition cursor-pointer"
                />
              </button>
            ))}
          </div>
        </div>
      )}
      <div className="w-full h-auto">{renderActiveSection()}</div>
    </div>
  );
}

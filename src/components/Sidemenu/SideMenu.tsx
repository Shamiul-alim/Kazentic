"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";
import sectionsData from "@/data/sectionsData.json";
import Image from "next/image";
import { useRouter } from "next/navigation";

type SectionItem = {
  name: string;
  icon: string;
  path?: string;
  hasDropdown?: boolean;
  children?: SectionItem[];
};
type Props = {
  setActiveSection: (section: string | null) => void;
  activeSection: string | null;
  isSidebarOpen: boolean;
  setIsSidebarOpen: (open: boolean) => void;
};

export default function SideMenu({
  setActiveSection,
  activeSection,
  isSidebarOpen,
  setIsSidebarOpen,
}: Props) {
  const [isManageOpen, setIsManageOpen] = React.useState(false);
  const router = useRouter();

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1100) setIsSidebarOpen(false);
      else setIsSidebarOpen(true);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [setIsSidebarOpen]);

  React.useEffect(() => {
    if (!activeSection) {
      setActiveSection("Email");
    }
  }, [activeSection, setActiveSection]);

  const toggleDropdown = () => setIsManageOpen(!isManageOpen);

  const handleSectionClick = (section: SectionItem) => {
    setActiveSection(section.name);
    if (section.path) {
      router.push(section.path);
    }
  };

  const renderSection = (section: SectionItem) => {
    const isActive = activeSection === section.name;
    const sectionClass = `flex flex-row w-full text-left text-[0.875rem] font-medium text-[#191F38] rounded-md  py-2 transition duration-200 space-x-2 pl-2  ${
      isActive
        ? "bg-[#D6E9FF] text-[#4157FE] hover:bg-[#D6E9FF] "
        : "hover:bg-gray-100"
    } `;

    return (
      <div key={section.name}>
        <button
          onClick={() => handleSectionClick(section)}
          className={sectionClass}
        >
          <Image src={section.icon} alt="icon" width={18} height={18} />
          <span>{section.name}</span>
          <div className="flex w-auto pr-5">
            {section.hasDropdown && (
              <ChevronDown
                className={`transition-transform  duration-300  ml-14  ${
                  isManageOpen ? "rotate-180" : ""
                }`}
                onClick={toggleDropdown}
              />
            )}
          </div>
        </button>

        {section.hasDropdown && isActive && section.children && (
          <div className=" bg-[#D6E9FF] text-[#191F38] p-1 rounded-b-md ">
            {section.children.map((child) => renderSection(child))}
          </div>
        )}
      </div>
    );
  };

  //mobail section
  if (!isSidebarOpen) {
    return (
      <div className="w-9 md:w-12 min-w-9 h-full flex flex-grow flex-col bg-[#FFFFFF] border-r border-[#EBEBEB] flex-shrink-0 rounded-tl-md">
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
    );
  }

  return (
    <div className="w-[12.5rem] h-full bg-[#FFFFFF] text-[#191F38] border-r border-[#EBEBEB] flex flex-grow flex-col rounded-tl-md md:relative absolute  z-50 ">
      {/* Carbon Stream Section */}
      <div className="flex items-center mb-2 border-b border-[#EBEBEB] p-3 h-[2.188rem] rounded-tl-md">
        <div className="flex items-center gap-2">
          <button className="w-[1.5rem] h-[1.5rem] bg-gradient-to-b from-[#FF9F00] to-[#FDBF00] rounded-lg flex justify-center text-center ">
            <span className="text-[#FFFFFF] text-[1rem] font-medium">C</span>
          </button>
          <span className="font-semibold text-[0.875rem]">Carbon Stream</span>
        </div>
        <Image
          alt="icon"
          src="/assets/sidemenu.svg"
          className="flex cursor-pointer ml-auto"
          width={16}
          height={16}
          onClick={() => setIsSidebarOpen(false)}
        />
      </div>

      {/* Sidebar Menu */}
      <div className="space-y-1 pl-2 pr-2 mb-10">
        {sectionsData.map((section) => renderSection(section))}
      </div>

      {/* Upgrade Space */}
      <div className="mt-auto">
        <Image
          alt="upgrade"
          src="/assets/add.svg"
          width={178}
          height={129}
          className="w-full"
        />
      </div>
    </div>
  );
}

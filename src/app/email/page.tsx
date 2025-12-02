"use client";
import { useState } from "react";
import SideMenu2 from "@/components/Email/SideMenu2";
import DashboardSection from "@/components/Email/SidebarMenu/DashboardSection";
import EmailSection from "@/components/Email/SidebarMenu/EmailSection";

export default function Page() {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const renderActiveSection = () => {
    switch (activeSection) {
      case "Dashboard":
        return <DashboardSection />;
      case "Email":
        return <EmailSection />;
    }
  };
  return (
    <div className="flex">
      <div className="">
        <SideMenu2
          setActiveSection={setActiveSection}
          activeSection={activeSection}
        />
      </div>
      <div className="flex-1">{renderActiveSection()}</div>
    </div>
  );
}

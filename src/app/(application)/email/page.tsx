"use client";
import { useState } from "react";
import SideMenu2 from "@/components/Sidemenu/SideMenu";
import DashboardSection from "@/components/Dashboard/DashboardSection";
import EmailSection from "@/components/Email/EmailSection";

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
      <SideMenu2
        setActiveSection={setActiveSection}
        activeSection={activeSection}
      />

      <div className="flex-1">{renderActiveSection()}</div>
    </div>
  );
}

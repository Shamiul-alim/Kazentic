"use client";

import { useState } from "react";
import SideMenu from "@/components/Sidemenu/SideMenu";
import { useSidebar } from "@/context/SidebarContext";

export default function ClientSideMenuWrapper() {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const { isSidebarOpen, setIsSidebarOpen } = useSidebar();

  return (
    <SideMenu
      activeSection={activeSection}
      setActiveSection={setActiveSection}
      isSidebarOpen={isSidebarOpen}
      setIsSidebarOpen={setIsSidebarOpen}
    />
  );
}

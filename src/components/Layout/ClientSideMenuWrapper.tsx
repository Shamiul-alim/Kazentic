"use client";

import { useState } from "react";
import SideMenu from "@/components/Sidemenu/SideMenu";

export default function ClientSideMenuWrapper() {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <SideMenu
      activeSection={activeSection}
      setActiveSection={setActiveSection}
      isSidebarOpen={isSidebarOpen}
      setIsSidebarOpen={setIsSidebarOpen}
    />
  );
}

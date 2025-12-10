import Topbar from "@/components/Layout/Topbar";
import Sidebar from "@/components/Layout/Sidebar";
import ClientSideMenuWrapper from "@/components/Layout/ClientSideMenuWrapper";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex flex-col h-screen">
      <>
        <Topbar />

        <div className="flex flex-grow">
          <Sidebar />
          <div className="bg-[#111953]">
            <ClientSideMenuWrapper />
          </div>

          <div className="w-full bg-[#FFFFFF]">{children}</div>
        </div>
      </>
    </div>
  );
};

export default Layout;

import Topbar from "@/components/Layout/Topbar";
import Sidebar from "@/components/Layout/Sidebar";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex flex-col h-screen">
      <>
        <div className="w-full bg-gradient-to-r from-[#111953] via-[#111953] to-[#4157FE] text-[#FFFFFF]">
          <Topbar />
        </div>

        <div className="flex flex-grow">
          <div className="w-[2.375rem] bg-[#111953] text-[#FFFFFF] flex flex-col items-center z-6 pb-10">
            <Sidebar />
          </div>

          <div className="flex-1 overflow-auto bg-[#111953]">{children}</div>
        </div>
      </>
    </div>
  );
};

export default Layout;

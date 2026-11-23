
import { Outlet } from "react-router-dom";
import Sidebar from "../shared/layout/sidebar";

function DashboardLayout() {
  return (
    <div className="flex min-h-screen bg-[#F5F8F6]">

      
      <Sidebar />

      
      <main className="min-w-0 flex-1 p-8">
        <Outlet />
      </main>

    </div>
  );
}

export default DashboardLayout;

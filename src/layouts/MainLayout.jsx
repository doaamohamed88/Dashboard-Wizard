import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import AppSidebar from "../pages/Dashboard/components/Sidebar";
import {
  Sidebar,
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar";

export default function MainLayout() {
  return (
    <SidebarProvider defaultOpen={true} className="min-h-screen flex flex-col bg-[#020817]">
      <Navbar />

      <div className="flex flex-1 overflow-hidden">
        <Sidebar collapsible="icon" className="border-r border-[#49445433]">
          <AppSidebar />
        </Sidebar>

        <SidebarInset className="flex-1 overflow-auto bg-[#020817]">
          <Outlet />
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
import React from "react";
import {
  LayoutDashboard,
  Users,
  FlaskConical,
  BookOpen,
  Settings,
  CircleHelp,
  Plus,
  Sparkles,
} from "lucide-react";
import { Link, NavLink, useLocation } from "react-router-dom";
import {
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
} from "@/components/ui/sidebar";

export default function Sidebar() {
  const location = useLocation();
  const isDashboard = location.pathname === "/";

  return (
    <div className="flex h-full flex-col">
      <SidebarHeader className="px-4 pt-6 pb-4 group-data-[collapsible=icon]:pt-4 group-data-[collapsible=icon]:pb-2">
        <div className="relative flex items-center justify-center group-data-[collapsible=icon]:mb-3">
          {/* Expand/Collapse icon for the sidebar */}
          <SidebarTrigger className="absolute right-0 top-0 cursor-pointer hover:text-primary hover:bg-transparent group-data-[collapsible=icon]:static group-data-[collapsible=icon]:mx-auto" />

          <div className="flex h-15.5 w-15.5 items-center justify-center rounded-[12px] gradient-border group-data-[collapsible=icon]:hidden">
            <Sparkles className="w-6 h-6 text-primary" />
          </div>
        </div>

        <h2 className="mt-2 text-primary leading-6 font-extrabold pt-2 group-data-[collapsible=icon]:hidden text-center">
          Registry
        </h2>

        <p className="text-[12px] leading-[16px] tracking-[.6px] text-[#CBC3D7] text-center opacity-70 group-data-[collapsible=icon]:hidden">
          Ministry of Alchemical Records
        </p>
      </SidebarHeader>

      <SidebarContent className="px-2 group-data-[collapsible=icon]:pt-2">
        <SidebarMenu>
          <SidebarMenuItem >
            <SidebarMenuButton asChild tooltip="Dashboard" isActive={isDashboard} >
              <NavLink to="/" >
                <LayoutDashboard size={18} className="text-primary"/>
                <span className="group-data-[collapsible=icon]:hidden text-primary">
                  Dashboard
                </span>
              </NavLink>
            </SidebarMenuButton>
          </SidebarMenuItem>

          <SidebarMenuItem>
            <SidebarMenuButton asChild tooltip="Wizards">
              <Link to="#">
                <Users size={18} className="text-card-foreground"/>
                <span className="group-data-[collapsible=icon]:hidden text-card-foreground">Wizards</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>

          <SidebarMenuItem>
            <SidebarMenuButton asChild tooltip="Elixirs">
              <Link to="#">
                <FlaskConical size={18} className="text-card-foreground"/>
                <span className="group-data-[collapsible=icon]:hidden text-card-foreground">Elixirs</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>

          <SidebarMenuItem>
            <SidebarMenuButton asChild tooltip="Archives">
              <Link to="#">
                <BookOpen size={18} className="text-card-foreground"/>
                <span className="group-data-[collapsible=icon]:hidden text-card-foreground">Archives</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarContent>

      <SidebarFooter className="px-4 pb-5">
        <button className="w-full cursor-pointer shadow-[0px_4px_6px_-4px_#D0BCFF33,0px_10px_15px_-3px_#D0BCFF33] leading-5 tracking-[.28px] text-sm rounded-[12px] bg-[#D0BCFF] py-3 px-4 text-black font-medium hover:opacity-90 transition flex items-center justify-center gap-3 overflow-hidden">
          <Plus className="text-[#3C0091] flex-shrink-0" size={16} />
          <span className="group-data-[collapsible=icon]:hidden whitespace-nowrap">
            New Elixir
          </span>
        </button>

        <div className="mt-4 pt-3 border-t border-[#4944541A]">
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild tooltip="Settings">
                <Link to="#">
                  <Settings size={18} />
                  <span className="group-data-[collapsible=icon]:hidden">Settings</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>

            <SidebarMenuItem>
              <SidebarMenuButton asChild tooltip="Support">
                <Link to="#">
                  <CircleHelp size={18} />
                  <span className="group-data-[collapsible=icon]:hidden">Support</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </div>
      </SidebarFooter>
    </div>
  );
}
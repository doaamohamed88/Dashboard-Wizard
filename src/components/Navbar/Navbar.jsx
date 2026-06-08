import React, { useState } from 'react'
import { Home, Users, Settings, Bell, Search, Menu, X } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { SidebarTrigger } from "@/components/ui/sidebar";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-[#051424] text-foreground border-b border-[#4944544D] relative w-full z-50 shadow-[0_0_20px_0_#D0BCFF26]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-10 py-4 flex justify-between items-center">

        <div className="flex items-center space-x-6">
          <p className="text-2xl font-bold leading-8 align-middle text-primary pr-20">
            Wizarding Registry
          </p>

          {/* Search (hidden on small screens) */}
          <div className="hidden md:flex items-center space-x-4 relative">
            <input
              type="text"
              placeholder="Scrying record..."
              className="py-2 pl-10 pr-6 rounded-full bg-[#2736474D] text-[#6B7280] focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <Search className="text-[#CBC3D7] absolute w-3 h-3 left-3 top-2.5" />
          </div>
        </div>

        {/* Desktop icons */}
        <ul className="hidden md:flex items-center space-x-6">
          <li>
            <Bell className="w-4 h-5 text-[#CBC3D7] cursor-pointer transition-transform duration-300 hover:animate-bounce" />
          </li>

          <li>
            <Settings className="w-4 h-5 text-[#CBC3D7] cursor-pointer transition-all duration-500 hover:rotate-180 hover:text-primary" />
          </li>

          <li>
            <Avatar className="w-8 h-8 border border-[#D0BCFF4D] rounded-full cursor-pointer transition-all duration-300 hover:scale-110 hover:border-primary">
              <AvatarImage src="https://i.pravatar.cc/100" />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
          </li>
        </ul>

        {/* Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-[#CBC3D7]"
          aria-label="Toggle mobile menu"
        >
          {open ? <X /> : <Menu />}
        </button>

        {/* Sidebar toggle (mobile) */}
        <SidebarTrigger className="md:hidden ml-2" />
      </div>

      {/* Mobile Menu */}
{open && (
  <div className="md:hidden absolute left-0 right-0 top-full px-4 sm:px-6 pb-5 flex flex-col gap-5 border-t border-[#4944544D] bg-[#051424] max-h-[calc(100vh-72px)] overflow-auto">

    {/* Search */}
    <div className="relative mt-4">
      <input
        type="text"
        placeholder="Scrying record..."
        className="w-full py-2 pl-10 pr-6 rounded-full bg-[#2736474D] text-[#D4E4FA] placeholder:text-[#6B7280] focus:outline-none focus:ring-2 focus:ring-primary transition"
      />
      <Search className="text-[#CBC3D7] absolute w-4 h-4 left-3 top-2.5" />
    </div>

    {/* Actions */}
    <div className="flex flex-col gap-3">

      {/* Bell */}
      <div className="flex items-center justify-between px-3 py-2 rounded-lg hover:bg-[#2736474D] transition cursor-pointer group">

        <div className="flex items-center gap-3">
          <Bell className="w-5 h-5 text-[#CBC3D7] group-hover:text-primary group-hover:animate-bounce transition" />
          <span className="text-sm text-[#CBC3D7] group-hover:text-primary">
            Notifications
          </span>
        </div>

        <span className="text-xs px-2 py-0.5 bg-red-600 text-white rounded-full">
          3
        </span>
      </div>

      {/* Settings */}
      <div className="flex items-center justify-between px-3 py-2 rounded-lg hover:bg-[#2736474D] transition cursor-pointer group">

        <div className="flex items-center gap-3">
          <Settings className="w-5 h-5 text-[#CBC3D7] group-hover:text-primary group-hover:rotate-180 transition duration-500" />
          <span className="text-sm text-[#CBC3D7] group-hover:text-primary">
            Settings
          </span>
        </div>

        <span className="text-xs px-2 py-0.5 bg-primary text-black rounded-full">
          New
        </span>
      </div>

      {/* Avatar */}
      <div className="flex items-center justify-between px-3 py-2 rounded-lg hover:bg-[#2736474D] transition cursor-pointer group">

        <div className="flex items-center gap-3">
          <Avatar className="w-9 h-9 border border-[#D0BCFF4D] rounded-full group-hover:scale-110 transition">
            <AvatarImage src="https://i.pravatar.cc/100" />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>

          <span className="text-sm text-[#CBC3D7] group-hover:text-primary">
            Profile
          </span>
        </div>

        <span className="text-xs px-2 py-0.5 bg-[#2736474D] text-[#CBC3D7] rounded-full">
          Account
        </span>
      </div>

    </div>

  </div>
)}    </nav>
  )
}
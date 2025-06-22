"use client";

import { Bell, Search } from "lucide-react";

import ClientOnlyUserButton from "@/components/common/ClientOnlyUserButton";
import { Button } from "@/components/ui/button";
import { SidebarTrigger } from "@/components/ui/sidebar";

const DashboardHeader = () => {
  return (
    <header className="border-b">
      <div className="flex h-14 items-center justify-between px-4">
        {/* Left Section */}
        <div className="flex items-center gap-4">
          <SidebarTrigger />

          {/* Search Bar */}
          <div className="relative hidden items-center md:flex">
            <Search className="text-muted-foreground absolute left-3 h-4 w-4" />
            <input
              type="search"
              placeholder="Cari siswa, guru, atau mata pelajaran..."
              className="border-input bg-background focus:ring-ring w-80 rounded-md border py-2 pr-4 pl-10 text-sm focus:border-transparent focus:ring-2 focus:outline-none"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-2">
          {/* Notifications */}
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="size-5" />
            {/* Notification Badge */}
            <span className="absolute -top-1 -right-1 flex h-3 w-3 items-center justify-center rounded-full bg-red-500 text-[10px] text-white">
              3
            </span>
            <span className="sr-only">Notifications</span>
          </Button>

          {/* User Menu */}
          <ClientOnlyUserButton />
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;

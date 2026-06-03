"use client";

import { usePathname } from "next/navigation";
import { Plus, Bell } from "lucide-react";

export function Header() {
  const pathname = usePathname();
  
  const lastSegment = pathname.split("/").pop() || "";
  const title = pathname === "/dashboard" 
    ? "Overview" 
    : lastSegment 
      ? lastSegment.charAt(0).toUpperCase() + lastSegment.slice(1) 
      : "Dashboard";

  return (
    <header className="h-16 lg:h-20 flex items-center justify-between px-4 sm:px-8 border-b border-border/50 bg-background/50 backdrop-blur-md sticky top-0 z-30 pt-16 lg:pt-0">
      <div className="flex items-center gap-4">
        <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-text">
          {title}
        </h1>
      </div>

      <div className="flex items-center gap-3 sm:gap-4">
        <button className="p-2 sm:p-2.5 rounded-xl glass text-text-secondary hover:text-text hover:border-border-light transition-all relative">
          <Bell className="w-5 h-5" />
          <span className="absolute top-2 right-2.5 w-2 h-2 bg-primary rounded-full animate-pulse" />
        </button>
        
        <button className="flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl bg-primary text-white text-sm font-semibold hover:bg-primary/90 transition-colors shadow-[0_0_20px_rgba(124,58,237,0.3)] hover:shadow-[0_0_30px_rgba(124,58,237,0.5)]">
          <Plus className="w-4 h-4" />
          <span className="hidden sm:inline">New Campaign</span>
        </button>
      </div>
    </header>
  );
}

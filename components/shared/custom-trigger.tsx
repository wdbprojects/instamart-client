"use client";

import { useSidebar } from "@/components/ui/sidebar";
import { Menu } from "lucide-react";

const CustomTrigger = () => {
  const { toggleSidebar } = useSidebar();
  return (
    <div
      onClick={toggleSidebar}
      className="inline-flex items-center gap-1 cursor-pointer border border-transparent hover:border-white w-auto py-1.5 px-2 rounded-[2px] text-white"
    >
      <Menu size={24} className="" />
      <span className="font-semibold text-sm">All</span>
    </div>
  );
};

export default CustomTrigger;

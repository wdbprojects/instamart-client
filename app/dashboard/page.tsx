"use client";

import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { useSidebar } from "@/components/ui/sidebar";
import AppSidebar from "@/components/sidebar/app-sidebar";
import { Separator } from "@/components/ui/separator";
import Header from "@/components/layout/header";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CustomTrigger() {
  const { toggleSidebar } = useSidebar();
  return (
    <Button onClick={toggleSidebar} size="icon" variant="outline">
      <Menu size={24} className="" />
    </Button>
  );
}

const Dashboard = () => {
  return (
    <SidebarProvider defaultOpen={false}>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-14 shrink-0 items-center gap-2 border-b">
          <div className="flex items-center gap-2 px-3 w-full">
            {/* <SidebarTrigger variant="outline" /> */}
            <CustomTrigger />
            <Separator orientation="vertical" className="h-4" />
            {/* HEADER */}
            <Header />
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4">
          <div className="grid auto-rows-min gap-4 md:grid-cols-3">
            <div className="aspect-video rounded-xl bg-muted/50" />
            <div className="aspect-video rounded-xl bg-muted/50" />
            <div className="aspect-video rounded-xl bg-muted/50" />
          </div>
          <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default Dashboard;

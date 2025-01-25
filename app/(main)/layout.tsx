"use client";

import React, { ReactNode } from "react";

import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "@/components/sidebar/app-sidebar";

import Header from "@/components/layout/header";

const MainLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <SidebarProvider defaultOpen={false}>
      <AppSidebar />
      <SidebarInset>
        <header className="flex items-center">
          <div className="flex items-center gap-2 w-full">
            <Header />
          </div>
        </header>
        {children}
      </SidebarInset>
    </SidebarProvider>
  );
};

export default MainLayout;

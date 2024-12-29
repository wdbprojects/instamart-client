import React from "react";
import Link from "next/link";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Calendar, Home, Inbox, Search, Settings } from "lucide-react";

const items = [
  { id: 1, title: "Home", url: "#", icon: Home },
  { id: 2, title: "Inbox", url: "#", icon: Inbox },
  { id: 3, title: "Calendar", url: "#", icon: Calendar },
  { id: 4, title: "Search", url: "#", icon: Search },
  { id: 5, title: "Settings", url: "#", icon: Settings },
];

const ProductsSidebar = () => {
  return (
    <Sidebar variant="sidebar" collapsible="none" side="left">
      <SidebarHeader className="flex flex-row items-center justify-between">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              size="lg"
              asChild
              className="col-span-4 flex items-center"
            >
              <Link href="/" className="text-xl font-semibold text-black">
                Instamart
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Applications</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => {
                return (
                  <SidebarMenuItem key={item.id}>
                    <SidebarMenuButton asChild>
                      <Link href={item.url}>
                        <item.icon />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};

export default ProductsSidebar;

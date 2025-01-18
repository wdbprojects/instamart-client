import React, { ComponentProps } from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import Link from "next/link";

import { dataSidebar } from "@/lib/data";

const AppSidebar = ({ ...props }: ComponentProps<typeof Sidebar>) => {
  return (
    <Sidebar {...props} variant="sidebar">
      <SidebarHeader>
        <SidebarMenu className="border-b h-12 px-0 flex justify-center">
          <h2 className="text-xl font-medium uppercase">Categories</h2>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            {dataSidebar.navMain.map((item) => {
              return (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url} className="font-medium">
                      {item.title}
                    </Link>
                  </SidebarMenuButton>
                  {item.items?.length ? (
                    <SidebarMenuSub>
                      {item.items.map((item) => {
                        return (
                          <SidebarMenuSubItem key={item.title}>
                            <SidebarMenuSubButton
                              asChild
                              isActive={item.isActive}
                            >
                              <Link href={item.url}>{item.title}</Link>
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                        );
                      })}
                    </SidebarMenuSub>
                  ) : null}
                </SidebarMenuItem>
              );
            })}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};

export default AppSidebar;

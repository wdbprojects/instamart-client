import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { LogOut, Menu } from "lucide-react";
import UserIcon from "@/components/shared/user-icon";
import { userMenuLinks } from "@/lib/data";
import Link from "next/link";

const MenuUser = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="flex max-w-[100px] gap-2 px-2 focus-visible:ring-0"
        >
          <Menu className="h-6 w-6" />
          <UserIcon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" sideOffset={5}>
        <DropdownMenuLabel>Lucia Slut</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {userMenuLinks.map((link) => {
          const { id, href, label, icon } = link;
          return (
            <DropdownMenuItem
              key={id}
              asChild
              className="cursor-pointer w-full capitalize"
            >
              <Link href={href}>
                {icon}
                <span>{label}</span>
              </Link>
            </DropdownMenuItem>
          );
        })}
        <DropdownMenuSeparator />
        <DropdownMenuItem className="cursor-pointer w-full capitalize">
          <LogOut className="mr-2 h-4 w-4" />
          <span>Logout</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default MenuUser;

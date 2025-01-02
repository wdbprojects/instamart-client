"is client";

import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ChevronDown, KeyRound, LogOut, Menu } from "lucide-react";
import UserIcon from "@/components/shared/user-icon";
import { userMenuLinks } from "@/lib/data";
import Link from "next/link";
import { Separator } from "../ui/separator";

const MenuUser = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  if (!loggedIn) {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div>
            <Button
              variant="link"
              size="lg"
              className="gap-2 focus-visible:ring-0 !py-[20px] px-2 hover:background-transparent text-foreground hover:text-foreground border border-transparent hover:no-underline hover:border hover:border-neutral-400 hidden md:flex"
            >
              <div className="leading-0 text-left">
                <p className="block font-light text-sm m-0 leading-0">
                  Hello, sign in
                </p>
                <p className="block font-bold leading-0">Account & Orders</p>
              </div>
              <ChevronDown className="h-6 w-6" />
            </Button>
            <div className="flex gap-2 focus-visible:ring-0 cursor-pointer px-2 py-2 hover:background-transparent rounded-md text-foreground hover:text-foreground border border-transparent hover:no-underline hover:border hover:border-neutral-400 md:hidden">
              <KeyRound className="h-6 w-6" />
            </div>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56 pb-2" align="end" sideOffset={5}>
          <DropdownMenuLabel className="text-center mb-1">
            Log in or sign up
          </DropdownMenuLabel>
          <Button variant="default" size="sm" className="w-full font-semibold">
            Sign in
          </Button>
          <Separator className="mt-2 mb-1" />
          <p className="text-center text-xs">
            New customer?{" "}
            <Link
              href="/register"
              className="text-primary font-semibold hover:underline"
            >
              Start here.
            </Link>
          </p>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }

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

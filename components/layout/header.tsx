"use client";

import React, { Suspense } from "react";
import Link from "next/link";
import SearchInput from "@/components/forms/search-input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import CartButton from "@/components/cart/cart-button";
import MenuUser from "@/components/shared/menu-user";

const Header = () => {
  return (
    <header className="grid mx-auto w-full grid-cols-12 items-center justify-between gap-4 pl-0 pr-2 sm:h-[50px]">
      {/* LOGO */}
      <div className="col-span-4 flex items-center">
        <Link href="/" className="text-xl font-semibold">
          Instamart
        </Link>
      </div>
      {/* SEARCH BAR */}
      <div className="col-span-4 hidden w-full items-center justify-center sm:flex">
        <Suspense>
          <SearchInput />
        </Suspense>
      </div>
      {/* ICONS & MENU */}
      <div className="col-span-4 flex items-center justify-end gap-6">
        <Button
          size="sm"
          variant="outline"
          onClick={() => {
            toast.info("Event has been created");
          }}
        >
          Sonner
        </Button>
        <CartButton />
        <MenuUser />
      </div>
    </header>
  );
};

export default Header;

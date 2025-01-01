"use client";

import React, { Suspense } from "react";
import Link from "next/link";
import SearchInput from "@/components/forms/search-input";
import CartButton from "@/components/cart/cart-button";
import MenuUser from "@/components/shared/menu-user";
import DarkMode from "@/components/shared/dark-theme";
import Image from "next/image";

const Header = () => {
  return (
    <header className="grid mx-auto w-full grid-cols-12 items-center justify-between gap-4 pl-0 pr-2 sm:h-[50px]">
      {/* LOGO */}
      <div className="col-span-6 md:col-span-4 lg:col-span-3 flex items-center gap-2">
        <Image
          src="/icons/instamart-logo.png"
          alt="logo"
          width={100}
          height={100}
          className="h-[35px] w-auto"
        />
        <Link href="/" className="text-xl font-semibold">
          Instamart
        </Link>
      </div>
      {/* SEARCH BAR */}
      <div className="md:col-span-5 lg:col-span-5 col-span-6 w-full items-center justify-center md:flex">
        <Suspense>
          <SearchInput />
        </Suspense>
      </div>
      {/* ICONS & MENU */}
      <div className="col-span-6 md:col-span-3 lg:col-span-4 items-center justify-end gap-3 hidden md:flex">
        <div className="hidden lg:block">
          <MenuUser />
        </div>
        <CartButton />
      </div>
    </header>
  );
};

export default Header;

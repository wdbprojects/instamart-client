"use client";

import React, { Suspense } from "react";
import Link from "next/link";
import SearchInput from "@/components/forms/search-input";
import CartButton from "@/components/cart/cart-button";
import MenuUser from "@/components/shared/menu-user";
import Image from "next/image";

const Header = () => {
  return (
    <header className="mx-auto w-full grid grid-cols-12 items-center justify-between gap-4 pl-0 pr-2 sm:h-[50px]">
      {/* LOGO */}
      <Link
        href="/"
        className="block col-span-6 sm:col-span-2 md:col-span-1 lg:col-span-3 w-full text-xl font-semibold"
      >
        <div className="flex items-center gap-2">
          <Image
            src="/icons/instamart-logo.png"
            alt="logo"
            width={100}
            height={100}
            className="h-[35px] w-auto"
          />
          <span className="hidden lg:block">Instamart</span>
        </div>
      </Link>
      {/* SEARCH BAR */}
      <div className="hidden sm:block col-span-6 sm:col-span-7 md:col-span-6 lg:col-span-5 w-full">
        <Suspense>
          <SearchInput />
        </Suspense>
      </div>
      {/* ICONS & MENU */}
      <div className="flex col-span-6 sm:col-span-3 md:col-span-5 lg:col-span-4 w-full items-center justify-end gap-3">
        <MenuUser />
        <CartButton />
      </div>
    </header>
  );
};

export default Header;

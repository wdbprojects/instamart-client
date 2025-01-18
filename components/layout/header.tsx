"use client";

import React, { Suspense } from "react";
import Link from "next/link";
import SearchInput from "@/components/forms/search-input";
import CartButton from "@/components/cart/cart-button";
import MenuUser from "@/components/sidebar/menu-user";
import Image from "next/image";
import CustomTrigger from "../shared/custom-trigger";
import SubMenuLinks from "../sidebar/sub-menu-links";
import MoreSubMenuLinks from "../sidebar/more-sub-menu-links";

const Header = () => {
  return (
    <div className="mx-auto w-full">
      {/* UPPER HEADER */}
      <div className="grid grid-cols-12 items-center justify-between p-2">
        {/* LOGO */}
        <Link
          href="/"
          className="block col-span-2 sm:col-span-3 md:col-span-3 lg:col-span-3 w-full text-xl font-semibold"
        >
          <div className="flex items-center gap-2">
            <Image
              src="/icons/instamart-logo.png"
              alt="logo"
              width={100}
              height={100}
              className="h-[35px] w-auto"
            />
            <span className="hidden sm:block">Instamart</span>
          </div>
        </Link>
        {/* SEARCH BAR */}
        <div className="block w-full col-span-6 sm:col-span-6 md:col-span-5 lg:col-span-5">
          <Suspense>
            <SearchInput />
          </Suspense>
        </div>
        {/* ICONS & MENU */}
        <div className="flex col-span-4 sm:col-span-3 md:col-span-4 lg:col-span-4 w-full items-center justify-end !gap-2 ">
          <MenuUser />
          <CartButton />
        </div>
      </div>
      {/* SUB MENU */}
      <div className="max-h-[42px] flex flex-row items-center px-2 py-1 bg-slate-800 w-[100%] h-[42px] relative !overflow-hidden">
        <CustomTrigger />
        <SubMenuLinks />
        <MoreSubMenuLinks />
      </div>
    </div>
  );
};

export default Header;

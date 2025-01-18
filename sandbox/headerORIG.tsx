"use client";

import React, { Suspense } from "react";
import Container from "@/components/layout/container";
import Link from "next/link";
import SearchInput from "@/components/forms/search-input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import CartButton from "@/components/cart/cart-button";
import MenuUser from "@/components/sidebar/menu-user";

const Header = () => {
  return (
    <header className="mx-auto border-b bg-muted/40">
      <Container className="grid h-12 w-full grid-cols-12 items-center justify-between gap-4 px-4 sm:h-[60px] sm-px-8">
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
      </Container>
    </header>
  );
};

export default Header;

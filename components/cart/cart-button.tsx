"use client";

import React, { useState } from "react";
import { ShoppingCartIcon } from "lucide-react";
import Link from "next/link";

const CartButton = () => {
  const [over99, setOver99] = useState(false);

  const numItemsCart = "10";

  return (
    <Link
      href="/cart"
      className="relative border border-transparent hover:border hover:border-neutral-400 p-0.5 rounded-sm flex items-end gap-0"
    >
      {/* <ShoppingBasket size={30} strokeWidth={2} /> */}
      <ShoppingCartIcon className="h-9 w-9" strokeWidth={1.6} />
      <span className="absolute right-[30px] -top-[0px] flex items-center justify-center bg-background w-[24px] rounded-full text-center leading-0 m-0 text-primary py-[0px] px-[0px] text-[13px] font-extrabold">
        {numItemsCart}
        {over99 && (
          <sup className="text-xm font-extrabold absolute top-1 -right-[2px]">
            +
          </sup>
        )}
      </span>
      <span className="text-xs font-semibold">cart</span>
    </Link>
  );
};

export default CartButton;

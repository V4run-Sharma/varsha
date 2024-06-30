"use client";

import Image from "next/image";
import Link from "next/link";

import { ModeToggle } from "@/components/mode-toggle";
import NavLink from "./navlink";
import { Heart, ShoppingBag, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const links = [
  { title: "All Watches", href: "/all" },
  { title: "Categories", href: "/categories" },
  { title: "Blogs", href: "/blogs" },
];

const cart = 10;
const wishlist = 5;
const user = "V";

export default function Header() {
  return (
    <header className="px-40 py-2 w-full flex justify-between items-center text-center">
      <Link href="/">
        <Image
          src={"/logo.svg"}
          alt="Varsha Logo"
          width={239 / 2}
          height={134 / 2}
          className="dark:invert"
        />
      </Link>
      <div className="flex gap-8 text-xl ">
        {links.map((link) => (
          <NavLink key={link.title} title={link.title} href={link.href} />
        ))}
      </div>
      <div className="flex gap-8 justify-center items-center">
        <Link href={"/userId/wishlist"} className="relative">
          <Heart size={24} />
          {wishlist > 0 && (
            <span className="absolute flex justify-center items-center -top-1 -right-1 w-4 h-4 bg-red-600 text-white text-[10px] font-bold rounded-full">
              {wishlist}
            </span>
          )}
        </Link>
        <Link href={"/userId/cart"} className="relative">
          <ShoppingBag size={24} />
          {cart > 0 && (
            <span className="absolute flex justify-center items-center -top-1 -right-1 w-4 h-4 bg-red-600 text-white text-[10px] font-bold rounded-full">
              {cart}
            </span>
          )}
        </Link>
        <Link href={"/userId"}>
          {user ? (
            <Button
              variant="outline"
              size="icon"
              className="text-lg font-medium">
              {user}
            </Button>
          ) : (
            <User size={24} />
          )}
        </Link>
        <ModeToggle />
      </div>
    </header>
  );
}

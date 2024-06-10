"use client";

import Image from "next/image";
import Link from "next/link";

import { ModeToggle } from "@/components/mode-toggle";
import NavLink from "./navlink";

const links = [
  { title: "All Watches", href: "/all" },
  { title: "Categories", href: "/categories" },
  { title: "Blogs", href: "/blogs" },
];

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
      <div>
        <ModeToggle />
      </div>
    </header>
  );
}

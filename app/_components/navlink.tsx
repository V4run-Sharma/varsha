import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps {
  title: string;
  href: string;
}

export default function NavLink({ title, href }: NavLinkProps) {
  const active = usePathname() === href;
  return (
    <Link href={href} className="group flex flex-col items-start">
      <p>{title}</p>
      <div
        className={`${
          active ? "w-2/3" : "w-0 group-hover:w-1/3"
        } h-0.5 transition-all bg-black dark:bg-white`}></div>
    </Link>
  );
}

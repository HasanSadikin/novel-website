"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  children: React.ReactNode;
  href: string;
  activePathname: string[];
  exact?: boolean;
}

const NavItem = ({ children, href, activePathname, exact }: Props) => {
  const pathname = usePathname();
  const checkPath = () => {
    if (!exact) {
      for (let i = 0; i < activePathname.length; i++) {
        const element = activePathname[i];
        if (!pathname.startsWith(element)) continue;
        return true;
      }
      return false;
    }

    for (let i = 0; i < activePathname.length; i++) {
      const element = activePathname[i];
      if (pathname !== element) continue;
      return true;
    }

    return false;
  };

  return (
    <Link href={href} className="w-full">
      <li
        className={`${
          checkPath() ? "text-white bg-secondary" : "text-gray-500 "
        } p-2 rounded-lg w-full flex justify-center items-center duration-200 ease-in-out`}
      >
        {children}
      </li>
    </Link>
  );
};

export default NavItem;

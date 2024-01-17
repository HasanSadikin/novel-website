"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavItem = ({
  children,
  activePathname,
  exact,
}: {
  children: React.ReactNode;
  activePathname: string;
  exact?: boolean;
}) => {
  const pathname = usePathname();
  const checkPath = () => {
    if (!exact) return pathname.startsWith(activePathname);
    return pathname === activePathname;
  };

  return (
    <Link href={activePathname} className="w-full">
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

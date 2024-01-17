import { HomeIcon } from "@heroicons/react/24/solid";
import { MagnifyingGlassCircleIcon } from "@heroicons/react/24/solid";
import { BookOpenIcon } from "@heroicons/react/24/solid";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import NavItem from "./nav-item";

const Navbar = () => {
  return (
    <nav className="fixed bottom-0 h-16 w-screen shadow-md z-[10] bg-white/50 backdrop-blur-sm">
      <ul className="flex justify-evenly items-center h-full w-11/12 mx-auto gap-2">
        <NavItem activePathname="/" exact>
          <HomeIcon className="w-7 h-7" />
        </NavItem>
        <NavItem activePathname="/search">
          <MagnifyingGlassCircleIcon className="w-7 h-7" />
        </NavItem>
        <NavItem activePathname="/bookmark">
          <BookOpenIcon className="w-7 h-7" />
        </NavItem>
        <NavItem activePathname="/account">
          <UserCircleIcon className="w-7 h-7" />
        </NavItem>
      </ul>
    </nav>
  );
};

export default Navbar;

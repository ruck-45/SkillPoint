// Dependencies
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Dropdown,
  DropdownTrigger,
  Avatar,
  DropdownMenu,
  DropdownItem,
  Input,
} from "@nextui-org/react";

import { useState } from "react";

// Local Files
import "./NavBar.css";
import logo from "./assets/logo.svg";
import { SearchIcon } from "./subComponents/SearchIcon";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = ["Home", "Courses", "Profile", "About", "Help & Feedback", "Log Out"];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} className="NavBar dark" maxWidth="xl">
      <NavbarContent>
        <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} className="sm:hidden text-white" />
        <NavbarBrand className="gap-[0.5rem]">
          <img src={logo} alt="" className="h-[3rem]"></img>
          <p className="font-bold text-inherit text-white">SkillPoint</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent as="div" justify="end" className="gap-[2rem]">
        <NavbarItem className="hidden md:block">
          <Link color="foreground" href="#">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem className="hidden md:block">
          <Link color="foreground" href="#">
            Courses
          </Link>
        </NavbarItem>
        <NavbarItem className="hidden md:block">
          <Link color="foreground" href="#">
            About
          </Link>
        </NavbarItem>
        <Input
          classNames={{
            base: "max-w-full sm:max-w-[10rem] h-10",
            mainWrapper: "h-full min-w-[10rem]",
            input: "text-small",
            inputWrapper: "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
          }}
          placeholder="Type to search..."
          size="sm"
          startContent={<SearchIcon size={18} />}
          type="search"
        />
        <Dropdown placement="bottom-end">
          <DropdownTrigger className="shrink-0">
            <Avatar
              isBordered
              as="button"
              className="transition-transform"
              color="danger"
              name="Jason Hughes"
              size="sm"
              src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
            />
          </DropdownTrigger>

          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold">Signed in as</p>
              <p className="font-semibold">zoey@example.com</p>
            </DropdownItem>
            <DropdownItem key="home" className="hidden sm:block md:hidden">
              Home
            </DropdownItem>
            <DropdownItem key="courses" className="hidden sm:block md:hidden">
              Courses
            </DropdownItem>
            <DropdownItem key="about" className="hidden sm:block md:hidden">
              About
            </DropdownItem>
            <DropdownItem key="profile">My Profile</DropdownItem>
            <DropdownItem key="logout" color="danger">
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"}
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default NavBar;

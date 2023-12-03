// Dependencies
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
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
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

// Local Files
import "./NavBar.css";
import logo from "./assets/logo.svg";
import { SearchIcon } from "./subComponents/SearchIcon";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const activeTab = useSelector((state: RootState) => state.activeTab.value);

  const menuItems = ["Home", "Courses", "Profile", "About", "Log Out"];
  const navItemClass = "text-[#a1a1aa] hover:text-[#f31260] cursor-pointer";
  const respNavItemClass =
    "w-full text-white font-thin text-base hover:font-normal hover:text-[#f31260] cursor-pointer";

  const navigate = useNavigate();
  const changeNavTab = (tabName: string) => {
    setIsMenuOpen(false);
    navigate(`./${tabName}`);
  };

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} className="bg-[#212224] h-[6rem]" maxWidth="xl">
      <NavbarContent>
        <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} className="sm:hidden text-white" />
        <NavbarBrand className="gap-[0.5rem]">
          <img src={logo} alt="" className="h-[3rem]"></img>
          <p className="font-bold text-inherit text-white">SkillPoint</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent as="div" justify="end" className="gap-[2rem]">
        <NavbarItem className="hidden md:block">
          <div
            className={activeTab === "Home" ? navItemClass + " active" : navItemClass}
            onClick={() => changeNavTab("Home")}
          >
            Home
          </div>
        </NavbarItem>
        <NavbarItem className="hidden md:block">
          <div
            className={activeTab === "Courses" ? navItemClass + " active" : navItemClass}
            onClick={() => changeNavTab("Courses")}
          >
            Courses
          </div>
        </NavbarItem>
        <NavbarItem className="hidden md:block">
          <p className="text-[#a1a1aa] hover:text-[#f31260] cursor-pointer">About</p>
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
            <DropdownItem key="email" className="h-14 gap-2">
              <p className="font-semibold">Signed in as</p>
              <p className="font-semibold">zoey@example.com</p>
            </DropdownItem>
            <DropdownItem key="home" className="hidden sm:block md:hidden p-0" textValue="home">
              <div style={{ display: "block", padding: "6px 8px" }} onClick={() => changeNavTab("Home")}>
                Home
              </div>
            </DropdownItem>
            <DropdownItem key="courses" className="hidden sm:block md:hidden p-0" textValue="courses">
              <div style={{ display: "block", padding: "6px 8px" }} onClick={() => changeNavTab("Courses")}>
                Courses
              </div>
            </DropdownItem>
            <DropdownItem key="about" className="hidden sm:block md:hidden" textValue="about">
              About
            </DropdownItem>
            <DropdownItem key="profile" className="p-0" textValue="profile">
              <div style={{ display: "block", padding: "6px 8px" }} onClick={() => changeNavTab("Profile")}>
                My Profile
              </div>
            </DropdownItem>
            <DropdownItem key="logout" color="danger" textValue="logout">
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>

      <NavbarMenu className="bg-[#28292b] my-[2rem]">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <div className={activeTab === item ? respNavItemClass + " respActive" : respNavItemClass}>
              <div
                onClick={() => {
                  if (item === "Home" || item === "Profile" || item === "Courses") {
                    changeNavTab(item);
                  } else {
                    changeNavTab("Home");
                  }
                }}
              >
                {item}
              </div>
            </div>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default NavBar;

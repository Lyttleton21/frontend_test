"use client";
import { CiMenuBurger } from "react-icons/ci";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import logo from "@/public/pistis Logo_03 1.png";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { BiCategory } from "react-icons/bi";
import { GiTeacher } from "react-icons/gi";
import { IoSettingsOutline } from "react-icons/io5";
import { SlLogout } from "react-icons/sl";
import { TbAward } from "react-icons/tb";
import { VscBook } from "react-icons/vsc";

export default function Menu() {
  const pathname = usePathname();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <CiMenuBurger />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-[#000066] ">
        <DropdownMenuLabel>
          <Image src={logo} alt="Logo" width={150} height={45.15}></Image>
        </DropdownMenuLabel>
        <DropdownMenuItem>
          <li
            className={`flex ${
              pathname === "/" && "bg-[#33cc99] text-black"
            } font-serif w-full p-4 text-special items-center cursor-pointer text-[#f1f1f1] hover:bg-[#33cc99]`}
          >
            <Link href={"/"}>
              <BiCategory size={30} className="block float-left mr-4" />
              Dashbroad
            </Link>
          </li>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <li
            className={`flex ${
              pathname === "/Course_Content" && "bg-[#33cc99]"
            } font-serif w-full p-4 text-special items-center cursor-pointer text-[#f1f1f1] hover:bg-[#33cc99]`}
          >
            <Link href={"/Course_Content"}>
              <VscBook size={30} className="block float-left mr-4" />
              Course Content
            </Link>
          </li>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <li
            className={`flex ${
              pathname === "/Projects" && "bg-[#33cc99]"
            } font-serif w-full p-4 text-special items-center cursor-pointer text-[#f1f1f1] hover:bg-[#33cc99]`}
          >
            <Link href={"/Projects"}>
              <GiTeacher size={30} className="block float-left mr-4" />
              Projects
            </Link>
          </li>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <li
            className={`flex ${
              pathname === "/grading" && "bg-[#33cc99] text-black"
            } font-serif w-full p-4 text-special items-center cursor-pointer text-[#f1f1f1] hover:bg-[#33cc99]`}
          >
            <Link href={"/grading"}>
              <TbAward size={30} className="block float-left mr-4" />
              Grading
            </Link>
          </li>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <li
            className={`flex ${
              pathname === "/Settings" && "bg-[#33cc99]"
            } font-serif w-full p-4 text-special items-center cursor-pointer text-[#f1f1f1] hover:bg-[#33cc99]`}
          >
            <Link href={"/Settings"}>
              <IoSettingsOutline size={30} className="block float-left mr-4" />
              Settings
            </Link>
          </li>
        </DropdownMenuItem>
        <DropdownMenuItem className="flex font-serif w-full p-4 text-special items-center cursor-pointer text-[#f1f1f1] hover:bg-[#33cc99]">
          <SlLogout size={30} className="block float-left mr-4" />
          <span>Log Out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

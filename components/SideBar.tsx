"use client";
import logo from "@/public/pistis Logo_03 1.png";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BiCategory } from "react-icons/bi";
import { GiTeacher } from "react-icons/gi";
import { IoSettingsOutline } from "react-icons/io5";
import { SlLogout } from "react-icons/sl";
import { TbAward } from "react-icons/tb";
import { VscBook } from "react-icons/vsc";

export default function SideBar() {
  const pathname = usePathname();
  return (
    <>
      {/* Top Header */}
      <div className="p-4 mb-4">
        <Image src={logo} alt="Logo" width={188} height={45.15}></Image>
      </div>
      {/* Main Nav Links */}
      <ul className="pt-2">
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
        <li
          className={`flex ${
            pathname === "/Grading" && "bg-[#33cc99] text-black"
          } font-serif w-full p-4 text-special items-center cursor-pointer text-[#f1f1f1] hover:bg-[#33cc99]`}
        >
          <Link href={"/Grading"}>
            <TbAward size={30} className="block float-left mr-4" />
            Grading
          </Link>
        </li>
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
      </ul>
      {/* Footer */}
      <div className="mt-[32rem] flex font-serif w-full p-4 text-special items-center cursor-pointer text-[#f1f1f1] hover:bg-[#33cc99]">
        <SlLogout size={30} className="block float-left mr-4" />
        <span>Log Out</span>
      </div>
    </>
  );
}

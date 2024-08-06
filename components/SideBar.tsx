import Image from "next/image";
import logo from "@/public/pistis Logo_03 1.png";
import teacher from "@/public/teacher.png";

export default function SideBar() {
  return (
    <div className="p-4">
      <Image src={logo} alt="Pistis Logo" width={188} height={45.15} />
      <div className="w-[270px] h-[834.85px] mt-4 p-2.5 text-white">
        <Image
          src={teacher}
          alt="Teacher"
          width={26}
          height={26}
          color="#f1f1f1"
        />
        <h1>This is my Side Bar</h1>
      </div>
    </div>
  );
}

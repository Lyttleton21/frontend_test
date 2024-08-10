import Elipse from "@/public/Ellipse 47.png";
import Image from "next/image";
import Menu from "./Menu";

export default function Frame() {
  return (
    <div className="flex items-center justify-between md:justify-end">
      <div className="md:hidden">
        <Menu />
      </div>
      <div className="flex items-center">
        <Image
          className="mr-2"
          src={Elipse}
          alt="Elipse"
          width={62}
          height={62}
        />
        <div>
          <p>John Mark</p>
          <small>Student</small>
        </div>
      </div>
    </div>
  );
}

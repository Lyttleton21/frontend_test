import Elipse from "@/public/Ellipse 47.png";
import Image from "next/image";

export default function Frame() {
  return (
    <div className="flex justify-center items-center md:justify-end">
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
  );
}

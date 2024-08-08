import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import SDLC from "@/public/SDLC.png";
import Linux from "@/public/linux.png";
import network from "@/public/networking.png";
import { GrCompliance } from "react-icons/gr";
import { IoIosArrowRoundForward } from "react-icons/io";

export default function MyCourses() {
  return (
    <div className="w-full bg-[#fbfbfb] px-2 py-1 md:rounded-lg">
      <div className="flex justify-between">
        <div>
          <h3 className="text-[#1a1a1a] font-serif text-[22px] font-medium leading-[26.18px]">
            My Courses
          </h3>
        </div>
        <div>
          <Link
            href={"/view_all"}
            className="text-[#00173a] underline decoration-1 font-serif font-medium text-[14px] leading-[17.07px]"
          >
            View All
          </Link>
        </div>
      </div>
      <div className="pt-2 md:flex md:flex-wrap">
        <Card className="w-[242px] h-[234px] rounded-sm mx-auto my-2">
          <CardHeader className="p-0">
            <Image
              src={SDLC}
              alt={"SDLC"}
              width={242}
              height={140}
              className="object-fill"
            />
          </CardHeader>
          <CardFooter>
            <figcaption className="text-[#1a1a1a] font-serif font-medium text-[20px] leading-[24.07px]">
              SDLC
            </figcaption>
            <div className="w-full flex justify-end items-center mt-16">
              <small className="font-serif font-normal text-[16px] leading-[16px]">
                Completed
              </small>
              <GrCompliance size={15} className=" ml-1" />
            </div>
          </CardFooter>
        </Card>
        <Card className="w-[242px] h-[234px] rounded-sm mx-auto my-2">
          <CardHeader className="p-0">
            <Image
              src={Linux}
              alt={"SDLC"}
              width={242}
              height={140}
              className="object-fill"
            />
          </CardHeader>
          <CardFooter>
            <figcaption className="text-[#1a1a1a] font-serif font-medium text-[20px] leading-[24.07px]">
              Linux
            </figcaption>
            <div className="w-full flex justify-end items-center mt-16">
              <small className="font-serif font-normal text-[16px] leading-[16px]">
                Continue
              </small>
              <IoIosArrowRoundForward size={15} className=" ml-1" />
            </div>
          </CardFooter>
        </Card>
        <Card className="w-[242px] h-[234px] rounded-sm mx-auto my-2 lg:hidden xl:block">
          <CardHeader className="p-0">
            <Image
              src={network}
              alt={"SDLC"}
              width={242}
              height={140}
              className="object-fill"
            />
          </CardHeader>
          <CardFooter>
            <figcaption className="text-[#1a1a1a] font-serif font-medium text-[20px] leading-[24.07px]">
              Networking
            </figcaption>
            <div className="w-full flex justify-end items-center mt-16">
              <small className="font-serif font-normal text-[16px] leading-[16px]">
                Continue
              </small>
              <IoIosArrowRoundForward size={15} className=" ml-1" />
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}

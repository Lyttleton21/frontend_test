import Image from "next/image";
import hand from "@/public/🦆 emoji _flexed biceps_.png";
export default function Welcome() {
  return (
    <div className="w-full h-full lg:flex lg:overflow-hidden">
      <div className="w-full p-6 lg:p-0 lg:self-center">
        <h3 className="font-serif text-2xl font-medium leading-8">
          Welcome Beatrice
        </h3>
        <small className="font-serif text-base font-normal leadind-[19.5px] xl:mr-1">
          Complete your course and take a step further👋
        </small>
      </div>
      <div className="hidden relative w-full h-full  lg:block">
        <div className="absolute z-50 right-[-20px] top-[-30px] w-[135.58px] h-[119.44px] rounded-lg bg-[#33CC99] rotate-45"></div>
        <div className="absolute z-0 right-[-85px] bottom-[-50px] w-[191.69px] h-[134.64px] rounded-lg bg-[#000066] rotate-45"></div>
      </div>
    </div>
  );
}

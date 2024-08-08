import { PieComponent } from "./PieComponent";

export default function Progress() {
  return (
    <div className="bg-[#ffffff] w-full h-[233px] rounded-[8px] p-4 mt-4 xl:h-[280px]">
      <h3 className="text-[#1A1A1A] text-[22px] leading-[26px] font-serif font-medium">
        Progress Report
      </h3>
      <PieComponent />
    </div>
  );
}

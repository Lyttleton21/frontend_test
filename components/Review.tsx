import Link from "next/link";
import { columns, Project } from "./columns";
import { review } from "@/data/review";
import { DataTable } from "./data-table";

function getData(): Project[] {
  return review;
}

export default function Review() {
  const data = getData();
  //   console.log(data);
  return (
    <div className="bg-[#FFFFFF] w-full h-[389px] rounded-lg p-4">
      <div className="flex justify-between">
        <div>
          <h3 className="text-[#1a1a1a] font-serif text-[22px] font-medium leading-[26.18px]">
            Project Review
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
      <DataTable columns={columns} data={data} />
    </div>
  );
}

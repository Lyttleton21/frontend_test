import Frame from "@/components/Frame";
import SideBar from "@/components/SideBar";
import { columns } from "@/app/grading/columns";
import { grading } from "@/data/granding";
import { DataTable } from "./data-table";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import UploadImageComponent from "@/components/uploadImage";
import { Button } from "@/components/ui/button";
import SubmitComponent from "@/components/SubmitComponent";
import SubmittedComponent from "@/components/SubmittedComponent";

type Grading = {
  Course_Title: string;
  Deadline: string;
  status: "Pending" | "Reviewed";
  Date_Subimmted: string;
  link: "View" | "Review";
};

function getData(): Grading[] {
  return grading;
}

export default function Grading() {
  const data = getData();
  return (
    <main className="w-full bg-slate-100 md:grid md:grid-cols-6 md:grid-rows-12">
      <aside className="hidden bg-[#000066] h-[1024px] md:block md:row-span-10 md:col-span-2  lg:col-span-1">
        <SideBar />
      </aside>

      <header className="h-[96px] bg-[#ffffff] w-full p-4 md:col-span-4 lg:col-span-5">
        <Frame />
      </header>

      <section className="md:col-span-4 md:row-span-6 lg:col-span-5">
        <div className="bg-[#FFFFFF] w-full h-full rounded-lg p-4">
          <DataTable columns={columns} data={data} />
        </div>
      </section>
    </main>
  );
}

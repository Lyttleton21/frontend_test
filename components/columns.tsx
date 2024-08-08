import { ColumnDef } from "@tanstack/react-table";

export type Project = {
  Course_Title: string;
  Deadline: string;
  status: "pending" | "Reviewed";
  Date_Subimmted: string;
  link: string;
};

export const columns: ColumnDef<Project>[] = [
  {
    accessorKey: "Course_Title",
    header: "Course Title",
  },
  {
    accessorKey: "Deadline",
    header: "Deadline",
  },
  {
    accessorKey: "Date_Subimmted",
    header: "Date Subimmted",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "link",
    header: "Link",
  },
];

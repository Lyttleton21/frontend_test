"use client";

import SubmitComponent from "@/components/SubmitComponent";
import SubmittedComponent from "@/components/SubmittedComponent";
import { createColumnHelper } from "@tanstack/react-table";

export type Grading = {
  Course_Title: string;
  Deadline: string;
  status: "Pending" | "Reviewed";
  Date_Subimmted: string;
  link: "View" | "Review";
};

const columnHelper = createColumnHelper<Grading>();

export const columns = [
  columnHelper.accessor("Course_Title", {
    header: () => <b>Course Title</b>,
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("Deadline", {
    header: () => <b>Deadline</b>,
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("Date_Subimmted", {
    header: () => <b>Date Subimmted</b>,
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("status", {
    header: () => <b>Status</b>,
    cell: (info) => (
      <i>
        {info.getValue() === "Pending" ? (
          <p className="text-[#EE7E00]">Pending</p>
        ) : (
          <p className="text-[#01A06B]">Reviewed</p>
        )}
      </i>
    ),
  }),
  columnHelper.accessor("link", {
    header: () => <b>Link</b>,
    cell: (info) => (
      <i>
        {info.getValue() === "Review" ? (
          <SubmitComponent />
        ) : (
          <SubmittedComponent />
        )}
      </i>
    ),
  }),
];

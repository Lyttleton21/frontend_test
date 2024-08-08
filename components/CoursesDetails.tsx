import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { IoBookOutline } from "react-icons/io5";

export default function CoursesDetails() {
  return (
    // <div className="lg:row-span-4 lg:col-span-3">
    <div className=" lg:flex lg:justify-between lg:items-center">
      <Card
        className={`border-t-green-300 border-t-8 my-2 lg:w-[250px] lg:h-[128px]`}
      >
        <CardHeader>
          <div className="flex justify-between items-center">
            <div className="xl:mr-6">
              <CardTitle>28</CardTitle>
              <CardDescription>Total Courses</CardDescription>
            </div>
            <div>
              <IoBookOutline size={32} className="text-[#000066]" />
            </div>
          </div>
        </CardHeader>
      </Card>
      <Card
        className={`border-t-[#000066] border-t-8 my-2 lg:w-[250px] lg:h-[128px]`}
      >
        <CardHeader>
          <div className="flex justify-between items-center">
            <div className="xl:mr-6">
              <CardTitle>10</CardTitle>
              <CardDescription>Completed Courses</CardDescription>
            </div>
            <div>
              <IoBookOutline size={32} className="text-[#000066]" />
            </div>
          </div>
        </CardHeader>
      </Card>
      <Card
        className={`border-t-[#cc3366] border-t-8 my-2 lg:w-[250px] lg:h-[128px]`}
      >
        <CardHeader>
          <div className="flex justify-between items-center">
            <div className="xl:mr-6">
              <CardTitle>9</CardTitle>
              <CardDescription>Completed Projects</CardDescription>
            </div>
            <div>
              <IoBookOutline size={32} className="text-[#000066]" />
            </div>
          </div>
        </CardHeader>
      </Card>
    </div>
    // </div>
  );
}

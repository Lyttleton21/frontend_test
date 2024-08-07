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
    <div className="lg:row-span-4 lg:col-span-3">
      <div className="py-2 lg:flex xl:justify-between xl:px:2">
        <Card className={`border-t-green-300 border-t-8 xl:px-6`}>
          <CardHeader>
            <div className="flex justify-around xl:px-3 ">
              <div className="xl:mr-6">
                <CardTitle>28</CardTitle>
                <CardDescription>Total Courses</CardDescription>
              </div>
              <div>
                <IoBookOutline size={32} />
              </div>
            </div>
          </CardHeader>
        </Card>
        <Card className={`border-t-[#000066] border-t-8 xl:px-6`}>
          <CardHeader>
            <div className="flex justify-around xl:px-3 ">
              <div className="xl:mr-6">
                <CardTitle>10</CardTitle>
                <CardDescription>Completed Courses</CardDescription>
              </div>
              <div>
                <IoBookOutline size={32} />
              </div>
            </div>
          </CardHeader>
        </Card>
        <Card className={`border-t-[#cc3366] border-t-8 xl:px-6`}>
          <CardHeader>
            <div className="flex justify-around xl:px-3 ">
              <div className="xl:mr-6">
                <CardTitle>9</CardTitle>
                <CardDescription>Completed Projects</CardDescription>
              </div>
              <div>
                <IoBookOutline size={32} />
              </div>
            </div>
          </CardHeader>
        </Card>
      </div>
    </div>
  );
}

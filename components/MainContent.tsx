import CoursesDetails from "./CoursesDetails";
import MyCourses from "./MyCourses";
import Welcome from "./Welcome";

export default function MainContent() {
  return (
    <div className="lg:col-span-3 xl:m-3">
      <div className="lg:grid lg:grid-cols-3 lg:p-2 xl:p-0">
        <div className="p-4 text-center bg-[#ffffff] lg:h-[133px] lg:text-left lg:col-span-3 lg:row-span-1 lg:rounded-lg lg:pl-6 lg:mb-2 xl:mb-0">
          <Welcome />
        </div>
        <div className=" lg:col-span-3 lg:mb-2 xl:mb-0">
          <CoursesDetails />
        </div>
        <div className="lg:col-span-3 lg:mb-2 xl:mb-0">
          <MyCourses />
        </div>
      </div>
    </div>
  );
}

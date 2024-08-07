import CoursesDetails from "./CoursesDetails";
import Welcome from "./Welcome";

export default function MainContent() {
  return (
    <div className="lg:col-span-3">
      <div className="lg:grid lg:grid-rows-12">
        <div className="p-4 text-center mt-[-20px] bg-[#ffffff] md:mt-0 md:h-[133px] lg:text-left lg:col-span-3 lg:row-span-3 lg:rounded-lg lg:pl-6">
          <Welcome />
        </div>
        <div className="lg:row-span-3 lg:col-span-3">
          <CoursesDetails />
        </div>
        <div className="lg:row-span-4 lg:col-span-3">My Course</div>
      </div>
    </div>
  );
}

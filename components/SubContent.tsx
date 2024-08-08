import Activity from "./Activity";
import Progress from "./ProgressComponent";

export default function SubContent() {
  return (
    <div className="hidden lg:block lg:col-span-1">
      <Activity />
      <div className="lg:row-span-5">
        <Progress />
      </div>
    </div>
  );
}

import MainContent from "./MainContent";
import SubContent from "./SubContent";

export default function Content() {
  return (
    <div className="md:mt-[-68px] lg:grid lg:grid-cols-4 lg:mt-[-10px] xl:mt-0">
      <MainContent />
      <SubContent />
    </div>
  );
}

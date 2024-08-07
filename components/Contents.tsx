import MainContent from "./MainContent";
import SubContent from "./SubContent";

export default function Content() {
  return (
    <div className="lg:grid lg:grid-cols-4 lg:gap-4">
      <MainContent />
      <SubContent />
    </div>
  );
}

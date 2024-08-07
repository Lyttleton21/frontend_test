import Welcome from "./Welcome";

export default function MainContent() {
  return (
    <div className="lg:col-span-3">
      <div className="lg:grid lg:grid-rows-12">
        <Welcome />
        <div className="lg:row-span-4">Course</div>
        <div className="lg:row-span-5">My Course</div>
      </div>
    </div>
  );
}

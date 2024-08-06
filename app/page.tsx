import Frame from "@/components/Frame";
import SideBar from "@/components/SideBar";

export default function Home() {
  return (
    <main className="grid grid-cols-6 grid-rows-12">
      <aside className="row-span-10 bg-[#000066] ">
        <SideBar />
      </aside>
      <header className="col-span-5 h-[96px]">
        <Frame />
      </header>
      <section className="col-span-5 row-span-11">This is a section</section>
    </main>
  );
}

import Content from "@/components/Contents";
import Frame from "@/components/Frame";
import SideBar from "@/components/SideBar";

export default function Home() {
  return (
    <main className="w-full bg-slate-100 md:grid md:grid-cols-6 md:grid-rows-12">
      <aside className="hidden bg-[#000066] h-[1024px] md:block md:row-span-10 md:col-span-2  lg:col-span-1">
        <SideBar />
      </aside>

      <header className="h-[96px] bg-[#ffffff] w-full p-4 md:col-span-4 lg:col-span-5">
        <Frame />
      </header>
      <section className="md:col-span-4 md:row-span-6 lg:col-span-5">
        <Content />
      </section>
      <section className="md:col-span-4 md:row-span-5 lg:col-span-5">
        Table Section
      </section>
    </main>
  );
}

import ProjectList from "@/components/projectList/projectList";

export default function Home() {
  return (
    <main className="h-full pt-[58px] ">
      <div className="flex flex-wrap gap-5 h-full flex-col">
        <div>
          <div>search</div>
          <div>order filter</div>
          <div>create new button</div>
        </div>
        <div>
          <ProjectList />
        </div>
      </div>
    </main>
  );
}

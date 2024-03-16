import ProjectList from "@/components/projectList/projectList";

export default function Home() {
  return (
    <main className="h-full pt-[58px] w-full flex flex-wrap justify-center bg-slate-100 dark:bg-slate-900">
      <div className="flex flex-wrap gap-5 h-full flex-col  w-9/12 pt-10">
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

import Sidebar from "@/components/sidebar/sidebar"

export default function Project() {
  //Show toast if created new
  return (
    <main className="h-full pt-[58px] bg-slate-100 dark:bg-slate-900">
      <div className="flex flex-wrap flex-row gap-5 h-full">
        <Sidebar />
        <div className="grow">main view</div>
      </div>
    </main>
  );
}

import Sidebar from "@/components/sidebar/sidebar"

export default function Home() {
  return (
    <main className="h-full pt-[58px]">
      <div className="flex flex-wrap flex-row gap-5 h-full">
        <Sidebar />
        <div className="grow">main view</div>
      </div>
    </main>
  );
}

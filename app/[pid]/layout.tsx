import Sidebar from "@/components/sidebar/sidebar"


export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <main className="h-full pt-[58px] bg-slate-100 dark:bg-slate-900">
    <div className="flex flex-wrap flex-row h-full">
      <Sidebar />
      <div className="grow">
        {children}
      </div>
    </div>
  </main>
}
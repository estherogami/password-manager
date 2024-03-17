import { GetProjectById } from "@/api/project_db";
import Sidebar from "@/components/sidebar/sidebar"
import { Skeleton } from "@/components/ui/skeleton";
import { Suspense } from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import Link from "next/link";
import { FiExternalLink } from "react-icons/fi";
import ProjectDropDown from "@/components/projectList/projectDropDown";
export default async function Project({ params }: { params: { pid: string } }) {
  const { pid } = params;
  //Show toast if created new
  const project = await GetProjectById(parseInt(pid));
  return (
    <main className="h-full pt-[58px] bg-slate-100 dark:bg-slate-900">
      <div className="flex flex-wrap flex-row gap-5 h-full">
        <Sidebar />
        <div className="grow">
          <Suspense fallback={<SkeletonHeader />}>
            <div className="flex">
              <div className="flex gap-5">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div>
                  <h1>{project?.title} </h1>
                  {project?.URI ? <a
                    href={project.URI}
                    target="_blank"
                    rel="nofollow noreferrer"
                    className="flex gap-3 truncate relative z-50 hover:underline ">
                    {project.URI} <FiExternalLink /></a> : <br />}
                  <Badge variant="secondary">Personal</Badge>
                </div>
              </div>
              <div>
                <ProjectDropDown />
              </div>
            </div>
          </Suspense>
          <div>credentials</div>
        </div>
      </div>
    </main>
  );
}

export function SkeletonHeader() {
  return (
    <div className="flex items-center space-x-4">
      <Skeleton className="h-12 w-12 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  )
}
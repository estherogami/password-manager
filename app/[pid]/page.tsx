import { GetProjectById } from "@/api/project_db";
import { Skeleton } from "@/components/ui/skeleton";
import { Suspense } from "react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button"
import ProjectHeader from "@/components/projectHeader/projectHeader";
import CredentialTabs from "@/components/credentialTabs/credentialTabs";



export default async function Project({ params }: { params: { pid: string } }) {
  const { pid } = params;
  //Show toast if created new
  const project = await GetProjectById(parseInt(pid));
  return (
    <>
      <Suspense fallback={<SkeletonHeader />}>
        {project && <ProjectHeader project={project} />}
      </Suspense>
      <Link href={`${pid}/builder`} className={buttonVariants({ variant: "default" })}>Edit credentials</Link>
      
      <CredentialTabs pid={parseInt(pid)} />
    </>
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
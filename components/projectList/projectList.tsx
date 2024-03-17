import { GetAllProjects } from "@/api/project_db"
import ProjectListCardItem from "./projectListCardItem";
import { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton"

async function ProjectList() {
    const projects = await GetAllProjects();
    return (

        <ul className="grid md:grid-cols-3 gap-5 ">
            <Suspense fallback={[1, 2, 3].map(el =>
                <SkeletonCard key={el} />)}
            >
                {projects.map((project) =>
                    <li key={project.id}>
                        <ProjectListCardItem project={project} />
                    </li>)}
                    </Suspense>
        </ul>

    )
}

export default ProjectList



export function SkeletonCard() {
    return (
        <div className="flex flex-col space-y-3">
            <Skeleton className="h-[125px] w-[250px] rounded-xl" />
            <div className="space-y-2">
                <Skeleton className="h-4 w-[250px]" />
                <Skeleton className="h-4 w-[200px]" />
            </div>
        </div>
    )
}
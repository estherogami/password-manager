import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/components/ui/avatar"
  import { Badge } from "@/components/ui/badge"
  import { FiExternalLink } from "react-icons/fi";
  import ProjectDropDown from "@/components/projectList/projectDropDown";
  import { Project } from '@prisma/client';

function ProjectHeader({project} : {project : Project}) {
  return (
    <div className="flex w-full  p-10 border-b  bg-slate-200  border-slate-300 dark:bg-slate-800 dark:border-slate-700">
              <div className="flex gap-5 w-full nowrap align-middle">
                <Avatar className="w-[70px] h-[70px]">
                  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className="grow">
                  <h1 className="text-3xl truncate">{project?.title} </h1>
                  {project?.URI ? <a
                    href={project.URI}
                    target="_blank"
                    rel="nofollow noreferrer"
                    className="flex gap-3 truncate relative z-50 hover:underline ">
                    {project.URI} <FiExternalLink /></a> : <br />}
                  <Badge variant="secondary">Personal</Badge>
                </div>
              </div>
              <div >
                <ProjectDropDown />
              </div>
            </div>
  )
}

export default ProjectHeader

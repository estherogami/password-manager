import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import { FiExternalLink } from "react-icons/fi";



//obtenemos el tipo directamente de prisma client
import { Project } from '@prisma/client';
import Link from "next/link";
import ProjectDropDown from "./projectDropDown";


function ProjectListCardItem({ project }: { project: Project }) {
    const {id, URI, title } = project

    return (
        <Card className="relative">
            <CardHeader className="flex flex-nowrap flex-row justify-between">
                <CardTitle className="truncate hover:underline">{title}</CardTitle>
                <ProjectDropDown />
            </CardHeader>
            <CardContent>
                <CardDescription>
                    {URI ? <a
                        href={URI}
                        target="_blank"
                        rel="nofollow noreferrer"
                        className="flex gap-3 truncate relative z-50 hover:underline ">
                        {project.URI} <FiExternalLink /></a> : <br />}
                </CardDescription>
                <p>nº credenciales</p>
            </CardContent>
            <CardFooter>
                <p>tag</p>
            </CardFooter>
            <Link href={`/${id}`} className="absolute z-1 block inset-0"></Link>
        </Card>
    )
}

export default ProjectListCardItem

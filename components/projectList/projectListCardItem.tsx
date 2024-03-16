import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Toggle } from "@/components/ui/toggle"
import { TiStarOutline } from "react-icons/ti";
import { IoIosMore } from "react-icons/io";
import { FiExternalLink } from "react-icons/fi";



//obtenemos el tipo directamente de prisma client
import { Project } from '@prisma/client';
import Link from "next/link";


function ProjectListCardItem({ project }: { project: Project }) {
    const {id, URI, title } = project

    return (
        <Link href={`/${id}`}>
        <Card>
            <CardHeader className="flex flex-nowrap flex-row justify-between">
                <CardTitle className="truncate hover:underline">{title}</CardTitle>
                <DropdownMenu>
                    <DropdownMenuTrigger><IoIosMore /></DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuItem><TiStarOutline /> Add favorite </DropdownMenuItem>
                        <DropdownMenuItem>Edit</DropdownMenuItem>
                        <DropdownMenuItem>Delete</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
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
        </Card>
        </Link>
    )
}

export default ProjectListCardItem

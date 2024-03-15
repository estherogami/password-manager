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


function ProjectListCardItem({ project }: { project: Project }) {
    return (
        <Card>
            <CardHeader className="flex flex-wrap flex-row justify-between">
                <div>
                    <CardTitle className="truncate">{project.title}</CardTitle>
                </div>

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
                    {project.URI ? <a href={project.URI} target="_blank" rel="nofollow noreferrer" className="flex gap-3 truncate">{project.URI} <FiExternalLink /></a>: <br />}
                </CardDescription>
                <p>nº credenciales</p>
            </CardContent>
            <CardFooter>
                <p>tag</p>
            </CardFooter>
        </Card>
    )
}

export default ProjectListCardItem

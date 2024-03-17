import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { TiStarOutline } from "react-icons/ti";
import { IoIosMore } from "react-icons/io";

function ProjectDropDown() {
    //Tiene que recibir id del proyecto
    return (
        <DropdownMenu>
            <DropdownMenuTrigger><IoIosMore /></DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuItem><TiStarOutline /> Add favorite </DropdownMenuItem>
                <DropdownMenuItem>Edit</DropdownMenuItem>
                <DropdownMenuItem>Delete</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default ProjectDropDown

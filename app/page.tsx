import ProjectList from "@/components/projectList/projectList";
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { IoAddCircle } from "react-icons/io5";
import { FaSortAlphaDown } from "react-icons/fa";
import { FaSortAlphaUp } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { MdOutlineDateRange } from "react-icons/md";
import { buttonVariants } from "@/components/ui/button"


import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from "next/link";

export default function Home() {
  return (
    <main className="h-full pt-[58px] w-full flex flex-wrap justify-center bg-slate-100 dark:bg-slate-900">
      <div className="flex flex-wrap gap-5 h-full flex-col  w-9/12 pt-10">
        <div className="flex flex-nowrap gap-3 flex-row">
          <div className="grow"> <Input type="text" placeholder="Search..." /></div>
           <div><DropdownMenu>
            <DropdownMenuTrigger className="flex gap-2">
            <Link className={`${buttonVariants({ variant: "outline" })} flex gap-2`} href="#" >Sort by <IoIosArrowDown /></Link> 
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem  className="flex gap-2">
                <MdOutlineDateRange /> Creation</DropdownMenuItem>
              <DropdownMenuItem  className="flex gap-2">
                <FaSortAlphaDown /> Asc</DropdownMenuItem>
              <DropdownMenuItem  className="flex gap-2">
                <FaSortAlphaUp /> Desc</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu></div> 
          <div><Button asChild><Link href="/new"  className="flex gap-1">Add new <IoAddCircle className=" h-4 w-4" /></Link></Button></div>
        </div>
          <div>
          <ProjectList />
        </div>  
      </div>
    </main>
  );
}




import { IoAddCircle } from "react-icons/io5";
import Search from "./search";
import Link from "next/link";



function Sidebar() {
    return (
        <aside className="flex flex-column flex-wrap overflow-auto h-full w-[20rem] border-r-2 gap-4 p-5">
            <Search />
            <div>
                <Link href="/new"><IoAddCircle className="h-8 w-8" /></Link>
            </div>
            <div>project list component</div>
        </aside>
    )
}

export default Sidebar

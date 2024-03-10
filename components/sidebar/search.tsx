import { Input } from "@/components/ui/input"
import { FaSearch } from "react-icons/fa";

function Search() {
    return (
        <div>
            <FaSearch />
            <Input type="text" placeholder="Search..." />
            <div>autocompletar</div>
        </div>
    )
}

export default Search

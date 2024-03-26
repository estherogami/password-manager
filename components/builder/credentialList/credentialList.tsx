import { getAllCredentialsByProjectId } from "@/api/credentials_db";
import useBuilder from "../hooks/useBuilder"

async function CredentialList({pid}: {pid:number}) {
    const credentials = await getAllCredentialsByProjectId(pid);

    console.log(credentials);
    return (
        <div className="flex items-center gap-4">
            <div className="flex flex-col space-y-1.5">
                draggable list of credentials here
            </div>
        </div>
    )
}

export default CredentialList

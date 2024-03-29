
import useBuilder from "../hooks/useBuilder"
import { Credentials } from "@prisma/client";

async function CredentialList({pid, credentials}: {pid:number, credentials: Credentials[] | null}) {
    console.log(credentials);
    //recibir handle selected function desde builder para pasar al hermano que info queremos mostrar en el sidebar 
    return (
        <div className="flex items-center gap-4">
                <ul className="flex flex-column flex-wrap gap-3 w-full">
                {credentials && credentials.map(credential => 
                <li key={credential.id}
                    className="p-5 w-full dark:bg-slate-800 bg-slate-200 rounded-md">
                    {credential.title}
                </li>)} 
                </ul>
        </div>
    )
}

export default CredentialList

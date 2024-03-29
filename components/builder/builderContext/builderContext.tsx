"use client"

import { createCredential, getAllCredentialsByProjectId } from "@/api/credentials_db";
import { CredentialField, Credentials } from "@prisma/client";
import { createContext, useState, ReactNode, useEffect, Dispatch, SetStateAction } from 'react';


interface CredentialsProviderProps {
    children: ReactNode;
}
export type BuilderContextType = {
    credentials: Credentials[];
    setCredentials: (Dispatch<SetStateAction<Credentials[] | null>>)
    setCredential: (title: string, pid: number) => void;
    getCredentials: (pid: number) => Promise<Credentials[]>
};

const BuilderContext = createContext<BuilderContextType | null>(
    null
//     {
//     //Default values
//     credentials: [],
//     setCredential: async (title: string, pid: number) => { },
//     getCredentials: async (pid: number) => {await []}
// }
);


export function BuilderProvider(props: CredentialsProviderProps) {
    const [credentials, setCredentials] = useState<Credentials[]>([])

    const context: BuilderContextType = {
        credentials,
        setCredentials,
        setCredential: setNewCredential,
        getCredentials: getAllCredentialsByProjectId
    }
   

    
    
    async function setNewCredential(title: string, pid: number){
      const credentialId = await createCredential(title, pid);
      const credentialList = await getAllCredentialsByProjectId(pid)
      //Retrieve new list from database and update state
      setCredentials(credentialList)
      return credentialId;
    }

    return <BuilderContext.Provider value={context}>{props.children}</BuilderContext.Provider>;

}
export default BuilderContext;
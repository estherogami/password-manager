"use client"

import { createCredential, getAllCredentialsByProjectId } from "@/api/credentials_db";
import { CredentialField, Credentials } from "@prisma/client";
import { createContext, useState, ReactNode } from 'react';


interface CredentialsProviderProps {
    children: ReactNode;
}
export type BuilderContextType = {
    credentials: Credentials[];
    setCredential: (title: string, pid: number) => void;
};

const BuilderContext = createContext<BuilderContextType | null>({
    //Default values
    credentials: [],
    setCredential: async (title: String, pid: number) => { },
});


export function BuilderProvider(props: CredentialsProviderProps) {
    const [credentials, setCredentials] = useState<Credentials[]>([])
    const context: BuilderContextType = {
        credentials,
        setCredential: setNewCredential
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
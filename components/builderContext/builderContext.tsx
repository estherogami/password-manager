import { CredentialField, Credentials } from "@prisma/client";
import { createContext, useState, ReactNode } from 'react';
import { createCredential, getAllCredentialsByProjectId } from "@/api/credentials_db";

interface CredentialsProviderProps {
    children: ReactNode;
}
export type CredentialsContextType = {
    credentials: Credentials[];
    getCredentials: (pid: number) => Promise<Credentials[]>
};

const CredentialsContext = createContext<CredentialsContextType | null>({
    //Default values
    credentials: [],
    getCredentials: async (pid: number) => { return [] },
});


export async function CredentialsProvider(props: CredentialsProviderProps) {
    const [credentials, setCredentials] = useState<Credentials[]>([])
    const context: CredentialsContextType = {
        credentials,
        getCredentials: getAllCredentialsByProjectId,
    }

    return <CredentialsContext.Provider value={context}>{props.children}</CredentialsContext.Provider>;

}
export default CredentialsContext;
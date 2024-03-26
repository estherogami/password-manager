
import Builder from "@/components/builder/builder/builder";
import Link from "next/link";
import { GoArrowLeft } from "react-icons/go";


async function BuilderPage({ params }: { params: { pid: string } }) {
    const { pid } = params;

    return (
            <div className="h-full p-5 bg-[url('/images/graph-paper.svg')]">
                <div className="flex justify-between flex-wrap h-[50px] w-full ">
                    <Link href={`/${pid}`} className=" items-center flex text-slate"><GoArrowLeft /> Go back</Link>
                </div>
               <Builder pid={parseInt(pid)} />
            </div>
    )
}

export default BuilderPage

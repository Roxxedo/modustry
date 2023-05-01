import { GenericInputPropsData } from "@/lib/types";
import { useRouter } from "next/router";
import Link from 'next/link'

export default function ModNavbar({ value }: GenericInputPropsData) {
    const router = useRouter()
    var state = { description: "", changelog: "", versions: "" }
    if (router.pathname == "/mod/[id]") { state.description = " active" }
    if (router.pathname == "/mod/[id]/changelog") { state.changelog = " active" }
    if (router.pathname == "/mod/[id]/versions") { state.versions = " active" }
    
    return (
        <>
            <div className='d-flex justify-content-center'>
                <ul className="nav nav-pills">
                    <li className="nav-item">
                        <Link href={"/mod/" + value.repo.split('/')[1]} className={"nav-link" + state.description}>Description</Link>
                    </li>
                    <li className="nav-item">
                        <Link href={"/mod/" + value.repo.split('/')[1] + "/changelog"} className={"nav-link" + state.changelog}>Changelog</Link>
                    </li>
                    <li className="nav-item">
                        <Link href={"/mod/" + value.repo.split('/')[1] + "/versions"} className={"nav-link" + state.versions}>Versions</Link>
                    </li>
                </ul>
            </div>
        </>
    )
}
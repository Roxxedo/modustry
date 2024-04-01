import { useRouter } from "next/router"
import Link from 'next/link'

export default function Navbar() {
    const router = useRouter()

    const toActive = (status: boolean) => { if (status) return "active"; else return "" }
    const isOnRote = (path: string) => { if (router.asPath == path) return true; else return false }

    var value = [
        { path: "/mod/[id]", name: "Description" },
        { path: "/mod/[id]/changelog", name: "Changelog" },
        { path: "/mod/[id]/versions", name: "Versions" }
    ]

    const isActive = (path: string) => { if (router.pathname == path) return "active"; else return "" }

    console.log(router.asPath)

    return (
        <>
            <div className="container p-0">
                <header className="d-flex align-items-center justify-content-center py-2 mb-2 mt-2">
                    <ul className="nav col-12 col-md-auto justify-content-center">
                        {value.map((value) => (
                            <li>
                                <a href={value.path.replace('[id]', router.asPath.split('/')[2])} className={"nav-link px-2 link-secondary " + isActive(value.path)}>{value.name}</a>
                            </li>
                        ))}
                    </ul>
                </header>
            </div>
        </>
    )
}
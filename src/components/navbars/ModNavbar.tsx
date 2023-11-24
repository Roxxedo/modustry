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
            <header className="navbar">
                <ul>
                    {value.map((value, index, array) => (
                        <>
                            <li>
                                <Link href={value.path.replace('[id]', router.asPath.split('/')[2])} className={isActive(value.path)}>{value.name}</Link>
                            </li>
                        </>
                    ))}
                </ul>
            </header>
        </>
    )
}
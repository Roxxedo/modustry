import { useRouter } from "next/router"
import Link from 'next/link'
import { GenericInputPropsNavbar } from "@/lib/types"

export default function Navbar() {
    const router = useRouter()

    const toActive = (status: boolean) => { if (status) return "active"; else return "" }
    const isOnRote = (path: string) => { if (router.asPath == path) return true; else return false }

    var value = { 
        1: { path: "/mods",     name: "Mods",     active: isOnRote("/mods") }, 
        2: { path: "/modpacks", name: "Modpacks", active: isOnRote("/modpacks") }, 
        3: { path: "/textures", name: "Textures", active: isOnRote("/textures") }
    }

    return (
        <>
            <header className="d-flex justify-content-center py-3 newcolor">
                <ul className="nav nav-pills">
                    <li className="nav-item">
                        <Link href={value[1].path} className={"nav-link " + toActive(value[1].active)}>{value[1].name}</Link>
                    </li>
                    <li className="nav-item">
                        <Link href={value[2].path} className={"nav-link disabled text-muted" + toActive(value[2].active)}>{value[2].name}</Link>
                    </li>
                    <li className="nav-item">
                        <Link href={value[3].path} className={"nav-link " + toActive(value[3].active)}>{value[3].name}</Link>
                    </li>
                </ul>
            </header>
        </>
    )
}
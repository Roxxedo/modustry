import { useRouter } from "next/router"
import Link from 'next/link'

export default function Navbar() {
    const router = useRouter()
    var state = { mods: "", modpacks: "", textures: "" }
    if (router.pathname == "/mods") { state.mods = " active" }
    if (router.pathname == "/modpacks") { state.modpacks = " active" }
    if (router.pathname == "/textures") { state.textures = " active" }

    return (
        <>
            <header className="d-flex justify-content-center py-3 newcolor">
                <ul className="nav nav-pills">
                    <li className="nav-item">
                        <Link href="/mods" className={"nav-link" + state.mods}>Mods</Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/modpacks" className={"nav-link" + state.modpacks}>Modpacks</Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/textures" className={"nav-link" + state.textures}>Textures</Link>
                    </li>
                </ul>
            </header>
        </>
    )
}
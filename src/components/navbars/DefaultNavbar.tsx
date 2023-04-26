import { useRouter } from "next/router"

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
                    <li className="nav-item"><a href="/mods" className={"nav-link" + state.mods}>Mods</a></li>
                    <li className="nav-item"><a href="/modpacks" className={"nav-link" + state.modpacks}>Modpacks</a></li>
                    <li className="nav-item"><a href="/textures" className={"nav-link" + state.textures}>Texture Packs</a></li>
                </ul>
            </header>
        </>
    )
}
import { useRouter } from "next/router"
import Link from 'next/link'

export default function Navbar() {
    const router = useRouter()

    const toActive = (status: boolean) => { if (status) return "active"; else return "" }
    const isOnRote = (path: string) => { if (router.asPath == path) return true; else return false }

    var value = [
        { path: "/mods", name: "Mods" },
        //      { path: "/modpacks", name: "Modpacks" },
        { path: "/textures", name: "Textures" },
        { path: "/servers", name: "Servers" }
    ]

    const isActive = (path: string) => { if (router.asPath == path) return "active"; else return "" }

    return (
        <>
            <div className="container p-0">
                <header className="d-flex align-items-center justify-content-center justify-content-md-between py-2 mb-4 mt-2">
                    <div className="col-md-3">
                        <h4 className="d-inline-flex link-body-emphasis m-0">
                            <a href="/" className="text-decoration-none">
                                Modustry
                            </a>
                        </h4>
                    </div>

                    <ul className="nav col-12 col-md-auto justify-content-center">
                        {value.map((value) => (
                            <li>
                                <a href={value.path} className={"nav-link px-2 link-secondary " + isActive(value.path)}>{value.name}</a>
                            </li>
                        ))}
                    </ul>

                    {/* Coming Soon Feature */}
                    <div className="col-md-3 text-end">
                        <button type="button" className="btn btn-outline-primary me-2 d-none">Login</button>
                    </div>
                </header>
            </div>
        </>
    )
}
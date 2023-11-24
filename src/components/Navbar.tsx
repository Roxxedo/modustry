import { useRouter } from "next/router"
import Link from 'next/link'

export default function Navbar() {
    const router = useRouter()

    const toActive = (status: boolean) => { if (status) return "active"; else return "" }
    const isOnRote = (path: string) => { if (router.asPath == path) return true; else return false }

    var value = [
        { path: "/mods", name: "Mods" },
        { path: "/modpacks", name: "Modpacks" },
        { path: "/textures", name: "Textures" }
    ]

    const isActive = (path: string) => { if (router.asPath == path) return "active"; else return "" }

    return (
        <>
            <header className="navbar">
                {/* <img width={100} height={48} src={"/modustry.jpg"} /> */}
                <div><a href="/">Modustry</a></div>
                <ul>
                    {value.map((value, index, array) => (
                        <>
                            <li>
                                <Link href={value.path} className={isActive(value.path)}>{value.name}</Link>
                            </li>
                        </>
                    ))}
                </ul>
                <button>Sign In</button>
            </header>
        </>
    )
}
export default function Footer() {
    return (
        <>
            <div className="container">
                <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5">
                    <div className="col mb-3">
                        <p>Modustry © 2023 - 2024</p>
                        <small>BETA v0.1.0</small>
                    </div>

                    <div className="col mb-3" />

                    <div className="col mb-3">
                        <h5>Content</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><a href={process.env.API_URL + "/"} className="nav-link p-0">Home</a></li>
                            <li className="nav-item mb-2"><a href={process.env.API_URL + "/mods"} className="nav-link p-0">Mods</a></li>
                            <li className="nav-item mb-2"><a href={process.env.API_URL + "/textures"} className="nav-link p-0">Textures</a></li>
                            <li className="nav-item mb-2"><a href={process.env.API_URL + "/servers"} className="nav-link p-0">Servers</a></li>
                        </ul>
                    </div>

                    <div className="col mb-3">
                        <h5>Resources</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 disabled">Docs</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 disabled">Status</a></li>
                            <li className="nav-item mb-2"><a href="https://github.com/roxcom-br/modustry" className="nav-link p-0">Github</a></li>
                            <li className="nav-item mb-2"><a href="https://discord.gg/mXuJZV85c3" className="nav-link p-0">Discord</a></li>
                        </ul>
                    </div>

                    <div className="col mb-3">
                        <h5>Mindustry</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><a href="https://github.com/Anuken/Mindustry" className="nav-link p-0">Github</a></li>
                            <li className="nav-item mb-2"><a href="https://discord.gg/mindustry" className="nav-link p-0">Discord</a></li>
                            <li className="nav-item mb-2"><a href="https://mindustrygame.github.io" className="nav-link p-0">Website</a></li>
                        </ul>
                    </div>
                </footer>
            </div>
        </>
    )
}
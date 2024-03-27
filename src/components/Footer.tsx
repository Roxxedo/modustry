export default function Footer() {
    return (
        <>
            <div className="bottom-0 bg-26292f">
                <div className="container">
                  <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 text-white">
                    <div className="col mb-3">
                      <p className="text-white">Modustry © 2023 - 2024</p>
                      <small>BETA v0.1.0</small>
                    </div>

                    <div className="col mb-3">

                    </div>

                    <div className="col mb-3">
                      <h5>Content</h5>
                      <ul className="nav flex-column">
                        <li className="nav-item mb-2"><a href={process.env.API_URL + ""} className="nav-link p-0 text-white">Home</a></li>
                        <li className="nav-item mb-2"><a href={process.env.API_URL + "/mods"} className="nav-link p-0 text-white">Mods</a></li>
                        <li className="nav-item mb-2"><a href={process.env.API_URL + "/modpacks"} className="nav-link p-0 text-white">Modpacks</a></li>
                        <li className="nav-item mb-2"><a href={process.env.API_URL + "/textures"} className="nav-link p-0 text-white">Textures</a></li>
                      </ul>
                    </div>

                    <div className="col mb-3">
                      <h5>Resources</h5>
                      <ul className="nav flex-column">
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white disabled">Blog</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white disabled">Docs</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white disabled">Status</a></li>
                        <li className="nav-item mb-2"><a href="https://github.com/roxcom-br/modustry" className="nav-link p-0 text-white">Github</a></li>
                      </ul>
                    </div>

                    <div className="col mb-3">
                      <h5>Mindustry</h5>
                      <ul className="nav flex-column">
                        <li className="nav-item mb-2"><a href="https://mindustrygame.github.io" className="nav-link p-0 text-white">Website</a></li>
                        <li className="nav-item mb-2"><a href="https://discord.gg/mindustry" className="nav-link p-0 text-white">Discord</a></li>
                        <li className="nav-item mb-2"><a href="https://github.com/Anuken/Mindustry" className="nav-link p-0 text-white">Github</a></li>
                      </ul>
                    </div>
                  </footer>
                </div>
            </div>
        </>
    )
}
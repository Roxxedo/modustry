export default function Footer() {
    return (
        <>
            <div className="bottom-0 bg-26292f">
                <div className="container">
                  <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 text-white">
                    <div className="col mb-3">
                      <p className="text-white">Modustry © 2023</p>
                    </div>

                    <div className="col mb-3">

                    </div>

                    <div className="col mb-3">
                      <h5>Content</h5>
                      <ul className="nav flex-column">
                        <li className="nav-item mb-2"><a href={process.env.API_URL + ""} className="nav-link p-0 text-body-secondary">Home</a></li>
                        <li className="nav-item mb-2"><a href={process.env.API_URL + "/mods"} className="nav-link p-0 text-body-secondary">Mods</a></li>
                        <li className="nav-item mb-2"><a href={process.env.API_URL + "/modpacks"} className="nav-link p-0 text-body-secondary">Modpacks</a></li>
                        <li className="nav-item mb-2"><a href={process.env.API_URL + "/textures"} className="nav-link p-0 text-body-secondary">Textures</a></li>
                      </ul>
                    </div>

                    <div className="col mb-3">
                      <h5>Resources</h5>
                      <ul className="nav flex-column">
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary disabled">Blog</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary disabled">Docs</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary disabled">Status</a></li>
                        <li className="nav-item mb-2"><a href="https://github.com/Roxxedo/modustry" className="nav-link p-0 text-body-secondary">Github</a></li>
                      </ul>
                    </div>

                    <div className="col mb-3">
                      <h5>Mindustry</h5>
                      <ul className="nav flex-column">
                        <li className="nav-item mb-2"><a href="https://mindustrygame.github.io" className="nav-link p-0 text-body-secondary">Website</a></li>
                        <li className="nav-item mb-2"><a href="https://discord.gg/mindustry" className="nav-link p-0 text-body-secondary">Discord</a></li>
                        <li className="nav-item mb-2"><a href="https://github.com/Anuken/Mindustry" className="nav-link p-0 text-body-secondary">Github</a></li>
                      </ul>
                    </div>
                  </footer>
                </div>
            </div>
        </>
    )
}
import Head from '@/components/Head'

export default function Home() {
    return (
        <>
            <Head />
            <main className='main bg-dark text-white'>
                <div className="container">
                    <header className="d-flex justify-content-center py-3 newcolor">
                        <ul className="nav nav-pills">
                            <li className="nav-item"><a href="/mods" className="nav-link">Mods</a></li>
                            <li className="nav-item"><a href="/modpacks" className="nav-link active">Modpacks</a></li>
                            <li className="nav-item"><a href="/textures" className="nav-link">Texture Packs</a></li>
                        </ul>
                    </header>
                    <section>
                        <h1>Modpacks are not <br/> yet available</h1>
                        <h2>Sorry!</h2>                        
                    </section>
                </div>
            </main>
        </>
    )
}
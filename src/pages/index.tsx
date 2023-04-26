import Head from '@/components/Head'
import Navbar from '@/components/navbars/DefaultNavbar'

export default function Home() {
    return (
        <>
            <Head />
            <main className='main bg-dark text-white'>
                <div className="container">
                    <Navbar />
                    <section>
                        <h1>The place for Mindustry</h1>
                        <h1>Mods</h1>
                        <h2> Discover, play, and share Mindustry content through our open-
                        <br />source platform built for the community. </h2>
                    </section>
                </div>
            </main>
        </>
    )
}

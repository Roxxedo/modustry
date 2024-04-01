import Head from '@/components/Head'
import Navbar from '@/components/Navbar'

export default function Home() {
    return (
        <>
            <Head title='Modustry' description='The place for Mindustry Mods. Discover, play, and share Mindustry content through our open-source platform built for the community.' />
            <main className='shadow'>
                <Navbar />
                <section className='container main-text text-center'>
                    <div>
                        <h1>The place for Mindustry <br /> Mods</h1>
                        <h2 className='center mb-4'> Discover, play, and share Mindustry content through our open-
                            <br />source platform built for the community. </h2>
                        <a className='btn' href='/mods/'>Discover Mods</a>
                    </div>
                </section>
            </main>
        </>
    )
}

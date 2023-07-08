import Head from '@/components/Head'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function Home() {

    return (
        <>
            <Head title='Modustry' description='' />
            <main className='main text-white shadow'>
                <Navbar />
                <div className="container">
                    <section className='text-center'>
                        <h1>The place for Mindustry <br/> Mods</h1>
                        <h2 className='center mb-4'> Discover, play, and share Mindustry content through our open-
                        <br />source platform built for the community. </h2>
                        <a className='btn c-e5b276' href='/mods/'>Discover Mods</a>
                    </section>
                </div>
            </main>
            <Footer />
        </>
    )
}

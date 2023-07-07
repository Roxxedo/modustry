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
                    <div className='text-center'>
                        <a className='btn c-e5b276-disabled disabled mb-3 px-4 py-2' style={{borderRadius: '25px'}}>For Players</a>
                        <h2 className='text-center center'>Discover over 10,000 creations <br/> From magical biomes to cursed dungeons, you can be sure to find <br/> content to bring your gameplay to the next level.</h2>
                    </div>
                    <div className='col py-5' />
                    <section className='pt-5'>
                        <div className="row pb-5">
                          <div className="col d-flex flex-column position-static">
                            <h3 className="mb-4">Find what you want, quickly and easily</h3>
                          </div>
                          <div className="col-auto d-none d-lg-block">
                            <svg className="rounded-3 bd-placeholder-img" width="500" height="350" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
                          </div>
                        </div>
                        <div className='col py-5' />
                        <div className="row py-5">
                          <div className="col-auto d-none d-lg-block">
                            <svg className="rounded-3 bd-placeholder-img" width="500" height="350" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
                          </div>
                          <div className="col d-flex flex-column position-static">
                            <h3 className="mb-0">Follow projects you love</h3>
                          </div>
                        </div>
                        <div className='col py-5' />
                        <div className="row pt-5">
                          <div className="col d-flex flex-column position-static">
                            <h3 className="mb-0">Find what you want, quickly and easily</h3>
                          </div>
                          <div className="col-auto d-none d-lg-block">
                            <svg className="rounded-3 bd-placeholder-img" width="500" height="350" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
                          </div>
                        </div>
                    </section>
                    <div className='text-center'>
                        <a className='btn c-e5b276-disabled disabled mb-3 px-4 py-2' style={{borderRadius: '25px'}}>For Developers</a>
                    </div>
                    <section className='py-5'>
                        <div className="row pb-5">
                          <div className="col-auto d-none d-lg-block">
                            <svg className="rounded-3 bd-placeholder-img" width="500" height="350" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
                          </div>
                          <div className="col d-flex flex-column position-static">
                            <h3 className="mb-0">Find what you want, quickly and easily</h3>
                          </div>
                        </div>
                        <div className='col py-5' />
                        <div className="row py-5">
                          <div className="col d-flex flex-column position-static">
                            <h3 className="mb-0">Find what you want, quickly and easily</h3>
                          </div>
                          <div className="col-auto d-none d-lg-block">
                            <svg className="rounded-3 bd-placeholder-img" width="500" height="350" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
                          </div>
                        </div>
                        <div className='col py-5' />
                        <div className="row py-5">
                          <div className="col-auto d-none d-lg-block">
                            <svg className="rounded-3 bd-placeholder-img" width="500" height="350" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
                          </div>
                          <div className="col d-flex flex-column position-static">
                            <h3 className="mb-0">Find what you want, quickly and easily</h3>
                          </div>
                        </div>
                    </section>
                </div>
            </main>
            <Footer />
        </>
    )
}

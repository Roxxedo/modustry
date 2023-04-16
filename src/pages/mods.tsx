import Head from '@/components/Head'
import { getProps } from '@/lib/mods'
import { Data } from '@/lib/types'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const props = getProps(ctx)
    return { props }
}

export default function Mods({ data, index }: InferGetServerSidePropsType<typeof getServerSideProps>) {
    return (
        <>
            <Head />
            <main className='mainmods bg-dark text-white'>
                <div className="container">
                    <header className="d-flex justify-content-center py-3 newcolor">
                        <ul className="nav nav-pills">
                            <li className="nav-item"><a href="/mods" className="nav-link active">Mods</a></li>
                            <li className="nav-item"><a href="/modpacks" className="nav-link">Modpacks</a></li>
                            <li className="nav-item"><a href="/textures" className="nav-link">Texture Packs</a></li>
                        </ul>
                    </header>
                    <section>
                        <div className="list-group list-group-flush border-bottom scrollarea">
                            <div className="input-group rounded">
                                <form className='rounded w-100 pb-2'>
                                    <input type="search" className="form-control rounded bg-dark text-white" name="q" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
                                </form>
                            </div>
                            {data.map((value: Data, _index: number, _array: Data[]) => (
                                <>
                                    <a href={'/mod/' + value.name} className="list-group-item list-group-item-action py-3 lh-sm bg-dark text-white border-white" aria-current="true">
                                        <div className="d-flex w-100 align-items-center justify-content-between">
                                            <strong className="mb-1">{value.name}</strong>
                                        </div>
                                        <div className="col-10 mb-1 small text-muted"> <span> Stars: {value.stars} | Game Version: {value.minGameVersion} | Author: {value.author} </span></div>
                                        <div className="col-10 mb-1 small">{value.description}</div>
                                    </a>
                                </>
                            ))}
                        </div>
                        <nav className='mt-4'>
                          <ul className="pagination justify-content-center">
                            <li className="page-item">
                              <a id="back-button" className="page-link bg-dark text-white" href={'?page=' + (parseInt(index) - 1)}>Back</a>
                            </li>
                            <li className="page-item disabled "><a className="page-link bg-dark text-muted" href="#">{index}</a></li>
                            <li className="page-item">
                              <a className="page-link bg-dark text-white" href={'?page=' + (parseInt(index) + 1)}>Next</a>
                            </li>
                          </ul>
                        </nav>
                    </section>
                </div>
            </main>
        </>
    )
}

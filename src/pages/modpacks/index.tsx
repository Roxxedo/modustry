import Head from '@/components/Head'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { getProps } from '@/lib/modpacks'
import { Data } from '@/lib/types'

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
                            <li className="nav-item"><a href="/mods" className="nav-link" >Mods</a></li>
                            <li className="nav-item"><a href="/modpacks" className="nav-link active">Modpacks</a></li>
                            <li className="nav-item"><a href="/textures" className="nav-link">Texture Packs</a></li>
                        </ul>
                    </header>
                    <section>
                        <div className="list-group list-group-flush border-bottom scrollarea">
                            {data.map((value: Data, index: number, array: Data[]) => (
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
                    </section>
                </div>
            </main>
        </>
    )
}

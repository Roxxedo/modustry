import Head from '@/components/Head'
import PagesNavbar from '@/components/PagesNavbar'
import { getProps } from '@/lib/mods'
import { Data } from '@/lib/types'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import ListElement from '@/components/ListElement'
import SearchBar from '@/components/SearchBar'
import Navbar from '@/components/navbars/DefaultNavbar'

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
                    <Navbar />
                    <section>
                        <div className="list-group list-group-flush scrollarea">
                            <SearchBar />
                            {data.map((value: Data, _index: number, _array: Data[]) => (
                                <>
                                    <ListElement value={value} />
                                </>
                            ))}
                        </div>
                        <PagesNavbar value={index} />
                    </section>
                </div>
            </main>
        </>
    )
}

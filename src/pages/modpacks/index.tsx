import Head from '@/components/Head'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { getProps } from '@/lib/modpacks'
import { Data } from '@/lib/types'
import ListElement from '@/components/ListElement'
import PagesNavbar from '@/components/PagesNavbar'
import SearchBar from '@/components/SearchBar'
import Navbar from '@/components/navbars/DefaultNavbar'

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const props = getProps(ctx)
    return { props }
}

export default function Modpacks({ data, index }: InferGetServerSidePropsType<typeof getServerSideProps>) {
    return (
        <>
            <Head />
            <main className='mainmods bg-dark text-white'>
                <div className="container">
                    <Navbar />
                    <section>
                        <SearchBar />
                        <div className="list-group list-group-flush scrollarea">
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

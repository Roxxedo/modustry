import Head from '@/components/Head'
import ListElement from '@/components/mod/ChangelogListElement'
import ModInfo from '@/components/mod/ModInfo'
import Navbar from '@/components/navbars/DefaultNavbar'
import ModNavbar from '@/components/navbars/ModNavbar'
import { getProps } from '@/lib/mod/changelog'
import { Github } from '@/lib/types'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'

export const getServerSideProps: GetServerSideProps = async (context) => {
    const props = getProps(context)
    return { props }
}

export default function Changelog({ gjson, data }: InferGetServerSidePropsType<typeof getServerSideProps>) {
    return (
        <>
            <Head />
            <main className='modsmain bg-dark text-white'>
                <div className="container">
                    <Navbar />
                    <section>
                        <ModInfo value={data} />
                        <ModNavbar value={data} />
                        <div className="list-group list-group-flush scrollarea">
                            {gjson.map((value: Github, _index: number, _array: Github[]) => (
                                <>
                                    <ListElement value={value} />
                                </>
                            ))}
                        </div>
                    </section>
                </div>
            </main>
        </>
    )
}

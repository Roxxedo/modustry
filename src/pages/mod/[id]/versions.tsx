import Head from '@/components/Head'
import { getProps } from '@/lib/mod/versions'
import { Data, Github, GithubAssets } from '@/lib/types'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import styles from '@/styles/Home.module.css'
import ListElement from '@/components/mod/VersionsListElement'
import ModNavbar from '@/components/navbars/ModNavbar'
import ModInfo from '@/components/mod/ModInfo'
import Navbar from '@/components/navbars/DefaultNavbar'

export const getServerSideProps: GetServerSideProps = async (context) => {
    const props = getProps(context)
    return { props }
}

export default function Versions({ gjson, data }: InferGetServerSidePropsType<typeof getServerSideProps>) {
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

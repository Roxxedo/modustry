import Head from '@/components/Head'
import { getProps } from '@/lib/mod/versions'
import { Data, GithubRelease, GithubReleaseAssets } from '@/lib/types'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import styles from '@/styles/Home.module.css'
import ListElement from '@/components/mod/VersionsListElement'
import ModNavbar from '@/components/navbars/ModNavbar'
import ModInfo from '@/components/mod/ModInfo'
import Navbar from '@/components/Navbar'

export const getServerSideProps: GetServerSideProps = async (context) => {
    const props = getProps(context)
    return { props }
}

export default function Versions({ gjson, data }: InferGetServerSidePropsType<typeof getServerSideProps>) {
    return (
        <>
            <Head title={data.name + ' - Modustry'} description={''} />
            <main className='modsmain text-white'>
                <div className="container">
                    <Navbar />
                    <section>
                        <ModInfo value={data} />
                        <ModNavbar value={data} />
                        <div className="list-group list-group-flush scrollarea">
                                {gjson.map((value: GithubRelease, _index: number, _array: GithubRelease[]) => (
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

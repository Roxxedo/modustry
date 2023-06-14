import { GetServerSideProps, InferGetServerSidePropsType } from "next"
import getProps from '@/lib/default'

import CustomHead from "@/components/Head"
import Navbar from '@/components/Navbar'
import ModInfo from "@/components/mod/ModInfo"
import ModNavbar from "@/components/navbars/ModNavbar"
import ListElement from "@/components/mod/ChangelogListElement"
import { GithubRelease } from "@/lib/types"

export const getServerSideProps: GetServerSideProps = async (context) => {
    return { props: await getProps(context) }
}

export default function Changelog({ gjson, data }: InferGetServerSidePropsType<typeof getServerSideProps>) {
    return (
        <>
            <CustomHead title='' description='' />
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

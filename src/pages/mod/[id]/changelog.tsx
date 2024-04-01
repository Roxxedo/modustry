import { GetServerSideProps, InferGetServerSidePropsType } from "next"
import { getProps } from '@/lib/mod/changelog'

import Head from "@/components/Head"
import Navbar from '@/components/Navbar'
import ModInfo from "@/components/mod/ModInfo"
import ModNavbar from "@/components/navbars/ModNavbar"
import ListElement from "@/components/lists/ChangelogListElement"
import { GithubRelease } from "@/lib/types"
import { getAllDownloads, getPublishedDate, getUpdatedDate } from "@/lib/utils"

export const getServerSideProps: GetServerSideProps = async (context) => {
    return { props: await getProps(context) }
}

export default function Changelog({ githubData, data }: InferGetServerSidePropsType<typeof getServerSideProps>) {
    return (
        <>
            <Head title={data.name + ' - Modustry'} description='' />
            <main className="shadow">
                <Navbar />
                <section className="container p-0 pb-4">
                    <ModInfo 
                        value={data} 
                        allDownloadsCount={getAllDownloads(githubData)} 
                        updatedDate={getUpdatedDate(githubData)} 
                        publishedDate={getPublishedDate(githubData)} 
                    />
                    <div className="details">
                        <ModNavbar />
                        <div className="list-group list-group-flush scrollarea">
                            {githubData.map((value: GithubRelease, _index: number, _array: GithubRelease[]) => (
                                <>
                                    <ListElement value={value} />
                                </>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

import Head from '@/components/Head'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { getProps } from '@/lib/mod/mod'
import ModNavbar from '@/components/navbars/ModNavbar'
import ModInfo from '@/components/mod/ModInfo'
import Markdown from '@/components/Markdown'
import Navbar from '@/components/Navbar'

export const getServerSideProps: GetServerSideProps = async (context) => {
    const props = getProps(context)
    return { props }
}

export default function Mod({ data, readme, allDownloadsCount, updatedDate, publishedDate }: InferGetServerSidePropsType<typeof getServerSideProps>) {
    return (
        <>
            <Head title={data.name + ' - Modustry'} description={''} />
            <main className='shadow'>
                <Navbar />
                <section className='container p-0 pb-4'>
                    <ModInfo value={data} allDownloadsCount={allDownloadsCount} updatedDate={updatedDate} publishedDate={publishedDate} />
                    <ModNavbar />
                    <div className='d-flex markdown'>
                        <Markdown value={readme} />
                    </div>
                </section>
            </main>
        </>
    )
}

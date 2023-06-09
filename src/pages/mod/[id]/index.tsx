import Head from '@/components/Head'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { getProps } from '@/lib/mod'
import ModNavbar from '@/components/navbars/ModNavbar'
import ModInfo from '@/components/mod/ModInfo'
import Markdown from '@/components/Markdown'
import Navbar from '@/components/Navbar'

export const getServerSideProps: GetServerSideProps = async (context) => {
    const props = getProps(context)
    return { props }
}

export default function Mod({ data, readme }: InferGetServerSidePropsType<typeof getServerSideProps>) {
    return (
        <>
            <Head title={data.name + ' - Modustry'} description={''} />
            <main className='modsmain text-white'>
                <div className="container">
                    <Navbar />
                    <section>
                        <ModInfo value={data} />
                        <ModNavbar value={data}/>
                        <Markdown value={readme} />
                    </section>
                </div>
            </main>
        </>
    )
}

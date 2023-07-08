import Head from '@/components/Head'
import Navbar from '@/components/Navbar';
import Markdown from '@/components/Markdown';
import { getProps } from '@/lib/about'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const props = getProps(ctx);
    return { props }
}

export default function About({ readme }: InferGetServerSidePropsType<typeof getServerSideProps>) {
    return (
        <>
            <Head title='About - Modustry' description='' />
            <main className='main text-white'>
                <div className="container">
                    <Navbar />
                    <section>
                        <Markdown value={readme} />
                    </section>
                </div>
            </main>
        </>
    )
}

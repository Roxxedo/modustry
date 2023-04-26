import Head from '@/components/Head'
import Navbar from '@/components/navbars/DefaultNavbar';
import Markdown from '@/components/utils/Markdown';
import { getProps } from '@/lib/about'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'

export const getServerSideProps: GetServerSideProps = async (context) => {
    const props = getProps(context);
    return { props }
}

export default function About({ readme }: InferGetServerSidePropsType<typeof getServerSideProps>) {
    return (
        <>
            <Head />
            <main className='main bg-dark text-white'>
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

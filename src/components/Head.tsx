import { GenericHeadPropsData } from '@/lib/types'
import Head from 'next/head'
import Script from 'next/script'

export default function CustomHead({ title, description }: GenericHeadPropsData) {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="theme-color" content="#e5b276" data-react-helmet="true" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
        </>
    )
}
import Head from 'next/head'

export default function MyHead() {
    return (
        <>
            <Head>
                <title>Modustry</title>
                <meta name="description" content="The place for Mindustry mods!" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="theme-color" content="#e5b276" data-react-helmet="true"  />
                <link rel="icon" href="/favicon.ico" />
            </Head>
        </>
    )
}
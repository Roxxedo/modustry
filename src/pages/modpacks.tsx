import CustomHead from "@/components/Head"
import Footer from "@/components/Footer"
import getProps from "@/lib/default"
import { Data } from "@/lib/types"
import { sliceIntoChunks } from "@/lib/utils"
import { GetServerSideProps, InferGetServerSidePropsType } from "next"
import { useCallback, useEffect, useState } from "react"
import Navbar from "@/components/Navbar"
import ListElement from "@/components/ListElement"
import { query as querySearch } from "@/lib/api/query"
import { modpackFilter } from "@/lib/filter"

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const props = getProps(ctx)
    return { props }
}

export default function Mods({ data, pageIndex, limit }: InferGetServerSidePropsType<typeof getServerSideProps>) {
    const [pages, setPages] = useState<Data[][]>(sliceIntoChunks(modpackFilter(data), limit))
    const [index, setIndex] = useState(1)
    const [query, setQuery] = useState('')
    const [results, setResults] = useState<Data[]>(pages[(index - 1)])

    const nextPage = useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
        if ((index + 1) <= pages.length) setIndex(index + 1)
        setResults(pages[(index - 1)])
    } , [index])

    const backPage = useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
        if ((index - 1) >= 0) setIndex(index - 1)
        setResults(pages[(index - 1)])
    } , [index])

    const setPage = useCallback((event: React.MouseEvent<HTMLAnchorElement>) => {
        setIndex(parseInt(event.currentTarget.id))
        setResults(pages[(index - 1)])
    } , [index])

    const onChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        const query = event.target.value
        setQuery(query)
        if(query.length) setResults(modpackFilter(querySearch(query, data)))
        else setResults(pages[(index -1)])
    }, [index])

    const onFocus = useCallback((event: React.FocusEvent<HTMLInputElement>) => {
        setPages(sliceIntoChunks(results, limit))
    }, [pages])

    const onBlur = useCallback((event: React.FocusEvent<HTMLInputElement>) => {
        setPages(sliceIntoChunks(data, limit))
    } ,[pages])

    /*
    useEffect(() => {
        setResults(pages[(index - 1)])
    }, [index])
    */

    var pagination = {
        1: { content: 1, color: '3f4549'},
        2: { content: 2, color: '3f4549'},
        3: { content: 3, color: '3f4549'},
        4: { content: 4, color: '3f4549'},
        5: { content: pages.length, color: '3f4549'},
        update: (index: number) => {
            if (index == 1) pagination[1].color = 'e5b276'
            if (index == 2) pagination[2].color = 'e5b276'
            if (index == 3) pagination[3].color = 'e5b276'
            if (index >= 4) {
                pagination[1].content = index - 2
                pagination[2].content = index - 1
                pagination[3].content = index
                pagination[4].content = index + 1
                pagination[3].color = 'e5b276'
            }
            if (index == pages.length) {
                pagination[3].color = '3f4549'
                pagination[5].color = 'e5b276'
                pagination[4].content = index - 1
                pagination[3].content = index - 2
                pagination[2].content = index - 3
                pagination[1].content = index - 4
            }
            if (index == (pages.length - 1)) {
                pagination[3].color = '3f4549'
                pagination[4].color = 'e5b276'
                pagination[4].content = index
                pagination[3].content = index - 1
                pagination[2].content = index - 2
                pagination[1].content = index - 3
            }
        }
    }

    const hasPage = (index: number) => {
        if (pages[(index - 1)] != undefined) return true
        return false
    }

    pagination.update(index)

    return (
        <>
            <CustomHead title='Search Mods - Modustry' description='' />
            <main className='mainmods text-white'>
                <div className="container">
                    <Navbar />
                    <section>
                        <div className="list-group list-group-flush scrollarea">
                            <input className='form-control rounded bg-dark text-white mb-2' type='search' placeholder="Search mods..." value={query} onChange={onChange} onFocus={onFocus} onBlur={onBlur} />
                            {results.map((value: Data, _index: number, _array: Data[]) => (
                                <>
                                    <ListElement value={value} key={value.name} />
                                </>
                            ))}
                        </div>
                        <nav className='my-4'>
                            <div className='d-flex justify-content-center'>
                                <button type='button' className='btn mx-2 c-3f4549' onClick={backPage}><b>{"<-"}</b></button> 

                                {hasPage(pagination[1].content) && (<a className={'btn rounded-circle mx-1 c-' + pagination[1].color} id={String(pagination[1].content)} onClick={setPage}>{pagination[1].content}</a>)}
                                {hasPage(pagination[2].content) && (<a className={'btn rounded-circle mx-1 c-' + pagination[2].color} id={String(pagination[2].content)} onClick={setPage}>{pagination[2].content}</a>)}
                                {hasPage(pagination[3].content) && (<a className={'btn rounded-circle mx-1 c-' + pagination[3].color} id={String(pagination[3].content)} onClick={setPage}>{pagination[3].content}</a>)}
                                {hasPage(pagination[4].content) && (<a className={'btn rounded-circle mx-1 c-' + pagination[4].color} id={String(pagination[4].content)} onClick={setPage}>{pagination[4].content}</a>)}
                                {hasPage(pagination[5].content) && (<a className={'btn rounded-circle mx-1 c-' + pagination[5].color} id={String(pagination[5].content)} onClick={setPage}>{pagination[5].content}</a>)}
                                
                                <button type='button' className='btn mx-2 c-3f4549' onClick={nextPage}><b>{"->"}</b></button>
                            </div>
                        </nav>
                    </section>
                </div>
            </main>
            <Footer />
        </>
    )
}

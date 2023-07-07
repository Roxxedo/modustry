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
import { versionList } from "@/lib/api/versions"
import { IObserver, Subject, subject } from "@/lib/observer"

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const versions = await versionList()
    const ssprops = getProps(ctx)
    const props = { data: (await ssprops).data, pageIndex: (await ssprops).pageIndex, limit: (await ssprops).limit, versions: versions }
    return { props }
}

export default function Mods({ data, pageIndex, limit, versions }: InferGetServerSidePropsType<typeof getServerSideProps>) {  
    const [index, setIndex] = useState(1)
    const [query, setQuery] = useState('')
    const [version, setVersion] = useState("Select...")
    const [perPage, setPerPage] = useState(20)
    const [pages, setPages] = useState<Data[][]>(sliceIntoChunks(data, perPage))
    const [results, setResults] = useState<Data[]>(pages[(index - 1)])

    /* PAGINATION */
    const setPage = useCallback((page: number) => {
        setIndex(page);
    }, [])

    /* SEARCH BAR */
    const onChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        const query = event.target.value
        setQuery(query)
        if(query.length) setResults(querySearch(query, data))
        else setResults(pages[(index -1)])
    }, [])

    const onFocus = useCallback(() => {
        setPages(sliceIntoChunks(results, limit))
    }, [])

    const onBlur = useCallback(() => {
        setPages(sliceIntoChunks(data, limit))
    }, [])

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

    /* CONTENT UPDATER */

    useEffect(() => {
        require("bootstrap/dist/js/bootstrap.bundle.min.js");
        setPages(sliceIntoChunks(data, perPage))
        setResults(pages[(index - 1)])
    }, []);

    pagination.update(index)

    return (
        <>
            <CustomHead title='Search Mods - Modustry' description='' />
            <main className='mainmods text-white'>
                <div className="container">
                    <Navbar />
                    <section>
                        <div className="list-group list-group-flush scrollarea">
                            <div className="d-flex p-2 bg-26292f rounded-4 mb-2 align-items-center">
                                <input 
                                    className='form-control rounded bg-dark text-white w-100' 
                                    style={{width: '70%'}} 
                                    type='search' 
                                    placeholder="Search mods..." 
                                    value={query} 
                                    onChange={onChange} 
                                    onFocus={onFocus} 
                                    onBlur={onBlur} 
                                />
                            </div>
                            {pages[(index - 1)].map((value: Data, _index: number, _array: Data[]) => (
                                <>
                                    <ListElement value={value} key={value.repo} />
                                </>
                            ))}
                        </div>
                        <nav className='my-4'>
                            <div className='d-flex justify-content-center'>
                                <button type='button' className='btn mx-2 c-3f4549' onClick={() => { setPage((index - 1)) }} disabled={index == 1}><b>{"<-"}</b></button> 

                                {hasPage(pagination[1].content) && (<a className={'btn rounded-circle mx-1 c-' + pagination[1].color} onClick={() => {setPage(pagination[1].content)}}>{pagination[1].content}</a>)}
                                {hasPage(pagination[2].content) && (<a className={'btn rounded-circle mx-1 c-' + pagination[2].color} onClick={() => {setPage(pagination[2].content)}}>{pagination[2].content}</a>)}
                                {hasPage(pagination[3].content) && (<a className={'btn rounded-circle mx-1 c-' + pagination[3].color} onClick={() => {setPage(pagination[3].content)}}>{pagination[3].content}</a>)}
                                {hasPage(pagination[4].content) && (<a className={'btn rounded-circle mx-1 c-' + pagination[4].color} onClick={() => {setPage(pagination[4].content)}}>{pagination[4].content}</a>)}
                                {hasPage(pagination[5].content) && (<a className={'btn rounded-circle mx-1 c-' + pagination[5].color} onClick={() => {setPage(pagination[5].content)}}>{pagination[5].content}</a>)}
                                
                                <button type='button' className='btn mx-2 c-3f4549' onClick={() => { setPage((index + 1)) }} disabled={index == pages.length}><b>{"->"}</b></button>
                            </div>
                        </nav>
                    </section>
                </div>
            </main>
            <Footer />
        </>
    )
}

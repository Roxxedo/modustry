import { Data } from "@/lib/types"
import { useCallback, useRef, useState } from "react"
import DefaultPage from "@/lib/default"
import { query as libQuery } from "@/lib/api/query"
import { sliceIntoChunks } from "@/lib/utils"

export type SearchInput = {
    data: Data[],
    manager: DefaultPage
}

export default function SearchBar({ data, manager }: SearchInput) {
    const searchRef = useRef(null)
    const [query, setQuery] = useState<string>("")
    const [results, setResults] = useState<Data[]>([])

    /* SEARCH BAR */
    const onChange = useCallback(async (event: React.ChangeEvent<HTMLInputElement>) => {
        const query = event.target.value;
        manager.setQuery(query)
        setQuery(query)
        if (query.length) manager.setResults(libQuery(data, query, manager.loader, manager.category, manager.version))
        else if (!query.length) manager.setResults(data)
        else manager.setResults([])
    }, [])

    const onChangePP = useCallback(async (event: React.ChangeEvent<HTMLSelectElement>) => {
        manager.setPerPage(Number(event.target.value))
    }, [])

    return (
        <>
            <div className="rounded-4 align-items-center search-bar">
                <input
                    className='form-control rounded bg-dark text-white w-100'
                    style={{ width: '70%' }}
                    type='text'
                    placeholder="Search mods..."
                    value={query}
                    onChange={onChange}
                    ref={searchRef}
                />
                {/* <div>
                    <span>Sort by</span>
                    <select>
                        <option value={'relevance'}>Relevance</option>
                        <option value={'downloads'}>Download Count</option>
                        <option value={'follows'}>Follow Count</option>
                        <option value={'published'}>Recently Published</option>
                        <option value={'updated'}>Recently Updated</option>
                    </select>
                </div> */}
                <div>
                    <span>Show per page</span>
                    <select defaultValue={20} onChange={onChangePP}>
                        <option value={5}>5</option>
                        <option value={10}>10</option>
                        <option value={15}>15</option>
                        <option value={20}>20</option>
                        <option value={50}>50</option>
                        <option value={100}>100</option>
                    </select>
                </div>
            </div>
        </>
    )
}
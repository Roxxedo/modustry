import CustomHead from "@/components/Head"
import DefaultPage, { getProps } from "@/lib/default"
import { Data } from "@/lib/types"
import { GetServerSideProps, InferGetServerSidePropsType } from "next"
import { useEffect } from "react"
import Navbar from "@/components/Navbar"
import ListElement from "@/components/lists/ModListElement"
import Pagination from "@/components/search/Pagination"
import SidebarFilters from "@/components/search/SidebarFilters"
import SearchBar from "@/components/search/SearchBar"
import { modpackFilter, modsFilter } from "@/lib/filter"
import SidebarModpacks from "@/components/search/SidebarModpacks"

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const props = await getProps(ctx)
    return { props }
}

export default function Mods({ data }: InferGetServerSidePropsType<typeof getServerSideProps>) {
    const data2 = modpackFilter(data)
    const manager = new DefaultPage(data2)

    useEffect(() => {
        manager.update()
    }, [manager.index]);

    return (
        <>
            <CustomHead title='Search Modpacks - Modustry' description='' />
            <main className="container">
                <Navbar />
                <section>
                    <SidebarFilters data={data} manager={manager} />
                    <div className="list-group list-group-flush scrollarea">
                        <SearchBar data={data2} manager={manager} />
                        {manager.results && manager.results.map((value: Data, index: number, _array: Data[]) => (
                            <>
                                {!manager.query && index < manager.perPage && <ListElement value={value} key={value.repo} />}
                                {manager.query && <ListElement value={value} key={value.repo} />}
                            </>
                        ))}
                        {!manager.results && <>
                            <div className="d-flex justify-content-center my-5">
                                <h2>No Results Found</h2>
                            </div>
                        </>}
                        {!manager.query && <Pagination manager={manager} />}
                    </div>
                </section>
            </main>
        </>
    )
}

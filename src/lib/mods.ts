import { GetServerSidePropsContext } from "next";
import { Data } from "@/lib/types";
import { sliceIntoChunks } from "@/lib/utils";

const API_URL = process.env.API_URL

export const getProps = async (ctx: GetServerSidePropsContext) => {
    const { q, page, limit } = ctx.query

    let query: string = "";
    if (q != undefined) query = q as string

    let rlimit: number = 20
    if (limit != undefined) rlimit = limit as unknown as number

    const res = await fetch(`${API_URL}/api/query?q=${query}`)
    const json: Data[] = await res.json()

    const pages: Data[][]= sliceIntoChunks(json, rlimit)
    let index: number = 0;
    if (page != undefined) index = page as unknown as number
    const data: Data[] = pages[index]

    var props = { data, index }
    return props
}
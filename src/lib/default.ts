import { GetServerSidePropsContext } from "next";
import { Data } from "@/lib/types";
import { sliceIntoChunks } from "@/lib/utils";

const API_URL = process.env.API_URL

export default async function getProps(ctx: GetServerSidePropsContext) {
    const { q, page, perPage } = ctx.query

    let query: string = "";
    if (q != undefined) query = q as string

    let limit: number = 20
    if (perPage != undefined) limit = perPage as unknown as number

    let pageIndex: number = 1
    if (page != undefined) pageIndex = page as unknown as number

    const res = await fetch(`${API_URL}/api/query?q=${query}`)
    const data: Data[] = await res.json()

    return { data, pageIndex, limit }
}
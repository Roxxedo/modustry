import { sliceIntoChunks } from "@/lib/utils";
import { GetServerSidePropsContext } from "next";
import { Data } from "@/lib/types";

const API_URL = process.env.API_URL

export const getProps = async (ctx: GetServerSidePropsContext) => {
    const { q, page, limit } = ctx.query

    let query: string = "";
    if (q != undefined) query = q as string

    const res = await fetch(`${API_URL}/api/query?q=${query}`)   
    const json: Data[] = await res.json()

    const result: Data[] = []
    for(var i in json) {
        if (json[i].name.toLowerCase().search("texture") > -1) {
            if (!result.includes(json[i])) {
                result.push(json[i])
            }
        }

        if (json[i].description.toLowerCase().search("texture") > -1) {
            if (!result.includes(json[i])) {
                result.push(json[i])
            }
        }

        if (json[i].name.toLowerCase().search("texturepack") > -1) {
            if (!result.includes(json[i])) {
                result.push(json[i])
            }
        }

        if (json[i].description.toLowerCase().search("texturepack") > -1) {
            if (!result.includes(json[i])) {
                result.push(json[i])
            }
        }
    }

    let rlimit: number = 20
    if (limit != undefined) rlimit = limit as unknown as number

    const pages: Data[][]= sliceIntoChunks(result, rlimit)
    let index: number = 0;
    if (page != undefined) index = page as unknown as number
    var data: Data[] = pages[index]
    if (data == undefined) data = []

    var props = { data, index }
    return props
}
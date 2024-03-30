import { UserData, Data, ServerType } from "@/lib/types";

const search = (value: string, term: string) => { return value.toLowerCase().search(term.toLowerCase()) > -1 }
export const isEmpty = (value: string) => { if (value !== "") return true; else return false }

export function query(data: Data[], query: string, loader: string, category: string, version: string) {
    var result: Data[] = []
    for (var item of data) {
        if (isEmpty(query)) {
            if (search(item.name, query) && !result.includes(item)) result.push(item)
            if (search(item.author, query) && !result.includes(item)) result.push(item)
            if (search(item.repo, query) && !result.includes(item)) result.push(item)
        }

        if (isEmpty(loader)) {
            if (loader == 'script' && item.hasScripts && !result.includes(item)) result.push(item)
            if (loader == 'java' && item.hasJava && !result.includes(item)) result.push(item)
        }
        
        if (isEmpty(category)) if (search(item.description, category) && !result.includes(item)) result.push(item)
        
        if (isEmpty(version)) if (item.minGameVersion == version && !result.includes(item)) result.push(item)
    }
    return result
}

export function queryServer(data: ServerType[], query: string) {
    var result: ServerType[] = []
    for (var item of data) {
        if (isEmpty(query)) {
            if (search(item.name, query) && !result.includes(item)) result.push(item)
        }
    }
    return result
}

export async function queryUser(query: string, data: Data[]) {
    var result: UserData[] = []
    var resultmap: string[] = []
    for (var i in data) {
        if (data[i].author.search(query as string) > -1) {
            const user = data[i].repo.split('/')[0]
            if (!resultmap.includes(user)) {
                const url = await fetch(`${process.env.API_URL}/api/users/${user}`)
                const json2 = await url.json()
                if (!result.includes(json2)) if (json2.error != 404) result.push(json2); resultmap.push(json2.username)
            }
        }
    }
    return { result, resultmap }
}
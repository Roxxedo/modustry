import { UserData, Data } from "@/lib/types";

export function query(query: String, data: Data[]) {
    var result: Data[] = []
    for (var i in data) {
        if (data[i].name.toLocaleLowerCase().search(query.toLowerCase() as string) > -1) {
            if (!result.includes(data[i])) {
                result.push(data[i])
            }
        }

        if (data[i].author.toLocaleLowerCase().search(query.toLowerCase() as string) > -1) {
            if (!result.includes(data[i])) {
                result.push(data[i])
            }
        }

        if (data[i].repo.toLocaleLowerCase().search(query.toLowerCase() as string) > -1) {
            if (!result.includes(data[i])) {
                result.push(data[i])
            }
        }
    }
    return result
}

export async function queryUser(query: String, data: Data[]) {
    var result: UserData[] = []
    var resultmap: string[] = []
    for (var i in data) {
        if (data[i].author.search(query as string) > -1) {
            const user = data[i].repo.split('/')[0]
            if (!resultmap.includes(user)) {
                const url = await fetch(`${process.env.API_URL}/api/users/${user}`)
                const json2 = await url.json() 
                if (!result.includes(json2)) if(json2.error != 404) result.push(json2); resultmap.push(json2.username)
            }
        }
    }
    return { result, resultmap }
}
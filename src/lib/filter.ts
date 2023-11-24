import { Data } from "@/lib/types";

const search = (value: string, term: string) => { return value.toLowerCase().search(term.toLowerCase()) > -1 }

export function modsFilter(data: Data[]) {
    var result: Data[] = data
    for (var item of data) {
        if (search(item.name, "texture") && result.includes(item)) result.splice(result.indexOf(item), 1)
        if (search(item.description, "texture") && result.includes(item)) result.splice(result.indexOf(item), 1)
        if (search(item.name, "texturepack") && result.includes(item)) result.splice(result.indexOf(item), 1)
        if (search(item.description, "texturepack") && result.includes(item)) result.splice(result.indexOf(item), 1)

        if (search(item.name, "modpack") && result.includes(item)) result.splice(result.indexOf(item), 1)
        if (search(item.description, "modpack") && result.includes(item)) result.splice(result.indexOf(item), 1)
    }
    return result
}

export function textureFilter(data: Data[]) {
    var result: Data[] = []
    for (var item of data) {
        if (search(item.name, "texture") && !result.includes(item)) result.push(item)
        if (search(item.description, "texture") && !result.includes(item)) result.push(item)
        if (search(item.name, "texturepack") && !result.includes(item)) result.push(item)
        if (search(item.description, "texturepack") && !result.includes(item)) result.push(item)
    }
    return result
}

export function modpackFilter(data: Data[]) {
    var result: Data[] = []
    for(var item of data) {
        if (search(item.name, "modpack") && !result.includes(item)) result.push(item)
        if (search(item.description, "modpack") && !result.includes(item)) result.push(item)
    }
    return result
}
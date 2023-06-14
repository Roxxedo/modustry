import { Data } from "@/lib/types";

export function textureFilter(data: Data[]) {
    var result: Data[] = []
    for (var i in data) {
        if (data[i].name.toLowerCase().search("texture") > -1) {
            if (!result.includes(data[i])) {
                result.push(data[i])
            }
        }

        if (data[i].description.toLowerCase().search("texture") > -1) {
            if (!result.includes(data[i])) {
                result.push(data[i])
            }
        }

        if (data[i].name.toLowerCase().search("texturepack") > -1) {
            if (!result.includes(data[i])) {
                result.push(data[i])
            }
        }

        if (data[i].description.toLowerCase().search("texturepack") > -1) {
            if (!result.includes(data[i])) {
                result.push(data[i])
            }
        }
    }
    return result
}

export function modpackFilter(data: Data[]) {
    var result: Data[] = []
    for(var i in data) {
        if (data[i].name.toLowerCase().search("modpack") > -1) {
            if (!result.includes(data[i])) {
                result.push(data[i])
            }
        }

        if (data[i].description.toLowerCase().search("modpack") > -1) {
            if (!result.includes(data[i])) {
                result.push(data[i])
            }
        }
    }
    return result
}

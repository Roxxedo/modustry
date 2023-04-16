import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    repo: string,
    name: string,
    author: string,
    lastUpdated: string,
    stars: number,
    minGameVersion: string,
    hasScripts: boolean,
    hasJava: boolean,
    description: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data[]>
) {
    const mods = await fetch('https://raw.githubusercontent.com/Anuken/MindustryMods/master/mods.json')
    const json: Data[] = await mods.json()

    const { version, q } = req.query

    var result: Data[] = []
    for (var i in json) {
        if (json[i].name.search(q as string) > -1) {
            if (!result.includes(json[i])) {
                result.push(json[i])
            }
        }

        if (json[i].author.search(q as string) > -1) {
            if (!result.includes(json[i])) {
                result.push(json[i])
            }
        }

        if (json[i].repo.search(q as string) > -1) {
            if (!result.includes(json[i])) {
                result.push(json[i])
            }
        }

        if (json[i].minGameVersion == version) {
            if (!result.includes(json[i])) {
                result.push(json[i])
            }
        }
    }

    res.send(result)
}